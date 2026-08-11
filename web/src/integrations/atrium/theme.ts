import type { AtriumStyleOverrides } from "@atrium/sdk-react";

export const credMarviAtriumTheme = {
  colorPrimary: "var(--cm-color-accent)",
  colorPrimaryContrast: "var(--cm-color-accent-foreground)",
  colorText: "var(--cm-color-text)",
  colorBackground: "var(--cm-color-surface)",
  colorError: "var(--cm-color-danger)",
  colorBorder: "var(--cm-color-border-interactive)",
  focusRing: "var(--cm-focus-width) solid var(--cm-color-focus-on-light)",
  radius: "var(--cm-radius-control)",
  font: "var(--cm-font-family-sans)",
  colorScheme: "light",
} satisfies AtriumStyleOverrides;
