import { describe, expect, it } from "vitest";
import {
  createOrganizationJsonLd,
  createPageMetadata,
  PUBLIC_WHATSAPP_FALLBACK,
  resolvePublicWhatsAppNumber,
  site,
  socialProfiles,
} from "./site";

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

describe("presença pública", () => {
  it("mantém os canais sociais oficiais", () => {
    expect(socialProfiles.map(({ href }) => href)).toEqual([
      "https://www.instagram.com/credmarvi",
      "https://pt-br.facebook.com/Credmarvi/",
      "https://www.tiktok.com/@credmarvi",
    ]);
  });

  it("comunica o atendimento nacional e o presencial local", () => {
    expect(site.onlineServiceArea).toContain("todo o Brasil");
    expect(site.inPersonServiceArea).toContain("Capão da Canoa");
    expect(site.inPersonServiceArea).toContain("Litoral Norte");
  });

  it("não publica canonical nem dados estruturados sem URL confirmada", () => {
    expect(
      createPageMetadata({
        title: "Contato",
        description: "Atendimento Cred Marvi",
        path: "/contato",
      }).alternates,
    ).toBeUndefined();
    expect(createOrganizationJsonLd()).toBeUndefined();
  });
});
