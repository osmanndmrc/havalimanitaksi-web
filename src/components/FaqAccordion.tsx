import React from "react";
import { siteData } from "@/data/data";

export default function FaqAccordion() {
  return (
    <section id="sss" className="flex flex-col gap-4 scroll-mt-24 h-full">
      <div className="px-1">
        <span className="text-xs uppercase tracking-wider text-primary font-extrabold">
          Merak Edilen Sorular
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-on-surface">
          Sıkça Sorulan Sorular
        </h2>
      </div>

      <div className="flex flex-col gap-2.5 flex-1">
        {siteData.faqs.map((faq, idx) => (
          <details
            key={idx}
            className="group p-4 rounded-2xl bg-surface-container-lowest shadow-sm border border-surface-container [&_summary::-webkit-details-marker]:none transition-all"
          >
            <summary className="flex items-center justify-between cursor-pointer text-sm sm:text-base font-bold text-on-surface list-none">
              <span>{faq.q}</span>
              <span className="material-symbols-outlined text-secondary transition-transform duration-200 group-open:rotate-180 flex-shrink-0 ml-2">
                keyboard_arrow_down
              </span>
            </summary>
            <p className="text-xs sm:text-sm text-secondary mt-2.5 pt-2.5 border-t border-surface-container leading-relaxed">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
