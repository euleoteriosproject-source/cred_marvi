import type {Metadata} from "next";
import Link from "next/link";
import {ArrowRight,Check} from "lucide-react";
import {Container} from "@/components/common/Container";
import {Header} from "@/components/layout/Header";
import {Footer} from "@/components/layout/Footer";
import {solutionGuides} from "@/lib/solution-guides";

export const metadata:Metadata={title:"Soluções financeiras",description:"Conheça as principais soluções atendidas pela Cred Marvi para pessoas e empresas.",alternates:{canonical:"/solucoes"}};
export default function Solutions(){return <><Header/><main><section className="bg-navy py-16 text-white sm:py-24"><Container><p className="eyebrow text-gold">Soluções financeiras</p><h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold sm:text-6xl">Informação clara para escolher o próximo passo.</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Conheça as principais modalidades atendidas e veja quais informações ajudam a preparar a análise inicial.</p></Container></section><section className="py-16 sm:py-24"><Container><div className="grid gap-6 md:grid-cols-2">{solutionGuides.map(guide=><article key={guide.slug} className="rounded-3xl border border-[#e6dfcc] bg-white p-7 shadow-[0_18px_60px_rgba(9,12,16,.07)] sm:p-9"><Check className="text-[#9a7611]"/><h2 className="mt-5 font-serif text-3xl font-semibold">{guide.shortTitle}</h2><p className="mt-4 leading-7 text-muted">{guide.description}</p><Link href={`/solucoes/${guide.slug}`} className="mt-7 inline-flex items-center gap-2 font-bold text-[#7c5d0d]">Entender esta solução <ArrowRight size={17}/></Link></article>)}</div><div className="mt-10 rounded-2xl bg-cream p-6 text-sm leading-6 text-muted">Outros produtos disponíveis são apresentados no formulário conforme o perfil selecionado. A disponibilidade e as condições dependem da análise das instituições responsáveis.</div></Container></section></main><Footer/></>}
