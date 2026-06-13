import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

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

export const metadata: Metadata = {
  title: {
    default: "Naksh Global Visa | Professional Immigration & Visa Consultancy",
    template: "%s | Naksh Global Visa",
  },
  description:
    "Naksh Global Visa is a trusted immigration consultancy in India. Professional guidance for Student Visa, Work Permit, and Visitor Visa across Canada, UK, Australia, USA, Germany & New Zealand. Transparent process, complete documentation support.",
  keywords: [
    "visa consultancy",
    "immigration consultant India",
    "student visa",
    "work permit",
    "visitor visa",
    "Canada immigration",
    "UK visa",
    "Australia PR",
    "Germany student visa",
    "Naksh Global Visa",
    "visa consultant Bangalore",
  ],
  authors: [{ name: "Naksh Global Visa" }],
  creator: "Naksh Global Visa",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.nakshglobalvisa.com",
    siteName: "Naksh Global Visa",
    title: "Naksh Global Visa | Professional Immigration & Visa Consultancy",
    description:
      "Professional visa and immigration consultancy. Expert guidance for Student Visa, Work Permit, and Visitor Visa across Canada, UK, Australia, USA, Germany & New Zealand.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naksh Global Visa | Professional Immigration Consultancy",
    description:
      "Trusted visa consultancy. Student Visa, Work Permit & Visitor Visa for top destinations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.nakshglobalvisa.com",
              name: "Naksh Global Visa",
              url: "https://www.nakshglobalvisa.com",
              description:
                "Professional immigration and visa consultancy — expert guidance for students, families, and professionals seeking international opportunities.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3rd Floor, Prestige Tower, MG Road",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                postalCode: "560001",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-98765-43210",
                contactType: "customer service",
                availableLanguage: ["English", "Hindi", "Gujarati"],
              },
              sameAs: [
                "https://www.facebook.com/nakshglobalvisa",
                "https://www.instagram.com/nakshglobalvisa",
                "https://www.linkedin.com/company/nakshglobalvisa",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#F8FAFC] text-[#111827] antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
