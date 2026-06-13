import type { Metadata } from "next";
import CountriesClient from "./CountriesClient";

export const metadata: Metadata = {
  title: "Countries | Naksh Global Visa",
  description: "Explore immigration opportunities in Canada, UK, Australia, USA, Germany & New Zealand. Compare visa pathways, costs, and requirements.",
};

export default function CountriesPage() {
  return <CountriesClient />;
}
