"use client";
import { trackEvent } from "@/lib/analytics";
import { siteContactMessage, whatsappUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl(siteContactMessage())}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Cred Marvi pelo WhatsApp"
      title="Falar pelo WhatsApp"
      onClick={() => trackEvent("whatsapp_click", { location: "floating" })}
      className="fixed bottom-5 right-5 z-[60] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_rgba(0,0,0,.25)] transition hover:scale-105 hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 fill-current"
        aria-hidden="true"
      >
        <path d="M16.03 3a12.84 12.84 0 0 0-11 19.47L3 29l6.72-1.98A12.96 12.96 0 1 0 16.03 3Zm0 23.74c-1.98 0-3.91-.54-5.59-1.56l-.4-.24-3.99 1.17 1.2-3.88-.26-.4a10.68 10.68 0 1 1 9.04 4.91Zm5.86-8.01c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.72.16-.21.32-.82 1.05-1.01 1.26-.18.22-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59a9.62 9.62 0 0 1-1.78-2.21c-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.98-2.38-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.42 4.8.76.32 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.17-1.53.26-.75.26-1.4.18-1.53-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
