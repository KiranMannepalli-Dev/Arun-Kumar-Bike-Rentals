import { Metadata } from 'next';
import HomeContent from './HomeContent';
import { SITE_CONFIG } from '@/config/site';
import { buildHomeJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'VIDA VX2 Plus Electric Scooter Rentals in Hyderabad from ₹35/hr',
  description:
    'Rent the VIDA VX2 Plus electric scooter in Hyderabad starting at ₹35/hr (Daily ₹449, Weekly ₹2,199, Monthly ₹8,799). 100 km range, 80 km/h speed, ₹2,000 refundable deposit, Android & iPhone app support, and instant WhatsApp booking.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'VIDA VX2 Plus Electric Scooter Rentals in Hyderabad from ₹35/hr',
    description:
      'Rent in 6 colors with 100 km range, 80 km/h speed, 45-min fast charging, and ₹2,000 refundable deposit. Book instantly on WhatsApp.',
    url: SITE_CONFIG.url,
    type: 'website',
  },
};

export default function Home() {
  const jsonLd = buildHomeJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContent />
    </>
  );
}