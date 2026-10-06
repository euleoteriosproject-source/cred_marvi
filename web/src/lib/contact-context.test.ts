import { describe, expect, it } from "vitest";
import { resolveContactContext } from "./contact-context";

describe("compatibilidade do contexto de contato", () => {
  it("mantém a escolha explícita de consórcio diante de parâmetros conflitantes", () => {
    expect(
      resolveContactContext({
        product: "consorcio",
        solution: "REAL_ESTATE_FINANCING",
        objective: "buy-home",
        profile: "PJ",
      }),
    ).toEqual({
      productId: "consortium",
      subject: "consórcio",
      profile: "BUSINESS",
    });
  });
  it("preserva o objetivo antigo de imóvel sem escolher financiamento pelo visitante", () => {
    expect(
      resolveContactContext({ objective: "buy-home", profile: "PERSON" }),
    ).toEqual({
      objectiveId: "property",
      subject: "aquisição de um imóvel",
      profile: "PERSON",
    });
  });
  it.each([
    ["VEHICLE", "vehicle-financing"],
    ["VEHICLE_BUSINESS", "vehicle-financing"],
    ["REAL_ESTATE_FINANCING", "property-financing"],
    ["CREDIT_BUSINESS", "working-capital"],
  ])("reconhece a modalidade legada %s da produção", (solution, productId) => {
    expect(resolveContactContext({ solution }).productId).toBe(productId);
  });
  it("mantém o assunto empresarial antigo", () => {
    expect(resolveContactContext({ objective: "cash-flow" }).subject).toBe(
      "fluxo de caixa da empresa",
    );
  });
  it("descarta valores arbitrários e perfis inválidos", () => {
    expect(
      resolveContactContext({
        product: "<script>",
        objective: "texto pessoal",
        profile: "invalid",
      }),
    ).toEqual({ profile: undefined });
  });
});
