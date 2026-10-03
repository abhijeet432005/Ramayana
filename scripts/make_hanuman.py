#!/usr/bin/env python3
"""Generates public/art/13..20.svg: eight scenes for the Hanuman story, in the same flat dusk style."""
import math, os, random
W, H = 1000, 1250
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "art")

def hills(y, amp, col, seed, f=1.0):
    r = random.Random(seed); ph = [r.random() * 6.28 for _ in range(3)]
    pts = " ".join(f"{x},{y + amp * (math.sin(x / 170 * f + ph[0]) * .6 + math.sin(x / 70 * f + ph[1]) * .3 + math.sin(x / 330 + ph[2]) * .5):.0f}" for x in range(-20, 1041, 20))
    return f'<polygon points="-20,{H} {pts} 1040,{H}" fill="{col}"/>'
def stars(n, seed, ymax):
    r = random.Random(seed)
    return "".join(f'<circle cx="{r.randint(0,W)}" cy="{r.randint(0,ymax)}" r="{r.uniform(.8,2.4):.1f}" fill="#fff" opacity="{r.uniform(.3,.9):.2f}"/>' for _ in range(n))
def fire(x, y, s):
    o = f'<circle cx="{x}" cy="{y-50*s}" r="{120*s}" fill="url(#fg)"/>'
    for w, h, c in [(46, 120, "#ff7a1a"), (34, 96, "#ffb02e"), (20, 66, "#fff0a8")]:
        o += f'<path d="M{x},{y} C{x-w*s},{y-h*.35*s} {x-w*.4*s},{y-h*.7*s} {x},{y-h*s} C{x+w*.4*s},{y-h*.7*s} {x+w*s},{y-h*.35*s} {x},{y}Z" fill="{c}"/>'
    return o
def sparks(x, y, n, spread, seed):
    r = random.Random(seed)
    return "".join(f'<circle cx="{x+r.uniform(-spread,spread):.0f}" cy="{y-r.uniform(20,spread*2.2):.0f}" r="{r.uniform(1.5,4):.1f}" fill="#ffd27a" opacity="{r.uniform(.4,1):.2f}"/>' for _ in range(n))
def person(x, y, s, col, extra=""):
    return (f'<g fill="{col}"><circle cx="{x}" cy="{y-138*s}" r="{11*s}"/>'
            f'<path d="M{x-16*s},{y-120*s} L{x+16*s},{y-120*s} L{x+22*s},{y-50*s} L{x+26*s},{y} L{x-26*s},{y} L{x-22*s},{y-50*s}Z"/>{extra}</g>')
def bow(x, y, s, col):
    return f'<path d="M{x+30*s},{y-190*s} Q{x+78*s},{y-120*s} {x+30*s},{y-50*s}" stroke="{col}" stroke-width="{5*s}" fill="none"/>'

