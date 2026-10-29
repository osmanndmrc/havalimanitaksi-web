import React from "react";
import Link from "next/link";
import { siteData } from "@/data/data";

export default function BottomNav() {
  return (
    <nav
      aria-label="Mobil Hızlı İşlem Çubuğu"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-surface/95 backdrop-blur-xl border-t border-surface-container shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-safe"
      data-active-classes="ring-2 ring-primary-container"
    >
      <div className="max-w-xl mx-auto px-4 py-2.5">
        <div className="grid grid-cols-3 gap-2.5 items-center">
          <a
            className="flex flex-col items-center justify-center h-13 min-h-[52px] rounded-xl bg-primary-container text-on-primary-fixed font-bold px-2 active:scale-95 transition-all shadow-[0_8px_20px_-4px_rgba(250,204,21,0.35)]"
            data-path="hemen-ara"
            href={siteData.contact.phoneLandlineTel}
            aria-label={`Durak Nöbetçisini Hemen Ara: ${siteData.contact.phoneLandline}`}
          >
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span className="text-xs sm:text-sm font-bold">Hemen Ara</span>
            </div>
          </a>

          <a
            className="flex flex-col items-center justify-center h-13 min-h-[52px] rounded-xl bg-[#22C55E] text-white font-bold px-2 active:scale-95 transition-all shadow-[0_8px_20px_-4px_rgba(34,197,94,0.35)]"
            data-path="whatsapp-rezervasyon"
            href={siteData.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Taksi Çağır"
          >
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span className="text-xs sm:text-sm font-bold">WhatsApp</span>
            </div>
          </a>

          <Link
            className="flex flex-col items-center justify-center h-13 min-h-[52px] rounded-xl bg-[#18181B] text-white font-bold px-2 active:scale-95 transition-all shadow-[0_8px_20px_-4px_rgba(24,24,27,0.35)]"
            data-path="durak-konumu"
            href="/havalimani-rehberi"
            aria-label="Durak Konumu ve Yol Tarifi"
          >
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[20px]">location_on</span>
              <span className="text-xs sm:text-sm font-bold">Konum</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
