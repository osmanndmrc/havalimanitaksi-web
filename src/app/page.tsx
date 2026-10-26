import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DirectionChoices from "@/components/DirectionChoices";
import BookingForm from "@/components/BookingForm";
import VehicleStandards from "@/components/VehicleStandards";
import LocationSection from "@/components/LocationSection";
import WhyUs from "@/components/WhyUs";
import FlightAlertBanner from "@/components/FlightAlertBanner";
import Reviews from "@/components/Reviews";
import FaqAccordion from "@/components/FaqAccordion";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col relative w-full pt-20 sm:pt-24 pb-28 md:pb-16 bg-surface px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-1">
        <div className="flex flex-col w-full gap-y-10 sm:gap-y-12">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. REZERVASYON ALANI (Yukarı taşındı: Yön Seçimi & Hızlı Rezervasyon Formu) */}
          <section id="rezervasyon-alani" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch scroll-mt-24">
            <div className="lg:col-span-5 h-full">
              <DirectionChoices />
            </div>
            <div className="lg:col-span-7 h-full">
              <BookingForm />
            </div>
          </section>

          {/* 3. Araç Özellikleri & Kapasite Standartları (4 Kişi, Bagaj Hacmi, Donanımlar) */}
          <VehicleStandards />

          {/* 4. Terminal Konumu & 3 Adımlı Karşılama Rehberi */}
          <LocationSection />

          {/* 5. Neden Resmi Havalimanı Taksisi? (6 Temel Avantaj) */}
          <WhyUs />

          {/* 6. Uçuş Saati Kaçırmama Hatırlatma Banner'ı */}
          <FlightAlertBanner />

          {/* 7. Doğrulanmış Müşteri Yorumları & Puan */}
          <Reviews />

          {/* 8. SSS & İletişim Paneli */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 h-full">
              <FaqAccordion />
            </div>
            <div className="lg:col-span-5 h-full">
              <ContactSection />
            </div>
          </section>

          {/* 9. Alt Bilgi (Footer) */}
          <Footer />
        </div>
      </main>

      {/* Sabit İşlem Çubukları */}
      <BottomNav />
      <FloatingWhatsApp />
    </>
  );
}
