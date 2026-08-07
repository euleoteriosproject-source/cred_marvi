import type {Metadata} from "next";
import {Clock,Mail,MessageCircle} from "lucide-react";
import {Header} from "@/components/layout/Header";
import {Footer} from "@/components/layout/Footer";
import {Container} from "@/components/common/Container";
import {siteConfig} from "@/lib/site-config";
import {siteContactMessage,whatsappUrl} from "@/lib/whatsapp";

export const metadata:Metadata={title:"Contato",description:"Fale com a Cred Marvi por WhatsApp ou e-mail para atendimento financeiro especializado.",alternates:{canonical:"/contato"}};
const items=[
  {Icon:MessageCircle,title:"WhatsApp oficial",text:"",href:whatsappUrl(siteContactMessage())},
  {Icon:Mail,title:"E-mail",text:siteConfig.email,href:`mailto:${siteConfig.email}`},
  {Icon:Clock,title:"Disponibilidade",text:siteConfig.serviceHours},
];

export default function Contact(){return <><Header/><main className="bg-cream py-16 sm:py-24"><Container><p className="eyebrow">Fale conosco</p><h1 className="section-title">Estamos prontos para ouvir você.</h1><p className="mt-5 max-w-2xl leading-7 text-muted">O formulário pode ser preenchido a qualquer hora. As solicitações são analisadas e o atendimento é realizado em horário comercial.</p><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{items.map(({Icon,title,text,href})=>{const content=<><Icon className="text-[#9a7611]"/><h2 className="mt-5 font-bold">{title}</h2>{text&&<p className="mt-2 text-sm leading-6 text-muted">{text}</p>}</>;return href?<a key={title} href={href} target={href.startsWith("http")?"_blank":undefined} rel="noreferrer" className="rounded-2xl border bg-white p-6 transition hover:border-gold hover:shadow-lg">{content}</a>:<div key={title} className="rounded-2xl border bg-white/70 p-6">{content}</div>})}</div><p className="mt-8 max-w-2xl text-sm leading-6 text-muted">Por segurança, nunca envie senhas, códigos de autenticação bancária ou dados completos de cartão.</p></Container></main><Footer/></>}
