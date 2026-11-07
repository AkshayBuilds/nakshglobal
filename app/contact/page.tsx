import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { SITE_URL, PHONE_NUMBER, EMAIL, ADDRESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Office in Naroda, Ahmedabad | Naksh Global Visa",
  description:
    "Get in touch with Naksh Global Visa. Call or WhatsApp +91 73838 88088. Visit our office in Naroda, Ahmedabad. Free one-on-one visa consultation with certified experts.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Naksh Global Visa | Visa Office Ahmedabad",
    description:
      "Call or WhatsApp +91 73838 88088. Free visa consultation in Naroda, Ahmedabad. Mon-Sat 9AM-7PM.",
    url: `${SITE_URL}/contact`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Naksh Global Visa Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Naksh Global Visa Ahmedabad",
    description: "Call +91 73838 88088 or visit our office in Naroda, Ahmedabad for visa assistance.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Naksh Global Visa",
    url: `${SITE_URL}/contact`,
    description: "Contact information and office location of Naksh Global Visa consultancy in Ahmedabad.",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Naksh Global Visa",
      telephone: PHONE_NUMBER.replace(/\s+/g, ""),
      email: EMAIL,
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS,
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "382330",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />
      <ContactClient />
    </>
  );
}
