import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export function PageHero({
  eyebrow,
  title,
  children,
  image,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  image?: { src: string; alt: string };
}) {
  return (
    <section className="border-b border-border bg-surface py-8 sm:py-12">
      <Container>
        <nav
          aria-label="Localização"
          className="mb-7 flex flex-wrap items-center gap-2 text-xs text-muted"
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
            image ? "grid items-center gap-8 lg:grid-cols-2 lg:gap-14" : ""
          }
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent-text">
              {eyebrow}
            </p>
            <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {title}
            </h1>
            {children ? (
              <div className="mt-4 max-w-xl leading-7 text-muted">
                {children}
              </div>
            ) : null}
          </div>
          {image ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-feature bg-surface-soft">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                preload
                sizes="(max-width: 1023px) 92vw, 46vw"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
