"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Scene from "./Scene";
import JourneyPath from "./JourneyPath";
import ChapterMenu from "./ChapterMenu";
import Mandala from "./Mandala";
import Sun from "./Sun";
import SoundMenu from "./SoundMenu";
import { chapters, HAN_START, BOOKS, isPhoto } from "@/lib/story";
import { audio } from "@/lib/audio";

gsap.registerPlugin(ScrollTrigger);
const split = (s: string) => s.split(" ").map((w, i) => <span className="mask" key={i}><span className="w">{w}&nbsp;</span></span>);
const GRAT = [["धन्यवाद, धरती माँ।","Thank you, Mother Earth."],["इस साँस के लिए आभार।","Grateful for this breath."],["जल, वायु और प्रकाश के लिए धन्यवाद।","Thank you for water, wind and light."],["माता-पिता और गुरुजनों को प्रणाम।","Gratitude to our parents and teachers."],["सबके सुख और शांति की प्रार्थना।","May all beings be happy and at peace."]];
const svg = (d: React.ReactNode) => <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>{d}</svg>;
const ICON = {
  menu: svg(<><path d="M4 7h16M4 12h16M4 17h10" /></>),
  play: svg(<><path d="M8 5l11 7-11 7z" /></>), pause: svg(<><path d="M8 5v14M16 5v14" /></>),
  full: svg(<><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></>),
};
const mix = (a: number[], b: number[], k: number) => a.map((v, i) => Math.round(v + (b[i] - v) * k));
const WIND = Array.from({ length: 16 }, (_, i) => ({ top: (i * 37) % 92 + 4, w: 14 + (i * 13) % 26, d: 6 + (i * 7) % 9, delay: -((i * 5) % 11) }));
const pad = (n: number) => String(n).padStart(2, "0");

