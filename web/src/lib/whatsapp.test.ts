import { describe, expect, it } from "vitest";
import { resolveContactContext } from "./contact-context";
import {
  buildWhatsAppMessage,
  normalizeWhatsAppNumber,
  whatsappHref,
} from "./whatsapp";
import { resolvePublicWhatsAppNumber } from "@/config/site";

describe("WhatsApp", () => {
  it("gera URL codificada com contexto mínimo", () => {
    const url = new URL(
      whatsappHref(
        { subject: "consórcio", detail: "imóvel", profile: "PERSON" },
        "+55 (51) 99999-0000",
      ),
    );
    expect(url.origin).toBe("https://wa.me");
    expect(url.pathname).toBe("/5551999990000");
    expect(url.searchParams.get("text")).toBe(
      "Olá, Marlise! Vim pelo site da Cred Marvi e gostaria de conversar sobre consórcio de imóvel para mim.",
    );
    expect([...url.searchParams.keys()]).toEqual(["text"]);
  });

  it("usa contato como fallback para número ausente ou inválido", () => {
    expect(whatsappHref({}, "")).toBe("/contato");
    expect(whatsappHref({}, "123")).toBe("/contato");
  });

  it("mantém um canal utilizável quando e-mail e variável de WhatsApp estão ausentes", () => {
    const number = resolvePublicWhatsAppNumber(undefined);
    expect(whatsappHref({}, number)).toMatch(
      /^https:\/\/wa\.me\/\d{10,15}\?text=/,
    );
  });

  it("normaliza somente números plausíveis", () => {
    expect(normalizeWhatsAppNumber("+55 51 99999-0000")).toBe("5551999990000");
    expect(normalizeWhatsAppNumber("cpf=000")).toBeUndefined();
  });

  it("não inclui categorias pessoais ou identificadores", () => {
    expect(
      buildWhatsAppMessage({ subject: "consórcio" }).toLowerCase(),
    ).not.toMatch(
      /cpf|cnpj|renda|faturamento|documento|protocol|token|https?:\/\//,
    );
  });
});

describe("resolução de contexto", () => {
  it("preserva consórcio para PF e PJ", () => {
    expect(
      resolveContactContext({ product: "consorcio", profile: "PF" }),
    ).toMatchObject({
      productId: "consortium",
      subject: "consórcio",
      profile: "PERSON",
    });
    expect(
      resolveContactContext({ solution: "CONSORTIUM", profile: "PJ" }),
    ).toMatchObject({
      productId: "consortium",
      subject: "consórcio",
      profile: "BUSINESS",
    });
  });

  it("prioriza produto explícito e ignora valores desconhecidos", () => {
    expect(
      resolveContactContext({
        product: "consorcio",
        solution: "VEHICLE_FINANCING",
        objective: "imovel",
      }).productId,
    ).toBe("consortium");
    expect(
      resolveContactContext({ product: "<script>", solution: "INVALID" }),
    ).toEqual({ profile: undefined });
  });
});
