"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQ {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQAccordion({ faqs, title = "Frequently Asked Questions" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {title && (
        <h2 className="text-3xl font-bold text-white mb-8">
          {title.split(" ").map((word, i) =>
            i === title.split(" ").length - 1 ? (
              <span key={i} className="text-gold-gradient">{word}</span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </h2>
      )}
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
              openIndex === index ? "border-[#D4AF37]/30" : "border-white/10"
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={openIndex === index}
            >
              <span className="text-white font-medium">{faq.q}</span>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                openIndex === index
                  ? "bg-[#D4AF37] text-[#0A1628]"
                  : "bg-white/5 text-white/50"
              }`}>
                {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-5">
                    <div className="h-px bg-white/10 mb-4" />
                    <p className="text-white/60 leading-relaxed">{faq.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
