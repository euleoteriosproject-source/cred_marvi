export type Audience = "person" | "business" | "both";

export type Solution = {
  slug?: string;
  name: string;
  description: string;
  audience: Audience;
  introduction?: string;
  considerations?: readonly string[];
};

export const solutions: readonly Solution[] = [
  {
    name: "Empréstimo com garantia",
    audience: "person",
    description:
      "Atendimento inicial para compreender objetivos e alternativas disponíveis.",
  },
  {
    slug: "financiamento-de-imovel",
    name: "Financiamento de imóvel",
    audience: "person",
    description:
      "Orientação para quem planeja adquirir um imóvel com financiamento.",
    introduction:
      "O financiamento pode apoiar a aquisição de um imóvel ao longo de um prazo definido pela instituição responsável. A Cred Marvi ajuda a organizar o entendimento inicial da necessidade, sem prometer aprovação ou condições.",
    considerations: [
      "Objetivo e momento da aquisição",
      "Valor aproximado do imóvel e planejamento financeiro",
      "Condições definidas após análise da instituição responsável",
    ],
  },
  {
    name: "INSS — Portabilidade ou refinanciamento",
    audience: "person",
    description:
      "Orientação inicial sobre alternativas para contratos consignados existentes.",
  },
  {
    name: "Crédito do Trabalhador",
    audience: "person",
    description:
      "Informações iniciais sobre soluções disponíveis para trabalhadores.",
  },
  {
    name: "INSS Novo",
    audience: "person",
    description:
      "Atendimento consultivo sobre crédito consignado para beneficiários.",
  },
  {
    name: "FGTS — Saque-Aniversário",
    audience: "person",
    description:
      "Orientação sobre antecipação, sujeita às regras e à disponibilidade.",
  },
  {
    name: "INSS Cartões",
    audience: "person",
    description:
      "Informações sobre opções destinadas a beneficiários, quando disponíveis.",
  },
  {
    name: "Convênios públicos",
    audience: "person",
    description:
      "Atendimento para servidores quando houver convênio disponível.",
  },
  {
    slug: "financiamento-de-veiculo",
    name: "Financiamento de veículo",
    audience: "both",
    description:
      "Orientação para aquisição de veículo por pessoas ou empresas.",
    introduction:
      "O financiamento de veículo permite avaliar a aquisição de modelos usados ou zero quilômetro. As condições dependem da análise e das políticas da instituição responsável.",
    considerations: [
      "Tipo de veículo e finalidade da aquisição",
      "Planejamento do valor e das condições desejadas",
      "Análise realizada pela instituição responsável",
    ],
  },
  {
    slug: "capital-de-giro",
    name: "Capital de giro",
    audience: "business",
    description:
      "Atendimento inicial para necessidades operacionais e planejamento empresarial.",
    introduction:
      "Capital de giro pode apoiar necessidades operacionais, compras e investimentos de uma empresa. A orientação inicial ajuda a compreender alternativas, sem constituir proposta ou concessão de crédito.",
    considerations: [
      "Objetivo empresarial e momento do negócio",
      "Planejamento financeiro da necessidade",
      "Disponibilidade e condições após análise",
    ],
  },
  {
    slug: "consorcio",
    name: "Consórcio",
    audience: "both",
    description: "Planejamento para imóveis, veículos, pesados ou serviços.",
    introduction:
      "Consórcio é uma modalidade de compra planejada em grupo. Contemplação, uso do crédito e demais condições seguem as regras da administradora responsável.",
    considerations: [
      "Categoria do bem ou serviço desejado",
      "Planejamento de médio e longo prazo",
      "Regras de contemplação e da administradora",
    ],
  },
] as const;

export const detailedSolutions = solutions.filter(
  (solution): solution is Solution & { slug: string } => Boolean(solution.slug),
);

export function solutionBySlug(slug: string) {
  return detailedSolutions.find((solution) => solution.slug === slug);
}
