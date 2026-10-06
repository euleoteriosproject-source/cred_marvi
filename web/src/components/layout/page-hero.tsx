import type { ReactNode } from "react";
import Image from "next/image";
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
    <section className="bg-surface-inverse py-14 text-inverse sm:py-20">
      <Container
        className={
          image ? "grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr]" : ""
        }
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[var(--cm-letter-spacing-eyebrow)] text-accent">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            {title}
          </h1>
          {children ? (
            <div className="mt-5 max-w-3xl leading-7 text-inverse-muted">
              {children}
            </div>
          ) : null}
        </div>
        {image ? (
          <div className="relative h-64 overflow-hidden rounded-feature sm:h-80">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1023px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
