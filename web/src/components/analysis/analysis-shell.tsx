import { MessageCircle, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { whatsappHref } from "@/lib/whatsapp";

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
            Um espaço preparado para uma jornada guiada.
          </h1>
          <p className="mt-5 leading-7 text-muted">
            A conversa digital ainda não está disponível nesta versão. A
            integração futura será conduzida pelo Atrium, responsável pelas
            perguntas e pelo andamento da jornada.
          </p>
          <div
            className="mt-8 rounded-card border border-border bg-surface-subtle p-6"
            aria-label="Área futura do Assistente Marvi"
          >
            <h2 className="font-bold">Integração em preparação</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Nenhuma informação pessoal é solicitada ou armazenada por esta
              página neste momento.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsappHref()}>
              <MessageCircle size={18} aria-hidden="true" /> Falar com
              especialista
            </ButtonLink>
            <ButtonLink href="/solucoes" variant="secondary">
              Conhecer soluções
            </ButtonLink>
          </div>
        </section>
      </Container>
    </main>
  );
}
