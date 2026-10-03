"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { chapters } from "@/lib/story";

THREE.Cache.enabled = true;

/* ───── SMOKE REVEAL: tune here ─────
   chapterSeconds  how long each chapter photo takes to clear (smaller = faster)
   heroSeconds     same for the opening photo
   startAt         reveal begins when a photo's left edge is closer than this many screen-widths from the left
                   (1 = the moment it touches the right edge of the screen, 1.3 = a bit before it appears)
   reverseSeconds  how fast the smoke closes again when a photo leaves to the right
   A single photo can still override its time with data-smoke="seconds" in Story.tsx. */
export const REVEAL = {
  chapterSeconds: 1.5,
  heroSeconds: 3,
  startAt: 1,
  reverseSeconds: 0.8,
};
// Raw sRGB maths end to end: textures are sampled as-is and colours stay as the hex values we write.
// (With colour management on, the custom shaders wrote linear values straight to the screen and every photo came out dark.)
THREE.ColorManagement.enabled = false;
const BG = "#f9f1e2",
  BGB = "#ebd0ae",
  INK = "#16123a",
  BG2 = "#0b0a25",
  BG2B = "#2b1122",
  INK2 = "#f6e7d0"; // paper: ivory (top) to saffron sand (bottom); night: midnight indigo to ember plum

/* ───────── background: warm paper wash + a field of village/forest motifs (trees, animals, houses…)
   that sit faint on the paper and light up in colour wherever the cursor passes ───────── */
const bgV = `varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.,1.); }`;
const bgF = `precision highp float; varying vec2 vUv;
uniform float uTime,uProg,uScroll,uAct; uniform vec2 uRes,uMouse,uOrb; uniform vec3 uBg,uBgB,uInk,uTint; uniform sampler2D uAtlas;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*n(p);p=p*2.03+vec2(3.1,1.7);a*=.5;}return v;}
// atlas: 4x4 cells, y-up local coords inside a cell; only alpha is used
float cellA(vec2 l,float idx){
  float ins=step(0.,l.x)*step(l.x,1.)*step(0.,l.y)*step(l.y,1.);
  vec2 c=clamp(l,.003,.997); float cx=mod(idx,4.), ry=floor(idx/4.);
  return texture2D(uAtlas,vec2((cx+c.x)/4.,1.-(ry+1.-c.y)/4.)).a*ins;
}
void main(){
  vec2 px=vUv*uRes, asp=vec2(uRes.x/uRes.y,1.), p=(vUv-.5)*asp; float t=uTime*.03;
  vec2 q=vec2(fbm(p*1.6+t),fbm(p*1.6-t+5.));
  float f=fbm(p*1.3+q*1.8+uProg*2.);
  vec3 base=mix(uBgB,uBg,smoothstep(.0,.92,vUv.y)); base=mix(base,uBgB,smoothstep(.55,1.,length(vUv-.5)*1.25)*.35);
  vec3 col=mix(base,uTint,smoothstep(.35,.95,f)*.24);
  col=mix(col,uTint,exp(-length(p-(uOrb-.5)*asp)*2.4)*.16);
  col=mix(col,uTint,exp(-pow(length((vUv-vec2(.5,-.06))*vec2(1.,1.7)),2.)*3.2)*.2);   // low horizon glow in the chapter colour
  col=mix(col,uInk,fbm(px*.8)*.03);                                   // paper fibre

  // staggered grid of motifs, drifting slower than the page for parallax depth
  float cell=uRes.y*.2, par=uScroll*.35;
  float row=floor(px.y/cell), off=.5*mod(row,2.);
  vec2 g=vec2((px.x+par)/cell+off,px.y/cell), id=floor(g), fc=fract(g);
  float hv=h(id+7.1), idx=floor(h(id)*16.), present=step(.12,hv);
  vec2 jit=(vec2(h(id+1.3),h(id+2.7))-.5)*.08;

  // cursor light, evaluated per motif so each one wakes up as a whole
  vec2 cc=vec2((id.x+.5-off)*cell-par,(id.y+.5)*cell), m=uMouse*uRes;
  float cl=1.-smoothstep(0.,uRes.y*.34,length(cc-m)); cl=cl*cl*(3.-2.*cl); cl*=uAct;
  float sc=1.+cl*.15, rot=sin(uTime*1.4+hv*6.283)*.06*cl;
  vec2 l=fc-.5-jit; float cs=cos(rot),sn=sin(rot); l=vec2(cs*l.x-sn*l.y,sn*l.x+cs*l.y)/sc+.5;

  vec2 o=vec2(.35/cell/sc);                                            // 4-tap supersample (atlas has no mips)
  float a=(cellA(l+o,idx)+cellA(l-o,idx)+cellA(l+vec2(o.x,-o.y),idx)+cellA(l+vec2(-o.x,o.y),idx))*.25*present;
  float bl=0.; for(int k=0;k<8;k++){float an=float(k)*.7854; bl+=cellA(l+vec2(cos(an),sin(an))*.055,idx);} bl*=.125*present; // soft halo

  vec3 pal=mix(uTint,vec3(.8,.26,.07),h(id+3.)*.5); pal=mix(pal,uInk,.15);
  col=mix(col,pal,cl*.12*present*smoothstep(.62,.05,length(fc-.5)));    // radial coloured pool behind a lit motif
  col=mix(col,pal,clamp(a*1.3,0.,1.)*cl*.95);                          // the motif itself
  col=mix(col,pal,max(bl-a,0.)*cl*.6);                                 // glow around it
  col=mix(col,uTint,exp(-length(px-m)/(uRes.y*.2))*.09*uAct);          // soft spotlight
  col+=(h(vUv*uRes+uTime)-.5)*.025;
  gl_FragColor=vec4(col,1.);
}`;

