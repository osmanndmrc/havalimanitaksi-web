import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { siteData } from "@/data/data";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteData.seo.siteUrl),
  title: {
    default: siteData.seo.title,
    template: siteData.seo.titleTemplate,
  },
  description: siteData.seo.description,
  keywords: siteData.seo.keywords,
  authors: [{ name: siteData.brand.legalName, url: siteData.seo.siteUrl }],
  creator: siteData.brand.legalName,
  publisher: siteData.brand.legalName,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: siteData.seo.siteUrl,
  },
  openGraph: {
    title: siteData.seo.title,
    description: siteData.seo.description,
    url: siteData.seo.siteUrl,
    siteName: siteData.brand.name,
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: siteData.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteData.brand.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.seo.title,
    description: siteData.seo.description,
    images: [siteData.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "geo.region": siteData.location.geoRegion,
    "geo.placename": siteData.location.geoPlacename,
    "geo.position": `${siteData.location.latitude};${siteData.location.longitude}`,
    ICBM: `${siteData.location.latitude}, ${siteData.location.longitude}`,
    "dc.language": "tr",
    "dc.creator": siteData.brand.name,
    "dc.title": siteData.seo.title,
    "place:location:latitude": String(siteData.location.latitude),
    "place:location:longitude": String(siteData.location.longitude),
    "business:contact_data:locality": siteData.location.district,
    "business:contact_data:region": siteData.location.city,
    "business:contact_data:postal_code": siteData.location.postalCode,
    "business:contact_data:country_name": siteData.location.country,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
  viewportFit: "cover",
  themeColor: siteData.seo.themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data: LocalBusiness / TaxiService
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["TaxiService", "LocalBusiness"],
    "@id": `${siteData.seo.siteUrl}/#taxiservice`,
    name: siteData.brand.name,
    alternateName: siteData.brand.legalName,
    legalName: siteData.brand.legalName,
    description: siteData.seo.description,
    url: siteData.seo.siteUrl,
    telephone: siteData.contact.phoneLandline,
    email: siteData.contact.email,
    priceRange: "₺₺",
    paymentAccepted: "Nakit, Kredi Kartı, Banka Kartı, Temassız Kart",
    currenciesAccepted: "TRY",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteData.location.address,
      addressLocality: siteData.location.district,
      addressRegion: siteData.location.city,
      postalCode: siteData.location.postalCode,
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteData.location.latitude,
      longitude: siteData.location.longitude,
    },
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
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    hasMap: siteData.location.googleMapsLink,
    sameAs: [siteData.location.googleMapsLink],
    areaServed: siteData.regions.map((region) => ({
      "@type": "Place",
      name: `${region}, Kahramanmaraş`,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteData.seo.rating.ratingValue,
      bestRating: siteData.seo.rating.bestRating,
      worstRating: siteData.seo.rating.worstRating,
      ratingCount: siteData.seo.rating.ratingCount,
    },
    review: siteData.reviews.map((rev) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: rev.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(rev.rating),
        bestRating: "5",
      },
      reviewBody: rev.comment,
      datePublished: rev.date,
    })),
  };

  // Schema.org Structured Data: FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <html lang="tr" className={`h-full ${plusJakartaSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        {/* Structured Data: LocalBusiness & TaxiService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {/* Structured Data: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body className="bg-surface text-on-surface antialiased flex flex-col min-h-full selection:bg-primary-container selection:text-on-primary-fixed">
        {children}
      </body>
    </html>
  );
}
