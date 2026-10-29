import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import LocationSection from "@/components/LocationSection";
import { siteData } from "@/data/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "İletişim ve Taksi Numarası",
  description: `Kahramanmaraş Havaalanı taksi numarası: ${siteData.contact.phoneLandline}. WhatsApp ile 7/24 taksi çağırın veya rezervasyon yapın. Durak adresi ve harita.`,
  path: "/iletisim",
});

export default function IletisimPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "İletişim", path: "/iletisim" }]}
        eyebrow="7/24 Ulaşabilirsiniz"
        title="Kahramanmaraş Havaalanı Taksi İletişim"
        description={`Durak nöbetçimize ${siteData.contact.phoneLandline} numarasından veya WhatsApp üzerinden günün her saati ulaşabilirsiniz.`}
      />

      <ContactSection />

      <LocationSection />
    </>
  );
}
