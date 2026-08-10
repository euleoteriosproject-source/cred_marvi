import type { NextConfig } from "next";
import { normalizeAtriumBaseUrl } from "./src/config/atrium-url";

const isProduction = process.env.NODE_ENV === "production";
const enableHsts = isProduction && process.env.SITE_URL?.startsWith("https://");
const atriumBaseUrl = normalizeAtriumBaseUrl(
  process.env.NEXT_PUBLIC_ATRIUM_API_URL ?? "",
);
const atriumOrigin = atriumBaseUrl ? new URL(atriumBaseUrl).origin : undefined;
const developmentConnections = isProduction ? [] : ["ws://localhost:3000"];
const connectSources = ["'self'", ...developmentConnections, atriumOrigin]
  .filter((source): source is string => Boolean(source))
  .join(" ");

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isProduction ? "" : " 'unsafe-eval'"}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src ${connectSources}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  { key: "X-Frame-Options", value: "DENY" },
  ...(enableHsts
    ? [
        {
          key: "Strict-Transport-Security",
          value: "max-age=31536000; includeSubDomains",
        },
      ]
    : []),
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
