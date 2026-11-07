import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
import { SERVICES, SITE_URL } from "@/lib/constants";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  const title = `${service.title} Consultants in Ahmedabad | Naksh Global Visa`;
  const description = `${service.description} Complete application support, document preparation, SOP review, and fast embassy processing in Ahmedabad.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/services/${slug}`,
      type: "article",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${service.title} - Naksh Global Visa`,
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

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Naksh Global Visa",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.features.map((feature, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature,
        },
        position: idx + 1,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <ServiceDetailClient service={service} />
    </>
  );
}
