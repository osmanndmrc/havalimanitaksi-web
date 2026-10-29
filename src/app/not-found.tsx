import Link from "next/link";
import DistrictGrid from "@/components/DistrictGrid";

export default function NotFound() {
  return (
    <>
      <section className="rounded-3xl p-6 sm:p-10 bg-inverse-surface text-inverse-on-surface shadow-xl flex flex-col gap-4 items-start">
        <span className="text-xs uppercase tracking-wider text-primary-container font-extrabold">404</span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white">Aradığınız sayfa bulunamadı</h1>
        <p className="text-sm sm:text-base text-surface-variant">
          Sayfa taşınmış veya kaldırılmış olabilir. Ana sayfaya dönebilir ya da transfer bölgelerine göz atabilirsiniz.
        </p>
        <Link
          href="/"
          className="h-12 px-5 rounded-xl bg-primary-container text-on-primary-fixed font-bold text-sm flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[20px]">home</span>
          Ana Sayfaya Dön
        </Link>
      </section>
      <DistrictGrid />
    </>
  );
}
