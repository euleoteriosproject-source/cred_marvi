import { describe, expect, it } from "vitest";
import { getAtriumConfiguration } from "./atrium";

const publicKey = "public-key-for-test-only";

describe("getAtriumConfiguration", () => {
  it("aceita e normaliza uma configuração válida", () => {
    expect(
      getAtriumConfiguration({
        apiUrl: "  https://api.example.test/  ",
        publicKey: `  ${publicKey}  `,
      }),
    ).toEqual({
      available: true,
      configuration: {
        baseUrl: "https://api.example.test",
        publicKey,
      },
    });
  });

  it.each([
    [{ apiUrl: undefined, publicKey }, "missing"],
    [{ apiUrl: "https://api.example.test", publicKey: undefined }, "missing"],
    [{ apiUrl: "not-a-url", publicKey }, "invalid"],
    [{ apiUrl: "ftp://api.example.test", publicKey }, "invalid"],
    [{ apiUrl: "https://user:pass@api.example.test", publicKey }, "invalid"],
    [{ apiUrl: "https://api.example.test?debug=true", publicKey }, "invalid"],
    [{ apiUrl: "https://api.example.test#debug", publicKey }, "invalid"],
  ] as const)("rejeita configuração insegura %#", (environment, reason) => {
    const result = getAtriumConfiguration(environment);
    expect(result.available).toBe(false);
    if (!result.available) expect(result.reason).toBe(reason);
  });

  it("nunca inclui a public key no erro", () => {
    const result = getAtriumConfiguration({
      apiUrl: "invalid",
      publicKey,
    });

    expect(JSON.stringify(result)).not.toContain(publicKey);
  });
});
