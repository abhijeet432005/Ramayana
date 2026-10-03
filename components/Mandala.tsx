// Rangoli-style mandala: concentric lotus petals drawn in the current accent colour.
const ring = (n: number, r: number, pl: number, pw: number) =>
  Array.from({ length: n }, (_, k) => <ellipse key={`${n}-${r}-${k}`} cx="0" cy={-r} rx={pw} ry={pl} transform={`rotate(${(k * 360) / n})`} />);

export default function Mandala({ className = "" }: { className?: string }) {
  return (
    <svg className={`mandala ${className}`} viewBox="-200 -200 400 400" aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth=".7">
        {[190, 176, 120, 74, 30].map(r => <circle key={r} r={r} strokeDasharray={r === 176 ? "1 5" : undefined} />)}
        {ring(24, 150, 26, 7)}
        {ring(16, 98, 22, 9)}
        {ring(12, 52, 16, 8)}
        {ring(8, 18, 12, 6)}
      </g>
    </svg>
  );
}
