export const siteConfig = {
  brandName: "Marvi Finance", groupName: "Grupo Marvi", specialistName: "Marlise",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5551999740402",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  cnpj: process.env.NEXT_PUBLIC_CNPJ ?? "", privacyVersion: "1.0.0",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://marvifinance.netlify.app",
  serviceHours: "Formulário disponível 24 horas. Análises e atendimento em horário comercial.",
};
