"use client";
import { useEffect, useRef } from "react";
import { chapters, BOOKS, thumbOf } from "@/lib/story";

const pad = (n: number) => String(n).padStart(2, "0");

export default function ChapterMenu({ open, current, onGo, onClose }: { open: boolean; current: number; onGo: (i: number) => void; onClose: () => void }) {
  const scroller = useRef<HTMLDivElement>(null);
  // when the list opens, bring the current chapter into view
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => scroller.current?.querySelector<HTMLElement>("button.cur")?.scrollIntoView({ block: "center", behavior: "smooth" }), 350);
    return () => clearTimeout(t);
  }, [open, current]);
  const jump = (k: string) => scroller.current?.querySelector<HTMLElement>(`[data-part="${k}"]`)?.scrollIntoView({ block: "start", behavior: "smooth" });
  return (
    <div className={`menu ${open ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Chapters" aria-hidden={!open} onClick={onClose}>
      <div className="menu-in" onClick={e => e.stopPropagation()}>
        <div className="menu-head">
          <div><b>अध्याय सूची</b><span>Two journeys · {chapters.length} chapters</span></div>
          <div className="menu-tabs">
            <button tabIndex={open ? 0 : -1} onClick={() => jump("ram")}>रामायण</button>
            <button tabIndex={open ? 0 : -1} onClick={() => jump("han")}>हनुमान</button>
          </div>
          <button className="menu-x" tabIndex={open ? 0 : -1} onClick={onClose} aria-label="Close">Close <kbd>Esc</kbd></button>
        </div>
        {/* data-lenis-prevent: Lenis would otherwise swallow the wheel/touch and the list could not scroll */}
        <div className="menu-scroll" ref={scroller} data-lenis-prevent>
          {(["ram", "han"] as const).map(k => (
            <div key={k} data-part={k} className={`menu-part ${k}`}>
              <h3>{BOOKS[k].name}<small>{k === "ram" ? "The journey of Shri Rama" : "The story of Hanuman"}</small></h3>
              <ol>
                {chapters.slice(BOOKS[k].from, BOOKS[k].to).map((c, j) => { const i = BOOKS[k].from + j; return (
                  <li key={c.id}>
                    <button tabIndex={open ? 0 : -1} className={`mcard ${i === current ? "cur" : ""}`} style={{ "--c": c.accent } as React.CSSProperties} onClick={() => onGo(i)}>
                      <span className="mcard-img"><img src={thumbOf(c)} alt={c.title} loading="lazy" decoding="async" draggable={false} />
                        <em>{pad(j + 1)}</em>
                        {i === current && <u>अभी यहाँ · Now</u>}</span>
                      <span className="mcard-body"><strong className="mcard-hi">{c.hiTitle}</strong><span className="mcard-en">{c.title}</span><small className="mcard-place">{c.place}</small></span>
                    </button>
                  </li>); })}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
