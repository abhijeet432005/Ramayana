// Immersive Indian soundscape, synthesized live with WebAudio (no audio files).
//
//  depth     every instrument sits on its own "bus" with its own distance: low-pass (air absorption),
//            stereo position, dry level and sends into a long convolution hall + a ping-pong delay.
//  voices    tanpura (soft, warm) · bansuri flute (slow, gentle, raga per chapter) · soft pad
//            · distant temple bells · quiet wind / water / birds. No percussion, nothing sudden.
//  motion    scroll speed only breathes a little more air into the wind.
//
// API: start() on a user gesture · enter(chapterIndex, rootHz) · setEnergy(0..1) · toggleSound()

const JI = { S: 1, r: 16 / 15, R: 9 / 8, g: 6 / 5, G: 5 / 4, m: 4 / 3, M: 45 / 32, P: 3 / 2, d: 8 / 5, D: 5 / 3, n: 9 / 5, N: 15 / 8 } as const;
const sc = (s: string) => s.split(" ").map(k => JI[k as keyof typeof JI]);
const RAGA = {
  yaman: sc("S R G M P D N"), bhairavi: sc("S r g m P d n"), todi: sc("S r g M P d N"),
  bilawal: sc("S R G m P D N"), kafi: sc("S R g m P D n"), bhairav: sc("S r G m P d N"), bhupali: sc("S R G P D"),
};

type Mood = { scale: number[]; flute: number; wind: number; bells: "arp" | "cascade" | "none"; pulse?: number };
const MOODS: Mood[] = [
  { scale: RAGA.yaman,    flute: .8, wind: .008, bells: "arp" }, // birth
  { scale: RAGA.bhairavi, flute: .7, wind: .010, bells: "arp" }, // exile
  { scale: RAGA.todi,     flute: .7, wind: .009, bells: "arp" }, // golden deer
  { scale: RAGA.bilawal,  flute: .8, wind: .008, bells: "arp" }, // hanuman
  { scale: RAGA.kafi,     flute: .8, wind: .010, bells: "arp" }, // bridge
  { scale: RAGA.bhairav,  flute: .6, wind: .011, bells: "none" }, // war (kept calm)
  { scale: RAGA.yaman,    flute: .8, wind: .007, bells: "cascade" }, // return
  { scale: RAGA.bhupali,  flute: .75, wind: .008, bells: "arp", pulse: 10 }, // hanuman: serene, devotional
];

type Bus = { inp: GainNode; lp: BiquadFilterNode; pan: StereoPannerNode; dry: GainNode; rv: GainNode };
type Graph = {
  master: GainNode; rev: GainNode; dly: GainNode; noise: AudioBuffer;
  tan: Bus; flute: Bus; dhol: Bus; mani: Bus; ghun: Bus; bell: Bus;
  sea: GainNode; pad: OscillatorNode[]; wind: { bp: BiquadFilterNode[]; g: GainNode }; wave: { tan: PeriodicWave; flute: PeriodicWave };
};
const BASE = { tan: { rev: .30 }, flute: { rev: .6 }, dhol: { dry: .28 } };

let c: AudioContext | null = null, G: Graph | null = null, timer = 0, vis: (() => void) | null = null;
let mood = MOODS[0], root = 110, energy = 0, lastE = 0, on = true;

/* ---------- playlist ----------
   "default" = the live generative soundscape above; song1..3 = recorded tracks in /public/audio; "off" = silence.
   Recorded tracks use plain <audio> elements (streamed, looped, cross-faded), the soundscape is simply muted while one plays. */
