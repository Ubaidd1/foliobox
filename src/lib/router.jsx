import {createContext,useContext,useEffect,useState} from 'react';
const RouterContext=createContext(null);
export function Router({children}){
 const [url,setUrl]=useState(()=>location.href);const path=new URL(url).pathname;
 useEffect(()=>{const pop=()=>setUrl(location.href);addEventListener('popstate',pop);return()=>removeEventListener('popstate',pop)},[]);
 useEffect(()=>{if(!location.hash)return;let id;try{id=decodeURIComponent(location.hash.slice(1))}catch{return}let observer;const timer=setTimeout(()=>{const scroll=()=>{const target=document.getElementById(id);if(!target)return false;target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});observer?.disconnect();return true};if(!scroll()){observer=new MutationObserver(scroll);observer.observe(document.getElementById('root'),{subtree:true,childList:true})}},300);return()=>{clearTimeout(timer);observer?.disconnect()}},[url]);
 const navigate=to=>{history.pushState({},'',to);setUrl(location.href);if(!location.hash)window.scrollTo({top:0,behavior:'instant'})};
 return <RouterContext.Provider value={{path,navigate,url}}>{children}</RouterContext.Provider>
}
export const useRouter=()=>useContext(RouterContext);
export function Link({to,children,onClick,...props}){const {navigate}=useRouter();return <a href={to} {...props} onClick={e=>{onClick?.(e);if(!e.defaultPrevented&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey&&e.button===0){e.preventDefault();navigate(to)}}}>{children}</a>}
