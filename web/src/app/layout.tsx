import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cred Marvi",
  description: "Base técnica da aplicação Cred Marvi.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${playfairDisplay.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
