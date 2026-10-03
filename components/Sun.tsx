// A calm, realistic dawn sun: white-hot core, limb-darkened disc, living surface granulation,
// a soft layered corona and slowly drifting light rays. Pure SVG, no images, no hard edges.
const RAYS = Array.from({ length: 28 }, (_, i) => {
  const a = (i / 28) * 360 + ((i * 37) % 11), len = 120 + ((i * 53) % 110), w = 3 + ((i * 29) % 5) * 1.6;
  return { a, len, w, o: 0.16 + ((i * 17) % 5) * 0.05 };
});

export default function Sun() {
  return (
    <div className="b-sun" aria-hidden>
      <svg viewBox="-300 -300 600 600" overflow="visible">
        <defs>
          {/* wide atmospheric glow */}
          <radialGradient id="sx-halo">
            <stop offset="0.28" stopColor="#ffb25a" stopOpacity="0.55" />
            <stop offset="0.45" stopColor="#ff7a2e" stopOpacity="0.22" />
            <stop offset="0.7" stopColor="#d9461a" stopOpacity="0.07" />
            <stop offset="1" stopColor="#d9461a" stopOpacity="0" />
          </radialGradient>
          {/* limb darkening: bright centre, deeper orange toward the rim, like the real photosphere */}
          <radialGradient id="sx-disc">
            <stop offset="0" stopColor="#fffdf0" />
            <stop offset="0.38" stopColor="#ffeeb0" />
            <stop offset="0.72" stopColor="#ffbf55" />
            <stop offset="0.92" stopColor="#ff8a2e" />
            <stop offset="1" stopColor="#e8541f" />
          </radialGradient>
          <radialGradient id="sx-core">
            <stop offset="0" stopColor="#fff" stopOpacity="0.95" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sx-ray" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#ffd98a" stopOpacity="0.8" />
            <stop offset="1" stopColor="#ff8a3d" stopOpacity="0" />
          </linearGradient>
          {/* surface granulation: fractal noise darkens/brightens the disc in soft cells */}
          <filter id="sx-grain" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.022" numOctaves="4" seed="7" result="n" />
            <feColorMatrix in="n" type="matrix" values="0 0 0 0 0.85  0 0 0 0 0.35  0 0 0 0 0.05  0 0 0 1.1 -0.38" result="tint" />
            <feComposite in="tint" in2="SourceAlpha" operator="in" result="clip" />
            <feMerge><feMergeNode in="SourceGraphic" /><feMergeNode in="clip" /></feMerge>
          </filter>
          <filter id="sx-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="6" /></filter>
          <filter id="sx-bloom" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="14" /></filter>
          <filter id="sx-edge" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1.1" /></filter>
        </defs>

        <circle r="300" fill="url(#sx-halo)" className="sx-breathe" />
        <g filter="url(#sx-soft)"><g>
          <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="180s" repeatCount="indefinite" />
          {RAYS.map((r, i) => (
            <rect key={i} x="140" y={-r.w / 2} width={r.len} height={r.w} rx={r.w / 2} fill="url(#sx-ray)" opacity={r.o} transform={`rotate(${r.a})`} />
          ))}
        </g></g>
        <circle r="186" fill="#ff9d3e" opacity="0.5" filter="url(#sx-bloom)" className="sx-breathe" />
        <circle r="166" fill="url(#sx-disc)" filter="url(#sx-edge)" />
        <circle r="164" fill="url(#sx-disc)" filter="url(#sx-grain)" />
        <circle r="110" fill="url(#sx-core)" />
        {/* a faint horizontal lens streak, the way a real sun blooms on a camera */}
        <ellipse rx="330" ry="5" fill="#ffd9a0" opacity="0.22" filter="url(#sx-soft)" />
      </svg>
    </div>
  );
}
