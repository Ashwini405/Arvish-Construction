
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ── Canvas: animated silk ribbon waves ── */
const HeroBackground = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const drawRibbon = (W, H, t, cfg) => {
      const { p0, p1, p2, p3, thickness, speed, phase, ampX, ampY, baseColor, glowColor, alpha } = cfg;
      const osc = (fx, fy, ox = 0) => ({
        x: fx + Math.sin(t * speed + phase + ox) * ampX,
        y: fy + Math.cos(t * speed * 0.65 + phase + ox + 1.2) * ampY,
      });
      const A = osc(p0[0], p0[1], 0);
      const B = osc(p1[0], p1[1], 0.5);
      const C = osc(p2[0], p2[1], 1.0);
      const D = osc(p3[0], p3[1], 1.5);
      const px = f => f * W, py = f => f * H;
      const th = thickness * H;
      const norm = (ax, ay, bx, by) => {
        const dx = bx - ax, dy = by - ay, len = Math.sqrt(dx*dx+dy*dy)||1;
        return { nx: -dy/len, ny: dx/len };
      };
      const nA = norm(A.x,A.y,B.x,B.y);
      const nD = norm(C.x,C.y,D.x,D.y);
      const t0x=px(A.x)+nA.nx*th, t0y=py(A.y)+nA.ny*th;
      const b0x=px(A.x)-nA.nx*th, b0y=py(A.y)-nA.ny*th;
      const t3x=px(D.x)+nD.nx*th, t3y=py(D.y)+nD.ny*th;
      const b3x=px(D.x)-nD.nx*th, b3y=py(D.y)-nD.ny*th;
      const mkEdge = s => ({
        c1x:px(B.x)+nA.nx*th*s, c1y:py(B.y)+nA.ny*th*s,
        c2x:px(C.x)+nD.nx*th*s, c2y:py(C.y)+nD.ny*th*s,
      });
      const eTop=mkEdge(1), eBot=mkEdge(-1);

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(t0x,t0y);
      ctx.bezierCurveTo(eTop.c1x,eTop.c1y,eTop.c2x,eTop.c2y,t3x,t3y);
      ctx.lineTo(b3x,b3y);
      ctx.bezierCurveTo(eBot.c2x,eBot.c2y,eBot.c1x,eBot.c1y,b0x,b0y);
      ctx.closePath();
      const [r,g,b_]=baseColor;
      const fg=ctx.createLinearGradient(t0x,t0y,b0x,b0y);
      fg.addColorStop(0,`rgba(${r},${g},${b_},0)`);
      fg.addColorStop(0.12,`rgba(${r},${g},${b_},${alpha*0.55})`);
      fg.addColorStop(0.5,`rgba(${r},${g},${b_},${alpha})`);
      fg.addColorStop(0.88,`rgba(${r},${g},${b_},${alpha*0.6})`);
      fg.addColorStop(1,`rgba(${r},${g},${b_},0)`);
      ctx.fillStyle=fg; ctx.fill(); ctx.restore();

      const [gr,gg,gb]=glowColor;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(t0x,t0y);
      ctx.bezierCurveTo(eTop.c1x,eTop.c1y,eTop.c2x,eTop.c2y,t3x,t3y);
      const hg=ctx.createLinearGradient(t0x,t0y,t3x,t3y);
      hg.addColorStop(0,`rgba(${gr},${gg},${gb},0)`);
      hg.addColorStop(0.2,`rgba(${gr},${gg},${gb},0.75)`);
      hg.addColorStop(0.5,`rgba(${gr},${gg},${gb},1)`);
      hg.addColorStop(0.8,`rgba(${gr},${gg},${gb},0.65)`);
      hg.addColorStop(1,`rgba(${gr},${gg},${gb},0)`);
      ctx.strokeStyle=hg; ctx.lineWidth=1.6;
      ctx.shadowBlur=22; ctx.shadowColor=`rgba(${gr},${gg},${gb},0.85)`;
      ctx.stroke(); ctx.restore();

      const inner=th*0.32;
      const eIn={
        c1x:px(B.x)+nA.nx*(th-inner),c1y:py(B.y)+nA.ny*(th-inner),
        c2x:px(C.x)+nD.nx*(th-inner),c2y:py(C.y)+nD.ny*(th-inner),
      };
      const i0x=px(A.x)+nA.nx*(th-inner),i0y=py(A.y)+nA.ny*(th-inner);
      const i3x=px(D.x)+nD.nx*(th-inner),i3y=py(D.y)+nD.ny*(th-inner);
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(i0x,i0y);
      ctx.bezierCurveTo(eIn.c1x,eIn.c1y,eIn.c2x,eIn.c2y,i3x,i3y);
      const ig=ctx.createLinearGradient(i0x,i0y,i3x,i3y);
      ig.addColorStop(0,`rgba(${gr},${gg},${gb},0)`);
      ig.addColorStop(0.35,`rgba(${gr},${gg},${gb},0.28)`);
      ig.addColorStop(0.65,`rgba(${gr},${gg},${gb},0.28)`);
      ig.addColorStop(1,`rgba(${gr},${gg},${gb},0)`);
      ctx.strokeStyle=ig; ctx.lineWidth=0.8;
      ctx.shadowBlur=10; ctx.shadowColor=`rgba(${gr},${gg},${gb},0.35)`;
      ctx.stroke(); ctx.restore();
    };

    const ribbons = [
      { p0:[-0.06,0.88],p1:[0.22,0.12],p2:[0.62,0.28],p3:[1.06,0.14], thickness:0.07,speed:0.00042,phase:0,ampX:0.018,ampY:0.038, baseColor:[6,22,95],glowColor:[70,145,255],alpha:0.95 },
      { p0:[-0.06,0.98],p1:[0.26,0.26],p2:[0.66,0.42],p3:[1.06,0.28], thickness:0.058,speed:0.00037,phase:0.9,ampX:0.014,ampY:0.032, baseColor:[4,16,70],glowColor:[45,105,210],alpha:0.78 },
      { p0:[-0.06,1.08],p1:[0.24,0.40],p2:[0.60,0.56],p3:[1.06,0.42], thickness:0.042,speed:0.00031,phase:1.8,ampX:0.010,ampY:0.025, baseColor:[3,10,50],glowColor:[28,75,175],alpha:0.58 },
      { p0:[0.52,0.70],p1:[0.68,0.48],p2:[0.86,0.32],p3:[1.10,0.50], thickness:0.048,speed:0.00044,phase:2.5,ampX:0.014,ampY:0.028, baseColor:[5,20,80],glowColor:[55,125,235],alpha:0.72 },
      { p0:[-0.06,0.78],p1:[0.18,0.05],p2:[0.56,0.20],p3:[1.06,0.06], thickness:0.028,speed:0.00035,phase:3.3,ampX:0.016,ampY:0.042, baseColor:[8,32,110],glowColor:[95,165,255],alpha:0.42 },
    ];

    const render = (ts) => {
      const W=canvas.offsetWidth,H=canvas.offsetHeight;
      ctx.clearRect(0,0,W,H);
      ctx.fillStyle="#020208"; ctx.fillRect(0,0,W,H);
      const pool=(cx,cy,rx)=>{
        const g=ctx.createRadialGradient(W*cx,H*cy,0,W*cx,H*cy,W*rx);
        g.addColorStop(0,"rgba(6,18,75,0.16)"); g.addColorStop(1,"rgba(0,0,0,0)");
        ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
      };
      pool(0.12,0.78,0.48); pool(0.88,0.22,0.38);
      [...ribbons].reverse().forEach(cfg=>drawRibbon(W,H,ts,cfg));
      const vig=(x0,y0,x1,y1,stops)=>{
        const g=ctx.createLinearGradient(x0*W,y0*H,x1*W,y1*H);
        stops.forEach(([t,a])=>g.addColorStop(t,`rgba(2,2,8,${a})`));
        ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
      };
      vig(0,0,0,0.22,[[0,1],[1,0]]); vig(0,0.78,0,1,[[0,0],[1,1]]);
      vig(0,0,0.09,0,[[0,0.88],[1,0]]); vig(0.91,0,1,0,[[0,0],[1,0.88]]);
      ctx.fillStyle="rgba(0,0,0,0.055)";
      for(let y=0;y<H;y+=3) ctx.fillRect(0,y,W,1);
      rafRef.current=requestAnimationFrame(render);
    };

    rafRef.current=requestAnimationFrame(render);
    return()=>{cancelAnimationFrame(rafRef.current);window.removeEventListener("resize",resize);};
  },[]);

  return <canvas ref={canvasRef} style={{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}} />;
};

