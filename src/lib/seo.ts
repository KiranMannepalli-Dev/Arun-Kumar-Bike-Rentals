import { SITE_CONFIG } from "@/config/site";

export interface FaqEntry {
  question: string;
  answer: string;
}

export const HOME_FAQ_ITEMS: FaqEntry[] = [
  {
    question: "How do I rent a bike in Hyderabad with Winev?",
    answer:
      "Renting a bike in Hyderabad is simple: 1) Pick your hourly, daily, weekly, or monthly plan online, 2) Click 'Book via WhatsApp' to connect with us at 090148 27770, and 3) Bring your original Driving License and Aadhaar Card to our Saroor Nagar pickup location. Your sanitized scooter is ready to ride in minutes.",
  },
  {
    question: "What is the cost of bike rentals in Hyderabad?",
    answer:
      "Winev offers Hyderabad's most affordable bike rental rates: Hourly rentals start from ₹35/hr (min. 12 hrs), Daily 24-hr rentals are ₹449, Weekly rentals are ₹2,199 (our most popular plan), and Monthly commuter rentals are ₹8,799. Fast charging support is included.",
  },
  {
    question: "Is there a security deposit for bike rentals?",
    answer:
      "Yes, we maintain an industry-low refundable security deposit of just ₹2,000 for all premium electric bike and scooter rentals, refunded immediately upon vehicle return.",
  },
  {
    question: "What documents are required to rent a two-wheeler in Hyderabad?",
    answer:
      "You need an original Driving License, Aadhaar Card or PAN Card, and proof of local address (utility bill, rental agreement, or company ID). Students can show a college ID for special rates.",
  },
  {
    question: "Can I rent a bike in Hyderabad for daily office commute or delivery work?",
    answer:
      "Yes! Our weekly (₹2,199) and monthly (₹8,799) plans are widely used by IT professionals commuting to Madhapur, Hitec City, and Gachibowli, as well as delivery riders seeking zero-petrol running costs.",
  },
  {
    question: "Which areas in Hyderabad do you serve?",
    answer:
      "We serve riders across all of Hyderabad and Secunderabad, with direct pickup near Saroor Nagar, LB Nagar, Dilsukhnagar, Kothapet, Uppal, Madhapur, and surrounding metro hubs.",
  },
];

export const FULL_FAQ_ITEMS: FaqEntry[] = [
  ...HOME_FAQ_ITEMS,
  {
    question: "What are the performance specs of the rental scooters?",
    answer: `Our premium VIDA VX2 Plus electric fleet offers a certified range of up to ${SITE_CONFIG.stats.range} per charge, top speed of ${SITE_CONFIG.stats.speed}, dual removable batteries, and fast 0–80% charging in just 45 minutes.`,
  },
  {
    question: "Does the rental bike support mobile connectivity?",
    answer:
      "Yes! The VIDA VX2 Plus supports full Bluetooth mobile pairing with both Android and iPhone devices for turn-by-turn navigation, battery status, and trip metrics.",
  },
  {
    question: "What is included with every bike rental?",
    answer:
      "Every Winev rental includes a sanitized vehicle, a sanitized ISI-certified helmet, complimentary battery charging assistance, and 24/7 on-call customer support across Hyderabad.",
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
        alternateName: [
          "Winev Bike Rentals",
          "Winev Bike Rental Hyderabad",
          "Bike Rentals in Hyderabad",
          "Best Bike Rentals in Hyderabad",
          "Two Wheeler Rental Hyderabad",
          "EV Bike Rental Hyderabad",
          "Electric Scooter Rental Hyderabad",
        ],
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
          name: "Bike Rentals & EV Scooter Rental Plans Hyderabad",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Hourly Bike Rental in Hyderabad (From ₹35/hr, Min. 12 Hours)",
              price: "35",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url: `${SITE_CONFIG.url}/#rental-plans`,
            },
            {
              "@type": "Offer",
              name: "Daily Bike Rental in Hyderabad (₹449/day - 24 Hours)",
              price: "449",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url: `${SITE_CONFIG.url}/#rental-plans`,
            },
            {
              "@type": "Offer",
              name: "Weekly Bike Rental in Hyderabad (₹2,199/week - Most Popular)",
              price: "2199",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url: `${SITE_CONFIG.url}/#rental-plans`,
            },
            {
              "@type": "Offer",
              name: "Monthly Bike Rental in Hyderabad (₹8,799/month - Best Commuter Plan)",
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
        name: "VIDA VX2 Plus Electric Bike & Scooter Rental in Hyderabad",
        description:
          "Best bike rentals in Hyderabad. Rent the VIDA VX2 Plus electric scooter & two wheeler starting from ₹35/hr, ₹449/day, ₹2,199/week, or ₹8,799/month across Saroor Nagar, LB Nagar, Dilsukhnagar, and all Hyderabad. 80 km/h speed, 100 km range, 45-min fast charging, Android & iPhone app connectivity, and ₹2,000 refundable deposit.",
        image: [
          `${SITE_CONFIG.url}/Bikes/Scooter png 1.jpg`,
          `${SITE_CONFIG.url}/Bikes/Scooter png 2.png`,
          `${SITE_CONFIG.url}/Bikes/Scooter png 3.png`,
        ],
        brand: {
          "@type": "Brand",
          name: "VIDA",
        },
        category: "Bike Rental & Two Wheeler Rental in Hyderabad",
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

