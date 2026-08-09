import { Handshake, ShieldCheck, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a forma consultiva e humana de atendimento da Cred Marvi.",
};

const principles = [
  [
    Handshake,
    "Proximidade",
    "Compreender o contexto antes de orientar qualquer próximo passo.",
  ],
  [
    Sparkles,
    "Clareza",
    "Traduzir alternativas financeiras em uma conversa simples e responsável.",
  ],
  [
    ShieldCheck,
    "Confiança",
    "Respeitar limites, privacidade e decisões informadas em toda interação.",
  ],
] as const;

export default function AboutPage() {
  return (
    <PageShell>
      <main id="conteudo">
        <PageHero
          eyebrow="Sobre a Cred Marvi"
          title="Tecnologia com proximidade humana."
        >
          <p>
            A Cred Marvi aproxima pessoas e empresas de soluções financeiras por
            meio de atendimento claro, consultivo e responsável.
          </p>
        </PageHero>
        <Container className="py-[var(--cm-space-section)]">
          <section className="max-w-[var(--cm-container-content)]">
            <h2 className="font-serif text-3xl font-semibold">
              Nossa forma de atender
            </h2>
            <p className="mt-5 leading-7 text-muted">
              Uma boa orientação começa pela compreensão do contexto. A
              experiência digital ajuda a organizar o caminho, enquanto o
              atendimento humano oferece espaço para conversar com cuidado e
              clareza.
            </p>
          </section>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {principles.map(([Icon, title, text]) => (
              <article
                key={title}
                className="rounded-card border border-border bg-surface p-6 shadow-card"
              >
                <Icon className="text-accent-text" aria-hidden="true" />
                <h2 className="mt-5 font-serif text-2xl font-semibold">
                  {title}
                </h2>
                <p className="mt-3 leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
          <ButtonLink href="/contato" className="mt-10">
            Falar com a Cred Marvi
          </ButtonLink>
        </Container>
      </main>
    </PageShell>
  );
}
