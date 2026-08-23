import type {Metadata,Viewport} from "next";
import {Manrope,Playfair_Display} from "next/font/google";
import "./globals.css";
import {siteConfig} from "@/lib/site-config";
import {FloatingWhatsApp} from "@/components/common/FloatingWhatsApp";

const manrope=Manrope({subsets:["latin"],variable:"--font-manrope",display:"swap"});
const playfair=Playfair_Display({subsets:["latin"],variable:"--font-playfair",display:"swap"});

export const metadata:Metadata={
 metadataBase:new URL(siteConfig.siteUrl),
 title:{default:"Cred Marvi | Soluções para pessoas e empresas",template:"%s | Cred Marvi"},
 description:"Conte sua necessidade e prepare um atendimento especializado para conhecer alternativas de crédito, financiamento, consórcio e outras soluções para você ou sua empresa.",
 applicationName:`${siteConfig.brand.name} | ${siteConfig.brand.descriptor}`,
 category:"Serviços financeiros",alternates:{canonical:"/"},
 openGraph:{siteName:`${siteConfig.brand.name} | ${siteConfig.brand.descriptor}`,title:"Cred Marvi | Soluções para pessoas e empresas",description:"Atendimento humano e especializado para entender sua necessidade.",type:"website",locale:"pt_BR",images:[{url:"/brand/cred-marvi-logo.jfif",alt:`${siteConfig.brand.name} — ${siteConfig.brand.descriptor}`}]},
 twitter:{card:"summary_large_image",images:["/brand/cred-marvi-logo.jfif"]},robots:{index:siteConfig.isProduction,follow:siteConfig.isProduction},verification:{google:process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#1c1c1e"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR" className={`${manrope.variable} ${playfair.variable}`}><body className="font-sans antialiased"><a href="#conteudo" className="sr-only z-[70] rounded-md bg-navy px-4 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Ir para o conteúdo</a>{children}<FloatingWhatsApp/></body></html>}
