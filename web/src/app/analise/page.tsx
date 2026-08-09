import type { Metadata } from "next";
import { AnalysisShell } from "@/components/analysis/analysis-shell";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Iniciar análise",
  description: "Conheça o espaço preparado para a jornada do Assistente Marvi.",
  robots: { index: false, follow: false },
};

export default function AnalysisPage() {
  return (
    <PageShell>
      <AnalysisShell />
    </PageShell>
  );
}
