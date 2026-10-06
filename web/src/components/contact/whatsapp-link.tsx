import { MessageCircle } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { WhatsAppContext } from "@/lib/whatsapp";
import { whatsappHref } from "@/lib/whatsapp";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  context?: WhatsAppContext;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "inverse" | "whatsapp";
};

const variants = {
  primary:
    "border-accent bg-accent text-accent-foreground shadow-accent hover:bg-accent-hover",
  secondary:
    "border-border-interactive bg-surface text-foreground shadow-control hover:bg-surface-soft",
  inverse:
    "border-inverse/30 bg-transparent text-inverse hover:border-accent hover:text-accent",
  whatsapp:
    "border-whatsapp bg-whatsapp text-accent-foreground shadow-control hover:bg-whatsapp-hover",
} as const;

export function WhatsAppLink({
  context,
  children = "Falar com a Marlise",
  className = "",
  variant = "primary",
  ...props
}: Props) {
  const href = whatsappHref(context);
  const external = href.startsWith("https://");

  return (
    <a
      href={href}
      {...(external
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": `${String(children)} — abre o WhatsApp`,
          }
        : {})}
      className={`inline-flex min-h-[var(--cm-target-min)] items-center justify-center gap-2 rounded-control border px-6 py-3 text-sm font-extrabold transition duration-[var(--cm-duration-normal)] ease-[var(--cm-ease-standard)] hover:-translate-y-0.5 active:scale-[.98] motion-reduce:transform-none ${variants[variant]} ${className}`}
      {...props}
    >
      <MessageCircle size={18} aria-hidden="true" />
      {children}
    </a>
  );
}
