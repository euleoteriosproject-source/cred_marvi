import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CarFront,
  ChevronDown,
  Handshake,
  Home,
  Landmark,
  Shield,
  Sprout,
  Umbrella,
  WalletCards,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppLink } from "@/components/contact/whatsapp-link";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { faqItems } from "@/content/faq";
import {
  businessHighlights,
  homeSolutions,
  type Solution,
} from "@/content/solutions";

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

const icons = {
  "vehicle-financing": CarFront,
  "property-financing": Home,
  "personal-credit": WalletCards,
  consortium: Landmark,
  "auto-insurance": Shield,
  "home-insurance": Umbrella,
  "working-capital": BriefcaseBusiness,
  "agro-guidance": Sprout,
  bndes: Building2,
  pronampe: WalletCards,
} as const;

function SolutionIcon({ solution }: { solution: Solution }) {
  const Icon = icons[solution.id as keyof typeof icons] ?? Handshake;
  return <Icon aria-hidden="true" />;
}

export function Hero() {
  return (
    <section className="bg-background py-12 sm:py-20 lg:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <Eyebrow>Crédito, conquistas e proteção</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-serif text-[2.4rem] font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            Seu próximo passo começa com a{" "}
            <span className="text-accent-text">orientação certa.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Para comprar um imóvel, trocar de veículo, planejar uma conquista ou
            proteger o que você construiu. A Marlise ajuda você a entender as
            alternativas e os próximos passos.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#solucoes">
              Conhecer as soluções <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
            <WhatsAppLink variant="secondary">Falar com a Marlise</WhatsAppLink>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <Link
              href="/solucoes"
              className="font-bold text-accent-text underline-offset-4 hover:underline"
            >
              Já sei o que procuro
            </Link>
            <span className="text-muted">
              Atendimento com Marlise Euleoterio
            </span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-feature bg-surface-inverse p-8 shadow-elevated sm:p-12">
          <div className="absolute -right-16 -top-16 size-48 rounded-full bg-accent/10" />
          <Image
            src="/brand/cred-marvi-symbol.png"
            alt=""
            width={505}
            height={505}
            loading="eager"
            sizes="(max-width: 1024px) 80vw, 34vw"
            className="relative mx-auto h-auto w-full max-w-sm rounded-full"
          />
          <p className="relative mt-7 text-center font-serif text-2xl text-inverse">
            Orientação próxima para decisões mais conscientes.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function SolutionsPreview() {
  return (
    <section
      id="solucoes"
      className="scroll-mt-24 bg-surface-subtle py-[var(--cm-space-section)] sm:py-[var(--cm-space-section-lg)]"
    >
      <Container>
        <Eyebrow>Serviços para você</Eyebrow>
        <SectionTitle>O que você quer realizar ou proteger?</SectionTitle>
        <p className="mt-5 max-w-2xl leading-7 text-muted">
          Explore uma solução ou leve o assunto direto para a conversa. Você não
          precisa preencher cadastro para começar.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {homeSolutions.map((solution) => (
            <article
              key={solution.id}
              className="flex min-h-full flex-col rounded-card border border-border bg-surface p-6 shadow-card transition duration-[var(--cm-duration-normal)] hover:-translate-y-1 hover:shadow-elevated motion-reduce:transform-none"
            >
              <span className="grid size-11 place-items-center rounded-control bg-surface-soft text-accent-text">
                <SolutionIcon solution={solution} />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold">
                {solution.name}
              </h3>
              <p className="mt-3 flex-1 leading-7 text-muted">
                {solution.description}
              </p>
              {solution.slug ? (
                <Link
                  href={`/solucoes/${solution.slug}`}
                  className="mt-5 inline-flex min-h-[var(--cm-target-min)] items-center gap-2 font-bold text-accent-text"
                >
                  Entender a solução
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              ) : (
                <WhatsAppLink
                  context={{ subject: solution.shortName }}
                  variant="secondary"
                  className="mt-5 px-4"
                >
                  Conversar sobre esta solução
                </WhatsAppLink>
              )}
            </article>
          ))}
        </div>
        <ButtonLink href="/solucoes" variant="secondary" className="mt-8">
          Ver todos os serviços
        </ButtonLink>
      </Container>
    </section>
  );
}

export function BusinessSection() {
  return (
    <section className="bg-surface-inverse-alt py-[var(--cm-space-section)] text-inverse sm:py-[var(--cm-space-section-lg)]">
      <Container>
        <Eyebrow inverse>Empresas e Agro</Eyebrow>
        <SectionTitle inverse>
          Sua empresa e sua atividade também precisam de planejamento.
        </SectionTitle>
        <p className="mt-5 max-w-2xl leading-7 text-inverse-muted">
          Converse sobre alternativas para o caixa, investimentos e necessidades
          da sua atividade. Produtores rurais também podem atuar como pessoa
          física.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {businessHighlights.map((solution) => (
            <article
              key={solution.id}
              className="flex flex-col rounded-card border border-inverse/10 bg-inverse/5 p-6"
            >
              <span className="grid size-10 place-items-center rounded-control bg-accent text-accent-foreground">
                <SolutionIcon solution={solution} />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold">
                {solution.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-inverse-muted">
                {solution.description}
              </p>
              <WhatsAppLink
                context={{ subject: solution.shortName, profile: "BUSINESS" }}
                variant="inverse"
                className="mt-5 px-4"
              >
                Conversar sobre o assunto
              </WhatsAppLink>
            </article>
          ))}
        </div>
        <Link
          href="/solucoes?profile=BUSINESS"
          className="mt-8 inline-flex min-h-[var(--cm-target-min)] items-center gap-2 font-bold text-accent"
        >
          Ver soluções para empresas e agro
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}

export function SpecialistSection() {
  return (
    <section
      id="marlise"
      className="scroll-mt-24 py-[var(--cm-space-section)] sm:py-[var(--cm-space-section-lg)]"
    >
      <Container className="grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div className="rounded-feature bg-surface-soft p-8 text-center shadow-card sm:p-10">
          <Image
            src="/brand/cred-marvi-symbol.png"
            alt=""
            width={505}
            height={505}
            sizes="(max-width: 1024px) 70vw, 28vw"
            className="mx-auto h-auto w-full max-w-xs rounded-full"
          />
          <p className="mt-6 font-serif text-2xl font-semibold">
            Marlise Euleoterio
          </p>
          <p className="mt-2 text-sm text-muted">Atendimento consultivo</p>
        </div>
        <div>
          <Eyebrow>Atendimento humano</Eyebrow>
          <SectionTitle>
            Uma conversa com quem acompanha o seu objetivo.
          </SectionTitle>
          <p className="mt-5 max-w-2xl leading-7 text-muted">
            Com Marlise Euleoterio, você esclarece dúvidas, entende
            possibilidades e organiza os próximos passos com atendimento humano.
          </p>
          <p className="mt-4 max-w-2xl leading-7 text-muted">
            A orientação começa pelo seu contexto, sem promessas de aprovação ou
            pressão para contratar.
          </p>
          <WhatsAppLink variant="whatsapp" className="mt-7">
            Falar com a Marlise
          </WhatsAppLink>
        </div>
      </Container>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    [
      "01",
      "Escolha um assunto",
      "Explore as soluções ou diga o que deseja realizar.",
    ],
    [
      "02",
      "Converse com a Marlise",
      "Abra o WhatsApp; se quiser, escolha antes um contexto simples no site.",
    ],
    [
      "03",
      "Entenda os próximos passos",
      "Condições e adequação são esclarecidas no atendimento, conforme a modalidade e a instituição responsável.",
    ],
  ] as const;

  return (
    <section
      id="como-funciona"
      className="scroll-mt-24 bg-surface-soft py-[var(--cm-space-section)] sm:py-[var(--cm-space-section-lg)]"
    >
      <Container>
        <Eyebrow>Como funciona</Eyebrow>
        <SectionTitle>
          Comece do jeito que fizer sentido para você.
        </SectionTitle>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map(([number, title, text]) => (
            <article
              key={number}
              className="rounded-card border border-border bg-surface p-6 shadow-card"
            >
              <span className="font-serif text-3xl font-semibold text-accent-text">
                {number}
              </span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-muted">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm leading-6 text-muted">
          Também é possível começar pelo contato direto. O site não transmite
          cadastro nem realiza análise financeira.
        </p>
      </Container>
    </section>
  );
}

export function FaqPreview() {
  return (
    <section className="py-[var(--cm-space-section)] sm:py-[var(--cm-space-section-lg)]">
      <Container className="max-w-[var(--cm-container-content)]">
        <Eyebrow>Dúvidas essenciais</Eyebrow>
        <SectionTitle>Informação clara antes da conversa.</SectionTitle>
        <div className="mt-9 divide-y divide-border rounded-card border border-border bg-surface px-5 sm:px-8">
          {faqItems.map((item) => (
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
      </Container>
    </section>
  );
}

export function FinalCallToAction() {
  return (
    <section className="bg-surface-inverse py-[var(--cm-space-section)] text-center text-inverse">
      <Container>
        <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
          Quer entender qual caminho faz sentido para você?
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-inverse-muted">
          Converse diretamente com a Marlise e leve apenas o contexto que você
          quiser compartilhar.
        </p>
        <WhatsAppLink variant="primary" className="mt-8">
          Falar com a Marlise
        </WhatsAppLink>
      </Container>
    </section>
  );
}
