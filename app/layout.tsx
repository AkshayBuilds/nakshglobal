import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import PremiumExperience from "@/components/PremiumExperience";
import { PHONE_NUMBER, SITE_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#0A2463",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Naksh Global Visa | Trusted Immigration & Visa Consultants in Ahmedabad",
    template: "%s | Naksh Global Visa",
  },
  description:
    "Naksh Global Visa is a premier immigration and visa consultancy in Naroda, Ahmedabad. Expert guidance for Student Visa, Work Permit, Visitor Visa, and PR across Canada, Australia, UK, USA, New Zealand, Dubai & Europe. 98% success rate, 5,000+ approved visas.",
  keywords: [
    "visa consultancy",
    "visa consultant Ahmedabad",
    "immigration consultant Ahmedabad",
    "best visa consultancy Naroda",
    "student visa consultant India",
    "study abroad consultants",
    "work permit Canada",
    "Australia PR consultant",
    "UK student visa",
    "USA visitor visa",
    "Europe study visa",
    "Germany job seeker visa",
    "Dubai work visa",
    "Naksh Global Visa",
    "visa documentation assistance",
    "free visa assessment",
  ],
  authors: [{ name: "Naksh Global Visa", url: SITE_URL }],
  creator: "Naksh Global Visa",
  publisher: "Naksh Global Visa",
  category: "Immigration & Visa Consultancy",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Naksh Global Visa",
    title: "Naksh Global Visa | Trusted Immigration & Visa Consultants in Ahmedabad",
    description:
      "Premier visa and immigration consultancy in Ahmedabad. Expert guidance for Student Visa, Work Permit, Visitor Visa & PR across Canada, UK, Australia, USA & Europe. 5,000+ approved visas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Naksh Global Visa - Premier Immigration & Visa Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naksh Global Visa | Premier Immigration & Visa Consultancy",
    description:
      "Trusted visa consultancy in Ahmedabad. Student Visa, Work Permit, Visitor Visa & PR for Canada, UK, Australia, USA & Europe. Call +91 73838 88088.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cleanPhone = PHONE_NUMBER.replace(/\s+/g, "");

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/#organization`,
    name: "Naksh Global Visa",
    alternateName: "Naksh Visa Consultancy",
    url: SITE_URL,
    logo: `${SITE_URL}/android-chrome-512x512.png`,
    image: `${SITE_URL}/og-image.png`,
    description:
      "Premier immigration and visa consultancy in Ahmedabad, Gujarat. Expert guidance for students, professionals, and families for Student Visa, Work Permit, Visitor Visa, and PR across Canada, Australia, UK, USA, Europe, and Dubai.",
    telephone: cleanPhone,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, UPI, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Naroda",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "382330",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.0805,
      longitude: 72.6548,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "17:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: cleanPhone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1250",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Visa & Immigration Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Student Visa Consultation",
            description: "University admission, visa documentation, SOP & embassy filing for Canada, UK, USA, Australia, and Europe.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Work Permit Visa Services",
            description: "Skilled worker immigration, employer sponsorship, and work visa guidance.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Visitor & Tourist Visa Guidance",
            description: "Fast-track tourist, business, and family visit visas with document verification.",
          },
        },
      ],
    },
    sameAs: [
      "https://www.facebook.com/nakshglobalvisa",
      "https://www.instagram.com/nakshglobalvisa",
      "https://www.linkedin.com/company/nakshglobalvisa",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="geo.position" content="23.0805;72.6548" />
        <meta name="ICBM" content="23.0805, 72.6548" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#F9FAFB] text-[#111827] antialiased`}>
        <PremiumExperience />
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
