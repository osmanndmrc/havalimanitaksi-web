import React from "react";
import { siteData } from "@/data/data";

export default function PopularRoutes() {
  return (
    <section id="guzergahlar" className="flex flex-col gap-5 scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-extrabold">
            Kapsamlı Transfer Ağı
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-on-surface">
            Hizmet Verdiğimiz Popüler Güzergahlar
          </h2>
        </div>
        <span className="text-xs text-secondary font-medium hidden sm:block">
          UKOME Standartlarında 7/24 Kesintisiz Sefer
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {siteData.routes.map((route, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-surface-container flex flex-col justify-between gap-4 group"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-primary-container/30 text-on-primary-fixed text-[11px] font-bold">
                  {route.badge}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-secondary font-medium">
                  <span>{route.distance}</span>
                  <span>•</span>
                  <span>{route.duration}</span>
                </div>
              </div>

              <h3 className="text-base font-bold text-on-surface group-hover:text-primary transition-colors">
                {route.destination}
              </h3>

              <p className="text-xs text-secondary leading-relaxed">
                {route.description}
              </p>
            </div>

            <a
              href={`${siteData.contact.whatsappLink}?text=${encodeURIComponent(
                `Merhaba ${siteData.brand.name}, ${route.queryText}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${route.destination} için WhatsApp'tan taksi iste`}
              className="w-full h-10 rounded-xl bg-surface-container hover:bg-[#22C55E] hover:text-white text-on-surface text-xs font-bold flex items-center justify-center gap-2 active:scale-98 transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">chat</span>
              <span>WhatsApp&apos;tan Taksi İste</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
