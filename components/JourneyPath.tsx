"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { chapters } from "@/lib/story";

const H = 118, BASE = 76, X0 = 26;
const pad = (n: number) => String(n).padStart(2, "0");

/* Every chapter is a node on one baseline, evenly spaced. Between two nodes the line is
   - Ramayana: a gentle river wave (three soft swells per stage)
   - Hanuman:  one big leaping arc (he jumps from stage to stage)
   Because nodes are explicit, the flame always lands exactly on a diya / sun, never somewhere along a curve. */
function build(W: number, N: number, leap: boolean) {
  const step = (W - 2 * X0) / Math.max(1, N - 1), xs = Array.from({ length: N }, (_, i) => X0 + step * i);
  let d = `M${xs[0]} ${BASE}`;
  for (let i = 1; i < N; i++) {
    const a = xs[i - 1], b = xs[i];
    if (leap) d += ` C${a + step * .18} ${BASE - 46} ${b - step * .18} ${BASE - 46} ${b} ${BASE}`;
    else { const q = step / 6; for (let k = 0; k < 3; k++) { const s = a + q * 2 * k, sg = k % 2 ? 1 : -1; d += ` Q${s + q} ${BASE + sg * 11} ${s + q * 2} ${BASE}`; } }
  }
  return { d, xs };
}

function Pill({ text, x, w }: { text: string; x: number; w: number }) {
  const t = useRef<SVGTextElement>(null), [bw, setBw] = useState(90);
  useLayoutEffect(() => {
    const m = () => { const b = t.current?.getBBox(); if (b && b.width) setBw(Math.ceil(b.width) + 30); };
    m(); void document.fonts?.ready.then(m);
  }, [text]);
  const cx = Math.min(Math.max(x, bw / 2 + 4), w - bw / 2 - 4) - x;   // keep the pill on screen at both ends
  return (
    <g className="jl" transform={`translate(${cx} -50)`}>
      <rect x={-bw / 2} y={-17} width={bw} height={34} rx={17} />
      <path className="jl-tip" d={`M${-6 - cx} 17L${-cx} 24L${6 - cx} 17Z`} />
      <text ref={t} y={6.5} textAnchor="middle">{text}</text>
    </g>
  );
}

export default function JourneyPath({ chapter, started, onGo, from, to, variant }: { chapter: number; started: boolean; onGo: (i: number) => void; from: number; to: number; variant: "ram" | "han" }) {
  const N = to - from, list = chapters.slice(from, to), leap = variant === "han";
  const path = useRef<SVGPathElement>(null), live = useRef<SVGPathElement>(null), dot = useRef<SVGGElement>(null);
  const centers = useRef<number[]>([]);
  const [W, setW] = useState(1000);
  useEffect(() => { const f = () => setW(Math.round(innerWidth * 0.94)); f(); addEventListener("resize", f); return () => removeEventListener("resize", f); }, []);
  const { d: D, xs } = build(W, N, leap);

  useEffect(() => {
    const p = path.current, lv = live.current; if (!p || !lv) return;
    const L = p.getTotalLength();
    lv.style.strokeDasharray = `${L}`;
    // scroll position at which each chapter is centred: the flame reaches node i exactly when chapter i is centred
    const measure = () => { centers.current = list.map((_, i) => { const el = document.getElementById(`c${from + i}`); return el ? el.offsetLeft + el.offsetWidth / 2 - innerWidth / 2 : 0; }); };
    measure(); const mt = setInterval(measure, 1200); addEventListener("resize", measure);
    let cur = 0, raf = 0;
    const tick = () => {
      const c = centers.current, sx = scrollX; let f = 0;
      if (c.length === N) {
        if (sx >= c[N - 1]) f = 1;
        else if (sx > c[0]) { let k = 0; while (k < N - 2 && sx >= c[k + 1]) k++; f = (k + (sx - c[k]) / Math.max(1, c[k + 1] - c[k])) / (N - 1); }
      }
      cur += (f - cur) * 0.1;
      lv.style.strokeDashoffset = `${L * (1 - cur)}`;
      const q = p.getPointAtLength(L * cur); dot.current?.setAttribute("transform", `translate(${q.x} ${q.y})`);
      raf = requestAnimationFrame(tick);
    };
    tick(); return () => { cancelAnimationFrame(raf); clearInterval(mt); removeEventListener("resize", measure); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [W, from, to]);

  return (
    <svg key={variant} className={`journey ${variant} ${started ? "on" : ""}`} width={W} height={H} viewBox={`0 0 ${W} ${H}`} role="navigation" aria-label="Chapters">
      <defs>
        <linearGradient id="jg" x1="0" x2="1"><stop offset="0" stopColor="#ffb347" /><stop offset="1" stopColor="var(--accent)" /></linearGradient>
      </defs>
      <path ref={path} d={D} className="jbase" />
      <path ref={live} d={D} className="jlive" />
      {list.map((c, i) => (
        <g key={c.id} transform={`translate(${xs[i]} ${BASE})`} className={`jn ${from + i <= chapter ? "act" : ""} ${from + i === chapter ? "cur" : ""}`} onClick={() => onGo(from + i)} role="link" aria-label={`${c.hiTitle} · ${c.title}`}>
          <circle r="22" className="hit" />
          <g className="dn">
            {leap
              ? <><circle className="sun-glow" r="13" /><circle className="sun" r="6.5" /><path className="rays" d="M0 -13V-10M0 10V13M-13 0H-10M10 0H13M-9.2 -9.2L-7 -7M9.2 -9.2L7 -7M-9.2 9.2L-7 7M9.2 9.2L7 7" /></>
              : <><path className="bowl" d="M-8 6H8A8 8 0 0 1 -8 6Z" /><path className="fl" d="M0 4C-4.500 -2 -1.500 -7 0 -12C1.500 -7 4.500 -2 0 4Z" /></>}
          </g>
          <text className="jnum" y="30" textAnchor="middle">{pad(i + 1)}</text>
          <Pill text={c.hiTitle} x={xs[i]} w={W} />
        </g>
      ))}
      <g ref={dot} className="jdot"><circle r="12" className="jhalo" /><circle r="3.6" className="jcore" /></g>
    </svg>
  );
}
