import { Metadata } from 'next';
import AboutContent from './AboutContent';
import { SITE_CONFIG } from '@/config/site';
import { buildBreadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About Winev Scooter Rental Hyderabad | Our Journey & Team',
  description: 'Founded in 2025 in Hyderabad, Winev Scooter Rental (Ashwin Traders) provides affordable, GPS-tracked electric scooter rentals across Saroor Nagar, LB Nagar, and Hyderabad.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Winev Scooter Rental Hyderabad',
    description: 'Meet the founders and operations team behind Hyderabad’s 4.9★ rated electric scooter rental fleet.',
    url: `${SITE_CONFIG.url}/about`,
  },
};

export default function AboutPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      url: `${SITE_CONFIG.url}/about`,
      name: `About ${SITE_CONFIG.name}`,
      mainEntity: { '@id': `${SITE_CONFIG.url}/#organization` },
    },
    buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutContent />
    </>
  );
}
