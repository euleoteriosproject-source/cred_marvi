import { cleanup, render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

const sdkMocks = vi.hoisted(() => ({
  provider: vi.fn(),
  conversation: vi.fn(),
}));

vi.mock("@atrium/sdk-react/client", () => ({
  AtriumProvider: (props: { children: ReactNode }) => {
    sdkMocks.provider(props);
    return <div data-testid="atrium-provider">{props.children}</div>;
  },
  AtriumConversation: (props: object) => {
    sdkMocks.conversation(props);
    return <div data-testid="atrium-conversation" />;
  },
}));

import { AtriumAnalysis } from "./atrium-analysis";
import { atriumMessagesPtBr } from "./messages.pt-BR";
import { credMarviAtriumTheme } from "./theme";

afterEach(() => {
  cleanup();
  sdkMocks.provider.mockClear();
  sdkMocks.conversation.mockClear();
  vi.unstubAllEnvs();
});

describe("AtriumAnalysis", () => {
  it("fornece a configuração Cred Marvi ao SDK oficial", () => {
    vi.stubEnv("NEXT_PUBLIC_ATRIUM_API_URL", "https://api.example.test/");
    vi.stubEnv("NEXT_PUBLIC_ATRIUM_PUBLIC_KEY", "public-key-for-test-only");

    render(<AtriumAnalysis />);

    expect(screen.getByTestId("atrium-provider")).toBeTruthy();
    expect(screen.getByTestId("atrium-conversation")).toBeTruthy();
    expect(sdkMocks.provider).toHaveBeenCalledWith(
      expect.objectContaining({
        baseUrl: "https://api.example.test",
        publicKey: "public-key-for-test-only",
        flow: "credit-analysis",
        locale: "pt-BR",
      }),
    );
    expect(sdkMocks.conversation).toHaveBeenCalledWith({
      flow: "credit-analysis",
      locale: "pt-BR",
      mode: "inline",
      messages: atriumMessagesPtBr,
      styleOverrides: credMarviAtriumTheme,
    });
  });

  it.each([
    [undefined, undefined],
    ["invalid", "public-key-for-test-only"],
  ])("mostra fallback seguro sem configuração válida", (apiUrl, key) => {
    vi.stubEnv("NEXT_PUBLIC_ATRIUM_API_URL", apiUrl ?? "");
    vi.stubEnv("NEXT_PUBLIC_ATRIUM_PUBLIC_KEY", key ?? "");

    render(<AtriumAnalysis />);

    expect(screen.getByTestId("atrium-configuration-fallback")).toBeTruthy();
    expect(screen.getByText(/temporariamente indisponível/i)).toBeTruthy();
    expect(sdkMocks.provider).not.toHaveBeenCalled();
    expect(sdkMocks.conversation).not.toHaveBeenCalled();
  });
});
