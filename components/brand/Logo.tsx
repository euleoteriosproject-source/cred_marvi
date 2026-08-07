import Image from "next/image";
import Link from "next/link";

export function BrandMark(){return <span className="relative block h-11 w-11 overflow-hidden rounded-lg border border-gold/30 bg-navy" aria-hidden="true"><Image src="/brand/cred-marvi-symbol.png" alt="" fill sizes="44px" className="object-cover"/></span>}

export function Logo({light=false}:{light?:boolean}){return <Link href="/" className={`flex h-12 w-[184px] shrink-0 items-center gap-2 overflow-hidden ${light?"":"rounded-md bg-navy px-2 shadow-sm"}`} aria-label="Cred Marvi — início" title="Voltar para o início"><span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full"><Image src="/brand/cred-marvi-symbol.png" alt="" fill priority sizes="44px" className="object-cover"/></span><span className="leading-none"><span className={`block text-[9px] font-bold tracking-[.3em] ${light?"text-slate-300":"text-gold"}`}>CRED</span><strong className="mt-1 block font-serif text-xl tracking-[.12em] text-gold">MARVI</strong></span></Link>}
