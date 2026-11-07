import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COUNTRIES, SITE_URL } from "@/lib/constants";
import CountryDetailClient from "./CountryDetailClient";

export async function generateStaticParams() {
  return COUNTRIES.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country } = await params;
  const c = COUNTRIES.find((x) => x.slug === country);
  if (!c) return {};

  const title = `${c.name} Visa & Immigration Consultants Ahmedabad | Naksh Global Visa`;
  const description = `${c.description} Apply for ${c.name} student visa, work permit, or PR from Ahmedabad with 98% approval rate. Complete documentation, eligibility assessment & expert guidance.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/countries/${country}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/countries/${country}`,
      type: "article",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${c.name} Visa Guide - Naksh Global Visa`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const c = COUNTRIES.find((x) => x.slug === country);
  if (!c) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Countries",
        item: `${SITE_URL}/countries`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: c.name,
        item: `${SITE_URL}/countries/${c.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <CountryDetailClient country={c} />
    </>
  );
}
