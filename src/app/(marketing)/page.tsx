import { Metadata } from 'next';
import HomeContent from './HomeContent';
import { SITE_CONFIG } from '@/config/site';
import { buildHomeJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Bike Rentals in Hyderabad | Winev - #1 EV Bike & Scooter Rental from ₹35/hr',
  },
  description:
    'Best bike rentals in Hyderabad from ₹35/hr, ₹449/day, or ₹2,199/week. Rent premium electric bikes and scooters with 110 km range, 80 km/h top speed, minimal deposit, and instant WhatsApp booking across all Hyderabad localities.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bike Rentals in Hyderabad | Winev - #1 EV Bike & Scooter Rental',
    description:
      'Rent the VIDA VX2 Plus EV bike & scooter in Hyderabad from ₹35/hr. 110 km range, 80 km/h top speed, 45-min fast charging, and minimal ₹2,000 refundable deposit.',
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