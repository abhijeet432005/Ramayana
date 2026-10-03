#!/usr/bin/env python3
"""Generates public/art/8..12.svg: five story scenes in the same flat dusk style as 0..7.
8 yajna & sage, 9 bow of Shiva, 10 Bharata & the sandals, 11 Jatayu & Shabari, 12 Kishkindha friendship."""
import math, os, random
W, H = 1000, 1250
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "art")

def hills(y, amp, col, seed, f=1.0):
    r = random.Random(seed); ph = [r.random() * 6.28 for _ in range(3)]
    pts = " ".join(f"{x},{y + amp * (math.sin(x / 170 * f + ph[0]) * .6 + math.sin(x / 70 * f + ph[1]) * .3 + math.sin(x / 330 + ph[2]) * .5):.0f}" for x in range(-20, 1041, 20))
    return f'<polygon points="-20,{H} {pts} 1040,{H}" fill="{col}"/>'
def tree(x, y, s, col):
    return (f'<g fill="{col}"><rect x="{x-5*s}" y="{y-110*s}" width="{10*s}" height="{110*s}"/><circle cx="{x}" cy="{y-130*s}" r="{50*s}"/>'
            f'<circle cx="{x-34*s}" cy="{y-105*s}" r="{34*s}"/><circle cx="{x+34*s}" cy="{y-105*s}" r="{34*s}"/></g>')
def person(x, y, s, col, arms="down", extra=""):
    a = {"up": f'<path d="M{x+14*s},{y-112*s} L{x+46*s},{y-152*s}" stroke="{col}" stroke-width="{8*s}" stroke-linecap="round"/>',
         "fold": f'<path d="M{x-15*s},{y-110*s} L{x},{y-92*s} L{x+15*s},{y-110*s}" stroke="{col}" stroke-width="{7*s}" fill="none" stroke-linecap="round"/>'}.get(arms, "")
    return (f'<g fill="{col}"><circle cx="{x}" cy="{y-138*s}" r="{11*s}"/>'
            f'<path d="M{x-16*s},{y-120*s} L{x+16*s},{y-120*s} L{x+22*s},{y-50*s} L{x+26*s},{y} L{x-26*s},{y} L{x-22*s},{y-50*s}Z"/>{a}{extra}</g>')
def fire(x, y, s):
    o = f'<circle cx="{x}" cy="{y-50*s}" r="{120*s}" fill="url(#fg)"/>'
    for w, h, c in [(46, 120, "#ff7a1a"), (34, 96, "#ffb02e"), (20, 66, "#fff0a8")]:
        o += f'<path d="M{x},{y} C{x-w*s},{y-h*.35*s} {x-w*.4*s},{y-h*.7*s} {x},{y-h*s} C{x+w*.4*s},{y-h*.7*s} {x+w*s},{y-h*.35*s} {x},{y}Z" fill="{c}"/>'
    return o
def sparks(x, y, n, spread, seed):
    r = random.Random(seed)
    return "".join(f'<circle cx="{x+r.uniform(-spread,spread):.0f}" cy="{y-r.uniform(20,spread*2.2):.0f}" r="{r.uniform(1.5,4):.1f}" fill="#ffd27a" opacity="{r.uniform(.4,1):.2f}"/>' for _ in range(n))
def stars(n, seed, ymax):
    r = random.Random(seed)
    return "".join(f'<circle cx="{r.randint(0,W)}" cy="{r.randint(0,ymax)}" r="{r.uniform(.8,2.4):.1f}" fill="#fff" opacity="{r.uniform(.3,.9):.2f}"/>' for _ in range(n))

def scene(name, sky, sun, body):
    stops = "".join(f'<stop offset="{o}" stop-color="{c}"/>' for o, c in sky)
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}"><defs>'
           f'<linearGradient id="s" x1="0" y1="0" x2="0" y2="1">{stops}</linearGradient>'
           f'<radialGradient id="g"><stop offset="0" stop-color="{sun[3]}" stop-opacity="1"/><stop offset="1" stop-color="{sun[3]}" stop-opacity="0"/></radialGradient>'
           f'<radialGradient id="fg"><stop offset="0" stop-color="#ffb84a" stop-opacity=".85"/><stop offset="1" stop-color="#ffb84a" stop-opacity="0"/></radialGradient></defs>'
           f'<rect width="{W}" height="{H}" fill="url(#s)"/><circle cx="{sun[0]}" cy="{sun[1]}" r="{sun[2]}" fill="url(#g)" opacity=".8"/>'
           f'<circle cx="{sun[0]}" cy="{sun[1]}" r="{sun[2]*.28:.0f}" fill="#fff0b8"/>{body}</svg>')
    open(os.path.join(OUT, name), "w").write(svg)