export type TrackId = "default" | "song1" | "song2" | "song3" | "off";
export const TRACKS: { id: TrackId; label: string; sub: string; len?: string; src?: string }[] = [
  { id: "default", label: "Default", sub: "Tanpura & bansuri · live soundscape" },
  { id: "song1", label: "Song 1", sub: "Devotional", len: "3:19", src: "/audio/song1.mp3" },
  { id: "song2", label: "Song 2", sub: "Ram chants · meditation", len: "20:52", src: "/audio/song2.mp3" },
  { id: "song3", label: "Song 3", sub: "Ram Siya Ram", len: "4:10", src: "/audio/song3.mp3" },
  { id: "off", label: "Off", sub: "Silence" },
];
const SONG_VOL = .85;
let track: TrackId = "default", loading = false;
const els: Partial<Record<TrackId, HTMLAudioElement>> = {};
const subs = new Set<() => void>();
const emit = () => subs.forEach(f => f());
const fades = new Map<HTMLAudioElement, number>();
function fade(el: HTMLAudioElement, to: number, ms: number, done?: () => void) {
  const prev = fades.get(el); if (prev) cancelAnimationFrame(prev);
  const from = el.volume, t0 = performance.now();
  const step = (t: number) => {
    const k = Math.min(1, (t - t0) / ms); el.volume = clamp(from + (to - from) * (k * k * (3 - 2 * k)), 0, 1);
    if (k < 1) fades.set(el, requestAnimationFrame(step)); else { fades.delete(el); done?.(); }
  };
  fades.set(el, requestAnimationFrame(step));
}
function songEl(id: TrackId) {
  const def = TRACKS.find(t => t.id === id); if (!def?.src) return null;
  let el = els[id];
  if (!el) {
    el = new Audio(); el.src = def.src; el.loop = true; el.preload = "none"; el.volume = 0;
    el.addEventListener("waiting", () => { if (track === id) { loading = true; emit(); } });
    el.addEventListener("playing", () => { if (loading && track === id) { loading = false; emit(); } });
    els[id] = el;
  }
  return el;
}
let amb = "none", nextAmb = 0;
let nextPulse = 0, nextTan = 0, tanI = 0, nextFlute = 0, phrase = 0, fIdx = 0, fPrev = 0;

const rnd = (a = 1) => Math.random() * a;
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

