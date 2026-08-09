import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-surface-inverse py-14 text-inverse sm:py-20">
      <Container>
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
      </Container>
    </section>
  );
}
