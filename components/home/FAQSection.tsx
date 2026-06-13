"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "How long does the visa process typically take?",
    a: "Processing times vary by country and visa type. For example, Canadian study permits typically take 8–12 weeks, while UK visit visas can take 3–8 weeks. During your consultation, we provide a realistic timeline specific to your application.",
  },
  {
    q: "What documents are generally required for a student visa?",
    a: "Common requirements include a valid passport, letter of admission from the institution, proof of financial support (bank statements, scholarship letters), academic transcripts, English proficiency test scores (IELTS/TOEFL), and a statement of purpose. Requirements vary by destination country.",
  },
  {
    q: "Can I apply for a work permit while on a student visa?",
    a: "Many countries allow international students to work part-time during studies and apply for post-study work permits after graduation. Canada's PGWP, the UK Graduate Route, and Australia's 485 visa are examples. We'll advise on the specific rules for your destination.",
  },
  {
    q: "What happens if my visa application is refused?",
    a: "A refusal is not the end of the road. We review the refusal letter thoroughly, identify any gaps, and advise on whether to re-apply with stronger documentation or explore an appeal. Our consultants prepare thorough applications upfront to minimise this risk.",
  },
  {
    q: "How much does a consultation cost?",
    a: "We offer an initial free assessment to understand your profile and goals. Detailed consultation fees depend on the complexity of your case and the destination. Please contact us or book a slot to get a clear fee structure before we begin.",
  },
  {
    q: "Do you guarantee visa approval?",
    a: "No legitimate consultancy can guarantee visa approval, as the final decision rests with the immigration authority. What we guarantee is thorough preparation, transparent guidance, and our best professional effort on every application.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section-padding bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto mb-4">Common Questions</div>
          <h2 className="heading-lg">Frequently Asked Questions</h2>
          <p className="body-md max-w-2xl mx-auto mt-4 text-[#334155]">
            Answers to the questions clients most commonly ask before beginning their immigration journey.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                openIndex === i
                  ? "border-[#C9A227]/30 shadow-[0_2px_12px_rgba(15,23,42,0.08)]"
                  : "border-[#E2E8F0] hover:border-[#CBD5E1]"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === i}
                id={`faq-button-${i}`}
              >
                <span
                  className={`font-semibold text-[15px] pr-4 ${
                    openIndex === i ? "text-[#C9A227]" : "text-[#0F172A]"
                  }`}
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  openIndex === i ? "bg-[#C9A227] text-[#0F172A]" : "bg-[#EFF3F8] text-[#C9A227]"
                }`}>
                  {openIndex === i ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 border-t border-[#F1F5F9]">
                      <p className="text-[#475569] text-sm leading-relaxed pt-4">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
