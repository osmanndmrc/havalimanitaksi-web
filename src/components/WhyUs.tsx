import React from "react";
import { siteData } from "@/data/data";

export default function WhyUs() {
  return (
    <section id="avantajlar" className="flex flex-col gap-4 scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-1">
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-extrabold">
            Güven & Kurumsal Standart
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-on-surface">
            Neden Havalimanı Resmi Taksisi?
          </h2>
        </div>
        <span className="text-xs text-secondary hidden sm:block">
          {siteData.brand.license}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {siteData.advantages.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow border border-surface-container flex flex-col gap-2.5"
          >
            <div className="w-10 h-10 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
            </div>
            <h3 className="text-base font-bold text-on-surface">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-secondary leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
