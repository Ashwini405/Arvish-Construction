import React, { useEffect, useRef, useState, useCallback } from 'react';

/* ═══════════════════════════════════════════════════
   DESIGN TOKENS
═══════════════════════════════════════════════════ */
const C = {
  accent:   '#00C8E8',
  accent2:  '#0099B8',
  gold:     '#E8C84A',
  bg:       '#070E14',
  bgCard:   '#0B1520',
  border:   'rgba(0,200,232,0.14)',
  borderHi: 'rgba(0,200,232,0.38)',
  text:     '#D8E8F0',
  textDim:  'rgba(180,210,225,0.48)',
};

const CARD_H = 560;

/* ═══════════════════════════════════════════════════
   FEATURES
═══════════════════════════════════════════════════ */
const features = [
  { id:'01', label:'Excellence in Execution',    tag:'QUALITY',  sub:'We deliver projects that exceed expectations through meticulous planning, skilled craftsmanship, and unwavering commitment to quality at every phase.',                          icon:'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
  { id:'02', label:'Safety First Culture',       tag:'SAFETY',   sub:'Comprehensive safety protocols and rigorous training programs ensure every project is completed without compromise to worker or public well-being.',                               icon:'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
  { id:'03', label:'Collaborative Partnerships', tag:'TEAMWORK', sub:'Building success through strategic alliances with clients, architects, engineers, and subcontractors for seamless, integrated project delivery.',                              icon:'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
  { id:'04', label:'Ethical Integrity',          tag:'TRUST',    sub:'Transparency, honesty, and accountability define every interaction — we build lasting trust through consistent, ethical business practices.',                                     icon:'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3' },
  { id:'05', label:'Sustainable Innovation',     tag:'GREEN',    sub:'Eco-friendly materials, energy-efficient designs, and green building practices create structures that are responsible, efficient, and future-ready.',                            icon:'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id:'06', label:'Client-Centric Approach',    tag:'CLIENT',   sub:'Your vision drives our process. Clear communication, timely delivery, and exceeding expectations at every milestone is our steadfast commitment.',                              icon:'M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
  { id:'07', label:'Unified Team Excellence',    tag:'TEAM',     sub:'Our diverse specialists collaborate seamlessly, combining expertise across disciplines to deliver comprehensive, on-time solutions every time.',                                 icon:'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
  { id:'08', label:'Resilient Problem Solving',  tag:'RESOLVE',  sub:'Complex challenges are opportunities for innovation. We approach every obstacle with creativity, deep expertise, and determination to find optimal solutions.',                  icon:'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
];

const stats = [
  { value: '53',     label: 'Global Offices',           gold: false },
  { value: '12,400', label: 'Employees Worldwide',      gold: true  },
  { value: '250+',   label: 'Awards & Certifications',  gold: false },
  { value: '98%',    label: 'On-Time Delivery',         gold: true  },
];

const services = [
  { label: 'Residential',    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { label: 'Commercial',     icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1v5m4 0H9' },
  { label: 'Industrial',     icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { label: 'Renovation',     icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' },
  { label: 'Infrastructure', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
  { label: 'Green Build',    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
];

/* ═══════════════════════════════════════════════════
   CARD ILLUSTRATIONS
═══════════════════════════════════════════════════ */
function CardIllustration({ id, phase }) {
  const a = C.accent;
  const vis = phase !== 'exit';

  const shared = {
    position:'absolute',inset:0,width:'100%',height:'100%',
    opacity: vis ? 1 : 0,
    transition:'opacity 0.25s ease',
  };

  const ills = {
    '01': (
      <svg viewBox="0 0 520 560" style={shared}>
        <defs>
          <linearGradient id="b01" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor={a} stopOpacity="0.08"/><stop offset="100%" stopColor={a} stopOpacity="0.55"/></linearGradient>
          <radialGradient id="r01" cx="50%" cy="38%" r="55%"><stop offset="0%" stopColor={a} stopOpacity="0.16"/><stop offset="100%" stopColor={a} stopOpacity="0"/></radialGradient>
          <filter id="f01"><feGaussianBlur stdDeviation="5"/></filter>
        </defs>
        <rect width="520" height="560" fill="url(#r01)"/>
        {[80,160,240,320,400,480].map(x=><line key={x} x1={x} y1="60" x2={x} y2="430" stroke={a} strokeWidth="0.5" opacity="0.06"/>)}
        {[130,200,270,340,410].map(y=><line key={y} x1="40" y1={y} x2="480" y2={y} stroke={a} strokeWidth="0.5" opacity="0.06"/>)}
        {[{x:72,h:90},{x:152,h:155},{x:232,h:115},{x:312,h:210},{x:392,h:265},{x:456,h:195}].map((b,i)=>(
          <g key={i}>
            <rect x={b.x-26} y={420-b.h} width="52" height={b.h} rx="4" fill="url(#b01)"
              style={{transformOrigin:`${b.x}px 420px`,animation:`scaleUp01 1.1s cubic-bezier(0.16,1,0.3,1) ${i*0.1}s both`}}/>
            <rect x={b.x-26} y={420-b.h} width="52" height="4" rx="2" fill={a} opacity="0.85"/>
            <text x={b.x} y="436" textAnchor="middle" fill={a} fontSize="9" fontFamily="monospace" opacity="0.45">{Math.round(b.h/265*100)}%</text>
          </g>
        ))}
        <line x1="40" y1="420" x2="480" y2="420" stroke={a} strokeWidth="1" opacity="0.15"/>
        <polyline points="72,368 152,308 232,342 312,262 392,218 456,250" fill="none" stroke={a} strokeWidth="2" opacity="0.65" strokeDasharray="6 3"/>
        {[[72,368],[152,308],[232,342],[312,262],[392,218],[456,250]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="5" fill={a} opacity="0.85" style={{animation:`dotIn01 0.3s ease ${0.7+i*0.09}s both`,opacity:0}}/>
        ))}
        <circle cx="260" cy="220" r="90" fill={a} opacity="0.03" filter="url(#f01)"/>
        <style>{`@keyframes scaleUp01{from{transform:scaleY(0)}to{transform:scaleY(1)}}@keyframes dotIn01{to{opacity:0.85}}`}</style>
      </svg>
    ),
    '02': (
      <svg viewBox="0 0 520 560" style={shared}>
        <defs>
          <radialGradient id="r02" cx="50%" cy="42%" r="52%"><stop offset="0%" stopColor={a} stopOpacity="0.18"/><stop offset="100%" stopColor={a} stopOpacity="0"/></radialGradient>
          <filter id="f02"><feGaussianBlur stdDeviation="7"/></filter>
        </defs>
        <rect width="520" height="560" fill="url(#r02)"/>
        <path d="M260,95 L365,148 L365,255 Q365,335 260,372 Q155,335 155,255 L155,148Z"
          fill={a} opacity="0.06" stroke={a} strokeWidth="1.8"
          style={{animation:'shieldPulse02 3s ease-in-out infinite',transformOrigin:'260px 234px'}}/>
        <path d="M260,117 L343,162 L343,251 Q343,318 260,351 Q177,318 177,251 L177,162Z"
          fill="none" stroke={a} strokeWidth="1" opacity="0.2"/>
        {[78,110,142].map((r,i)=>(
          <circle key={i} cx="260" cy="234" r={r} fill="none" stroke={a} strokeWidth="1" strokeDasharray="8 8" opacity={0.07-i*0.02}
            style={{animation:`spinSlow02 ${22+i*8}s linear infinite`,transformOrigin:'260px 234px'}}/>
        ))}
        <path d="M220,234 L246,262 L308,196" stroke={a} strokeWidth="6" fill="none"
          strokeLinecap="round" strokeLinejoin="round" filter="url(#f02)"
          style={{strokeDasharray:130,strokeDashoffset:130,animation:'drawCheck02 1.1s ease 0.5s forwards'}}/>
        <path d="M220,234 L246,262 L308,196" stroke={a} strokeWidth="3.5" fill="none"
          strokeLinecap="round" strokeLinejoin="round"
          style={{strokeDasharray:130,strokeDashoffset:130,animation:'drawCheck02 1.1s ease 0.5s forwards'}}/>
        {[-90,-30,30,90].map((x,i)=>(
          <g key={i} transform={`translate(${260+x},415)`} style={{animation:`workerIn02 0.5s ease ${0.9+i*0.09}s both`,opacity:0}}>
            <circle cx="0" cy="-10" r="9" fill={a} opacity="0.45"/>
            <rect x="-13" y="1" width="26" height="20" rx="5" fill={a} opacity="0.22"/>
          </g>
        ))}
        <style>{`@keyframes shieldPulse02{0%,100%{transform:scale(1)}50%{transform:scale(1.03)}}@keyframes spinSlow02{to{transform:rotate(360deg)}}@keyframes drawCheck02{to{stroke-dashoffset:0}}@keyframes workerIn02{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}`}</style>
      </svg>
    ),
    '03': (
      <svg viewBox="0 0 520 560" style={shared}>
        <defs>
          <radialGradient id="r03" cx="50%" cy="37%" r="58%"><stop offset="0%" stopColor={a} stopOpacity="0.14"/><stop offset="100%" stopColor={a} stopOpacity="0"/></radialGradient>
          <filter id="f03"><feGaussianBlur stdDeviation="4"/></filter>
        </defs>
        <rect width="520" height="560" fill="url(#r03)"/>
        <circle cx="260" cy="205" r="36" fill={a} opacity="0.1" stroke={a} strokeWidth="1.5" filter="url(#f03)"
          style={{animation:'hubPulse03 2.5s ease-in-out infinite',transformOrigin:'260px 205px'}}/>
        <text x="260" y="211" textAnchor="middle" fill={a} fontSize="11" fontWeight="700" fontFamily="monospace">HUB</text>
        {[{cx:130,cy:120,l:'CLIENT'},{cx:390,cy:120,l:'ARCH'},{cx:90,cy:285,l:'ENG'},{cx:430,cy:285,l:'SUB'},{cx:170,cy:390,l:'SUPP'},{cx:350,cy:390,l:'CONS'}].map((n,i)=>(
          <g key={i} style={{animation:`nodeIn03 0.4s ease ${i*0.1}s both`,opacity:0}}>
            <circle cx={n.cx} cy={n.cy} r="24" fill={a} opacity="0.07" stroke={a} strokeWidth="1.2"/>
            <text x={n.cx} y={n.cy+4} textAnchor="middle" fill={a} fontSize="8" fontWeight="700" fontFamily="monospace">{n.l}</text>
            <line x1="260" y1="205" x2={n.cx} y2={n.cy} stroke={a} strokeWidth="1.2" opacity="0.18"
              style={{strokeDasharray:220,strokeDashoffset:220,animation:`lineIn03 0.7s ease ${0.3+i*0.08}s forwards`}}/>
            <circle r="3" fill={a} opacity="0.75">
              <animateMotion dur="2.8s" repeatCount="indefinite" begin={`${i*0.45}s`}>
                <mpath href={`#mp03_${i}`}/>
              </animateMotion>
            </circle>
            <path id={`mp03_${i}`} d={`M260,205 L${n.cx},${n.cy}`} fill="none"/>
          </g>
        ))}
        <style>{`@keyframes hubPulse03{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}@keyframes nodeIn03{from{opacity:0;transform:scale(0.5)}to{opacity:1;transform:scale(1)}}@keyframes lineIn03{to{stroke-dashoffset:0}}`}</style>
      </svg>
    ),
    '04': (
      <svg viewBox="0 0 520 560" style={shared}>
        <defs>
          <radialGradient id="r04" cx="50%" cy="40%" r="55%"><stop offset="0%" stopColor={a} stopOpacity="0.15"/><stop offset="100%" stopColor={a} stopOpacity="0"/></radialGradient>
          <filter id="f04"><feGaussianBlur stdDeviation="5"/></filter>
        </defs>
        <rect width="520" height="560" fill="url(#r04)"/>
        <rect x="257" y="95" width="6" height="225" rx="3" fill={a} opacity="0.38"/>
        <circle cx="260" cy="95" r="12" fill={a} opacity="0.7" filter="url(#f04)"/>
        <g style={{animation:'balanceBeam04 4s ease-in-out infinite',transformOrigin:'260px 155px'}}>
          <rect x="140" y="152" width="240" height="6" rx="3" fill={a} opacity="0.55"/>
          {/* Left pan */}
          <g style={{animation:'panLeft04 4s ease-in-out infinite'}}>
            <line x1="152" y1="158" x2="152" y2="248" stroke={a} strokeWidth="1.5" opacity="0.3"/>
            <ellipse cx="152" cy="248" rx="46" ry="10" fill={a} opacity="0.07" stroke={a} strokeWidth="1.5"/>
            <rect x="130" y="230" width="44" height="12" rx="4" fill={a} opacity="0.28"/>
          </g>
          {/* Right pan */}
          <g style={{animation:'panRight04 4s ease-in-out infinite'}}>
            <line x1="368" y1="158" x2="368" y2="262" stroke={a} strokeWidth="1.5" opacity="0.3"/>
            <ellipse cx="368" cy="262" rx="46" ry="10" fill={a} opacity="0.07" stroke={a} strokeWidth="1.5"/>
            {[0,1,2].map(j=><rect key={j} x={348+j*12} y={244-j*5} width="10" height={10+j*4} rx="2" fill={a} opacity={0.35-j*0.04}/>)}
          </g>
        </g>
        <path d="M230,322 L260,296 L290,322 L300,342 L220,342Z" fill={a} opacity="0.32"/>
        <rect x="200" y="342" width="120" height="12" rx="6" fill={a} opacity="0.16"/>
        {['T','H','A','I'].map((l,i)=>{
          const ang=i*90*Math.PI/180;
          return <g key={i} transform={`translate(${260+Math.cos(ang)*158},${390+Math.sin(ang)*58})`}
            style={{animation:`orbitIn04 0.5s ease ${i*0.12}s both`,opacity:0}}>
            <circle cx="0" cy="0" r="18" fill={a} opacity="0.1" stroke={a} strokeWidth="1"/>
            <text x="0" y="5" textAnchor="middle" fill={a} fontSize="12" fontWeight="700">{l}</text>
          </g>;
        })}
        <style>{`@keyframes balanceBeam04{0%,100%{transform:rotate(-2.5deg)}50%{transform:rotate(2.5deg)}}@keyframes panLeft04{0%,100%{transform:translateY(0)}50%{transform:translateY(8px)}}@keyframes panRight04{0%,100%{transform:translateY(8px)}50%{transform:translateY(0)}}@keyframes orbitIn04{from{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}`}</style>
      </svg>
    ),
    '05': (
      <svg viewBox="0 0 520 560" style={shared}>
        <defs>
          <radialGradient id="r05" cx="50%" cy="48%" r="54%"><stop offset="0%" stopColor="#2a8848" stopOpacity="0.22"/><stop offset="100%" stopColor="#0a1810" stopOpacity="0"/></radialGradient>
          <linearGradient id="leaf05" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#66c87a"/><stop offset="100%" stopColor="#3d9e56"/></linearGradient>
          <filter id="f05"><feGaussianBlur stdDeviation="5"/></filter>
        </defs>
        <rect width="520" height="560" fill="url(#r05)"/>
        <circle cx="260" cy="268" r="128" fill="none" stroke="#3d9e56" strokeWidth="1.5" opacity="0.22"/>
        <circle cx="260" cy="268" r="98" fill="rgba(40,130,65,0.05)" stroke="#3d9e56" strokeWidth="1" opacity="0.15"/>
        {[0,45,90,135,180,225,270,315].map((angle,i)=>{
          const r=angle*Math.PI/180;
          return <g key={i} transform={`translate(${260+Math.cos(r)*86},${268+Math.sin(r)*86}) rotate(${angle+90})`}
            style={{animation:`leafIn05 0.5s ease ${i*0.09}s both`,opacity:0}}>
            <path d="M0,-22 Q17,-4 0,22 Q-17,-4 0,-22" fill="url(#leaf05)" opacity="0.62"/>
            <line x1="0" y1="-16" x2="0" y2="16" stroke="#3d9e56" strokeWidth="1.2" opacity="0.65"/>
          </g>;
        })}
        <g style={{animation:'sunSpin05 14s linear infinite',transformOrigin:'396px 112px'}}>
          <circle cx="396" cy="112" r="30" fill={a} opacity="0.8" filter="url(#f05)"/>
          <circle cx="396" cy="112" r="20" fill="#ffd700" opacity="0.48"/>
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((ang,i)=>{
            const r=ang*Math.PI/180;
            return <line key={i} x1={396+Math.cos(r)*34} y1={112+Math.sin(r)*34} x2={396+Math.cos(r)*46} y2={112+Math.sin(r)*46}
              stroke={a} strokeWidth="2.5" strokeLinecap="round" opacity="0.68"/>;
          })}
        </g>
        <g transform="translate(260,268)" opacity="0.42">
          {[0,1,2].map((_,i)=>{
            const ang=i*120*Math.PI/180,ang2=(i+1)*120*Math.PI/180;
            return <path key={i} d={`M${Math.cos(ang)*55},${Math.sin(ang)*55} A55,55 0 0,1 ${Math.cos(ang2)*55},${Math.sin(ang2)*55}`}
              fill="none" stroke="#3d9e56" strokeWidth="4" strokeLinecap="round"/>;
          })}
          {[[0,-55],[47.6,27.5],[-47.6,27.5]].map(([x,y],i)=>(
            <polygon key={i} points={`${x},${y} ${x-9},${y+14} ${x+9},${y+14}`} fill="#3d9e56" transform={`rotate(${i*120})`}/>
          ))}
        </g>
        <style>{`@keyframes leafIn05{from{opacity:0;transform:scale(0)}to{opacity:1}}@keyframes sunSpin05{to{transform:rotate(360deg)}}`}</style>
      </svg>
    ),
    '06': (
      <svg viewBox="0 0 520 560" style={shared}>
        <defs>
          <radialGradient id="r06" cx="50%" cy="40%" r="55%"><stop offset="0%" stopColor={a} stopOpacity="0.13"/><stop offset="100%" stopColor={a} stopOpacity="0"/></radialGradient>
          <filter id="f06"><feGaussianBlur stdDeviation="4"/></filter>
        </defs>
        <rect width="520" height="560" fill="url(#r06)"/>
        <g style={{animation:'bubbleIn06 0.55s ease 0.1s both',opacity:0}}>
          <rect x="50" y="96" width="270" height="100" rx="16" fill={a} opacity="0.09" stroke={a} strokeWidth="1.4"/>
          <path d="M70,196 L54,222 L114,196" fill={a} opacity="0.09"/>
          <rect x="74" y="120" width="160" height="10" rx="5" fill={a} opacity="0.38"/>
          <rect x="74" y="140" width="120" height="10" rx="5" fill={a} opacity="0.22"/>
          <rect x="74" y="160" width="140" height="10" rx="5" fill={a} opacity="0.17"/>
          <circle cx="278" cy="144" r="16" fill={a} opacity="0.48"/>
          <circle cx="278" cy="139" r="5.5" fill="#0a1520"/>
          <path d="M270,152 Q278,147 286,152" stroke="#0a1520" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </g>
        <g style={{animation:'bubbleIn06 0.55s ease 0.4s both',opacity:0}}>
          <rect x="200" y="258" width="270" height="100" rx="16" fill="rgba(60,120,200,0.09)" stroke="rgba(100,160,255,0.32)" strokeWidth="1.4"/>
          <path d="M452,358 L468,384 L408,358" fill="rgba(60,120,200,0.09)"/>
          <rect x="224" y="282" width="190" height="10" rx="5" fill="rgba(120,172,255,0.38)"/>
          <rect x="224" y="302" width="145" height="10" rx="5" fill="rgba(120,172,255,0.22)"/>
          <rect x="224" y="322" width="165" height="10" rx="5" fill="rgba(120,172,255,0.17)"/>
          <circle cx="236" cy="308" r="16" fill={a} opacity="0.5"/>
          <rect x="231" y="303" width="10" height="10" rx="2" fill="#0a1520"/>
        </g>
        {[0,1,2,3,4].map(i=>(
          <g key={i} transform={`translate(${90+i*68},428)`} style={{animation:`starIn06 0.5s ease ${0.9+i*0.1}s both`,opacity:0}}>
            <circle cx="0" cy="0" r="13" fill={a} opacity="0.14" stroke={a} strokeWidth="1.2"/>
            <text x="0" y="5" textAnchor="middle" fill={a} fontSize="13" fontWeight="900">★</text>
          </g>
        ))}
        <style>{`@keyframes bubbleIn06{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}@keyframes starIn06{from{opacity:0;transform:scale(0)}to{opacity:1}}`}</style>
      </svg>
    ),
    '07': (
      <svg viewBox="0 0 520 560" style={shared}>
        <defs>
          <radialGradient id="r07" cx="50%" cy="42%" r="55%"><stop offset="0%" stopColor={a} stopOpacity="0.13"/><stop offset="100%" stopColor={a} stopOpacity="0"/></radialGradient>
          <filter id="f07"><feGaussianBlur stdDeviation="4"/></filter>
        </defs>
        <rect width="520" height="560" fill="url(#r07)"/>
        {[-2,-1,0,1,2].map((offset,i)=>{
          const x=260+offset*72,y=320;
          const cs=['rgba(0,200,232,0.82)','rgba(232,200,74,0.76)','rgba(0,200,232,1)','rgba(232,200,74,0.76)','rgba(0,200,232,0.82)'];
          const roles=['ENG','ARCH','PM','QA','DEV'];
          return <g key={i} style={{animation:`teamBob07 3s ease-in-out ${i*0.16}s infinite`}}>
            <circle cx={x} cy={y-62} r="18" fill={cs[i]} opacity="0.82" filter="url(#f07)"/>
            <path d={`M${x-20},${y-44} Q${x},${y-28} ${x+20},${y-44} L${x+23},${y+20} Q${x},${y+33} ${x-23},${y+20}Z`} fill={cs[i]} opacity="0.42"/>
            <line x1={x-10} y1={y+20} x2={x-12} y2={y+56} stroke={cs[i]} strokeWidth="9" strokeLinecap="round" opacity="0.42"/>
            <line x1={x+10} y1={y+20} x2={x+12} y2={y+56} stroke={cs[i]} strokeWidth="9" strokeLinecap="round" opacity="0.42"/>
            <rect x={x-13} y={y-78} width="26" height="11" rx="5.5" fill={a} opacity="0.68"/>
            <text x={x} y={y-69} textAnchor="middle" fill="#07111c" fontSize="6.5" fontWeight="900">{roles[i]}</text>
          </g>;
        })}
        {[-2,-1,0,1].map((off,i)=>{
          const x1=260+off*72+20,x2=260+(off+1)*72-20,y=278;
          return <path key={i} d={`M${x1},${y} Q${(x1+x2)/2},${y-18} ${x2},${y}`}
            fill="none" stroke={a} strokeWidth="3.5" strokeLinecap="round" opacity="0.44"
            style={{strokeDasharray:76,strokeDashoffset:76,animation:`arcIn07 0.5s ease ${0.7+i*0.12}s forwards`}}/>;
        })}
        <g style={{animation:'trophyPulse07 3.2s ease-in-out infinite',transformOrigin:'260px 160px'}}>
          <circle cx="260" cy="160" r="38" fill={a} opacity="0.08"/>
          <circle cx="260" cy="160" r="24" fill={a} opacity="0.14" stroke={a} strokeWidth="1.5"/>
          <path d="M260,142 L266,155 L280,155 L270,164 L274,178 L260,169 L246,178 L250,164 L240,155 L254,155Z"
            fill={a} opacity="0.88" filter="url(#f07)"/>
        </g>
        <circle cx="260" cy="320" r="118" fill="none" stroke={a} strokeWidth="1.5" strokeDasharray="9 9" opacity="0.12"
          style={{animation:'ringRot07 24s linear infinite',transformOrigin:'260px 320px'}}/>
        <style>{`@keyframes teamBob07{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes arcIn07{to{stroke-dashoffset:0}}@keyframes trophyPulse07{0%,100%{transform:scale(1)}50%{transform:scale(1.09)}}@keyframes ringRot07{to{transform:rotate(360deg)}}`}</style>
      </svg>
    ),
    '08': (
      <svg viewBox="0 0 520 560" style={shared}>
        <defs>
          <radialGradient id="r08" cx="50%" cy="44%" r="55%"><stop offset="0%" stopColor={a} stopOpacity="0.12"/><stop offset="100%" stopColor={a} stopOpacity="0"/></radialGradient>
          <filter id="f08"><feGaussianBlur stdDeviation="5"/></filter>
        </defs>
        <rect width="520" height="560" fill="url(#r08)"/>
        <g transform="translate(76,185)" style={{animation:'wobble08 3s ease-in-out infinite'}}>
          <rect x="0" y="0" width="90" height="90" rx="12" fill="rgba(255,75,75,0.11)" stroke="rgba(255,75,75,0.42)" strokeWidth="1.5"/>
          <text x="45" y="58" textAnchor="middle" fill="rgba(255,75,75,0.72)" fontSize="33" fontWeight="900">?</text>
          <text x="45" y="106" textAnchor="middle" fill="rgba(255,75,75,0.45)" fontSize="8.5" fontWeight="600" fontFamily="monospace">CHALLENGE</text>
        </g>
        <g transform="translate(240,228)" style={{animation:'arrowPulse08 2s ease-in-out infinite'}}>
          <path d="-46,0 L32,0 M22,-10 L32,0 L22,10" stroke={a} strokeWidth="4.5" fill="none"
            strokeLinecap="round" strokeLinejoin="round" filter="url(#f08)"/>
          <text x="-6" y="-15" textAnchor="middle" fill={a} fontSize="8.5" fontWeight="600" fontFamily="monospace">INNOVATION</text>
        </g>
        <g transform="translate(316,168)" style={{animation:'glowPulse08 2.5s ease-in-out infinite'}}>
          <circle cx="44" cy="62" r="50" fill={a} opacity="0.07"/>
          <path d="M44,22 Q22,38 22,58 Q22,78 44,88 Q66,78 66,58 Q66,38 44,22" fill={a} opacity="0.68" filter="url(#f08)"/>
          <rect x="34" y="84" width="20" height="8" rx="4" fill={a} opacity="0.48"/>
          <rect x="36" y="92" width="16" height="5" rx="2.5" fill={a} opacity="0.38"/>
          {[-50,-25,0,25,50].map((ang,i)=>{
            const r=ang*Math.PI/180;
            return <line key={i} x1={44+Math.cos(r)*62} y1={62+Math.sin(r)*62} x2={44+Math.cos(r)*76} y2={62+Math.sin(r)*76}
              stroke={a} strokeWidth="3" strokeLinecap="round" opacity="0.58"/>;
          })}
          <text x="44" y="122" textAnchor="middle" fill={a} fontSize="8.5" fontWeight="700" fontFamily="monospace">SOLUTION</text>
        </g>
        {[{x:96,y:350,n:'1',l:'ANALYZE'},{x:196,y:376,n:'2',l:'IDEATE'},{x:306,y:350,n:'3',l:'EXECUTE'},{x:400,y:410,n:'4',l:'OPTIMIZE'}].map((st,i)=>(
          <g key={i} transform={`translate(${st.x},${st.y})`} style={{animation:`stepIn08 0.6s ease ${i*0.2}s both`,opacity:0}}>
            <circle cx="0" cy="0" r="20" fill={a} opacity="0.11" stroke={a} strokeWidth="1.5"/>
            <text x="0" y="5" textAnchor="middle" fill={a} fontSize="14" fontWeight="900">{st.n}</text>
            <text x="0" y="33" textAnchor="middle" fill={a} fontSize="7.5" fontWeight="600" fontFamily="monospace">{st.l}</text>
          </g>
        ))}
        <path d="M116,350 Q148,364 176,376 Q240,362 280,350 Q316,376 380,410"
          fill="none" stroke={a} strokeWidth="1.5" strokeDasharray="5 5" opacity="0.28"
          style={{animation:'flowDash08 3s ease-in-out infinite'}}/>
        <style>{`@keyframes wobble08{0%,100%{transform:translateX(0)}30%{transform:translateX(-3px)}70%{transform:translateX(3px)}}@keyframes arrowPulse08{0%,100%{opacity:0.6}50%{opacity:1}}@keyframes glowPulse08{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}@keyframes stepIn08{from{opacity:0;transform:scale(0.7)}to{opacity:1;transform:scale(1)}}@keyframes flowDash08{0%,100%{stroke-dashoffset:0}50%{stroke-dashoffset:16}}`}</style>
      </svg>
    ),
  };
  return ills[id] || ills['01'];
}

/* ═══════════════════════════════════════════════════
   ANIMATED COUNTER
═══════════════════════════════════════════════════ */
function AnimCounter({ target, duration=1800 }) {
  const [val, setVal] = useState('0');
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold:0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  useEffect(() => {
    if (!vis) return;
    const clean = String(target).replace(/[^0-9.]/g,'');
    const num = parseFloat(clean);
    const suffix = String(target).replace(/[0-9.]/g,'');
    if (isNaN(num)) { setVal(target); return; }
    let st = null;
    const step = ts => {
      if (!st) st = ts;
      const p = Math.min((ts - st) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      const cur = num >= 1000 ? Math.round(ease * num).toLocaleString() : Math.round(ease * num);
      setVal(cur + suffix);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [vis, target, duration]);
  return <span ref={ref}>{val}</span>;
}

/* ═══════════════════════════════════════════════════
   IN-VIEW HOOK
═══════════════════════════════════════════════════ */
function useInView(threshold=0.02) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return [ref, v];
}

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════ */
export default function WhyChooseUs() {
  const [sRef, visible] = useInView();
  const [cur, setCur] = useState(0);
  const [phase, setPhase] = useState('idle');
  const animating = useRef(false);
  const timer = useRef(null);

  const goTo = useCallback((idx) => {
    if (animating.current || idx === cur) return;
    animating.current = true;
    setPhase('exit');
    setTimeout(() => {
      setCur(idx);
      setPhase('enter');
      setTimeout(() => { setPhase('idle'); animating.current = false; }, 500);
    }, 200);
  }, [cur]);

  const advance = useCallback(() => goTo((cur + 1) % features.length), [cur, goTo]);

  useEffect(() => {
    timer.current = setInterval(advance, 5000);
    return () => clearInterval(timer.current);
  }, [advance]);

  const pick = (i) => {
    clearInterval(timer.current);
    goTo(i);
    timer.current = setInterval(advance, 5000);
  };

  const f = features[cur];

  const fadeSlide = {
    opacity: phase === 'exit' ? 0 : 1,
    transform: phase === 'exit' ? 'translateY(10px)' : 'translateY(0)',
    transition: 'opacity 0.22s ease, transform 0.22s ease',
  };

  return (
    <section ref={sRef} style={{
      position:'relative',overflow:'hidden',
      background: C.bg,
      fontFamily:'"Georgia","Times New Roman",serif',
      minHeight:'100vh',
    }}>

      {/* ─── BACKGROUND ─── */}
      <div style={{position:'absolute',inset:0,pointerEvents:'none'}}>
        <div style={{position:'absolute',inset:0,
          background:'radial-gradient(ellipse 130% 85% at 72% 52%, rgba(8,26,42,0.95) 0%, rgba(7,14,20,1) 58%)'}}/>
        <div style={{position:'absolute',right:'-4%',top:'-8%',width:680,height:680,borderRadius:'50%',
          background:`radial-gradient(circle,rgba(0,200,232,0.11) 0%,transparent 60%)`,filter:'blur(80px)'}}/>
        <div style={{position:'absolute',left:'-3%',bottom:'-4%',width:580,height:580,borderRadius:'50%',
          background:`radial-gradient(circle,rgba(232,200,74,0.08) 0%,transparent 58%)`,filter:'blur(80px)'}}/>
        <svg style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:0.02}} preserveAspectRatio="none">
          <defs><pattern id="bgGrid" width="56" height="56" patternUnits="userSpaceOnUse">
            <line x1="56" y1="0" x2="56" y2="56" stroke={C.accent} strokeWidth="1"/>
            <line x1="0" y1="56" x2="56" y2="56" stroke={C.accent} strokeWidth="1"/>
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#bgGrid)"/>
        </svg>
        <div style={{position:'absolute',top:0,left:0,right:0,height:'2px',
          background:`linear-gradient(90deg,transparent,${C.accent} 28%,${C.accent2} 72%,transparent)`}}/>
        <div style={{position:'absolute',bottom:0,left:0,right:0,height:'1px',
          background:`linear-gradient(90deg,transparent,rgba(0,200,232,0.25) 50%,transparent)`}}/>
      </div>

      <div style={{position:'relative',zIndex:10,maxWidth:'1560px',margin:'0 auto',padding:'70px 48px',boxSizing:'border-box'}}>

        {/* ─── HEADER ─── */}
        <div style={{
          textAlign:'center',marginBottom:56,
          opacity: visible?1:0, transform: visible?'none':'translateY(22px)',
          transition:'all 0.9s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:20,marginBottom:14}}>
            <div style={{height:'1px',background:`linear-gradient(to right,transparent,${C.accent})`,
              width:visible?96:0,transition:'width 1.1s ease 0.3s'}}/>
            <span style={{
              fontSize:9.5,fontWeight:700,color:C.accent,letterSpacing:'0.44em',
              fontFamily:'"Courier New",monospace',
              padding:'5px 18px',border:`1px solid ${C.borderHi}`,borderRadius:2,
              background:'rgba(0,200,232,0.07)',textTransform:'uppercase',
            }}>Why Choose Us</span>
            <div style={{height:'1px',background:`linear-gradient(to left,transparent,${C.accent})`,
              width:visible?96:0,transition:'width 1.1s ease 0.3s'}}/>
          </div>
          <h2 style={{
            fontSize:'clamp(40px,4.6vw,72px)',fontWeight:900,
            margin:'0 0 10px',letterSpacing:'-0.03em',color:'#E4F2FA',lineHeight:1.05,
          }}>
            Built on{' '}
            <span style={{color:C.accent,textShadow:`0 0 38px rgba(0,200,232,0.38)`}}>Excellence</span>
          </h2>
          <p style={{color:C.textDim,fontSize:13.5,letterSpacing:'0.045em',
            fontFamily:'"Courier New",monospace',margin:0}}>
            Delivering world-class construction since 1996 — where vision becomes lasting structure.
          </p>
        </div>

        {/* ─── MAIN LAYOUT: 3 columns via CSS grid ─── */}
        <div style={{
          display:'grid',
          gridTemplateColumns:'290px minmax(0,1fr) minmax(0,2fr)',
          columnGap:0,
          alignItems:'stretch',
          opacity:visible?1:0, transform:visible?'none':'translateY(30px)',
          transition:'all 1s cubic-bezier(0.16,1,0.3,1) 0.14s',
        }}>

          {/* ══════════════════════════════
              COL A — COMPANY PANEL
          ══════════════════════════════ */}
          <div style={{
            display:'flex',flexDirection:'column',gap:14,
            paddingRight:28,
            borderRight:`1px solid ${C.border}`,
          }}>

            {/* Company card */}
            <div style={{
              padding:'16px 18px',
              background:'rgba(0,200,232,0.04)',
              border:`1px solid ${C.border}`,
              borderLeft:`3px solid ${C.accent}`,
              borderRadius:'0 8px 8px 0',
            }}>
              <div style={{display:'flex',alignItems:'center',gap:11,marginBottom:10}}>
                <div style={{width:36,height:36,borderRadius:8,flexShrink:0,
                  background:`linear-gradient(135deg,${C.accent},${C.accent2})`,
                  display:'flex',alignItems:'center',justifyContent:'center',
                  boxShadow:`0 4px 16px rgba(0,200,232,0.32)`}}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{width:16,height:16}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1v5m4 0H9"/>
                  </svg>
                </div>
                <div>
                  <div style={{fontSize:11.5,fontWeight:700,color:'#E4F2FA',letterSpacing:'0.05em'}}>BUILDCRAFT GROUP</div>
                  <div style={{fontSize:8,color:'rgba(0,200,232,0.45)',letterSpacing:'0.1em',fontFamily:'"Courier New",monospace'}}>CONSTRUCTION & INFRASTRUCTURE</div>
                </div>
              </div>
              <p style={{fontSize:11.5,color:C.textDim,lineHeight:1.7,margin:0}}>
                Premier construction firm since 1996. Specializing in residential, commercial & industrial projects with sustainable technology and precision execution.
              </p>
            </div>

            {/* Stats */}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
              {stats.map((s,i)=>(
                <div key={i} style={{
                  padding:'13px 12px',
                  background:'rgba(255,255,255,0.02)',
                  border:`1px solid rgba(255,255,255,0.046)`,
                  borderTop:`2px solid ${s.gold?C.gold:C.accent}`,
                  borderRadius:6,
                }}>
                  <div style={{fontSize:20,fontWeight:900,lineHeight:1,marginBottom:4,
                    color:s.gold?C.gold:C.accent,fontFamily:'"Courier New",monospace',
                    textShadow:`0 0 18px ${s.gold?'rgba(232,200,74,0.38)':'rgba(0,200,232,0.38)'}`}}>
                    <AnimCounter target={s.value}/>
                  </div>
                  <div style={{fontSize:9,color:C.textDim,lineHeight:1.3}}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Services */}
            <div style={{padding:'14px 16px',background:'rgba(255,255,255,0.015)',
              border:`1px solid rgba(255,255,255,0.04)`,borderRadius:8,flex:1}}>
              <div style={{fontSize:8,fontWeight:700,color:C.accent,letterSpacing:'0.45em',
                fontFamily:'"Courier New",monospace',marginBottom:10,textTransform:'uppercase'}}>Our Services</div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6}}>
                {services.map((sv,i)=>(
                  <div key={i}
                    style={{display:'flex',alignItems:'center',gap:7,padding:'7px 9px',borderRadius:6,
                      cursor:'default',background:'rgba(255,255,255,0.02)',
                      border:`1px solid rgba(0,200,232,0.055)`,transition:'all 0.2s'}}
                    onMouseEnter={e=>{e.currentTarget.style.background='rgba(0,200,232,0.08)';e.currentTarget.style.borderColor='rgba(0,200,232,0.2)';}}
                    onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.02)';e.currentTarget.style.borderColor='rgba(0,200,232,0.055)';}}>
                    <svg viewBox="0 0 24 24" fill="none" stroke={C.accent} strokeWidth="1.5" style={{width:11,height:11,flexShrink:0,opacity:0.6}}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={sv.icon}/>
                    </svg>
                    <span style={{fontSize:10,color:C.textDim,fontWeight:500}}>{sv.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div style={{display:'flex',flexDirection:'column',gap:9}}>
              <button
                style={{padding:'13px 18px',background:`linear-gradient(110deg,${C.accent},${C.accent2})`,
                  border:'none',borderRadius:7,cursor:'pointer',color:'#051018',
                  fontSize:11,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',
                  fontFamily:'"Courier New",monospace',boxShadow:`0 4px 22px rgba(0,200,232,0.35)`,
                  transition:'all 0.2s',display:'flex',alignItems:'center',justifyContent:'center',gap:8}}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow=`0 8px 30px rgba(0,200,232,0.52)`;}}
                onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow=`0 4px 22px rgba(0,200,232,0.35)`;}}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{width:14,height:14}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
                Get Free Quote
              </button>
              <button
                style={{padding:'12px 18px',background:'rgba(255,255,255,0.035)',
                  border:`1px solid ${C.border}`,borderRadius:7,cursor:'pointer',color:C.accent,
                  fontSize:11,fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',
                  fontFamily:'"Courier New",monospace',transition:'all 0.2s',
                  display:'flex',alignItems:'center',justifyContent:'center',gap:8}}
                onMouseEnter={e=>{e.currentTarget.style.background='rgba(0,200,232,0.08)';e.currentTarget.style.borderColor=C.borderHi;}}
                onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.035)';e.currentTarget.style.borderColor=C.border;}}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:14,height:14}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                View Portfolio
              </button>
              <div style={{display:'flex',alignItems:'center',gap:9,paddingLeft:4,paddingTop:2}}>
                <div style={{width:6,height:6,borderRadius:'50%',background:C.accent,boxShadow:`0 0 7px ${C.accent}`,flexShrink:0}}/>
                <span style={{fontSize:10,color:'rgba(0,200,232,0.42)',fontFamily:'"Courier New",monospace'}}>24/7 Support Available</span>
              </div>
            </div>

          </div>
          {/* END COL A */}

          {/* ══════════════════════════════
              COL B — VALUE NAVIGATOR
          ══════════════════════════════ */}
          <div style={{
            display:'flex',flexDirection:'column',
            padding:'0 28px 0 28px',
            borderRight:`1px solid ${C.border}`,
          }}>

            {/* Feature buttons */}
            <div style={{display:'flex',flexDirection:'column',gap:3,flex:1}}>
              {features.map((feat,i)=>{
                const active = i===cur;
                return (
                  <button key={i} onClick={()=>pick(i)} style={{
                    display:'flex',alignItems:'center',gap:10,
                    padding:'10px 12px',borderRadius:7,cursor:'pointer',
                    outline:'none',textAlign:'left',
                    background: active?'rgba(0,200,232,0.09)':'rgba(255,255,255,0.013)',
                    border:`1px solid ${active?'rgba(0,200,232,0.34)':'rgba(255,255,255,0.04)'}`,
                    borderLeft:`2.5px solid ${active?C.accent:'transparent'}`,
                    transition:'all 0.24s ease',
                    boxShadow: active?`0 0 18px rgba(0,200,232,0.09),inset 0 0 12px rgba(0,200,232,0.04)`:'none',
                  }}
                    onMouseEnter={e=>{if(!active){e.currentTarget.style.background='rgba(0,200,232,0.05)';e.currentTarget.style.borderColor='rgba(0,200,232,0.16)';}}}
                    onMouseLeave={e=>{if(!active){e.currentTarget.style.background='rgba(255,255,255,0.013)';e.currentTarget.style.borderColor='rgba(255,255,255,0.04)';}}}
                  >
                    <div style={{width:27,height:27,borderRadius:6,flexShrink:0,
                      background:active?C.accent:'rgba(0,200,232,0.07)',
                      border:`1px solid ${active?C.accent:'rgba(0,200,232,0.17)'}`,
                      display:'flex',alignItems:'center',justifyContent:'center',
                      transition:'all 0.24s'}}>
                      <span style={{fontSize:9,fontWeight:700,color:active?'#051018':C.accent,
                        fontFamily:'"Courier New",monospace',transition:'color 0.24s'}}>{feat.id}</span>
                    </div>
                    <div style={{flex:1}}>
                      <span style={{display:'block',fontSize:11,fontWeight:active?600:400,lineHeight:1.3,
                        color:active?'#E4F2FA':'rgba(155,195,220,0.42)',
                        transition:'color 0.24s'}}>{feat.label}</span>
                    </div>
                    {active&&<div style={{width:4,height:4,borderRadius:'50%',background:C.accent,flexShrink:0,boxShadow:`0 0 6px ${C.accent}`}}/>}
                  </button>
                );
              })}
            </div>



          </div>
          {/* END COL B */}

          {/* ══════════════════════════════
              COL C — CARD + NAV
          ══════════════════════════════ */}
          <div style={{display:'flex',alignItems:'center',gap:14,paddingLeft:28}}>

            {/* THE CARD */}
            <div style={{
              flex:1,height:CARD_H,
              borderRadius:14,overflow:'hidden',position:'relative',
              background:C.bgCard,
              border:`1px solid rgba(0,200,232,0.28)`,
              boxShadow:`
                0 40px 90px rgba(0,0,0,0.68),
                0 0 0 1px rgba(0,200,232,0.08),
                inset 0 1px 0 rgba(255,255,255,0.044),
                0 0 50px rgba(0,200,232,0.042)
              `,
            }}>
              {/* Illustration — always mounted for animation continuity */}
              <CardIllustration id={f.id} phase={phase}/>

              {/* Bottom gradient */}
              <div style={{position:'absolute',inset:0,pointerEvents:'none',
                background:'linear-gradient(180deg,rgba(11,21,32,0) 28%,rgba(11,21,32,0.7) 58%,rgba(11,21,32,0.97) 100%)'}}/>

              {/* Top accent line */}
              <div style={{position:'absolute',top:0,left:0,right:0,height:'2px',
                background:`linear-gradient(90deg,transparent,${C.accent} 22%,${C.accent2} 78%,transparent)`}}/>

              {/* Tag badge */}
              <div style={{position:'absolute',top:20,left:22,...fadeSlide}}>
                <span style={{
                  display:'inline-block',fontSize:7.5,fontWeight:700,
                  letterSpacing:'0.52em',color:C.accent,
                  fontFamily:'"Courier New",monospace',
                  background:'rgba(0,200,232,0.09)',
                  border:`1px solid rgba(0,200,232,0.28)`,
                  padding:'4px 12px',borderRadius:2,
                }}>{f.tag}</span>
              </div>

              {/* Icon */}
              <div style={{position:'absolute',top:16,right:20,...fadeSlide}}>
                <div style={{width:42,height:42,borderRadius:10,
                  background:'rgba(255,255,255,0.05)',
                  border:`1px solid rgba(0,200,232,0.2)`,
                  display:'flex',alignItems:'center',justifyContent:'center',
                  backdropFilter:'blur(16px)'}}>
                  <svg viewBox="0 0 24 24" fill="none" stroke={C.accent} strokeWidth="1.5" style={{width:20,height:20}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon}/>
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'0 26px 24px',...fadeSlide}}>
                <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:12}}>
                  <div style={{width:30,height:'2px',background:C.accent,borderRadius:1,boxShadow:`0 0 7px ${C.accent}55`}}/>
                  <div style={{width:5,height:5,borderRadius:'50%',border:`1.5px solid ${C.accent}`,opacity:0.5}}/>
                  <div style={{width:18,height:'1px',background:'rgba(0,200,232,0.22)',borderRadius:1}}/>
                </div>
                <h3 style={{color:'#E4F2FA',fontWeight:700,fontSize:22,lineHeight:1.2,
                  margin:'0 0 11px',textShadow:'0 2px 18px rgba(0,0,0,0.8)'}}>{f.label}</h3>
                <p style={{color:'rgba(195,220,235,0.68)',fontSize:13,lineHeight:1.75,
                  margin:'0 0 18px',maxWidth:420,
                  textShadow:'0 1px 8px rgba(0,0,0,0.55)'}}>{f.sub}</p>
                {/* Dots */}
                <div style={{display:'flex',gap:5,alignItems:'center'}}>
                  {features.map((_,di)=>(
                    <button key={di} onClick={()=>pick(di)} style={{
                      width:di===cur?22:5,height:5,borderRadius:3,
                      cursor:'pointer',border:'none',padding:0,
                      background:di===cur?C.accent:di<cur?'rgba(0,200,232,0.32)':'rgba(255,255,255,0.11)',
                      transition:'all 0.35s cubic-bezier(0.16,1,0.3,1)',
                      boxShadow:di===cur?`0 0 8px ${C.accent}77`:'none',
                    }}/>
                  ))}
                </div>
              </div>

              {/* Counter badge bottom-right */}
              <div style={{position:'absolute',bottom:24,right:22,...fadeSlide}}>
                <span style={{fontSize:11,fontWeight:700,color:'rgba(0,200,232,0.35)',
                  fontFamily:'"Courier New",monospace'}}>
                  {String(cur+1).padStart(2,'0')}<span style={{opacity:0.5}}>/08</span>
                </span>
              </div>
            </div>

            {/* VERTICAL NAV */}
            <div style={{flexShrink:0,display:'flex',flexDirection:'column',alignItems:'center',gap:12}}>
              <button onClick={()=>pick((cur-1+features.length)%features.length)} style={{
                width:40,height:40,borderRadius:8,
                background:'rgba(0,200,232,0.07)',border:`1px solid ${C.border}`,
                color:C.accent,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',
                transition:'all 0.2s',outline:'none'}}
                onMouseEnter={e=>{e.currentTarget.style.background='rgba(0,200,232,0.18)';e.currentTarget.style.borderColor=C.borderHi;e.currentTarget.style.boxShadow=`0 0 14px rgba(0,200,232,0.22)`;}}
                onMouseLeave={e=>{e.currentTarget.style.background='rgba(0,200,232,0.07)';e.currentTarget.style.borderColor=C.border;e.currentTarget.style.boxShadow='none';}}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{width:13,height:13}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/>
                </svg>
              </button>

              <div style={{position:'relative',width:2,height:180,background:'rgba(255,255,255,0.05)',borderRadius:1}}>
                <div style={{position:'absolute',top:0,left:0,right:0,borderRadius:1,
                  height:`${((cur+1)/features.length)*100}%`,
                  background:`linear-gradient(to bottom,${C.accent},rgba(0,200,232,0.35))`,
                  transition:'height 0.5s cubic-bezier(0.16,1,0.3,1)',
                  boxShadow:`0 0 7px rgba(0,200,232,0.4)`}}/>
                {features.map((_,i)=>(
                  <div key={i} style={{position:'absolute',left:-4,width:10,height:'1.5px',borderRadius:1,
                    top:`${(i/(features.length-1))*100}%`,
                    background:i<=cur?C.accent:'rgba(255,255,255,0.07)',
                    transition:'background 0.3s'}}/>
                ))}
              </div>

              <button onClick={()=>pick((cur+1)%features.length)} style={{
                width:40,height:40,borderRadius:8,
                background:'rgba(0,200,232,0.07)',border:`1px solid ${C.border}`,
                color:C.accent,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',
                transition:'all 0.2s',outline:'none'}}
                onMouseEnter={e=>{e.currentTarget.style.background='rgba(0,200,232,0.18)';e.currentTarget.style.borderColor=C.borderHi;e.currentTarget.style.boxShadow=`0 0 14px rgba(0,200,232,0.22)`;}}
                onMouseLeave={e=>{e.currentTarget.style.background='rgba(0,200,232,0.07)';e.currentTarget.style.borderColor=C.border;e.currentTarget.style.boxShadow='none';}}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{width:13,height:13}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              <div style={{textAlign:'center',marginTop:4}}>
                <span style={{display:'block',fontSize:22,fontWeight:900,color:C.accent,
                  fontFamily:'"Courier New",monospace',textShadow:`0 0 16px ${C.accent}44`,
                  transition:'all 0.3s'}}>
                  {String(cur+1).padStart(2,'0')}
                </span>
                <div style={{width:20,height:'1px',background:'rgba(0,200,232,0.28)',margin:'4px auto'}}/>
                <span style={{fontSize:10,color:'rgba(0,200,232,0.22)',fontFamily:'"Courier New",monospace'}}>
                  {String(features.length).padStart(2,'0')}
                </span>
              </div>
            </div>

          </div>
          {/* END COL C */}

        </div>
        {/* END GRID */}

      </div>
    </section>
  );
}