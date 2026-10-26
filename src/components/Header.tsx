"use client";

import React, { useState } from "react";
import { siteData } from "@/data/data";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/95 backdrop-blur-xl border-b border-surface-container shadow-xs pt-safe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand & Airplane Icon Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0 group" aria-label={siteData.brand.name}>
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary-container text-on-primary-fixed flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0">
            <span className="material-symbols-outlined text-[24px] sm:text-[26px]">
              flight_takeoff
            </span>
          </div>
          <div className="flex flex-col shrink-0">
            <span className="text-[10px] sm:text-xs tracking-wider uppercase text-primary font-extrabold leading-tight whitespace-nowrap">
              {siteData.brand.shortName}
            </span>
            <span className="text-base sm:text-lg tracking-tight text-on-surface font-extrabold leading-tight whitespace-nowrap">
              {siteData.brand.title}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Ana Menü" className="hidden lg:flex items-center gap-1 text-sm font-semibold text-secondary whitespace-nowrap">
          <a href="#rezervasyon" className="px-3 py-1.5 rounded-lg hover:text-primary hover:bg-surface-container transition-all">
            Hızlı Rezervasyon
          </a>
          <a href="#arac-ozellikleri" className="px-3 py-1.5 rounded-lg hover:text-primary hover:bg-surface-container transition-all">
            Araç Özellikleri
          </a>
          <a href="#nerede" className="px-3 py-1.5 rounded-lg hover:text-primary hover:bg-surface-container transition-all">
            Durağımız Nerede?
          </a>
          <a href="#avantajlar" className="px-3 py-1.5 rounded-lg hover:text-primary hover:bg-surface-container transition-all">
            Neden Biz?
          </a>
          <a href="#yorumlar" className="px-3 py-1.5 rounded-lg hover:text-primary hover:bg-surface-container transition-all">
            Yorumlar
          </a>
          <a href="#sss" className="px-3 py-1.5 rounded-lg hover:text-primary hover:bg-surface-container transition-all">
            SSS
          </a>
          <a href="#iletisim" className="px-3 py-1.5 rounded-lg hover:text-primary hover:bg-surface-container transition-all">
            İletişim
          </a>
        </nav>

        {/* Right Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          <a
            href={siteData.contact.phoneLandlineTel}
            aria-label={`Telefonla Ara: ${siteData.contact.phoneLandline}`}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-container hover:bg-primary-container hover:text-on-primary-fixed transition-all font-bold text-sm whitespace-nowrap shrink-0 border border-surface-container"
          >
            <span className="material-symbols-outlined text-[18px] text-primary">call</span>
            <span className="whitespace-nowrap">{siteData.contact.phoneLandline}</span>
          </a>
          <a
            href={siteData.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Canlı Destek"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#22C55E] text-white font-bold text-sm shadow-md hover:bg-[#1eb354] active:scale-95 transition-all whitespace-nowrap shrink-0"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <a
            aria-label={`Hızlı Çağrı Merkezi: ${siteData.contact.phoneLandline}`}
            className="md:hidden w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-primary-container flex items-center justify-center text-on-primary-fixed active:scale-95 transition-transform shadow-[0_4px_12px_-2px_rgba(250,204,21,0.4)]"
            href={siteData.contact.phoneLandlineTel}
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
          </a>

          <button
            aria-label="Menüyü Aç / Kapat"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all"
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-surface-container bg-surface/98 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav aria-label="Mobil Menü" className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1.5">
            <a
              href="#rezervasyon"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-on-surface font-semibold hover:bg-surface-container flex items-center gap-2.5"
            >
              <span className="material-symbols-outlined text-[20px] text-primary">calendar_month</span>
              Hızlı Rezervasyon
            </a>
            <a
              href="#arac-ozellikleri"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-on-surface font-semibold hover:bg-surface-container flex items-center gap-2.5"
            >
              <span className="material-symbols-outlined text-[20px] text-primary">directions_car</span>
              Araç Özellikleri
            </a>
            <a
              href="#nerede"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-on-surface font-semibold hover:bg-surface-container flex items-center gap-2.5"
            >
              <span className="material-symbols-outlined text-[20px] text-primary">location_on</span>
              Durağımız Nerede?
            </a>
            <a
              href="#avantajlar"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-on-surface font-semibold hover:bg-surface-container flex items-center gap-2.5"
            >
              <span className="material-symbols-outlined text-[20px] text-primary">verified_user</span>
              Neden Biz?
            </a>
            <a
              href="#yorumlar"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-on-surface font-semibold hover:bg-surface-container flex items-center gap-2.5"
            >
              <span className="material-symbols-outlined text-[20px] text-primary">star</span>
              Müşteri Yorumları
            </a>
            <a
              href="#sss"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-on-surface font-semibold hover:bg-surface-container flex items-center gap-2.5"
            >
              <span className="material-symbols-outlined text-[20px] text-primary">help_outline</span>
              Sıkça Sorulan Sorular
            </a>
            <a
              href="#iletisim"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl text-on-surface font-semibold hover:bg-surface-container flex items-center gap-2.5"
            >
              <span className="material-symbols-outlined text-[20px] text-primary">contact_phone</span>
              İletişim & Konum
            </a>

            {/* Mobile Call & WhatsApp Buttons */}
            <div className="pt-3 mt-1 md:hidden grid grid-cols-2 gap-2.5 border-t border-surface-container">
              <a
                href={siteData.contact.phoneLandlineTel}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-surface-container font-bold text-sm text-on-surface"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">call</span>
                {siteData.contact.phoneLandline}
              </a>
              <a
                href={siteData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#22C55E] text-white font-bold text-sm shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
