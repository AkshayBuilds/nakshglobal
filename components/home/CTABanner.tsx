"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarCheck, MessageSquare, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 bg-[#0F172A] relative overflow-hidden">
      {/* Subtle decorative element — no neon, just a quiet gold border line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A227]" />

      {/* Quiet background texture — very subtle, geometric */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            rgba(201,162,39,0.5) 0px,
            rgba(201,162,39,0.5) 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/25 text-[#C9A227] text-xs font-semibold tracking-widest uppercase mb-8">
            <CalendarCheck className="w-3.5 h-3.5" />
            Free Consultation Available
          </div>

          {/* Headline */}
          <h2
            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif", letterSpacing: "-0.02em" }}
          >
            Ready to Begin Your
            <br />
            <span className="text-[#C9A227]">Immigration Journey?</span>
          </h2>

          {/* Subtext */}
          <p className="text-[#94A3B8] text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book a free consultation with our experienced advisors. We&apos;ll review your
            profile honestly and outline the right path for your goals.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/free-assessment"
              id="cta-banner-book"
              className="btn-primary w-full sm:w-auto justify-center"
            >
              <CalendarCheck className="w-4 h-4" />
              Book Consultation
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20discuss%20my%20visa%20application%20with%20Naksh%20Global%20Visa."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white w-full sm:w-auto justify-center"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-[#94A3B8] hover:text-white text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C9A227]" />
              +91 98765 43210
            </a>
          </div>

          {/* Disclaimer */}
          <p className="mt-8 text-[#475569] text-xs">
            No commitment required. Free initial assessment. Honest advice from experienced consultants.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
