export function normalizeAtriumBaseUrl(value: string): string | undefined {
  const candidate = value.trim();

  if (!candidate) return undefined;

  try {
    const url = new URL(candidate);

    if (
      (url.protocol !== "http:" && url.protocol !== "https:") ||
      url.username ||
      url.password ||
      url.search ||
      url.hash
    ) {
      return undefined;
    }

    return url.href.replace(/\/+$/, "");
  } catch {
    return undefined;
  }
}