# 8: sage Vishwamitra guards the yajna fire; two young archers stand ready
D = "#10261f"
scene("8.svg", [(0, "#143a3a"), (.5, "#d9893a"), (1, "#ffd27a")], (500, 560, 420, "#ffe08a"),
      hills(800, 40, "#2f5a45", 1) + tree(90, 900, 1.5, D) + tree(250, 940, 1.1, D) + tree(900, 890, 1.6, D) + tree(780, 940, 1.0, D) + hills(940, 24, "#1c3d2e", 2)
      + hills(1040, 14, "#0d1f19", 3)
      + '<path d="M500,840 C440,780 560,730 500,670 C450,620 540,580 500,520" stroke="#fff" stroke-opacity=".25" stroke-width="18" fill="none" stroke-linecap="round"/>'
      + '<rect x="380" y="1000" width="240" height="30" fill="#3a1a10"/><rect x="410" y="972" width="180" height="30" fill="#4a2214"/>' + fire(500, 972, 1.7) + sparks(500, 900, 18, 90, 4)
      + person(290, 1020, 1.8, "#1a0d0a", "down", '<circle cx="290" cy="%d" r="%d"/><path d="M322,%d L330,1020" stroke="#1a0d0a" stroke-width="7"/>' % (1020 - 160 * 1.8, 8 * 1.8, 1020 - 170 * 1.8))
      + person(720, 1030, 1.15, "#1a0d0a", "down", '<path d="M752,%d Q790,%d 752,%d" stroke="#1a0d0a" stroke-width="5" fill="none"/>' % (1030 - 190, 1030 - 120, 1030 - 50))
      + person(800, 1034, 1.05, "#1a0d0a", "down", '<path d="M828,%d Q864,%d 828,%d" stroke="#1a0d0a" stroke-width="5" fill="none"/>' % (1034 - 175, 1034 - 112, 1034 - 48)))

# 9: Shiva's bow broken in two, Sita's garland, palace court
P = "#2a0f26"
pillars = "".join(f'<rect x="{x}" y="380" width="46" height="700" fill="{P}"/><path d="M{x-14},380 H{x+60} V350 H{x-14}Z" fill="{P}"/>' for x in (70, 250, 700, 880))
scene("9.svg", [(0, "#4a1d3d"), (.5, "#e0709a"), (1, "#ffd9a0")], (500, 520, 380, "#ffd0e0"),
      hills(900, 20, "#5a2250", 5) + pillars + f'<rect x="0" y="1060" width="{W}" height="190" fill="#1c0a1a"/>'
      + '<path d="M330,640 Q230,840 330,1010" stroke="#ffcf5a" stroke-width="16" fill="none" stroke-linecap="round"/><path d="M670,640 Q770,840 670,1010" stroke="#ffcf5a" stroke-width="16" fill="none" stroke-linecap="round"/>'
      + '<circle cx="500" cy="830" r="190" fill="url(#fg)" opacity=".7"/><path d="M345,990 l-34,26 M655,990 l36,26 M500,780 l0,-40" stroke="#ffe08a" stroke-width="5" stroke-linecap="round"/>'
      + person(430, 1070, 1.6, "#14060f", "up") + person(580, 1070, 1.5, "#14060f", "fold")
      + '<ellipse cx="580" cy="%d" rx="30" ry="50" fill="none" stroke="#ff9fb8" stroke-width="8" stroke-dasharray="2 9" stroke-linecap="round"/>' % (1070 - 90 * 1.5)
      + "".join(f'<ellipse cx="{x}" cy="{y}" rx="8" ry="4" fill="#ffb3c8" transform="rotate({r} {x} {y})"/>' for x, y, r in [(180,520,30),(820,600,-20),(300,700,50),(700,480,10),(120,820,-40),(900,760,25),(520,420,0)]))

