import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  Handshake,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { faqItems } from "@/content/faq";
import { detailedSolutions } from "@/content/solutions";
import { whatsappHref } from "@/lib/whatsapp";

function Eyebrow({
  children,
  inverse = false,
}: {
  children: React.ReactNode;
  inverse?: boolean;
}) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-[var(--cm-letter-spacing-eyebrow)] ${inverse ? "text-accent" : "text-accent-text"}`}
    >
      {children}
    </p>
  );
}

function SectionTitle({
  children,
  inverse = false,
}: {
  children: React.ReactNode;
  inverse?: boolean;
}) {
  return (
    <h2
      className={`mt-3 max-w-4xl font-serif text-3xl font-semibold leading-[var(--cm-line-height-heading)] sm:text-5xl ${inverse ? "text-inverse" : "text-foreground"}`}
    >
      {children}
    </h2>
  );
}

export function Hero() {
  const whatsapp = whatsappHref();
  return (
    <section className="relative overflow-hidden bg-surface-inverse py-16 text-inverse sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <Eyebrow inverse>Atendimento financeiro consultivo</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl font-semibold leading-[var(--cm-line-height-tight)] sm:text-6xl">
            Soluções financeiras para pessoas e empresas, com clareza em cada
            etapa.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-inverse-muted">
            Tecnologia para organizar o caminho. Atendimento humano para
            compreender o seu contexto e orientar o próximo passo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/analise">
              Iniciar análise <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={whatsapp} variant="inverse">
              <MessageCircle size={18} aria-hidden="true" /> Falar com
              especialista
            </ButtonLink>
          </div>
          <ul className="mt-8 grid max-w-2xl gap-3 text-sm font-semibold text-inverse-muted sm:grid-cols-2">
            {[
              "Orientação simples e transparente",
              "Atendimento para você e sua empresa",
              "Sem promessa de aprovação ou condição",
              "Canal humano quando você precisar",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check
                  className="mt-0.5 shrink-0 text-accent"
                  size={18}
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <article className="rounded-feature border border-accent/30 bg-surface-inverse-alt p-6 shadow-elevated sm:p-8">
          <div className="flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-control bg-accent text-accent-foreground">
              <Sparkles aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[var(--cm-letter-spacing-eyebrow)] text-accent">
                Jornada guiada
              </p>
              <h2 className="mt-1 font-serif text-2xl font-semibold">
                Assistente Marvi
              </h2>
            </div>
          </div>
          <p className="mt-6 leading-7 text-inverse-muted">
            Um ponto de entrada preparado para tornar sua experiência mais
            organizada, clara e próxima — sem substituir o atendimento humano.
          </p>
          <div className="mt-6 grid gap-3">
            {[
              "Uma etapa de cada vez",
              "Informação no momento certo",
              "Continuidade com atendimento humano",
            ].map((item) => (
              <p
                key={item}
                className="flex items-center gap-3 rounded-option border border-inverse/10 bg-inverse/5 p-4 text-sm font-semibold"
              >
                <ShieldCheck
                  size={18}
                  className="shrink-0 text-accent"
                  aria-hidden="true"
                />
                {item}
              </p>
            ))}
          </div>
          <Link
            href="/analise"
            className="mt-7 inline-flex min-h-[var(--cm-target-min)] items-center gap-2 font-bold text-accent hover:text-accent-hover"
          >
            Conhecer o Assistente Marvi{" "}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </article>
      </Container>
    </section>
  );
}

export function AudienceSection() {
  const audiences = [
    {
      icon: UserRound,
      title: "Para você",
      text: "Alternativas para diferentes momentos da vida, apresentadas com linguagem simples e orientação consultiva.",
    },
    {
      icon: Building2,
      title: "Para sua empresa",
      text: "Soluções para apoiar planejamento e necessidades empresariais, sempre sujeitas à análise responsável.",
    },
  ];
  return (
    <section className="bg-surface-subtle py-[var(--cm-space-section)] sm:py-[var(--cm-space-section-lg)]">
      <Container>
        <Eyebrow>Pessoas e empresas</Eyebrow>
        <SectionTitle>
          Comece entendendo qual contexto representa você.
        </SectionTitle>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {audiences.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-card border border-border bg-surface p-7 shadow-card sm:p-9"
            >
              <span className="grid size-12 place-items-center rounded-control bg-surface-inverse text-accent">
                <Icon aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-serif text-3xl font-semibold">
                {title}
              </h3>
              <p className="mt-4 leading-7 text-muted">{text}</p>
              <Link
                href="/solucoes"
                className="mt-6 inline-flex min-h-[var(--cm-target-min)] items-center gap-2 font-bold text-accent-text"
              >
                Explorar soluções <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SolutionsPreview() {
  return (
    <section className="py-[var(--cm-space-section)] sm:py-[var(--cm-space-section-lg)]">
      <Container>
        <Eyebrow>Soluções financeiras</Eyebrow>
        <SectionTitle>
          Informação para avaliar o próximo passo com segurança.
        </SectionTitle>
        <p className="mt-5 max-w-2xl leading-7 text-muted">
          Conheça modalidades atendidas pela Cred Marvi. Disponibilidade e
          condições são definidas pelas instituições responsáveis após análise.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {detailedSolutions.map((solution) => (
            <article
              key={solution.slug}
              className="group rounded-card border border-border bg-surface p-6 shadow-card sm:p-8"
            >
              <h3 className="font-serif text-2xl font-semibold">
                {solution.name}
              </h3>
              <p className="mt-3 leading-7 text-muted">
                {solution.description}
              </p>
              <Link
                href={`/solucoes/${solution.slug}`}
                className="mt-5 inline-flex min-h-[var(--cm-target-min)] items-center gap-2 font-bold text-accent-text"
              >
                Entender esta solução{" "}
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1 motion-reduce:transform-none"
                  aria-hidden="true"
                />
              </Link>
            </article>
          ))}
        </div>
        <ButtonLink href="/solucoes" variant="secondary" className="mt-8">
          Ver catálogo completo
        </ButtonLink>
      </Container>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    [
      MessageCircle,
      "Conte sua necessidade",
      "Comece pelo Assistente Marvi quando a jornada estiver disponível.",
    ],
    [
      Sparkles,
      "Siga uma etapa por vez",
      "A experiência será guiada pela integração Atrium, sem decisões locais do site.",
    ],
    [
      ShieldCheck,
      "Entenda com clareza",
      "Você recebe contexto para acompanhar o atendimento com segurança.",
    ],
    [
      Handshake,
      "Continue com atendimento humano",
      "Quando necessário, fale com uma especialista pelos canais oficiais.",
    ],
  ] as const;
  return (
    <section
      id="como-funciona"
      className="bg-surface-inverse-alt py-[var(--cm-space-section)] text-inverse sm:py-[var(--cm-space-section-lg)]"
    >
      <Container>
        <Eyebrow inverse>Como funciona</Eyebrow>
        <SectionTitle inverse>
          Tecnologia para simplificar. Pessoas para orientar.
        </SectionTitle>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([Icon, title, text], index) => (
            <article
              key={title}
              className="rounded-option border border-inverse/10 bg-inverse/5 p-6"
            >
              <span className="text-xs font-bold text-accent">
                0{index + 1}
              </span>
              <Icon className="mt-7 text-accent" aria-hidden="true" />
              <h3 className="mt-4 font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-inverse-muted">
                {text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function HumanService() {
  return (
    <section className="py-[var(--cm-space-section)] sm:py-[var(--cm-space-section-lg)]">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div className="rounded-feature border border-border bg-surface-soft p-8 shadow-card sm:p-10">
          <Handshake
            className="text-accent-text"
            size={36}
            aria-hidden="true"
          />
          <p className="mt-8 font-serif text-3xl font-semibold leading-tight">
            Cada contexto merece ser compreendido antes de qualquer orientação.
          </p>
        </div>
        <div>
          <Eyebrow>Atendimento humano</Eyebrow>
          <SectionTitle>Proximidade para conversar com clareza.</SectionTitle>
          <p className="mt-5 leading-7 text-muted">
            A Cred Marvi combina uma experiência digital organizada com
            atendimento consultivo. Quando você precisar, uma especialista
            poderá compreender seu contexto e orientar os próximos passos pelos
            canais oficiais.
          </p>
          <ButtonLink href="/sobre" variant="secondary" className="mt-7">
            Conheça nossa forma de atender
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export function SecurityPreview() {
  return (
    <section className="bg-surface-inverse py-[var(--cm-space-section)] text-inverse">
      <Container className="grid gap-8 lg:grid-cols-2">
        <div>
          <Eyebrow inverse>Segurança e privacidade</Eyebrow>
          <SectionTitle inverse>
            Confiança também está no que nunca pedimos.
          </SectionTitle>
          <p className="mt-5 max-w-2xl leading-7 text-inverse-muted">
            A Cred Marvi adota minimização de dados e canais claros. Nesta
            versão, o site não coleta documentos nem conduz uma conversa
            financeira.
          </p>
        </div>
        <article className="rounded-card border border-accent/30 bg-surface-inverse-alt p-7">
          <LockKeyhole className="text-accent" aria-hidden="true" />
          <h3 className="mt-5 text-lg font-bold">
            Nunca informe por este site
          </h3>
          <p className="mt-3 text-sm leading-6 text-inverse-muted">
            Senhas, códigos bancários, dados completos de cartão, tokens de
            autenticação, documentos ou biometria.
          </p>
          <Link
            href="/seguranca-e-privacidade"
            className="mt-5 inline-flex min-h-[var(--cm-target-min)] items-center font-bold text-accent"
          >
            Ver orientações de segurança
          </Link>
        </article>
      </Container>
    </section>
  );
}

export function FaqPreview() {
  return (
    <section className="py-[var(--cm-space-section)] sm:py-[var(--cm-space-section-lg)]">
      <Container className="max-w-[var(--cm-container-content)]">
        <Eyebrow>Dúvidas frequentes</Eyebrow>
        <SectionTitle>Informação clara desde o início.</SectionTitle>
        <div className="mt-9 divide-y divide-border rounded-card border border-border bg-surface px-5 sm:px-8">
          {faqItems.slice(0, 5).map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex min-h-[var(--cm-target-min)] cursor-pointer list-none items-center justify-between gap-4 font-bold">
                {item.question}
                <ChevronDown
                  className="shrink-0 transition group-open:rotate-180 motion-reduce:transform-none"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 max-w-3xl leading-7 text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
        <Link
          href="/faq"
          className="mt-6 inline-flex min-h-[var(--cm-target-min)] items-center gap-2 font-bold text-accent-text"
        >
          Ver todas as dúvidas <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}

export function FinalCallToAction() {
  return (
    <section className="border-y border-border bg-surface-soft py-[var(--cm-space-section)] text-center">
      <Container>
        <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
          Um próximo passo mais claro começa aqui.
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-muted">
          Conheça o espaço preparado para o Assistente Marvi ou continue com
          atendimento humano.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/analise">Iniciar análise</ButtonLink>
          <ButtonLink href="/contato" variant="secondary">
            Falar com a Cred Marvi
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
