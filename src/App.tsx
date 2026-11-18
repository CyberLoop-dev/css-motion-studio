import {useMemo,useState} from "react";
const curves=["ease","ease-in","ease-out","ease-in-out","linear"];
export default function App(){
const [duration,setDuration]=useState(2),[distance,setDistance]=useState(120),[rotation,setRotation]=useState(180),[scale,setScale]=useState(1.25),[easing,setEasing]=useState("ease-in-out");
const css=useMemo(()=>`@keyframes studio-motion { from { transform: translateX(0) rotate(0deg) scale(1); } to { transform: translateX(${distance}px) rotate(${rotation}deg) scale(${scale}); } }
.motion-demo { animation: studio-motion ${duration}s ${easing} infinite alternate; }`,[distance,rotation,scale,duration,easing]);
async function copy(){try{await navigator.clipboard.writeText(css);}catch{window.alert("Clipboard access is unavailable. Select and copy the CSS below.");}}
return <main className="shell"><header><div className="mark">↗</div><div><p className="eyebrow">FRONTEND PLAYGROUND</p><h1>CSS Motion Studio</h1></div><span className="local">LOCAL · NO ACCOUNT</span></header>
<section className="stage-card"><div className="stage-head"><span>LIVE PREVIEW</span><span>↔ Motion stage</span></div><div className="stage"><style>{`@keyframes studio-motion{from{transform:translateX(0) rotate(0deg) scale(1)}to{transform:translateX(${distance}px) rotate(${rotation}deg) scale(${scale})}}`}</style><div className="orb" style={{animation:`studio-motion ${duration}s ${easing} infinite alternate`}}>M</div></div></section>
<section className="controls"><div className="panel"><h2>Motion controls</h2>
<label>Duration <output>{duration.toFixed(1)}s</output><input type="range" min="0.4" max="5" step="0.1" value={duration} onChange={e=>setDuration(Number(e.target.value))}/></label>
<label>Travel distance <output>{distance}px</output><input type="range" min="0" max="220" step="5" value={distance} onChange={e=>setDistance(Number(e.target.value))}/></label>
<label>Rotation <output>{rotation}°</output><input type="range" min="-360" max="360" step="15" value={rotation} onChange={e=>setRotation(Number(e.target.value))}/></label>
<label>Scale <output>{scale.toFixed(2)}×</output><input type="range" min="0.5" max="2" step="0.05" value={scale} onChange={e=>setScale(Number(e.target.value))}/></label>
<label>Easing<select value={easing} onChange={e=>setEasing(e.target.value)}>{curves.map(c=><option key={c}>{c}</option>)}</select></label></div>
<div className="panel code-panel"><div className="code-head"><h2>Generated CSS</h2><button onClick={copy}>Copy CSS</button></div><pre><code>{css}</code></pre><p>Paste the keyframes and class into your stylesheet.</p></div></section><footer>CSS Motion Studio · Built for quick experiments</footer></main>;
}