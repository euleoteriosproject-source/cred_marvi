export const PUBLIC_WHATSAPP_FALLBACK = "5551999740402";

export function resolvePublicWhatsAppNumber(value?: string) {
  const digits = value?.replace(/\D/g, "") ?? "";
  return digits.length >= 10 && digits.length <= 15
    ? digits
    : PUBLIC_WHATSAPP_FALLBACK;
}

export const site = {
  name: "Cred Marvi",
  specialistName: "Marlise Euleoterio",
  description:
    "Orientação para encontrar alternativas de crédito, aquisição e proteção, com atendimento próximo e humano.",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || undefined,
  whatsappNumber: resolvePublicWhatsAppNumber(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  ),
  siteUrl: process.env.SITE_URL?.replace(/\/$/, "") || undefined,
  serviceHours: "Atendimento combinado diretamente com Marlise pelo WhatsApp.",
} as const;

export function isIndexable() {
  return Boolean(site.siteUrl);
}
