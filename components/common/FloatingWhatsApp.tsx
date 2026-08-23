"use client";
import {useEffect,useState} from "react";
import {usePathname} from "next/navigation";
import {ChevronUp} from "lucide-react";
import {trackEvent} from "@/lib/analytics";
import {siteContactMessage,whatsappUrl} from "@/lib/whatsapp";

export function FloatingWhatsApp(){
 const pathname=usePathname();
 const[showTop,setShowTop]=useState(false);
 useEffect(()=>{let ticking=false;const update=()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{const mobile=window.innerWidth<768;const threshold=mobile?Math.max(1400,window.innerHeight*1.75):680;setShowTop(window.scrollY>threshold);ticking=false})};update();window.addEventListener("scroll",update,{passive:true});window.addEventListener("resize",update);return()=>{window.removeEventListener("scroll",update);window.removeEventListener("resize",update)}},[]);
 const home=pathname==="/";
 const goTop=()=>{window.scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});trackEvent("back_to_top_clicked")};
 return <aside aria-label="Ações rápidas" className={`fixed right-4 z-[35] flex w-14 flex-col items-center gap-2.5 rounded-full border border-border-subtle bg-canvas/90 px-1.5 py-2 shadow-subtle backdrop-blur-md transition-[bottom] md:bottom-6 md:right-7 ${home?"bottom-[calc(5.75rem+env(safe-area-inset-bottom))]":"bottom-[calc(1rem+env(safe-area-inset-bottom))]"}`}>
  {showTop&&<button onClick={goTop} className="grid h-9 w-9 animate-[quickActionIn_.18s_ease-out] place-items-center rounded-full border border-white/10 bg-navy/90 text-gold shadow-xs transition hover:-translate-y-0.5 hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:h-11 md:w-11" aria-label="Voltar ao topo" title="Voltar ao topo"><ChevronUp size={18}/></button>}
  <a href={whatsappUrl(siteContactMessage())} target="_blank" rel="noreferrer" aria-label="Falar com a Cred Marvi pelo WhatsApp" title="Falar pelo WhatsApp" onClick={()=>trackEvent("whatsapp_click",{location:"floating"})} className="grid h-11 w-11 place-items-center rounded-full bg-[#1f9d58] text-white shadow-[0_8px_20px_rgba(31,157,88,.2)] transition hover:-translate-y-0.5 hover:bg-[#18834a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f9d58] md:h-14 md:w-14">
   <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current md:h-8 md:w-8" aria-hidden="true"><path d="M16.03 3a12.84 12.84 0 0 0-11 19.47L3 29l6.72-1.98A12.96 12.96 0 1 0 16.03 3Zm0 23.74c-1.98 0-3.91-.54-5.59-1.56l-.4-.24-3.99 1.17 1.2-3.88-.26-.4a10.68 10.68 0 1 1 9.04 4.91Zm5.86-8.01c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.72.16-.21.32-.82 1.05-1.01 1.26-.18.22-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59a9.62 9.62 0 0 1-1.78-2.21c-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.98-2.38-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.42 4.8.76.32 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.17-1.53.26-.75.26-1.4.18-1.53-.08-.13-.29-.21-.61-.37Z"/></svg>
  </a>
 </aside>
}