/* ── Selection handles ── */
const Handle = ({style}) => (
  <div style={{position:"absolute",...style,width:7,height:7,background:"#ffffff",
    border:"1.5px solid rgba(70,130,255,0.85)",borderRadius:1.5,
    boxShadow:"0 0 7px rgba(70,130,255,0.6)",zIndex:2}} />
);

const SelectionCard = ({children,style={}}) => (
  <div style={{position:"relative",display:"inline-block",...style}}>
    <div style={{position:"absolute",inset:0,
      background:"linear-gradient(160deg,rgba(12,38,148,0.48) 0%,rgba(6,20,75,0.6) 100%)",
      borderRadius:4,border:"1.5px solid rgba(55,115,255,0.55)",backdropFilter:"blur(5px)",
      boxShadow:"0 0 35px rgba(25,80,255,0.18),inset 0 1px 0 rgba(110,175,255,0.1)"}} />
    <div style={{position:"absolute",inset:-6,border:"1px dashed rgba(75,135,255,0.5)",
      borderRadius:4,pointerEvents:"none",zIndex:1}} />
    <Handle style={{top:-8,left:-8}} /><Handle style={{top:-8,right:-8}} />
    <Handle style={{bottom:-8,left:-8}} /><Handle style={{bottom:-8,right:-8}} />
    <Handle style={{top:-8,left:"50%",transform:"translateX(-50%)"}} />
    <Handle style={{bottom:-8,left:"50%",transform:"translateX(-50%)"}} />
    <Handle style={{left:-8,top:"50%",transform:"translateY(-50%)"}} />
    <Handle style={{right:-8,top:"50%",transform:"translateY(-50%)"}} />
    {children}
  </div>
);

