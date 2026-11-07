import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Visa & Immigration Services | Study, Work & Visit Visas",
  description:
    "Comprehensive visa & immigration services by Naksh Global Visa Ahmedabad: Student Visa, Work Permit, Visitor Visa, University Admission, SOP & Documentation Support for Canada, UK, Australia, USA & Europe.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Visa & Immigration Services | Naksh Global Visa",
    description:
      "Student Visa, Work Permit, Visitor Visa, PR Guidance & Document Filing with 98% approval rate.",
    url: `${SITE_URL}/services`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Naksh Global Visa Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visa & Immigration Services | Naksh Global Visa",
    description: "Expert assistance for Student Visas, Work Permits, and Visitor Visas worldwide.",
    images: ["/og-image.png"],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
