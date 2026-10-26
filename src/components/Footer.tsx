import React from "react";
import { siteData } from "@/data/data";

export default function Footer() {
  return (
    <footer className="rounded-3xl p-6 sm:p-10 bg-inverse-surface text-inverse-on-surface flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div className="flex flex-col">
          <span className="text-xl sm:text-2xl font-bold text-white tracking-wide">
            {siteData.brand.name}
          </span>
          <span className="text-xs sm:text-sm text-primary-container font-semibold mt-0.5">
            {siteData.brand.airportName} Resmi Taksi Durağı İşletmesi
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={siteData.contact.phoneLandlineTel}
            aria-label={`Telefonla Ara: ${siteData.contact.phoneLandline}`}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            {siteData.contact.phoneLandline}
          </a>
          <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-fixed flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-[20px]">local_taxi</span>
          </div>
        </div>
      </div>

      {/* Fast Links & Regions */}
      <div className="flex flex-col gap-3">
        <span className="text-xs font-bold text-surface-variant uppercase tracking-wider">
          7/24 Kesintisiz Hizmet Verilen Bölgeler & İlçeler
        </span>
        <div className="flex flex-wrap gap-2">
          {siteData.regions.map((region, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg bg-white/10 text-xs text-white/90 font-medium hover:bg-white/15 transition-colors"
            >
              {region}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 text-surface-variant text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/10">
        <p>© 2025 {siteData.brand.legalName}. Tüm hakları saklıdır.</p>
        <p className="text-white/60">
          {siteData.brand.airportName} apron ve gelen yolcu resmi durağı lisanslı taşımacılık hizmetidir.
        </p>
      </div>
    </footer>
  );
}