def hanuman(x, y, s, col, pose="stand", rot=0):
    """Silhouette of Hanuman. (x,y) = feet (or centre for 'leap'); height ~300 units * s."""
    L = f'stroke="{col}" stroke-linecap="round" stroke-linejoin="round" fill="none"'
    head = lambda cx, cy: (f'<circle cx="{cx}" cy="{cy}" r="25" fill="{col}"/><circle cx="{cx-24}" cy="{cy+2}" r="9" fill="{col}"/><circle cx="{cx+24}" cy="{cy+2}" r="9" fill="{col}"/>'
        f'<path d="M{cx-19},{cy-18} L{cx-14},{cy-46} L{cx-6},{cy-28} L{cx},{cy-52} L{cx+6},{cy-28} L{cx+14},{cy-46} L{cx+19},{cy-18}Z" fill="#ffcf5a"/>'
        f'<circle cx="{cx-8}" cy="{cy-2}" r="3" fill="#ffe9a8"/><circle cx="{cx+8}" cy="{cy-2}" r="3" fill="#ffe9a8"/>')
    cloth = lambda: f'<path d="M-30,-146 L30,-146 L36,-98 L0,-84 L-36,-98Z" fill="#ff7a2e"/>'
    if pose == "leap":
        g = (f'<ellipse cx="0" cy="0" rx="92" ry="36" transform="rotate(-10)" fill="{col}"/>'
             f'<g transform="translate(112,-26)">{head(0,0)}</g>'
             f'<path d="M70,-18 L215,-58 L250,-52" {L} stroke-width="22"/><path d="M52,10 L150,70 L205,66" {L} stroke-width="20"/>'
             f'<path d="M-70,14 L-180,64 L-262,40" {L} stroke-width="26"/><path d="M-60,22 L-170,104 L-250,116" {L} stroke-width="24"/>'
             f'<path d="M-92,6 C-190,-70 -250,-10 -330,-86 C-380,-132 -430,-96 -420,-60" {L} stroke-width="12"/>'
             f'<path d="M-20,-30 L40,-30 L36,24 L-20,26Z" fill="#ff7a2e" opacity=".9"/>')
    elif pose == "fold":
        g = (f'<path d="M-44,-236 Q0,-254 44,-236 L32,-140 Q0,-126 -32,-140Z" fill="{col}"/>' + cloth()
             + f'<path d="M-26,-96 L-36,-6 L-6,-6 L0,-86 L6,-6 L36,-6 L26,-96Z" fill="{col}"/>'
             f'<path d="M-44,-226 L-62,-176 L-14,-170" {L} stroke-width="22"/><path d="M44,-226 L62,-176 L14,-170" {L} stroke-width="22"/>'
             f'<path d="M30,-120 C110,-130 120,-230 84,-300 C74,-330 104,-352 124,-326" {L} stroke-width="12"/>'
             f'<g transform="translate(0,-264)">{head(0,0)}</g>')
    elif pose == "mountain":
        g = (f'<path d="M-44,-236 Q0,-254 44,-236 L32,-140 Q0,-126 -32,-140Z" fill="{col}"/>' + cloth()
             + f'<path d="M-26,-96 L-44,-6 L-14,-6 L0,-86 L14,-6 L44,-6 L26,-96Z" fill="{col}"/>'
             f'<path d="M-44,-226 L-84,-300 L-70,-372" {L} stroke-width="22"/><path d="M44,-226 L66,-168 L36,-146" {L} stroke-width="22"/>'
             f'<path d="M30,-120 C130,-110 150,-210 110,-290 C100,-318 134,-336 150,-310" {L} stroke-width="12"/>'
             f'<g transform="translate(0,-266)">{head(0,0)}</g>'
             f'<polygon points="-230,-360 -150,-470 -112,-430 -62,-540 0,-440 40,-474 100,-360" fill="#2c6b57"/>'
             + "".join(f'<circle cx="{px}" cy="{py}" r="7" fill="#b8ffd0"/>' for px, py in [(-170,-385),(-110,-410),(-60,-470),(-10,-400),(40,-420),(70,-380),(-130,-450)]))
    elif pose == "child":
        g = (f'<ellipse cx="0" cy="-90" rx="40" ry="56" fill="{col}"/>'
             f'<path d="M-30,-130 L-64,-210 L-60,-250" {L} stroke-width="20"/><path d="M30,-130 L66,-206 L70,-246" {L} stroke-width="20"/>'
             f'<path d="M-18,-44 L-34,10" {L} stroke-width="24"/><path d="M18,-44 L40,6" {L} stroke-width="24"/>'
             f'<path d="M20,-60 C100,-50 110,-130 76,-170" {L} stroke-width="11"/>'
             f'<g transform="translate(0,-170)">{head(0,0)}</g>')
    else:  # stand, mace on the shoulder
        g = (f'<path d="M-44,-236 Q0,-254 44,-236 L32,-140 Q0,-126 -32,-140Z" fill="{col}"/>' + cloth()
             + f'<path d="M-26,-96 L-36,-6 L-6,-6 L0,-86 L6,-6 L36,-6 L26,-96Z" fill="{col}"/>'
             f'<path d="M-44,-226 L-66,-176 L-56,-140" {L} stroke-width="22"/><path d="M44,-226 L72,-186 L40,-150" {L} stroke-width="22"/>'
             f'<rect x="-64" y="-330" width="16" height="200" rx="8" fill="{col}"/><circle cx="-56" cy="-346" r="30" fill="{col}"/>'
             f'<path d="M30,-120 C120,-130 130,-230 94,-300 C84,-330 114,-352 134,-326" {L} stroke-width="12"/>'
             f'<g transform="translate(0,-266)">{head(0,0)}</g>')
    glow = f'<circle cx="0" cy="-150" r="200" fill="url(#hg)" opacity=".55"/>' if pose in ("stand", "fold", "mountain") else ""
    return f'<g transform="translate({x},{y}) rotate({rot}) scale({s})">{glow}{g}</g>'