/* ───────── artwork planes. Hover on a chapter picture = "temple lamp": the picture swells gently under the cursor, slow water-rings
   spread from it, warm lamp-light follows, the rest dims a touch, embers gather and a glint sweeps across as you arrive.
   The hero (uFx = 0) only scales. ───────── */
const imV = `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`;
const imF = `precision highp float; varying vec2 vUv;
uniform sampler2D uTex; uniform vec2 uSize,uImg,uMouse,uRB; uniform float uTime,uHover,uVel,uReveal,uArch,uFeather,uFx; uniform vec3 uSmoke;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+vec2(1.,1.)),f.x),f.y);}
float fb(vec2 p){float s=0.,a=.5;for(int i=0;i<5;i++){s+=a*vn(p);p=p*2.03+vec2(17.3,9.1);a*=.5;}return s;}
vec2 cover(vec2 uv){float rs=uSize.x/uSize.y,ri=uImg.x/uImg.y;vec2 k=rs<ri?vec2(rs/ri,1.):vec2(1.,ri/rs);return (uv-.5)*k+.5;}
void main(){
  // ── smoky reveal: domain-warped fbm smoke thickens, drifts upward, then thins away to show the picture (bottom clears first)
  float re=1.-(1.-uReveal)*(1.-uReveal), m=1., sa=0.; vec2 wq=vec2(.5); float sn=.5;
  if(uReveal<.999){
    vec2 sp0=vUv*vec2(uSize.x/uSize.y,1.)*2.2; float st=uTime*.12;
    wq=vec2(fb(sp0+vec2(0.,-st)),fb(sp0+vec2(5.2,1.3)-vec2(0.,st*1.3)));
    sn=fb(sp0*1.15+wq*2.2+vec2(0.,-st*1.6));
    float edge=re*2.05-.42-vUv.y*.42;
    m=smoothstep(sn-.2,sn+.1,edge);
    float life=smoothstep(0.,.1,re)*(1.-smoothstep(.62,1.,re));
    sa=(smoothstep(.26,.76,sn+.12*wq.x)*(1.-m)*.92+m*(1.-m)*1.5)*life;
    if(uFeather>0.){ sa*=smoothstep(0.,.3,vUv.x)*smoothstep(0.,.3,1.-vUv.x)*smoothstep(0.,.4,vUv.y)*smoothstep(0.,.4,1.-vUv.y); }   // free-floating smoke: no visible rectangle
  }
  float zoom=1.1-.1*re;
  vec2 uv=(vUv-.5)*(zoom-.015*sin(uTime*.2))+.5;
  uv+=(wq-.5)*.07*(1.-m);                                              // the picture swims behind the smoke
  uv.x+=uVel*.02*sin(uv.y*3.14159);                                   // gentle bend in the scroll direction
  vec2 hq=(vUv-uMouse)*vec2(uSize.x/uSize.y,1.); float hd=length(hq), hf=uHover*uFx;
  float lens=exp(-hd*hd*9.)*hf, near=exp(-hd*hd*8.)*hf;
  uv=(uv-uMouse)*(1.-.16*lens)+uMouse;                                 // the picture swells softly under the cursor
  float rp=sin(hd*40.-uTime*2.4)*exp(-hd*5.)*hf;                       // slow water-rings spreading from the cursor
  uv+=(hq/(hd+.001))*vec2(uSize.y/uSize.x,1.)*rp*.007;
  float sp=lens*.0025+abs(uVel)*.006;
  vec4 c; c.r=texture2D(uTex,cover(uv+vec2(sp,0.))).r; c.g=texture2D(uTex,cover(uv)).g; c.b=texture2D(uTex,cover(uv-vec2(sp,0.))).b;
  float a=1.;
  if(uRB.x>0.){ vec2 pp=(vUv-.5)*uSize, b=.5*uSize; float rr=min(uSize.x,uSize.y)*(pp.y>0.?uRB.x:uRB.y); rr=min(rr,min(b.x,b.y));
    vec2 qq=abs(pp)-b+rr; float dd=length(max(qq,0.))+min(max(qq.x,qq.y),0.)-rr; a*=1.-smoothstep(-1.5,0.,dd); }
  else if(uArch>1.5){ float dd=length((vUv-.5)*uSize); a*=1.-smoothstep(.5*uSize.x-1.5,.5*uSize.x,dd); }
  else if(uArch>.5){ float rad=.5*uSize.x, py=vUv.y*uSize.y, ay=uSize.y-rad;
    if(py>ay){ float dd=length(vec2((vUv.x-.5)*uSize.x,py-ay)); a*=1.-smoothstep(rad-1.5,rad,dd);} }
  if(uFeather>0.){ vec2 fe=vec2(uFeather*uSize.y/uSize.x,uFeather); a*=smoothstep(0.,fe.x,vUv.x)*smoothstep(0.,fe.x,1.-vUv.x)*smoothstep(0.,fe.y,vUv.y)*smoothstep(0.,fe.y,1.-vUv.y); }
  vec2 e=vec2(vUv.x*24.,vUv.y*14.-uTime*.6),id=floor(e),f=fract(e)-.5; float em=step(.86-.2*near,h(id))*smoothstep(.12,.0,length(f+(h(id+3.)-.5)*.5));
  c.rgb+=vec3(1.,.7,.3)*em*(.28+near*1.7)+smoothstep(.05,.0,abs(vUv.x-fract(uTime*.07)*1.6+.3-vUv.y*.4))*.05;
  c.rgb+=vec3(1.,.76,.38)*exp(-hd*hd*16.)*hf*.24;                       // warm lamp-light under the cursor
  c.rgb*=1.-.11*hf*(1.-exp(-hd*hd*2.4));                               // the rest of the picture dims a touch
  c.rgb+=vec3(1.,.9,.7)*smoothstep(.07,.0,abs(vUv.x*.85+vUv.y*.45-(uHover*1.7-.35)))*uHover*(1.-uHover)*1.1*uFx;   // glint of light as the cursor arrives
  c.rgb=mix(vec3(dot(c.rgb,vec3(.299,.587,.114))),c.rgb,1.07)*(1.02+uHover*.05*uFx);
  vec3 smk=mix(uSmoke*.8,uSmoke,smoothstep(.2,.8,sn));
  gl_FragColor=vec4(mix(smk,c.rgb,m),a*clamp(m+sa,0.,1.));
}`;

