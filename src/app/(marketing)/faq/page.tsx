import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SITE_CONFIG } from "@/config/site";
import { FULL_FAQ_ITEMS, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
    title: "EV Scooter Rental FAQ Hyderabad | Documents, Deposit & Pricing",
    description: "Answers to common questions about Winev electric scooter rentals in Hyderabad: required Driving License & ID, ₹2,000 refundable deposit, 45-min fast charging, and weekly/monthly plans.",
    alternates: {
        canonical: "/faq",
    },
    openGraph: {
        title: "EV Scooter Rental FAQ Hyderabad | Winev Scooter Rental",
        description: "Quick answers on required documents, ₹2,000 refundable deposit, charging speed, and WhatsApp booking.",
        url: `${SITE_CONFIG.url}/faq`,
    },
};

export default function FaqPage() {
    const jsonLd = [
        buildFaqJsonLd(FULL_FAQ_ITEMS, `${SITE_CONFIG.url}/faq`),
        buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
        ]),
    ];

    return (
        <div className="pt-12 bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <header className="py-5 md:py-6 text-center bg-zinc-50/80 border-b border-zinc-200">
                <div className="container">
                    <h1 className="text-lg md:text-2xl font-semibold text-zinc-950">Frequently Asked <span className="text-primary">Questions</span></h1>
                    <p className="mt-1.5 text-xs text-zinc-600 max-w-2xl mx-auto">
                        Find answers to common questions about our EV scooter rental service.
                    </p>
                </div>
            </header>

            <section className="py-6 md:py-8 bg-white">
                <div className="container max-w-2xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {FULL_FAQ_ITEMS.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-zinc-200">
                                <AccordionTrigger className="text-left text-xs sm:text-sm text-zinc-950 hover:text-primary hover:no-underline py-3 font-medium">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-xs sm:text-sm text-zinc-600 leading-relaxed pb-3">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </div>
    );
}
