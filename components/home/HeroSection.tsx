"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarCheck, ClipboardCheck, GraduationCap, Briefcase, Plane } from "lucide-react";

const serviceLinks = [
  { icon: GraduationCap, label: "Student Visa", href: "/services/student-visa" },
  { icon: Briefcase, label: "Work Permit", href: "/services/work-permit" },
  { icon: Plane, label: "Visitor Visa", href: "/services/visitor-visa" },
];

const credentialsBar = [
  "Registered Visa Consultants",
  "10+ Countries Served",
  "End-to-End Documentation",
  "Personalised Guidance",
];

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden pt-[73px]">
      {/* Subtle top border already in navbar — just add page bg */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[calc(100vh-73px)] items-center">

          {/* ── Left: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="py-16 lg:py-24 pr-0 lg:pr-16"
          >
            {/* Label */}
            <div className="section-label mb-6">
              Professional Immigration Consultancy
            </div>

            {/* Headline */}
            <h1 className="heading-xl mb-6">
              Professional Visa{" "}
              <span className="relative inline-block text-[#C9A227]">
                &amp; Immigration
              </span>{" "}
              Solutions
            </h1>

            {/* Divider */}
            <div className="w-12 h-1 bg-gradient-to-r from-[#C9A227] to-[#DDB954] rounded-full mb-8" />

            {/* Subheading */}
            <p className="body-lg max-w-xl mb-10 text-[#334155]">
              Helping students, families, and professionals navigate international
              opportunities through transparent guidance, expert consultation, and
              complete documentation support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Link
                href="/free-assessment"
                id="hero-cta-book"
                className="btn-primary"
              >
                <CalendarCheck className="w-4 h-4" />
                Book Consultation
              </Link>
              <Link
                href="/free-assessment"
                id="hero-cta-assessment"
                className="btn-outline"
              >
                <ClipboardCheck className="w-4 h-4" />
                Free Assessment
              </Link>
            </div>

            {/* Service quick-links */}
            <div className="flex flex-wrap gap-2.5">
              {serviceLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#334155] text-xs font-semibold hover:border-[#C9A227] hover:bg-white hover:text-[#C9A227] transition-all"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  <s.icon className="w-4 h-4 text-[#C9A227]" />
                  {s.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Image Panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative hidden lg:flex flex-col h-full"
          >
            {/* Main image container — full height panel */}
            <div className="relative flex-1 min-h-[600px] overflow-hidden">
              {/* Background navy panel */}
              <div className="absolute inset-0 bg-[#0F172A] rounded-bl-[48px]" />

              {/* Gold accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9A227] rounded-r-full" />

              {/* Photo */}
              <div className="absolute inset-0 rounded-bl-[48px] overflow-hidden">
                <Image
                  src="/hero-consultation.png"
                  alt="Professional immigration consultation — Naksh Global Visa advisors reviewing visa documents with a client"
                  fill
                  className="object-cover object-center opacity-90"
                  priority
                  sizes="(max-width: 1024px) 0vw, 50vw"
                  fetchPriority="high"
                />
                {/* Overlay: gradient for text readability at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent" />
              </div>

              {/* Floating credential card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute bottom-8 left-6 right-6 bg-white rounded-xl p-4 shadow-[0_8px_32px_rgba(15,23,42,0.18)]"
              >
                <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#94A3B8] mb-3">
                  Why clients trust us
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {credentialsBar.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227] flex-shrink-0" />
                      <span className="text-[#334155] text-xs font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom credentials bar (mobile + desktop) */}
      <div className="border-t border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-[#94A3B8] text-xs font-medium uppercase tracking-widest">
              Our commitment
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {credentialsBar.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-[#C9A227]" />
                  <span className="text-[#475569] text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
