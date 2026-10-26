import React from "react";
import { siteData } from "@/data/data";

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="WhatsApp Canlı Taksi Hattı"
      className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2"
    >
      <a
        href={`${siteData.contact.whatsappLink}?text=${encodeURIComponent(
          siteData.contact.whatsappDefaultText
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="7/24 WhatsApp Taksi Hattı"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#22C55E] text-white font-bold text-sm shadow-[0_10px_25px_-5px_rgba(34,197,94,0.5)] hover:bg-[#1eb354] hover:scale-105 active:scale-95 transition-all group"
      >
        <span className="material-symbols-outlined text-[24px]">chat</span>
        <span className="pr-1">7/24 WhatsApp Taksi Hattı</span>
      </a>
    </aside>
  );
}
