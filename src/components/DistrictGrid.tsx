import Link from "next/link";
import { districts } from "@/data/districts";

/** İlçe ve şehirlerarası transfer sayfalarına bağlantı kartları. */
export default function DistrictGrid({
  title = "Havaalanından Transfer Bölgeleri",
  excludeSlug,
  headingLevel = "h2",
}: {
  title?: string;
  excludeSlug?: string;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  const groups = [
    { label: "Kahramanmaraş İlçeleri", items: districts.filter((d) => d.kind === "ilce") },
    { label: "Şehirlerarası Transfer", items: districts.filter((d) => d.kind === "sehirlerarasi") },
  ];

  return (
    <section className="flex flex-col gap-4">
      <div className="px-1">
        <span className="text-xs uppercase tracking-wider text-primary font-extrabold">
          7/24 Transfer
        </span>
        <Heading className="text-xl sm:text-2xl font-bold text-on-surface">{title}</Heading>
      </div>

      {groups.map((group) => (
        <div key={group.label} className="flex flex-col gap-2.5">
          <span className="text-xs font-bold text-secondary px-1">{group.label}</span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {group.items
              .filter((d) => d.slug !== excludeSlug)
              .map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/transfer/${d.slug}`}
                    className="group flex items-center justify-between gap-3 p-4 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-xs hover:shadow-md hover:border-primary-container transition-all"
                  >
                    <span className="flex flex-col">
                      <span className="text-sm sm:text-base font-bold text-on-surface">
                        Havaalanı – {d.name} Taksi
                      </span>
                      <span className="text-xs text-secondary">
                        ~{d.distanceKm} km · {d.duration}
                      </span>
                    </span>
                    <span
                      className="material-symbols-outlined text-primary group-hover:translate-x-0.5 transition-transform"
                      aria-hidden="true"
                    >
                      arrow_forward
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
