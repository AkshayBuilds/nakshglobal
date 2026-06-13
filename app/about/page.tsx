import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Naksh Global Visa",
  description: "Learn about Naksh Global Visa — our mission, vision, values, and the expert team behind 5000+ successful visa approvals.",
};

export default function AboutPage() {
  return <AboutClient />;
}
