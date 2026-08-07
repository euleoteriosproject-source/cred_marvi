import { siteConfig } from "./site-config";
import type { LeadData } from "@/types/lead";

export function whatsappUrl(message: string) {
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");
  return number
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : "/contato";
}
export function siteContactMessage() {
  return "Olá! Vim pelo site da Cred Marvi e gostaria de falar com uma especialista.";
}
export function successMessage(
  protocol: string,
  firstName: string,
  need: string,
) {
  return `Olá! Acabei de enviar uma solicitação pelo site da Cred Marvi.\n\nProtocolo: ${protocol}\nNome: ${firstName}\nNecessidade: ${need}`;
}

const solutionNames: Record<NonNullable<LeadData["solution"]>, string> = {
  LOAN_PERSON: "Empréstimo",
  REAL_ESTATE_FINANCING: "Financiamento de imóvel",
  INSS_PORT_REFIN: "INSS — Portabilidade ou refinanciamento",
  WORKER_CREDIT: "Crédito do trabalhador",
  INSS_NEW: "INSS Novo",
  FGTS_BIRTHDAY: "FGTS — Saque-Aniversário",
  INSS_CARDS: "INSS Cartões",
  PUBLIC_AGREEMENTS: "Convênios públicos",
  CREDIT_BUSINESS: "Capital de giro",
  VEHICLE_PERSON: "Financiamento de veículo",
  VEHICLE_BUSINESS: "Financiamento de veículo",
  CONSORTIUM: "Consórcio",
};
export function leadChecklistMessage(data: Partial<LeadData>) {
  const line = (label: string, value?: string) =>
    value?.trim() ? `• ${label}: ${value.trim()}` : null;
  const details: (string | null)[] = [
    line(
      "Perfil",
      data.customerType === "BUSINESS" ? "Pessoa jurídica" : "Pessoa física",
    ),
    line("Solução", data.solution ? solutionNames[data.solution] : data.need),
  ];
  if (data.solution === "LOAN_PERSON")
    details.push(
      line("Valor do empréstimo", data.requestedAmount),
      line("Garantias", data.guarantees?.join(", ")),
      line("Renda mensal", data.income),
      line("RG", data.rg),
      line("CPF", data.cpf),
    );
  if (data.solution === "REAL_ESTATE_FINANCING")
    details.push(
      line("Valor aproximado do imóvel", data.propertyValue),
      line("Valor a financiar", data.requestedAmount),
      line("Renda mensal", data.income),
      line("RG", data.rg),
      line("CPF", data.cpf),
    );
  if (data.solution === "CREDIT_BUSINESS")
    details.push(
      line("Valor do capital de giro", data.requestedAmount),
      line("Empresa", data.businessName),
      line("CNPJ", data.cnpj),
      line("Garantias", data.guarantees?.join(", ")),
      line("Faturamento mensal", data.monthlyRevenueRange),
      line("Sócio administrador", data.administratorName),
      line("RG do sócio", data.administratorRg),
      line("CPF do sócio", data.administratorCpf),
    );
  if (
    [
      "INSS_PORT_REFIN",
      "WORKER_CREDIT",
      "INSS_NEW",
      "FGTS_BIRTHDAY",
      "INSS_CARDS",
      "PUBLIC_AGREEMENTS",
    ].includes(String(data.solution))
  )
    details.push(
      line("Valor pretendido", data.requestedAmount),
      line("RG", data.rg),
      line("CPF", data.cpf),
    );
  if (
    data.solution === "VEHICLE_PERSON" ||
    data.solution === "VEHICLE_BUSINESS"
  )
    details.push(
      line("Condição", data.vehicleCondition === "USED" ? "Usado" : "Zero km"),
      line(
        data.vehicleCondition === "USED"
          ? "Valor do veículo"
          : "Valor da nota fiscal",
        data.vehicleCondition === "USED"
          ? data.vehicleValue
          : data.invoiceValue,
      ),
      line("Ano", data.vehicleYear),
      line("Placa", data.vehiclePlate),
      line("Marca", data.vehicleBrand),
      line("Modelo", data.vehicleModel),
      line(
        data.solution === "VEHICLE_BUSINESS"
          ? "CNPJ do comprador"
          : "CPF do comprador",
        data.buyerDocument,
      ),
    );
  if (data.solution === "CONSORTIUM")
    details.push(
      line("Categoria", data.consortiumCategory),
      line("Valor do bem ou serviço", data.requestedAmount),
      line(data.documentType || "CPF/CNPJ", data.buyerDocument),
    );
  const contact = [
    line("Nome", data.fullName),
    line("Endereço", data.address),
    line("Telefone / WhatsApp", data.phone),
    line("E-mail", data.email),
  ].filter(Boolean);
  return [
    "*NOVA SOLICITAÇÃO — CRED MARVI*",
    "",
    "*CHECKLIST DA ANÁLISE*",
    ...details.filter(Boolean),
    "",
    "*CONTATO*",
    ...contact,
    "",
    "Mensagem preenchida pelo formulário do site.",
  ].join("\n");
}
