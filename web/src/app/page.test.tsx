import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renderiza a proposta principal e os seis destaques pessoais", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /seus planos merecem um próximo passo/i,
      }),
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", {
        name: /para cada plano, um caminho/i,
      }),
    ).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Consórcio" })).toBeTruthy();
    expect(
      screen.getAllByRole("link", { name: /falar com a marlise/i }).length,
    ).toBeGreaterThan(0);
  });
});