function env(g: GainNode, t: number, peak: number, a: number, d: number) {
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(Math.max(peak, 0.0002), t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
}

function makeImpulse(ctx: AudioContext, secs: number) {
  const n = Math.floor(ctx.sampleRate * secs), b = ctx.createBuffer(2, n, ctx.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const d = b.getChannelData(ch); let z = 0;
    for (let i = 0; i < n; i++) { const t = i / n; z += ((Math.random() * 2 - 1) * Math.pow(1 - t, 2.6) - z) * (0.9 - 0.78 * t); d[i] = z * (i < 900 ? i / 900 : 1); } // darker & softer as it decays
  }
  return b;
}

function bus(ctx: AudioContext, g: { master: GainNode; rev: GainNode; dly: GainNode }, o: { pan: number; lp: number; dry: number; rev: number; dly: number }): Bus {
  const inp = ctx.createGain(), lp = ctx.createBiquadFilter(), pan = ctx.createStereoPanner(), dry = ctx.createGain(), rv = ctx.createGain(), dl = ctx.createGain();
  lp.type = "lowpass"; lp.frequency.value = o.lp; pan.pan.value = o.pan; dry.gain.value = o.dry; rv.gain.value = o.rev; dl.gain.value = o.dly;
  inp.connect(lp); lp.connect(pan); pan.connect(dry); dry.connect(g.master); pan.connect(rv); rv.connect(g.rev); pan.connect(dl); dl.connect(g.dly);
  return { inp, lp, pan, dry, rv };
}

function build(ctx: AudioContext): Graph {
  const master = ctx.createGain(); master.gain.value = 0;
  const air = ctx.createBiquadFilter(); air.type = "lowpass"; air.frequency.value = 7000;
  const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -20; comp.knee.value = 20; comp.ratio.value = 3; comp.attack.value = .03; comp.release.value = .5;
  master.connect(air); air.connect(comp); comp.connect(ctx.destination);

  // hall reverb: pre-delay -> convolution -> high-pass so the tail never gets muddy
  const rev = ctx.createGain(), pre = ctx.createDelay(.2), conv = ctx.createConvolver(), rhp = ctx.createBiquadFilter(), wet = ctx.createGain();
  pre.delayTime.value = .038; conv.buffer = makeImpulse(ctx, 5); rhp.type = "highpass"; rhp.frequency.value = 160; wet.gain.value = .9;
  rev.connect(pre); pre.connect(conv); conv.connect(rhp); rhp.connect(wet); wet.connect(master);

  // ping-pong echo that widens the image
  const dly = ctx.createGain(), dL = ctx.createDelay(2), dR = ctx.createDelay(2), f1 = ctx.createGain(), f2 = ctx.createGain(), pL = ctx.createStereoPanner(), pR = ctx.createStereoPanner(), dlp = ctx.createBiquadFilter(), dout = ctx.createGain();
  dL.delayTime.value = .37; dR.delayTime.value = .37; f1.gain.value = .3; f2.gain.value = .3; pL.pan.value = -.75; pR.pan.value = .75; dlp.type = "lowpass"; dlp.frequency.value = 1800; dout.gain.value = .4;
  dly.connect(dL); dL.connect(f1); f1.connect(dR); dR.connect(f2); f2.connect(dL); dL.connect(pL); dR.connect(pR); pL.connect(dlp); pR.connect(dlp); dlp.connect(dout); dout.connect(master); dout.connect(rev);

  const base = { master, rev, dly };
  const tan = bus(ctx, base, { pan: 0, lp: 3200, dry: 1.0, rev: .5, dly: .03 });
  const flute = bus(ctx, base, { pan: 0, lp: 3000, dry: .55, rev: BASE.flute.rev, dly: .18 });
  const dhol = bus(ctx, base, { pan: 0, lp: 1800, dry: BASE.dhol.dry, rev: .6, dly: .1 });
  const mani = bus(ctx, base, { pan: .45, lp: 7000, dry: .22, rev: .5, dly: .3 });
  const ghun = bus(ctx, base, { pan: -.55, lp: 7000, dry: .2, rev: .5, dly: .22 });
  const bell = bus(ctx, base, { pan: 0, lp: 4800, dry: .22, rev: 1.0, dly: .25 });

  // flute drifts slowly across the stage
  const lfo = ctx.createOscillator(), lg = ctx.createGain(); lfo.frequency.value = .07; lg.gain.value = .4; lfo.connect(lg); lg.connect(flute.pan.pan); lfo.start();

  const noise = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate), nd = noise.getChannelData(0); for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;

  // pad: root + fifth + sub, very soft, sits under the tanpura
  const padLP = ctx.createBiquadFilter(), padG = ctx.createGain(); padLP.type = "lowpass"; padLP.frequency.value = 520; padG.gain.value = .065;
  const pad = ([["sine", 1], ["sine", 1.5], ["triangle", .5]] as [OscillatorType, number][]).map(([ty, m]) => { const o = ctx.createOscillator(); o.type = ty; o.frequency.value = 110 * m; o.detune.value = rnd(8) - 4; o.connect(padLP); o.start(); return o; });
  padLP.connect(padG); padG.connect(tan.inp);

  // wind: two decorrelated noise streams panned apart
  const wg = ctx.createGain(); wg.gain.value = .012; const bp: BiquadFilterNode[] = [];
  [-.8, .8].forEach(p => { const s = ctx.createBufferSource(); s.buffer = noise; s.loop = true; const f = ctx.createBiquadFilter(); f.type = "bandpass"; f.frequency.value = 380; f.Q.value = .5; const pn = ctx.createStereoPanner(); pn.pan.value = p; s.connect(f); f.connect(pn); pn.connect(wg); s.start(0, rnd(1)); bp.push(f); });
  const wlp = ctx.createBiquadFilter(); wlp.type = "lowpass"; wlp.frequency.value = 1100; wg.connect(wlp); wlp.connect(dhol.rv); wlp.connect(master);

  // sea / river: slow-breathing filtered noise
  const sea = ctx.createGain(), sl = ctx.createBiquadFilter(), ss = ctx.createBufferSource(), sgo = ctx.createOscillator(), sg = ctx.createGain();
  sea.gain.value = 0; sl.type = "lowpass"; sl.frequency.value = 700; ss.buffer = noise; ss.loop = true; ss.connect(sl); sl.connect(sea); sea.connect(master); sea.connect(rev); ss.start(0, rnd(1));
  sgo.frequency.value = .11; sg.gain.value = .02; sgo.connect(sg); sg.connect(sea.gain); sgo.start();

  // tanpura = rich harmonics (jivari buzz lives around the 4th-9th partials); bansuri = breathy, few harmonics
  const tr = new Float32Array(30), ti = new Float32Array(30); for (let n = 1; n < 30; n++) ti[n] = (1 / Math.pow(n, .85)) * (n >= 3 && n <= 9 ? 1.7 : 1);
  const fr = new Float32Array(8), fi = new Float32Array([0, 1, .34, .13, .06, .03, .015, .008]);
  return { master, rev, dly, noise, sea, tan, flute, dhol, mani, ghun, bell, pad, wind: { bp, g: wg }, wave: { tan: ctx.createPeriodicWave(tr, ti), flute: ctx.createPeriodicWave(fr, fi) } };
}

/* ---------- voices ---------- */
function burst(t: number, dur: number, type: BiquadFilterType, freq: number, q: number, gain: number, dest: AudioNode) {
  const C = c!, s = C.createBufferSource(), f = C.createBiquadFilter(), g = C.createGain();
  s.buffer = G!.noise; f.type = type; f.frequency.value = freq; f.Q.value = q; env(g, t, gain, .002, dur);
  s.connect(f); f.connect(g); g.connect(dest); s.start(t, rnd(1.5), dur + .05);
}

