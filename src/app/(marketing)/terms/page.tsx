import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions for renting electric scooters with ${SITE_CONFIG.name} in Hyderabad.`,
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsAndConditionsPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Terms & Conditions", path: "/terms" },
  ]);

  return (
    <div className="pt-12 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <header className="py-6 md:py-8 text-center bg-zinc-50/80 border-b border-zinc-200">
        <div className="container">
          <h1 className="text-2xl md:text-3xl font-headline font-semibold text-zinc-950">Terms and <span className="text-primary">Conditions</span></h1>
          <p className="mt-2 text-sm text-zinc-600">Last Updated: November 2026</p>
        </div>
      </header>
      
      <section className="py-6 md:py-8 bg-white">
        <div className="container max-w-3xl mx-auto text-sm leading-relaxed text-zinc-700 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-primary [&_h2]:mt-6 [&_h2]:mb-2 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ul]:mb-3 [&_strong]:text-zinc-950 [&_a]:text-primary [&_a]:underline">
            <p>Welcome to {SITE_CONFIG.name}. By using our bike rental services, you agree to the following terms and conditions. Please read them carefully.</p>

            <h2>1. Eligibility</h2>
            <p>To rent a vehicle from {SITE_CONFIG.name}, you must be at least 18 years of age and possess a valid original Driving License as per Indian law. We reserve the right to refuse service to any person who does not meet our safety or verification criteria.</p>

            <h2>2. Documentation</h2>
            <p>The following documents are mandatory for verification at the time of pickup:</p>
            <ul>
                <li>Original Driving License (valid for the class of vehicle rented).</li>
                <li>Original Aadhaar Card or PAN Card for identification.</li>
                <li>Proof of local address in Hyderabad if required.</li>
            </ul>

            <h2>3. Security Deposit</h2>
            <p>A minimal refundable security deposit of ₹{SITE_CONFIG.stats.deposit} is required for all rentals. This deposit will be refunded in full upon the safe return of the vehicle in its original condition, subject to deduction for any damages, traffic violations, or late fees.</p>

            <h2>4. Rental Period and Late Fees</h2>
            <p>The rental period starts from the time of vehicle pickup. Late returns will be charged as per our standard hourly rates or an additional day price, depending on the delay duration.</p>

            <h2>5. Vehicle Use and Safety</h2>
            <p>The rider is responsible for following all traffic rules and regulations. The vehicle must only be used within the agreed-upon geographical limits. Over-speeding, reckless driving, or using the vehicle for commercial purposes without prior permission is strictly prohibited.</p>

            <h2>6. Maintenance and Damages</h2>
            <p>All vehicles are maintained to high standards. In the event of an accident or mechanical failure, the rider must inform {SITE_CONFIG.name} immediately. The rider is responsible for costs associated with damage caused by negligence or misuse.</p>

            <h2>7. Prohibited Uses</h2>
            <p>The vehicle shall not be used for racing, towing, or any illegal activities. Carrying more than the permitted number of passengers is strictly forbidden.</p>

            <h2>8. Contact Information</h2>
            <p>For any queries regarding these terms, please contact us at <a href={`mailto:${SITE_CONFIG.email}`} className="break-all">{SITE_CONFIG.email}</a> or call us at {SITE_CONFIG.phoneDisplay}.</p>
        </div>
      </section>
    </div>
  );
}
