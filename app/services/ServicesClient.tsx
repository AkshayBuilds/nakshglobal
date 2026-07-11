"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Plane,
  BookOpen,
  FileText,
  Compass,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const servicesData = [
  {
    id: "student-visa",
    title: "Study Visa",
    slug: "/services/student-visa",
    icon: GraduationCap,
    description:
      "Study at top global universities. Comprehensive assistance from admissions through to embassy filing.",
    features: [
      "Admission Application Assistance",
      "Visa Profile Assessment",
      "SOP & LOR Writing Support",
      "Embassy File Submission",
    ],
  },
  {
    id: "work-permit",
    title: "Work Permit",
    slug: "/services/work-permit",
    icon: Briefcase,
    description:
      "Build your career abroad. Assistance with employer sponsorship, skilled migration streams, and work authorizations.",
    features: [
      "Skilled Worker Programs",
      "LMIA / Job Offer Verification",
      "Intra-Company Transfer Filings",
      "Post-Study Work Authorization",
    ],
  },
  {
    id: "visitor-visa",
    title: "Visitor Visa",
    slug: "/services/visitor-visa",
    icon: Plane,
    description:
      "Travel for tourism, family visits, or business. Precise document checklist compilation and high-success visa filing.",
    features: [
      "Tourist / Visitor Visas",
      "Business Visitor Permits",
      "Family Sponsorship Visas",
      "Custom Travel Itinerary Preparation",
    ],
  },
  {
    id: "university-admission",
    title: "University Admission",
    slug: "/free-assessment",
    icon: BookOpen,
    description:
      "Direct partnership with top-tier global institutions. Align your academic background with high-demand programs.",
    features: [
      "Profile Assessment & Shortlisting",
      "Institution Matching",
      "Scholarship Applications",
      "Conditional Offer Clearance",
    ],
  },
  {
    id: "documentation-support",
    title: "Documentation Support",
    slug: "/free-assessment",
    icon: FileText,
    description:
      "Mitigate rejection risks. Meticulous review of SOPs, cover letters, and financial files to match strict embassy rules.",
    features: [
      "SOP Review & Editing",
      "Cover Letter Writing",
      "Financial Audit & Prep",
      "Embassy Mock Interviews",
    ],
  },
  {
    id: "pr-guidance",
    title: "PR Guidance",
    slug: "/free-assessment",
    icon: Compass,
    description:
      "Explore permanent settlement pathways. Assistance with points calculators, Express Entry profiles, and PNP nominations.",
    features: [
      "Express Entry Setup",
      "Provincial Nominee (PNP) Filings",
      "PR Points Optimization",
      "Family Class Sponsorships",
    ],
  },
];

export default function ServicesClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header Section */}
      <section className="relative pt-32 pb-20 bg-[#0A2463] overflow-hidden">
        {/* Background Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#E85D04] text-xs font-bold tracking-[0.15em] uppercase mb-4">Our Offerings</p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-2xl leading-tight"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif", letterSpacing: "-0.02em" }}
          >
            Complete immigration & visa solutions
          </h1>
          <p className="text-[#D6E4FF]/80 text-lg max-w-xl">
            Expert end-to-end services tailored to your unique academic, career, and personal relocation goals.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col divide-y divide-[#E5E7EB]">
            {servicesData.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`py-12 ${i === 0 ? "border-t border-[#E5E7EB]" : ""}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                    {/* Title and Icon */}
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-xl bg-[#EBF1FF] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-[#0A2463]" />
                      </div>
                      <div>
                        <h2
                          className="text-2xl font-bold text-[#111827] mb-2"
                          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                        >
                          {service.title}
                        </h2>
                        <p className="text-[#6B7280] text-sm leading-relaxed">{service.description}</p>
                      </div>
                    </div>

                    {/* Features & Action Link */}
                    <div className="lg:col-span-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {service.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-sm text-[#4B5563]">
                            <CheckCircle2 className="w-4 h-4 text-[#E85D04] flex-shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>
                      <Link
                        href={service.slug}
                        className="btn-primary inline-flex text-sm"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-24 bg-[#0A2463] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Not sure which visa is right for you?
          </h2>
          <p className="text-[#D6E4FF]/70 mb-8">
            Our experts will assess your profile and recommend the best pathway — completely free.
          </p>
          <Link href="/free-assessment" className="btn-primary">
            Get Free Assessment <ArrowRight className="w-5 h-5 ml-1.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
