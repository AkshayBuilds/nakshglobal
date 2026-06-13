import type { Metadata } from "next";
import AssessmentClient from "./AssessmentClient";

export const metadata: Metadata = {
  title: "Free Assessment | Naksh Global Visa",
  description: "Get a free, personalised immigration assessment from certified consultants. Fill in your details and we'll recommend the best visa pathway for you.",
};

export default function FreeAssessmentPage() {
  return <AssessmentClient />;
}
