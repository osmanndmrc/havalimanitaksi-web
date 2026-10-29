import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import DistrictGrid from "@/components/DistrictGrid";
import FlightAlertBanner from "@/components/FlightAlertBanner";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "İlçe ve Şehirlerarası Taksi Transferi",
  description:
    "Kahramanmaraş Havaalanı'ndan Dulkadiroğlu, Onikişubat, Elbistan, Afşin, Göksun, Türkoğlu, Pazarcık ve diğer ilçelere; Gaziantep ve Adana'ya 7/24 taksi transferi.",
  path: "/transfer",
});

export default function TransferPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Transfer Bölgeleri", path: "/transfer" }]}
        eyebrow="Kapıdan Kapıya"
        title="Kahramanmaraş Havaalanı İlçe ve Şehirlerarası Transfer"
        description="Terminal çıkışından Kahramanmaraş'ın tüm ilçelerine, ayrıca Gaziantep ve Adana'ya taksi transferi yapıyoruz. Gideceğiniz yeri seçerek mesafe, yaklaşık süre ve güzergah bilgilerine ulaşabilirsiniz."
      />

      <DistrictGrid title="Gideceğiniz yeri seçin" />

      <section className="rounded-3xl p-5 sm:p-8 bg-surface-container-lowest shadow-md border border-surface-container flex flex-col gap-3">
        <h2 className="text-xl font-bold text-on-surface">Ücretlendirme nasıl yapılır?</h2>
        <p className="text-sm text-secondary leading-relaxed">
          Şehir içi ve ilçe yolculuklarında ücret, araçtaki mühürlü resmi taksimetreye göre hesaplanır.
          Uzun mesafe ve şehirlerarası transferlerde ücret bilgisini rezervasyon sırasında önceden paylaşırız.
          Ödemeyi nakit veya araçtaki temassız POS cihazıyla kartla yapabilirsiniz.
        </p>
      </section>

      <FlightAlertBanner />
    </>
  );
}
