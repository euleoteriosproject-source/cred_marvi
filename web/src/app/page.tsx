import type { Metadata } from "next";
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
import { createPageMetadata, site } from "@/config/site";

export const metadata: Metadata = createPageMetadata({
  title: site.homeTitle,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

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