type Item = {
  el: HTMLElement;
  mesh: THREE.Mesh;
  mat: THREE.ShaderMaterial;
  loaded: boolean;
  hv: number;
  rv: number;
  dur: number;
  hero: boolean;
};
type Props = {
  chapter: number;
  started: boolean;
  onReady: () => void;
  progress: React.RefObject<number>;
  theme: React.RefObject<number>;
};

export default function Scene({
  chapter,
  started,
  onReady,
  progress,
  theme,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  const api = useRef<{ chapter: (i: number) => void } | null>(null);
  const startedRef = useRef(started);
  startedRef.current = started;

  useEffect(() => {
    const dpr = () => Math.min(devicePixelRatio, 1.5); // capped: the background shader is the heavy part
    const r = new THREE.WebGLRenderer({
      canvas: ref.current!,
      antialias: false,
      alpha: false,
      powerPreference: "high-performance",
    });
    r.setPixelRatio(dpr());
    r.setSize(innerWidth, innerHeight);
    r.autoClear = false;
    const u = {
      uTime: { value: 0 },
      uProg: { value: 0 },
      uScroll: { value: 0 },
      uAct: { value: 0 },
      uRes: {
        value: new THREE.Vector2(innerWidth * dpr(), innerHeight * dpr()),
      },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uSmoke: { value: new THREE.Color("#f7ede1") },
      uOrb: { value: new THREE.Vector2(...chapters[0].orb) },
      uBg: { value: new THREE.Color(BG) },
      uBgB: { value: new THREE.Color(BGB) },
      uInk: { value: new THREE.Color(INK) },
      uTint: { value: new THREE.Color(chapters[0].accent) },
      uAtlas: { value: null as THREE.Texture | null },
    };
    const bg = new THREE.Scene(),
      cam0 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    bg.add(
      new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.ShaderMaterial({
          vertexShader: bgV,
          fragmentShader: bgF,
          uniforms: u,
        }),
      ),
    );

    const imgs = new THREE.Scene(),
      cam = new THREE.OrthographicCamera(
        0,
        innerWidth,
        0,
        -innerHeight,
        -10,
        10,
      );
    const mgr = new THREE.LoadingManager(() => onReady()),
      loader = new THREE.TextureLoader(mgr);
    loader.load("/art/motifs.svg", (t) => {
      t.minFilter = THREE.LinearFilter;
      t.magFilter = THREE.LinearFilter;
      t.generateMipmaps = false;
      u.uAtlas.value = t;
    });
    const calm = matchMedia("(prefers-reduced-motion: reduce)").matches; // reduced motion: hover only scales
    const items: Item[] = Array.from(
      document.querySelectorAll<HTMLElement>("[data-gl]"),
    ).map((el) => {
      const mat = new THREE.ShaderMaterial({
        vertexShader: imV,
        fragmentShader: imF,
        transparent: true,
        uniforms: {
          uTex: { value: null },
          uSize: { value: new THREE.Vector2(1, 1) },
          uImg: { value: new THREE.Vector2(1, 1) },
          uMouse: { value: new THREE.Vector2(0.5, 0.5) },
          uTime: u.uTime,
          uSmoke: u.uSmoke,
          uHover: { value: 0 },
          uFx: { value: el.classList.contains("hero-art") || calm ? 0 : 1 },
          uVel: { value: 0 },
          uReveal: { value: 0 },
          uArch: {
            value: el.hasAttribute("data-circle")
              ? 2
              : el.hasAttribute("data-arch")
                ? 1
                : 0,
          },
          uRB: {
            value: new THREE.Vector2(
              parseFloat(el.dataset.rt ?? "0"),
              parseFloat(el.dataset.rb ?? "0"),
            ),
          },
          uFeather: { value: parseFloat(el.dataset.feather ?? "0") },
        },
      });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
      mesh.visible = false;
      imgs.add(mesh);
      const it: Item = {
        el,
        mesh,
        mat,
        loaded: false,
        hv: 0,
        rv: 0,
        hero: el.classList.contains("hero-art"),
        dur:
          parseFloat(el.dataset.smoke ?? "") ||
          (el.classList.contains("hero-art")
            ? REVEAL.heroSeconds
            : REVEAL.chapterSeconds),
      };
      loader.load(el.dataset.gl!, (t) => {
        t.anisotropy = 4;
        mat.uniforms.uTex.value = t;
        mat.uniforms.uImg.value.set(t.image.width, t.image.height);
        it.loaded = true;
      });
      return it;
    });

    const c0 = chapters[0].pal,
      cBgL = new THREE.Color(c0[0]),
      cBgD = new THREE.Color(c0[2]),
      cBgLB = new THREE.Color(c0[1]),
      cBgDB = new THREE.Color(c0[3]),
      tmpC = new THREE.Color();
    let lastBg = "";
    const cInkL = new THREE.Color(INK),
      cInkD = new THREE.Color(INK2),
      cSmL = new THREE.Color("#f7ede1"),
      cSmD = new THREE.Color("#6a5a78");
    const m = new THREE.Vector2(-1e4, -1e4),
      mn = new THREE.Vector2(0.5, 0.5),
      tmp = new THREE.Vector2();
    let act = 0;
    const onMove = (e: PointerEvent) => {
      m.set(e.clientX, e.clientY);
      mn.set(e.clientX / innerWidth, 1 - e.clientY / innerHeight);
      act = e.pointerType === "touch" ? 0.85 : 1;
    };
    const onLeave = () => {
      act = 0;
      m.set(-1e4, -1e4);
    };
    const onResize = () => {
      r.setPixelRatio(dpr());
      r.setSize(innerWidth, innerHeight);
      u.uRes.value.set(innerWidth * dpr(), innerHeight * dpr());
      cam.right = innerWidth;
      cam.bottom = -innerHeight;
      cam.updateProjectionMatrix();
    };
    addEventListener("pointermove", onMove, { passive: true });
    addEventListener("pointerdown", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    addEventListener("resize", onResize);

    let lastX = scrollX,
      vel = 0,
      sx = scrollX;
    // Driven by gsap.ticker (not its own rAF) so it renders AFTER Lenis has moved the page in the same frame:
    // canvas art and DOM text never disagree by a frame, which is what makes scrolling look "stuttery".
    const render = (time: number, deltaMs = 16) => {
      const dt = Math.min(0.05, deltaMs / 1000);
      {
        const k = theme.current ?? 0;
        u.uBg.value.copy(cBgL).lerp(cBgD, k);
        u.uBgB.value.copy(cBgLB).lerp(cBgDB, k);
        u.uInk.value.copy(cInkL).lerp(cInkD, k);
        u.uSmoke.value.copy(cSmL).lerp(cSmD, k);
        // the page colour the DOM uses (text halos, glass panels) follows the shader so nothing ever looks pasted on
        tmpC.copy(u.uBg.value).lerp(u.uBgB.value, 0.5);
        const key = `${Math.round(tmpC.r * 255)},${Math.round(tmpC.g * 255)},${Math.round(tmpC.b * 255)}`;
        if (key !== lastBg) {
          lastBg = key;
          document.documentElement.style.setProperty("--bg", `rgb(${key})`);
        }
      }
      u.uTime.value = time;
      u.uProg.value += ((progress.current ?? 0) - u.uProg.value) * 0.05;
      u.uMouse.value.lerp(mn, 0.14);
      u.uAct.value += (act - u.uAct.value) * 0.08;
      sx = scrollX;
      u.uScroll.value = sx * dpr();
      vel += (Math.max(-1.5, Math.min(1.5, (sx - lastX) * 0.05)) - vel) * 0.12;
      lastX = sx;
      const W = innerWidth,
        H = innerHeight;
      for (const it of items) {
        const b = it.el.getBoundingClientRect();
        it.mesh.visible =
          it.loaded && b.right > -80 && b.left < W * REVEAL.startAt + 80;
        if (!it.mesh.visible) continue;
        const hs = it.hero ? 1 + 0.05 * it.hv * it.hv * (3 - 2 * it.hv) : 1; // hero: hover = a soft scale, nothing else
        it.mesh.scale.set(b.width * hs, b.height * hs, 1);
        it.mesh.position.set(b.left + b.width / 2, -(b.top + b.height / 2), 0);
        const mx = (m.x - b.left) / b.width,
          my = 1 - (m.y - b.top) / b.height,
          inside = mx > 0 && mx < 1 && my > 0 && my < 1;
        it.hv += ((inside ? 1 : 0) - it.hv) * 0.08;
        if (inside) it.mat.uniforms.uMouse.value.lerp(tmp.set(mx, my), 0.2);
        it.rv = Math.min(
          1,
          Math.max(
            0,
            it.rv +
              (startedRef.current && b.left < W * REVEAL.startAt
                ? dt / it.dur
                : -dt / REVEAL.reverseSeconds),
          ),
        );
        const w = it.mat.uniforms;
        w.uSize.value.set(b.width, b.height);
        w.uHover.value = it.hv;
        w.uReveal.value = it.rv;
        w.uVel.value = vel;
      }
      void H;
      r.clear();
      r.render(bg, cam0);
      r.clearDepth();
      r.render(imgs, cam);
    };
    gsap.ticker.add(render);

    api.current = {
      chapter(i) {
        const c = chapters[i],
          col = new THREE.Color(c.accent),
          han = c.book === "han",
          T = (o: THREE.Color, h: string) => {
            const n = new THREE.Color(h);
            gsap.to(o, {
              r: n.r,
              g: n.g,
              b: n.b,
              duration: 2,
              ease: "power2.inOut",
              overwrite: true,
            });
          };
        T(cBgL, han ? BG : c.pal[0]);
        T(cBgLB, han ? BGB : c.pal[1]);
        T(cBgD, c.pal[2]);
        T(cBgDB, c.pal[3]);
        gsap.to(u.uTint.value, {
          r: col.r,
          g: col.g,
          b: col.b,
          duration: 1.6,
          ease: "power2.inOut",
        });
        gsap.to(u.uOrb.value, {
          x: c.orb[0],
          y: c.orb[1],
          duration: 2.2,
          ease: "power2.inOut",
        });
      },
    };
    return () => {
      gsap.ticker.remove(render);
      r.dispose();
      removeEventListener("pointermove", onMove);
      removeEventListener("pointerdown", onMove);
      document.removeEventListener("mouseleave", onLeave);
      removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    api.current?.chapter(chapter);
  }, [chapter]);
  return <canvas ref={ref} className="scene" aria-hidden />;
}
