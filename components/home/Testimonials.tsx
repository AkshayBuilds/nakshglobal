"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  return (
    <section className="section-padding bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16"
        >
          <div>
            <div className="section-label mb-4">Success Stories</div>
            <h2 className="heading-lg">Clients we&apos;ve helped</h2>
          </div>
          <p className="text-[#9CA3AF] text-sm">Real people. Real approvals.</p>
        </motion.div>

        <div className="hidden md:grid grid-cols-3 gap-6 items-start">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ marginTop: i === 1 ? 32 : i === 2 ? 16 : 0 }}
              className="bg-white rounded-xl border border-[#E5E7EB] p-6 hover:border-[#E85D04]/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <span key={idx} className="text-[#F77F00] text-sm">
                    ★
                  </span>
                ))}
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0A2463] text-[#E85D04] text-xs font-bold mb-4">
                <CheckCircle2 className="w-3 h-3" />
                {t.visaType} — Approved
              </div>
              <p className="text-[#4B5563] text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#E5E7EB]">
                <div
                  className="w-9 h-9 rounded-full bg-[#0A2463] flex items-center justify-center text-[#E85D04] font-bold text-xs flex-shrink-0"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div
                    className="font-semibold text-[#111827] text-sm"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {t.name}
                  </div>
                  <div className="text-[#9CA3AF] text-xs mt-0.5">
                    {t.flag} {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl border border-[#E5E7EB] p-6"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: TESTIMONIALS[current].rating }).map((_, idx) => (
                    <span key={idx} className="text-[#F77F00] text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0A2463] text-[#E85D04] text-xs font-bold mb-4">
                  <CheckCircle2 className="w-3 h-3" />
                  {TESTIMONIALS[current].visaType} — Approved
                </div>
                <p className="text-[#4B5563] text-sm leading-relaxed mb-6 italic">
                  &ldquo;{TESTIMONIALS[current].text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#E5E7EB]">
                  <div
                    className="w-9 h-9 rounded-full bg-[#0A2463] flex items-center justify-center text-[#E85D04] font-bold text-xs"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {TESTIMONIALS[current].avatar}
                  </div>
                  <div>
                    <div
                      className="font-semibold text-[#111827] text-sm"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {TESTIMONIALS[current].name}
                    </div>
                    <div className="text-[#9CA3AF] text-xs mt-0.5">
                      {TESTIMONIALS[current].flag} {TESTIMONIALS[current].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-lg border border-[#E5E7EB] bg-white flex items-center justify-center text-[#4B5563] hover:border-[#E85D04] hover:text-[#E85D04] transition-colors"
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
                    i === current ? "bg-[#E85D04] w-5 h-2" : "bg-[#E5E7EB] w-2 h-2"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-lg border border-[#E5E7EB] bg-white flex items-center justify-center text-[#4B5563] hover:border-[#E85D04] hover:text-[#E85D04] transition-colors"
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
