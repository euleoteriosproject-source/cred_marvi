import { describe, expect, it } from "vitest";
import { navigation } from "./navigation";

describe("navegação principal", () => {
  it("expõe claramente os caminhos para pessoa física, empresas e agro", () => {
    expect(navigation).toEqual(
      expect.arrayContaining([
        {
          label: "Pessoa Física",
          href: "/solucoes?profile=PERSON",
        },
        {
          label: "Empresas",
          href: "/solucoes?profile=BUSINESS",
        },
        {
          label: "Agro",
          href: "/solucoes?category=agro",
        },
      ]),
    );
  });
});
