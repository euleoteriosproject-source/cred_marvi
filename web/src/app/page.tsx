import {
  BusinessSection,
  FaqPreview,
  FinalCallToAction,
  Hero,
  HowItWorks,
  SolutionsPreview,
  SpecialistSection,
} from "@/components/home/home-sections";
import { PageShell } from "@/components/layout/page-shell";

export default function Home() {
  return (
    <PageShell>
      <main id="conteudo">
        <Hero />
        <SolutionsPreview />
        <BusinessSection />
        <SpecialistSection />
        <HowItWorks />
        <FaqPreview />
        <FinalCallToAction />
      </main>
    </PageShell>
  );
}