export default function Story() {
  const [started, setStarted] = useState(false), [ready, setReady] = useState(false);
  const [chapter, setChapter] = useState(0);
  const [gi, setGi] = useState(0), [small, setSmall] = useState(false);
  const [menu, setMenu] = useState(false), [auto, setAuto] = useState(false), [full, setFull] = useState(false), [at, setAt] = useState(false), [noGL, setNoGL] = useState(false), [glChecked, setGlChecked] = useState(false);
  const vel = useRef(0), chapterRef = useRef(-1), theme = useRef(0);
  const book = chapters[chapter].book ?? "ram", bk = BOOKS[book];
  const root = useRef<HTMLDivElement>(null), bar = useRef<HTMLDivElement>(null), progress = useRef(0);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => { document.documentElement.style.setProperty("--accent", chapters[chapter].accent); }, [chapter]);
  useEffect(() => { const f = () => setSmall(innerWidth < 1100); f(); addEventListener("resize", f); return () => removeEventListener("resize", f); }, []);
  useEffect(() => { const t = setInterval(() => setGi(v => (v + 1) % GRAT.length), 3400); return () => clearInterval(t); }, []);
  useEffect(() => { document.documentElement.classList.toggle("locked", !started); }, [started]);
  useEffect(() => {
    // never leave the visitor stuck on the loader: no WebGL -> flat SVG art; slow network -> enter anyway
    let ok = false;
    try { const cv = document.createElement("canvas"); ok = !!(cv.getContext("webgl2") || cv.getContext("webgl")); } catch { ok = false; }
    if (!ok) { setNoGL(true); setReady(true); }
    setGlChecked(true);
    const t = setTimeout(() => setReady(true), 8000); return () => clearTimeout(t);
  }, []);
  useEffect(() => { const f = () => setFull(!!document.fullscreenElement); document.addEventListener("fullscreenchange", f); return () => document.removeEventListener("fullscreenchange", f); }, []);
  // Keep every chapter's text inside the safe band (below the HUD, above the journey path) on any screen height.
  useEffect(() => {
    let raf = 0;
    const fit = () => {
      const root = document.documentElement, txts = Array.from(document.querySelectorAll<HTMLElement>(".chapter .txt"));
      if (!txts.length) return;
      const avail = innerHeight - 96 - 150 - 14; let f = 1;
      for (let k = 0; k < 6; k++) {
        root.style.setProperty("--fit", f.toFixed(3));
        const h = Math.max(...txts.map(t => t.offsetHeight));
        if (h <= avail || f <= .6) break;
        f = Math.max(.6, f * (avail / h) * .985);
      }
    };
    const run = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(fit); };
    run(); void document.fonts?.ready.then(run); addEventListener("resize", run);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", run); };
  }, []);

  useEffect(() => { const L = lenisRef.current; if (menu) L?.stop(); else L?.start(); }, [menu]);
  useEffect(() => { document.documentElement.classList.toggle("entered", started); }, [started]);

  // glides to a chapter; the duration scales with distance, and "slow" is used for the Ramayana -> Hanuman crossing
  const goTo = (i: number, slow = false) => {
    const el = document.getElementById(`c${i}`), L = lenisRef.current; if (!el || !L) return;
    const target = el.offsetLeft + el.offsetWidth / 2 - innerWidth / 2, d = Math.abs(target - L.scroll) / innerWidth;
    L.scrollTo(target, { duration: slow ? 9 : Math.min(8, Math.max(2, d * .9)), easing: (t: number) => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2) });
  };
  const toggleFull = () => { if (document.fullscreenElement) void document.exitFullscreen(); else void document.documentElement.requestFullscreen?.().catch(() => {}); };

  // auto-tour: glides chapter to chapter, stops the moment the visitor takes over
  useEffect(() => {
    if (!auto || !started) return;
    const stop = () => setAuto(false);
    const step = () => { const n = chapterRef.current + 1; if (n >= chapters.length) { const L = lenisRef.current; if (L) L.scrollTo(L.limit, { duration: 4 }); setAuto(false); } else goTo(n, n === HAN_START); };
    const first = setTimeout(step, 900), t = setInterval(step, 18000);
    addEventListener("wheel", stop, { passive: true }); addEventListener("touchstart", stop, { passive: true });
    return () => { clearTimeout(first); clearInterval(t); removeEventListener("wheel", stop); removeEventListener("touchstart", stop); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auto, started]);

  // custom cursor (quickTo = no per-event tween allocation)
  useEffect(() => {
    const cur = document.querySelector<HTMLElement>(".cursor")!;
    const x = gsap.quickTo(cur, "x", { duration: .35, ease: "power3" }), y = gsap.quickTo(cur, "y", { duration: .35, ease: "power3" });
    const mv = (e: PointerEvent) => { x(e.clientX); y(e.clientY); };
    const ov = (e: PointerEvent) => cur.classList.toggle("big", !!(e.target as HTMLElement).closest("[data-gl]"));
    addEventListener("pointermove", mv, { passive: true }); addEventListener("pointerover", ov, { passive: true });
    return () => { removeEventListener("pointermove", mv); removeEventListener("pointerover", ov); };
  }, []);

  useEffect(() => {
    if (!started) return;
    // Horizontal Lenis: vertical wheel / trackpad / touch all drive the horizontal axis.
    const lenis = new Lenis({ orientation: "horizontal", gestureOrientation: "both", lerp: 0.075, wheelMultiplier: 0.95, touchMultiplier: 1.6, smoothWheel: true, autoRaf: false });
    lenisRef.current = lenis;
    lenis.on("scroll", (l: Lenis) => {
      ScrollTrigger.update(); progress.current = l.progress;
      const br = document.getElementById("bridge");
      if (br) { const s0 = br.offsetLeft - innerWidth * .6, s1 = br.offsetLeft + br.offsetWidth * .45 - innerWidth * .5; let k = Math.min(1, Math.max(0, (l.scroll - s0) / (s1 - s0))); k = k * k * (3 - 2 * k);
        if (Math.abs(k - theme.current) > .002) { theme.current = k; const r = document.documentElement.style, ink = mix([22, 18, 58], [246, 231, 208], k);
          if (noGL) r.setProperty("--bg", `rgb(${mix([241, 224, 198], [24, 12, 34], k)})`); r.setProperty("--ink", `rgb(${ink})`); r.setProperty("--mute", `rgba(${ink},.68)`); r.setProperty("--line", `rgba(${ink},.2)`); } }
      const c0 = document.getElementById("c0"); if (c0) setAt(l.scroll > c0.offsetLeft - innerWidth * .6);
      if (bar.current) bar.current.style.transform = `scaleX(${l.progress})`;
    });
    // Lenis runs FIRST in the shared gsap ticker (prioritized), then ScrollTriggers, then the WebGL render:
    // everything in a frame sees the same scroll position, so nothing lags or jitters.
    const tick = (t: number) => { lenis.raf(t * 1000); vel.current = lenis.velocity; audio.setEnergy(Math.min(1, Math.abs(lenis.velocity) / 45)); };
    gsap.ticker.add(tick, false, true); gsap.ticker.lagSmoothing(0);

    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setMenu(false); return; }
      if (!e.metaKey && !e.ctrlKey && !e.altKey) { const kk = e.key.toLowerCase(); if (kk === "m") { setMenu(v => !v); return; } if (kk === "p") { setAuto(v => !v); return; } if (kk === "f") { toggleFull(); return; } }
      if (menu) return;
      const k = e.key, dir = k === "ArrowRight" || k === "PageDown" || (k === " " && !e.shiftKey) ? 1 : k === "ArrowLeft" || k === "PageUp" || (k === " " && e.shiftKey) ? -1 : 0;
      if (!dir) return; e.preventDefault(); lenis.scrollTo(lenis.scroll + dir * innerWidth * .8, { duration: 1.3 });
    };
    addEventListener("keydown", key);

    const enter = (i: number) => {
      chapterRef.current = i; setChapter(i); audio.enter(chapters[i].mood, chapters[i].drone, chapters[i].amb);
      gsap.to(`#c${i} .w`, { yPercent: 0, duration: 1.2, stagger: 0.02, ease: "expo.out", overwrite: true });
      gsap.to(`#c${i} .fade`, { opacity: 1, y: 0, duration: 1, delay: .5, overwrite: true });
    };
    const hide = (el: Element, y: number) => {
      gsap.to(el.querySelectorAll(".w"), { yPercent: y, duration: .6, stagger: .004, overwrite: true });
      gsap.to(el.querySelectorAll(".fade"), { opacity: 0, y: y > 0 ? 14 : -14, duration: .5, overwrite: true });
    };
    const ctx = gsap.context(() => {
      gsap.from(".hero .w", { yPercent: 170, duration: 1.8, stagger: 0.15, ease: "expo.out", delay: 0.4 });
      gsap.from(".hero .fade", { opacity: 0, y: 12, duration: 1.2, delay: 1.4, stagger: .15 });
      gsap.utils.toArray<HTMLElement>(".chapter").forEach((el, i) => {
        gsap.set(el.querySelectorAll(".w"), { yPercent: 170 }); gsap.set(el.querySelectorAll(".fade"), { opacity: 0, y: 14 });
        ScrollTrigger.create({ trigger: el, horizontal: true, start: "left 62%", end: "right 38%", onEnter: () => enter(i), onEnterBack: () => enter(i),
          onLeave: () => hide(el, -170),
          onLeaveBack: () => hide(el, 170) });
        // parallax is scrubbed straight to the (already smoothed) Lenis position: scrub:true = zero extra lag
        gsap.fromTo(el.querySelector(".art"), { x: -60 }, { x: 60, ease: "none", scrollTrigger: { trigger: el, horizontal: true, scrub: true, start: "left right", end: "right left" } });
        gsap.fromTo(el.querySelector(".num"), { xPercent: -10 }, { xPercent: 10, ease: "none", scrollTrigger: { trigger: el, horizontal: true, scrub: true, start: "left right", end: "right left" } });
      });
    }, root);
    ScrollTrigger.refresh();
    return () => { ctx.revert(); gsap.ticker.remove(tick); removeEventListener("keydown", key); lenis.destroy(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  const begin = () => { audio.start(); setStarted(true); };

  return (
    <div ref={root}>
      {glChecked && !noGL && <Scene chapter={chapter} started={started} onReady={() => setReady(true)} progress={progress} theme={theme} />}
      {small && <div className="small-screen" role="alertdialog"><div className="diya" aria-hidden><i className="glow" /><i className="flame" /><i className="bowl" /></div><h2>बड़ी स्क्रीन पर खोलें</h2><p>श्री राम की इस यात्रा का पूरा अनुभव लेने के लिए कृपया लैपटॉप या डेस्कटॉप पर खोलें।</p><small>Please switch to a bigger screen (laptop or desktop) for the best experience.</small></div>}
      <div className="cursor" />

      <div className={`gate ${started ? "gone" : ""}`}>
        <p className="gate-kicker"><span lang="hi">श्री राम की यात्रा</span> · An Immersive Journey</p>
        <div className="diya" aria-hidden><i className="glow" /><i className="flame" /><i className="bowl" /></div>
        <div className="breath" aria-hidden><i /></div>
        <p className="grat" key={gi} aria-live="polite"><span>{GRAT[gi][0]}</span><small>{GRAT[gi][1]}</small></p>
        <button disabled={!ready} onClick={begin}>{ready ? "शांति से प्रवेश करें" : "साँस लें… धीरे…"}<small>{ready ? "Enter in peace, with sound on" : "Breathe in, breathe out"}</small></button>
        <p className="gate-hint">🎧 Best experienced with headphones · full screen recommended</p>
      </div>

      <header className="hud">
        <span className="brand" key={book}>{bk.name}</span>
        <div className={`now ${at && started ? "on" : ""}`} aria-live="polite"><em>{pad(chapter - bk.from + 1)}<i>/</i>{pad(bk.to - bk.from)}</em><b key={chapter}>{chapters[chapter].hiTitle}</b><span>{chapters[chapter].place}</span></div>
        <nav className="dock" aria-label="Controls">
          <button className="ic" aria-expanded={menu} aria-label="Chapters (M)" onClick={() => setMenu(true)}>{ICON.menu}<span className="tip">Chapters<kbd>M</kbd></span></button>
          <button className="ic" aria-pressed={auto} aria-label="Auto tour (P)" onClick={() => setAuto(v => !v)}>{auto ? ICON.pause : ICON.play}<span className="tip">{auto ? "Pause tour" : "Auto tour"}<kbd>P</kbd></span></button>
          <button className="ic" aria-pressed={full} aria-label="Full screen (F)" onClick={toggleFull}>{ICON.full}<span className="tip">Full screen<kbd>F</kbd></span></button>
          <SoundMenu />
        </nav>
      </header>
      <div className="bar"><div ref={bar} /></div>
      <JourneyPath chapter={chapter} started={started} onGo={i => goTo(i)} from={bk.from} to={bk.to} variant={book} />
      <ChapterMenu open={menu} current={chapter} onClose={() => setMenu(false)} onGo={i => { setMenu(false); setTimeout(() => goTo(i), 60); }} />

      <main className="track">
        <section className="hero">
          <div className="hero-copy">
            <Mandala className="m-hero" />
            <h1><span className="mask"><span className="w">रामायण</span></span></h1>
            <p className="hi-sub fade">जन्म से दीपावली तक, श्री राम की पूरी यात्रा।</p>
            <p className="en-sub fade">Shri Rama's full journey, from birth to Diwali.</p>
            <p className="shloka fade">रामो विग्रहवान् धर्मः ॥<small>“Rama is dharma embodied.” — Valmiki Ramayana</small></p>
          </div>
          <div className="art hero-art" role="img" aria-label="Rama, Lakshmana and Sita look toward Ayodhya" data-gl="/img/hero.webp" data-feather="0.16" style={noGL ? { backgroundImage: "url(/img/hero.webp)" } : undefined} />

          <div className="badge fade" aria-hidden><svg viewBox="0 0 120 120"><defs><path id="bc" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" /></defs><text><textPath href="#bc" textLength="272" lengthAdjust="spacing">BEGIN THE JOURNEY ✦ BEGIN THE JOURNEY ✦ </textPath></text></svg><b>→</b></div>
        </section>

        <div className="marquee" aria-hidden><span>जय श्री राम ॥&nbsp;</span><span>जय श्री राम ॥&nbsp;</span></div>

        {chapters.map((c, i) => { const hb = c.book === "han", li = i - BOOKS[hb ? "han" : "ram"].from; return (
          <Fragment key={c.id}>
            {i === HAN_START && <>
              <section className="end">
                <Mandala className="m-end" />
                <div className="diya" aria-hidden><i className="glow" /><i className="flame" /><i className="bowl" /></div>
                <p>॥ जय श्री राम ॥</p>
                <small className="end-sub">धर्म, मर्यादा और प्रेम की यात्रा यहीं पूर्ण होती है · A journey of duty, restraint and love</small>
                <div className="end-cta">
                  <button className="cont" onClick={() => goTo(HAN_START, true)}><span>हनुमान की कथा</span><small>Continue · The story of Hanuman</small><b aria-hidden>→</b></button>
                  <button className="ghost" onClick={() => lenisRef.current?.scrollTo(0, { duration: 3.2 })}>फिर से शुरू करें</button>
                </div>
              </section>
              <section id="bridge" className="bridge" aria-label="Interlude">
                <div className="wind" aria-hidden>{WIND.map((w, k) => <i key={k} style={{ top: `${w.top}%`, width: `${w.w}vw`, animationDuration: `${w.d}s`, animationDelay: `${w.delay}s` }} />)}</div>
                <div className="b-text"><p className="b-hi">राम की हर राह पर एक और कथा चलती रही, पवन-पुत्र की।</p><p className="b-en">Along every road Rama walked, another story walked beside him: the story of the son of the wind.</p></div>
                <Sun />
                <div className="b-title"><h2>हनुमान</h2><p className="b-sub">लीला-कथा · The Story of Hanuman</p>
                  <blockquote lang="sa">मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम् ।<br />वातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये ॥<small>“Swift as thought, fast as the wind, master of his senses, foremost among the wise: son of the Wind, chief of the vanaras, Rama&apos;s messenger. I take refuge in him.”</small></blockquote></div>
              </section>
            </>}
            <section id={`c${i}`} className={`chapter ${i % 2 ? "flip" : ""} ${hb ? "han" : ""} ${isPhoto(c) ? "photo" : ""} ${isPhoto(c) && !hb && c.ar === 1 ? "arch" : ""}`}>
              <div className="num" aria-hidden>{pad(li + 1)}</div>
              <div className="art" role="img" aria-label={c.title} data-gl={c.art}
                {...(isPhoto(c) ? (!hb && c.ar === 1 ? { "data-rt": ".27", "data-rb": ".04" } : { "data-rt": ".06", "data-rb": ".06" }) : hb ? { "data-circle": "" } : { "data-arch": "" })}
                style={{ "--ar": c.ar, ...(noGL ? { backgroundImage: `url(${c.art})` } : {}) } as React.CSSProperties} />
              <div className="txt">
                <p className="eyebrow fade"><span>{hb ? "लीला" : "अध्याय"} {pad(li + 1)}</span><i />{c.place}</p>
                <h2 style={{ "--len": [...c.hiTitle].length } as React.CSSProperties}>{split(c.hiTitle)}</h2>
                <p className="en-title fade">{c.title}</p>
                <p className="hi">{split(c.hi)}</p>
                <p className="en fade">{c.en}</p>
              </div>
            </section>
          </Fragment>); })}

        <section className="end han-end">
          <Mandala className="m-end" />
          <div className="diya" aria-hidden><i className="glow" /><i className="flame" /><i className="bowl" /></div>
          <p>॥ जय बजरंगबली ॥</p>
          <small className="end-sub">भक्ति में ही शक्ति है · Strength lives in devotion</small>
          <div className="end-cta">
            <button className="ghost" onClick={() => goTo(0)}>रामायण पर लौटें</button>
            <button className="ghost" onClick={() => goTo(HAN_START)}>हनुमान कथा फिर से</button>
          </div>
        </section>
      </main>
    </div>
  );
}
