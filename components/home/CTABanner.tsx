"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-24 bg-[#0A2463] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="heading-lg text-white mb-4"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Ready to start your visa journey?
          </h2>
          <p className="body-lg text-white/60 mb-10">
            Book a free consultation today. No commitment, no hidden fees —
            just honest guidance from people who care about your outcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/free-assessment" id="cta-banner-book" className="btn-primary">
              <CalendarCheck className="w-4 h-4" />
              Book Free Consultation
            </Link>
            <Link href="/contact" className="btn-outline-white">
              <Phone className="w-4 h-4" />
              +91 98765 43210
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {["Registered Consultants", "10+ Countries", "Since 2017", "500+ Clients"].map((chip) => (
              <div
                key={chip}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-white/60 text-xs font-medium"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#E85D04]" />
                {chip}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
