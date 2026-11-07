import type { Metadata } from "next";
import SuccessClient from "./SuccessClient";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Client Visa Success Stories & Testimonials | Naksh Global Visa",
  description:
    "Real visa approvals and inspiring success stories from our clients. Over 5,000+ approved student, work, and visitor visas for Canada, UK, Australia, USA, New Zealand, Dubai & Europe. Read reviews.",
  alternates: {
    canonical: "/success-stories",
  },
  openGraph: {
    title: "Visa Success Stories & Client Reviews | Naksh Global Visa",
    description:
      "5,000+ approved visas with 98% approval rate. Discover real client journeys and experiences.",
    url: `${SITE_URL}/success-stories`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Naksh Global Visa Success Stories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visa Success Stories | Naksh Global Visa",
    description: "5000+ approved visas across Canada, UK, Australia, USA & Europe.",
    images: ["/og-image.png"],
  },
};

export default function SuccessStoriesPage() {
  return <SuccessClient />;
}
