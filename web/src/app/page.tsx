import {
  AudienceSection,
  FaqPreview,
  FinalCallToAction,
  Hero,
  HowItWorks,
  HumanService,
  SecurityPreview,
  SolutionsPreview,
} from "@/components/home/home-sections";
import { PageShell } from "@/components/layout/page-shell";

export default function Home() {
  return (
    <PageShell>
      <main id="conteudo">
        <Hero />
        <AudienceSection />
        <SolutionsPreview />
        <HowItWorks />
        <HumanService />
        <SecurityPreview />
        <FaqPreview />
        <FinalCallToAction />
      </main>
    </PageShell>
  );
}
