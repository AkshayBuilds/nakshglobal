import type { Metadata } from "next";
import SuccessClient from "./SuccessClient";

export const metadata: Metadata = {
  title: "Success Stories | Naksh Global Visa",
  description: "Real visa success stories from our clients. 5000+ approved visas. Student Visa, Work Permit & Visitor Visa success cases for Canada, UK, Australia, Germany.",
};

export default function SuccessStoriesPage() {
  return <SuccessClient />;
}
