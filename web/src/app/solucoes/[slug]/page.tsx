import Link from "next/link";
import type { Audience } from "@/content/solutions";
import { ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WhatsAppLink } from "@/components/contact/whatsapp-link";
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
    ? {
        title: solution.name,
        description: solution.description,
        alternates: { canonical: `/solucoes/${solution.slug}` },
      }
    : {
        title: "Solução não encontrada",
        robots: { index: false, follow: false },
      };
}

export default async function SolutionPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ profile?: string | string[] }>;
}) {
  const solution = solutionBySlug((await params).slug);
  if (!solution) notFound();

  const requested = (await searchParams).profile;
  const profile: Audience | undefined =
    (requested === "PERSON" || requested === "BUSINESS") &&
    solution.audience.includes(requested)
      ? requested
      : undefined;
  const contactContext = { subject: solution.shortName, profile };

  return (
    <PageShell contactContext={contactContext}>
      <main id="conteudo">
        <PageHero
          eyebrow={solution.name}
          title={solution.headline ?? solution.name}
          image={solution.image}
        >
          <p>{solution.description}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppLink context={contactContext} variant="primary">
              {`Falar sobre ${solution.name}`}
            </WhatsAppLink>
            <ButtonLink href="#como-funciona" variant="secondary">
              Entender como funciona
            </ButtonLink>
          </div>
        </PageHero>

        <Container className="py-[var(--cm-space-section)]">
          <Link
            href={profile ? `/solucoes?profile=${profile}` : "/solucoes"}
            className="mb-6 inline-flex min-h-11 items-center text-sm font-bold text-accent-text"
          >
            ← Voltar às soluções
          </Link>
          <div
            id="como-funciona"
            className="grid scroll-mt-24 gap-5 md:grid-cols-3"
          >
            {[
              ["O que é", solution.introduction],
              ["Quando pode fazer sentido", solution.useCase],
              ["O que esclarecer na conversa", solution.conversation],
            ].map(([title, text]) => (
              <section
                key={title}
                className="rounded-card border border-border bg-surface p-6 shadow-card"
              >
                <h2 className="font-serif text-2xl font-semibold">{title}</h2>
                <p className="mt-4 leading-7 text-muted">{text}</p>
              </section>
            ))}
          </div>

          {solution.faq?.length ? (
            <section className="mt-12">
              <h2 className="font-serif text-3xl font-semibold">
                Dúvidas sobre {solution.name}
              </h2>
              <div className="mt-6 divide-y divide-border rounded-card border border-border px-5 sm:px-8">
                {solution.faq.map((item) => (
                  <details key={item.question} className="group py-5">
                    <summary className="flex min-h-[var(--cm-target-min)] cursor-pointer list-none items-center justify-between gap-4 font-bold">
                      {item.question}
                      <ChevronDown
                        className="shrink-0 transition group-open:rotate-180 motion-reduce:transform-none"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="mt-3 leading-7 text-muted">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-12 rounded-feature border border-border bg-surface-soft p-7 sm:p-10">
            <h2 className="font-serif text-3xl font-semibold">
              Quer conversar sobre {solution.name.toLowerCase()}?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted">
              Conte o que você procura e esclareça as possibilidades para o seu
              momento, com atendimento humano.
            </p>
            <WhatsAppLink
              context={contactContext}
              variant="primary"
              className="mt-7"
            >
              Falar com a Marlise
            </WhatsAppLink>
          </section>

          <p className="mt-8 text-sm leading-6 text-muted">
            Este conteúdo é informativo e não constitui proposta, contratação ou
            garantia de aprovação. Condições dependem da instituição
            responsável.
          </p>
        </Container>
      </main>
    </PageShell>
  );
}
