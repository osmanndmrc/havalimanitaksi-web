import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { siteData } from "@/data/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "KVKK Aydınlatma Metni",
  description: `${siteData.brand.name} kişisel verilerin korunması ve işlenmesine ilişkin aydınlatma metni.`,
  path: "/kvkk",
});

// NOT: Bu metin genel bir taslaktır; yayından önce bir hukukçu tarafından gözden geçirilmelidir.
export default function KvkkPage() {
  const { brand, contact } = siteData;

  const sections = [
    {
      title: "1. Veri sorumlusu",
      body: `6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu ${brand.legalName}'dir.`,
    },
    {
      title: "2. İşlenen kişisel veriler",
      body: "Rezervasyon ve iletişim süreçlerinde paylaştığınız ad, telefon numarası, alış/varış adresi, tarih ve saat bilgisi, yolcu sayısı ve uçuş numarası işlenebilir.",
    },
    {
      title: "3. İşleme amaçları",
      body: "Kişisel verileriniz; taksi ve transfer talebinizin alınması, planlanması ve gerçekleştirilmesi, uçuş rötar takibi, sizinle iletişim kurulması ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenir.",
    },
    {
      title: "4. Toplama yöntemi ve hukuki sebep",
      body: "Verileriniz web sitemizdeki rezervasyon formu aracılığıyla oluşturulan WhatsApp mesajı, telefon görüşmesi ve e-posta yoluyla toplanır. Bu veriler KVKK md. 5/2-c (sözleşmenin kurulması ve ifası) ve md. 5/2-ç (hukuki yükümlülük) hukuki sebeplerine dayanılarak işlenir. Web sitemiz rezervasyon formu verilerini kendi sunucularında saklamaz.",
    },
    {
      title: "5. Aktarım",
      body: "Kişisel verileriniz, yalnızca hizmetin gerçekleştirilmesi için görevlendirilen şoförlerimizle ve yasal zorunluluk halinde yetkili kamu kurumlarıyla paylaşılır. WhatsApp üzerinden iletilen mesajlar ilgili hizmet sağlayıcının altyapısında işlenir.",
    },
    {
      title: "6. Haklarınız",
      body: "KVKK md. 11 kapsamında kişisel verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltilmesini veya silinmesini isteme ve işlemeye itiraz etme haklarına sahipsiniz.",
    },
    {
      title: "7. Başvuru",
      body: `Haklarınıza ilişkin taleplerinizi ${contact.email} adresine e-posta ile iletebilirsiniz.`,
    },
  ];

  return (
    <>
      <PageHeader
        crumbs={[{ name: "KVKK Aydınlatma Metni", path: "/kvkk" }]}
        title="KVKK Aydınlatma Metni"
        description="Kişisel verilerinizin hangi amaçlarla ve nasıl işlendiğine dair bilgilendirme."
      />

      <article className="rounded-3xl p-5 sm:p-8 bg-surface-container-lowest shadow-md border border-surface-container flex flex-col gap-5">
        {sections.map((s) => (
          <section key={s.title} className="flex flex-col gap-1.5">
            <h2 className="text-base sm:text-lg font-bold text-on-surface">{s.title}</h2>
            <p className="text-sm text-secondary leading-relaxed">{s.body}</p>
          </section>
        ))}
      </article>
    </>
  );
}
