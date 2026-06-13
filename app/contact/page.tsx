import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Naksh Global Visa",
  description: "Get in touch with Naksh Global Visa. Call, WhatsApp, or email us. Office in Bangalore. Free consultation available.",
};

export default function ContactPage() {
  return <ContactClient />;
}
