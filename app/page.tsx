import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TrustIndicators from "@/components/home/TrustIndicators";
import AboutSection from "@/components/home/AboutSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedCountries from "@/components/home/FeaturedCountries";
import VisaGuideAnimation from "@/components/home/VisaGuideAnimation";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import FAQSection from "@/components/home/FAQSection";
import CTABanner from "@/components/home/CTABanner";
import { GENERAL_FAQS, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Best Visa & Immigration Consultants in Ahmedabad | Naksh Global Visa",
  description:
    "Naksh Global Visa — trusted immigration & visa consultants in Naroda, Ahmedabad. Top success rates for Student Visa, Work Permit, Visitor Visa, and PR across Canada, Australia, UK, USA, Europe & Dubai. Call +91 73838 88088.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best Visa & Immigration Consultants in Ahmedabad | Naksh Global Visa",
    description:
      "Premier immigration consultancy in Ahmedabad. Transparent guidance for Student Visa, Work Permit & Visitor Visa for Canada, UK, Australia, USA & Europe.",
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Naksh Global Visa - Best Visa Consultants in Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Visa Consultants in Ahmedabad | Naksh Global Visa",
    description:
      "Expert guidance for Student Visa, Work Permit & Visitor Visa. 5000+ approvals, 98% success rate. Contact +91 73838 88088.",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: GENERAL_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Naksh Global Visa",
    description: "Professional Immigration & Visa Consultancy in Ahmedabad, India",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
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
      {/* 6. Visa Process Guide */}
      <VisaGuideAnimation />
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
