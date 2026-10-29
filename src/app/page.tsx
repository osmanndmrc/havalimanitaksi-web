import Link from "next/link";
import Hero from "@/components/Hero";
import DirectionChoices from "@/components/DirectionChoices";
import BookingForm from "@/components/BookingForm";
import WhyUs from "@/components/WhyUs";
import DistrictGrid from "@/components/DistrictGrid";
import FlightAlertBanner from "@/components/FlightAlertBanner";
import FaqAccordion from "@/components/FaqAccordion";
import { siteData } from "@/data/data";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero (sayfanın tek H1 başlığı burada) */}
      <Hero />

      {/* 2. Rezervasyon: yön seçimi ve hızlı form */}
      <section id="rezervasyon-alani" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch scroll-mt-24">
        <div className="lg:col-span-5 h-full">
          <DirectionChoices />
        </div>
        <div className="lg:col-span-7 h-full">
          <BookingForm />
        </div>
      </section>

      {/* 3. Transfer bölgeleri (ilçe sayfalarına bağlantılar) */}
      <DistrictGrid />

      {/* 4. Neden biz */}
      <WhyUs />

      {/* 5. Durak konumu kısa yönlendirme */}
      <section className="rounded-3xl p-5 sm:p-8 bg-surface-container-lowest shadow-md border border-surface-container grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-wider text-primary font-extrabold">
            Kolay Buluşma Noktası
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-on-surface">
            Taksi durağı terminalde nerede?
          </h2>
          <p className="text-sm text-secondary leading-relaxed">
            Durağımız gelen yolcu çıkış kapısının yaklaşık 15 metre karşısındadır.
            Bagajınızı aldıktan sonra kapıdan çıkın, sarı taksiler sizi sırada bekliyor.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row md:justify-end gap-3">
          <Link
            href="/havalimani-rehberi"
            className="h-12 px-5 rounded-xl bg-inverse-surface text-inverse-on-surface font-bold text-sm flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all"
          >
            <span className="material-symbols-outlined text-[20px] text-primary-container">map</span>
            Havalimanı Rehberi
          </Link>
          <Link
            href="/arac-ozellikleri"
            className="h-12 px-5 rounded-xl bg-surface-container text-on-surface font-bold text-sm flex items-center justify-center gap-2 hover:bg-surface-container-high transition-all"
          >
            <span className="material-symbols-outlined text-[20px] text-primary">directions_car</span>
            Araç Özellikleri
          </Link>
        </div>
      </section>

      {/* 6. Uçuş hatırlatma */}
      <FlightAlertBanner />

      {/* 7. Öne çıkan sorular */}
      <div className="flex flex-col gap-3">
        <FaqAccordion faqs={siteData.faqs.slice(0, 4)} title="Merak Edilen Sorular" />
        <Link href="/sss" className="self-start px-1 text-sm font-bold text-primary hover:underline">
          Tüm soruları gör →
        </Link>
      </div>
    </>
  );
}
