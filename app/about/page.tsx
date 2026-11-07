import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Top Visa & Immigration Consultants Ahmedabad",
  description:
    "Learn about Naksh Global Visa — our mission, certified counselors, 8+ years experience, and 5000+ approved visas across Canada, UK, Australia, USA, and Europe. Located in Naroda, Ahmedabad.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Naksh Global Visa - Immigration Consultants Ahmedabad",
    description:
      "8+ years experience, 5,000+ visa approvals, 98% success rate. Learn about our dedicated team of immigration experts.",
    url: `${SITE_URL}/about`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Naksh Global Visa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Naksh Global Visa | Trusted Immigration Experts",
    description: "Learn about Naksh Global Visa's mission, values, and 98% visa success track record.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
