import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ProgressIndicator } from "./progress-indicator";

afterEach(cleanup);

describe("ProgressIndicator", () => {
  it("renderiza percentual somente quando fornecido", () => {
    render(<ProgressIndicator current={2} total={5} percentage={40} />);
    const progress = screen.getByRole("progressbar", { name: "Progresso" });
    expect(progress.getAttribute("aria-valuenow")).toBe("40");
    expect(screen.getByText("Etapa 2 de 5")).toBeTruthy();
  });

  it("não inventa percentual", () => {
    render(<ProgressIndicator current={2} />);
    expect(screen.queryByRole("progressbar")).toBeNull();
    expect(screen.getByText("Etapa 2")).toBeTruthy();
    expect(screen.getByText(/percentual não foi informado/i)).toBeTruthy();
  });

  it("aceita total sem calcular percentage", () => {
    render(<ProgressIndicator current={1} total={4} />);
    expect(screen.getByText("Etapa 1 de 4")).toBeTruthy();
    expect(screen.queryByRole("progressbar")).toBeNull();
  });
});
