import { spawn, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const host = "127.0.0.1";
const port = "3109";
const baseUrl = `http://${host}:${port}`;
const nextBin = fileURLToPath(
  new URL("../node_modules/next/dist/bin/next", import.meta.url),
);
const playwrightBin = fileURLToPath(
  new URL("../node_modules/@playwright/test/cli.js", import.meta.url),
);

const build = spawnSync(process.execPath, [nextBin, "build"], {
  stdio: "inherit",
});

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

const server = spawn(
  process.execPath,
  [nextBin, "start", "--hostname", host, "--port", port],
  {
    stdio: "ignore",
  },
);

async function waitForServer() {
  const deadline = Date.now() + 60_000;

  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(
        `O servidor Next encerrou com código ${server.exitCode}.`,
      );
    }

    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      // O servidor ainda está inicializando.
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error("Timeout ao iniciar o servidor Next para o teste E2E.");
}

function runPlaywright() {
  return new Promise((resolve, reject) => {
    const test = spawn(process.execPath, [playwrightBin, "test"], {
      stdio: "inherit",
    });
    test.once("error", reject);
    test.once("exit", (code, signal) => {
      if (signal)
        reject(new Error(`Playwright encerrado pelo sinal ${signal}.`));
      else resolve(code ?? 1);
    });
  });
}

let exitCode = 1;

try {
  await waitForServer();
  exitCode = await runPlaywright();
} finally {
  server.kill();
}

process.exitCode = exitCode;
