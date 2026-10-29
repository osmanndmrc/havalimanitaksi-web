import type { Metadata } from "next";
import { siteData } from "@/data/data";

export function absoluteUrl(path: string): string {
  return new URL(path, siteData.seo.siteUrl).toString();
}

// Sayfa kendi openGraph ayarını yazınca kök ayar ezildiği için
// paylaşım görseli (app/opengraph-image.tsx) burada açıkça ekleniyor.
const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: siteData.brand.name,
};

/** Alt sayfalar için ortak metadata: başlık, açıklama, canonical ve paylaşım bilgileri. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteData.brand.name,
      locale: "tr_TR",
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage.url],
    },
  };
}

/** WhatsApp linki, isteğe bağlı hazır mesajla */
export function whatsappUrl(text?: string): string {
  const base = siteData.contact.whatsappLink;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
