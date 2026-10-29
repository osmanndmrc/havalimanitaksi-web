import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/seo";

export interface Crumb {
  name: string;
  path: string;
}

/** Görünür sayfa yolu + Google için BreadcrumbList verisi. Ana sayfa otomatik eklenir. */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: "Ana Sayfa", path: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };

  return (
    <nav aria-label="Sayfa yolu" className="px-1">
      <JsonLd data={schema} />
      <ol className="flex flex-wrap items-center gap-1 text-xs text-secondary">
        {all.map((item, i) => {
          const isLast = i === all.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1">
              {isLast ? (
                <span aria-current="page" className="font-semibold text-on-surface">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="hover:text-primary hover:underline">
                    {item.name}
                  </Link>
                  <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                    chevron_right
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
