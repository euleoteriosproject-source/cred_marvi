import { ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { Container } from "@/components/ui/container";
import { faqItems } from "@/content/faq";

export const metadata: Metadata = {
  title: "Dúvidas frequentes",
  description: "Respostas claras sobre a Cred Marvi, análise e atendimento.",
};

export default function FaqPage() {
  return (
    <PageShell>
      <main id="conteudo">
        <PageHero eyebrow="FAQ" title="Dúvidas frequentes">
          <p>
            Informação direta para você conhecer os limites e os próximos passos
            do atendimento.
          </p>
        </PageHero>
        <Container className="max-w-[var(--cm-container-content)] py-[var(--cm-space-section)]">
          <div className="divide-y divide-border rounded-card border border-border px-5 sm:px-8">
            {faqItems.map((item) => (
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
        </Container>
      </main>
    </PageShell>
  );
}
