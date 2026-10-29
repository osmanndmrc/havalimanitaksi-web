import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";

/** Alt sayfaların üst kısmı: sayfa yolu, tek H1 başlık ve kısa açıklama. */
export default function PageHeader({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumbs items={crumbs} />
      <header className="rounded-3xl p-6 sm:p-10 bg-inverse-surface text-inverse-on-surface shadow-xl flex flex-col gap-3">
        {eyebrow && (
          <span className="text-xs uppercase tracking-wider text-primary-container font-extrabold">
            {eyebrow}
          </span>
        )}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="text-sm sm:text-base text-surface-variant leading-relaxed max-w-3xl">
            {description}
          </p>
        )}
      </header>
    </div>
  );
}
