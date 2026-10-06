import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export function PageHero({
  eyebrow,
  title,
  children,
  image,
  visual,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  image?: { src: string; alt: string; unoptimized?: boolean };
  visual?: ReactNode;
}) {
  return (
    <section className="page-opening border-b border-border bg-surface py-6 sm:py-10">
      <Container>
        <nav
          aria-label="Localização"
          className="mb-5 flex flex-wrap items-center gap-2 text-xs text-muted"
        >
          <Link
            href="/"
            className="inline-flex min-h-11 items-center hover:text-accent-text"
          >
            Início
          </Link>
          <span aria-hidden="true">/</span>
          {image ? (
            <>
              <Link
                href="/solucoes"
                className="inline-flex min-h-11 items-center hover:text-accent-text"
              >
                Soluções
              </Link>
              <span aria-hidden="true">/</span>
            </>
          ) : null}
          <span>{eyebrow}</span>
        </nav>
        <div
          className={
            image || visual
              ? "grid items-center gap-7 lg:grid-cols-[1.1fr_.9fr] lg:gap-14"
              : ""
          }
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent-text">
              {eyebrow}
            </p>
            <h1 className="mt-3 max-w-3xl font-serif text-[2.15rem] font-semibold leading-[1.15] tracking-tight sm:text-5xl">
              {title}
            </h1>
            {children ? (
              <div className="mt-4 max-w-xl leading-7 text-muted">
                {children}
              </div>
            ) : null}
          </div>
          {image ? (
            <div className="relative aspect-[8/5] overflow-hidden rounded-feature border border-border bg-surface-soft">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                unoptimized={image.unoptimized}
                preload
                sizes="(max-width: 1023px) 92vw, 46vw"
                className="object-cover"
              />
            </div>
          ) : null}
          {visual}
        </div>
      </Container>
    </section>
  );
}
