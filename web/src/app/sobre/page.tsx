import { Handshake, ShieldCheck, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { WhatsAppLink } from "@/components/contact/whatsapp-link";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a forma consultiva de atendimento de Marlise Euleoterio na Cred Marvi.",
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
    "Apresentar possibilidades em uma conversa simples e responsável.",
  ],
  [
    ShieldCheck,
    "Decisão consciente",
    "Respeitar limites e esclarecer que condições variam em cada caso.",
  ],
] as const;

export default function AboutPage() {
  return (
    <PageShell>
      <main id="conteudo">
        <PageHero
          eyebrow="Marlise Euleoterio"
          title="Atendimento próximo para organizar o seu próximo passo."
        >
          <p>
            A Cred Marvi oferece orientação e intermediação consultiva para
            pessoas e empresas, sem se apresentar como banco.
          </p>
        </PageHero>
        <Container className="py-[var(--cm-space-section)]">
          <section className="max-w-[var(--cm-container-content)]">
            <h2 className="font-serif text-3xl font-semibold">
              Uma conversa humana e objetiva
            </h2>
            <p className="mt-5 leading-7 text-muted">
              Com Marlise Euleoterio, você esclarece dúvidas, entende
              possibilidades e organiza os próximos passos. O atendimento parte
              do seu objetivo e não promete aprovação ou condição antecipada.
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
          <WhatsAppLink variant="whatsapp" className="mt-10">
            Falar com a Marlise
          </WhatsAppLink>
        </Container>
      </main>
    </PageShell>
  );
}
