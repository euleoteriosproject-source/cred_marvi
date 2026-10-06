import { Compass } from "lucide-react";
import { Container } from "@/components/ui/container";
import type { ContactContext } from "@/lib/contact-context";
import { OrientationPanel } from "./orientation-panel";

export function AnalysisShell({
  initialContext,
}: {
  initialContext: ContactContext;
}) {
  return (
    <main id="conteudo" className="min-h-[70vh] bg-surface-soft py-10 sm:py-16">
      <Container className="max-w-[var(--cm-container-reading)]">
        <section className="rounded-feature border border-border bg-surface p-6 shadow-elevated sm:p-10">
          <span className="grid size-14 place-items-center rounded-option bg-surface-inverse text-accent">
            <Compass aria-hidden="true" />
          </span>
          <p className="mt-7 text-xs font-bold uppercase tracking-[var(--cm-letter-spacing-eyebrow)] text-accent-text">
            Orientação opcional
          </p>
          <h1 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Vamos começar pelo seu objetivo
          </h1>
          <p className="mt-5 leading-7 text-muted">
            Você pode escolher um contexto simples ou conversar diretamente com
            a Marlise. Nenhuma resposta é obrigatória.
          </p>
          <OrientationPanel initialContext={initialContext} />
        </section>
      </Container>
    </main>
  );
}
