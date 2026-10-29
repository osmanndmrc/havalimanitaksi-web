import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import DirectionChoices from "@/components/DirectionChoices";
import BookingForm from "@/components/BookingForm";
import FlightAlertBanner from "@/components/FlightAlertBanner";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Online Taksi Rezervasyonu",
  description:
    "Kahramanmaraş Havaalanı taksi rezervasyonu: havaalanından veya havaalanına transferinizi WhatsApp üzerinden saniyeler içinde planlayın. Ön ödeme yok, 7/24 destek.",
  path: "/rezervasyon",
});

export default function RezervasyonPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Rezervasyon", path: "/rezervasyon" }]}
        eyebrow="Ön Ödemesiz · 7/24"
        title="Kahramanmaraş Havaalanı Taksi Rezervasyonu"
        description="Uçağınız iniyorsa ya da havaalanına yetişmeniz gerekiyorsa, yönünüzü seçip bilgilerinizi gönderin. Talebiniz WhatsApp üzerinden durak nöbetçimize iletilir ve onay mesajı alırsınız."
      />

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-5 h-full">
          <DirectionChoices />
        </div>
        <div className="lg:col-span-7 h-full">
          <BookingForm />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            icon: "edit_note",
            title: "1. Bilgileri girin",
            desc: "Yön, adres, tarih, saat ve varsa uçuş numaranızı yazın.",
          },
          {
            icon: "chat",
            title: "2. WhatsApp'tan gönderin",
            desc: "Talebiniz hazır mesaj olarak açılır, tek dokunuşla gönderirsiniz.",
          },
          {
            icon: "task_alt",
            title: "3. Onayınızı alın",
            desc: "Durak nöbetçimiz rezervasyonunuzu onaylar, aracınız zamanında hazır olur.",
          },
        ].map((step) => (
          <div
            key={step.title}
            className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-xs flex flex-col gap-2"
          >
            <span className="material-symbols-outlined text-primary text-[26px]">{step.icon}</span>
            <h2 className="text-base font-bold text-on-surface">{step.title}</h2>
            <p className="text-sm text-secondary leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </section>

      <FlightAlertBanner />
    </>
  );
}
