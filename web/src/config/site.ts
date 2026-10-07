import type { Metadata } from "next";

export const PUBLIC_WHATSAPP_FALLBACK = "5551999740402";

export const socialProfiles = [
  {
    id: "instagram",
    name: "Instagram",
    handle: "@credmarvi",
    href: "https://www.instagram.com/credmarvi",
  },
  {
    id: "facebook",
    name: "Facebook",
    handle: "Credmarvi",
    href: "https://pt-br.facebook.com/Credmarvi/",
  },
  {
    id: "tiktok",
    name: "TikTok",
    handle: "@credmarvi",
    href: "https://www.tiktok.com/@credmarvi",
  },
] as const;

export function resolvePublicWhatsAppNumber(value?: string) {
  const digits = value?.replace(/\D/g, "") ?? "";
  return digits.length >= 10 && digits.length <= 15
    ? digits
    : PUBLIC_WHATSAPP_FALLBACK;
}

type SiteEnvironment = Readonly<Record<string, string | undefined>>;

export function resolveSiteUrl(environment: SiteEnvironment = process.env) {
  const configuredUrl = environment.SITE_URL?.trim().replace(/\/$/, "");
  if (configuredUrl) return configuredUrl;

  const netlifyProductionUrl = environment.URL?.trim().replace(/\/$/, "");
  return environment.CONTEXT === "production" && netlifyProductionUrl
    ? netlifyProductionUrl
    : undefined;
}

export const site = {
  name: "Cred Marvi",
  homeTitle: "Cred Marvi | Crédito, consórcio e seguros",
  specialistName: "Marlise Euleoterio",
  description:
    "Crédito, financiamentos, consórcios e seguros com atendimento online em todo o Brasil e acompanhamento próximo da Marlise.",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || undefined,
  whatsappNumber: resolvePublicWhatsAppNumber(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  ),
  siteUrl: resolveSiteUrl(),
  googleSiteVerification:
    process.env.GOOGLE_SITE_VERIFICATION?.trim() || undefined,
  serviceHours: "Atendimento combinado diretamente com Marlise pelo WhatsApp.",
  onlineServiceArea: "Atendimento online em todo o Brasil.",
  inPersonServiceArea:
    "Atendimento presencial, mediante combinação, em Capão da Canoa e no Litoral Norte do Rio Grande do Sul.",
  socialProfiles,
} as const;

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const socialTitle = absoluteTitle ? title : `${title} | ${site.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: site.siteUrl ? { canonical: path } : undefined,
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: site.name,
      title: socialTitle,
      description,
      url: site.siteUrl ? path : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}

export function createOrganizationJsonLd() {
  if (!site.siteUrl) return undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.siteUrl}/#organization`,
    name: site.name,
    url: site.siteUrl,
    logo: `${site.siteUrl}/brand/cred-marvi-symbol.png`,
    description: site.description,
    sameAs: site.socialProfiles.map((profile) => profile.href),
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${site.whatsappNumber}`,
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: "Portuguese",
      ...(site.contactEmail ? { email: site.contactEmail } : {}),
    },
  } as const;
}

export function isIndexable() {
  return Boolean(site.siteUrl);
}
