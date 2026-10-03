#!/usr/bin/env python3
"""Builds public/art/motifs.svg: a 4x4 atlas (1024px, 256px cells) of village / forest motifs.
The background shader only reads the ALPHA channel: body = 0.6 alpha, details = 1.0 alpha,
so every motif has an inner tone difference that the cursor light picks up.
Run: python3 scripts/make_motifs.py
"""
import math, os

B, D = [], []  # per-motif body / detail fragments (reset for each motif)


def body(s): B.append(s)
def det(s): D.append(s)


def leaf(x0, y0, ang, L, droop):
    a = math.radians(ang)
    ex, ey = x0 + L * math.cos(a), y0 + L * math.sin(a) + droop
    mx, my = x0 + .5 * L * math.cos(a), y0 + .5 * L * math.sin(a) + droop * .4
    n = (-math.sin(a), math.cos(a))
    c1 = (mx + n[0] * -.16 * L, my + n[1] * -.16 * L)
    c2 = (mx + n[0] * .10 * L, my + n[1] * .10 * L)
    return f'<path d="M{x0:.1f},{y0:.1f} Q{c1[0]:.1f},{c1[1]:.1f} {ex:.1f},{ey:.1f} Q{c2[0]:.1f},{c2[1]:.1f} {x0:.1f},{y0:.1f}Z"/>'


def banyan():
    for cx, cy, r in [(50, 36, 21), (29, 46, 15), (71, 46, 15), (40, 26, 13), (61, 25, 13)]:
        body(f'<circle cx="{cx}" cy="{cy}" r="{r}"/>')
    body('<polygon points="44,56 56,56 60,84 40,84"/>')
    for x in (24, 34, 66, 76):
        det(f'<rect x="{x-1.1}" y="56" width="2.2" height="{26 if x in (34,66) else 24}" rx="1"/>')
    det('<path d="M20 86 H80" stroke="#000" stroke-width="2.4" stroke-linecap="round" fill="none"/>')
    for cx, cy in [(44, 32), (58, 38), (36, 46), (64, 28)]:
        det(f'<circle cx="{cx}" cy="{cy}" r="2"/>')


def palm():
    body('<path d="M46 86 Q53 62 56 36" stroke="#000" stroke-width="5.5" stroke-linecap="round" fill="none"/>')
    for ang, L, dr in [(-175, 34, 10), (-145, 32, 4), (-112, 26, -2), (-70, 26, -2), (-38, 32, 4), (-5, 34, 10)]:
        body(leaf(56, 34, ang, L, dr))
    det('<circle cx="53" cy="39" r="2.6"/><circle cx="59" cy="40" r="2.6"/><circle cx="56" cy="43" r="2.6"/>')
    for t in (.25, .42, .59, .76):
        x = (1-t)**2*46 + 2*t*(1-t)*53 + t*t*56; y = (1-t)**2*86 + 2*t*(1-t)*62 + t*t*36
        det(f'<path d="M{x-3.4:.1f} {y+1:.1f} l6.8 -2" stroke="#000" stroke-width="1.3" fill="none"/>')
    det('<path d="M30 86 H74" stroke="#000" stroke-width="2.4" stroke-linecap="round" fill="none"/>')


def deer():
    body('<ellipse cx="46" cy="56" rx="21" ry="10"/>')
    body('<polygon points="60,54 68,30 77,33 73,58"/>')
    body('<ellipse cx="78" cy="30" rx="8" ry="4.6" transform="rotate(18 78 30)"/>')
    for x1, x2 in [(33, 31), (40, 40), (55, 56), (62, 65)]:
        body(f'<path d="M{x1} 62 L{x2} 85" stroke="#000" stroke-width="3.2" stroke-linecap="round" fill="none"/>')
    body('<polygon points="26,51 25,60 30,55"/>')
    body('<polygon points="71,26 69,18 76,24"/>')
    det('<path d="M74 24 L71 12 M72 17 L65 11 M71 13 L75 6 M77 24 L83 14 M81 18 L87 17" stroke="#000" stroke-width="1.8" stroke-linecap="round" fill="none"/>')
    for cx, cy in [(38, 52), (46, 50), (54, 53), (42, 58), (50, 58), (34, 57)]:
        det(f'<circle cx="{cx}" cy="{cy}" r="1.7"/>')
    det('<circle cx="80" cy="29" r="1.3"/>')