def scene(name, sky, sun, body):
    stops = "".join(f'<stop offset="{o}" stop-color="{c}"/>' for o, c in sky)
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}"><defs>'
           f'<linearGradient id="s" x1="0" y1="0" x2="0" y2="1">{stops}</linearGradient>'
           f'<radialGradient id="g"><stop offset="0" stop-color="{sun[3]}" stop-opacity="1"/><stop offset="1" stop-color="{sun[3]}" stop-opacity="0"/></radialGradient>'
           f'<radialGradient id="hg"><stop offset="0" stop-color="#ffcf5a" stop-opacity=".8"/><stop offset="1" stop-color="#ffcf5a" stop-opacity="0"/></radialGradient>'
           f'<radialGradient id="fg"><stop offset="0" stop-color="#ffb84a" stop-opacity=".85"/><stop offset="1" stop-color="#ffb84a" stop-opacity="0"/></radialGradient></defs>'
           f'<rect width="{W}" height="{H}" fill="url(#s)"/><circle cx="{sun[0]}" cy="{sun[1]}" r="{sun[2]}" fill="url(#g)" opacity=".8"/>'
           f'<circle cx="{sun[0]}" cy="{sun[1]}" r="{sun[2]*.28:.0f}" fill="{sun[4] if len(sun)>4 else "#fff0b8"}"/>{body}</svg>')
    open(os.path.join(OUT, name), "w").write(svg)

def wave(y, amp, col, seed, fx=1.0):
    r = random.Random(seed); ph = r.random() * 6.28
    pts = " ".join(f"{x},{y + amp * math.sin(x / 60 * fx + ph) + amp * .5 * math.sin(x / 23 * fx + ph * 2):.0f}" for x in range(-20, 1041, 20))
    return f'<polygon points="-20,{H} {pts} 1040,{H}" fill="{col}"/>'
def swirl(cx, cy, r0, turns, col, w=5, op=.5):
    pts = []
    for i in range(0, 120):
        a = i / 120 * turns * 6.283; r = r0 * (1 - i / 160)
        pts.append(f"{cx + r * math.cos(a):.0f},{cy + r * .6 * math.sin(a):.0f}")
    return f'<polyline points="{" ".join(pts)}" fill="none" stroke="{col}" stroke-width="{w}" stroke-linecap="round" opacity="{op}"/>'
D = "#0c0716"

# 13 birth: child of the wind. Anjana on a hilltop lifts her newborn; Vayu's wind swirls around them
scene("13.svg", [(0, "#1b1040"), (.5, "#a8446a"), (1, "#ffbe78")], (500, 640, 420, "#ffd9a0"),
      stars(60, 21, 430) + hills(820, 44, "#4a2352", 1) + hills(940, 26, "#2a1236", 2) + swirl(300, 420, 300, 3, "#ffe9c8", 6, .35) + swirl(720, 560, 260, 2.6, "#ffe9c8", 5, .3)
      + hills(1040, 16, D, 3) + person(500, 1010, 1.9, D, '<path d="M%d,%d L%d,%d" stroke="%s" stroke-width="12" stroke-linecap="round"/>' % (500 + 22 * 1.9, 1010 - 112 * 1.9, 500 + 56 * 1.9, 1010 - 190 * 1.9, D))
      + hanuman(500 + 60 * 1.9, 1010 - 205 * 1.9, .34, D, "child") + '<circle cx="%d" cy="%d" r="60" fill="url(#hg)"/>' % (500 + 60 * 1.9, 1010 - 280 * 1.9))

