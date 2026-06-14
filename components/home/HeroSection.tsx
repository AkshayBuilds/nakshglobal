"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CalendarCheck, ClipboardCheck, GraduationCap, Briefcase, Plane } from "lucide-react";

const serviceLinks = [
  { icon: GraduationCap, label: "Student Visa", href: "/services/student-visa" },
  { icon: Briefcase, label: "Work Permit", href: "/services/work-permit" },
  { icon: Plane, label: "Visitor Visa", href: "/services/visitor-visa" },
];

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden pt-[73px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-73px)] items-center gap-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="py-16 lg:py-24 pr-0 lg:pr-20"
          >
            <p className="text-[#E85D04] text-xs font-bold tracking-[0.15em] uppercase mb-6">
              Professional Immigration Consultancy
            </p>

            <h1 className="heading-xl mb-8">
              Navigate Your<br />
              <span className="text-[#E85D04]">Global Journey</span>
              <br />
              With Confidence
            </h1>

            <p className="body-lg max-w-lg mb-10">
              Helping students, families, and professionals navigate international
              opportunities through transparent guidance, expert consultation, and
              complete documentation support.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-14">
              <Link href="/free-assessment" id="hero-cta-book" className="btn-primary">
                <CalendarCheck className="w-4 h-4" />
                Book Consultation
              </Link>
              <Link href="/free-assessment" id="hero-cta-assessment" className="btn-outline">
                <ClipboardCheck className="w-4 h-4" />
                Free Assessment
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {serviceLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#F3F4F6] border border-[#E5E7EB] text-[#374151] text-xs font-semibold hover:border-[#E85D04] hover:text-[#E85D04] hover:bg-[#FFF5E6] transition-all"
                >
                  <s.icon className="w-3.5 h-3.5 text-[#E85D04]" />
                  {s.label}
                </Link>
              ))}
            </div>
          </motion.div>

          <div className="relative hidden lg:block h-full min-h-[calc(100vh-73px)]">
            <div className="absolute inset-0 bg-[#0A2463]" />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E85D04]" />

            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/hero-consultation.png"
                alt="Professional immigration consultation"
                fill
                className="object-cover object-center opacity-80"
                priority
                sizes="(max-width: 1024px) 0vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03071E]/70 via-[#0A2463]/20 to-transparent" />
            </div>

            <div className="absolute bottom-10 left-8 right-8">
              <div className="grid grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden">
                {[
                  { num: "500+", label: "Clients Helped" },
                  { num: "10+", label: "Countries" },
                  { num: "2017", label: "Established" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#03071E]/60 backdrop-blur-sm px-4 py-5 text-center"
                  >
                    <div
                      className="text-2xl font-black text-[#E85D04]"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {stat.num}
                    </div>
                    <div className="text-[10px] text-white/50 uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