# 10: Bharata places Shri Rama's sandals on the throne
G_ = "#3a2310"
scene("10.svg", [(0, "#223a2e"), (.55, "#c9a24a"), (1, "#ffe6a0")], (500, 520, 360, "#fff0b8"),
      hills(820, 36, "#3d6a4a", 7) + tree(110, 960, 1.4, "#143023") + tree(890, 950, 1.5, "#143023") + hills(980, 18, "#1f4531", 8)
      + f'<rect x="300" y="1090" width="400" height="40" fill="{G_}"/><rect x="340" y="1050" width="320" height="40" fill="#4a2e14"/><rect x="380" y="1010" width="240" height="40" fill="#5a381a"/>'
      + '<rect x="400" y="975" width="200" height="36" rx="10" fill="#8f1d2c"/>'
      + '<path d="M340,720 A160,110 0 0 1 660,720Z" fill="#d4a017"/><rect x="496" y="720" width="8" height="250" fill="#8a6a10"/>'
      + "".join(f'<circle cx="{x}" cy="735" r="5" fill="#ffcf5a"/>' for x in range(360, 650, 40))
      + '<ellipse cx="465" cy="955" rx="24" ry="48" transform="rotate(-8 465 955)" fill="#ffcf5a"/><ellipse cx="535" cy="955" rx="24" ry="48" transform="rotate(8 535 955)" fill="#ffcf5a"/>'
      + '<circle cx="465" cy="925" r="7" fill="#b8860b"/><circle cx="535" cy="925" r="7" fill="#b8860b"/>'
      + '<g transform="rotate(-14 760 1110)">' + person(760, 1110, 1.5, "#120a05", "fold") + '</g>'
      + fire(250, 1110, .45) + fire(750, 1130, .01) + fire(110, 1100, .4))

# 11: fallen Jatayu (left) and old Shabari with her basket of berries (right)
B = "#1e0c14"
scene("11.svg", [(0, "#3d1a2e"), (.5, "#e8742a"), (1, "#ffc861")], (500, 640, 400, "#ffe08a"),
      hills(820, 40, "#6b2f3a", 9) + tree(870, 930, 1.5, "#240d18") + tree(60, 950, 1.3, "#240d18") + hills(990, 20, "#2a0f1c", 10)
      + f'<ellipse cx="270" cy="1040" rx="120" ry="42" fill="{B}"/><path d="M200,1030 Q120,880 40,860 Q110,960 150,1040Z" fill="{B}"/><path d="M290,1020 Q330,880 440,820 Q400,940 350,1040Z" fill="{B}"/>'
      + f'<circle cx="395" cy="1014" r="20" fill="{B}"/><path d="M412,1010 L448,1026 L412,1030Z" fill="#c98a2a"/><circle cx="400" cy="1010" r="3" fill="#ffd27a"/>'
      + '<path d="M130,1010 Q170,1000 210,1015 M170,990 Q200,984 235,998" stroke="#4a2030" stroke-width="3" fill="none"/>'
      + f'<polygon points="640,1040 740,900 840,1040" fill="#3b2012"/><rect x="660" y="1040" width="160" height="60" fill="#2a160c"/><rect x="725" y="1060" width="32" height="40" fill="#0d0605"/>'
      + person(600, 1100, 1.3, B, "down", '<path d="M634,%d L640,1100" stroke="#1e0c14" stroke-width="6"/>' % (1100 - 150))
      + '<ellipse cx="520" cy="1090" rx="46" ry="20" fill="#6b3a1a"/>' + "".join(f'<circle cx="{x}" cy="{y}" r="8" fill="#d62839"/>' for x, y in [(495,1074),(515,1068),(535,1074),(505,1082),(527,1082),(548,1080)]))

# 12: sworn friendship before fire: Shri Rama, Hanuman, Sugriva under the Rishyamukha hills
K = "#120c22"
scene("12.svg", [(0, "#0e1740"), (.55, "#5a4aa0"), (1, "#ffb070")], (500, 800, 480, "#ffd9a0"),
      stars(70, 11, 520) + '<polygon points="-40,1000 140,560 260,760 400,480 560,780 700,520 860,740 1040,600 1040,1000" fill="#241a45"/>'
      + '<polygon points="-40,1060 200,760 340,900 520,700 700,900 860,780 1040,940 1040,1060" fill="#1b1535"/>' + hills(1040, 14, K, 12)
      + '<rect x="400" y="1080" width="200" height="22" rx="8" fill="#2a1a10"/>' + fire(500, 1080, 1.1) + sparks(500, 1000, 14, 70, 13)
      + person(330, 1090, 1.4, K, "down", '<path d="M360,%d Q404,%d 360,%d" stroke="#120c22" stroke-width="6" fill="none"/>' % (1090 - 190, 1090 - 120, 1090 - 50))
      + person(740, 1096, 1.15, K)
      + '<g fill="#120c22"><circle cx="650" cy="%d" r="19"/><ellipse cx="650" cy="1020" rx="32" ry="50"/><rect x="620" y="1050" width="60" height="46" rx="14"/>'
        '<path d="M676,1010 C740,980 760,1020 730,1050" stroke="#120c22" stroke-width="10" fill="none" stroke-linecap="round"/>'
        '<path d="M630,1010 L600,940" stroke="#120c22" stroke-width="9" stroke-linecap="round"/><circle cx="596" cy="928" r="20"/></g>' % 970)
print("wrote 8..12.svg")