# 14 the sun-fruit: the child leaps for the rising sun, Indra's thunderbolt flashes
scene("14.svg", [(0, "#3a0f2c"), (.45, "#e0502a"), (1, "#ffc060")], (500, 470, 520, "#ffb347", "#fff4c0"),
      "".join(f'<ellipse cx="{x}" cy="{y}" rx="{w}" ry="22" fill="#6a1f3a" opacity=".55"/>' for x, y, w in [(180, 300, 160), (820, 380, 190), (700, 180, 140), (120, 560, 120)])
      + hills(1000, 30, "#2a0f26", 4) + hills(1100, 14, D, 5)
      + hanuman(500, 640, .75, D, "leap", -35)
      + '<polyline points="860,120 790,300 850,310 760,520" fill="none" stroke="#fff7c8" stroke-width="12" stroke-linejoin="round"/><polyline points="860,120 790,300 850,310 760,520" fill="none" stroke="#ffe066" stroke-width="30" stroke-linejoin="round" opacity=".35"/>')

# 15 first meeting: at Rishyamukha, Hanuman bows before Shri Rama and Lakshmana
K = "#120c22"
scene("15.svg", [(0, "#14183f"), (.55, "#7a4aa0"), (1, "#ffb878")], (500, 760, 460, "#ffd9a0"),
      stars(50, 22, 480) + '<polygon points="-40,1000 140,560 260,760 400,480 560,780 700,520 860,740 1040,600 1040,1000" fill="#2a1d4d"/>'
      + '<polygon points="-40,1060 200,780 340,920 520,720 700,920 860,800 1040,950 1040,1060" fill="#1e1640"/>' + hills(1040, 16, K, 6)
      + person(260, 1090, 1.55, K) + bow(260, 1090, 1.55, K) + person(400, 1096, 1.4, K) + bow(400, 1096, 1.4, K)
      + '<circle cx="330" cy="860" r="140" fill="url(#hg)" opacity=".5"/>' + hanuman(760, 1096, .72, K, "fold"))

# 16 the great leap: Hanuman flies over the moonlit sea; Mainaka's peak rises to offer rest
scene("16.svg", [(0, "#06143a"), (.55, "#0f5a78"), (1, "#7fe0d8")], (720, 330, 340, "#b8f0ff", "#f4ffff"),
      stars(80, 23, 600) + wave(820, 10, "#0d4a66", 1) + '<polygon points="120,900 260,640 330,700 400,610 520,900" fill="#12384a"/>' + wave(900, 14, "#0a3552", 2, 1.2) + wave(1010, 16, "#072640", 3, .9) + wave(1120, 12, "#04162c", 4, 1.3)
      + hanuman(500, 520, .9, D, "leap", -6)
      + "".join(f'<path d="M{x},{y} q30,-14 60,0" stroke="#d8fbff" stroke-width="4" fill="none" opacity=".5"/>' for x, y in [(150, 960), (420, 1040), (760, 990), (880, 1100), (300, 1130)]))

# 17 Ashoka Vatika: Sita beneath the tree; the ring of Shri Rama drops from Hanuman's hand
scene("17.svg", [(0, "#102a2c"), (.5, "#d98a6a"), (1, "#ffd9a0")], (500, 600, 380, "#ffe0b0"),
      hills(860, 30, "#2c5a4a", 7) + '<g fill="#0d221c"><rect x="660" y="520" width="34" height="520"/><circle cx="676" cy="470" r="170"/><circle cx="560" cy="560" r="110"/><circle cx="800" cy="570" r="115"/></g>'
      + hills(1040, 16, "#0a1a15", 8)
      + "".join(f'<ellipse cx="{x}" cy="{y}" rx="9" ry="5" fill="#ffb3c8" transform="rotate({r} {x} {y})"/>' for x, y, r in [(520, 560, 20), (620, 640, -30), (780, 700, 40), (720, 480, 10), (600, 760, 60), (860, 620, -15)])
      + person(300, 1100, 1.2, "#0a1a15") + '<ellipse cx="300" cy="1100" rx="80" ry="14" fill="#0a1a15"/>'
      + hanuman(740, 640, .26, "#0a1a15", "fold") + '<ellipse cx="700" cy="760" rx="22" ry="22" fill="none" stroke="#ffd35a" stroke-width="7"/><circle cx="700" cy="760" r="60" fill="url(#hg)" opacity=".7"/>'
      + '<path d="M700,780 L560,1000" stroke="#ffe08a" stroke-width="3" stroke-dasharray="3 10" opacity=".7"/>')