def elephant():
    body('<rect x="20" y="34" width="46" height="30" rx="15"/>')
    body('<circle cx="71" cy="46" r="14"/>')
    body('<path d="M80 52 Q92 60 86 76 Q84 82 79 78" stroke="#000" stroke-width="6" stroke-linecap="round" fill="none"/>')
    for x in (26, 38, 52, 61):
        body(f'<rect x="{x}" y="58" width="8" height="26" rx="3.4"/>')
    body('<path d="M20 44 Q14 54 17 66" stroke="#000" stroke-width="2.4" stroke-linecap="round" fill="none"/>')
    det('<ellipse cx="62" cy="47" rx="8.5" ry="12"/>')
    det('<circle cx="77" cy="42" r="1.7"/>')
    det('<path d="M80 55 Q90 57 93 52" stroke="#000" stroke-width="2" stroke-linecap="round" fill="none"/>')
    det('<path d="M24 41 H60" stroke="#000" stroke-width="1.4" stroke-dasharray="3 3" fill="none"/>')


def peacock():
    for k, a in enumerate(range(-172, -7, 15)):
        r = math.radians(a)
        ox, oy = 50, 74
        cx, cy = ox + 24 * math.cos(r), oy + 24 * math.sin(r)
        body(f'<ellipse cx="{cx:.1f}" cy="{cy:.1f}" rx="3.8" ry="17" transform="rotate({a+90} {cx:.1f} {cy:.1f})"/>')
        ex, ey = ox + 37 * math.cos(r), oy + 37 * math.sin(r)
        det(f'<circle cx="{ex:.1f}" cy="{ey:.1f}" r="3.4"/>')
    body('<ellipse cx="50" cy="78" rx="8" ry="11"/>')
    body('<path d="M50 70 Q46 60 50 54" stroke="#000" stroke-width="4.6" stroke-linecap="round" fill="none"/>')
    body('<circle cx="50" cy="52" r="4.6"/>')
    det('<path d="M50 48 V41 M47 49 L44 42 M53 49 L56 42" stroke="#000" stroke-width="1.4" stroke-linecap="round" fill="none"/>')
    det('<polygon points="53,53 58,55 53,56"/>')
    det('<path d="M47 88 V94 M53 88 V94" stroke="#000" stroke-width="1.8" fill="none"/>')


def house():
    body('<rect x="24" y="50" width="52" height="34"/>')
    body('<polygon points="14,54 50,22 86,54"/>')
    body('<rect x="64" y="28" width="9" height="16"/>')
    det('<path d="M44 84 V66 Q50 58 56 66 V84Z"/>')
    det('<rect x="30" y="58" width="9" height="9"/><rect x="61" y="58" width="9" height="9"/>')
    det('<path d="M22 50 L50 27 L78 50" stroke="#000" stroke-width="2.2" fill="none"/>')
    det('<path d="M18 86 H82" stroke="#000" stroke-width="2.4" stroke-linecap="round" fill="none"/>')


def temple():
    body('<rect x="22" y="76" width="56" height="9"/>')
    body('<rect x="28" y="58" width="44" height="18"/>')
    body('<path d="M32 58 Q36 40 50 24 Q64 40 68 58Z"/>')
    body('<circle cx="50" cy="22" r="4.4"/>')
    det('<path d="M45 76 V66 Q50 60 55 66 V76Z"/>')
    for y, w in [(34, 10), (42, 15), (50, 19)]:
        det(f'<path d="M{50-w} {y} H{50+w}" stroke="#000" stroke-width="1.6" fill="none"/>')
    det('<path d="M50 18 V7" stroke="#000" stroke-width="1.6" fill="none"/><polygon points="50,7 61,10.5 50,14"/>')
    det('<path d="M16 86 H84" stroke="#000" stroke-width="2.4" stroke-linecap="round" fill="none"/>')


