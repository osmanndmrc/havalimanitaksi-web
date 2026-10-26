import React from "react";
import { siteData } from "@/data/data";

export default function LocationSection() {
  return (
    <section
      id="nerede"
      className="rounded-3xl p-5 sm:p-8 bg-surface-container-lowest shadow-md border border-surface-container flex flex-col gap-6 scroll-mt-24"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-extrabold">
            Kolay Buluşma Noktası
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-on-surface">
            Durağımız Terminalde Nerede?
          </h2>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="px-3.5 py-1 rounded-full bg-primary-container text-on-primary-fixed text-xs sm:text-sm font-bold shadow-sm">
            {siteData.location.terminalProximity}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Google Maps Embed & Interactive Card (5 cols on desktop) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3">
          <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden shadow-inner border border-surface-container relative">
            <iframe
              title={`${siteData.brand.name} Canlı Konum Haritası`}
              src={siteData.location.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            <div className="absolute bottom-2 left-2 right-2 bg-inverse-surface/90 backdrop-blur-md p-2.5 rounded-xl text-inverse-on-surface border border-white/10 flex items-center gap-2.5">
              <span className="material-symbols-outlined text-primary-container text-[20px] animate-bounce">
                location_on
              </span>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold truncate">
                  {siteData.location.address}
                </span>
                <span className="text-[10px] text-secondary-container">
                  {siteData.location.terminalProximity}
                </span>
              </div>
            </div>
          </div>

          <a
            className="w-full h-12 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-bold text-sm flex items-center justify-center gap-2 active:scale-98 transition-all"
            href={siteData.location.googleMapsLink}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Google Haritalar'da Canlı Konum Aç"
          >
            <span className="material-symbols-outlined text-[20px] text-primary">near_me</span>
            <span>Google Haritalar&apos;da Canlı Konum Aç</span>
          </a>
        </div>

        {/* Step by Step Guidance (7 cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4">
          <p className="text-sm text-secondary leading-relaxed">
            {siteData.brand.airportName} terminalinden çıktığınız andan itibaren herhangi bir arama veya bekleme telaşı yaşamadan aracınıza binebilirsiniz:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center sm:text-left">
            <div className="flex sm:flex-col items-center sm:items-start p-3.5 rounded-2xl bg-surface-container-low border border-surface-container gap-3 sm:gap-2">
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">
                1
              </div>
              <div>
                <span className="text-sm font-bold text-on-surface block">
                  Bagajınızı Alın
                </span>
                <span className="text-xs text-secondary block mt-0.5">
                  Bagaj alım bantlarından ana çıkış kapısına yönelin.
                </span>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-start p-3.5 rounded-2xl bg-surface-container-low border border-surface-container gap-3 sm:gap-2">
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">
                2
              </div>
              <div>
                <span className="text-sm font-bold text-on-surface block">
                  Kapıdan Çıkın
                </span>
                <span className="text-xs text-secondary block mt-0.5">
                  Otomatik kapıdan dışarı 15 metre adım atın.
                </span>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-start p-3.5 rounded-2xl bg-surface-container-low border border-surface-container gap-3 sm:gap-2">
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-fixed flex items-center justify-center font-bold text-sm flex-shrink-0">
                3
              </div>
              <div>
                <span className="text-sm font-bold text-on-surface block">
                  Taksiniz Hazır
                </span>
                <span className="text-xs text-secondary block mt-0.5">
                  Resmi sarı taksilerimiz sizi sırada beklemektedir.
                </span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-on-surface flex items-center gap-2.5">
            <span className="material-symbols-outlined text-primary text-[22px] flex-shrink-0">
              support_agent
            </span>
            <span>
              Uçaktan indiğinizde şoförünüz veya durak görevlimizle hemen iletişime geçmek için{" "}
              <a href={siteData.contact.phoneLandlineTel} className="font-bold underline text-primary">
                {siteData.contact.phoneLandline}
              </a>{" "}
              numarasını arayabilirsiniz.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
