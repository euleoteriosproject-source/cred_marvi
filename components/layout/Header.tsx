"use client";
import {useEffect,useRef,useState} from "react";
import Link from "next/link";
import {ArrowRight,Menu,X} from "lucide-react";
import {Logo} from "@/components/brand/Logo";
import {Container} from "@/components/common/Container";
import {trackEvent} from "@/lib/analytics";
import {primaryNavigation as links} from "@/lib/navigation";

export function Header(){
 const[open,setOpen]=useState(false),[scrolled,setScrolled]=useState(false),[active,setActive]=useState("");
 const trigger=useRef<HTMLButtonElement>(null),drawer=useRef<HTMLDivElement>(null);
 useEffect(()=>{let ticking=false;const update=()=>{if(ticking)return;ticking=true;requestAnimationFrame(()=>{setScrolled(window.scrollY>96);ticking=false})};update();window.addEventListener("scroll",update,{passive:true});return()=>window.removeEventListener("scroll",update)},[]);
 useEffect(()=>{const ids=links.map(link=>link.section).filter(Boolean);const elements=ids.map(id=>document.getElementById(id)).filter(Boolean) as HTMLElement[];const observer=new IntersectionObserver(entries=>{const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible)setActive(visible.target.id)},{rootMargin:"-28% 0px -58%",threshold:[0,.15,.4,.7]});elements.forEach(element=>observer.observe(element));return()=>observer.disconnect()},[]);
 useEffect(()=>{if(!open)return;const previous=document.body.style.overflow,triggerElement=trigger.current;document.body.style.overflow="hidden";const panel=drawer.current;const focusable=panel?.querySelectorAll<HTMLElement>('a[href],button:not([disabled])');focusable?.[0]?.focus();const keydown=(event:KeyboardEvent)=>{if(event.key==="Escape"){setOpen(false);return}if(event.key!=="Tab"||!focusable?.length)return;const first=focusable[0],last=focusable[focusable.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}};document.addEventListener("keydown",keydown);return()=>{document.body.style.overflow=previous;document.removeEventListener("keydown",keydown);triggerElement?.focus()}},[open]);
 const close=()=>setOpen(false);
 const navigate=(section:string)=>{trackEvent("navigation_section_clicked",{location:section||"direct"});close()};
 return <>
  <header className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow] duration-200 ${scrolled?"border-border-subtle bg-canvas/95 shadow-[0_4px_18px_rgba(17,19,21,.08)] backdrop-blur-[14px]":"border-gold/20 bg-navy text-white"}`}>
   <Container className={`flex items-center justify-between transition-[height] duration-200 ${scrolled?"h-16":"h-[76px]"}`}>
    <div className={`origin-left transition-transform duration-200 ${scrolled?"scale-[.94]":""}`}><Logo light={!scrolled} compact={false}/></div>
    <nav className="hidden items-center gap-4 lg:flex xl:gap-6" aria-label="Principal">{links.map(link=><Link onClick={()=>navigate(link.section)} className={`relative py-3 text-sm font-semibold transition-colors ${scrolled?"text-navy hover:text-[#8b6a16]":"text-slate-300 hover:text-gold"} ${active===link.section&&link.section?"text-[#9b7925] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-gold":""}`} key={link.href} href={link.href}>{link.label}</Link>)}</nav>
    <div className="flex items-center gap-2"><Link href="/analise" className={`hidden min-h-11 items-center justify-center rounded-xl px-5 text-sm font-bold transition sm:inline-flex ${scrolled?"bg-navy text-white hover:bg-navy2":"bg-gold text-navy hover:bg-[#dfb65b]"}`}>Encontrar uma solução</Link><button ref={trigger} className={`grid h-11 w-11 place-items-center rounded-xl border lg:hidden ${scrolled?"border-border-subtle text-navy":"border-white/10 text-gold"}`} onClick={()=>{setOpen(true);trackEvent("mobile_menu_opened")}} aria-expanded={open} aria-controls="mobile-navigation" aria-label="Abrir menu"><Menu/></button></div>
   </Container>
  </header><div aria-hidden="true" className="h-[76px]"/>
  {open&&<div className="fixed inset-0 z-[60] bg-black/45 backdrop-blur-[2px]" onMouseDown={event=>event.target===event.currentTarget&&close()}><div ref={drawer} id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Navegação" className="ml-auto flex h-full w-[min(92vw,26rem)] flex-col bg-canvas p-5 shadow-2xl"><div className="flex items-center justify-between border-b pb-5"><Logo/><button onClick={close} className="grid h-11 w-11 place-items-center rounded-xl border bg-white" aria-label="Fechar menu"><X/></button></div><nav className="mt-6 grid" aria-label="Menu mobile">{links.map(link=><Link onClick={()=>navigate(link.section)} className="flex min-h-14 items-center justify-between border-b text-base font-semibold text-navy" key={link.href} href={link.href}>{link.label}<ArrowRight size={17} className="text-[#8b6a16]"/></Link>)}</nav><div className="mt-auto border-t pt-6"><Link onClick={close} href="/analise" className="btn-primary w-full">Encontrar uma solução</Link><Link onClick={close} href="/analise?quick=1&entryPoint=SPECIALIST" className="mt-3 flex min-h-12 items-center justify-center text-sm font-bold text-navy">Falar com a Marlise</Link></div></div></div>}
 </>
}
