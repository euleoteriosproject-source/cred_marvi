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
  headline?: string;
  label?: string;
  image?: { src: string; alt: string; unoptimized?: boolean };
  introduction?: string;
  useCase?: string;
  conversation?: string;
  faq?: readonly { question: string; answer: string }[];
};

export const solutions: readonly Solution[] = [
  {
    id: "vehicle-financing",
    headline: "Seu próximo veículo começa aqui.",
    slug: "financiamento-de-veiculo",
    name: "Financiamento de veículos",
    shortName: "financiamento de veículos",
    description:
      "Motos, carros, utilitários e caminhões: conheça os caminhos para comprar ou trocar.",
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
    label: "Comprar ou trocar",
    image: {
      src: "/images/car.jpg",
      alt: "Carro compacto azul em uma rua durante o dia",
    },
  },
  {
    id: "property-financing",
    headline: "Um novo endereço para seus planos.",
    slug: "financiamento-de-imovel",
    name: "Financiamento imobiliário",
    shortName: "financiamento imobiliário",
    description:
      "Da primeira casa ao próximo imóvel: entenda as possibilidades para sua compra.",
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
    label: "Seu imóvel",
    image: { src: "/images/home.jpg", alt: "Casa com jardim durante o dia" },
  },
  {
    id: "personal-credit",
    name: "Empréstimo",
    shortName: "empréstimo",
    description:
      "Precisa de crédito? Entenda as alternativas antes de assumir um compromisso.",
    audience: ["PERSON"],
    category: "credit",
    status: "ACTIVE",
    order: 30,
    homeFeature: true,
    label: "Seu momento",
    image: {
      src: "/images/planning.jpg",
      alt: "Pessoa organizando documentos e anotando seus planos",
    },
    slug: "emprestimo",
    headline: "Crédito para organizar seu próximo passo.",
    introduction:
      "Empréstimo é uma alternativa de crédito para necessidades pessoais. Modalidade, condições e aprovação precisam ser avaliadas pela instituição responsável.",
    useCase:
      "Quando você quer entender as opções de crédito e como elas se encaixam no seu orçamento.",
    conversation:
      "Esclareça o custo total, as parcelas, os prazos e os critérios antes de assumir um compromisso.",
  },
  {
    id: "consortium",
    headline: "Planeje a sua próxima conquista.",
    slug: "consorcio",
    name: "Consórcio",
    shortName: "consórcio",
    description:
      "Imóveis, veículos, pesados e serviços: conheça uma alternativa de compra planejada.",
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
    label: "Compra planejada",
    image: {
      src: "/images/consortium.jpg",
      alt: "Chaves de imóvel em uma conversa sobre aquisição",
    },
  },
  {
    id: "auto-insurance",
    name: "Seguro de veículos",
    shortName: "seguro de veículos",
    description:
      "Moto, carro ou caminhão: entenda as opções de seguro para o seu veículo.",
    audience: ["PERSON"],
    category: "protection",
    status: "ACTIVE",
    order: 50,
    homeFeature: true,
    label: "Seu veículo",
    image: {
      src: "/images/vehicle-insurance.webp",
      alt: "Moto, carro e caminhão em uma composição ilustrativa de seguros de veículos",
      unoptimized: true,
    },
    slug: "seguro-auto",
    headline: "Mais cuidado com o veículo que move seus planos.",
    introduction:
      "O seguro de veículos pode abranger motos, carros e caminhões. As opções e a proteção aplicável dependem do veículo, da seguradora e das condições contratadas na apólice.",
    useCase:
      "Quando você quer conhecer opções de proteção para sua moto, seu carro ou seu caminhão.",
    conversation:
      "Esclareça coberturas, exclusões, franquias e condições aplicáveis ao seu veículo.",
  },
  {
    id: "home-insurance",
    name: "Seguro Residencial",
    shortName: "seguro residencial",
    description:
      "Conheça alternativas de proteção para a sua casa e esclareça as suas dúvidas.",
    audience: ["PERSON"],
    category: "protection",
    status: "ACTIVE",
    order: 60,
    homeFeature: true,
    label: "Seu lar",
    image: {
      src: "/images/living.jpg",
      alt: "Sala de estar iluminada e acolhedora",
    },
    slug: "seguro-residencial",
    headline: "Mais cuidado com o lugar que é seu.",
    introduction:
      "Seguro Residencial oferece proteção ao imóvel conforme as coberturas e condições contratadas na apólice.",
    useCase:
      "Quando você quer conhecer possibilidades de proteção para sua residência.",
    conversation:
      "Esclareça quais coberturas fazem sentido, suas exclusões e os critérios da apólice.",
  },
  {
    id: "working-capital",
    headline: "Mais planejamento para o caixa.",
    slug: "capital-de-giro",
    name: "Capital de giro",
    shortName: "capital de giro",
    description:
      "Estoque, despesas e operação: converse sobre crédito para o dia a dia da empresa.",
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
    label: "Dia a dia do negócio",
    image: {
      src: "/images/store.jpg",
      alt: "Atendimento no caixa de um pequeno estabelecimento comercial",
    },
  },
  {
    id: "agro-guidance",
    name: "Crédito para o Agro",
    shortName: "crédito para o Agro",
    description:
      "Orientação para as necessidades da atividade rural, para produtores e empresas.",
    audience: ["PERSON", "BUSINESS"],
    category: "agro",
    status: "ACTIVE",
    order: 80,
    businessFeature: true,
    label: "Sua produção",
    image: { src: "/images/agro.jpg", alt: "Campo cultivado sob a luz do sol" },
    slug: "credito-agro",
    headline: "Seu trabalho no campo tem novos planos.",
    introduction:
      "Crédito para o Agro é a porta de entrada para conversar sobre as necessidades financeiras da atividade rural. A modalidade adequada depende do caso.",
    useCase:
      "Quando o produtor ou a empresa quer entender alternativas para sua atividade.",
    conversation:
      "Converse sobre a finalidade do crédito e entenda quais alternativas podem ser avaliadas.",
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
    label: "Atividade rural",
    image: {
      src: "/images/rural.jpg",
      alt: "Plantação de milho com folhas verdes",
    },
    slug: "credito-rural",
    headline: "Um próximo passo para a sua produção.",
    introduction:
      "Crédito Rural reúne finalidades ligadas a custeio, investimento, comercialização e industrialização rural, conforme regras e critérios aplicáveis.",
    useCase:
      "Quando você quer entender uma necessidade específica da atividade rural.",
    conversation:
      "Esclareça a finalidade, o enquadramento e as condições da modalidade com a Marlise.",
  },
  {
    id: "bndes",
    name: "Linhas BNDES",
    shortName: "linhas BNDES",
    description:
      "Entenda as possibilidades de financiamento ligadas ao BNDES para sua empresa.",
    audience: ["BUSINESS"],
    category: "business",
    status: "ACTIVE",
    order: 100,
    businessFeature: true,
    label: "Investir no negócio",
    image: { src: "/images/investment.jpg", alt: "Trabalhadores em uma obra" },
    slug: "linhas-bndes",
    headline: "Investimentos para os planos da sua empresa.",
    introduction:
      "Linhas ligadas ao BNDES podem financiar investimentos empresariais conforme o escopo e o enquadramento de cada modalidade.",
    useCase:
      "Quando sua empresa está planejando investir e quer conhecer possibilidades de financiamento.",
    conversation:
      "Esclareça a finalidade do investimento, o enquadramento e os critérios da instituição responsável.",
  },
  {
    id: "pronampe",
    name: "Pronampe",
    shortName: "Pronampe",
    description:
      "Saiba mais sobre o programa e esclareça o enquadramento da sua empresa.",
    audience: ["BUSINESS"],
    category: "business",
    status: "ACTIVE",
    order: 110,
    businessFeature: true,
    label: "Pequenos negócios",
    image: {
      src: "/images/small-business.jpg",
      alt: "Atendimento em um pequeno estabelecimento comercial",
    },
    slug: "pronampe",
    headline: "Seu pequeno negócio, com novos caminhos.",
    introduction:
      "O Pronampe é um programa voltado a pequenos negócios. Enquadramento, disponibilidade e condições precisam ser esclarecidos no atendimento.",
    useCase:
      "Quando você quer entender se sua empresa pode ser avaliada no programa.",
    conversation:
      "Converse sobre os critérios de enquadramento e as condições aplicáveis, sem aprovação antecipada.",
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
    label: "Organizar o caixa",
    image: {
      src: "/images/receivables.jpg",
      alt: "Documentos e calculadora para organização financeira",
    },
    slug: "antecipacao-de-recebiveis",
    headline: "Organize o caixa olhando para suas vendas.",
    introduction:
      "A antecipação por desconto de duplicatas permite avaliar recebíveis da empresa para necessidades de caixa, conforme critérios da instituição responsável.",
    useCase:
      "Quando a empresa quer conversar sobre recebíveis e organização do caixa.",
    conversation:
      "Esclareça quais duplicatas podem ser avaliadas, os custos e as condições da operação.",
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
