import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import VehicleStandards from "@/components/VehicleStandards";
import FlightAlertBanner from "@/components/FlightAlertBanner";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Araç Özellikleri ve Bagaj Kapasitesi",
  description:
    "Kahramanmaraş Havaalanı taksilerinde 4 yolcu kapasitesi, 3-4 büyük valizlik bagaj, klima, temassız kartla ödeme ve talep üzerine çocuk koltuğu.",
  path: "/arac-ozellikleri",
});

export default function AracOzellikleriPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Araç Özellikleri", path: "/arac-ozellikleri" }]}
        eyebrow="Konfor ve Güvenlik"
        title="Taksilerimizin Özellikleri ve Kapasitesi"
        description="Kaç kişi sığar, kaç valiz alır, kartla ödeme var mı? Havaalanı taksilerimizin standart donanımlarını aşağıda bulabilirsiniz."
      />

      <VehicleStandards />

      <FlightAlertBanner />
    </>
  );
}
