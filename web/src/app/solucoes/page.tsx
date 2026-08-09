import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { solutions } from "@/content/solutions";

export const metadata: Metadata = {
  title: "Soluções financeiras",
  description:
    "Conheça soluções atendidas pela Cred Marvi para pessoas e empresas.",
};

const groups = [
  [
    "Para você",
    solutions.filter(
      (item) => item.audience === "person" || item.audience === "both",
    ),
  ],
  [
    "Para sua empresa",
    solutions.filter(
      (item) => item.audience === "business" || item.audience === "both",
    ),
  ],
] as const;

export default function SolutionsPage() {
  return (
    <PageShell>
      <main id="conteudo">
        <PageHero
          eyebrow="Soluções"
          title="Alternativas para diferentes contextos."
        >
          <p>
            Informação clara para pessoas e empresas avaliarem o próximo passo
            sem promessas ou urgência artificial.
          </p>
        </PageHero>
        <Container className="py-[var(--cm-space-section)]">
          <div className="grid gap-8 lg:grid-cols-2">
            {groups.map(([title, items]) => (
              <section
                key={title}
                className="rounded-card border border-border bg-surface p-6 shadow-card sm:p-8"
              >
                <h2 className="font-serif text-3xl font-semibold">{title}</h2>
                <div className="mt-6 divide-y divide-border">
                  {items.map((item) => (
                    <article
                      key={item.name}
                      className="py-5 first:pt-0 last:pb-0"
                    >
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        {item.description}
                      </p>
                      {item.slug ? (
                        <Link
                          href={`/solucoes/${item.slug}`}
                          className="mt-3 inline-flex min-h-[var(--cm-target-min)] items-center gap-2 font-bold text-accent-text"
                        >
                          Saiba mais <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                      ) : null}
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-muted">
            Disponibilidade, aprovação, limites, taxas e demais condições
            dependem da análise e dos critérios das instituições responsáveis.
          </p>
          <ButtonLink href="/analise" className="mt-7">
            Iniciar análise
          </ButtonLink>
        </Container>
      </main>
    </PageShell>
  );
}
