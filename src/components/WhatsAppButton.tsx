"use client";

import { SITE_CONFIG } from "@/config/site";

/** Floating WhatsApp contact button fixed to the bottom-right side of the viewport. */
export function WhatsAppButton() {
  const message =
    "Hello Winev! I would like to enquire about renting an electric scooter in Hyderabad.";
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 inline-flex h-11 sm:h-11 w-11 sm:w-auto items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white sm:px-5 shadow-lg shadow-[#25D366]/35 border border-white/25 transition-all duration-200 hover:scale-105 active:scale-95"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 shrink-0"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4.37 16.27A9 9 0 1 1 7.23 19.13L3.3 20.5Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.3 8.6c.2-.3.5-.3.8-.1l1.1.9c.2.2.3.5.1.8l-.5.7c.5.9 1.2 1.6 2.1 2.1l.7-.5c.3-.2.6-.1.8.1l.9 1.1c.2.3.2.6-.1.8-.6.5-1.4.7-2.2.4-2.1-.7-3.9-2.5-4.6-4.6-.3-.8-.1-1.6.4-2.2z"
          fill="currentColor"
        />
      </svg>
      <span className="hidden sm:inline text-xs font-bold tracking-wide">
        WhatsApp Us
      </span>
    </a>
  );
}
