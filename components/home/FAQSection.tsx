"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GENERAL_FAQS } from "@/lib/constants";

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#E5E7EB] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
        id={`faq-button-${index}`}
      >
        <span
          className={`font-semibold text-[15px] pr-4 transition-colors ${
            open ? "text-[#111827]" : "text-[#374151]"
          }`}
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          {faq.q}
        </span>
        <span
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-[#E85D04] text-xl font-light leading-none"
          aria-hidden="true"
        >
          {open ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-[#6B7280] text-sm leading-relaxed pb-5 pr-12">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div className="section-label mb-5">FAQ</div>
            <h2 className="heading-lg mb-4">Common questions</h2>
            <p className="body-md mb-6">
              Can&apos;t find what you&apos;re looking for? Get in touch directly.
            </p>
            <Link href="/contact" className="btn-primary inline-flex">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="lg:col-span-2 space-y-0 divide-y divide-[#E5E7EB] border-t border-[#E5E7EB]">
            {GENERAL_FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <FAQItem faq={faq} index={i} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
