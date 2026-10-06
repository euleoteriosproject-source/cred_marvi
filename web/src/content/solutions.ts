export type Audience = "PERSON" | "BUSINESS";
export type SolutionStatus = "ACTIVE" | "PENDING_CONFIRMATION" | "INACTIVE";
export type SolutionCategory =
  "credit" | "acquisition" | "protection" | "business" | "agro" | "other";

export type Solution = {
  id: string;
  slug?: string;
  name: string;
  shortName: string;
  description: string;
  audience: readonly Audience[];
  category: SolutionCategory;
  status: SolutionStatus;
  order: number;
  homeFeature?: boolean;
  businessFeature?: boolean;
  introduction?: string;
  useCase?: string;
  conversation?: string;
  faq?: readonly { question: string; answer: string }[];
};

export const solutions: readonly Solution[] = [
  {
    id: "vehicle-financing",
    slug: "financiamento-de-veiculo",
    name: "Financiamento de veículos",
    shortName: "financiamento de veículos",
    description:
      "Para comprar ou trocar seu veículo e entender as alternativas para essa aquisição.",
    audience: ["PERSON", "BUSINESS"],
    category: "acquisition",
    status: "ACTIVE",
    order: 10,
    homeFeature: true,
    introduction:
      "O financiamento permite organizar a aquisição de motos, carros, utilitários ou caminhões por pessoas e empresas. As condições são definidas pela instituição responsável.",
    useCase:
      "Pode fazer sentido quando existe um veículo em vista e você quer compreender as possibilidades antes de decidir.",
    conversation:
      "Converse sobre o tipo e a finalidade do veículo, além das condições e critérios aplicáveis ao seu caso.",
    faq: [
      {
        question: "Quais veículos podem ser considerados?",
        answer:
          "A conversa pode abranger motos, carros, utilitários e caminhões, para pessoa física ou empresa.",
      },
      {
        question: "O contato garante aprovação?",
        answer:
          "Não. Aprovação e condições dependem da análise da instituição responsável.",
      },
    ],
  },
  {
    id: "property-financing",
    slug: "financiamento-de-imovel",
    name: "Financiamento imobiliário",
    shortName: "financiamento imobiliário",
    description:
      "Para organizar a compra do imóvel e conversar sobre os próximos passos.",
    audience: ["PERSON"],
    category: "acquisition",
    status: "ACTIVE",
    order: 20,
    homeFeature: true,
    introduction:
      "O financiamento imobiliário é uma alternativa para organizar a aquisição de um imóvel ao longo do tempo, conforme os critérios da instituição responsável.",
    useCase:
      "Pode fazer sentido para quem está planejando comprar um imóvel e quer entender o caminho antes de assumir um compromisso.",
    conversation:
      "Na conversa, você pode esclarecer etapas, critérios e informações necessárias para avaliar a modalidade.",
    faq: [
      {
        question: "Existe entrada ou taxa definida pelo site?",
        answer:
          "Não. Valores, taxas, prazos e demais condições variam e precisam ser esclarecidos no atendimento.",
      },
      {
        question: "Preciso enviar documentos pelo site?",
        answer:
          "Não. Esta página não solicita documentos nem realiza cadastro.",
      },
    ],
  },
  {
    id: "personal-credit",
    name: "Empréstimo",
    shortName: "empréstimo",
    description:
      "Para avaliar uma necessidade de crédito com orientação antes de decidir.",
    audience: ["PERSON"],
    category: "credit",
    status: "ACTIVE",
    order: 30,
    homeFeature: true,
  },
  {
    id: "consortium",
    slug: "consorcio",
    name: "Consórcio",
    shortName: "consórcio",
    description:
      "Para planejar a aquisição de um bem ou serviço e entender como funciona a contemplação.",
    audience: ["PERSON", "BUSINESS"],
    category: "acquisition",
    status: "ACTIVE",
    order: 40,
    homeFeature: true,
    introduction:
      "Consórcio é uma modalidade de compra planejada em grupo para imóveis, veículos, pesados ou serviços. A contemplação e o uso do crédito seguem as regras da administradora responsável.",
    useCase:
      "Pode fazer sentido para pessoas ou empresas que desejam planejar uma aquisição e conhecer as regras antes de escolher.",
    conversation:
      "Esclareça a categoria desejada, o funcionamento da contemplação e as condições da administradora, sem promessa de data.",
    faq: [
      {
        question: "É possível saber quando serei contemplado?",
        answer:
          "Não há promessa de data. A contemplação segue as regras da administradora e deve ser entendida antes da contratação.",
      },
      {
        question: "Consórcio também atende empresas?",
        answer:
          "Sim. O contexto pode ser de pessoa física ou empresa, sem mudar o produto escolhido.",
      },
    ],
  },
  {
    id: "auto-insurance",
    name: "Seguro Auto",
    shortName: "seguro auto",
    description: "Para conhecer alternativas de proteção para o seu carro.",
    audience: ["PERSON"],
    category: "protection",
    status: "ACTIVE",
    order: 50,
    homeFeature: true,
  },
  {
    id: "home-insurance",
    name: "Seguro Residencial",
    shortName: "seguro residencial",
    description:
      "Para conversar sobre a proteção da sua casa e os cuidados que fazem sentido para ela.",
    audience: ["PERSON"],
    category: "protection",
    status: "ACTIVE",
    order: 60,
    homeFeature: true,
  },
  {
    id: "working-capital",
    slug: "capital-de-giro",
    name: "Capital de giro",
    shortName: "capital de giro",
    description:
      "Alternativas para necessidades de caixa e operação da empresa.",
    audience: ["BUSINESS"],
    category: "business",
    status: "ACTIVE",
    order: 70,
    businessFeature: true,
    introduction:
      "Capital de giro pode apoiar necessidades de caixa e operação da empresa. A orientação ajuda a entender alternativas sem representar concessão de crédito.",
    useCase:
      "Pode fazer sentido quando a empresa precisa organizar uma necessidade operacional ou de caixa.",
    conversation:
      "Converse sobre a finalidade empresarial e esclareça critérios, condições e adequação da alternativa.",
    faq: [
      {
        question: "A linha está disponível para toda empresa?",
        answer:
          "Não é possível afirmar isso antecipadamente. Enquadramento e condições dependem da análise aplicável.",
      },
      {
        question: "O site faz a solicitação de crédito?",
        answer: "Não. O site apenas abre um canal para a conversa inicial.",
      },
    ],
  },
  {
    id: "agro-guidance",
    name: "Crédito para o Agro",
    shortName: "crédito para o Agro",
    description:
      "Converse sobre crédito para as necessidades da sua atividade no campo.",
    audience: ["PERSON", "BUSINESS"],
    category: "agro",
    status: "ACTIVE",
    order: 80,
    businessFeature: true,
  },
  {
    id: "rural-credit",
    name: "Crédito Rural",
    shortName: "crédito rural",
    description:
      "Para entender possibilidades ligadas a custeio, investimento, comercialização ou industrialização rural.",
    audience: ["PERSON", "BUSINESS"],
    category: "agro",
    status: "ACTIVE",
    order: 90,
  },
  {
    id: "bndes",
    name: "Linhas BNDES",
    shortName: "linhas BNDES",
    description:
      "Atendimento para entender possibilidades relacionadas ao BNDES, sem promessa de acesso ou linha específica.",
    audience: ["BUSINESS"],
    category: "business",
    status: "ACTIVE",
    order: 100,
    businessFeature: true,
  },
  {
    id: "pronampe",
    name: "Pronampe",
    shortName: "Pronampe",
    description:
      "Converse sobre o programa; enquadramento, disponibilidade e condições são esclarecidos no atendimento.",
    audience: ["BUSINESS"],
    category: "business",
    status: "ACTIVE",
    order: 110,
    businessFeature: true,
  },
  {
    id: "receivables",
    name: "Antecipação de recebíveis",
    shortName: "antecipação de recebíveis por desconto de duplicatas",
    description:
      "Conversa sobre desconto de duplicatas para necessidades da empresa.",
    audience: ["BUSINESS"],
    category: "business",
    status: "ACTIVE",
    order: 120,
  },
  {
    id: "fgi-peac",
    name: "FGI PEAC",
    shortName: "FGI PEAC",
    description: "Item mantido no inventário para confirmação comercial.",
    audience: ["BUSINESS"],
    category: "business",
    status: "PENDING_CONFIRMATION",
    order: 900,
  },
] as const;

export const activeSolutions = solutions
  .filter((solution) => solution.status === "ACTIVE")
  .sort((a, b) => a.order - b.order);

export const homeSolutions = activeSolutions.filter(
  (solution) => solution.homeFeature,
);

export const businessHighlights = activeSolutions.filter(
  (solution) => solution.businessFeature,
);

export const detailedSolutions = activeSolutions.filter(
  (solution): solution is Solution & { slug: string } => Boolean(solution.slug),
);

export const otherPossibilities = [
  "Energia",
  "Saúde e benefícios",
  "Viagens",
] as const;

export function solutionBySlug(slug: string) {
  return detailedSolutions.find((solution) => solution.slug === slug);
}

export function solutionById(id: string) {
  return activeSolutions.find((solution) => solution.id === id);
}
