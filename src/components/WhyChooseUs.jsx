
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

/* ═══════════════════════════════════════════════════
   DESIGN TOKENS
═══════════════════════════════════════════════════ */
const C = {
  accent:   '#4f86c6',
  accent2:  '#3f6fa8',
  gold:     '#6c9bd0',
  bg:       '#ffffff',
  bgCard:   '#ffffff',
  border:   'rgba(177,197,221,0.88)',
  borderHi: 'rgba(92,134,186,0.95)',
  text:     '#000000',
  textDim:  '#000000',
};

const CARD_H = 560;

/* ═══════════════════════════════════════════════════
   FEATURES
═══════════════════════════════════════════════════ */
const features = [
  {
    id:'01',
    label:'High Quality Construction',
    tag:'QUALITY',
    sub:'We ensure top-quality materials and skilled workmanship to deliver strong, durable, and long-lasting structures.',
    icon:'M9 12l2 2 4-4'
  },
  {
    id:'02',
    label:'On-Time Project Delivery',
    tag:'DELIVERY',
    sub:'We complete projects on schedule without compromising quality or safety standards.',
    icon:'M12 8v4l3 3'
  },
  {
    id:'03',
    label:'Experienced Team',
    tag:'TEAM',
    sub:'Our team of engineers, architects, and workers bring years of expertise to every project.',
    icon:'M17 20h5v-2'
  },
  {
    id:'04',
    label:'Transparent Pricing',
    tag:'TRUST',
    sub:'We maintain complete transparency in pricing with no hidden costs.',
    icon:'M3 6l3 1'
  },
  {
    id:'05',
    label:'Modern Design Approach',
    tag:'DESIGN',
    sub:'We follow modern architecture and innovative construction techniques.',
    icon:'M21 12a9 9'
  },
  {
    id:'06',
    label:'Customer Satisfaction',
    tag:'CLIENT',
    sub:'Client satisfaction is our top priority, ensuring every expectation is met.',
    icon:'M15 12a3 3'
  },
  {
    id:'07',
    label:'Strong Project Management',
    tag:'MANAGEMENT',
    sub:'Efficient planning and execution ensure smooth project completion.',
    icon:'M12 4.354'
  },
  {
    id:'08',
    label:'Problem Solving Approach',
    tag:'SOLUTIONS',
    sub:'We handle challenges efficiently with smart and practical solutions.',
    icon:'M14.828 14.828'
  },
];

const stats = [
  { value: '50+', label: 'Projects Completed', gold: false },
  { value: '5+', label: 'Years Experience', gold: true },
  { value: '25+', label: 'Happy Clients', gold: false },
  { value: '100%', label: 'Quality Assurance', gold: true },
];

