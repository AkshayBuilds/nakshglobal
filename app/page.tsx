import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TrustIndicators from "@/components/home/TrustIndicators";
import AboutSection from "@/components/home/AboutSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedCountries from "@/components/home/FeaturedCountries";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import FAQSection from "@/components/home/FAQSection";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Naksh Global Visa | Professional Immigration & Visa Consultancy",
  description:
    "Naksh Global Visa — professional immigration consultancy in India. Transparent guidance for Student Visa, Work Permit & Visitor Visa across Canada, UK, Australia, USA, Germany & New Zealand. Complete documentation support.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />
      {/* 2. Trust Indicators */}
      <TrustIndicators />
      {/* 3. About Naksh Global Visa */}
      <AboutSection />
      {/* 4. Services */}
      <ServicesOverview />
      {/* 5. Countries We Serve */}
      <FeaturedCountries />
      {/* 6. Visa Process Timeline */}
      <ProcessTimeline />
      {/* 7. Why Choose Us */}
      <WhyChooseUs />
      {/* 8. Success Stories */}
      <Testimonials />
      {/* 9. FAQs */}
      <FAQSection />
      {/* 10. Contact / CTA */}
      <CTABanner />
    </>
  );
}