/* ── Slide 2 immersive canvas ── */
const Slide2Canvas = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Particles
    const PARTS = Array.from({length: 120}, (_, i) => ({
      x: Math.random(), y: Math.random(),
      r: 0.3 + Math.random() * 1.4,
      sp: 0.00004 + Math.random() * 0.00012,
      ph: Math.random() * Math.PI * 2,
      drift: (Math.random() - 0.5) * 0.00008,
      vy: -0.00006 - Math.random() * 0.00010,
    }));

    // Orbs
    const ORBS = [
      { cx:0.22, cy:0.38, r:0.28, c1:[30,80,255], c2:[80,40,200] },
      { cx:0.78, cy:0.62, r:0.22, c1:[0,180,255], c2:[20,60,180] },
      { cx:0.50, cy:0.82, r:0.35, c1:[60,20,180], c2:[10,10,60]  },
    ];

    // Light streaks
    const STREAKS = Array.from({length: 8}, (_, i) => ({
      y: 0.1 + i * 0.11,
      sp: 0.00018 + Math.random() * 0.00022,
      ph: Math.random() * Math.PI * 2,
      w: 0.25 + Math.random() * 0.35,
      alpha: 0.04 + Math.random() * 0.06,
    }));

    const render = (ts) => {
      const W = canvas.offsetWidth, H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      // Base gradient bg
      const bg = ctx.createLinearGradient(0, 0, W * 0.6, H);
      bg.addColorStop(0, "#04040f");
      bg.addColorStop(0.45, "#060818");
      bg.addColorStop(1, "#020208");
      ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

      // Orbs
      ORBS.forEach(o => {
        const pulse = 0.7 + Math.sin(ts * 0.0004 + o.cx * 5) * 0.3;
        const g = ctx.createRadialGradient(W*o.cx, H*o.cy, 0, W*o.cx, H*o.cy, W*o.r*pulse);
        g.addColorStop(0, `rgba(${o.c1[0]},${o.c1[1]},${o.c1[2]},0.18)`);
        g.addColorStop(0.4, `rgba(${o.c2[0]},${o.c2[1]},${o.c2[2]},0.09)`);
        g.addColorStop(1, `rgba(0,0,0,0)`);
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      });

      // Horizontal light streaks
      STREAKS.forEach(s => {
        const x0 = W * (0.5 + Math.sin(ts * s.sp + s.ph) * 0.5 - s.w / 2);
        const x1 = x0 + W * s.w;
        const y = H * s.y;
        const g = ctx.createLinearGradient(x0, y, x1, y);
        g.addColorStop(0, `rgba(80,140,255,0)`);
        g.addColorStop(0.3, `rgba(100,170,255,${s.alpha})`);
        g.addColorStop(0.5, `rgba(160,210,255,${s.alpha * 1.8})`);
        g.addColorStop(0.7, `rgba(100,170,255,${s.alpha})`);
        g.addColorStop(1, `rgba(80,140,255,0)`);
        ctx.save();
        ctx.fillStyle = g;
        ctx.fillRect(x0, y - 1, x1 - x0, 2);
        ctx.shadowBlur = 18; ctx.shadowColor = "rgba(100,170,255,0.6)";
        ctx.fillRect(x0, y - 0.5, x1 - x0, 1);
        ctx.restore();
      });

      // Floating particles
      PARTS.forEach(p => {
        p.y += p.vy;
        p.x += p.drift;
        if (p.y < -0.02) p.y = 1.02;
        if (p.x < -0.02) p.x = 1.02;
        if (p.x > 1.02) p.x = -0.02;
        const pulse = 0.4 + Math.sin(ts * p.sp * 80 + p.ph) * 0.6;
        ctx.save();
        ctx.globalAlpha = pulse * 0.9;
        ctx.beginPath();
        ctx.arc(p.x * W, p.y * H, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${140 + Math.sin(p.ph)*60},${180 + Math.cos(p.ph)*40},255,1)`;
        ctx.shadowBlur = 8; ctx.shadowColor = "rgba(120,180,255,0.8)";
        ctx.fill();
        ctx.restore();
      });

      // Central glowing core
      const corePulse = 0.85 + Math.sin(ts * 0.0006) * 0.15;
      const core = ctx.createRadialGradient(W*0.5, H*0.5, 0, W*0.5, H*0.5, W*0.18*corePulse);
      core.addColorStop(0, `rgba(120,180,255,${0.12*corePulse})`);
      core.addColorStop(0.4, `rgba(60,100,255,0.06)`);
      core.addColorStop(1, `rgba(0,0,0,0)`);
      ctx.fillStyle = core; ctx.fillRect(0, 0, W, H);

      // Diagonal grid lines
      ctx.save();
      ctx.globalAlpha = 0.025;
      ctx.strokeStyle = "rgba(80,130,255,1)";
      ctx.lineWidth = 0.5;
      for (let i = -H; i < W + H; i += 60) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i + H, H); ctx.stroke();
      }
      ctx.restore();

      // Vignette
      const vig = ctx.createRadialGradient(W*0.5, H*0.5, W*0.3, W*0.5, H*0.5, W*0.85);
      vig.addColorStop(0, "rgba(0,0,0,0)");
      vig.addColorStop(1, "rgba(0,0,8,0.72)");
      ctx.fillStyle = vig; ctx.fillRect(0, 0, W, H);

      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);
    return () => { cancelAnimationFrame(rafRef.current); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} style={{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}} />;
};

/* ── Main Hero ── */
const HeroSection = () => {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [cardFlip, setCardFlip] = useState(false);

  const goToSlide2 = () => {
    if (animating || slide === 1) return;
    setAnimating(true);
    setCardFlip(true);
    setTimeout(() => {
      setSlide(1);
      setAnimating(false);
    }, 700);
  };

  const goToSlide1 = () => {
    if (animating || slide === 0) return;
    setAnimating(true);
    setTimeout(() => {
      setSlide(0);
      setCardFlip(false);
      setAnimating(false);
    }, 600);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=Cormorant+Garamond:wght@300;400&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

        .c8-hero{
          position:relative;width:100vw;height:100vh;overflow:hidden;
          background:#020208;font-family:'DM Sans',sans-serif;color:#fff;
          user-select:none;
        }

        /* NAV */
        .c8-nav{
          position:absolute;top:0;left:0;right:0;
          display:grid;grid-template-columns:1fr auto 1fr;
          align-items:center;
          padding:0 36px;height:64px;z-index:30;
          background:rgba(2,2,8,0.45);backdrop-filter:blur(18px);
          border-bottom:1px solid rgba(255,255,255,0.06);
        }
        .c8-logo{
          display:flex;flex-direction:column;gap:1px;
          text-decoration:none;
        }
        .c8-logo-brand{
          font-size:15px;font-weight:700;letter-spacing:.08em;
          color:#fff;text-transform:uppercase;
        }
        .c8-logo-sub{
          font-size:9px;font-weight:400;letter-spacing:.28em;
          color:#fff;text-transform:uppercase;
        }
        .c8-logo-divider{
          display:inline-block;width:1px;height:28px;
          background:rgba(255,255,255,0.18);margin:0 12px;vertical-align:middle;
        }
        .c8-nav-center{
          display:flex;align-items:center;gap:32px;
        }
        .c8-nav-link{
          font-size:12px;font-weight:400;letter-spacing:.06em;
          color:#fff;cursor:pointer;
          background:none;border:none;padding:0;
          transition:color 0.2s;white-space:nowrap;
          position:relative;
        }
        .c8-nav-link::after{
          content:'';position:absolute;bottom:-4px;left:0;right:0;
          height:1px;background:rgba(100,160,255,0.7);
          transform:scaleX(0);transition:transform 0.2s;
        }
        .c8-nav-link:hover{color:#fff}
        .c8-nav-link:hover::after{transform:scaleX(1)}
        .c8-nav-r{
          display:flex;align-items:center;gap:6px;justify-content:flex-end;
        }
        .c8-nav-icon{
          display:flex;align-items:center;gap:6px;
          font-size:12px;color:#fff;
          background:none;border:none;cursor:pointer;
          padding:6px 12px;border-radius:6px;
          transition:background 0.2s,color 0.2s;
          letter-spacing:.04em;
        }
        .c8-nav-icon:hover{background:rgba(255,255,255,0.07);color:#fff}
        .c8-nav-menu{
          display:flex;align-items:center;gap:8px;
          font-size:12px;color:#fff;
          background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);
          border-radius:6px;padding:6px 14px;cursor:pointer;
          transition:background 0.2s,color 0.2s;
          letter-spacing:.04em;
        }
        .c8-nav-menu:hover{background:rgba(255,255,255,0.1);color:#fff}

        .c8-menu-wrap{
          position:relative;
        }
        .c8-menu-drop{
          position:absolute;top:calc(100% + 12px);right:0;
          width:320px;
          background:rgba(6,8,20,0.97);backdrop-filter:blur(24px);
          border:1px solid rgba(255,255,255,0.08);border-radius:16px;
          padding:8px;min-width:240px;
          opacity:0;visibility:hidden;pointer-events:none;
          transform:translateY(-6px);
          transition:opacity 0.22s,transform 0.22s,visibility 0.22s;
          box-shadow:0 24px 60px rgba(0,0,0,0.55),0 0 0 1px rgba(255,255,255,0.04);
          z-index:100;
        }
        .c8-menu-drop::before{
          content:'';position:absolute;top:-5px;right:20px;
          width:10px;height:10px;background:rgba(6,8,20,0.97);
          border-left:1px solid rgba(255,255,255,0.08);border-top:1px solid rgba(255,255,255,0.08);
          transform:rotate(45deg);
        }
        .c8-menu-wrap:hover .c8-menu-drop{
          opacity:1;visibility:visible;pointer-events:auto;
          transform:translateY(0);
        }

        /* OUR STORY DROPDOWN */
        .c8-story-wrap{
          position:relative;
        }
        .c8-story-drop{
          position:absolute;top:calc(100% + 12px);left:50%;transform:translateX(-50%);
          background:rgba(6,8,20,0.97);backdrop-filter:blur(24px);
          border:1px solid rgba(255,255,255,0.08);border-radius:12px;
          padding:8px;min-width:220px;
          opacity:0;visibility:hidden;pointer-events:none;
          transform:translateX(-50%) translateY(-6px);
          transition:opacity 0.22s,transform 0.22s,visibility 0.22s;
          box-shadow:0 24px 60px rgba(0,0,0,0.6),0 0 0 1px rgba(255,255,255,0.04);
          z-index:100;
        }
        .c8-story-drop::before{
          content:'';position:absolute;top:-5px;left:50%;transform:translateX(-50%);
          width:10px;height:10px;background:rgba(6,8,20,0.97);
          border-left:1px solid rgba(255,255,255,0.08);border-top:1px solid rgba(255,255,255,0.08);
          transform:translateX(-50%) rotate(45deg);
        }
        .c8-story-wrap:hover .c8-story-drop{
          opacity:1;visibility:visible;pointer-events:auto;
          transform:translateX(-50%) translateY(0);
        }
        .c8-drop-item{
          display:flex;align-items:center;gap:12px;
          width:100%;padding:10px 14px;border-radius:8px;
          background:none;border:none;cursor:pointer;
          text-align:left;transition:background 0.15s;
        }
        .c8-drop-item:hover{background:rgba(255,255,255,0.05)}
        .c8-drop-icon{
          width:30px;height:30px;border-radius:7px;flex-shrink:0;
          background:rgba(212,161,58,0.1);border:1px solid rgba(212,161,58,0.2);
          display:flex;align-items:center;justify-content:center;
          font-size:14px;color:#D4A13A;
        }
        .c8-drop-title{
          display:block;font-size:13px;font-weight:500;color:#fff;letter-spacing:.02em;
        }
        .c8-drop-sub{
          display:block;font-size:10px;color:rgba(160,185,230,0.45);letter-spacing:.04em;margin-top:1px;
        }

        /* SLIDE CONTAINER */
        .c8-slides{position:absolute;inset:0;overflow:hidden}

        /* SLIDE 1 */
        .c8-slide1{
          position:absolute;inset:0;
          transition:transform 0.7s cubic-bezier(0.7,0,0.3,1), opacity 0.7s ease;
        }
        .c8-slide1.active{transform:translateY(0);opacity:1}
        .c8-slide1.exiting{transform:translateY(-8%) scale(0.96);opacity:0}

        /* SLIDE 2 */
        .c8-slide2{
          position:absolute;inset:0;
          transition:transform 0.75s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease;
        }
        .c8-slide2.entering{transform:translateY(100%);opacity:0}
        .c8-slide2.active{transform:translateY(0);opacity:1}

        /* SIDE TEXT */
        .c8-side-l{
          position:absolute;left:3.5%;top:50%;transform:translateY(-50%);
          max-width:200px;z-index:20;animation:c8up 1s .35s both;
        }
        .c8-side-l strong{display:block;font-size:12px;font-weight:500;color:#bcc8e8;margin-bottom:8px}
        .c8-side-l p{font-size:11px;line-height:1.72;color:rgba(135,152,192,.78);font-weight:300;margin-bottom:18px}
        .c8-side-l-tags{display:flex;flex-direction:column;gap:7px}
        .c8-tag{
          font-size:10px;letter-spacing:.1em;color:rgba(100,150,255,0.7);
          background:rgba(40,80,255,0.08);border:1px solid rgba(60,110,255,0.18);
          border-radius:20px;padding:4px 11px;display:inline-block;width:fit-content;
        }
        .c8-side-r{
          position:absolute;right:3.5%;top:50%;transform:translateY(-50%);
          max-width:210px;z-index:20;text-align:right;animation:c8up 1s .45s both;
        }
        .c8-side-r p{font-size:11px;line-height:1.75;color:rgba(128,145,188,.75);font-weight:300;margin-bottom:18px}
        .c8-side-r-metrics{display:flex;flex-direction:column;gap:10px;align-items:flex-end}
        .c8-metric-row{display:flex;flex-direction:column;align-items:flex-end;gap:2px}
        .c8-metric-val{font-size:20px;font-weight:300;color:#fff;letter-spacing:-.02em;line-height:1}
        .c8-metric-val em{font-style:normal;font-size:12px;color:rgba(100,160,255,0.8)}
        .c8-metric-lbl{font-size:10px;letter-spacing:.12em;color:rgba(100,130,190,0.55);text-transform:uppercase}
        .c8-metric-bar{width:80px;height:2px;background:rgba(255,255,255,0.07);border-radius:1px;margin-top:3px;overflow:hidden}
        .c8-metric-bar-fill{height:100%;border-radius:1px;background:linear-gradient(90deg,rgba(50,100,255,0.5),rgba(100,180,255,0.8))}

        /* CENTER SLIDE 1 */
        .c8-center{
          position:absolute;inset:0;display:flex;align-items:center;
          justify-content:center;z-index:20;flex-direction:column;
        }
        .c8-stack{display:flex;flex-direction:column;align-items:center;text-align:center}
        .c8-create{
          font-size:clamp(46px,6.2vw,84px);font-weight:300;color:#fff;
          letter-spacing:-.02em;line-height:1;margin-bottom:2px;
          animation:c8up .85s .08s both;
        }
        .c8-your{
          font-size:clamp(11px,1.3vw,16px);color:rgba(168,186,228,.62);
          letter-spacing:.2em;font-weight:300;font-style:italic;
          margin-bottom:16px;animation:c8up .85s .18s both;
        }
        .c8-card-pad{padding:5px 40px 9px;position:relative;z-index:1}
        .c8-word{
          font-family:'Dancing Script',cursive;
          font-size:clamp(34px,4.8vw,64px);font-weight:700;color:#fff;
          display:block;line-height:1.2;letter-spacing:.02em;
          text-shadow:0 0 18px rgba(85,158,255,.95),0 0 45px rgba(48,115,255,.55),0 0 80px rgba(28,85,255,.25),0 2px 5px rgba(0,0,0,.65);
        }

        /* ROTATING BOX */
        .c8-box-wrap{
          perspective:800px;
          margin-bottom:4px;
          animation:c8up .85s .28s both;
        }
        .c8-box{
          transform-style:preserve-3d;
          transition:transform 0.7s cubic-bezier(0.7,0,0.3,1);
          position:relative;
        }
        .c8-box.flipped{transform:rotateX(-180deg)}
        .c8-face{backface-visibility:hidden;-webkit-backface-visibility:hidden;}
        .c8-face-back{
          position:absolute;top:0;left:0;width:100%;height:100%;
          transform:rotateX(180deg);
          backface-visibility:hidden;-webkit-backface-visibility:hidden;
        }

        .c8-cta-wrap{margin-top:28px;display:flex;flex-direction:column;align-items:center;gap:11px;animation:c8up .85s .52s both}
        .c8-cta{
          font-size:12px;font-weight:500;color:#fff;
          background:linear-gradient(135deg,#2e60ff,#1433c0);
          border:none;border-radius:24px;padding:9px 22px;cursor:pointer;
          display:inline-flex;align-items:center;gap:7px;
          box-shadow:0 0 22px rgba(38,88,255,.5),0 2px 8px rgba(0,0,0,.5);
          letter-spacing:.03em;
          transition:box-shadow 0.2s,transform 0.15s;
        }
        .c8-cta:hover{box-shadow:0 0 34px rgba(38,88,255,.75),0 4px 14px rgba(0,0,0,.6);transform:translateY(-1px)}
        .c8-bar{width:175px;height:3px;background:rgba(255,255,255,.07);border-radius:2px;overflow:hidden;position:relative}
        .c8-bar-fill{
          position:absolute;inset-y:0;left:0;width:40%;border-radius:2px;
          background:linear-gradient(90deg,rgba(55,115,255,.65),rgba(95,175,255,.9));
          animation:c8bar 3.2s ease-in-out infinite;
        }
        @keyframes c8bar{0%,100%{width:28%;opacity:.55}50%{width:62%;opacity:1}}

        /* SLIDE 2 CONTENT */
        .c8-planet-center{
          position:absolute;inset:0;display:flex;
          flex-direction:column;align-items:center;justify-content:center;
          z-index:20;padding:80px 40px 40px;
          gap:0;
        }
        .c8-s2-eyebrow{
          font-size:10px;letter-spacing:.35em;color:rgba(100,170,255,0.55);
          text-transform:uppercase;margin-bottom:20px;
          animation:c8up2 0.9s 0.1s both;
          display:flex;align-items:center;gap:10px;
        }
        .c8-s2-eyebrow::before,.c8-s2-eyebrow::after{
          content:'';display:block;width:32px;height:1px;
          background:linear-gradient(90deg,transparent,rgba(100,170,255,0.4));
        }
        .c8-s2-eyebrow::after{background:linear-gradient(90deg,rgba(100,170,255,0.4),transparent)}
        .c8-planet-title{
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(36px,5.5vw,76px);
          font-weight:300;
          color:#ffffff;
          letter-spacing:-.02em;
          line-height:1.12;
          text-align:center;
          max-width:700px;
          margin-bottom:10px;
          animation:c8up2 0.9s 0.2s both;
        }
        .c8-planet-title span{
          background:linear-gradient(135deg,#a0c4ff,#6090ff);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;
          background-clip:text;
        }
        .c8-s2-sub{
          font-size:13px;color:rgba(160,185,230,0.55);font-weight:300;
          letter-spacing:.04em;margin-bottom:36px;
          animation:c8up2 0.9s 0.3s both;
          text-align:center;max-width:420px;line-height:1.7;
        }
        .c8-planet-cta{
          animation:c8up2 0.9s 0.4s both;
          display:flex;align-items:center;gap:14px;margin-bottom:52px;
        }
        .c8-btn-primary{
          font-size:13px;font-weight:500;color:#fff;letter-spacing:.06em;
          background:linear-gradient(135deg,rgba(50,100,255,0.9),rgba(30,60,200,0.9));
          border:1px solid rgba(100,160,255,0.35);
          border-radius:4px;padding:13px 30px;cursor:pointer;
          display:inline-flex;align-items:center;gap:10px;
          box-shadow:0 0 40px rgba(50,100,255,0.35),0 4px 20px rgba(0,0,0,0.5),inset 0 1px 0 rgba(160,200,255,0.15);
          transition:all 0.25s;
          text-transform:uppercase;
        }
        .c8-btn-primary:hover{transform:translateY(-2px);box-shadow:0 0 60px rgba(60,120,255,0.55),0 8px 30px rgba(0,0,0,0.6)}
        .c8-btn-icon{
          width:20px;height:20px;border-radius:50%;
          background:rgba(255,255,255,0.15);
          display:flex;align-items:center;justify-content:center;
        }
        .c8-btn-ghost{
          font-size:12px;color:rgba(140,170,220,0.65);cursor:pointer;
          background:none;border:1px solid rgba(100,140,220,0.2);
          border-radius:4px;padding:13px 22px;
          letter-spacing:.06em;text-transform:uppercase;
          transition:all 0.2s;
        }
        .c8-btn-ghost:hover{color:#fff;border-color:rgba(120,170,255,0.5);background:rgba(80,120,255,0.08)}

        /* FEATURE CARDS */
        .c8-s2-cards{
          display:flex;gap:14px;animation:c8up2 0.9s 0.55s both;
          flex-wrap:wrap;justify-content:center;
        }
        .c8-s2-card{
          background:rgba(255,255,255,0.03);
          border:1px solid rgba(80,130,255,0.15);
          border-radius:8px;padding:18px 22px;
          min-width:140px;max-width:160px;
          backdrop-filter:blur(20px);
          position:relative;overflow:hidden;
          transition:transform 0.3s,border-color 0.3s;
        }
        .c8-s2-card::before{
          content:'';position:absolute;top:0;left:0;right:0;height:1px;
          background:linear-gradient(90deg,transparent,rgba(100,170,255,0.4),transparent);
        }
        .c8-s2-card:hover{transform:translateY(-4px);border-color:rgba(100,160,255,0.35)}
        .c8-s2-card-icon{
          font-size:20px;margin-bottom:10px;display:block;
        }
        .c8-s2-card-val{
          font-size:clamp(20px,2.2vw,28px);font-weight:300;color:#fff;
          letter-spacing:-.02em;line-height:1;
        }
        .c8-s2-card-val sup{
          font-size:12px;color:rgba(100,170,255,0.8);vertical-align:super;
        }
        .c8-s2-card-lbl{
          font-size:10px;letter-spacing:.14em;color:rgba(100,140,200,0.55);
          text-transform:uppercase;margin-top:5px;
        }

        @keyframes c8up2{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}

        /* DOTS */
        .c8-dots{position:absolute;bottom:20px;left:50%;transform:translateX(-50%);display:flex;gap:5px;align-items:center;z-index:30}
        .c8-dot{width:5px;height:5px;border-radius:50%;background:rgba(255,255,255,.18);cursor:pointer;transition:all 0.3s}
        .c8-dot:hover{background:rgba(255,255,255,.4)}
        .c8-dot.on{width:20px;border-radius:3px;background:linear-gradient(90deg,#2e60ff,#5e9aff)}

        /* Sweep shimmer */
        .c8-sweep{
          position:absolute;inset:0;pointer-events:none;z-index:15;
          background:linear-gradient(110deg,transparent 0%,transparent 36%,rgba(130,182,255,.022) 44%,rgba(210,232,255,.048) 50%,rgba(130,182,255,.022) 56%,transparent 64%,transparent 100%);
          filter:blur(14px);
          animation:c8sweep 9s ease-in-out infinite;
        }
        @keyframes c8sweep{
          0%{transform:translateX(-80%) skewX(-5deg);opacity:0}
          8%{opacity:1}
          52%{transform:translateX(80%) skewX(-5deg);opacity:1}
          68%{opacity:0}
          100%{transform:translateX(120%) skewX(-5deg);opacity:0}
        }

        @keyframes c8up{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
      `}</style>

      <section className="c8-hero">
        <div className="c8-slides">
          {/* SLIDE 1 */}
          <div className={`c8-slide1 ${slide === 0 ? 'active' : 'exiting'}`}>
            <HeroBackground />
            <div className="c8-sweep" />

            {/* Side left */}
            <div className="c8-side-l">
              <strong>Welcome to Arvish Consructions</strong>
              <p>A new era of AI that puts you in the driver's seat.</p>
              <div className="c8-side-l-tags">
                <span className="c8-tag">✦ AI Content</span>
                <span className="c8-tag">✦ Brand Story</span>
                <span className="c8-tag">✦ Multichannel</span>
                <span className="c8-tag">✦ Scalable</span>
              </div>
            </div>

            {/* CENTER */}
            <div className="c8-center">
              <div className="c8-stack">
                <h1 className="c8-create">Create</h1>
                <p className="c8-your">your</p>

                {/* Rotating box with world/story */}
                <div className="c8-box-wrap">
                  <div className={`c8-box ${cardFlip ? 'flipped' : ''}`}>
                    {/* Front face: world */}
                    <div className="c8-face">
                      <SelectionCard>
                        <div className="c8-card-pad"><span className="c8-word">world</span></div>
                      </SelectionCard>
                    </div>
                    {/* Back face: story */}
                    <div className="c8-face-back">
                      <SelectionCard>
                        <div className="c8-card-pad"><span className="c8-word">story</span></div>
                      </SelectionCard>
                    </div>
                  </div>
                </div>

                <div className="c8-cta-wrap">
                  <button className="c8-cta" onClick={goToSlide2}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
                  click to more
                  </button>
                  <div className="c8-bar"><div className="c8-bar-fill" /></div>
                </div>
              </div>
            </div>

            {/* Side right */}
            {/* <div className="c8-side-r">
              <p>Our mission is to enhance your online presence, your brand story, and elevate your visibility.</p>
              <div className="c8-side-r-metrics">
                <div className="c8-metric-row">
                  <div className="c8-metric-val">10x<em> faster</em></div>
                  <div className="c8-metric-lbl">Content Output</div>
                  <div className="c8-metric-bar"><div className="c8-metric-bar-fill" style={{width:'90%'}} /></div>
                </div>
                <div className="c8-metric-row">
                  <div className="c8-metric-val">98<em>%</em></div>
                  <div className="c8-metric-lbl">Brand Accuracy</div>
                  <div className="c8-metric-bar"><div className="c8-metric-bar-fill" style={{width:'98%'}} /></div>
                </div>
                <div className="c8-metric-row">
                  <div className="c8-metric-val">5k<em>+ users</em></div>
                  <div className="c8-metric-lbl">Active Creators</div>
                  <div className="c8-metric-bar"><div className="c8-metric-bar-fill" style={{width:'72%'}} /></div>
                </div>
              </div>
            </div> */}
          </div>

          {/* SLIDE 2 */}
          <div className={`c8-slide2 ${slide === 1 ? 'active' : 'entering'}`}>
            <Slide2Canvas />

            <div className="c8-planet-center">
              <div className="c8-s2-eyebrow">Arvish Constructions</div>
              <h2 className="c8-planet-title">
                Building <span>Iconic Spaces</span>,<br />Crafted for Generations
              </h2>
              <p className="c8-s2-sub">Premium residential & commercial developments that redefine modern living with precision, elegance, and lasting quality.</p>
              <div className="c8-planet-cta">
                <button className="c8-btn-primary" onClick={() => navigate('/projects')}>
                  <span className="c8-btn-icon">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21"/></svg>
                  </span>
                  Explore Projects
                </button>
                <button className="c8-btn-ghost" onClick={goToSlide1}>← Back</button>
              </div>
              <div className="c8-s2-cards">
                <div className="c8-s2-card">
                  <span className="c8-s2-card-icon">🏗️</span>
                  <div className="c8-s2-card-val">120<sup>+</sup></div>
                  <div className="c8-s2-card-lbl">Projects Delivered</div>
                </div>
                <div className="c8-s2-card">
                  <span className="c8-s2-card-icon">🏙️</span>
                  <div className="c8-s2-card-val">18<sup>+</sup></div>
                  <div className="c8-s2-card-lbl">Cities Presence</div>
                </div>
                <div className="c8-s2-card">
                  <span className="c8-s2-card-icon">⭐</span>
                  <div className="c8-s2-card-val">4.9<sup>★</sup></div>
                  <div className="c8-s2-card-lbl">Client Rating</div>
                </div>
                <div className="c8-s2-card">
                  <span className="c8-s2-card-icon">🏆</span>
                  <div className="c8-s2-card-val">35<sup>+</sup></div>
                  <div className="c8-s2-card-lbl">Awards Won</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NAV (always on top) */}
        <nav className="c8-nav">
          <div className="c8-logo">
            <div>
              <span className="c8-logo-brand">Arvish</span>
              <span className="c8-logo-divider"></span>
              <span className="c8-logo-sub">PROPERTIES</span>
            </div>
          </div>
          <div className="c8-nav-center">
            <div className="c8-story-wrap">
              <button className="c8-nav-link">Our Story</button>
              <div className="c8-story-drop">
                <button className="c8-drop-item" onClick={() => navigate('/our-story/about')}>
                  <span className="c8-drop-icon">◈</span>
                  <span>
                    <span className="c8-drop-title">About Us</span>
                    
                  </span>
                </button>
                <button className="c8-drop-item" onClick={() => navigate('/our-story/management')}>
                  <span className="c8-drop-icon">◉</span>
                  <span>
                    <span className="c8-drop-title">Management</span>
                   
                  </span>
                </button>
                <button className="c8-drop-item" onClick={() => navigate('/our-story/sustainability')}>
                  <span className="c8-drop-icon">◎</span>
                  <span>
                    <span className="c8-drop-title">Sustainability</span>
                    
                  </span>
                </button>
                <button className="c8-drop-item" onClick={() => navigate('/our-story/design')}>
                  <span className="c8-drop-icon">◎</span>
                  <span>
                    <span className="c8-drop-title">Design</span>
                    
                  </span>
                </button>
              </div>
            </div>
            <button className="c8-nav-link" onClick={() => navigate('/projects')}>Our Projects</button>
            <button className="c8-nav-link" onClick={() => navigate('/careers')}>Careers</button>
          </div>
          <div className="c8-nav-r">
            <button className="c8-nav-icon" onClick={() => navigate('/contact')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Contact
            </button>
            <button className="c8-nav-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              Search
            </button>
            <div className="c8-menu-wrap">
              <button className="c8-nav-menu">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <rect y="0" width="14" height="1.5" rx=".75" fill="currentColor"/>
                  <rect y="4.25" width="10" height="1.5" rx=".75" fill="currentColor"/>
                  <rect y="8.5" width="12" height="1.5" rx=".75" fill="currentColor"/>
                </svg>
                Menu
              </button>
              <div className="c8-menu-drop">
                {[
                  { label: "Home", path: "/home" },
                  { label: "Projects", path: "/projects" },
                  { label: "Arvish's Explorations", path: "/diyas-explorations"},
                  { label: "Investors", path: "/investors"},
                  { label: "Media Center", path: "/media-center" },
                  { label: "NRI Corner", path: "/nri-corner"},
                  { label: "Blogs", path: "/blog" },
                  { label: "Our Story", path: "/our-story"},
                  { label: "Arvish Ambassador", path: "/godrej-ambassador" },
                  { label: "Enquire", path: "/enquire" },
                  { label: "Schedule a site visit", path: "/schedule-site-visit" },
                  { label: "Work with Us", path: "/work-with-us" },
                  { label: "Reach Us", path: "/reach-us"},
                ].map((item, index) => (
                  <button
                    key={index}
                    className="c8-drop-item"
                    onClick={() => navigate(item.path)}
                  >
                    <span className="c8-drop-icon">→</span>
                    <span>
                      <span className="c8-drop-title">{item.label}</span>
                      <span className="c8-drop-sub">{item.sub}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>


      </section>
    </>
  );
};

export default HeroSection;