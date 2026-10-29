import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import WhyUs from "@/components/WhyUs";
import { siteData } from "@/data/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Hakkımızda",
  description: `${siteData.brand.name}: ${siteData.brand.airportName} gelen yolcu terminalindeki resmi taksi durağı. 7/24 hizmet, resmi taksimetre ve deneyimli şoför kadrosu.`,
  path: "/hakkimizda",
});

export default function HakkimizdaPage() {
  const { brand } = siteData;
  const facts = [
    { label: "İşletme", value: brand.legalName },
    { label: "Hizmet noktası", value: `${brand.airportName} (${brand.airportIata}) gelen yolcu terminali` },
    { label: "Kuruluş", value: String(brand.yearEstablished) },
    { label: "Çalışma saatleri", value: "7 gün 24 saat" },
  ];

  return (
    <>
      <PageHeader
        crumbs={[{ name: "Hakkımızda", path: "/hakkimizda" }]}
        eyebrow="Kurumsal"
        title={`${brand.name} Hakkında`}
        description={`${brand.airportName}'na inen ve havaalanından ayrılan yolculara terminal çıkışındaki resmi durağımızdan 7/24 taksi hizmeti veriyoruz.`}
      />

      <section className="rounded-3xl p-5 sm:p-8 bg-surface-container-lowest shadow-md border border-surface-container grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 flex flex-col gap-3">
          <h2 className="text-xl font-bold text-on-surface">Biz kimiz?</h2>
          <p className="text-sm sm:text-base text-secondary leading-relaxed">
            {brand.name}, {brand.airportName} gelen yolcu terminalinde hizmet veren taksi durağıdır.
            Uçuş saatlerinden bağımsız olarak gece gündüz terminalde nöbetçi araç bulundururuz; yolcularımız
            uçaktan indikten sonra beklemeden yolculuğa başlar.
          </p>
          <p className="text-sm sm:text-base text-secondary leading-relaxed">
            Şehir içi yolculuklarda mühürlü resmi taksimetre kullanırız. Kahramanmaraş&apos;ın tüm ilçelerine ve
            çevre illere transfer yapar, uzun mesafelerde ücret bilgisini önceden paylaşırız.
          </p>
        </div>
        <dl className="lg:col-span-5 grid grid-cols-1 gap-3">
          {facts.map((f) => (
            <div key={f.label} className="p-4 rounded-2xl bg-surface-container-low border border-surface-container">
              <dt className="text-xs text-secondary">{f.label}</dt>
              <dd className="text-sm sm:text-base font-bold text-on-surface mt-0.5">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <WhyUs />
    </>
  );
}
