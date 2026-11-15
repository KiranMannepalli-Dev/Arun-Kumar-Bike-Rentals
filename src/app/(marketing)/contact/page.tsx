import { Metadata } from 'next';
import ContactContent from './ContactContent';
import { SITE_CONFIG } from '@/config/site';
import { buildBreadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact Winev Bike Rentals Hyderabad | WhatsApp & Location',
  description: `Contact ${SITE_CONFIG.name} in Saroor Nagar East, Hyderabad. Call ${SITE_CONFIG.phoneDisplay}, message directly on WhatsApp, or visit us for electric bike & scooter rentals from ₹35/hr.`,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Winev Bike Rentals Hyderabad',
    description: `Instant WhatsApp booking (${SITE_CONFIG.phoneDisplay}) and pickup location in Saroor Nagar East, Hyderabad.`,
    url: `${SITE_CONFIG.url}/contact`,
  },
};

export default function ContactPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      url: `${SITE_CONFIG.url}/contact`,
      name: `Contact ${SITE_CONFIG.name}`,
      mainEntity: { '@id': `${SITE_CONFIG.url}/#organization` },
    },
    buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactContent />
    </>
  );
}
