import type { Metadata } from "next";
import AssessmentClient from "./AssessmentClient";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free Visa Eligibility Assessment | Profile Evaluation Ahmedabad",
  description:
    "Get a 100% free online visa eligibility assessment from certified immigration counselors at Naksh Global Visa Ahmedabad. Fast evaluation for Student Visa, Work Permit, and PR in Canada, Australia, UK, USA & Europe.",
  alternates: {
    canonical: "/free-assessment",
  },
  openGraph: {
    title: "Free Visa Eligibility Assessment | Naksh Global Visa",
    description:
      "Check your eligibility for Student Visa, Work Permit & PR. Fast confidential assessment from certified experts.",
    url: `${SITE_URL}/free-assessment`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Visa Assessment Naksh Global Visa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Visa Assessment | Naksh Global Visa",
    description: "Get your profile evaluated for free by experienced visa consultants. Fast turnaround.",
    images: ["/og-image.png"],
  },
};

export default function FreeAssessmentPage() {
  return <AssessmentClient />;
}
