"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, MapPin } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto mb-4">Success Stories</div>
          <h2 className="heading-lg">
            Clients We&apos;ve Helped
          </h2>
          <p className="body-md max-w-2xl mx-auto mt-4 text-[#334155]">
            Real experiences from real clients who trusted us with their immigration journey.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-6 hover:border-[#C9A227]/20 hover:bg-white hover:shadow-[0_4px_24px_rgba(15,23,42,0.08)] transition-all duration-300"
            >
              {/* Visa type badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0F172A] text-[#C9A227] text-xs font-semibold"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  <CheckCircle2 className="w-3 h-3" />
                  {t.visaType} — Approved
                </div>
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 text-[#C9A227] fill-[#C9A227]" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-[#475569] text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#E2E8F0]">
                <div className="w-10 h-10 rounded-full bg-[#0F172A] flex items-center justify-center text-[#C9A227] font-bold text-sm flex-shrink-0"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div
                    className="text-[#0F172A] font-semibold text-sm"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {t.name}
                  </div>
                  <div className="text-[#94A3B8] text-xs flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    {t.flag} {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0F172A] text-[#C9A227] text-xs font-semibold">
                    <CheckCircle2 className="w-3 h-3" />
                    {TESTIMONIALS[current].visaType} — Approved
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: TESTIMONIALS[current].rating }).map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 text-[#C9A227] fill-[#C9A227]" />
                    ))}
                  </div>
                </div>
                <p className="text-[#475569] text-sm leading-relaxed mb-6 italic">
                  &ldquo;{TESTIMONIALS[current].text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#E2E8F0]">
                  <div className="w-10 h-10 rounded-full bg-[#0F172A] flex items-center justify-center text-[#C9A227] font-bold text-sm">
                    {TESTIMONIALS[current].avatar}
                  </div>
                  <div>
                    <div className="text-[#0F172A] font-semibold text-sm">
                      {TESTIMONIALS[current].name}
                    </div>
                    <div className="text-[#94A3B8] text-xs flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      {TESTIMONIALS[current].flag} {TESTIMONIALS[current].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-lg border border-[#E2E8F0] bg-white flex items-center justify-center text-[#475569] hover:border-[#C9A227] hover:text-[#C9A227] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2 items-center">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all ${
                    i === current
                      ? "bg-[#C9A227] w-5 h-2"
                      : "bg-[#E2E8F0] w-2 h-2"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-lg border border-[#E2E8F0] bg-white flex items-center justify-center text-[#475569] hover:border-[#C9A227] hover:text-[#C9A227] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
