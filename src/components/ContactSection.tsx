import React from "react";
import { siteData } from "@/data/data";

export default function ContactSection() {
  return (
    <section
      id="iletisim"
      className="rounded-3xl p-5 sm:p-7 bg-surface-container-lowest shadow-md border border-surface-container flex flex-col justify-between gap-5 scroll-mt-24 h-full"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-fixed flex items-center justify-center">
          <span className="material-symbols-outlined text-[24px]">
            contact_support
          </span>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-on-surface">
            İletişim & Konum
          </h2>
          <span className="text-xs text-secondary">
            {siteData.brand.name} ({siteData.brand.airportIata}) Resmi Taksi Durağı
          </span>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="flex flex-col gap-3">
        <div className="p-4 rounded-2xl bg-surface-container-low border border-surface-container flex items-start gap-3.5">
          <span className="material-symbols-outlined text-primary text-[22px] mt-0.5 flex-shrink-0">
            place
          </span>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-bold text-on-surface">
              Durak Adresi
            </span>
            <span className="text-xs sm:text-sm text-secondary mt-0.5 leading-relaxed">
              {siteData.location.address}, {siteData.location.district} / {siteData.location.city}
            </span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-surface-container-low border border-surface-container flex items-start gap-3.5">
          <span className="material-symbols-outlined text-primary text-[22px] mt-0.5 flex-shrink-0">
            headset_mic
          </span>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-bold text-on-surface">
              Çağrı Merkezi & WhatsApp
            </span>
            <span className="text-sm sm:text-base text-on-surface font-extrabold mt-0.5">
              {siteData.contact.phoneLandline} / {siteData.contact.phoneMobile}
            </span>
            <span className="text-xs text-tertiary font-bold mt-1">
              ● {siteData.contact.workingHours}
            </span>
          </div>
        </div>
      </div>

      {/* Quick Call Buttons inside contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        <a
          className="h-12 rounded-xl bg-primary-container text-on-primary-fixed font-bold text-sm flex items-center justify-center gap-2 active:scale-95 hover:bg-yellow-400 transition-all shadow-sm"
          href={siteData.contact.phoneLandlineTel}
          aria-label={`Durak Sabit Tel Ara: ${siteData.contact.phoneLandline}`}
        >
          <span className="material-symbols-outlined text-[18px]">call</span>
          <span>Durak Sabit Tel: Ara</span>
        </a>
        <a
          className="h-12 rounded-xl bg-[#22C55E] text-white font-bold text-sm flex items-center justify-center gap-2 active:scale-95 hover:bg-[#1eb354] transition-all shadow-sm"
          href={siteData.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Canlı Destek"
        >
          <span className="material-symbols-outlined text-[18px]">chat</span>
          <span>WhatsApp Canlı Destek</span>
        </a>
      </div>
    </section>
  );
}
