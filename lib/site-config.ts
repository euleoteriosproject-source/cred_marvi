export const siteConfig = {
  brandName: "Marvi Finance", technologyProviderName: "Grupo Atrium", specialistName: "Marlise Paiva",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5551999740402",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "marvifinance@outlook.com",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  cnpj: process.env.NEXT_PUBLIC_CNPJ ?? "", privacyVersion: "1.0.0",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? process.env.DEPLOY_PRIME_URL ?? process.env.URL ?? (process.env.NODE_ENV==="production"?"https://marvifinance.netlify.app":"http://localhost:3000"),
  isProduction: process.env.NEXT_PUBLIC_APP_ENV === "production",
  serviceHours: "Formulário disponível 24 horas. Análises e atendimento em horário comercial.",
};
