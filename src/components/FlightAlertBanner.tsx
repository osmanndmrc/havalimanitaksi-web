import React from "react";
import { siteData } from "@/data/data";

export default function FlightAlertBanner() {
  return (
    <section className="rounded-3xl p-5 sm:p-7 bg-primary-container text-on-primary-fixed shadow-md flex flex-col md:flex-row md:items-center justify-between gap-5">
      <div className="flex items-start gap-4 max-w-2xl">
        <div className="w-12 h-12 rounded-2xl bg-on-primary-fixed text-primary-container flex items-center justify-center flex-shrink-0">
          <span className="material-symbols-outlined text-[28px]">notification_important</span>
        </div>
        <div className="flex flex-col">
          <h2 className="text-base sm:text-lg font-extrabold uppercase tracking-wide">
            Uçuşunuzu Asla Riske Atmayın!
          </h2>
          <p className="text-sm mt-1 text-on-primary-fixed/90 font-medium leading-relaxed">
            Havalimanına gidişlerde uçuş saatinizden en az <strong>2 saat önce</strong> taksi rezervasyonu yaptırmanızı öneririz. Uçuş saatinizi ve adresinizi iletin; güzergah trafiğini sizin yerinize planlayalım.
          </p>
        </div>
      </div>
      <a
        className="h-13 min-h-[52px] px-6 rounded-xl bg-on-primary-fixed text-primary-container font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 active:scale-98 hover:bg-black transition-all shadow-md whitespace-nowrap self-stretch md:self-auto"
        href={siteData.contact.phoneMobileTel}
        aria-label={`Hemen Taksi Çağır: ${siteData.contact.phoneMobile}`}
      >
        <span className="material-symbols-outlined text-[20px]">call</span>
        <span>Hemen Taksi Çağır: {siteData.contact.phoneMobile}</span>
      </a>
    </section>
  );
}
