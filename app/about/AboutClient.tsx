"use client";

import { motion } from "framer-motion";
import { Shield, Award, Heart } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TEAM, VALUES } from "@/lib/constants";

const Handshake = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current" fill="none" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const iconMap: Record<string, React.ElementType> = { Shield, Handshake, Award, Heart };

const milestones = [
  { year: "2017", title: "Founded", desc: "Naksh Global Visa established in Bangalore with a mission to democratize immigration guidance." },
  { year: "2019", title: "1,000 Visas", desc: "Crossed 1,000 successful visa approvals across Canada, UK, and Australia." },
  { year: "2021", title: "Expanded Services", desc: "Added Germany, New Zealand, and USA to our portfolio. Team grew to 15 experts." },
  { year: "2023", title: "5,000 Visas", desc: "Milestone of 5,000+ visa approvals with a 98% success rate across 25+ countries." },
  { year: "2025", title: "Digital First", desc: "Launched fully digital consultation platform enabling clients across India to access our services." },
];

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-[#0A2463] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-[#E85D04] text-xs font-bold tracking-[0.15em] uppercase mb-6">About Us</p>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl leading-tight"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif", letterSpacing: "-0.02em" }}
            >
              More than a consultancy — a trusted partner
            </h1>
            <p className="text-[#D6E4FF]/80 text-lg max-w-2xl leading-relaxed">
              Since 2017, Naksh Global Visa has been the trusted immigration partner for thousands of students, professionals, and families across India. We believe everyone deserves a fair chance at global opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#E85D04] pl-8"
            >
              <h2 className="heading-md mb-4">Our Mission</h2>
              <p className="body-md">
                To provide honest, expert, and accessible immigration guidance that empowers every client to achieve their global aspirations — with transparency, dignity, and a genuine commitment to their success.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#0A2463] pl-8"
            >
              <h2 className="heading-md mb-4">Our Vision</h2>
              <p className="body-md">
                To be India&apos;s most trusted and ethical immigration consultancy — a company where every client feels heard, respected, and confident that they are receiving the best possible guidance for their unique situation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="heading-lg mb-4">Our core values</h2>
            <p className="body-md max-w-xl">
              The principles that guide every decision, every consultation, and every case we handle.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, i) => {
              const Icon = iconMap[value.icon];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl border border-[#E5E7EB] p-6 hover:border-[#E85D04]/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#0A2463] flex items-center justify-center mb-4">
                    {Icon && <Icon className="w-6 h-6 text-[#E85D04]" />}
                  </div>
                  <h3
                    className="font-bold text-[#111827] text-base mb-2"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <p className="text-[#E85D04] text-xs font-bold tracking-[0.15em] uppercase mb-3">Leadership</p>
              <h2 className="heading-lg">Meet our expert team</h2>
            </div>
            <p className="body-md max-w-sm text-[#6B7280]">
              Certified, experienced, and genuinely passionate about helping you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-[#F9FAFB] rounded-xl border border-[#E5E7EB] p-6 hover:border-[#E85D04]/20 transition-all ${
                  i === 0 ? "lg:col-span-2 lg:flex lg:gap-8 lg:items-start" : ""
                }`}
              >
                <div
                  className={`rounded-xl bg-[#0A2463] flex items-center justify-center text-[#E85D04] font-bold flex-shrink-0 mb-4 ${
                    i === 0 ? "w-24 h-24 text-3xl" : "w-16 h-16 text-xl mx-auto"
                  }`}
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {member.avatar}
                </div>
                <div className={i === 0 ? "flex-1" : ""}>
                  <h3
                    className={`font-bold text-[#111827] mb-1 ${i === 0 ? "text-xl" : "text-base text-center"}`}
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {member.name}
                  </h3>
                  <p className={`text-[#E85D04] text-xs font-semibold tracking-wide uppercase mb-3 ${i === 0 ? "" : "text-center"}`}>
                    {member.role}
                  </p>
                  <p className={`text-[#6B7280] text-sm leading-relaxed mb-4 ${i === 0 ? "" : "text-center"}`}>
                    {member.bio}
                  </p>
                  <div className={`flex flex-wrap gap-1 mb-4 ${i === 0 ? "" : "justify-center"}`}>
                    {member.specialization.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded-full bg-[#EBF1FF] border border-[#D6E4FF] text-[#0A2463] text-xs"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className={i === 0 ? "" : "flex justify-center"}>
                    <a
                      href={member.linkedin}
                      className="w-8 h-8 rounded-lg bg-[#EBF1FF] border border-[#D6E4FF] flex items-center justify-center text-[#0A2463] hover:bg-[#0A2463] hover:text-white transition-all"
                    >
                      <LinkedinIcon />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <h2 className="heading-lg">Our journey</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[#E5E7EB]" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 pl-14 relative"
                >
                  <div
                    className="absolute left-0 w-12 h-12 rounded-lg bg-[#0A2463] flex items-center justify-center text-[#E85D04] font-bold text-sm flex-shrink-0"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {m.year}
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-[#E5E7EB] flex-1">
                    <h3
                      className="font-bold text-[#111827] mb-1"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {m.title}
                    </h3>
                    <p className="text-[#6B7280] text-sm">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A2463]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Ready to begin your journey?
          </h2>
          <p className="text-[#D6E4FF]/70 mb-8">
            Join thousands of satisfied clients who trusted Naksh Global Visa with their future.
          </p>
          <Link href="/free-assessment" className="btn-primary">
            Get Your Free Assessment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
