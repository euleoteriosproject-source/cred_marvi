import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "Cred Marvi — crédito, consórcio e seguros com atendimento humano";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

const logoPromise = readFile(
  join(process.cwd(), "public/brand/cred-marvi-symbol.png"),
);

export default async function OpenGraphImage() {
  const logo = await logoPromise;
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#faf8f3",
        color: "#171719",
        display: "flex",
        height: "100%",
        padding: "58px",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "flex-start",
          background: "#ffffff",
          border: "2px solid #dad1bf",
          borderRadius: "36px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "54px 62px",
          width: "100%",
        }}
      >
        <div style={{ alignItems: "center", display: "flex", gap: "22px" }}>
          <img
            src={logoSrc}
            alt=""
            width="78"
            height="78"
            style={{
              borderRadius: "18px",
              height: "78px",
              objectFit: "cover",
              width: "78px",
            }}
          />
          <span style={{ fontSize: "36px", fontWeight: 700 }}>Cred Marvi</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#7c5d0d",
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Atendimento humano
          </span>
          <span
            style={{
              fontFamily: "serif",
              fontSize: "62px",
              fontWeight: 600,
              lineHeight: 1.08,
              marginTop: "18px",
              maxWidth: "920px",
            }}
          >
            Crédito, aquisição e proteção para seus próximos planos.
          </span>
        </div>
        <span style={{ color: "#625e56", fontSize: "24px" }}>
          Online em todo o Brasil • Presencial em Capão da Canoa e Litoral
          Norte/RS
        </span>
      </div>
    </div>,
    size,
  );
}
