"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQ {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
  variant?: "dark" | "light";
}

export default function FAQAccordion({
  faqs,
  title = "Frequently Asked Questions",
  variant = "dark",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isLight = variant === "light";

  return (
    <div>
      {title && (
        <h2
          className={`text-3xl font-bold mb-8 ${
            isLight ? "text-[#111827]" : "text-white"
          }`}
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif", letterSpacing: "-0.02em" }}
        >
          {title}
        </h2>
      )}
      <div className={`divide-y ${isLight ? "divide-[#E5E7EB] border-t border-[#E5E7EB]" : "divide-white/10"}`}>
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
              aria-expanded={openIndex === index}
            >
              <span
                className={`font-semibold text-[15px] pr-4 ${
                  isLight ? "text-[#374151]" : "text-white"
                }`}
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {faq.q}
              </span>
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-[#E85D04] text-xl font-light leading-none">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p
                    className={`text-sm leading-relaxed pb-5 pr-12 ${
                      isLight ? "text-[#6B7280]" : "text-white/60"
                    }`}
                  >
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
