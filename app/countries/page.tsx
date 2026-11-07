import type { Metadata } from "next";
import CountriesClient from "./CountriesClient";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Top Study & Immigration Countries | Canada, UK, Australia, USA, Europe",
  description:
    "Explore immigration and study abroad opportunities in Canada, Australia, UK, USA, New Zealand, Dubai, Germany, France, Netherlands, Ireland, Sweden & Finland with Naksh Global Visa Ahmedabad. Compare costs, PR pathways, and eligibility.",
  alternates: {
    canonical: "/countries",
  },
  openGraph: {
    title: "Immigration & Study Abroad Countries | Naksh Global Visa",
    description:
      "Explore visa pathways for 25+ top global destinations with Naksh Global Visa. 98% visa success rate.",
    url: `${SITE_URL}/countries`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Countries Served by Naksh Global Visa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Visa Destinations | Naksh Global Visa",
    description: "Compare visa requirements and pathways for top destinations worldwide.",
    images: ["/og-image.png"],
  },
};

export default function CountriesPage() {
  return <CountriesClient />;
}
