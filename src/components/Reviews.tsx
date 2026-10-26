import React from "react";
import { siteData } from "@/data/data";

export default function Reviews() {
  return (
    <section id="yorumlar" className="flex flex-col gap-4 scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-extrabold">
            Gerçek Yolcu Deneyimleri
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-on-surface">
            Müşteri Yorumları & Memnuniyet
          </h2>
        </div>
        <div className="flex items-center gap-1.5 bg-surface-container-lowest px-3 py-1.5 rounded-full border border-surface-container self-start sm:self-auto shadow-sm">
          <span
            className="material-symbols-outlined text-[20px] text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <span className="font-extrabold text-sm sm:text-base text-on-surface">
            {siteData.seo.rating.ratingValue}
          </span>
          <span className="text-xs text-secondary font-medium">
            ({siteData.seo.rating.ratingCount}+ Doğrulanmış Yorum)
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {siteData.reviews.map((rev, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow border border-surface-container flex flex-col justify-between gap-4"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex text-primary">
                  {[...Array(rev.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-surface-container text-secondary">
                  {rev.category}
                </span>
              </div>
              <p className="text-sm text-on-surface italic leading-relaxed">
                {rev.comment}
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2 border-t border-surface-container">
              <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                {rev.author[0]}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-on-surface">
                  {rev.author}
                </span>
                <span className="text-[10px] text-secondary">
                  {rev.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
