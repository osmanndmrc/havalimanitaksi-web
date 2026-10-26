import React from "react";
import { siteData } from "@/data/data";

export default function FleetSection() {
  return (
    <section id="filo" className="flex flex-col gap-5 scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-extrabold">
            Temiz, Bakımlı ve Klimalı
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-on-surface">
            Araç Filomuz & Kapasite Bilgisi
          </h2>
        </div>
        <span className="text-xs text-secondary font-medium hidden sm:block">
          Düzenli Dezenfekte Edilen Lisanslı Araçlar
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {siteData.fleet.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow border border-surface-container flex flex-col justify-between gap-5"
          >
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-primary-container/40 text-on-primary-fixed text-xs font-bold">
                  {item.badge}
                </span>
                <span className="material-symbols-outlined text-primary text-[28px]">
                  local_taxi
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-on-surface">
                  {item.type}
                </h3>
                <p className="text-xs text-secondary mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-surface-container-low text-xs">
                <div className="flex items-center gap-1.5 font-bold text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-primary">person</span>
                  <span>{item.capacity}</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-primary">luggage</span>
                  <span>{item.luggage}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="flex flex-col gap-1.5 text-xs text-secondary">
                {item.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[15px] text-tertiary">check_circle</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`${siteData.contact.whatsappLink}?text=${encodeURIComponent(
                `Merhaba, ${item.type} için havalimanı transfer rezervasyonu yaptırmak istiyorum.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.type} için rezervasyon yap`}
              className="w-full h-11 rounded-xl bg-surface-container hover:bg-primary-container hover:text-on-primary-fixed text-on-surface text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-98"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>Bu Araç İçin Rezervasyon Yap</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
