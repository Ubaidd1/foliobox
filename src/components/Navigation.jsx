import {features} from '../lib/features';
import {useState,useEffect,useRef} from 'react';
import {AnimatePresence,motion} from 'motion/react';
import {Dialog} from 'radix-ui';
import {Menu,X,ArrowUpRight,ShoppingBag} from 'lucide-react';
import {Link,useRouter} from '../lib/router';
import {Button} from './ui/Primitives';
import {services} from '../lib/data';
const pages=['Home','About','Services','Projects','Contact'];
export default function Navigation({plan,onBag}){
 const [active,setActive]=useState(false),[mobile,setMobile]=useState(false),[scrolled,setScrolled]=useState(false);
 const {path}=useRouter();const timer=useRef(),trigger=useRef(),header=useRef();
 const [menuLeft,setMenuLeft]=useState(null);
 const position=()=>{if(!trigger.current||!header.current)return;const t=trigger.current.getBoundingClientRect(),h=header.current.getBoundingClientRect();const half=Math.min(620,innerWidth-32)/2;setMenuLeft(Math.max(half+16,Math.min(innerWidth-half-16,t.left+t.width/2))-h.left)};
 useEffect(()=>{addEventListener('resize',position);return()=>removeEventListener('resize',position)},[]);
 const open=()=>{clearTimeout(timer.current);position();setActive(true)};
 const dismiss=()=>{clearTimeout(timer.current);setActive(false)};
 const close=()=>{clearTimeout(timer.current);timer.current=setTimeout(()=>setActive(false),220)};
 useEffect(()=>{const scroll=()=>setScrolled(scrollY>50);const outside=e=>{if(!header.current?.contains(e.target))setActive(false)};scroll();addEventListener('scroll',scroll,{passive:true});addEventListener('pointerdown',outside);return()=>{removeEventListener('scroll',scroll);removeEventListener('pointerdown',outside);clearTimeout(timer.current)}},[]);
 useEffect(()=>{dismiss();setMobile(false)},[path]);
 return <><a className="skip-link" href="#main">Skip to content</a><header ref={header} className={'site-header '+(scrolled?'is-scrolled':'')} onMouseLeave={close} onKeyDown={e=>{if(e.key==='Escape'&&active){dismiss();trigger.current?.focus()}}} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))dismiss()}}>
 <div className="nav-inner"><Link to="/" className="logo" aria-label="Folioblox home" onMouseEnter={dismiss}>Folioblox<span>✳</span></Link>
 <nav className="desktop-nav" aria-label="Main navigation">{pages.map(name=>name==='Services'?<Link to="/services" key={name} ref={trigger} className="services-trigger" aria-expanded={active} aria-controls="services-mega-menu" onMouseEnter={open} onClick={dismiss} onKeyDown={e=>{if(e.key==='ArrowDown'){e.preventDefault();open();requestAnimationFrame(()=>document.querySelector('#services-mega-menu a')?.focus())}}}>Services</Link>:<Link key={name} to={name==='Home'?'/':'/'+name.toLowerCase()} aria-current={(name==='Home'?path==='/':path.startsWith('/'+name.toLowerCase()))?'page':undefined} onMouseEnter={dismiss} onFocus={dismiss}>{name}</Link>)}</nav>
 <div className="nav-actions" onMouseEnter={dismiss}>{features.commerce&&<button className="bag-button" onClick={onBag} aria-label={'Selected package'+(plan?': '+plan.name:'')}><ShoppingBag size={19}/>{plan&&<span className="bag-dot"/>}</button>}<Button to="/contact" light className="header-cta">Get in touch</Button>
 <Dialog.Root open={mobile} onOpenChange={setMobile}><Dialog.Trigger asChild><button className="mobile-toggle icon-button" aria-label="Open menu"><Menu/></button></Dialog.Trigger><Dialog.Portal><Dialog.Overlay className="modal-overlay"/><Dialog.Content className="mobile-drawer"><Dialog.Title className="logo">Folioblox<span>✳</span></Dialog.Title><Dialog.Description className="sr-only">Explore the studio, services, and selected work.</Dialog.Description><Dialog.Close className="drawer-close icon-button" aria-label="Close menu"><X/></Dialog.Close><nav aria-label="Mobile navigation">{pages.map((name,i)=><Link key={name} to={i===0?'/':'/'+name.toLowerCase()} onClick={()=>setMobile(false)}><span>0{i+1}</span>{name}<ArrowUpRight/></Link>)}</nav><p className="muted">A little strategy.<br/>A lot of possibility.</p><Button to="/contact" onClick={()=>setMobile(false)}>Book a discovery call</Button></Dialog.Content></Dialog.Portal></Dialog.Root></div></div>
 <AnimatePresence>{active&&<motion.div id="services-mega-menu" className="services-mega-menu" style={{left:menuLeft??'50%'}} initial={{opacity:0,y:-12,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:-8,scale:.98}} transition={{duration:.24,ease:[.16,1,.3,1]}} onMouseEnter={open}><div className="services-menu-heading"><div><p className="eyebrow">Ways to work together</p><h3>Good ideas.<br/>Thoughtfully made.</h3></div><Link to="/services" onClick={dismiss}>All services <ArrowUpRight size={18}/></Link></div><div className="services-menu-list">{services.map((service,i)=><Link key={service.id} to={'/services/'+service.id} onClick={dismiss}><span className="menu-index">0{i+1}</span><div><strong>{service.name}</strong><span>{service.tag}</span></div><ArrowUpRight size={18}/></Link>)}</div><div className="services-menu-footer"><p>Not sure where to start?</p><Link to="/contact" onClick={dismiss}>Book a discovery call <ArrowUpRight size={16}/></Link></div></motion.div>}</AnimatePresence>
 </header></>}
