import { SITE_CONFIG } from "@/config/site";

export interface QuickMessagePreset {
  id: string;
  label: string;
  message: string;
}

/** Pre-ready enquiry message options shared by the Contact page and Enquiry modal. */
export const PRE_READY_ENQUIRY_MESSAGES: QuickMessagePreset[] = [
  {
    id: "hourly-daily",
    label: "Hourly / Daily Ride",
    message:
      "Hi Winev! I would like to rent the VIDA VX2 Plus on an Hourly (₹35/hr) or Daily (₹449/day) plan. Please share availability.",
  },
  {
    id: "weekly",
    label: "Weekly Plan (₹2,199)",
    message:
      "Hi Winev! I want to book the VIDA VX2 Plus on the Weekly Rental Plan (₹2,199/week). Is it available for pickup today?",
  },
  {
    id: "monthly",
    label: "Monthly Plan (₹8,799)",
    message:
      "Hi Winev! I am looking for the Monthly Rental Plan (₹8,799/month) on the VIDA VX2 Plus. Please share availability and pickup steps.",
  },
  {
    id: "docs-deposit",
    label: "Documents & Deposit",
    message:
      "Hi Winev! Please share the required original documents, ₹2,000 refundable security deposit details, and Saroor Nagar pickup timings.",
  },
];

/** Quick rental duration options for booking confirmation modals. */
export const RENTAL_PLAN_OPTIONS = [
  "Hourly (₹35/hr)",
  "Daily (₹449/day)",
  "Weekly (₹2,199/week)",
  "Monthly (₹8,799/month)",
] as const;

/** Strips spaces/punctuation and validates an Indian 10-digit mobile number (with optional +91 prefix). */
export function normalizeIndianPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) {
    return digits.slice(2);
  }
  return digits;
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    message
  )}`;
}

/** Opens the pre-filled WhatsApp chat synchronously inside a user click/submit event. */
export function openWhatsAppChat(message: string): void {
  const url = buildWhatsAppUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
}

