import { WhatsAppLink } from "./whatsapp-link";

export function MobileContactBar() {
  return (
    <aside
      aria-label="Contato rápido"
      className="mobile-contact-bar fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 px-5 pb-[calc(.5rem+env(safe-area-inset-bottom))] pt-2 shadow-control backdrop-blur md:hidden"
    >
      <WhatsAppLink variant="primary" className="w-full">
        Falar com a Marlise
      </WhatsAppLink>
    </aside>
  );
}
