import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renderiza a proposta principal e os seis destaques pessoais", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /seu próximo passo começa com a orientação certa/i,
      }),
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", {
        name: /o que você quer realizar ou proteger/i,
      }),
    ).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Consórcio" })).toBeTruthy();
    expect(
      screen.getAllByRole("link", { name: /falar com a marlise/i }).length,
    ).toBeGreaterThan(0);
  });
});
