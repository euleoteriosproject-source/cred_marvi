import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cred Marvi",
  description: "Base técnica da aplicação Cred Marvi.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
