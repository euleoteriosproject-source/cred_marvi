import type { WhatsAppContext } from "@/lib/whatsapp";
import type { ReactNode } from "react";
import { MobileContactBar } from "@/components/contact/mobile-contact-bar";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function PageShell({
  children,
  contactContext,
}: {
  children: ReactNode;
  contactContext?: WhatsAppContext;
}) {
  return (
    <div className="pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0">
      <SiteHeader contactContext={contactContext} />
      {children}
      <SiteFooter />
      <MobileContactBar context={contactContext} />
    </div>
  );
}
