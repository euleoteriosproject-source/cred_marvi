import { describe, expect, it } from "vitest";
import { PUBLIC_WHATSAPP_FALLBACK, resolvePublicWhatsAppNumber } from "./site";

describe("configuração de contato", () => {
  it("usa o canal público quando a variável está ausente ou inválida", () => {
    expect(resolvePublicWhatsAppNumber()).toBe(PUBLIC_WHATSAPP_FALLBACK);
    expect(resolvePublicWhatsAppNumber("")).toBe(PUBLIC_WHATSAPP_FALLBACK);
    expect(resolvePublicWhatsAppNumber("inválido")).toBe(
      PUBLIC_WHATSAPP_FALLBACK,
    );
  });

  it("normaliza um número configurado válido", () => {
    expect(resolvePublicWhatsAppNumber("+55 (51) 99999-0000")).toBe(
      "5551999990000",
    );
  });
});
