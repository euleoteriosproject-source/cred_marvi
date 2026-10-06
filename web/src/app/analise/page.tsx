import type { Metadata } from "next";
import { AnalysisShell } from "@/components/analysis/analysis-shell";
import { PageShell } from "@/components/layout/page-shell";
import {
  resolveContactContext,
  type ContactSearchParams,
} from "@/lib/contact-context";

export const metadata: Metadata = {
  title: "Orientação inicial",
  description:
    "Escolha um contexto opcional e converse diretamente com Marlise Euleoterio.",
  robots: { index: false, follow: false },
};

export default async function AnalysisPage({
  searchParams,
}: {
  searchParams: Promise<ContactSearchParams>;
}) {
  const context = resolveContactContext(await searchParams);

  return (
    <PageShell>
      <AnalysisShell initialContext={context} />
    </PageShell>
  );
}
