import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services | Naksh Global Visa",
  description:
    "Comprehensive visa & immigration services: Study Visa, Work Permit, Visitor Visa, University Admission, Documentation Support, and PR Guidance.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
