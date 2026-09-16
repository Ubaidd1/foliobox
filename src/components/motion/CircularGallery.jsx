import {useEffect,useRef,useState} from 'react';
import {useReducedMotion} from 'motion/react';
import {ArrowUpRight} from 'lucide-react';
import {Link} from '../../lib/router';
import {ProjectImage} from '../ui/Primitives';
export default function CircularGallery({items}){
 const root=useRef(),cards=useRef([]),target=useRef(0),current=useRef(0),drag=useRef(null),moved=useRef(false),hover=useRef(false),focused=useRef(false),pointerType=useRef('mouse');
 const reduced=useReducedMotion();const [expanded,setExpanded]=useState(null),[copies,setCopies]=useState(3);
 useEffect(()=>{const resize=new ResizeObserver(([entry])=>setCopies(Math.max(3,Math.ceil((entry.contentRect.width+1280)/(items.length*320)))));resize.observe(root.current);return()=>resize.disconnect()},[items.length]);
 const count=reduced?items.length:items.length*copies;
 useEffect(()=>{const el=root.current;if(reduced)return;let raf,previous=0,visible=true;
 const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting});observer.observe(el);
 const tick=time=>{const dt=Math.min((time-previous)/1000,.05);previous=time;if(visible&&!document.hidden){const w=el.clientWidth,step=w<600?250:340,total=step*count;
 if(!hover.current&&!focused.current&&!drag.current&&expanded===null)target.current+=dt*36;
 current.current+=(target.current-current.current)*(1-Math.exp(-dt*10));
 cards.current.slice(0,count).forEach((card,i)=>{if(!card)return;const x=((i*step-current.current+total/2)%total+total)%total-total/2;const half=w/2,bend=70,radius=(half*half+bend*bend)/(2*bend),effective=Math.min(Math.abs(x),half),arc=radius-Math.sqrt(radius*radius-effective*effective),angle=Math.sign(x)*Math.asin(effective/radius)*180/Math.PI;card.style.transform=`translate3d(${x}px,${arc}px,0) rotate(${angle}deg)`;});
 }raf=requestAnimationFrame(tick)};raf=requestAnimationFrame(tick);return()=>{cancelAnimationFrame(raf);observer.disconnect()}},[count,expanded,reduced]);
 const finish=()=>{drag.current=null};
 return <div className="gallery-shell"><div ref={root} className={'circular-gallery '+(reduced?'gallery-reduced':'')} tabIndex={0} role="region" aria-label="Project gallery. Drag to explore, use arrow keys to move, or focus a project to read more." onKeyDown={e=>{if(e.key==='Escape')setExpanded(null);if(['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();const amount=(e.key==='ArrowRight'?1:-1)*(root.current.clientWidth<600?250:340);if(reduced)root.current.scrollBy({left:amount});else target.current+=amount}}} onMouseEnter={()=>hover.current=true} onMouseLeave={()=>{hover.current=false;if(pointerType.current==='mouse')setExpanded(null)}} onFocusCapture={e=>{focused.current=true;const index=cards.current.findIndex(c=>c===e.target);if(index>=0&&!reduced){current.current=target.current=index*(root.current.clientWidth<600?250:340)}}} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget)){focused.current=false;setExpanded(null)}}} onPointerDown={e=>{pointerType.current=e.pointerType;moved.current=false;if(reduced||e.button!==0)return;drag.current={x:e.clientX,start:target.current}}} onPointerMove={e=>{if(!drag.current)return;const delta=drag.current.x-e.clientX;if(Math.abs(delta)>8){moved.current=true;setExpanded(null);e.currentTarget.setPointerCapture(e.pointerId)}target.current=drag.current.start+delta}} onPointerUp={finish} onPointerCancel={finish} onLostPointerCapture={finish} onClickCapture={e=>{if(moved.current){e.preventDefault();e.stopPropagation();moved.current=false}}}>
 {Array.from({length:count},(_,i)=>{const p=items[i%items.length];return <Link ref={el=>{cards.current[i]=el}} key={i} to={'/projects/'+p.id} className={'circular-card '+(expanded===i?'is-expanded':'')} tabIndex={i<items.length?0:-1} draggable={false} onClick={e=>{if(pointerType.current==='touch'&&expanded!==i){e.preventDefault();setExpanded(i)}}}><div className="circular-card-surface"><ProjectImage src={p.image} alt={p.name} draggable={false}/><div className="circular-card-copy"><span>{p.name}<ArrowUpRight size={18}/></span><p>{p.subtitle}</p><small>Explore project</small></div></div></Link>})}
 </div></div>
}
