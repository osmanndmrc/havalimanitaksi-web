import React from "react";
import Link from "next/link";
import { siteData } from "@/data/data";
import { districts } from "@/data/districts";

export default function Footer() {
  return (
    <footer className="rounded-3xl p-6 sm:p-10 bg-inverse-surface text-inverse-on-surface flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div className="flex flex-col">
          <span className="text-xl sm:text-2xl font-bold text-white tracking-wide">
            {siteData.brand.name}
          </span>
          <span className="text-xs sm:text-sm text-primary-container font-semibold mt-0.5">
            {siteData.brand.airportName} Resmi Taksi Durağı İşletmesi
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={siteData.contact.phoneLandlineTel}
            aria-label={`Telefonla Ara: ${siteData.contact.phoneLandline}`}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            {siteData.contact.phoneLandline}
          </a>
          <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-fixed flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-[20px]">local_taxi</span>
          </div>
        </div>
      </div>

      {/* Sayfa linkleri ve transfer bölgeleri */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <nav aria-label="Alt Menü" className="flex flex-col gap-3">
          <span className="text-xs font-bold text-surface-variant uppercase tracking-wider">
            Sayfalar
          </span>
          <ul className="flex flex-col gap-1.5 text-sm">
            {siteData.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-primary-container transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/kvkk" className="text-white/80 hover:text-primary-container transition-colors">
                KVKK Aydınlatma Metni
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-3 md:col-span-2">
          <span className="text-xs font-bold text-surface-variant uppercase tracking-wider">
            7/24 Transfer Verilen İlçe ve Şehirler
          </span>
          <ul className="flex flex-wrap gap-2">
            {districts.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/transfer/${d.slug}`}
                  className="inline-block px-3 py-1 rounded-lg bg-white/10 text-xs text-white/90 font-medium hover:bg-white/20 transition-colors"
                >
                  {d.name} Taksi
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-4 text-surface-variant text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/10">
        <p className="text-white/60">
          {siteData.brand.airportName} apron ve gelen yolcu resmi durağı lisanslı taşımacılık hizmetidir.
        </p>
      </div>

      <div className="pt-6 border-t border-white/10 text-center">
        <p className="text-sm text-white">© 2026 PaperShip Digital. Tüm hakları saklıdır.</p>
        <a
          href="https://papership.digital"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-white opacity-70 transition-opacity hover:opacity-100"
          aria-label="PaperShip Digital"
        >
          <svg width="200" height="30" viewBox="0 0 968 132" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M68.499 65.9757C68.499 85.9249 55.6066 99.0939 36.854 99.0939C21.4873 99.0939 13.6738 91.4011 13.6738 86.1856V85.0122L12.3715 84.8818V130.387H0V65.1934C0 44.853 13.6738 31.2928 34.2495 31.2928C54.9555 31.2928 68.499 44.853 68.499 65.9757ZM56.1275 65.1934C56.1275 51.8939 47.2722 42.8972 34.2495 42.8972C20.8362 42.8972 12.3715 51.5028 12.3715 65.1934C12.3715 78.3624 18.4921 87.4895 34.6402 87.4895C48.0535 87.4895 56.1275 78.884 56.1275 65.1934Z" fill="#D5C7FF" />
            <path d="M78.848 65.9757C78.848 44.853 92.3915 31.2928 113.097 31.2928C133.673 31.2928 147.347 44.853 147.347 65.1934V97.7901H134.976V84.8818L133.673 85.0122V86.1856C133.673 91.4011 125.86 99.0939 110.493 99.0939C91.7404 99.0939 78.848 85.9249 78.848 65.9757ZM91.2195 65.1934C91.2195 78.884 99.2935 87.4895 112.707 87.4895C128.855 87.4895 134.845 78.3624 134.845 65.1934C134.845 51.5028 126.511 42.8972 113.097 42.8972C99.9446 42.8972 91.2195 51.8939 91.2195 65.1934Z" fill="#D5C7FF" />
            <path d="M226.704 65.9757C226.704 85.9249 213.811 99.0939 195.059 99.0939C179.692 99.0939 171.878 91.4011 171.878 86.1856V85.0122L170.576 84.8818V130.387H158.205V65.1934C158.205 44.853 171.878 31.2928 192.454 31.2928C213.16 31.2928 226.704 44.853 226.704 65.9757ZM214.332 65.1934C214.332 51.8939 205.477 42.8972 192.454 42.8972C179.041 42.8972 170.576 51.5028 170.576 65.1934C170.576 78.3624 176.697 87.4895 192.845 87.4895C206.258 87.4895 214.332 78.884 214.332 65.1934Z" fill="#D5C7FF" />
            <path d="M304.249 66.6276H249.424C249.685 79.0144 258.279 87.7503 271.563 87.7503C282.111 87.7503 289.273 82.0133 291.617 73.147H304.249C301.384 89.4453 289.273 99.0939 271.302 99.0939C250.726 99.0939 237.053 85.5337 237.053 65.1934C237.053 44.853 250.726 31.2928 271.302 31.2928C290.966 31.2928 304.38 43.2884 304.249 62.9768V66.6276ZM250.336 57.1094H291.357C289.404 47.5912 282.111 41.8541 271.432 41.8541C260.754 41.8541 252.94 48.2431 250.336 57.1094Z" fill="#D5C7FF" />
            <path d="M327.382 64.2807V97.7901H315.01V65.8453C315.01 44.7227 328.424 31.5536 349.13 31.5536V43.5492C336.107 43.5492 327.382 51.5028 327.382 64.2807Z" fill="#D5C7FF" />
            <path d="M358.371 50.3293C358.371 37.421 368.528 31.1624 387.932 31.1624C397.569 31.1624 405.252 32.2055 412.284 34.8133V46.4177C407.726 44.7227 398.09 41.8541 386.63 41.8541C375.951 41.8541 370.742 44.4619 370.742 49.4166C370.742 62.5856 415.019 55.284 415.019 78.7536C415.019 91.5315 404.992 99.2243 385.458 99.2243C375.821 99.2243 368.138 98.1812 361.105 95.5735V83.9691C365.663 85.6641 375.43 88.5326 386.76 88.5326C397.439 88.5326 402.517 84.621 402.517 79.6663C402.517 66.6276 358.371 73.7989 358.371 50.3293Z" fill="#D5C7FF" />
            <path d="M437.387 64.1503V97.7901H425.016V0H437.387V46.4177H438.69C438.69 39.3768 446.243 31.2928 460.958 31.2928C479.32 31.2928 489.999 43.158 489.999 61.4122V97.7901H477.497V61.8033C477.497 49.8077 470.725 42.8972 458.875 42.8972C444.81 42.8972 437.387 52.0243 437.387 64.1503Z" fill="#D5C7FF" />
            <path d="M500.812 12.3867C500.812 8.08398 503.807 5.21547 508.235 5.21547C512.793 5.21547 515.788 8.08398 515.788 12.3867C515.788 16.6895 512.793 19.558 508.235 19.558C503.807 19.558 500.812 16.6895 500.812 12.3867ZM502.114 97.7901V32.5967H514.486V97.7901H502.114Z" fill="#D5C7FF" />
            <path d="M595 65.9757C595 85.9249 582.108 99.0939 563.355 99.0939C547.988 99.0939 540.175 91.4011 540.175 86.1856V85.0122L538.872 84.8818V130.387H526.501V65.1934C526.501 44.853 540.175 31.2928 560.75 31.2928C581.456 31.2928 595 44.853 595 65.9757ZM582.628 65.1934C582.628 51.8939 573.773 42.8972 560.75 42.8972C547.337 42.8972 538.872 51.5028 538.872 65.1934C538.872 78.3624 544.993 87.4895 561.141 87.4895C574.554 87.4895 582.628 78.884 582.628 65.1934Z" fill="#D5C7FF" />
            <path d="M622 64.2807C622 44.4619 634.892 31.2928 653.645 31.2928C669.012 31.2928 676.825 38.8552 676.825 44.2011V45.3746H678.128V0H690.499V65.1934C690.499 85.5337 676.825 99.0939 656.25 99.0939C635.544 99.0939 622 85.5337 622 64.2807ZM634.371 65.1934C634.371 78.4928 643.097 87.4895 656.25 87.4895C669.663 87.4895 677.997 78.884 677.997 65.1934C677.997 51.8939 672.007 42.8972 655.859 42.8972C642.446 42.8972 634.371 51.3724 634.371 65.1934Z" fill="#F72585" />
            <path d="M701.357 12.3867C701.357 8.08397 704.352 5.21547 708.78 5.21547C713.337 5.21547 716.333 8.08397 716.333 12.3867C716.333 16.6895 713.337 19.558 708.78 19.558C704.352 19.558 701.357 16.6895 701.357 12.3867ZM702.659 97.7901V32.5967H715.03V97.7901H702.659Z" fill="#F72585" />
            <path d="M778.882 26.0773C778.882 21.5138 782.138 18.3845 787.217 18.3845C792.295 18.3845 795.681 21.5138 795.681 26.0773C795.681 30.7713 792.295 33.7702 787.217 33.7702C782.138 33.7702 778.882 30.7713 778.882 26.0773ZM726.791 61.2818C726.791 43.2884 739.684 31.2928 759.088 31.2928C778.491 31.2928 791.384 43.2884 791.384 60.4994C791.384 77.1889 781.487 84.7514 774.585 84.7514V85.9249C781.877 85.9249 792.035 90.358 792.035 104.049C792.035 121.39 779.794 131.691 759.739 131.691C739.033 131.691 727.443 120.608 727.443 101.05H739.814C739.814 113.567 746.716 120.086 759.739 120.086C772.631 120.086 779.663 114.349 779.663 103.527C779.663 91.2707 766.641 91.2707 759.088 91.2707C739.684 91.2707 726.791 79.2751 726.791 61.2818ZM739.163 61.2818C739.163 72.495 746.846 79.6663 759.088 79.6663C771.85 79.6663 779.012 74.5812 779.012 61.2818C779.012 49.8077 771.329 42.8972 759.088 42.8972C746.846 42.8972 739.163 49.9381 739.163 61.2818Z" fill="#F72585" />
            <path d="M806.402 12.3867C806.402 8.08397 809.398 5.21547 813.825 5.21547C818.383 5.21547 821.379 8.08397 821.379 12.3867C821.379 16.6895 818.383 19.558 813.825 19.558C809.398 19.558 806.402 16.6895 806.402 12.3867ZM807.705 97.7901V32.5967H820.076V97.7901H807.705Z" fill="#F72585" />
            <path d="M868.815 97.7901C842.51 97.7901 832.092 86.7072 832.092 61.9337V19.0365H844.463V33.379H868.815V44.4619H844.463V63.7591C844.463 79.7967 850.454 85.9249 868.815 85.9249V97.7901Z" fill="#F72585" />
            <path d="M875.458 65.9757C875.458 44.853 889.002 31.2928 909.708 31.2928C930.283 31.2928 943.957 44.853 943.957 65.1934V97.7901H931.586V84.8818L930.283 85.0122V86.1856C930.283 91.4011 922.47 99.0939 907.103 99.0939C888.35 99.0939 875.458 85.9249 875.458 65.9757ZM887.83 65.1934C887.83 78.884 895.904 87.4895 909.317 87.4895C925.465 87.4895 931.455 78.3624 931.455 65.1934C931.455 51.5028 923.121 42.8972 909.708 42.8972C896.555 42.8972 887.83 51.8939 887.83 65.1934Z" fill="#F72585" />
            <path d="M954.815 97.7901V0H967.186V97.7901H954.815Z" fill="#F72585" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
