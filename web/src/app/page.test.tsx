import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renderiza a identificação da base Cred Marvi", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Cred Marvi" }),
    ).toBeTruthy();
    expect(screen.getByText("Base da aplicação inicializada.")).toBeTruthy();
  });
});
