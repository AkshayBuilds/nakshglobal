"use client";

import { useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  const handleSwipe = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (Math.abs(info.offset.x) < 48) return;
    if (info.offset.x < 0) next();
    else prev();
  };

  return (
    <section className="py-24 bg-[#F9FAFB] relative overflow-hidden">
      {/* Background decoration */}
      <div className="glow-blob glow-blue w-[400px] h-[400px] top-10 right-10 opacity-[0.05]" />
      
      <div className="w-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <div className="section-label mb-4">Client Success</div>
            <h2 className="heading-lg text-[#0A2463]">A Legacy of Trust, Documented by Success</h2>
            <p className="body-md text-[#6B7280] mt-2">
              Read testimonies of verified approvals from students, families, and professionals.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-bold">
            <ShieldCheck className="w-4 h-4" />
            100% Verified Outcomes
          </div>
        </motion.div>

        {/* Desktop View: Grid Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ marginTop: i === 1 ? 24 : i === 2 ? 12 : 0 }}
              className="bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#E85D04]/20 p-8 shadow-sm hover:shadow-card-hover transition-all duration-300 relative group flex flex-col justify-between min-h-[300px]"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#0A2463]/5 group-hover:text-[#E85D04]/10 transition-colors" />

              <div>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <span key={idx} className="text-[#F77F00] text-sm select-none">
                      ★
                    </span>
                  ))}
                </div>
                
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0A2463]/5 text-[#0A2463] text-[10px] font-bold mb-4 uppercase tracking-wider">
                  <CheckCircle2 className="w-3 h-3 text-[#E85D04]" />
                  {t.visaType} — Approved
                </div>
                
                <p className="text-[#4B5563] text-sm leading-relaxed mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-5 border-t border-[#E5E7EB]">
                <div
                  className="w-10 h-10 rounded-xl bg-[#0A2463] flex items-center justify-center text-[#E85D04] font-extrabold text-xs flex-shrink-0"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div
                    className="font-bold text-[#111827] text-sm group-hover:text-[#0A2463] transition-colors"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {t.name}
                  </div>
                  <div className="text-[#9CA3AF] text-[11px] font-medium mt-0.5 flex items-center gap-1">
                    <span>{t.flag}</span>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View: Carousel Layout */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-2xl bg-white border border-[#E5E7EB] p-8 shadow-sm">
            <Quote className="absolute top-6 right-6 w-8 h-8 text-[#0A2463]/5" />
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 24, y: 8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -24, y: -8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={handleSwipe}
                className="flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: TESTIMONIALS[current].rating }).map((_, idx) => (
                      <span key={idx} className="text-[#F77F00] text-sm select-none">
                        ★
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0A2463]/5 text-[#0A2463] text-[10px] font-bold mb-4 uppercase tracking-wider">
                    <CheckCircle2 className="w-3 h-3 text-[#E85D04]" />
                    {TESTIMONIALS[current].visaType} — Approved
                  </div>
                  <p className="text-[#4B5563] text-sm leading-relaxed mb-6 italic">
                    &ldquo;{TESTIMONIALS[current].text}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#E5E7EB]">
                  <div
                    className="w-10 h-10 rounded-xl bg-[#0A2463] flex items-center justify-center text-[#E85D04] font-extrabold text-xs"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {TESTIMONIALS[current].avatar}
                  </div>
                  <div>
                    <div
                      className="font-bold text-[#111827] text-sm"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {TESTIMONIALS[current].name}
                    </div>
                    <div className="text-[#9CA3AF] text-[11px] font-medium mt-0.5 flex items-center gap-1">
                      <span>{TESTIMONIALS[current].flag}</span>
                      <span>{TESTIMONIALS[current].role}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl border border-[#E5E7EB] bg-white flex items-center justify-center text-[#4B5563] hover:border-[#E85D04] hover:text-[#E85D04] transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2 items-center">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "bg-[#E85D04] w-5 h-2" : "bg-[#E5E7EB] w-2 h-2"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-xl border border-[#E5E7EB] bg-white flex items-center justify-center text-[#4B5563] hover:border-[#E85D04] hover:text-[#E85D04] transition-all duration-200"
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
