"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

const stats = [
  { number: "500+", label: "Successful Relocations", sub: "Students, professionals & families" },
  { number: "10+", label: "Destination Options", sub: "Canada, UK, Australia, Europe & more" },
  { number: "2018", label: "Year Established", sub: "Nearly a decade of continuous service" },
  { number: "98%", label: "Visa Success Rate", sub: "Thorough auditing, honest appraisals" },
];

const values = [
  "Clear, jargon-free compliance mapping at every phase",
  "Tailored consultation aligned strictly with active regulations",
  "Complete end-to-end documentation audit and filing oversight",
  "Dedicated client officer assigned to manage your milestones",
  "Post-visa orientation and initial arrival coordination",
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#0A2463] relative overflow-hidden">
      {/* Background glow elements */}
      <div className="glow-blob glow-orange w-[500px] h-[500px] -top-20 -right-20 opacity-[0.08]" />
      <div className="glow-blob glow-blue w-[400px] h-[400px] bottom-10 left-10 opacity-[0.15]" />

      <div className="w-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Stats Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card-dark rounded-2xl p-5 border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="text-3xl md:text-4xl font-extrabold text-[#E85D04] leading-none mb-2"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {item.number}
                  </div>
                  <div
                    className="text-white font-bold text-sm mb-1.5"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {item.label}
                  </div>
                </div>
                <div className="text-white/50 text-[11px] leading-relaxed mt-2 border-t border-white/5 pt-2">
                  {item.sub}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Description & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <p className="text-[#E85D04] text-xs font-bold tracking-[0.15em] uppercase mb-4">
              About Naksh Global Visa
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif", letterSpacing: "-0.02em" }}
            >
              Building bridges to international opportunities
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-6">
              Naksh Global Visa was established to bridge the gap between global opportunities and ambitious
              individuals. We provide highly structured, honest guidance that empowers students, professionals,
              and families to build their futures abroad.
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              By combining strict compliance audits with personalized attention, our team turns
              intricate visa procedures into predictable milestones across the UK, Europe, Canada,
              Australia, and beyond.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 mb-10">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#E85D04] flex-shrink-0 mt-0.5" />
                  <span className="text-white/85 text-xs leading-relaxed">{v}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link href="/about" className="btn-outline-white inline-flex items-center gap-2 w-full sm:w-auto justify-center">
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="hidden sm:flex items-center gap-3 pl-6 border-l border-white/10">
                <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden relative flex-shrink-0">
                  <Image
                    src="/hero-consultation.png"
                    alt="Naksh Team Lead"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-bold text-xs">Expert Consultation</div>
                  <div className="text-white/50 text-[10px]">Speak to our case lead</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
