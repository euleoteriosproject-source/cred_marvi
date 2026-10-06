import type { ReactNode } from "react";
import { MobileContactBar } from "@/components/contact/mobile-contact-bar";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0">
      <SiteHeader />
      {children}
      <SiteFooter />
      <MobileContactBar />
    </div>
  );
}
