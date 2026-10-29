import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import FaqAccordion from "@/components/FaqAccordion";
import DistrictGrid from "@/components/DistrictGrid";
import JsonLd from "@/components/JsonLd";
import { siteData } from "@/data/data";
import { districts, getDistrict } from "@/data/districts";
import { absoluteUrl, pageMetadata, whatsappUrl } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return districts.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const district = getDistrict(slug);
  if (!district) return {};
  return pageMetadata({
    title: `Havaalanı – ${district.name} Taksi Transferi`,
    description: district.metaDescription,
    path: `/transfer/${district.slug}`,
  });
}

export default async function DistrictPage({ params }: Props) {
  const { slug } = await params;
  const district = getDistrict(slug);
  if (!district) notFound();

  const path = `/transfer/${district.slug}`;
  const isIntercity = district.kind === "sehirlerarasi";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Havaalanı taksi transferi",
    name: `Kahramanmaraş Havaalanı – ${district.name} Taksi Transferi`,
    description: district.metaDescription,
    url: absoluteUrl(path),
    provider: { "@id": `${siteData.seo.siteUrl}/#taxiservice` },
    areaServed: {
      "@type": "Place",
      name: isIntercity ? district.name : `${district.name}, Kahramanmaraş`,
    },
  };

  const stats = [
    { icon: "straighten", label: "Yaklaşık mesafe", value: `${district.distanceKm} km` },
    { icon: "schedule", label: "Yaklaşık süre", value: district.duration },
    { icon: "nest_clock_farsight_analog", label: "Hizmet saatleri", value: "7/24" },
    {
      icon: "payments",
      label: "Ücret",
      value: isIntercity ? "Önceden bildirilir" : "Resmi taksimetre",
    },
  ];

  return (
    <>
      <JsonLd data={serviceSchema} />

      <PageHeader
        crumbs={[
          { name: "Transfer Bölgeleri", path: "/transfer" },
          { name: district.name, path },
        ]}
        eyebrow={isIntercity ? "Şehirlerarası Transfer" : "İlçe Transferi"}
        title={`Kahramanmaraş Havaalanı – ${district.name} Taksi`}
        description={district.intro}
      />

      {/* Özet bilgiler */}
      <section aria-label="Transfer özeti" className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="p-4 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-xs flex flex-col gap-1"
          >
            <span className="material-symbols-outlined text-primary text-[22px]">{s.icon}</span>
            <span className="text-xs text-secondary">{s.label}</span>
            <span className="text-base sm:text-lg font-extrabold text-on-surface">{s.value}</span>
          </div>
        ))}
      </section>

      {/* Hızlı iletişim */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a
          href={whatsappUrl(
            `Merhaba, Kahramanmaraş Havaalanı - ${district.name} arası taksi transferi için rezervasyon yaptırmak istiyorum.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="h-13 min-h-[52px] rounded-xl bg-[#22C55E] text-white font-bold text-base flex items-center justify-center gap-2 shadow-md hover:bg-[#1eb354] active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-[22px]">chat</span>
          {district.name} için WhatsApp&apos;tan Yaz
        </a>
        <a
          href={siteData.contact.phoneLandlineTel}
          className="h-13 min-h-[52px] rounded-xl bg-primary-container text-on-primary-fixed font-bold text-base flex items-center justify-center gap-2 shadow-md hover:bg-yellow-400 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-[22px]">call</span>
          Hemen Ara: {siteData.contact.phoneLandline}
        </a>
      </section>

      {/* Detaylı içerik */}
      <article className="rounded-3xl p-5 sm:p-8 bg-surface-container-lowest shadow-md border border-surface-container flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-on-surface">Güzergah ve yolculuk süresi</h2>
          <p className="text-sm sm:text-base text-secondary leading-relaxed">{district.route}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-on-surface">Bu transferi kimler tercih ediyor?</h2>
          <p className="text-sm sm:text-base text-secondary leading-relaxed">{district.useCase}</p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-on-surface">
            {district.name} içinde sık gidilen noktalar
          </h2>
          <ul className="flex flex-wrap gap-2">
            {district.dropOffs.map((place) => (
              <li
                key={place}
                className="px-3 py-1.5 rounded-lg bg-surface-container text-sm text-on-surface font-medium"
              >
                {place}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-on-surface">İki yönlü transfer</h2>
          <p className="text-sm sm:text-base text-secondary leading-relaxed">
            Havaalanına iniyorsanız terminal çıkışındaki resmi durağımızdan aracınıza binebilir ya da uçuş
            numaranızla önceden rezervasyon yaparak aracınızı hazır bulabilirsiniz. {district.fromName}{" "}
            havaalanına gidecekseniz uçuş saatinizi ve adresinizi iletin; sizi adresinizden alıp
            uçuşunuza yetiştirelim. Havaalanında nasıl buluşacağınızı{" "}
            <Link href="/havalimani-rehberi" className="font-bold text-primary underline">
              havalimanı rehberimizde
            </Link>{" "}
            bulabilirsiniz.
          </p>
        </div>
      </article>

      <FaqAccordion faqs={district.faqs} title={`${district.name} transferi hakkında sorular`} />

      <DistrictGrid title="Diğer transfer bölgeleri" excludeSlug={district.slug} />
    </>
  );
}
