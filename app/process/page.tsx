import type { Metadata } from "next";
import ProcessClient from "./ProcessClient";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our 6-Step Visa Application Process | Naksh Global Visa",
  description:
    "Explore Naksh Global Visa's transparent 6-step visa application process: Profile Assessment, University/Program Selection, Documentation Support, Application Filing, Embassy Processing & Pre-Departure Briefing.",
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    title: "Our 6-Step Visa Application Process | Naksh Global Visa",
    description:
      "Transparent, step-by-step guidance from profile evaluation to visa stamped in passport. 98% success rate.",
    url: `${SITE_URL}/process`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Naksh Global Visa Process",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visa Application Process | Naksh Global Visa",
    description: "Understand the transparent 6-step visa journey with Naksh Global Visa Ahmedabad.",
    images: ["/og-image.png"],
  },
};

export default function ProcessPage() {
  const processSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Apply for an Overseas Visa with Naksh Global Visa",
    description: "Step-by-step visa application and documentation process guided by certified counselors.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Profile Assessment & Intake",
        text: "Comprehensive evaluation of your academic qualifications, work experience, budget, and goals.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Country & Program Selection",
        text: "Shortlisting universities, colleges, or job streams aligned with your visa objectives.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Documentation & SOP Preparation",
        text: "Meticulous preparation of financial proof, SOP, recommendation letters, and certificates.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Application Submission & Filing",
        text: "Error-free filing of your application directly with universities and embassy portals.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Biometrics & Embassy Processing",
        text: "Appointment scheduling, mock interviews, and real-time status tracking.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Visa Approval & Pre-Departure",
        text: "Visa stamping, flight briefing, forex guidance, and accommodation support.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(processSchema),
        }}
      />
      <ProcessClient />
    </>
  );
}
