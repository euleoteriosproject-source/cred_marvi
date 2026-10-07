import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Globe2,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { WhatsAppLink } from "@/components/contact/whatsapp-link";
import {
  SpecialistIdentity,
  SpecialistPortrait,
} from "@/components/brand/specialist";
import { SolutionCard } from "@/components/solutions/solution-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { faqItems } from "@/content/faq";
import { businessHighlights, homeSolutions } from "@/content/solutions";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[.16em] text-accent-text">
      {children}
    </p>
  );
}
export function Hero() {
  return (
    <section className="home-opening">
      <Container className="grid items-center gap-8 py-9 sm:py-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:py-14">
        <div>
          <Eyebrow>Crédito • conquistas • proteção</Eyebrow>
          <h1 className="mt-4 max-w-xl font-serif text-[2.3rem] font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Seu imóvel. Seu carro.
            <br />
            <span className="text-accent-text">Seus planos, mais perto.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted sm:text-lg">
            Financiamento, consórcio, crédito e seguros. Entenda as opções com
            quem vai acompanhar você na próxima decisão.
          </p>
          <div className="mt-6 lg:hidden">
            <SpecialistIdentity />
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#solucoes">
              Encontrar minha solução{" "}
              <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
            <WhatsAppLink variant="secondary">Falar com a Marlise</WhatsAppLink>
          </div>
          <p className="mt-4 flex items-center gap-2 text-xs leading-5 text-muted">
            <Check size={15} aria-hidden="true" /> Sem cadastro. Você conversa
            com uma pessoa.
          </p>
          <nav
            aria-label="Explore seus objetivos"
            className="mt-7 flex flex-wrap gap-x-5 gap-y-1 border-t border-border pt-4"
          >
            {[
              ["/solucoes?category=acquisition", "Comprar e planejar"],
              ["/solucoes?category=credit", "Crédito"],
              ["/solucoes?category=protection", "Seguros"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="inline-flex min-h-11 items-center gap-2 text-xs font-bold text-accent-text"
              >
                {label}
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            ))}
          </nav>
        </div>
        <div className="hidden lg:block">
          <SpecialistPortrait preload />
        </div>
      </Container>
      <div className="border-y border-border bg-surface">
        <Container className="flex flex-wrap justify-between gap-x-6 gap-y-2 py-3 text-xs font-semibold text-muted sm:text-sm">
          <span className="flex items-center gap-2">
            <MessageCircle size={16} aria-hidden="true" /> Atendimento com a
            Marlise
          </span>
          <span className="flex items-center gap-2">
            <Globe2 size={16} aria-hidden="true" /> Online em todo o Brasil
          </span>
          <span className="flex items-center gap-2">
            <Check size={16} aria-hidden="true" /> Para pessoas e empresas
          </span>
          <Link
            href="/seguranca-e-privacidade"
            className="inline-flex min-h-8 items-center gap-2 text-accent-text"
          >
            <ShieldCheck size={16} aria-hidden="true" /> Seus dados merecem
            cuidado
          </Link>
        </Container>
      </div>
    </section>
  );
}
export function SolutionsPreview() {
  return (
    <section id="solucoes" className="scroll-mt-24 py-12 sm:py-16">
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>Para você</Eyebrow>
            <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
              O que você quer realizar?
            </h2>
            <p className="mt-3 text-muted">
              Escolha uma solução. Entenda o caminho. Converse quando quiser.
            </p>
          </div>
          <Link
            href="/solucoes"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-accent-text"
          >
            Ver todas as soluções <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {homeSolutions.map((s, index) => (
            <SolutionCard key={s.id} solution={s} preload={index < 3} />
          ))}
        </div>
        <div className="mt-6 flex flex-col justify-between gap-3 rounded-card border border-border bg-surface px-5 py-4 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            <strong className="text-foreground">
              Ainda não sabe qual escolher?
            </strong>{" "}
            A Marlise ajuda você.
          </p>
          <WhatsAppLink variant="secondary" className="shrink-0 px-4">
            Me ajude a escolher
          </WhatsAppLink>
        </div>
      </Container>
    </section>
  );
}
export function BusinessSection() {
  return (
    <section
      id="empresas"
      className="scroll-mt-24 border-y border-border bg-surface py-12 sm:py-16"
    >
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>Empresas e Agro</Eyebrow>
            <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
              Seu negócio também tem planos.
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Caixa, investimentos e atividade rural: encontre o assunto da sua
              próxima conversa.
            </p>
          </div>
          <Link
            href="/solucoes?profile=BUSINESS"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-bold text-accent-text"
          >
            Todas as soluções <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 xl:grid-cols-4">
          {businessHighlights.map((s) => (
            <SolutionCard
              key={s.id}
              solution={s}
              profile={s.category === "agro" ? undefined : "BUSINESS"}
            />
          ))}
        </div>
        <p className="mt-4 text-sm text-muted">
          Produtor pessoa física?{" "}
          <Link
            href="/solucoes?category=agro"
            className="inline-flex min-h-11 items-center font-bold text-accent-text underline underline-offset-4"
          >
            Veja as opções para o campo.
          </Link>
        </p>
      </Container>
    </section>
  );
}
export function SpecialistSection() {
  return (
    <section id="marlise" className="scroll-mt-24 py-12 sm:py-16">
      <Container className="grid gap-7 lg:grid-cols-2 lg:gap-14">
        <div>
          <Eyebrow>Atendimento humano</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Antes de uma escolha,
            <br />
            uma boa conversa.
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-muted">
            Marlise Euleoterio é seu contato na Cred Marvi. Ela ouve o que você
            procura e ajuda a esclarecer as possibilidades para seu momento.
          </p>
          <Link
            href="/sobre"
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-accent-text"
          >
            Conheça a Marlise <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="rounded-feature border border-border bg-surface p-6 sm:p-8">
          <SpecialistIdentity />
          <h3 className="mt-6 font-serif text-2xl font-semibold">
            Seu objetivo é o ponto de partida.
          </h3>
          <ul className="my-5 space-y-3">
            {[
              "Conversa direta, sem formulário de cadastro.",
              "Orientação para entender as opções.",
              "Condições esclarecidas antes de decidir.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm leading-6">
                <Check
                  size={16}
                  className="mt-1 shrink-0 text-accent-text"
                  aria-hidden="true"
                />
                {t}
              </li>
            ))}
          </ul>
          <WhatsAppLink>Falar com a Marlise</WhatsAppLink>
        </div>
      </Container>
    </section>
  );
}
export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-24 border-y border-border bg-surface py-10 sm:py-12"
    >
      <Container>
        <Eyebrow>Do seu objetivo à conversa</Eyebrow>
        <h2 className="mt-2 font-serif text-3xl font-semibold">
          Simples para começar.
        </h2>
        <ol className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            [
              "Escolha uma solução",
              "Explore os produtos ou fale direto com a Marlise.",
            ],
            [
              "Converse no WhatsApp",
              "O assunto vai na mensagem. Você revisa e envia.",
            ],
            [
              "Entenda o próximo passo",
              "Esclareça critérios e condições antes de decidir.",
            ],
          ].map(([title, text], i) => (
            <li key={title} className="flex gap-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-surface-soft text-sm font-bold text-accent-text">
                {i + 1}
              </span>
              <div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
export function FaqPreview() {
  return (
    <section className="py-12 sm:py-16">
      <Container className="grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div>
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <h2 className="mt-2 font-serif text-3xl font-semibold">
            Antes de começar.
          </h2>
          <Link
            href="/faq"
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-accent-text"
          >
            Ver todas as dúvidas <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="divide-y divide-border">
          {faqItems.slice(0, 4).map((item) => (
            <details key={item.question} className="group py-3">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold">
                {item.question}
                <ChevronDown
                  size={18}
                  className="shrink-0 transition group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-2 text-sm leading-7 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
export function FinalCallToAction() {
  return (
    <section className="border-t border-border bg-surface-soft py-10 sm:py-12">
      <Container className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-serif text-3xl font-semibold">
            Qual é o seu próximo plano?
          </h2>
          <p className="mt-2 text-muted">
            Conte para a Marlise. A conversa começa por você.
          </p>
        </div>
        <WhatsAppLink className="shrink-0">Falar com a Marlise</WhatsAppLink>
      </Container>
    </section>
  );
}
