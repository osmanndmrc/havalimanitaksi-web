import React from "react";
import { siteData } from "@/data/data";

export default function VehicleStandards() {
  const { title, subtitle, passengerCapacity, luggageCapacity, specs } =
    siteData.vehicleSpecs;

  return (
    <section id="arac-ozellikleri" className="flex flex-col gap-6 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-extrabold">
            Standart Donanım & Konfor
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-on-surface">
            {title}
          </h2>
          <p className="text-xs text-secondary mt-1">
            {subtitle}
          </p>
        </div>
        <span className="text-xs text-secondary font-medium hidden sm:block self-start sm:self-auto">
          DHMİ & UKOME Yönetmeliklerine Uygun
        </span>
      </div>

      {/* Main Capacity Callout Box */}
      <div className="rounded-3xl p-6 sm:p-8 bg-surface-container-lowest shadow-md border border-surface-container grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary-container text-on-primary-fixed flex items-center justify-center shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-[32px]">groups</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-secondary font-bold">
              Yolcu Kapasitesi
            </span>
            <span className="text-xl sm:text-2xl font-extrabold text-on-surface mt-0.5">
              {passengerCapacity}
            </span>
            <p className="text-xs sm:text-sm text-secondary mt-1 leading-relaxed">
              Tüm taksilerimiz yasal mevzuat gereğince standart 4 yetişkin yolcu kapasitelidir.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 md:border-l md:border-surface-container md:pl-6">
          <div className="w-14 h-14 rounded-2xl bg-primary-container text-on-primary-fixed flex items-center justify-center shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-[32px]">luggage</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-secondary font-bold">
              Bagaj & Bavul Hacmi
            </span>
            <span className="text-xl sm:text-2xl font-extrabold text-on-surface mt-0.5">
              {luggageCapacity}
            </span>
            <p className="text-xs sm:text-sm text-secondary mt-1 leading-relaxed">
              Geniş sedan bagajı; büyük boy bavullar, kabin boy valizler ve el çantaları için uygundur.
            </p>
          </div>
        </div>
      </div>

      {/* 8 Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {specs.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-surface-container-lowest shadow-xs hover:shadow-md transition-shadow border border-surface-container flex flex-col gap-2.5"
          >
            <div className="w-10 h-10 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px]">
                {item.icon}
              </span>
            </div>
            <div>
              <span className="text-[11px] font-bold text-primary uppercase tracking-wide">
                {item.value}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-on-surface mt-0.5">
                {item.title}
              </h3>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
