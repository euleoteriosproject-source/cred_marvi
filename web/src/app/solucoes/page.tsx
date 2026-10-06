import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppLink } from "@/components/contact/whatsapp-link";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { Container } from "@/components/ui/container";
import {
  activeSolutions,
  otherPossibilities,
  type Audience,
} from "@/content/solutions";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça alternativas de crédito, aquisição e proteção para pessoas, empresas e atividade rural.",
};

type Filter = "ALL" | Audience;

function normalizeFilter(value: string | string[] | undefined): Filter {
  const first = Array.isArray(value) ? value[0] : value;
  return first === "PERSON" || first === "BUSINESS" ? first : "ALL";
}

const filters: readonly { id: Filter; label: string; href: string }[] = [
  { id: "ALL", label: "Todos", href: "/solucoes" },
  { id: "PERSON", label: "Para você", href: "/solucoes?profile=PERSON" },
  {
    id: "BUSINESS",
    label: "Para empresas",
    href: "/solucoes?profile=BUSINESS",
  },
];

export default async function SolutionsPage({
  searchParams,
}: {
  searchParams: Promise<{ profile?: string | string[] }>;
}) {
  const filter = normalizeFilter((await searchParams).profile);
  const visibleSolutions =
    filter === "ALL"
      ? activeSolutions
      : activeSolutions.filter((item) => item.audience.includes(filter));

  return (
    <PageShell>
      <main id="conteudo">
        <PageHero
          eyebrow="Serviços"
          title="Alternativas para diferentes objetivos."
        >
          <p>
            Explore produtos reconhecíveis e converse sobre o que faz sentido
            para você, sua empresa ou sua atividade no campo.
          </p>
        </PageHero>
        <Container className="py-[var(--cm-space-section)]">
          <nav aria-label="Filtrar serviços" className="flex flex-wrap gap-3">
            {filters.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                aria-current={filter === item.id ? "page" : undefined}
                className={`inline-flex min-h-[var(--cm-target-min)] items-center rounded-control border px-5 py-2 text-sm font-bold transition ${filter === item.id ? "border-accent bg-accent text-accent-foreground" : "border-border-interactive bg-surface hover:bg-surface-soft"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleSolutions.map((item) => (
              <article
                key={item.id}
                className="flex flex-col rounded-card border border-border bg-surface p-6 shadow-card"
              >
                <p className="text-xs font-bold uppercase tracking-[var(--cm-letter-spacing-eyebrow)] text-accent-text">
                  {item.category === "agro"
                    ? "Agro"
                    : item.audience.length === 2
                      ? "Pessoas e empresas"
                      : item.audience[0] === "BUSINESS"
                        ? "Empresas"
                        : "Para você"}
                </p>
                <h2 className="mt-3 font-serif text-2xl font-semibold">
                  {item.name}
                </h2>
                <p className="mt-3 flex-1 leading-7 text-muted">
                  {item.description}
                </p>
                {item.slug ? (
                  <Link
                    href={`/solucoes/${item.slug}`}
                    className="mt-5 inline-flex min-h-[var(--cm-target-min)] items-center gap-2 font-bold text-accent-text"
                  >
                    Entender a solução
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                ) : (
                  <WhatsAppLink
                    context={{
                      subject: item.shortName,
                      profile: filter === "ALL" ? undefined : filter,
                    }}
                    variant="secondary"
                    className="mt-5 px-4"
                  >
                    Conversar sobre esta solução
                  </WhatsAppLink>
                )}
              </article>
            ))}
          </div>

          <section className="mt-14 rounded-feature bg-surface-soft p-6 sm:p-9">
            <h2 className="font-serif text-3xl font-semibold">
              Outras possibilidades
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted">
              Consulte a Marlise sobre o escopo e a disponibilidade. Estas
              categorias não representam produtos ou parceiros confirmados.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {otherPossibilities.map((item) => (
                <WhatsAppLink
                  key={item}
                  context={{ subject: item.toLowerCase() }}
                  variant="secondary"
                  className="px-4"
                >
                  {item}
                </WhatsAppLink>
              ))}
            </div>
          </section>

          <p className="mt-8 max-w-3xl text-sm leading-6 text-muted">
            Produtos publicados indicam temas para atendimento consultivo.
            Disponibilidade, aprovação, limites, taxas e demais condições
            dependem dos critérios das instituições responsáveis.
          </p>
        </Container>
      </main>
    </PageShell>
  );
}
