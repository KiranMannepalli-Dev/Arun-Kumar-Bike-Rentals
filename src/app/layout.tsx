import type {Metadata} from 'next';
import {SITE_CONFIG} from '@/config/site';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  applicationName: SITE_CONFIG.name,
  category: 'transportation',
  alternates: {
    canonical: '/',
  },
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.legalName,
  other: {
    'geo.region': 'IN-TG',
    'geo.placename': `${SITE_CONFIG.address.area}, ${SITE_CONFIG.address.city}`,
    'geo.position': `${SITE_CONFIG.coordinates.lat};${SITE_CONFIG.coordinates.lng}`,
    ICBM: `${SITE_CONFIG.coordinates.lat}, ${SITE_CONFIG.coordinates.lng}`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: '/Second Logo for Winev.png',
        width: 1010,
        height: 594,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: ['/Second Logo for Winev.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { WhatsAppButton } from '@/components/WhatsAppButton';
import Script from 'next/script';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-body antialiased bg-background text-foreground min-h-screen">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWJJSWPW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-MWJJSWPW"
          strategy="afterInteractive"
        />
        {children}
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
