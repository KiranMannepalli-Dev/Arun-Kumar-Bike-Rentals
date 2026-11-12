import { SITE_CONFIG } from "@/config/site";

export interface FaqEntry {
  question: string;
  answer: string;
}

export const HOME_FAQ_ITEMS: FaqEntry[] = [
  {
    question: "What documents are required?",
    answer:
      "A valid original Driving License, Aadhaar or PAN Card, and a proof of local address (utility bill/rental agreement).",
  },
  {
    question: "Is there a security deposit?",
    answer:
      "Yes, a minimal refundable deposit of ₹2,000 is required for all premium electric bike rentals.",
  },
  {
    question: "What is the charging speed?",
    answer:
      "Our fleet supports fast charging at both Ather and Vida power stations, reaching 80% in just 45 minutes.",
  },
  {
    question: "Do you offer weekly rates?",
    answer:
      "Yes! Weekly rentals start at just ₹2,199, offering a significant discount for long-term commuters.",
  },
];

export const FULL_FAQ_ITEMS: FaqEntry[] = [
  {
    question: "What documents are required to rent a scooter?",
    answer:
      "To rent an electric scooter, you must provide a valid original Driving License, an Aadhaar Card or PAN Card, and a valid Local Address Proof (such as a utility bill or rental agreement).",
  },
  {
    question: "Is there a security deposit?",
    answer: `Yes, we maintain a minimal security deposit of ₹${SITE_CONFIG.stats.deposit} to ensure the safety and maintenance of our premium electric fleet. This is fully refundable upon the safe return of the vehicle.`,
  },
  {
    question: "What are the performance specs of the scooters?",
    answer: `Our premium EV fleet offers a range of up to ${SITE_CONFIG.stats.range} on a full charge and a top speed of ${SITE_CONFIG.stats.speed}. Fast charging up to 80% is supported in around 45 minutes.`,
  },
  {
    question: "Do you offer weekly or long-term rentals?",
    answer: `Absolutely! We offer weekly rental rates starting at ₹${SITE_CONFIG.stats.weeklyRent} and monthly commuter plans. This is ideal for daily commuters and riders looking for an affordable long-term mobility solution.`,
  },
  {
    question: "What is the booking process?",
    answer: `You can book easily through WhatsApp. Just send us a message to our primary number (${SITE_CONFIG.phoneDisplay}) or our secondary line (${SITE_CONFIG.phone2Display}), and our team will guide you through the instant booking process.`,
  },
];

export const RENTAL_REVIEWS = [
  {
    author: "Mothilal Dharavath",
    text: "The best service in Hyderabad. Really good response and great communication with customers. Highly recommended!",
  },
  {
    author: "Pavanchowdary",
    text: "Smooth ride, low cost, best EV rental experience in the city. Truly value for money.",
  },
  {
    author: "PASUNURI RAMU",
    text: "My friend took a scooty on rent here. They have all new scooties and they even provided free charging! Excellent service.",
  },
  {
    author: "Lala",
    text: "Great experience with Winev. Their services are very professional and the cost is very friendly for students and professionals alike.",
  },
  {
    author: "Santosh P",
    text: "Good rental service available all over Hyderabad and Telangana. The bikes are well-maintained and reliable.",
  },
  {
    author: "Dharavath Anil",
    text: "The best and most friendly service in Hyderabad. The staff is very cooperative and helpful throughout the process.",
  },
];

const ENTITY_SAME_AS = [
  SITE_CONFIG.instagram,
  SITE_CONFIG.googleMapsUrl,
];

const ORGANIZATION_ID = `${SITE_CONFIG.url}/#organization`;
const WEBSITE_ID = `${SITE_CONFIG.url}/#website`;

