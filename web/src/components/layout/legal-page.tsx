import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { PageHero } from "./page-hero";
import { PageShell } from "./page-shell";

export function LegalPage({
  title,
  eyebrow,
  intro,
  children,
}: {
  title: string;
  eyebrow: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <PageShell>
      <main id="conteudo">
        <PageHero eyebrow={eyebrow} title={title}>
          <p>{intro}</p>
        </PageHero>
        <Container className="max-w-[var(--cm-container-reading)] py-[var(--cm-space-section)]">
          <div className="legal-content">{children}</div>
        </Container>
      </main>
    </PageShell>
  );
}