def lotus():
    for ang, rx, ry, dy in [(-78, 6, 16, 0), (78, 6, 16, 0), (-52, 6.5, 19, 0), (52, 6.5, 19, 0), (-26, 7, 22, 0), (26, 7, 22, 0)]:
        body(f'<ellipse cx="50" cy="{72-ry}" rx="{rx}" ry="{ry}" transform="rotate({ang} 50 72)"/>')
    body('<ellipse cx="50" cy="48" rx="7.5" ry="24"/>')
    det('<path d="M50 70 V30" stroke="#000" stroke-width="1.3" fill="none"/>')
    body('<ellipse cx="50" cy="80" rx="32" ry="5"/>')
    det('<path d="M22 86 Q30 83 38 86 T54 86 T70 86 T80 86" stroke="#000" stroke-width="2" stroke-linecap="round" fill="none"/>')


def birds():
    def bird(x, y, s):
        t = f'translate({x} {y}) scale({s})'
        body(f'<g transform="{t}"><path d="M0 0 Q-14 -16 -30 -10 Q-16 -2 -6 7Z"/><path d="M0 0 Q12 -18 28 -14 Q16 -4 6 7Z"/><ellipse cx="0" cy="4" rx="8" ry="3.6"/><polygon points="-7,4 -15,1 -14,8"/></g>')
        det(f'<g transform="{t}"><circle cx="9" cy="2.4" r="2.6"/><polygon points="11,1.6 16,3 11,4.2"/></g>')
    bird(46, 42, 1.25)
    bird(72, 68, .7)
    bird(24, 72, .55)


def cow():
    body('<rect x="20" y="42" width="52" height="25" rx="10"/>')
    body('<ellipse cx="41" cy="41" rx="9" ry="6"/>')
    body('<ellipse cx="78" cy="52" rx="10" ry="8.5" transform="rotate(-12 78 52)"/>')
    body('<polygon points="66,44 72,42 74,62 66,64"/>')
    for x in (25, 35, 57, 66):
        body(f'<rect x="{x}" y="62" width="6" height="22" rx="2.4"/>')
    body('<ellipse cx="44" cy="70" rx="5" ry="3.4"/>')
    body('<path d="M20 48 Q15 60 18 74" stroke="#000" stroke-width="2.2" stroke-linecap="round" fill="none"/>')
    det('<path d="M75 44 Q72 35 66 38 M80 44 Q84 36 90 39" stroke="#000" stroke-width="2.2" stroke-linecap="round" fill="none"/>')
    det('<ellipse cx="85" cy="56" rx="4.4" ry="3.6"/><circle cx="79" cy="49" r="1.4"/>')
    det('<circle cx="18" cy="77" r="3"/><circle cx="68" cy="64" r="2.2"/>')
    for x in (25, 35, 57, 66):
        det(f'<rect x="{x}" y="81" width="6" height="3.4" rx="1"/>')
    det('<path d="M14 86 H84" stroke="#000" stroke-width="2.2" stroke-linecap="round" fill="none"/>')


def monkey():
    body('<ellipse cx="50" cy="60" rx="13" ry="18"/>')
    body('<circle cx="50" cy="30" r="11"/>')
    body('<circle cx="37" cy="30" r="5.4"/><circle cx="63" cy="30" r="5.4"/>')
    body('<path d="M40 48 L32 70 M60 48 L68 70" stroke="#000" stroke-width="6" stroke-linecap="round" fill="none"/>')
    body('<ellipse cx="41" cy="82" rx="9" ry="5"/><ellipse cx="59" cy="82" rx="9" ry="5"/>')
    body('<path d="M62 74 Q88 76 82 50 Q80 40 70 43" stroke="#000" stroke-width="4" stroke-linecap="round" fill="none"/>')
    det('<ellipse cx="50" cy="33" rx="7.4" ry="6.6"/>')
    det('<circle cx="37" cy="30" r="2.6"/><circle cx="63" cy="30" r="2.6"/>')
    det('<ellipse cx="50" cy="62" rx="7" ry="10"/>')


