import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { siteData } from "@/data/data";
import { districts } from "@/data/districts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/JsonLd";
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
    canonical: "/",
  },
  openGraph: {
    title: siteData.seo.title,
    description: siteData.seo.description,
    url: "/",
    siteName: siteData.brand.name,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.seo.title,
    description: siteData.seo.description,
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
    areaServed: districts.map((d) => ({
      "@type": "Place",
      name: d.kind === "ilce" ? `${d.name}, Kahramanmaraş` : d.name,
    })),
  };

  // Schema.org Structured Data: WebSite
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteData.seo.siteUrl}/#website`,
    name: siteData.brand.name,
    url: siteData.seo.siteUrl,
    inLanguage: "tr-TR",
    publisher: { "@id": `${siteData.seo.siteUrl}/#taxiservice` },
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
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="bg-surface text-on-surface antialiased flex flex-col min-h-full selection:bg-primary-container selection:text-on-primary-fixed">
        <Header />
        <main className="flex flex-col relative w-full pt-20 sm:pt-24 pb-28 md:pb-16 bg-surface px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-1">
          <div className="flex flex-col w-full gap-y-10 sm:gap-y-12">
            {children}
            <Footer />
          </div>
        </main>
        <BottomNav />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
