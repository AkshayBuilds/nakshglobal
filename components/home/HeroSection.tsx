"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";

/* ─────────────────────────── Data ─────────────────────────── */

const destinations = [
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇳🇿", name: "New Zealand" },
  { flag: "🇦🇪", name: "Dubai" },
  { flag: "🇫🇷", name: "France" },
  { flag: "🇮🇪", name: "Ireland" },
  { flag: "🇸🇪", name: "Sweden" },
];

const figures = [
  { num: "5,000+", desc: "Visas Approved" },
  { num: "98%", desc: "Success Rate" },
  { num: "25+", desc: "Countries" },
  { num: "8 Yrs", desc: "Experience" },
];

/* ─── Stagger animation variants ─── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const line = {
  hidden: { opacity: 0, y: 36, skewY: 2 },
  show: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.78, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};
const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

/* ─────────────────────────── Component ─────────────────────────── */

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 500], [0, -60]);
  const opacity = useTransform(scrollY, [0, 380], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-between bg-[#060D1F] text-white overflow-hidden"
    >

      {/* ── Fine grid lines ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Subtle corner glow ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, rgba(232,93,4,0.10) 0%, transparent 65%)" }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle at bottom left, rgba(10,36,99,0.30) 0%, transparent 65%)" }} />

      {/* ── Vertical side label (editorial detail) ── */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-20 select-none">
        <div className="w-px h-16 bg-white/10" />
        <span
          className="text-[10px] font-semibold tracking-[0.22em] text-white/25 uppercase"
          style={{ writingMode: "vertical-rl", fontFamily: "Inter, sans-serif" }}
        >
          EST. 2017 · AHMEDABAD
        </span>
        <div className="w-px h-16 bg-white/10" />
      </div>

      {/* ── Ghost display word (typographic texture) ── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="text-[22vw] font-extrabold tracking-[-0.04em] text-white/[0.025] leading-none"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          VISA
        </span>
      </div>

      {/* ═════ MAIN CONTENT ═════ */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex flex-col justify-center flex-1 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-20 pt-36 pb-16"
      >

        {/* Top eyebrow line */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="w-6 h-px bg-[#E85D04]" />
          <span
            className="text-[11px] font-bold tracking-[0.25em] text-[#E85D04] uppercase"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Naksh Global Visa · Trusted Consultancy
          </span>
        </motion.div>

        {/* Headline — staggered per line */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mb-10 overflow-hidden"
        >
          {/* Line 1 — Outline style */}
          <motion.h1
            variants={line}
            className="text-[clamp(3rem,7.5vw,7rem)] font-extrabold leading-[0.95] tracking-[-0.04em]"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.8)",
              color: "transparent",
            }}
          >
            Your Visa.
          </motion.h1>

          {/* Line 2 — Solid white, bigger */}
          <motion.h1
            variants={line}
            className="text-[clamp(3.2rem,8.5vw,8rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-white"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Done Right.
          </motion.h1>

          {/* Line 3 — Orange accent, lighter weight */}
          <motion.h1
            variants={line}
            className="text-[clamp(2.4rem,6vw,5.5rem)] font-light leading-[1.1] tracking-[-0.02em]"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              color: "#E85D04",
            }}
          >
            Every time.
          </motion.h1>
        </motion.div>

        {/* Description + CTA row */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16"
        >
          {/* Description */}
          <motion.p
            variants={fade}
            className="text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-md"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            End-to-end visa support — from eligibility to approval. Study, work,
            or travel to 25+ countries with zero guesswork and expert-verified documentation.
          </motion.p>

          {/* CTA block */}
          <motion.div variants={fade} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:ml-auto lg:flex-shrink-0">
            <Link
              href="/free-assessment"
              className="group inline-flex items-center gap-2.5 px-7 py-4 bg-[#E85D04] text-white text-sm font-bold rounded-lg transition-all duration-300 hover:bg-[#C44B00] hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(232,93,4,0.40)]"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              <CalendarCheck className="w-4 h-4" />
              Book Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-[#94A3B8] text-sm font-medium hover:text-white transition-colors group"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              See all services
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ═════ BOTTOM BAR ═════ */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 border-t border-white/[0.07]"
      >
        {/* Stats row */}
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-20 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 border-b border-white/[0.05]">
          {figures.map((f) => (
            <div key={f.num}>
              <div
                className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {f.num}
              </div>
              <div className="text-[#475569] text-xs font-medium mt-0.5 uppercase tracking-wider" style={{ fontFamily: "Inter, sans-serif" }}>
                {f.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Destination ticker — static scroll */}
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-20 py-5 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-6 whitespace-nowrap">
            <span
              className="text-[10px] font-bold tracking-[0.2em] text-[#334155] uppercase flex-shrink-0"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              We serve
            </span>
            <div className="w-px h-4 bg-white/10 flex-shrink-0" />
            {destinations.map((d, i) => (
              <span
                key={d.name}
                className="inline-flex items-center gap-2 text-[#64748B] text-sm font-medium flex-shrink-0 hover:text-white transition-colors cursor-default"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <span className="text-base">{d.flag}</span>
                {d.name}
                {i < destinations.length - 1 && (
                  <span className="ml-6 text-[#1E293B] select-none">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
