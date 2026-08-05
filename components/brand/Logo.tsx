import Image from "next/image";
import Link from "next/link";

export function BrandMark(){return <span className="relative block h-11 w-11 overflow-hidden rounded-lg border border-gold/30 bg-navy" aria-hidden="true"><Image src="/brand/marvi-finance-logo.png" alt="" fill sizes="44px" className="scale-[2.8] object-cover object-left mix-blend-lighten"/></span>}

export function Logo({light=false}:{light?:boolean}){return <Link href="/" className={`relative block h-12 w-[172px] shrink-0 overflow-hidden ${light?"":"rounded-md bg-navy shadow-sm"}`} aria-label="Marvi Finance — início" title="Voltar para o início"><Image src="/brand/marvi-finance-logo.png" alt="Marvi Finance" fill priority sizes="172px" className={light?"object-contain opacity-95 mix-blend-screen [mask-image:radial-gradient(ellipse_at_center,black_62%,transparent_98%)] brightness-105":"object-contain"}/></Link>}
