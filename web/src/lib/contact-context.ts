import { solutionById } from "@/content/solutions";
import type { ContactProfile, WhatsAppContext } from "./whatsapp";

export type ContactContext = WhatsAppContext & {
  productId?: string;
  objectiveId?: string;
};

type SearchValue = string | string[] | undefined;
export type ContactSearchParams = Record<string, SearchValue>;

const productAliases: Readonly<Record<string, string>> = {
  consorcio: "consortium",
  consortium: "consortium",
  "financiamento-de-veiculo": "vehicle-financing",
  vehicle: "vehicle-financing",
  "financiamento-de-imovel": "property-financing",
  property: "property-financing",
  emprestimo: "personal-credit",
  credit: "personal-credit",
  "seguro-auto": "auto-insurance",
  "seguro-residencial": "home-insurance",
  "capital-de-giro": "working-capital",
  agro: "agro-guidance",
  "credito-rural": "rural-credit",
  bndes: "bndes",
  pronampe: "pronampe",
  duplicatas: "receivables",
  "real-estate": "property-financing",
  real_estate_financing: "property-financing",
  vehicle_person: "vehicle-financing",
  vehicle_business: "vehicle-financing",
  credit_business: "working-capital",
};

const legacySolutions: Readonly<Record<string, string>> = {
  CONSORTIUM: "consortium",
  VEHICLE_FINANCING: "vehicle-financing",
  PROPERTY_FINANCING: "property-financing",
  PERSONAL_CREDIT: "personal-credit",
  WORKING_CAPITAL: "working-capital",
  AGRO: "agro-guidance",
  RURAL_CREDIT: "rural-credit",
  BNDES: "bndes",
  PRONAMPE: "pronampe",
  RECEIVABLES: "receivables",
  VEHICLE: "vehicle-financing",
  VEHICLE_PERSON: "vehicle-financing",
  VEHICLE_BUSINESS: "vehicle-financing",
  REAL_ESTATE_FINANCING: "property-financing",
  CREDIT_BUSINESS: "working-capital",
};

const objectives: Readonly<Record<string, { id: string; subject?: string }>> = {
  imovel: { id: "property", subject: "aquisição de um imóvel" },
  veiculo: { id: "vehicle", subject: "compra ou troca de veículo" },
  credito: { id: "credit", subject: "uma necessidade de crédito" },
  consorcio: { id: "consortium", subject: "consórcio" },
  protecao: { id: "protection", subject: "alternativas de proteção" },
  empresa: { id: "business", subject: "as alternativas para minha empresa" },
  agro: { id: "agro", subject: "crédito para o Agro" },
  indefinido: { id: "unknown" },
  // Published master URLs retain the objective, without choosing a product.
  "buy-home": { id: "property", subject: "aquisição de um imóvel" },
  "buy-vehicle": { id: "vehicle", subject: "compra ou troca de veículo" },
  "get-credit": { id: "credit", subject: "uma necessidade de crédito" },
  "organize-debt": { id: "credit", subject: "organização de dívidas" },
  "plan-purchase": { id: "planning", subject: "planejamento de uma compra" },
  "protect-family": { id: "protection", subject: "alternativas de proteção" },
  "reduce-personal-costs": { id: "costs", subject: "organização de gastos" },
  "health-wellbeing": { id: "health", subject: "saúde e benefícios" },
  "plan-trip": { id: "travel", subject: "planejamento de viagem" },
  "cash-flow": { id: "business", subject: "fluxo de caixa da empresa" },
  "working-capital": { id: "business", subject: "capital de giro" },
  "business-vehicle": {
    id: "vehicle",
    subject: "aquisição de veículo para empresa",
  },
  expand: { id: "business", subject: "investimento na empresa" },
  "reduce-costs": {
    id: "business",
    subject: "organização de custos da empresa",
  },
  "protect-business": { id: "business", subject: "proteção da empresa" },
  "people-benefits": { id: "business", subject: "benefícios para a equipe" },
  "unsure-person": { id: "unknown" },
  "unsure-business": { id: "business", subject: "alternativas para a empresa" },
};

function first(value: SearchValue) {
  return Array.isArray(value) ? value[0] : value;
}

function validProfile(value: SearchValue): ContactProfile | undefined {
  const normalized = first(value)?.toUpperCase();
  if (normalized === "PERSON" || normalized === "PF") return "PERSON";
  if (normalized === "BUSINESS" || normalized === "PJ") return "BUSINESS";
  return undefined;
}

function contextFromProduct(productId: string): ContactContext | undefined {
  const solution = solutionById(productId);
  if (!solution) return undefined;
  return { productId: solution.id, subject: solution.shortName };
}

export function resolveContactContext(
  params: ContactSearchParams,
): ContactContext {
  const explicit = first(params.product)?.toLowerCase();
  const explicitContext = explicit
    ? contextFromProduct(productAliases[explicit] ?? explicit)
    : undefined;

  const legacy = first(params.solution)?.toUpperCase();
  const legacyContext = legacy
    ? contextFromProduct(legacySolutions[legacy] ?? "")
    : undefined;

  const objective = first(params.objective)?.toLowerCase();
  const objectiveContext = objective ? objectives[objective] : undefined;
  const base =
    explicitContext ??
    legacyContext ??
    (objectiveContext
      ? { objectiveId: objectiveContext.id, subject: objectiveContext.subject }
      : {});

  return { ...base, profile: validProfile(params.profile) };
}

export const orientationSubjects = [
  { id: "imovel", label: "Imóvel" },
  { id: "veiculo", label: "Veículo" },
  { id: "credito", label: "Crédito" },
  { id: "consorcio", label: "Consórcio" },
  { id: "protecao", label: "Proteção" },
  { id: "empresa", label: "Empresa" },
  { id: "agro", label: "Agro" },
  { id: "indefinido", label: "Ainda não sei" },
] as const;
