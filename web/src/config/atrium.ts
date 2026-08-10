import { normalizeAtriumBaseUrl } from "./atrium-url";

export const ATRIUM_FLOW = "credit-analysis";
export const ATRIUM_LOCALE = "pt-BR";

export interface AtriumWebConfiguration {
  readonly baseUrl: string;
  readonly publicKey: string;
}

export type AtriumConfigurationResult =
  | { readonly available: true; readonly configuration: AtriumWebConfiguration }
  | {
      readonly available: false;
      readonly reason: "missing" | "invalid";
      readonly message: string;
    };

interface AtriumEnvironment {
  readonly apiUrl?: string;
  readonly publicKey?: string;
}

export function getAtriumConfiguration(
  environment: AtriumEnvironment = {
    apiUrl: process.env.NEXT_PUBLIC_ATRIUM_API_URL,
    publicKey: process.env.NEXT_PUBLIC_ATRIUM_PUBLIC_KEY,
  },
): AtriumConfigurationResult {
  const apiUrl = environment.apiUrl?.trim() ?? "";
  const publicKey = environment.publicKey?.trim() ?? "";

  if (!apiUrl || !publicKey) {
    return {
      available: false,
      reason: "missing",
      message: "O Assistente Marvi está temporariamente indisponível.",
    };
  }

  const baseUrl = normalizeAtriumBaseUrl(apiUrl);
  if (!baseUrl) {
    return {
      available: false,
      reason: "invalid",
      message: "O Assistente Marvi está temporariamente indisponível.",
    };
  }

  return { available: true, configuration: { baseUrl, publicKey } };
}