function bell(t: number, f: number, v: number) {
  const C = c!, P: [number, number, number][] = [[1, 1, 7], [2, .5, 4.5], [2.76, .6, 4], [4.07, .3, 2.8], [5.4, .2, 2.2], [6.81, .1, 1.6]];
  G!.bell.pan.pan.setValueAtTime(rnd(1.2) - .6, t);
  P.forEach(([r, a, d]) => { if (f * r > 12000) return; const o = C.createOscillator(), g = C.createGain(); o.frequency.value = f * r; env(g, t, .05 * v * a, .03, d); o.connect(g); g.connect(G!.bell.inp); o.start(t); o.stop(t + d + .1); });
}
function tanpura(t: number) {
  const C = c!, f = [root * .75, root, root, root * .5][tanI % 4];
  [-1.2, 1.2].forEach(dt => {
    const o = C.createOscillator(), g = C.createGain(), lp = C.createBiquadFilter();
    o.setPeriodicWave(G!.wave.tan); o.frequency.value = f; o.detune.value = dt;
    lp.type = "lowpass"; lp.Q.value = 1.4; lp.frequency.setValueAtTime(2200, t); lp.frequency.exponentialRampToValueAtTime(500, t + 3.5); // the overtone "sweep" of a real tanpura
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(tanI % 4 === 3 ? .045 : .06, t + .06); g.gain.exponentialRampToValueAtTime(.0001, t + 7.5);
    o.connect(lp); lp.connect(g); g.connect(G!.tan.inp); o.start(t); o.stop(t + 7.6);
  });
}
function flute(t: number, f: number, dur: number, v: number, from: number) {
  const C = c!, o = C.createOscillator(), g = C.createGain(), lfo = C.createOscillator(), lg = C.createGain();
  o.setPeriodicWave(G!.wave.flute); o.frequency.setValueAtTime(from || f, t); o.frequency.setTargetAtTime(f, t, .18); // meend: glide into the note
  lfo.frequency.value = 5.1 + rnd(.6); lg.gain.setValueAtTime(0, t); lg.gain.linearRampToValueAtTime(f * .003, t + Math.min(.9, dur * .6)); lfo.connect(lg); lg.connect(o.frequency);
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(v, t + .45); g.gain.setValueAtTime(v * .9, t + Math.max(.5, dur - .1)); g.gain.setTargetAtTime(0, t + dur, .45);
  o.connect(g); g.connect(G!.flute.inp); o.start(t); lfo.start(t); o.stop(t + dur + 2.5); lfo.stop(t + dur + 2.5);
  burst(t, dur * .9, "bandpass", f * 2, 3, .008, G!.flute.inp); // breath
}

function chirp(t: number) { // a small bird, somewhere in the stereo field
  const C = c!, p = C.createStereoPanner(); p.pan.value = rnd(1.6) - .8; p.connect(G!.master); p.connect(G!.rev);
  const base = 2600 + rnd(1800), n = 2 + Math.floor(rnd(3));
  for (let k = 0; k < n; k++) { const o = C.createOscillator(), g = C.createGain(), s = t + k * .11; o.frequency.setValueAtTime(base * (1 + rnd(.2)), s); o.frequency.exponentialRampToValueAtTime(base * (.7 + rnd(.5)), s + .08); env(g, s, .008, .03, .09); o.connect(g); g.connect(p); o.start(s); o.stop(s + .12); }
}

/* ---------- sequencer ---------- */
const degFreq = (i: number) => { const n = mood.scale.length; return root * 4 * mood.scale[i % n] * Math.pow(2, Math.floor(i / n)); };

function tick() {
  if (!c || !G || c.state !== "running") return;
  const now = c.currentTime, ahead = now + .14;
  if (mood.pulse) while (nextPulse < ahead) { bell(nextPulse, root * 2, .5); nextPulse += mood.pulse; } // a distant temple bell, like an aarti
  while (nextTan < ahead) { tanpura(nextTan); nextTan += tanI++ % 4 === 3 ? 2.3 : 1.7; }
  while (nextAmb < ahead) {
    if (amb === "birds") { chirp(nextAmb); nextAmb += 4 + rnd(9); }
    else if (amb === "fire") { burst(nextAmb, .02 + rnd(.02), "highpass", 1800 + rnd(1500), .8, .006 + rnd(.01), G.mani.inp); nextAmb += .12 + rnd(.7); }
    else nextAmb += .5;
  }
  if (mood.flute > 0) while (nextFlute < ahead) {
    if (phrase <= 0) { phrase = 2 + Math.floor(rnd(3)); fIdx = [0, 2, 4, 7][Math.floor(rnd(4))]; fPrev = 0; }
    const last = phrase === 1, to = clamp(fIdx + [-1, -1, 0, 1, 1][Math.floor(rnd(5))], 0, 8), idx = last ? [0, 4, 7][Math.floor(rnd(3))] : to;
    const dur = (last ? 4 : 1.8 + rnd(1.6)) / (.65 + .35 * mood.flute), f = degFreq(idx);
    flute(nextFlute, f, dur, .10 + .04 * mood.flute, fPrev); fPrev = f; fIdx = idx; phrase--;
    nextFlute += dur * .9 + (last ? (5 + rnd(5)) / mood.flute : .3 + rnd(.6));
  }
}

