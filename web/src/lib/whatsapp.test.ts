import { describe, expect, it } from "vitest";
import {
  normalizeWhatsAppNumber,
  whatsappHref,
  whatsappMessage,
} from "./whatsapp";

describe("WhatsApp", () => {
  it("gera URL com número válido e mensagem fixa", () => {
    const url = new URL(whatsappHref("+55 (51) 99999-0000"));
    expect(url.origin).toBe("https://wa.me");
    expect(url.pathname).toBe("/5551999990000");
    expect(url.searchParams.get("text")).toBe(whatsappMessage);
    expect([...url.searchParams.keys()]).toEqual(["text"]);
  });

  it("usa contato como fallback para número ausente ou inválido", () => {
    expect(whatsappHref("")).toBe("/contato");
    expect(whatsappHref("123")).toBe("/contato");
  });

  it("normaliza somente números plausíveis", () => {
    expect(normalizeWhatsAppNumber("+55 51 99999-0000")).toBe("5551999990000");
    expect(normalizeWhatsAppNumber("cpf=000")).toBeUndefined();
  });

  it("não inclui categorias proibidas na mensagem", () => {
    expect(whatsappMessage.toLowerCase()).not.toMatch(
      /cpf|cnpj|renda|faturamento|documento|conversation|token|https?:\/\//,
    );
  });
});
