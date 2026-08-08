import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const tokens = readFileSync(
  path.resolve(process.cwd(), "../assets/brand/tokens.css"),
  "utf8",
);

function color(name: string) {
  const match = tokens.match(new RegExp(`${name}:\\s*(#[0-9a-f]{6})`, "i"));
  if (!match?.[1]) throw new Error(`Cor não encontrada: ${name}`);
  return match[1];
}

function luminance(hex: string) {
  const channels = hex
    .slice(1)
    .match(/.{2}/g)
    ?.map((channel) => Number.parseInt(channel, 16) / 255);
  if (!channels || channels.length !== 3) {
    throw new Error(`Cor inválida: ${hex}`);
  }

  const [red, green, blue] = channels.map((channel) =>
    channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4,
  );
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function contrast(foreground: string, background: string) {
  const values = [luminance(foreground), luminance(background)].sort(
    (a, b) => b - a,
  );
  return (values[0] + 0.05) / (values[1] + 0.05);
}

describe("tokens de contraste", () => {
  it.each([
    ["texto principal", "--cm-color-text", "--cm-color-background"],
    ["texto muted", "--cm-color-text-muted", "--cm-color-background"],
    ["texto inverso", "--cm-color-text-inverse", "--cm-color-surface-inverse"],
    ["accent inverso", "--cm-color-accent", "--cm-color-surface-inverse"],
    ["foreground CTA", "--cm-color-accent-foreground", "--cm-color-accent"],
    ["accent textual", "--cm-color-accent-text", "--cm-color-background"],
    ["danger", "--cm-color-danger", "--cm-color-danger-surface"],
  ])("mantém AA para %s", (_, foreground, background) => {
    expect(
      contrast(color(foreground), color(background)),
    ).toBeGreaterThanOrEqual(4.5);
  });
});
