"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

const homepageSteps = PROCESS_STEPS.slice(0, 4);

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-[#03071E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20"
        >
          <h2
            className="heading-lg text-white"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            How it works
          </h2>
          <p className="body-md text-white/40 max-w-sm lg:text-right">
            A transparent, step-by-step process so you always know what comes next.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {homepageSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 bg-[#03071E] hover:bg-[#0A2463]/50 transition-colors group"
            >
              <div
                className="text-[80px] font-black text-white/[0.04] leading-none mb-4 select-none"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="w-8 h-8 rounded-full border border-[#E85D04] flex items-center justify-center mb-4">
                <span className="text-[#E85D04] text-xs font-bold">{i + 1}</span>
              </div>
              <h3
                className="text-white font-bold text-base mb-2"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {step.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">{step.description}</p>

              {i < homepageSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-px h-16 bg-gradient-to-b from-transparent via-[#E85D04]/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