def fish():
    body('<ellipse cx="44" cy="50" rx="24" ry="13"/>')
    body('<polygon points="64,50 86,34 86,66"/>')
    body('<polygon points="36,38 50,24 54,39"/><polygon points="38,62 48,74 54,62"/>')
    det('<circle cx="29" cy="47" r="2.6"/>')
    det('<path d="M36 40 Q31 50 36 60" stroke="#000" stroke-width="1.8" fill="none"/>')
    for x in (44, 52, 60):
        for y in (44, 52):
            det(f'<path d="M{x} {y-4} Q{x+4} {y} {x} {y+4}" stroke="#000" stroke-width="1.4" fill="none"/>')


def diya():
    body('<path d="M20 60 Q50 94 80 60Z"/>')
    body('<path d="M50 56 Q36 40 50 18 Q64 40 50 56Z"/>')
    det('<path d="M50 50 Q44 42 50 32 Q56 42 50 50Z"/>')
    det('<path d="M22 62 H78" stroke="#000" stroke-width="2.2" stroke-linecap="round" fill="none"/>')
    det('<path d="M26 40 L32 46 M74 40 L68 46 M50 8 V12 M34 20 L38 25 M66 20 L62 25" stroke="#000" stroke-width="2" stroke-linecap="round" fill="none"/>')
    det('<path d="M36 70 Q50 80 64 70" stroke="#000" stroke-width="1.6" fill="none"/>')


def bow():
    body('<path d="M30 12 Q86 50 30 88" stroke="#000" stroke-width="4.4" stroke-linecap="round" fill="none"/>')
    body('<path d="M14 50 H80" stroke="#000" stroke-width="2.8" stroke-linecap="round" fill="none"/>')
    det('<path d="M30 12 V88" stroke="#000" stroke-width="1.4" fill="none"/>')
    det('<polygon points="88,50 76,43.5 76,56.5"/>')
    det('<polygon points="14,50 22,44 26,44 22,50 26,56 22,56"/>')


def mountain():
    body('<polygon points="8,82 34,44 46,60 62,32 92,82"/>')
    body('<circle cx="74" cy="22" r="8"/>')
    det('<polygon points="62,32 55,44 59,42 62,48 66,42 70,44"/><polygon points="34,44 29,52 33,50 36,55 38,49"/>')
    det('<path d="M74 8 V10 M74 34 V36 M60 22 H62 M86 22 H88 M64 12 L66 14 M84 12 L82 14" stroke="#000" stroke-width="1.8" stroke-linecap="round" fill="none"/>')
    det('<path d="M8 86 H92" stroke="#000" stroke-width="2.4" stroke-linecap="round" fill="none"/>')


def hut():
    body('<rect x="24" y="52" width="52" height="32"/>')
    body('<path d="M12 58 Q14 54 50 20 Q86 54 88 58 Q70 62 50 60 Q30 62 12 58Z"/>')
    det('<path d="M44 84 V68 Q50 60 56 68 V84Z"/>')
    for x in (30, 38, 46, 54, 62, 70):
        det(f'<path d="M50 24 L{x+ (x-50)*0.6:.1f} 57" stroke="#000" stroke-width="1" fill="none"/>')
    det('<path d="M18 86 H82" stroke="#000" stroke-width="2.4" stroke-linecap="round" fill="none"/>')


MOTIFS = [banyan, palm, deer, elephant, peacock, house, temple, lotus,
          birds, cow, monkey, fish, diya, bow, mountain, hut]

cells = []
for i, fn in enumerate(MOTIFS):
    B.clear(); D.clear(); fn()
    cx, cy = i % 4, i // 4
    cells.append(
        f'<g transform="translate({cx*256} {cy*256}) scale(2.56)" fill="#000">'
        f'<g opacity=".6">{"".join(B)}</g><g opacity="1">{"".join(D)}</g></g>')

svg = ('<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">'
       + "".join(cells) + '</svg>')
out = os.path.join(os.path.dirname(__file__), "..", "public", "art", "motifs.svg")
open(out, "w").write(svg)
print("wrote", os.path.normpath(out), len(svg), "bytes")
