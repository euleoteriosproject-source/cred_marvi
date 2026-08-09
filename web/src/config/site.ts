export const site = {
  name: "Cred Marvi",
  assistantName: "Assistente Marvi",
  description:
    "Soluções financeiras para pessoas e empresas, com orientação clara e atendimento humano.",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || undefined,
  siteUrl: process.env.SITE_URL?.replace(/\/$/, "") || undefined,
} as const;

export function isIndexable() {
  return Boolean(site.siteUrl);
}
