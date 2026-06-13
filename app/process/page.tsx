import type { Metadata } from "next";
import ProcessClient from "./ProcessClient";

export const metadata: Metadata = {
  title: "Our Process | Naksh Global Visa",
  description: "Understand our transparent 6-step visa process: Lead Intake → Assessment → Documentation → Application → Embassy Processing → Visa Decision.",
};

export default function ProcessPage() {
  return <ProcessClient />;
}
