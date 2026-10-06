import { site } from "@/config/site";

export type ContactProfile = "PERSON" | "BUSINESS";

export type WhatsAppContext = {
  subject?: string;
  profile?: ContactProfile;
  detail?: string;
};

const BASE_MESSAGE =
  "Olá, Marlise! Vim pelo site da Cred Marvi e gostaria de conversar";

export function normalizeWhatsAppNumber(value?: string) {
  if (!value) return undefined;
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15 ? digits : undefined;
}

export function buildWhatsAppMessage(context: WhatsAppContext = {}) {
  const subject = context.subject?.trim();
  const detail = context.detail?.trim();
  const profile =
    context.profile === "PERSON"
      ? " para mim"
      : context.profile === "BUSINESS"
        ? " para minha empresa"
        : "";

  if (!subject) {
    return `${BASE_MESSAGE} sobre as alternativas disponíveis.`;
  }

  const detailText = detail ? ` de ${detail}` : "";
  return `${BASE_MESSAGE} sobre ${subject}${detailText}${profile}.`;
}

export function whatsappHref(
  context: WhatsAppContext = {},
  value = site.whatsappNumber,
) {
  const number = normalizeWhatsAppNumber(value);
  if (!number) return "/contato";
  return `https://wa.me/${number}?text=${encodeURIComponent(buildWhatsAppMessage(context))}`;
}
