"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarCheck, Phone, Shield } from "lucide-react";
import { PHONE_NUMBER } from "@/lib/constants";

export default function CTABanner() {
  return (
    <section className="py-24 bg-[#03071E] relative overflow-hidden">
      {/* Background glow layers */}
      <div className="glow-blob glow-blue w-[600px] h-[600px] -top-40 -left-40 opacity-20" />
      <div className="glow-blob glow-orange w-[500px] h-[500px] -bottom-40 -right-40 opacity-15" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="w-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-[11px] font-bold uppercase tracking-wider mb-6">
            <Shield className="w-3.5 h-3.5 text-[#E85D04]" />
            Strict Data Confidentiality Guaranteed
          </div>

          <h2
            className="heading-lg text-white mb-6 leading-tight"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Ready to Begin Your Visa Journey?
          </h2>
          <p className="body-lg text-white/60 mb-10 max-w-xl mx-auto">
            Book a diagnostic profile consultation with our case officers. No commitments,
            no upfront fees — just an honest evaluation of your global prospects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link href="/free-assessment" id="cta-banner-book" className="btn-primary shadow-orange">
              <CalendarCheck className="w-4 h-4" />
              Book Consultation
            </Link>
            <a href={`tel:${PHONE_NUMBER}`} className="btn-outline-white inline-flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-[#E85D04]" />
              {PHONE_NUMBER}
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {["Certified Legal Advisors", "10+ Countries", "Since 2018", "Meticulous SOP Prep"].map((chip) => (
              <div
                key={chip}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-semibold"
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