const services = [
  { label: 'Luxury Residential',       path: '/services/residential',              icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { label: 'Commercial Buildings',     path: '/services/commercial-retail',       icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1v5m4 0H9' },
  { label: 'Schools & Hospitals',      path: '/services/educational-healthcare',  icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
  { label: 'Industrial Infrastructure', path: '/services/industrial',              icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
];

/* ═══════════════════════════════════════════════════
   CARD ILLUSTRATIONS
═══════════════════════════════════════════════════ */
function CardIllustration({ id, phase }) {
  const accentMap = {
    '01': '#4f86c6',
    '02': '#2f7de1',
    '03': '#5c8fe6',
    '04': '#c6924a',
    '05': '#3fae63',
    '06': '#4b97da',
    '07': '#7b67d9',
    '08': '#de6a67',
  };
  const a = accentMap[id] || C.accent;
  const vis = phase !== 'exit';
  const illMeta = {
    '01': { code:'EXEC', label:'Performance Index', chips:['Delivery', 'Quality'] },
    '02': { code:'SAFE', label:'Protection Layer', chips:['Protocols', 'Readiness'] },
    '03': { code:'SYNC', label:'Partner Network', chips:['Clients', 'Teams'] },
    '04': { code:'ETHC', label:'Trust Balance', chips:['Clarity', 'Accountability'] },
    '05': { code:'ECO', label:'Sustainable Systems', chips:['Materials', 'Efficiency'] },
    '06': { code:'CARE', label:'Client Response', chips:['Dialogue', 'Milestones'] },
    '07': { code:'TEAM', label:'Cross-Discipline Unit', chips:['Specialists', 'Alignment'] },
    '08': { code:'SOLV', label:'Response Framework', chips:['Diagnosis', 'Recovery'] },
  };

  const shared = {
    position:'absolute',inset:0,width:'100%',height:'100%',
    opacity: vis ? 1 : 0,
    transition:'opacity 0.25s ease',
    transform:'scale(1.16)',
    transformOrigin:'center 34%',
    filter:'saturate(1.45) contrast(1.12)',
  };

  const renderOverlay = () => null;

  const ills = {
    '01': (
      <svg viewBox="0 0 520 560" style={shared}>
        <defs>
          <linearGradient id="b01" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor={a} stopOpacity="0.12"/>
            <stop offset="100%" stopColor={a} stopOpacity="0.82"/>
          </linearGradient>
          <linearGradient id="l01" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(79,134,198,0.3)"/>
            <stop offset="50%" stopColor="rgba(79,134,198,1)"/>
            <stop offset="100%" stopColor="rgba(79,134,198,0.36)"/>
          </linearGradient>
          <radialGradient id="r01" cx="50%" cy="34%" r="58%">
            <stop offset="0%" stopColor={a} stopOpacity="0.2"/>
            <stop offset="100%" stopColor={a} stopOpacity="0"/>
          </radialGradient>
          <filter id="f01"><feGaussianBlur stdDeviation="7"/></filter>
        </defs>
        <rect width="520" height="560" fill="#ffffff"/>
        {[112,180,248,316,384].map(x=><line key={x} x1={x} y1="122" x2={x} y2="392" stroke={a} strokeWidth="0.8" opacity="0.08"/>)}
        {[156,214,272,330].map(y=><line key={y} x1="76" y1={y} x2="430" y2={y} stroke={a} strokeWidth="0.8" opacity="0.08"/>)}

        <g style={{animation:'panelIn01 0.85s ease both',opacity:0}}>
          <rect x="78" y="118" width="148" height="88" rx="18" fill="rgba(79,134,198,0.08)" stroke="rgba(79,134,198,0.26)" strokeWidth="1.3"/>
          <text x="98" y="142" fill="#000000" fontSize="8" fontWeight="700" fontFamily='"Courier New",monospace'>Project Progress</text>
          <text x="98" y="176" fill="#1e3450" fontSize="31" fontWeight="900">96.4%</text>
          <text x="98" y="194" fill="rgba(79,134,198,0.9)" fontSize="8.5" fontWeight="700">Consistent delivery uplift</text>
        </g>

        <g style={{animation:'panelIn01 0.85s ease 0.12s both',opacity:0}}>
          <rect x="286" y="118" width="150" height="88" rx="18" fill="rgba(79,134,198,0.06)" stroke="rgba(79,134,198,0.22)" strokeWidth="1.2"/>
          <text x="306" y="142" fill="#000000" fontSize="8" fontWeight="700" fontFamily='"Courier New",monospace'>Construction Timeline</text>
          {[['Planning',78],['Execution',91],['Closeout',84]].map((row,i)=>(
            <g key={row[0]} transform={`translate(306,${160 + i*18})`}>
              <text x="0" y="3" fill="#000000" fontSize="7.2">{row[0]}</text>
              <rect x="58" y="-4" width="56" height="8" rx="4" fill="rgba(199,214,231,0.4)"/>
              <rect x="58" y="-4" width={row[1] * 0.56} height="8" rx="4" fill={i===1 ? 'url(#l01)' : 'rgba(79,134,198,0.5)'}/>
            </g>
          ))}
        </g>

        {[{x:110,h:74},{x:164,h:106},{x:218,h:90},{x:272,h:136},{x:326,h:176},{x:380,h:152}].map((b,i)=>(
          <g key={i}>
            <rect x={b.x-16} y={394-b.h} width="32" height={b.h} rx="8" fill="url(#b01)"
              style={{transformOrigin:`${b.x}px 400px`,animation:`scaleUp01 1.1s cubic-bezier(0.16,1,0.3,1) ${0.2+i*0.09}s both`}}/>
            <rect x={b.x-16} y={394-b.h} width="32" height="4" rx="2" fill={a} opacity="0.86"/>
            <text x={b.x} y="416" textAnchor="middle" fill="#000000" fontSize="7.5" fontFamily="monospace">{`Q${i+1}`}</text>
          </g>
        ))}
        <line x1="84" y1="394" x2="408" y2="394" stroke={a} strokeWidth="1.2" opacity="0.24"/>
        <polyline points="110,336 164,288 218,304 272,236 326,188 380,214" fill="none" stroke="url(#l01)" strokeWidth="2.4" opacity="0.9" strokeLinecap="round" strokeLinejoin="round"/>
        {[[110,336],[164,288],[218,304],[272,236],[326,188],[380,214]].map(([x,y],i)=>(
          <g key={i}>
            <circle cx={x} cy={y} r="8" fill={a} opacity="0.06" filter="url(#f01)" style={{animation:`dotIn01 0.35s ease ${0.74+i*0.08}s both`,opacity:0}}/>
            <circle cx={x} cy={y} r="3.5" fill={a} opacity="0.95" style={{animation:`dotIn01 0.35s ease ${0.74+i*0.08}s both`,opacity:0}}/>
          </g>
        ))}
        <text x="84" y="436" fill="#000000" fontSize="8" fontWeight="700" fontFamily='"Courier New",monospace'>Work Completion Rate</text>
        <text x="408" y="436" textAnchor="end" fill="rgba(79,134,198,0.9)" fontSize="8" fontWeight="700" fontFamily='"Courier New",monospace'>UPWARD 18%</text>
        <circle cx="320" cy="202" r="82" fill={a} opacity="0.08" filter="url(#f01)"/>
        {renderOverlay('01')}
        <style>{`@keyframes scaleUp01{from{transform:scaleY(0)}to{transform:scaleY(1)}}@keyframes dotIn01{to{opacity:1}}@keyframes panelIn01{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}`}</style>
      </svg>
    ),
    '02': (
      <svg viewBox="0 0 520 560" style={shared}>
        <defs>
          <radialGradient id="r02" cx="50%" cy="42%" r="52%"><stop offset="0%" stopColor={a} stopOpacity="0.26"/><stop offset="100%" stopColor={a} stopOpacity="0"/></radialGradient>
          <filter id="f02"><feGaussianBlur stdDeviation="9"/></filter>
        </defs>
        <rect width="520" height="560" fill="#ffffff"/>
        <path d="M260,95 L365,148 L365,255 Q365,335 260,372 Q155,335 155,255 L155,148Z"
          fill={a} opacity="0.11" stroke={a} strokeWidth="2.4"
          style={{animation:'shieldPulse02 3s ease-in-out infinite',transformOrigin:'260px 234px'}}/>
        <path d="M260,117 L343,162 L343,251 Q343,318 260,351 Q177,318 177,251 L177,162Z"
          fill="none" stroke={a} strokeWidth="1.4" opacity="0.34"/>
        {[78,110,142].map((r,i)=>(
          <circle key={i} cx="260" cy="234" r={r} fill="none" stroke={a} strokeWidth="1.3" strokeDasharray="8 8" opacity={0.16-i*0.03}
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
            <circle cx="0" cy="-10" r="10" fill={a} opacity="0.72"/>
            <rect x="-13" y="1" width="26" height="20" rx="5" fill={a} opacity="0.38"/>
          </g>
        ))}
        {renderOverlay('02')}
        <style>{`@keyframes shieldPulse02{0%,100%{transform:scale(1)}50%{transform:scale(1.03)}}@keyframes spinSlow02{to{transform:rotate(360deg)}}@keyframes drawCheck02{to{stroke-dashoffset:0}}@keyframes workerIn02{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}`}</style>
      </svg>
    ),
    '03': (
      <svg viewBox="0 0 520 560" style={shared}>
        <defs>
          <radialGradient id="r03" cx="50%" cy="37%" r="58%"><stop offset="0%" stopColor={a} stopOpacity="0.2"/><stop offset="100%" stopColor={a} stopOpacity="0"/></radialGradient>
          <filter id="f03"><feGaussianBlur stdDeviation="6"/></filter>
        </defs>
        <rect width="520" height="560" fill="#ffffff"/>
        <circle cx="260" cy="205" r="44" fill={a} opacity="0.16" stroke={a} strokeWidth="1.8" filter="url(#f03)"
          style={{animation:'hubPulse03 2.5s ease-in-out infinite',transformOrigin:'260px 205px'}}/>
        <text x="260" y="211" textAnchor="middle" fill="#21447a" fontSize="12" fontWeight="900" fontFamily="monospace">HUB</text>
        {[{cx:130,cy:120,l:'CLIENT'},{cx:390,cy:120,l:'ARCH'},{cx:90,cy:285,l:'ENG'},{cx:430,cy:285,l:'SUB'},{cx:170,cy:390,l:'SUPP'},{cx:350,cy:390,l:'CONS'}].map((n,i)=>(
          <g key={i} style={{animation:`nodeIn03 0.4s ease ${i*0.1}s both`,opacity:0}}>
            <circle cx={n.cx} cy={n.cy} r="28" fill={a} opacity="0.12" stroke={a} strokeWidth="1.4"/>
            <text x={n.cx} y={n.cy+4} textAnchor="middle" fill="#2f5b96" fontSize="8" fontWeight="800" fontFamily="monospace">{n.l}</text>
            <line x1="260" y1="205" x2={n.cx} y2={n.cy} stroke={a} strokeWidth="1.5" opacity="0.3"
              style={{strokeDasharray:220,strokeDashoffset:220,animation:`lineIn03 0.7s ease ${0.3+i*0.08}s forwards`}}/>
            <circle r="4" fill={a} opacity="0.9">
              <animateMotion dur="2.8s" repeatCount="indefinite" begin={`${i*0.45}s`}>
                <mpath href={`#mp03_${i}`}/>
              </animateMotion>
            </circle>
            <path id={`mp03_${i}`} d={`M260,205 L${n.cx},${n.cy}`} fill="none"/>
          </g>
        ))}
        {renderOverlay('03')}
        <style>{`@keyframes hubPulse03{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}@keyframes nodeIn03{from{opacity:0;transform:scale(0.5)}to{opacity:1;transform:scale(1)}}@keyframes lineIn03{to{stroke-dashoffset:0}}`}</style>
      </svg>
    ),
    '04': (
      <svg viewBox="0 0 520 560" style={shared}>
        <defs>
          <radialGradient id="r04" cx="50%" cy="40%" r="55%"><stop offset="0%" stopColor={a} stopOpacity="0.15"/><stop offset="100%" stopColor={a} stopOpacity="0"/></radialGradient>
          <filter id="f04"><feGaussianBlur stdDeviation="5"/></filter>
        </defs>
        <rect width="520" height="560" fill="#ffffff"/>
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
        {renderOverlay('04')}
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
        <rect width="520" height="560" fill="#ffffff"/>
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
        {renderOverlay('05')}
        <style>{`@keyframes leafIn05{from{opacity:0;transform:scale(0)}to{opacity:1}}@keyframes sunSpin05{to{transform:rotate(360deg)}}`}</style>
      </svg>
    ),
    '06': (
      <svg viewBox="0 0 520 560" style={shared}>
        <defs>
          <radialGradient id="r06" cx="50%" cy="40%" r="55%"><stop offset="0%" stopColor={a} stopOpacity="0.13"/><stop offset="100%" stopColor={a} stopOpacity="0"/></radialGradient>
          <filter id="f06"><feGaussianBlur stdDeviation="4"/></filter>
        </defs>
        <rect width="520" height="560" fill="#ffffff"/>
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
        {renderOverlay('06')}
        <style>{`@keyframes bubbleIn06{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}@keyframes starIn06{from{opacity:0;transform:scale(0)}to{opacity:1}}`}</style>
      </svg>
    ),
    '07': (
      <svg viewBox="0 0 520 560" style={shared}>
        <defs>
          <radialGradient id="r07" cx="50%" cy="42%" r="55%"><stop offset="0%" stopColor={a} stopOpacity="0.18"/><stop offset="100%" stopColor={a} stopOpacity="0"/></radialGradient>
          <filter id="f07"><feGaussianBlur stdDeviation="5"/></filter>
        </defs>
        <rect width="520" height="560" fill="#ffffff"/>
        {[-2,-1,0,1,2].map((offset,i)=>{
          const x=260+offset*72,y=320;
          const cs=['#4f86c6','#f1b24c','#7b67d9','#5aa672','#4f86c6'];
          const roles=['ENG','ARCH','PM','QA','DEV'];
          return <g key={i} style={{animation:`teamBob07 3s ease-in-out ${i*0.16}s infinite`}}>
            <circle cx={x} cy={y-62} r="19" fill={cs[i]} opacity="0.94" filter="url(#f07)"/>
            <path d={`M${x-20},${y-44} Q${x},${y-28} ${x+20},${y-44} L${x+23},${y+20} Q${x},${y+33} ${x-23},${y+20}Z`} fill={cs[i]} opacity="0.58"/>
            <line x1={x-10} y1={y+20} x2={x-12} y2={y+56} stroke={cs[i]} strokeWidth="9" strokeLinecap="round" opacity="0.58"/>
            <line x1={x+10} y1={y+20} x2={x+12} y2={y+56} stroke={cs[i]} strokeWidth="9" strokeLinecap="round" opacity="0.58"/>
            <rect x={x-13} y={y-78} width="26" height="11" rx="5.5" fill={a} opacity="0.88"/>
            <text x={x} y={y-69} textAnchor="middle" fill="#ffffff" fontSize="6.5" fontWeight="900">{roles[i]}</text>
          </g>;
        })}
        {[-2,-1,0,1].map((off,i)=>{
          const x1=260+off*72+20,x2=260+(off+1)*72-20,y=278;
          return <path key={i} d={`M${x1},${y} Q${(x1+x2)/2},${y-18} ${x2},${y}`}
            fill="none" stroke={a} strokeWidth="3.8" strokeLinecap="round" opacity="0.64"
            style={{strokeDasharray:76,strokeDashoffset:76,animation:`arcIn07 0.5s ease ${0.7+i*0.12}s forwards`}}/>;
        })}
        <g style={{animation:'trophyPulse07 3.2s ease-in-out infinite',transformOrigin:'260px 160px'}}>
          <circle cx="260" cy="160" r="42" fill={a} opacity="0.12"/>
          <circle cx="260" cy="160" r="26" fill={a} opacity="0.2" stroke={a} strokeWidth="1.8"/>
          <path d="M260,142 L266,155 L280,155 L270,164 L274,178 L260,169 L246,178 L250,164 L240,155 L254,155Z"
            fill="#f1b24c" opacity="0.96" filter="url(#f07)"/>
        </g>
        <circle cx="260" cy="320" r="118" fill="none" stroke={a} strokeWidth="1.7" strokeDasharray="9 9" opacity="0.2"
          style={{animation:'ringRot07 24s linear infinite',transformOrigin:'260px 320px'}}/>
        {renderOverlay('07')}
        <style>{`@keyframes teamBob07{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes arcIn07{to{stroke-dashoffset:0}}@keyframes trophyPulse07{0%,100%{transform:scale(1)}50%{transform:scale(1.09)}}@keyframes ringRot07{to{transform:rotate(360deg)}}`}</style>
      </svg>
    ),
    '08': (
      <svg viewBox="0 0 520 560" style={shared}>
        <defs>
          <radialGradient id="r08" cx="54%" cy="34%" r="62%">
            <stop offset="0%" stopColor={a} stopOpacity="0.16"/>
            <stop offset="100%" stopColor={a} stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="panel08" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,200,232,0.16)"/>
            <stop offset="100%" stopColor="rgba(0,200,232,0.02)"/>
          </linearGradient>
          <linearGradient id="trace08" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,200,232,0.12)"/>
            <stop offset="50%" stopColor="rgba(0,200,232,0.88)"/>
            <stop offset="100%" stopColor="rgba(0,200,232,0.12)"/>
          </linearGradient>
          <filter id="f08"><feGaussianBlur stdDeviation="5"/></filter>
        </defs>
        <rect width="520" height="560" fill="#ffffff"/>
        {[82,156,230,304,378,452].map(x => <line key={x} x1={x} y1="52" x2={x} y2="454" stroke={a} strokeWidth="0.6" opacity="0.05"/>)}
        {[92,166,240,314,388].map(y => <line key={y} x1="52" y1={y} x2="468" y2={y} stroke={a} strokeWidth="0.6" opacity="0.05"/>)}

        <g style={{animation:'float08 4.2s ease-in-out infinite'}}>
          <rect x="68" y="132" width="128" height="118" rx="18" fill="rgba(255,106,106,0.08)" stroke="rgba(255,106,106,0.38)" strokeWidth="1.5"/>
          <rect x="84" y="154" width="58" height="8" rx="4" fill="rgba(255,106,106,0.28)"/>
          <rect x="84" y="171" width="88" height="8" rx="4" fill="rgba(255,106,106,0.18)"/>
          <circle cx="132" cy="208" r="24" fill="rgba(255,106,106,0.12)" stroke="rgba(255,106,106,0.38)" strokeWidth="1.3"/>
          <text x="132" y="216" textAnchor="middle" fill="rgba(255,146,146,0.85)" fontSize="28" fontWeight="900">!</text>
          <text x="132" y="274" textAnchor="middle" fill="rgba(255,146,146,0.62)" fontSize="8" fontWeight="700" fontFamily='"Courier New",monospace'>ISSUE DETECTED</text>
        </g>

        <g style={{animation:'rise08 0.8s ease 0.12s both',opacity:0}}>
          <rect x="214" y="92" width="236" height="176" rx="22" fill="url(#panel08)" stroke="rgba(0,200,232,0.22)" strokeWidth="1.2"/>
          <rect x="238" y="118" width="88" height="10" rx="5" fill={a} opacity="0.32"/>
          <rect x="238" y="138" width="130" height="8" rx="4" fill={a} opacity="0.14"/>
          <rect x="380" y="118" width="46" height="24" rx="12" fill="rgba(0,200,232,0.12)" stroke="rgba(0,200,232,0.26)" strokeWidth="1"/>
          <text x="403" y="133" textAnchor="middle" fill={a} fontSize="7.5" fontWeight="700" fontFamily='"Courier New",monospace'>LIVE</text>

          {[{x:252,y:170,w:58,h:44,l:'MAP'},{x:326,y:170,w:46,h:44,l:'RISK'},{x:388,y:170,w:34,h:44,l:'ACT'}].map((b,i)=>(
            <g key={i}>
              <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(0,200,232,0.12)" strokeWidth="1"/>
              <text x={b.x + b.w/2} y={b.y + 26} textAnchor="middle" fill={a} fontSize="10" fontWeight="800" fontFamily='"Courier New",monospace'>{b.l}</text>
            </g>
          ))}

          <path d="M262,236 C294,220 326,220 349,236 S402,252 424,232" fill="none" stroke="url(#trace08)" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="5 5" style={{animation:'flowDash08 3.2s linear infinite'}}/>
          {[262,316,370,424].map((cx,i)=>(
            <circle key={i} cx={cx} cy={i===0?236:i===1?226:i===2?236:232} r="4.5" fill={a} opacity="0.86" style={{animation:`pulseNode08 2.1s ease-in-out ${i*0.22}s infinite`}}/>
          ))}
          <text x="238" y="292" fill="rgba(214,232,242,0.82)" fontSize="8" fontWeight="700" fontFamily='"Courier New",monospace'>RESPONSE ARCHITECTURE</text>
        </g>

        <g style={{animation:'rise08 0.8s ease 0.28s both',opacity:0}}>
          <circle cx="392" cy="128" r="42" fill={a} opacity="0.06"/>
          <circle cx="392" cy="128" r="28" fill="rgba(255,255,255,0.03)" stroke={a} strokeWidth="1.4" opacity="0.7"/>
          <path d="M392,103 L400,120 L418,122 L405,135 L408,153 L392,144 L376,153 L379,135 L366,122 L384,120 Z" fill={a} opacity="0.82" filter="url(#f08)"/>
        </g>

        <path d="M196,192 C228,192 242,176 258,162" fill="none" stroke="rgba(255,106,106,0.34)" strokeWidth="1.4" strokeDasharray="6 6" style={{animation:'flowDash08 4s linear infinite'}}/>
        <path d="M450,214 C430,248 408,282 378,318 C344,356 294,382 242,392" fill="none" stroke="rgba(0,200,232,0.3)" strokeWidth="1.5" strokeDasharray="6 6" style={{animation:'flowDash08 4.4s linear infinite'}}/>

        {[{x:110,y:396,n:'01',l:'Diagnose'},{x:208,y:396,n:'02',l:'Strategize'},{x:306,y:396,n:'03',l:'Mobilize'},{x:404,y:396,n:'04',l:'Refine'}].map((st,i)=>(
          <g key={i} transform={`translate(${st.x},${st.y})`} style={{animation:`stepIn08 0.55s ease ${0.38+i*0.12}s both`,opacity:0}}>
            <circle cx="0" cy="0" r="22" fill="rgba(0,200,232,0.1)" stroke="rgba(0,200,232,0.26)" strokeWidth="1.5"/>
            <circle cx="0" cy="0" r="14" fill="rgba(255,255,255,0.02)" stroke="rgba(0,200,232,0.18)" strokeWidth="1"/>
            <text x="0" y="4" textAnchor="middle" fill={a} fontSize="8.5" fontWeight="800" fontFamily='"Courier New",monospace'>{st.n}</text>
            <text x="0" y="37" textAnchor="middle" fill="rgba(232,244,250,0.86)" fontSize="8" fontWeight="700">{st.l}</text>
          </g>
        ))}

        <path d="M132,396 L186,396 L230,396 L284,396 L328,396 L382,396"
          fill="none" stroke="rgba(0,200,232,0.22)" strokeWidth="1.4" strokeDasharray="4 8" opacity="0.9"/>

        {[{x:98,y:456,k:'72h',v:'Avg. Resolution Window'},{x:250,y:456,k:'94%',v:'Scenario Recovery Rate'},{x:402,y:456,k:'360',v:'Full Project Visibility'}].map((chip,i)=>(
          <g key={i} transform={`translate(${chip.x},${chip.y})`} style={{animation:`rise08 0.65s ease ${0.62+i*0.08}s both`,opacity:0}}>
            <rect x="-48" y="-18" width="96" height="42" rx="12" fill="rgba(255,255,255,0.018)" stroke="rgba(0,200,232,0.12)" strokeWidth="1"/>
            <text x="0" y="-2" textAnchor="middle" fill={a} fontSize="14" fontWeight="900">{chip.k}</text>
            <text x="0" y="13" textAnchor="middle" fill="rgba(232,244,250,0.8)" fontSize="7.2" fontWeight="700">{chip.v}</text>
          </g>
        ))}

        {renderOverlay('08')}
        <style>{`@keyframes float08{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes rise08{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}@keyframes pulseNode08{0%,100%{transform:scale(1);opacity:0.75}50%{transform:scale(1.24);opacity:1}}@keyframes stepIn08{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}@keyframes flowDash08{to{stroke-dashoffset:-22}}`}</style>
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
  const navigate = useNavigate();
  const [sRef, visible] = useInView();
  const [cur, setCur] = useState(0);
  const [phase, setPhase] = useState('idle');
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1280
  );
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

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const pick = (i) => {
    clearInterval(timer.current);
    goTo(i);
    timer.current = setInterval(advance, 5000);
  };

  const f = features[cur];
  const isTablet = viewportWidth <= 1180;
  const isMobile = viewportWidth <= 768;

  const fadeSlide = {
    opacity: phase === 'exit' ? 0 : 1,
    transform: phase === 'exit' ? 'translateY(10px)' : 'translateY(0)',
    transition: 'opacity 0.22s ease, transform 0.22s ease',
  };

  return (
    <section ref={sRef} style={{
      position:'relative',overflow:'hidden',
      background: 'linear-gradient(180deg, #c9d3dc 0%, rgb(227, 236, 236) 100%)',
      fontFamily:'"Georgia","Times New Roman",serif',
      minHeight:'auto',
    }}>
      <style>{`
        .why-bg-shape { position:absolute; border-radius:50%; pointer-events:none; opacity:0.42; filter:blur(1px); }
        .why-bg-shape.ring { box-shadow: inset 0 0 0 1px rgba(79,134,198,0.16); }
        .why-bg-shape.big { width:280px; height:280px; top:36px; right:10%; background: radial-gradient(circle, rgba(79,134,198,0.22), transparent 62%); }
        .why-bg-shape.small { width:160px; height:160px; bottom:22%; left:4%; background: radial-gradient(circle, rgba(92,134,186,0.18), transparent 62%); }
        .why-bg-shape.ring { width:220px; height:220px; top:140px; left:8%; background: transparent; }
      `}</style>

      {/* ─── BACKGROUND ─── */}
      <div style={{position:'absolute',inset:0,pointerEvents:'none'}}>
        <div style={{position:'absolute',inset:0,background:'rgba(255,255,255,0.95)'}}/>
        <div className="why-bg-shape big" />
        <div className="why-bg-shape small" />
        <div className="why-bg-shape ring" />
      </div>

      <div style={{position:'relative',zIndex:10,maxWidth:'1560px',margin:'0 auto',padding:isMobile ? '42px 16px' : isTablet ? '56px 24px' : '70px 48px',boxSizing:'border-box',background:'rgba(255,255,255,0.96)',borderRadius:28,boxShadow:'0 40px 120px rgba(64,94,135,0.12)',border:'1px solid rgba(212,225,240,0.8)'}}>

        {/* ─── HEADER ─── */}
        <div style={{
          textAlign:'center',marginBottom:56,
          opacity: visible?1:0, transform: visible?'none':'translateY(22px)',
          transition:'all 0.9s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <div className="site-section-heading center" style={{ "--section-accent": C.accent }}>
            <span className="site-section-kicker">Why Arvish Constructions</span>
            <h2 className="site-section-title">
              Built on<span className="site-section-accent"> Excellence</span>
            </h2>
            <p className="site-section-subtitle">
              Delivering premium construction services — where your vision becomes reality.
            </p>
          </div>
        </div>

        {/* ─── MAIN LAYOUT: 3 columns via CSS grid ─── */}
        <div style={{
          display:'grid',
          gridTemplateColumns:isMobile ? '1fr' : isTablet ? '1fr' : '290px minmax(0,1fr) minmax(0,2fr)',
          rowGap:isMobile ? 24 : isTablet ? 28 : 0,
          columnGap:isTablet ? 0 : 0,
          minHeight:isTablet ? 'auto' : CARD_H,
          alignItems:'stretch',
          opacity:visible?1:0, transform:visible?'none':'translateY(30px)',
          transition:'all 1s cubic-bezier(0.16,1,0.3,1) 0.14s',
        }}>

          {/* ══════════════════════════════
              COL A — COMPANY PANEL
          ══════════════════════════════ */}
          <div style={{
            display:'flex',flexDirection:'column',gap:14,
            height:isTablet ? 'auto' : CARD_H,
            boxSizing:'border-box',
            paddingRight:isTablet ? 0 : 28,
          }}>

            {/* Company card */}
            <div style={{
              padding:'18px 20px',
              background:'rgba(255,255,255,0.96)',
              border:`1px solid ${C.border}`,
              borderLeft:`4px solid ${C.accent}`,
              borderRadius:'0 12px 12px 0',
              boxShadow:'0 18px 48px rgba(88,118,156,0.08)',
            }}>
              <div style={{display:'flex',alignItems:'center',gap:11,marginBottom:10}}>
                <div style={{width:36,height:36,borderRadius:8,flexShrink:0,
                  background:`linear-gradient(135deg,${C.accent},${C.accent2})`,
                  display:'flex',alignItems:'center',justifyContent:'center',
                  boxShadow:`0 4px 16px rgba(79,134,198,0.26)`}}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" style={{width:16,height:16}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1v5m4 0H9"/>
                  </svg>
                </div>
                <div>
                  <div style={{fontSize:11.5,fontWeight:700,color:'#000000',letterSpacing:'0.05em'}}>ARVISH CONSTRUCTIONS</div>
                  <div style={{fontSize:8,color:'#000000',letterSpacing:'0.1em',fontFamily:'"Courier New",monospace'}}>Built on Experience.
Driven by Quality.</div>
                </div>
              </div>
              <p style={{fontSize:11.5,color:C.textDim,lineHeight:1.7,margin:0}}>
                Arvish Constructions is a trusted construction company delivering high-quality residential, commercial, and infrastructure projects with modern design, durability, and precision.
              </p>
            </div>

            {/* Stats */}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
              {stats.map((s,i)=>(
                <div key={i} style={{
                  padding:'14px 14px',
                  background:'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(243,247,253,0.95))',
                  border:`1px solid rgba(213,227,241,0.95)`,
                  borderTop:`3px solid ${s.gold?C.gold:C.accent}`,
                  borderRadius:10,
                  boxShadow:'0 12px 28px rgba(97,131,172,0.08)',
                }}>
                  <div style={{fontSize:20,fontWeight:900,lineHeight:1,marginBottom:4,
                    color:s.gold?C.gold:C.accent,fontFamily:'"Courier New",monospace',
                    textShadow:`0 0 12px ${s.gold?'rgba(108,155,208,0.2)':'rgba(79,134,198,0.16)'}`}}>
                    <AnimCounter target={s.value}/>
                  </div>
                  <div style={{fontSize:9,color:C.textDim,lineHeight:1.3}}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Services */}
            <div style={{padding:'16px 18px',background:'rgba(248,252,255,0.95)',
              border:`1px solid rgba(212,223,236,0.95)`,borderRadius:14,flex:1,boxShadow:'0 18px 40px rgba(92,128,166,0.06)'}}>
              <div style={{fontSize:8,fontWeight:700,color:C.accent,letterSpacing:'0.45em',
                fontFamily:'"Courier New",monospace',marginBottom:10,textTransform:'uppercase'}}>Our Core Services</div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
                {services.map((sv,i)=>(
                  <div key={i}
                    style={{display:'flex',alignItems:'center',gap:7,padding:'9px 11px',borderRadius:8,
                      cursor:'pointer',background:'rgba(245,249,255,0.96)',
                      border:`1px solid rgba(209,223,238,0.95)`,transition:'all 0.2s',boxShadow:'inset 0 0 0 1px rgba(255,255,255,0.72)'}}
                    onClick={() => navigate(sv.path)}
                    onMouseEnter={e=>{e.currentTarget.style.background='rgba(236,242,249,1)';e.currentTarget.style.borderColor='rgba(160,187,219,0.7)';e.currentTarget.style.transform='translateY(-2px)';}}
                    onMouseLeave={e=>{e.currentTarget.style.background='rgba(248,250,253,0.96)';e.currentTarget.style.borderColor='rgba(218,226,237,0.95)';e.currentTarget.style.transform='none';}}>
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
                onClick={() => navigate('/contact')}
                style={{padding:'13px 18px',background:`linear-gradient(110deg,${C.accent},${C.accent2})`,
                  border:'none',borderRadius:7,cursor:'pointer',color:'#ffffff',
                  fontSize:11,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',
                  fontFamily:'"Courier New",monospace',boxShadow:`0 4px 22px rgba(126,168,214,0.3)`,
                  transition:'all 0.2s',display:'flex',alignItems:'center',justifyContent:'center',gap:8}}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow=`0 8px 30px rgba(126,168,214,0.42)`;}}
                onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow=`0 4px 22px rgba(126,168,214,0.3)`;}}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{width:14,height:14}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
                Get Free Quote
              </button>
              <button
                onClick={() => navigate('/projects')}
                style={{padding:'12px 18px',background:'rgba(255,255,255,0.9)',
                  border:`1px solid ${C.border}`,borderRadius:7,cursor:'pointer',color:C.accent,
                  fontSize:11,fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',
                  fontFamily:'"Courier New",monospace',transition:'all 0.2s',
                  display:'flex',alignItems:'center',justifyContent:'center',gap:8}}
                onMouseEnter={e=>{e.currentTarget.style.background='rgba(239,244,250,1)';e.currentTarget.style.borderColor=C.borderHi;}}
                onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.9)';e.currentTarget.style.borderColor=C.border;}}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:14,height:14}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                View Our Work
              </button>
              <div style={{display:'flex',alignItems:'center',gap:9,paddingLeft:4,paddingTop:2}}>
                <div style={{width:6,height:6,borderRadius:'50%',background:C.accent,boxShadow:`0 0 7px ${C.accent}`,flexShrink:0}}/>
                <span style={{fontSize:10,color:'#000000',fontFamily:'"Courier New",monospace'}}>24/7 Support Available</span>
              </div>
            </div>

          </div>
          {/* END COL A */}

          {/* ══════════════════════════════
              COL B — VALUE NAVIGATOR
          ══════════════════════════════ */}
          <div style={{
            display:'flex',flexDirection:'column',
            height:isTablet ? 'auto' : CARD_H,
            boxSizing:'border-box',
            padding:isTablet ? '0' : '0 28px 0 28px',
          }}>

            {/* Feature buttons */}
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',gap:12,flex:1}}>
              {features.map((feat,i)=>{
                const active = i===cur;
                return (
                  <button key={i} onClick={()=>pick(i)} style={{
                    display:'flex',alignItems:'center',gap:10,
                    padding:'12px 14px',borderRadius:10,cursor:'pointer',
                    appearance:'none',WebkitAppearance:'none',
                    outline:'none',textAlign:'left',
                    background: active?'rgba(230,240,252,0.98)':'rgba(255,255,255,0.88)',
                    border:`1px solid ${active?'rgba(126,168,214,0.75)':'rgba(216,227,239,0.95)'}`,
                    transition:'all 0.24s ease',
                    boxShadow: active
                      ? `0 16px 34px rgba(95,135,178,0.12), inset 3px 0 0 ${C.accent}, inset 0 0 14px rgba(126,168,214,0.04)`
                      : '0 0 0 1px rgba(255,255,255,0.5)',
                  }}
                    onMouseEnter={e=>{if(!active){e.currentTarget.style.background='rgba(242,246,251,1)';e.currentTarget.style.borderColor='rgba(182,202,226,0.95)';}}}
                    onMouseLeave={e=>{if(!active){e.currentTarget.style.background='rgba(255,255,255,0.82)';e.currentTarget.style.borderColor='rgba(212,223,236,0.95)';}}}
                  >
                    <div style={{width:27,height:27,borderRadius:6,flexShrink:0,
                      background:active?C.accent:'rgba(126,168,214,0.1)',
                      border:`1px solid ${active?C.accent:'rgba(164,189,219,0.55)'}`,
                      display:'flex',alignItems:'center',justifyContent:'center',
                      transition:'all 0.24s'}}>
                      <span style={{fontSize:9,fontWeight:700,color:active?'#ffffff':C.accent,
                        fontFamily:'"Courier New",monospace',transition:'color 0.24s'}}>{feat.id}</span>
                    </div>
                    <div style={{flex:1}}>
                      <span style={{display:'block',fontSize:11,fontWeight:active?600:400,lineHeight:1.3,
                        color:'#000000',
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
          <div style={{display:'flex',flexDirection:isMobile ? 'column' : 'row',alignItems:'flex-start',gap:14,paddingLeft:isTablet ? 0 : 28,height:isTablet ? 'auto' : CARD_H,boxSizing:'border-box'}}>

            {/* THE CARD */}
            <div style={{
              flex:1,height:isTablet ? (isMobile ? 420 : 520) : CARD_H,
              borderRadius:20,overflow:'hidden',position:'relative',
              background:'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(241,246,253,0.96))',
              border:`1px solid rgba(188,203,221,0.95)`,
              boxShadow:`
                0 34px 90px rgba(94,122,156,0.16),
                0 0 0 1px rgba(207,221,236,0.85),
                inset 0 1px 0 rgba(255,255,255,0.92),
                0 0 28px rgba(129,160,197,0.16)
              `,
            }}>
              {/* Illustration — always mounted for animation continuity */}
              <CardIllustration id={f.id} phase={phase}/>

              {/* Bottom gradient */}
              <div style={{position:'absolute',inset:0,pointerEvents:'none',
                background:'linear-gradient(180deg,rgba(255,255,255,0) 20%,rgba(255,255,255,0.08) 56%,rgba(255,255,255,0.22) 100%)'}}/>

              {/* Top accent line */}
              <div style={{position:'absolute',top:0,left:0,right:0,height:'2px',
                background:`linear-gradient(90deg,transparent,${C.accent} 22%,${C.accent2} 78%,transparent)`}}/>

              {/* Icon */}
              <div style={{position:'absolute',top:16,right:20,...fadeSlide}}>
                <div style={{width:42,height:42,borderRadius:10,
                  background:'rgba(255,255,255,0.92)',
                  border:`1px solid rgba(160,187,219,0.84)`,
                  display:'flex',alignItems:'center',justifyContent:'center',
                  backdropFilter:'blur(16px)'}}>
                  <svg viewBox="0 0 24 24" fill="none" stroke={C.accent} strokeWidth="1.5" style={{width:20,height:20}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon}/>
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'0 26px 24px',background:'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.78) 18%, rgba(255,255,255,0.96) 100%)',...fadeSlide}}>
                <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:12}}>
                  <div style={{width:30,height:'2px',background:C.accent,borderRadius:1,boxShadow:`0 0 7px ${C.accent}33`}}/>
                  <div style={{width:5,height:5,borderRadius:'50%',border:`1.5px solid ${C.accent}`,opacity:0.5}}/>
                  <div style={{width:18,height:'1px',background:'rgba(126,168,214,0.22)',borderRadius:1}}/>
                </div>
                <h3 style={{color:'#000000',fontWeight:700,fontSize:22,lineHeight:1.2,
                  margin:'0 0 11px',textShadow:'none'}}>{f.label}</h3>
                <p style={{color:'#000000',fontSize:13,lineHeight:1.75,
                  margin:'0 0 18px',maxWidth:420,
                  textShadow:'none'}}>{f.sub}</p>
                {f.id === '08' && (
                  <div style={{display:'flex',gap:10,flexWrap:'wrap',margin:'0 0 18px'}}>
                    {[
                      { label:'Rapid diagnosis', value:'Root-cause mapping' },
                      { label:'Action planning', value:'Clear recovery paths' },
                      { label:'Delivery control', value:'Measured next steps' },
                    ].map((item, idx) => (
                      <div key={idx} style={{
                        minWidth:124,
                        padding:'10px 12px',
                        borderRadius:10,
                        background:'rgba(255,255,255,0.82)',
                        border:'1px solid rgba(210,220,232,0.95)',
                        boxShadow:'inset 0 1px 0 rgba(255,255,255,0.8)',
                        backdropFilter:'blur(12px)',
                      }}>
                        <div style={{
                          fontSize:7.5,
                          fontWeight:700,
                          letterSpacing:'0.16em',
                          textTransform:'uppercase',
                          color:'rgba(95,143,190,0.92)',
                          fontFamily:'"Courier New",monospace',
                          marginBottom:5,
                        }}>{item.label}</div>
                        <div style={{
                          color:'#000000',
                          fontSize:10.5,
                          lineHeight:1.45,
                          fontWeight:600,
                        }}>{item.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* VERTICAL NAV */}
            <div style={{flexShrink:0,display:'flex',flexDirection:isMobile ? 'row' : 'column',alignItems:'center',justifyContent:'center',gap:12,width:isMobile ? '100%' : 'auto'}}>
              <button onClick={()=>pick((cur-1+features.length)%features.length)} style={{
                width:40,height:40,borderRadius:8,
                background:'rgba(255,255,255,0.9)',border:`1px solid ${C.border}`,
                color:C.accent,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',
                transition:'all 0.2s',outline:'none'}}
                onMouseEnter={e=>{e.currentTarget.style.background='rgba(239,244,250,1)';e.currentTarget.style.borderColor=C.borderHi;e.currentTarget.style.boxShadow=`0 0 14px rgba(126,168,214,0.18)`;}}
                onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.9)';e.currentTarget.style.borderColor=C.border;e.currentTarget.style.boxShadow='none';}}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{width:13,height:13}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/>
                </svg>
              </button>

              <div style={{position:'relative',width:2,height:180,background:'rgba(210,220,232,0.8)',borderRadius:1}}>
                <div style={{position:'absolute',top:0,left:0,right:0,borderRadius:1,
                  height:`${((cur+1)/features.length)*100}%`,
                  background:`linear-gradient(to bottom,${C.accent},rgba(126,168,214,0.35))`,
                  transition:'height 0.5s cubic-bezier(0.16,1,0.3,1)',
                  boxShadow:`0 0 7px rgba(126,168,214,0.24)`}}/>
                {features.map((_,i)=>(
                  <div key={i} style={{position:'absolute',left:-4,width:10,height:'1.5px',borderRadius:1,
                    top:`${(i/(features.length-1))*100}%`,
                    background:i<=cur?C.accent:'rgba(210,220,232,0.9)',
                    transition:'background 0.3s'}}/>
                ))}
              </div>

              <button onClick={()=>pick((cur+1)%features.length)} style={{
                width:40,height:40,borderRadius:8,
                background:'rgba(255,255,255,0.9)',border:`1px solid ${C.border}`,
                color:C.accent,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',
                transition:'all 0.2s',outline:'none'}}
                onMouseEnter={e=>{e.currentTarget.style.background='rgba(239,244,250,1)';e.currentTarget.style.borderColor=C.borderHi;e.currentTarget.style.boxShadow=`0 0 14px rgba(126,168,214,0.18)`;}}
                onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.9)';e.currentTarget.style.borderColor=C.border;e.currentTarget.style.boxShadow='none';}}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{width:13,height:13}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              <div style={{textAlign:'center',marginTop:4}}>
                <span style={{display:'block',fontSize:22,fontWeight:900,color:C.accent,
                  fontFamily:'"Courier New",monospace',textShadow:`0 0 10px ${C.accent}22`,
                  transition:'all 0.3s'}}>
                  {String(cur+1).padStart(2,'0')}
                </span>
                <div style={{width:20,height:'1px',background:'rgba(126,168,214,0.28)',margin:'4px auto'}}/>
                <span style={{fontSize:10,color:'rgba(101,126,159,0.46)',fontFamily:'"Courier New",monospace'}}>
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