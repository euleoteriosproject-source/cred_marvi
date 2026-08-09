import { Check } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { detailedSolutions, solutionBySlug } from "@/content/solutions";

export function generateStaticParams() {
  return detailedSolutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const solution = solutionBySlug((await params).slug);
  return solution
    ? { title: solution.name, description: solution.description }
    : {
        title: "Solução não encontrada",
        robots: { index: false, follow: false },
      };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const solution = solutionBySlug((await params).slug);
  if (!solution) notFound();
  return (
    <PageShell>
      <main id="conteudo">
        <PageHero eyebrow="Solução financeira" title={solution.name}>
          <p>{solution.description}</p>
        </PageHero>
        <Container className="max-w-[var(--cm-container-content)] py-[var(--cm-space-section)]">
          <section>
            <h2 className="font-serif text-3xl font-semibold">
              Entenda esta alternativa
            </h2>
            <p className="mt-4 leading-7 text-muted">{solution.introduction}</p>
          </section>
          <section className="mt-10 rounded-card border border-border bg-surface-subtle p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold">
              Pontos para considerar
            </h2>
            <ul className="mt-5 grid gap-4">
              {solution.considerations?.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <Check
                    className="mt-1 shrink-0 text-accent-text"
                    size={18}
                    aria-hidden="true"
                  />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <p className="mt-8 text-sm leading-6 text-muted">
            Este conteúdo é informativo e não constitui proposta, contratação ou
            garantia de aprovação. Condições dependem da instituição
            responsável.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/analise">Iniciar análise</ButtonLink>
            <ButtonLink href="/contato" variant="secondary">
              Falar com a Cred Marvi
            </ButtonLink>
          </div>
        </Container>
      </main>
    </PageShell>
  );
}
