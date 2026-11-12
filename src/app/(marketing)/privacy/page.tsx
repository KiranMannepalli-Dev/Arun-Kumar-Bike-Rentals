import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_CONFIG.name}. Learn how we collect, verify, and safeguard your rental information.`,
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy" },
  ]);

  return (
    <div className="pt-12 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <header className="py-6 md:py-8 text-center bg-zinc-50/80 border-b border-zinc-200">
        <div className="container">
          <h1 className="text-2xl md:text-3xl font-headline font-semibold text-zinc-950">Privacy <span className="text-primary">Policy</span></h1>
          <p className="mt-2 text-sm text-zinc-600">Last Updated: November 2026</p>
        </div>
      </header>
      
      <section className="py-6 md:py-8 bg-white">
        <div className="container max-w-3xl mx-auto text-sm leading-relaxed text-zinc-700 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-primary [&_h2]:mt-6 [&_h2]:mb-2 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ul]:mb-3 [&_strong]:text-zinc-950 [&_a]:text-primary [&_a]:underline">
            <p>Welcome to {SITE_CONFIG.name}. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our bike rental services.</p>

            <h2>1. Information We Collect</h2>
            <p>We may collect personal information from you in a variety of ways, including, but not limited to, when you rent a bike, contact us, or interact with our services. The information we may collect includes:</p>
            <ul>
                <li><strong>Personal Identification Information:</strong> Name, email address, phone number, mailing address.</li>
                <li><strong>Verification Information:</strong> Government-issued ID (such as a driving license or Aadhaar card) for verification purposes.</li>
                <li><strong>Transactional Information:</strong> Details about rentals you make, including date, time, and payment information.</li>
                <li><strong>Device Information:</strong> We may collect information about the device you use to access our services, including IP address, browser type, and operating system.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including to:</p>
            <ul>
                <li>Provide, operate, and maintain our services.</li>
                <li>Process your transactions and manage your rentals.</li>
                <li>Improve, personalize, and expand our services.</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the service.</li>
                <li>For compliance purposes, including enforcing our Terms of Service, or other legal rights.</li>
            </ul>

            <h2>3. Sharing Your Information</h2>
            <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.</p>

            <h2>4. Security of Your Information</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

            <h2>5. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

            <h2>6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href={`mailto:${SITE_CONFIG.email}`} className="break-all">{SITE_CONFIG.email}</a>.</p>
        </div>
      </section>
    </div>
  );
}
