import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppLink } from "@/components/contact/whatsapp-link";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { Container } from "@/components/ui/container";
import { SolutionCard } from "@/components/solutions/solution-card";
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
  searchParams: Promise<{
    profile?: string | string[];
    category?: string | string[];
  }>;
}) {
  const params = await searchParams;
  const filter = normalizeFilter(params.profile);
  const category = [
    "acquisition",
    "credit",
    "protection",
    "business",
    "agro",
  ].includes(String(params.category))
    ? String(params.category)
    : undefined;
  const audienceSolutions =
    filter === "ALL"
      ? activeSolutions
      : activeSolutions.filter((item) => item.audience.includes(filter));

  const visibleSolutions = category
    ? audienceSolutions.filter((item) => item.category === category)
    : audienceSolutions;

  return (
    <PageShell>
      <main id="conteudo">
        <PageHero
          eyebrow="Serviços"
          title={
            category === "agro"
              ? "Soluções para quem produz."
              : category === "protection"
                ? "Cuide do que você conquistou."
                : "Encontre sua próxima solução."
          }
        >
          <p>
            Comprar, planejar, proteger ou investir na sua atividade. Conheça as
            soluções e converse com a Marlise sobre o que você procura.
          </p>
        </PageHero>
        <Container className="py-[var(--cm-space-section)]">
          <nav aria-label="Filtrar serviços" className="flex flex-wrap gap-3">
            {filters.map((item) => (
              <Link
                key={item.id}
                href={
                  item.href +
                  (category
                    ? `${item.id === "ALL" ? "?" : "&"}category=${category}`
                    : "")
                }
                aria-current={filter === item.id ? "page" : undefined}
                className={`inline-flex min-h-[var(--cm-target-min)] items-center rounded-control border px-5 py-2 text-sm font-bold transition ${filter === item.id ? "border-accent bg-accent text-accent-foreground" : "border-border-interactive bg-surface hover:bg-surface-soft"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <nav
            aria-label="Filtrar por objetivo"
            className="mt-4 flex flex-wrap gap-2"
          >
            {[
              ["", "Todos os objetivos"],
              ["acquisition", "Comprar e planejar"],
              ["credit", "Crédito"],
              ["protection", "Seguros"],
              ["business", "Negócios"],
              ["agro", "Agro"],
            ].map(([id, label]) => (
              <Link
                key={id}
                href={`/solucoes?${filter !== "ALL" ? `profile=${filter}&` : ""}${id ? `category=${id}` : ""}`}
                aria-current={(category ?? "") === id ? "page" : undefined}
                className={`inline-flex min-h-11 items-center rounded-full border px-4 text-xs font-bold ${category === id || (!category && !id) ? "border-accent-text bg-surface-soft text-accent-text" : "border-border bg-surface text-muted"}`}
              >
                {label}
              </Link>
            ))}
          </nav>
          {visibleSolutions.length === 0 ? (
            <section className="mt-8 rounded-card border border-border bg-surface p-6">
              <h2 className="font-serif text-2xl font-semibold">
                Vamos encontrar outro caminho.
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                Nenhum produto deste catálogo combina com os filtros escolhidos.
                Veja todas as soluções ou converse com a Marlise.
              </p>
              <Link
                href="/solucoes"
                className="mt-4 inline-flex min-h-11 items-center font-bold text-accent-text"
              >
                Limpar filtros
              </Link>
            </section>
          ) : null}
          <div className="mt-8 space-y-10">
            {[
              ["acquisition", "Comprar e planejar"],
              ["credit", "Crédito para o seu momento"],
              ["protection", "Proteger o que é seu"],
              ["business", "Soluções para o seu negócio"],
              ["agro", "Para quem produz no campo"],
            ].map(([category, title]) => {
              const items = visibleSolutions.filter(
                (item) => item.category === category,
              );
              if (!items.length) return null;
              return (
                <section key={category}>
                  <h2 className="mb-5 font-serif text-2xl font-semibold sm:text-3xl">
                    {title}
                  </h2>
                  {category === "agro" ? (
                    <p className="mb-5 max-w-2xl text-sm leading-6 text-muted">
                      Crédito para o Agro é a entrada para necessidades da
                      atividade. Crédito Rural trata das finalidades específicas
                      dessa modalidade. Produtores pessoa física também podem
                      conversar sobre essas possibilidades.
                    </p>
                  ) : null}
                  <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
                    {items.map((item) => (
                      <SolutionCard
                        key={item.id}
                        solution={item}
                        profile={filter === "ALL" ? undefined : filter}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <section className="mt-14 rounded-feature bg-surface-soft p-6 sm:p-9">
            <h2 className="font-serif text-3xl font-semibold">
              Outras possibilidades
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted">
              Consulte a Marlise sobre o escopo e a disponibilidade. O escopo
              dessas categorias é esclarecido no atendimento.
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
            Disponibilidade, aprovação, limites, taxas e demais condições
            dependem dos critérios das instituições responsáveis.
          </p>
        </Container>
      </main>
    </PageShell>
  );
}
