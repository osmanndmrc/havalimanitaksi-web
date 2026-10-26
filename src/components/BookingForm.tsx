"use client";

import React, { useState, useEffect } from "react";
import { siteData } from "@/data/data";

const quickDestinations = [
  "Şehir Merkezi (Trabzon Bulvarı)",
  "Onikişubat (Binevler)",
  "Dulkadiroğlu (Doğukent)",
  "Türkoğlu Lojistik Köyü",
  "Pazarcık",
  "Elbistan / Afşin",
  "Necip Fazıl Şehir Hastanesi",
  "KSÜ Avşar Kampüsü",
];

export default function BookingForm() {
  const [direction, setDirection] = useState<"from" | "to">("from");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState("1-2 Kişi (Standart)");
  const [flightNumber, setFlightNumber] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const now = new Date();
      const yyyy = now.getFullYear();
      const mm = String(now.getMonth() + 1).padStart(2, "0");
      const dd = String(now.getDate()).padStart(2, "0");
      setDate(`${yyyy}-${mm}-${dd}`);

      const future = new Date(now.getTime() + 30 * 60000);
      const hours = String(future.getHours()).padStart(2, "0");
      const minutes = String(future.getMinutes()).padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const directionText =
      direction === "from"
        ? "Havaalanından Gidiş (Terminalden Alış)"
        : "Havaalanına Gidiş (Adresten Havaalanına)";

    const message = `Merhaba ${siteData.brand.name} Durağı,\n\nRezervasyon Talebim:\n• Yön: ${directionText}\n• Adres/Hedef: ${location || "Belirtilmedi"}\n• Tarih & Saat: ${date} ${time}\n• Yolcu Sayısı: ${passengers}\n• Uçuş No: ${flightNumber || "-"}\n\nBilgi ve onayınızı rica ederim.`;

    const encoded = encodeURIComponent(message);
    window.open(`${siteData.contact.whatsappLink}?text=${encoded}`, "_blank");
  };

  return (
    <section
      id="rezervasyon"
      className="rounded-3xl p-5 sm:p-7 bg-surface-container-lowest shadow-md border border-surface-container flex flex-col justify-between gap-5 scroll-mt-24"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-primary-container/30 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[24px]">calendar_month</span>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-on-surface">
              Hızlı Rezervasyon
            </h2>
            <p className="text-xs text-secondary hidden sm:block">
              Saniyeler içinde online taksi talebinizi iletin
            </p>
          </div>
        </div>
        <span className="text-xs text-tertiary font-bold flex items-center gap-1 bg-tertiary-container/30 px-3 py-1 rounded-full">
          <span className="material-symbols-outlined text-[14px]">lock</span>
          Ön Ödemesiz
        </span>
      </div>

      {/* Direction Tab Switch */}
      <div className="grid grid-cols-2 p-1 bg-surface-container rounded-2xl gap-1">
        <button
          type="button"
          onClick={() => setDirection("from")}
          className={`py-2.5 rounded-xl font-bold text-sm transition-all text-center cursor-pointer ${
            direction === "from"
              ? "text-on-surface bg-surface-container-lowest shadow-sm"
              : "text-secondary hover:text-on-surface"
          }`}
        >
          Havaalanından
        </button>
        <button
          type="button"
          onClick={() => setDirection("to")}
          className={`py-2.5 rounded-xl font-bold text-sm transition-all text-center cursor-pointer ${
            direction === "to"
              ? "text-on-surface bg-surface-container-lowest shadow-sm"
              : "text-secondary hover:text-on-surface"
          }`}
        >
          Havaalanına
        </button>
      </div>

      {/* Interactive Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
        {/* Location Input & Quick Chips */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="destLocation"
            className="text-xs font-bold text-on-surface-variant flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px] text-primary">pin_drop</span>
            {direction === "from" ? "Gideceğiniz Adres / Otel / İlçe" : "Alınacağınız Adres / Ev / Otel Konumu"}
          </label>
          <div className="relative flex items-center">
            <input
              id="destLocation"
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder={
                direction === "from"
                  ? "Örn: Onikişubat, Necip Fazıl Kısakürek Kültür Mrk."
                  : "Örn: Binevler Mah. 22. Sokak No:4"
              }
              className="w-full h-12 pl-3.5 pr-10 rounded-xl bg-surface-container text-on-surface text-sm placeholder:text-secondary focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/40 border border-transparent focus:border-primary/20 transition-all"
            />
            <span className="material-symbols-outlined absolute right-3 text-secondary text-[20px] pointer-events-none">
              search
            </span>
          </div>

          {/* Quick Destination Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[11px] text-secondary font-medium mr-1">Hızlı Seç:</span>
            {quickDestinations.map((dest, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLocation(dest)}
                className="px-2 py-0.5 rounded-md bg-surface-container hover:bg-primary-container/50 hover:text-on-primary-fixed text-[11px] text-secondary transition-colors cursor-pointer"
              >
                {dest}
              </button>
            ))}
          </div>
        </div>

        {/* Date & Time Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="bookDate"
              className="text-xs font-bold text-on-surface-variant"
            >
              Tarih
            </label>
            <input
              id="bookDate"
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full h-11 px-3 rounded-xl bg-surface-container text-on-surface text-sm focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/40 border border-transparent focus:border-primary/20"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="bookTime"
              className="text-xs font-bold text-on-surface-variant"
            >
              Saat
            </label>
            <input
              id="bookTime"
              type="time"
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full h-11 px-3 rounded-xl bg-surface-container text-on-surface text-sm focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/40 border border-transparent focus:border-primary/20"
            />
          </div>
        </div>

        {/* Passengers & Flight Code */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="passengers"
              className="text-xs font-bold text-on-surface-variant"
            >
              Yolcu Sayısı
            </label>
            <select
              id="passengers"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="w-full h-11 px-3 rounded-xl bg-surface-container text-on-surface text-sm focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/40 border border-transparent focus:border-primary/20 cursor-pointer"
            >
              <option value="1-2 Kişi (Standart)">1-2 Kişi (Standart)</option>
              <option value="3-4 Kişi (Standart)">3-4 Kişi (Standart)</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="flightNumber"
              className="text-xs font-bold text-on-surface-variant"
            >
              Uçuş No (Opsiyonel - Rötar Takibi)
            </label>
            <input
              id="flightNumber"
              type="text"
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
              placeholder="Örn: TK2230, VF4180"
              className="w-full h-11 px-3 rounded-xl bg-surface-container text-on-surface text-sm uppercase placeholder:normal-case placeholder:text-secondary focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/40 border border-transparent focus:border-primary/20"
            />
          </div>
        </div>

        {/* Submit CTA Button */}
        <button
          type="submit"
          className="w-full h-13 min-h-[52px] mt-1 rounded-xl bg-[#22C55E] text-white font-bold text-base flex items-center justify-center gap-2 shadow-[0_8px_16px_-4px_rgba(34,197,94,0.35)] hover:bg-[#1eb354] active:scale-98 transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[22px]">chat</span>
          <span>WhatsApp ile Anında Rezervasyon Yap</span>
        </button>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center gap-4 pt-1 text-secondary text-xs flex-wrap">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-tertiary">
              check_circle
            </span>
            Ücretsiz İptal & Değişiklik
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-tertiary">
              check_circle
            </span>
            7/24 Canlı Destek
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-tertiary">
              check_circle
            </span>
            Tüm Kartlarla Güvenli Ödeme
          </span>
        </div>
      </form>
    </section>
  );
}
