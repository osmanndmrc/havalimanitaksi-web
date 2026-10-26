import React from "react";
import Image from "next/image";
import { siteData } from "@/data/data";

export default function Hero() {
  return (
    <section className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-inverse-surface text-inverse-on-surface">
      {/* Optimized Next.js Hero LCP Image */}
      <Image
        src={siteData.seo.ogImage}
        alt={`${siteData.brand.name} Terminal Girişi ve Sarı Taksi Bekleme Durağı`}
        priority
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
        className="object-cover object-center"
        quality={80}
      />
      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0d0d0e]/95 via-[#0d0d0e]/90 to-[#0d0d0e]/60" />

      {/* Hero Content Grid */}
      <div className="relative z-10 p-6 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-primary-container text-on-primary-fixed shadow-md">
            <span className="material-symbols-outlined text-[18px]">local_taxi</span>
            <span className="text-xs sm:text-sm uppercase tracking-wider font-extrabold">
              {siteData.brand.slogan}
            </span>
          </div>

          {/* Headline & Subtitle */}
          <div className="flex flex-col gap-2.5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              {siteData.brand.name}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-surface-variant font-normal leading-relaxed">
              Terminal gelen yolcu kapısında sizi bekliyoruz. Havaalanına ve havaalanından tüm ilçe ve otellere 7/24 kesintisiz, güvenli ve konforlu transfer hizmeti.
            </p>
          </div>

          {/* Side-by-Side Main CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a
              className="flex items-center justify-center gap-2.5 h-13 min-h-[52px] px-6 rounded-xl bg-primary-container text-on-primary-fixed text-base font-bold shadow-[0_8px_20px_-4px_rgba(250,204,21,0.4)] hover:bg-yellow-400 active:scale-95 transition-all text-center"
              href={siteData.contact.phoneLandlineTel}
              aria-label={`Durak Nöbetçisini Ara: ${siteData.contact.phoneLandline}`}
            >
              <span className="material-symbols-outlined text-[22px]">phone_in_talk</span>
              <span>Hemen Ara: {siteData.contact.phoneLandline}</span>
            </a>
            <a
              className="flex items-center justify-center gap-2.5 h-13 min-h-[52px] px-6 rounded-xl bg-[#22C55E] text-white text-base font-bold shadow-[0_8px_20px_-4px_rgba(34,197,94,0.4)] hover:bg-[#1eb354] active:scale-95 transition-all text-center"
              href={`${siteData.contact.whatsappLink}?text=${encodeURIComponent(
                siteData.contact.whatsappDefaultText
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Taksi Çağır"
            >
              <span className="material-symbols-outlined text-[22px]">chat</span>
              <span>WhatsApp&apos;tan Hızlı Yaz</span>
            </a>
          </div>

          {/* Key Quick Badges */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/80 pt-1">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-tertiary-container">verified</span>
              {siteData.brand.license}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-tertiary-container">speed</span>
              Kapıda 0 Dakika Bekleme
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-tertiary-container">credit_card</span>
              Temassız Kart Geçerli
            </span>
          </div>
        </div>

        {/* Right Column (5 cols): Live Airport Dispatch Status Dashboard */}
        <div className="lg:col-span-5 bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 flex flex-col gap-4 text-white shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-tertiary-container animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider text-tertiary-fixed">
                7/24 Canlı Nöbetçi Filo
              </span>
            </div>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/15 font-semibold">
              {siteData.brand.airportIata} Terminali
            </span>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center justify-between py-1">
              <span className="text-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary-container">meeting_room</span>
                Buluşma Noktası
              </span>
              <span className="font-bold text-white text-right">{siteData.location.terminalProximity}</span>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="text-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary-container">directions_car</span>
                Hazır Araç Tipi
              </span>
              <span className="font-bold text-white text-right">Standart Sarı Taksi</span>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="text-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary-container">flight</span>
                Rötar Takibi
              </span>
              <span className="font-bold text-tertiary-fixed text-right">Ücretsiz Bekleme</span>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="text-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary-container">point_of_sale</span>
                Ödeme Yöntemi
              </span>
              <span className="font-bold text-white text-right">Kredi Kartı / Nakit</span>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-[11px] text-white/70">Durak Nöbetçi Telefonu</span>
              <span className="text-lg font-extrabold tracking-wide text-white">
                {siteData.contact.phoneLandline}
              </span>
            </div>
            <a
              href={siteData.contact.phoneLandlineTel}
              aria-label={`Durak Nöbetçisine Bağlan: ${siteData.contact.phoneLandline}`}
              className="px-4 py-2 rounded-xl bg-primary-container text-on-primary-fixed text-xs sm:text-sm font-bold shadow-md hover:bg-yellow-400 active:scale-95 transition-all flex items-center gap-1.5 shrink-0"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              <span>Bağlan</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
