import type { Metadata } from "next";
import { AnalysisShell } from "@/components/analysis/analysis-shell";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Iniciar análise",
  description: "Inicie a jornada guiada do Assistente Marvi.",
  robots: { index: false, follow: false },
};

export default function AnalysisPage() {
  return (
    <PageShell>
      <AnalysisShell />
    </PageShell>
  );
}
