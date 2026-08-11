import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { AtriumAnalysis } from "@/integrations/atrium/atrium-analysis";

export function AnalysisShell() {
  return (
    <main id="conteudo" className="min-h-[70vh] bg-surface-soft py-10 sm:py-16">
      <Container className="max-w-[var(--cm-container-reading)]">
        <section className="rounded-feature border border-border bg-surface p-6 shadow-elevated sm:p-10">
          <span className="grid size-14 place-items-center rounded-option bg-surface-inverse text-accent">
            <Sparkles aria-hidden="true" />
          </span>
          <p className="mt-7 text-xs font-bold uppercase tracking-[var(--cm-letter-spacing-eyebrow)] text-accent-text">
            Assistente Marvi
          </p>
          <h1 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Vamos entender o que você precisa.
          </h1>
          <p className="mt-5 leading-7 text-muted">
            Responda uma pergunta por vez. O Assistente Marvi conduz a etapa
            inicial e nossa equipe pode continuar o atendimento com você.
          </p>
          <div className="mt-8 min-h-80" aria-label="Assistente Marvi">
            <AtriumAnalysis />
          </div>
        </section>
      </Container>
    </main>
  );
}
