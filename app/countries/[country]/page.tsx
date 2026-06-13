import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COUNTRIES } from "@/lib/constants";
import CountryDetailClient from "./CountryDetailClient";

export async function generateStaticParams() {
  return COUNTRIES.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params;
  const c = COUNTRIES.find((x) => x.slug === country);
  if (!c) return {};
  return {
    title: `${c.name} Immigration Guide | Naksh Global Visa`,
    description: c.description,
  };
}

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const c = COUNTRIES.find((x) => x.slug === country);
  if (!c) notFound();
  return <CountryDetailClient country={c} />;
}
