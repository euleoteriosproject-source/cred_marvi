import { describe, expect, it } from "vitest";
import { activeSolutions } from "./solutions";

describe("imagens do catálogo", () => {
  it("cada produto ativo possui uma imagem própria", () => {
    const sources = activeSolutions.map((solution) => solution.image?.src);
    expect(sources.every(Boolean)).toBe(true);
    expect(new Set(sources).size).toBe(activeSolutions.length);
  });
});
