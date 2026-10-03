"use client";
import { useEffect, useRef, useState } from "react";
import { audio, TRACKS, type TrackId } from "@/lib/audio";

const svg = (d: React.ReactNode) => <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>{d}</svg>;
const ON = svg(<path d="M4 10v4h4l5 4V6l-5 4zM17 9a4 4 0 0 1 0 6" />);
const OFF = svg(<path d="M4 10v4h4l5 4V6l-5 4zM17 9l4 6M21 9l-4 6" />);

export default function SoundMenu() {
  const [open, setOpen] = useState(false), [track, setTrack] = useState<TrackId>(audio.track), [loading, setLoading] = useState(false);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => audio.subscribe(() => { setTrack(audio.track); setLoading(audio.loading); }), []);
  useEffect(() => {
    if (!open) return;
    const away = (e: PointerEvent) => { if (!box.current?.contains(e.target as Node)) setOpen(false); };
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    addEventListener("pointerdown", away); addEventListener("keydown", esc);
    return () => { removeEventListener("pointerdown", away); removeEventListener("keydown", esc); };
  }, [open]);
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (!e.metaKey && !e.ctrlKey && !e.altKey && e.key.toLowerCase() === "s") setOpen(v => !v); };
    addEventListener("keydown", k); return () => removeEventListener("keydown", k);
  }, []);

  const pick = (id: TrackId) => { audio.select(id); setTimeout(() => setOpen(false), 260); };

  return (
    <div className={`snd ${open ? "open" : ""}`} ref={box}>
      <button className="ic" aria-haspopup="listbox" aria-expanded={open} aria-label="Sound (S)" onClick={() => setOpen(v => !v)}>
        {track === "off" ? OFF : ON}
        {track !== "off" && <i className="snd-dot" aria-hidden />}
        <span className="tip">Sound<kbd>S</kbd></span>
      </button>
      <div className="snd-panel" role="listbox" aria-label="Choose sound" aria-hidden={!open}>
        <p className="snd-head"><b>ध्वनि</b><span>Sound</span></p>
        <ul>
          {TRACKS.filter(t => t.id !== "off").map(t => (
            <li key={t.id}>
              <button role="option" aria-selected={track === t.id} tabIndex={open ? 0 : -1} className={track === t.id ? "cur" : ""} onClick={() => pick(t.id)}>
                <span className="snd-eq" aria-hidden>{track === t.id ? <>{loading ? <u className="spin" /> : <><i /><i /><i /></>}</> : <em>{t.id === "default" ? "◌" : t.id.slice(-1)}</em>}</span>
                <span className="snd-txt"><b>{t.label}</b><small>{t.sub}</small></span>
                <span className="snd-len">{t.len ?? ""}</span>
              </button>
            </li>
          ))}
        </ul>
        <button role="option" aria-selected={track === "off"} tabIndex={open ? 0 : -1} className={`snd-off ${track === "off" ? "cur" : ""}`} onClick={() => pick("off")}>
          <span className="snd-eq" aria-hidden><em>{OFF}</em></span>
          <span className="snd-txt"><b>Off</b><small>Silence</small></span>
        </button>
      </div>
    </div>
  );
}
