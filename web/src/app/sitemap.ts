import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { detailedSolutions } from "@/content/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.siteUrl) return [];

  const routes = [
    "",
    "/solucoes",
    "/contato",
    "/sobre",
    "/faq",
    "/seguranca-e-privacidade",
    "/politica-de-privacidade",
    "/termos-de-uso",
    ...detailedSolutions.map((solution) => `/solucoes/${solution.slug}`),
  ];

  return routes.map((route) => ({ url: `${site.siteUrl}${route}` }));
}
