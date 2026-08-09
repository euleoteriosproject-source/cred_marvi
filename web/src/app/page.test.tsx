import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renderiza a proposta principal e o Assistente Marvi", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /soluções financeiras para pessoas e empresas/i,
      }),
    ).toBeTruthy();
    expect(screen.getAllByText("Assistente Marvi").length).toBeGreaterThan(0);
    expect(
      screen.getAllByRole("link", { name: /iniciar análise/i }).length,
    ).toBeGreaterThan(0);
  });
});
