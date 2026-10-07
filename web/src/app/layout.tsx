import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { createOrganizationJsonLd, site } from "@/config/site";
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
  metadataBase: site.siteUrl ? new URL(site.siteUrl) : undefined,
  title: { default: site.homeTitle, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  category: "financial services",
  verification: site.googleSiteVerification
    ? { google: site.googleSiteVerification }
    : undefined,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: site.homeTitle,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.homeTitle,
    description: site.description,
  },
  robots: {
    index: Boolean(site.siteUrl),
    follow: Boolean(site.siteUrl),
    googleBot: {
      index: Boolean(site.siteUrl),
      follow: Boolean(site.siteUrl),
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organization = createOrganizationJsonLd();

  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${playfairDisplay.variable}`}
    >
      <body>
        {organization ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
            }}
          />
        ) : null}
        <a href="#conteudo" className="skip-link">
          Ir para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