# 18 Lanka burns: Hanuman bounds across the rooftops with a flaming tail
def city():
    out = ""
    for x, w, h in [(40, 90, 260), (150, 70, 340), (240, 110, 220), (370, 60, 420), (450, 100, 300), (570, 70, 360), (660, 120, 240), (800, 80, 400), (900, 90, 280)]:
        out += f'<rect x="{x}" y="{1100-h}" width="{w}" height="{h}" fill="#1a0610"/><path d="M{x},{1100-h} L{x+w/2},{1100-h-70} L{x+w},{1100-h}Z" fill="#1a0610"/>'
    return out
scene("18.svg", [(0, "#2a0510"), (.55, "#c8280f"), (1, "#ff9a3a")], (500, 700, 480, "#ff8a2a", "#ffd27a"),
      city() + "".join(fire(x, y, s) for x, y, s in [(190, 800, 1.1), (430, 780, 1.4), (700, 840, 1.2), (850, 700, 1.0), (90, 880, .9), (560, 940, 1.1)])
      + hills(1150, 12, "#0c0206", 9) + sparks(480, 760, 40, 330, 31) + hanuman(480, 460, .85, "#0c0206", "leap", 8)
      + '<path d="M170,436 C100,380 40,420 20,350" stroke="#ff7a1a" stroke-width="26" fill="none" stroke-linecap="round"/><path d="M170,436 C100,380 40,420 20,350" stroke="#fff0a8" stroke-width="9" fill="none" stroke-linecap="round"/>')

# 19 Sanjeevani: Hanuman carries the whole mountain of herbs across the night sky
scene("19.svg", [(0, "#04122a"), (.6, "#0f4a52"), (1, "#5fd0a8")], (260, 260, 300, "#d8fff0", "#ffffff"),
      stars(110, 24, 780) + "".join(swirl(x, y, 180, 1.6, "#9bffd8", 4, .28) for x, y in [(200, 900), (800, 760)]) + hills(1080, 30, "#06241e", 10)
      + hanuman(520, 1010, 1.15, D, "mountain") + sparks(450, 420, 26, 220, 41))

# 20 Rama in his heart: Hanuman, hands folded, opens his chest to reveal Shri Rama and Sita
scene("20.svg", [(0, "#3a0c1c"), (.5, "#e0602a"), (1, "#ffd27a")], (500, 560, 520, "#ffcf5a", "#fff6cc"),
      "".join(f'<ellipse cx="{500+dx}" cy="1110" rx="{w}" ry="22" fill="#ff9fb8" opacity=".85" transform="rotate({r} {500+dx} 1110)"/>' for dx, w, r in [(-210, 70, -14), (-110, 80, -6), (0, 86, 0), (110, 80, 6), (210, 70, 14)])
      + hills(1160, 12, "#2a0610", 11) + hanuman(500, 1080, 1.55, "#1a0610", "fold")
      + '<circle cx="500" cy="%d" r="92" fill="url(#hg)"/><circle cx="500" cy="%d" r="64" fill="#ffe9a8" opacity=".95"/>' % (1080 - 190 * 1.55, 1080 - 190 * 1.55)
      + person(480, 1080 - 150 * 1.55 + 4, .3, "#7a1f10") + bow(480, 1080 - 150 * 1.55 + 4, .3, "#7a1f10") + person(522, 1080 - 150 * 1.55 + 6, .26, "#7a1f10")
      + "".join(f'<circle cx="{x}" cy="{y}" r="9" fill="#ffd27a"/><path d="M{x},{y-8} q-4,-12 0,-20 q4,8 0,20z" fill="#fff0a8"/>' for x, y in [(120, 1090), (230, 1115), (780, 1115), (890, 1090)]))
print("wrote 13..20.svg")
