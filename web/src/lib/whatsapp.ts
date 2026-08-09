const SAFE_MESSAGE =
  "Olá, gostaria de falar com uma especialista da Cred Marvi.";

export function normalizeWhatsAppNumber(value?: string) {
  if (!value) return undefined;
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15 ? digits : undefined;
}

export function whatsappHref(value = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER) {
  const number = normalizeWhatsAppNumber(value);
  if (!number) return "/contato";
  return `https://wa.me/${number}?text=${encodeURIComponent(SAFE_MESSAGE)}`;
}

export const whatsappMessage = SAFE_MESSAGE;
