import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FaqAccordion from "@/components/FaqAccordion";
import ContactSection from "@/components/ContactSection";
import JsonLd from "@/components/JsonLd";
import { siteData } from "@/data/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Sıkça Sorulan Sorular",
  description:
    "Kahramanmaraş Havaalanı taksi hakkında merak edilenler: durak nerede, ücret nasıl hesaplanır, rötar olursa ne olur, kartla ödeme ve bagaj kapasitesi.",
  path: "/sss",
});

export default function SssPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <PageHeader
        crumbs={[{ name: "Sıkça Sorulan Sorular", path: "/sss" }]}
        eyebrow="Merak Edilenler"
        title="Kahramanmaraş Havaalanı Taksi: Sıkça Sorulan Sorular"
        description="Durak yeri, ücretlendirme, rötar, ödeme ve bagaj hakkında en çok sorulan soruların cevapları."
      />

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7">
          <FaqAccordion title="Tüm sorular" />
        </div>
        <div className="lg:col-span-5">
          <ContactSection />
        </div>
      </section>
    </>
  );
}
