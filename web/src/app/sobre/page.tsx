import {
  Award,
  Building2,
  GraduationCap,
  Handshake,
  Landmark,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import { SpecialistPortrait } from "@/components/brand/specialist";
import { WhatsAppLink } from "@/components/contact/whatsapp-link";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata({
  title: "Sobre a Marlise",
  description:
    "Conheça a trajetória, a formação e as certificações de Marlise Euleoterio, responsável pelo atendimento da Cred Marvi.",
  path: "/sobre",
});

const credentials = [
  {
    Icon: Award,
    title: "CPA-10 ativa",
    detail: "Certificação ANBIMA",
  },
  {
    Icon: Landmark,
    title: "Certificação CORBAN",
    detail: "Correspondente bancária",
  },
  {
    Icon: ShieldCheck,
    title: "Corretora de Seguros",
    detail: "Habilitação profissional",
  },
  {
    Icon: GraduationCap,
    title: "Administração",
    detail: "Formação profissional",
  },
] as const;

const principles = [
  {
    Icon: Handshake,
    title: "Proximidade",
    text: "Compreender o contexto antes de orientar qualquer próximo passo.",
  },
  {
    Icon: Sparkles,
    title: "Clareza",
    text: "Apresentar possibilidades em uma conversa simples e responsável.",
  },
  {
    Icon: ShieldCheck,
    title: "Decisão consciente",
    text: "Respeitar limites e esclarecer que condições variam em cada caso.",
  },
] as const;

const experience = [
  {
    value: "10+ anos",
    label: "de experiência no mercado financeiro",
  },
  {
    value: "600+",
    label: "empresas em uma carteira já gerenciada",
  },
  {
    value: "130",
    label: "profissionais em uma operação digital PJ já liderada",
  },
] as const;

export default function AboutPage() {
  return (
    <PageShell>
      <main id="conteudo">
        <PageHero
          eyebrow="Sobre a Marlise"
          title="Experiência para orientar decisões com mais clareza."
          visual={<SpecialistPortrait preload showProfileLink={false} />}
        >
          <p>
            Na Cred Marvi, você conversa com Marlise Chaves Paiva Euleoterio,
            profissional com trajetória no mercado financeiro e atendimento a
            pessoas e empresas.
          </p>
          <WhatsAppLink variant="primary" className="mt-6">
            Falar com a Marlise
          </WhatsAppLink>
        </PageHero>

        <Container className="py-[var(--cm-space-section)]">
          <section className="grid items-start gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
            <div className="max-w-[var(--cm-container-content)]">
              <p className="text-xs font-bold uppercase tracking-widest text-accent-text">
                Trajetória profissional
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
                Vivência bancária aplicada a um atendimento consultivo.
              </h2>
              <p className="mt-5 leading-7 text-muted">
                Administradora e profissional com mais de dez anos de atuação no
                mercado financeiro, Marlise construiu sua trajetória em
                instituições como Santander, Itaú Unibanco e cooperativas de
                crédito. Reúne experiência no atendimento a pessoas e empresas,
                estruturação de operações de crédito, análise de risco e
                relacionamento consultivo.
              </p>
              <p className="mt-4 leading-7 text-muted">
                Na área empresarial, já gerenciou uma carteira com mais de 600
                empresas cooperadas e atuou com negócios de diferentes portes.
                Também liderou uma operação digital PJ com aproximadamente 130
                profissionais, participando da formação de equipes, implantação
                de processos e desenvolvimento de pessoas.
              </p>
              <p className="mt-4 leading-7 text-muted">
                Sua experiência inclui crédito, financiamentos, consórcios,
                capital de giro, recebíveis, compliance, LGPD, prevenção à
                lavagem de dinheiro e governança. Atualmente, também cursa
                pós-graduação em Finanças e Banking.
              </p>
            </div>

            <aside className="overflow-hidden rounded-feature border border-border bg-surface-soft p-7 shadow-card sm:p-8">
              <span className="grid size-12 place-items-center rounded-full border border-accent/40 bg-surface text-accent-text">
                <Building2 aria-hidden="true" />
              </span>
              <p className="mt-5 text-xs font-bold uppercase tracking-widest text-accent-text">
                Trajetória em perspectiva
              </p>
              <h2 className="mt-2 font-serif text-2xl font-semibold">
                Experiência em números
              </h2>
              <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {experience.map(({ value, label }) => (
                  <div
                    key={value}
                    className="rounded-card border border-border bg-surface px-5 py-4"
                  >
                    <strong className="font-serif text-3xl font-semibold text-accent-text">
                      {value}
                    </strong>
                    <p className="mt-1 text-sm leading-6 text-muted">{label}</p>
                  </div>
                ))}
              </div>
            </aside>
          </section>

          <section
            className="mt-[var(--cm-space-section)]"
            aria-labelledby="formacao-title"
          >
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-accent-text">
                Formação e certificações
              </p>
              <h2
                id="formacao-title"
                className="mt-3 font-serif text-3xl font-semibold sm:text-4xl"
              >
                Conhecimento que sustenta cada orientação.
              </h2>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {credentials.map(({ Icon, title, detail }) => (
                <article
                  key={title}
                  className="rounded-card border border-border bg-surface p-6 shadow-card"
                >
                  <span className="grid size-11 place-items-center rounded-full bg-surface-soft text-accent-text">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            className="mt-[var(--cm-space-section)]"
            aria-labelledby="atendimento-title"
          >
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-accent-text">
                Como ela atende
              </p>
              <h2
                id="atendimento-title"
                className="mt-3 font-serif text-3xl font-semibold sm:text-4xl"
              >
                Experiência técnica, conversa humana.
              </h2>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {principles.map(({ Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-card border border-border bg-surface p-6 shadow-card"
                >
                  <Icon className="text-accent-text" aria-hidden="true" />
                  <h3 className="mt-5 font-serif text-2xl font-semibold">
                    {title}
                  </h3>
                  <p className="mt-3 leading-7 text-muted">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-[var(--cm-space-section)] rounded-feature border border-border bg-surface-soft px-6 py-10 text-center sm:px-10">
            <Users className="mx-auto text-accent-text" aria-hidden="true" />
            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-semibold">
              Conte seu objetivo para quem entende do caminho.
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-muted">
              A conversa começa pela sua necessidade, com orientação clara e
              continuidade no atendimento humano.
            </p>
            <WhatsAppLink variant="whatsapp" className="mt-7">
              Falar com a Marlise
            </WhatsAppLink>
          </section>
        </Container>
      </main>
    </PageShell>
  );
}
