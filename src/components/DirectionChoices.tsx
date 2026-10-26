import React from "react";
import { siteData } from "@/data/data";

export default function DirectionChoices() {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex items-center justify-between px-1">
        <span className="text-lg sm:text-xl font-bold text-on-surface">
          Seyahat Yönünüzü Seçin
        </span>
        <span className="text-xs text-secondary font-medium">
          Hızlı Yönlendirme
        </span>
      </div>

      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-4 flex-1">
        {/* Choice A: Havaalanından Gidiyorum */}
        <div className="rounded-2xl p-5 bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow border border-surface-container flex flex-col justify-between gap-4 flex-1">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary-container/30 text-on-primary-fixed flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[28px] text-primary">
                flight_land
              </span>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-base sm:text-lg font-bold text-on-surface">
                  Havaalanından Gidiyorum
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-xs text-secondary font-semibold whitespace-nowrap">
                  Kapıda Hazır
                </span>
              </div>
              <p className="text-sm font-bold text-primary mt-1">
                İndiniz mi? Taksiniz terminal çıkışında hazır.
              </p>
              <p className="text-xs sm:text-sm text-secondary mt-1 leading-relaxed">
                Uçaktan indikten sonra beklemeden, resmi güvenilir tarife ile ilçe ve otellere hızlı ulaşım.
              </p>
            </div>
          </div>
          <a
            className="w-full h-12 rounded-xl bg-primary-container text-on-primary-fixed font-bold text-sm sm:text-base flex items-center justify-center gap-2 active:scale-98 hover:bg-yellow-400 transition-all shadow-sm"
            href={`${siteData.contact.whatsappLink}?text=${encodeURIComponent(
              "Merhaba, uçağım Kahramanmaraş Havaalanı'na indi. Terminal çıkışından taksi rica ediyorum."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Havaalanından Taksi İste (WhatsApp)"
          >
            <span className="material-symbols-outlined text-[20px]">local_taxi</span>
            <span>WhatsApp&apos;tan Taksi İste</span>
          </a>
        </div>

        {/* Choice B: Havaalanına Gidiyorum */}
        <div className="rounded-2xl p-5 bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow border border-surface-container flex flex-col justify-between gap-4 flex-1">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-inverse-surface text-primary-container flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[28px]">
                flight_takeoff
              </span>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-base sm:text-lg font-bold text-on-surface">
                  Havaalanına Gidiyorum
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-xs text-secondary font-semibold whitespace-nowrap">
                  Adresten Alış
                </span>
              </div>
              <p className="text-sm font-bold text-on-surface mt-1">
                Adresinizden alıp uçuşunuza yetiştirelim.
              </p>
              <p className="text-xs sm:text-sm text-secondary mt-1 leading-relaxed">
                Onikişubat, Dulkadiroğlu veya çevre ilçelerden dakik alış ile uçuşunuzu asla riske atmayın.
              </p>
            </div>
          </div>
          <a
            className="w-full h-12 rounded-xl bg-inverse-surface text-inverse-on-surface font-bold text-sm sm:text-base flex items-center justify-center gap-2 active:scale-98 hover:bg-neutral-800 transition-all shadow-sm"
            href={`${siteData.contact.whatsappLink}?text=${encodeURIComponent(
              "Merhaba, havaalanına gitmek için adresimden taksi rezervasyonu yaptırmak istiyorum."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Havaalanına Taksi Ayarla (WhatsApp)"
          >
            <span className="material-symbols-outlined text-[20px] text-primary-container">
              schedule
            </span>
            <span>Havaalanına Taksi Ayarla</span>
          </a>
        </div>
      </div>
    </div>
  );
}