export const audio = {
  get soundOn() { return track !== "off"; },
  get track() { return track; },
  get loading() { return loading; },
  subscribe(f: () => void) { subs.add(f); return () => { subs.delete(f); }; },
  // choose what plays: the live soundscape, a recorded song, or silence. Must be called from a click (autoplay rules).
  select(id: TrackId) {
    if (id === track) return;
    const prev = track; track = id; loading = false;
    // leaving a song: fade it out, then pause (and rewind nothing: it resumes where it was)
    const pe = els[prev]; if (pe) fade(pe, 0, 900, () => { if (track !== prev) pe.pause(); });
    // the soundscape is audible only on "default"
    on = id === "default"; if (c && G) G.master.gain.setTargetAtTime(on ? .7 : 0, c.currentTime, .8);
    const el = songEl(id);
    if (el) {
      loading = el.readyState < 3; emit();
      el.play().then(() => fade(el, SONG_VOL, 1400)).catch(() => { if (track === id) { track = "default"; on = true; loading = false; if (c && G) G.master.gain.setTargetAtTime(.7, c.currentTime, .8); emit(); } });
    }
    emit();
  },
  start() {
    if (c) return;
    c = new AudioContext(); G = build(c); void c.resume();
    const t = c.currentTime + .15; nextTan = t; nextFlute = t + 6; tanI = 0; phrase = 0;
    G.master.gain.setTargetAtTime(on ? .7 : 0, t, 4);
    timer = window.setInterval(tick, 25);
    vis = () => {
      if (!c) return; const el = els[track], song = el && track !== "default" && track !== "off";
      if (document.hidden) { void c.suspend(); el?.pause(); return; }
      if (song) void el!.play().catch(() => {});
      void c.resume().then(() => { const n = c!.currentTime + .1; nextTan = n; nextFlute = n + 1; });
    };
    document.addEventListener("visibilitychange", vis);
  },
  // called when a chapter becomes active: re-tunes everything and plays a short arrival gesture
  enter(i: number, rootHz: number, ambience = "none") {
    if (!c || !G) return;
    const t = c.currentTime; mood = MOODS[clamp(i, 0, MOODS.length - 1)]; root = rootHz; phrase = 0; nextFlute = Math.max(nextFlute, t + 1.6); nextPulse = Math.max(nextPulse, t + 4);
    [1, 1.5, .5].forEach((m, k) => G!.pad[k].frequency.setTargetAtTime(root * m, t, 1.6));
    G.wind.g.gain.setTargetAtTime(mood.wind * (1 + 1.2 * energy), t, 2.5);
    amb = ambience; nextAmb = Math.max(nextAmb, t + .5); G.sea.gain.setTargetAtTime(ambience === "water" ? .035 : 0, t, 3);
    if (ambience === "wind") G.wind.g.gain.setTargetAtTime(mood.wind * 1.8 * (1 + 1.2 * energy), t, 2.5);
    if (mood.bells === "arp") [1, 1.5, 2].forEach((m, k) => bell(t + .8 + k * 1.1, root * 4 * m, .45));
    if (mood.bells === "cascade") for (let k = 0; k < 6; k++) bell(t + .8 + k * 1.3 + rnd(.4), root * 4 * [1, 9 / 8, 5 / 4, 3 / 2, 5 / 3][Math.floor(rnd(5))], .3 + rnd(.15)); // a million lamps
  },
  // 0..1, fed from scroll speed: just a little more air in the wind
  setEnergy(e: number) {
    if (!c || !G) return; const t = c.currentTime; if (t - lastE < .12) return; lastE = t; energy = clamp(e, 0, 1);
    G.wind.g.gain.setTargetAtTime(mood.wind * (1 + 1.2 * energy), t, 1.2);
    G.wind.bp.forEach(b => b.frequency.setTargetAtTime(380 + 400 * energy, t, 1.2));
  },
  toggleSound() { this.select(track === "off" ? "default" : "off"); },
  stop() { Object.values(els).forEach(e => e?.pause()); clearInterval(timer); if (vis) document.removeEventListener("visibilitychange", vis); if (c) void c.close(); c = null; G = null; },
};
