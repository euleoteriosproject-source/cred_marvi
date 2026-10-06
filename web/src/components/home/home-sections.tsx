import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppLink } from "@/components/contact/whatsapp-link";
import {
  SolutionCard,
  SolutionIcon,
} from "@/components/solutions/solution-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { faqItems } from "@/content/faq";
import { businessHighlights, homeSolutions } from "@/content/solutions";
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
      className={`text-xs font-bold uppercase tracking-[.16em] ${inverse ? "text-accent" : "text-accent-text"}`}
    >
      {children}
    </p>
  );
}

export function Hero() {
  return (
    <section className="home-hero relative overflow-hidden bg-surface-inverse text-inverse">
      <Container className="relative grid items-center gap-12 py-10 sm:py-16 lg:grid-cols-[1.08fr_.92fr] lg:gap-16 lg:py-20">
        <div>
          <Eyebrow inverse>Crédito, conquistas e proteção</Eyebrow>
          <h1 className="mt-5 max-w-2xl font-serif text-[2.65rem] font-semibold leading-[1.09] tracking-tight sm:text-6xl lg:text-[4.25rem]">
            Seus planos merecem{" "}
            <span className="text-accent">um próximo passo.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-inverse-muted sm:text-lg sm:leading-8">
            Comprar seu imóvel. Trocar de veículo. Proteger o que é seu.
            Encontre alternativas para cada momento, com a orientação da
            Marlise.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#solucoes">
              Encontrar minha solução{" "}
              <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
            <WhatsAppLink variant="inverse">Falar com a Marlise</WhatsAppLink>
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm text-inverse-muted">
            <Check size={16} className="text-accent" aria-hidden="true" />{" "}
            Atendimento humano, sem cadastro para começar.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-inverse/15 pt-5 text-sm">
            <Link
              href="/solucoes?profile=PERSON"
              className="inline-flex min-h-11 items-center gap-2 font-semibold hover:text-accent"
            >
              Para você <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/solucoes?profile=BUSINESS"
              className="inline-flex min-h-11 items-center gap-2 font-semibold hover:text-accent"
            >
              Para empresas e agro <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="hero-editorial relative hidden sm:block">
          <div className="hero-home-photo relative overflow-hidden rounded-feature">
            <Image
              src="/images/home.jpg"
              alt="Casa contemporânea, ilustrando planos de aquisição de imóvel"
              fill
              preload
              sizes="(max-width: 1023px) 90vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-7 pb-28 pt-20 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest">
                Uma conquista de cada vez
              </p>
              <p className="mt-2 max-w-xs font-serif text-3xl leading-tight">
                O lugar dos seus novos começos.
              </p>
            </div>
          </div>
          <Link
            href="/solucoes/financiamento-de-veiculo"
            className="hero-vehicle-card absolute flex items-center gap-4 rounded-card border border-border bg-surface p-3 text-foreground shadow-elevated"
          >
            <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-control">
              <Image
                src="/images/vehicle.jpg"
                alt=""
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-accent-text">
                E os planos seguem.
              </p>
              <p className="mt-1 font-serif text-lg font-semibold">
                Seu próximo veículo
              </p>
              <span className="mt-2 flex items-center gap-2 text-xs font-bold">
                Conheça as alternativas{" "}
                <ArrowRight size={15} aria-hidden="true" />
              </span>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function SolutionsPreview() {
  const featured = homeSolutions.filter((solution) => solution.image);
  const others = homeSolutions.filter((solution) => !solution.image);
  return (
    <section id="solucoes" className="scroll-mt-24 py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>Soluções para você</Eyebrow>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Para cada plano, um caminho.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-muted">
              Da próxima conquista ao cuidado com o que você já tem. Comece pelo
              que faz sentido para você.
            </p>
          </div>
          <Link
            href="/solucoes"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-bold text-accent-text"
          >
            Ver todos os serviços <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {featured.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} featured />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {others.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} />
          ))}
        </div>
        <div className="mt-7 flex flex-col gap-2 rounded-control border-l-2 border-accent bg-surface-soft px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            <strong className="text-foreground">
              Ainda não sabe por onde começar?
            </strong>{" "}
            A Marlise ajuda você a entender as opções.
          </p>
          <Link
            href="/analise"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-bold text-accent-text"
          >
            Encontrar um caminho <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export function BusinessSection() {
  return (
    <section
      id="empresas"
      className="scroll-mt-24 bg-surface-inverse-alt py-12 text-inverse sm:py-16 lg:py-20"
    >
      <Container className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div>
          <Eyebrow inverse>Empresas e Agro</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            O seu negócio tem planos.
            <br />
            <span className="text-accent">Vamos olhar para eles.</span>
          </h2>
          <p className="mt-5 max-w-md leading-7 text-inverse-muted">
            Do caixa do dia a dia ao investimento na sua atividade: orientação
            para entender o próximo movimento.
          </p>
          <Link
            href="/solucoes?profile=BUSINESS"
            className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-accent"
          >
            Ver soluções para empresas e agro{" "}
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {businessHighlights.map((solution) => (
              <article
                key={solution.id}
                className="business-card group relative rounded-card border border-inverse/15 bg-inverse/5 p-5 sm:p-6"
              >
                <span className="text-accent">
                  <SolutionIcon solution={solution} />
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold">
                  {solution.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-inverse-muted">
                  {solution.description}
                </p>
                <a
                  href={whatsappHref({
                    subject: solution.shortName,
                    profile:
                      solution.category === "agro" ? undefined : "BUSINESS",
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Conversar sobre ${solution.name} — abre o WhatsApp`}
                  className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-accent after:absolute after:inset-0 after:content-['']"
                >
                  Conversar sobre o assunto{" "}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 text-inverse-muted">
            Agro também atende produtores pessoa física.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function SpecialistSection() {
  return (
    <section id="marlise" className="scroll-mt-24 py-12 sm:py-16 lg:py-20">
      <Container className="grid items-start gap-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
        <div>
          <Eyebrow>Com você, do primeiro contato ao próximo passo</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Você fala com a Marlise.
            <br />
            <span className="text-accent-text">E ela começa ouvindo você.</span>
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-muted">
            Por trás da Cred Marvi está Marlise Euleoterio. Uma conversa para
            entender seu momento, esclarecer dúvidas e orientar suas escolhas.
          </p>
          <WhatsAppLink className="mt-7">Falar com a Marlise</WhatsAppLink>
        </div>
        <div className="rounded-feature border border-border bg-surface p-6 sm:p-8">
          <div className="flex items-center gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-surface-soft text-accent-text">
              <MessageCircle aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-serif text-2xl font-semibold">
                Marlise Euleoterio
              </h3>
              <p className="mt-1 text-sm text-muted">
                Seu contato na Cred Marvi
              </p>
            </div>
          </div>
          <ul className="mt-6 space-y-4 border-t border-border pt-6">
            {[
              "Seu objetivo vem antes do produto.",
              "Você esclarece as condições antes de decidir.",
              "A conversa continua com uma pessoa.",
            ].map((text) => (
              <li
                key={text}
                className="flex items-start gap-3 text-sm leading-6"
              >
                <Check
                  size={18}
                  className="mt-1 shrink-0 text-accent-text"
                  aria-hidden="true"
                />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-24 border-y border-border bg-surface-soft py-10 sm:py-12"
    >
      <Container className="grid gap-7 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div>
          <Eyebrow>Simples para começar</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-semibold">
            Um assunto.
            <br />
            Uma conversa.
            <br />
            Um próximo passo.
          </h2>
        </div>
        <ol className="grid gap-6 sm:grid-cols-3">
          {[
            [
              "Escolha seu objetivo",
              "Explore as soluções ou comece direto pela conversa.",
            ],
            [
              "Fale com a Marlise",
              "Conte o que procura e esclareça suas dúvidas pelo WhatsApp.",
            ],
            [
              "Entenda as opções",
              "Conheça condições e próximos passos antes de decidir.",
            ],
          ].map(([title, text], index) => (
            <li key={title}>
              <span className="font-serif text-2xl text-accent-text">
                0{index + 1}
              </span>
              <h3 className="mt-3 font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
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
      <Container className="grid gap-7 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div>
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Clareza desde o início.
          </h2>
          <p className="mt-4 max-w-sm leading-7 text-muted">
            Se a sua dúvida não estiver aqui, leve ela para a conversa.
          </p>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {faqItems.map((item) => (
            <details key={item.question} className="group py-3">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold sm:text-base">
                {item.question}
                <ChevronDown
                  size={18}
                  className="shrink-0 transition group-open:rotate-180 motion-reduce:transform-none"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-3 pt-2 text-sm leading-7 text-muted">
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
    <section className="bg-surface-inverse py-12 text-inverse sm:py-16">
      <Container className="flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
        <div>
          <Eyebrow inverse>Vamos conversar?</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold sm:text-4xl">
            O próximo passo pode começar com uma boa conversa.
          </h2>
        </div>
        <WhatsAppLink className="shrink-0">Falar com a Marlise</WhatsAppLink>
      </Container>
    </section>
  );
}