/** Builds a BreadcrumbList JSON-LD object for secondary marketing and legal pages. */
export function buildBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.path}`,
    })),
  };
}

/** Builds a FAQPage JSON-LD block that answers common search & AI engine questions verbatim. */
export function buildFaqJsonLd(faqs: FaqEntry[], pageUrl: string = SITE_CONFIG.url) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** Full structured graph for the home page: LocalBusiness, WebSite, Rental Product, Offers & FAQ. */
export function buildHomeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "AutomotiveBusiness"],
        "@id": ORGANIZATION_ID,
        name: SITE_CONFIG.name,
        legalName: SITE_CONFIG.legalName,
        alternateName: ["Winev Bike Rentals", "Winev EV Rentals Hyderabad"],
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}/Second Logo for Winev.png`,
        image: `${SITE_CONFIG.url}/Bikes/Scooter png 1.jpg`,
        telephone: `+${SITE_CONFIG.phone}`,
        email: SITE_CONFIG.email,
        foundingDate: "2025",
        priceRange: "₹35 - ₹8,799",
        currenciesAccepted: "INR",
        paymentAccepted: "UPI, Cash, Bank Transfer",
        hasMap: SITE_CONFIG.googleMapsUrl,
        sameAs: ENTITY_SAME_AS,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.area}`,
          addressLocality: SITE_CONFIG.address.city,
          addressRegion: SITE_CONFIG.address.state,
          postalCode: SITE_CONFIG.address.pin,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE_CONFIG.coordinates.lat,
          longitude: SITE_CONFIG.coordinates.lng,
        },
        areaServed: SITE_CONFIG.serviceAreas.map((area) => ({
          "@type": "Place",
          name: `${area}, Hyderabad, Telangana`,
        })),
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Sunday",
            opens: "08:00",
            closes: "13:00",
          },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: `+${SITE_CONFIG.phone}`,
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["English", "Telugu", "Hindi"],
          },
          {
            "@type": "ContactPoint",
            telephone: `+${SITE_CONFIG.phone2}`,
            contactType: "reservations",
            areaServed: "IN",
            availableLanguage: ["English", "Telugu", "Hindi"],
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: SITE_CONFIG.stats.rating,
          bestRating: "5",
          worstRating: "1",
          reviewCount: String(RENTAL_REVIEWS.length),
        },
        review: RENTAL_REVIEWS.map((r) => ({
          "@type": "Review",
          author: {
            "@type": "Person",
            name: r.author,
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody: r.text,
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Electric Scooter Rental Plans Hyderabad",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Hourly Electric Scooter Rental (Min. 12 Hours)",
              price: "35",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url: `${SITE_CONFIG.url}/#rental-plans`,
            },
            {
              "@type": "Offer",
              name: "Daily Electric Scooter Rental (24 Hours)",
              price: "449",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url: `${SITE_CONFIG.url}/#rental-plans`,
            },
            {
              "@type": "Offer",
              name: "Weekly Electric Scooter Rental",
              price: "2199",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url: `${SITE_CONFIG.url}/#rental-plans`,
            },
            {
              "@type": "Offer",
              name: "Monthly Electric Scooter Rental",
              price: "8799",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url: `${SITE_CONFIG.url}/#rental-plans`,
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        publisher: { "@id": ORGANIZATION_ID },
        creator: {
          "@type": "Organization",
          name: "Tekloria Solutions",
          url: SITE_CONFIG.developerUrl,
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "Product",
        "@id": `${SITE_CONFIG.url}/#vida-vx2-plus`,
        name: "VIDA VX2 Plus Electric Scooter Rental",
        description:
          "Available exclusively for hourly, daily, weekly, and monthly rentals in Hyderabad across 6 colors with 80 km/h top speed, 100 km range, 45-minute fast charging, Android & iPhone app compatibility, GPS tracking, and ₹2,000 refundable deposit.",
        image: [
          `${SITE_CONFIG.url}/Bikes/Scooter png 1.jpg`,
          `${SITE_CONFIG.url}/Bikes/Scooter png 2.png`,
          `${SITE_CONFIG.url}/Bikes/Scooter png 3.png`,
        ],
        brand: {
          "@type": "Brand",
          name: "VIDA",
        },
        category: "Electric Scooter Rental",
        color: [
          "Electric Cyan",
          "Crimson Red",
          "Sunset Orange",
          "Cobalt Blue",
          "Pearl White",
          "Stealth Black",
        ],
        additionalProperty: [
          { "@type": "PropertyValue", name: "Top Speed", value: "80 km/h" },
          { "@type": "PropertyValue", name: "Battery Range", value: "100 km / Charge" },
          { "@type": "PropertyValue", name: "Fast Charging", value: "45 min (0–80%)" },
          { "@type": "PropertyValue", name: "Mobile Compatibility", value: "Android & iPhone" },
          { "@type": "PropertyValue", name: "Security Deposit", value: "₹2,000 Refundable" },
        ],
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: "35",
          highPrice: "8799",
          offerCount: "4",
          availability: "https://schema.org/InStock",
          url: `${SITE_CONFIG.url}/#scooter-details`,
        },
      },
      buildFaqJsonLd(HOME_FAQ_ITEMS, SITE_CONFIG.url),
    ],
  };
}

