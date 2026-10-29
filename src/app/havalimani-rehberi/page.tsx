import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import LocationSection from "@/components/LocationSection";
import FlightAlertBanner from "@/components/FlightAlertBanner";
import { siteData } from "@/data/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Havaalanı Taksi Durağı Nerede? Yolcu Rehberi",
  description:
    "Kahramanmaraş Havaalanı (KCM) taksi durağı gelen yolcu çıkışının 15 metre karşısında. Terminalde taksiyi nasıl bulacağınızı ve havaalanına ne zaman gitmeniz gerektiğini öğrenin.",
  path: "/havalimani-rehberi",
});

const tips = [
  {
    icon: "flight_land",
    title: "İnişten sonra",
    desc: "Bagajınızı aldıktan sonra gelen yolcu çıkışından dışarı çıkın. Resmi sarı taksiler kapının karşısındaki bekleme şeridinde sıradadır.",
  },
  {
    icon: "flight_takeoff",
    title: "Havaalanına giderken",
    desc: "İç hat uçuşlarında kalkıştan en az 1,5-2 saat önce havaalanında olmanızı öneririz. Taksi rezervasyonunuzu buna göre planlayın.",
  },
  {
    icon: "update",
    title: "Rötar durumunda",
    desc: "Rezervasyonda uçuş numaranızı paylaştıysanız iniş saatinizi takip ederiz. Rötar nedeniyle bekleme için ek ücret alınmaz.",
  },
  {
    icon: "dark_mode",
    title: "Gece inişleri",
    desc: "Durağımız 7/24 açıktır. Gece geç saatte inen uçuşlarda da terminalde nöbetçi araç bulunur.",
  },
];

export default function HavalimaniRehberiPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Havalimanı Rehberi", path: "/havalimani-rehberi" }]}
        eyebrow={`${siteData.brand.airportName} (${siteData.brand.airportIata})`}
        title="Kahramanmaraş Havaalanı Taksi Durağı Nerede?"
        description="Uçaktan indikten sonra taksi aramakla vakit kaybetmeyin. Durağımızın yeri, terminalde izlemeniz gereken adımlar ve havaalanına gidişte dikkat etmeniz gerekenler bu sayfada."
      />

      <LocationSection />

      <section className="flex flex-col gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-on-surface px-1">Yolcular için pratik bilgiler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-xs flex gap-4"
            >
              <span className="material-symbols-outlined text-primary text-[28px] shrink-0">{tip.icon}</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold text-on-surface">{tip.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FlightAlertBanner />
    </>
  );
}
