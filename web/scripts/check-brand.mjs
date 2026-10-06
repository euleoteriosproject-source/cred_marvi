import { readFile, readdir, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const repositoryRoot = fileURLToPath(new URL("../../", import.meta.url));
const tokenPath = fileURLToPath(
  new URL("../../assets/brand/tokens.css", import.meta.url),
);
const assetsPath = fileURLToPath(new URL("../../assets/", import.meta.url));

const expectedAssets = [
  ["logos/source/cred-marvi-logo.jfif", 109_187],
  ["logos/source/cred-marvi-symbol.png", 304_025],
  ["images/reference/cred-marvi-primary.png", 930_451],
];

const requiredTokens = [
  "--cm-color-background",
  "--cm-color-surface-inverse",
  "--cm-color-accent",
  "--cm-color-accent-text",
  "--cm-color-focus-on-light",
  "--cm-font-family-sans",
  "--cm-font-family-serif",
  "--cm-radius-control",
  "--cm-shadow-card",
  "--cm-container-max",
  "--cm-duration-normal",
  "--cm-target-min",
];

const tokens = await readFile(tokenPath, "utf8");

for (const token of requiredTokens) {
  if (!tokens.includes(`${token}:`)) {
    throw new Error(`Token obrigatório ausente: ${token}`);
  }
}

for (const [relativePath, expectedSize] of expectedAssets) {
  const asset = fileURLToPath(
    new URL(`../../assets/${relativePath}`, import.meta.url),
  );
  const metadata = await stat(asset);
  if (metadata.size !== expectedSize) {
    throw new Error(
      `${relativePath} tem ${metadata.size} bytes; esperado: ${expectedSize}.`,
    );
  }
}

async function findSvg(directory) {
  const matches = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = `${directory}/${entry.name}`;
    if (entry.isDirectory()) matches.push(...(await findSvg(entryPath)));
    else if (entry.name.toLowerCase().endsWith(".svg")) matches.push(entryPath);
  }
  return matches;
}

const svgFiles = await findSvg(assetsPath);
if (svgFiles.length > 0) {
  throw new Error(`SVG não aprovado encontrado: ${svgFiles.join(", ")}`);
}

console.log(`Brand check aprovado em ${repositoryRoot}`);
