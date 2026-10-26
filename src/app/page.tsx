import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DirectionChoices from "@/components/DirectionChoices";
import BookingForm from "@/components/BookingForm";
import PopularRoutes from "@/components/PopularRoutes";
import LocationSection from "@/components/LocationSection";
import FleetSection from "@/components/FleetSection";
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
        <div className="flex flex-col w-full gap-y-10 sm:gap-y-14">
          {/* 1. Hero Section with Live Terminal Dispatch */}
          <Hero />

          {/* 2. Direction Choices & Quick Booking Form (Side-by-side on desktop) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-5 h-full">
              <DirectionChoices />
            </div>
            <div className="lg:col-span-7 h-full">
              <BookingForm />
            </div>
          </section>

          {/* 3. Popular Transfer Routes (No fixed prices, but comprehensive destination info) */}
          <PopularRoutes />

          {/* 4. Terminal Location & 3-Step Walk Guide */}
          <LocationSection />

          {/* 5. Vehicle Fleet & Capacity */}
          <FleetSection />

          {/* 6. Why Us / 6 Advantages */}
          <WhyUs />

          {/* 7. Flight Alert Callout Banner */}
          <FlightAlertBanner />

          {/* 8. Verified Customer Reviews */}
          <Reviews />

          {/* 9. FAQ & Contact (Side-by-side on desktop) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 h-full">
              <FaqAccordion />
            </div>
            <div className="lg:col-span-5 h-full">
              <ContactSection />
            </div>
          </section>

          {/* 10. Comprehensive Footer */}
          <Footer />
        </div>
      </main>

      {/* Floating Action Bars */}
      <BottomNav />
      <FloatingWhatsApp />
    </>
  );
}
