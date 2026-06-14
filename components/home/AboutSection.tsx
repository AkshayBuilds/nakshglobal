"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

const stats = [
  { number: "500+", label: "Clients Helped", sub: "Students, professionals & families" },
  { number: "10+", label: "Countries Served", sub: "Canada, UK, Australia, USA & more" },
  { number: "2017", label: "Established", sub: "Nearly a decade of trusted guidance" },
  { number: "98%", label: "Success Rate", sub: "Thorough preparation, honest advice" },
];

const values = [
  "Transparent, jargon-free communication at every step",
  "Ethical advice aligned with your best interests",
  "Complete end-to-end documentation and filing support",
  "Dedicated case officer for your application",
  "Post-visa support and arrival guidance",
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#0A2463]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {stats.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-b border-white/10 pb-8 last:border-0 last:pb-0"
              >
                <div
                  className="text-5xl md:text-6xl font-black text-[#E85D04] leading-none mb-2"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {item.number}
                </div>
                <div
                  className="text-white font-bold text-lg mb-1"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {item.label}
                </div>
                <div className="text-[#D6E4FF]/60 text-sm">{item.sub}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-[#E85D04] text-xs font-bold tracking-[0.15em] uppercase mb-4">
              About Naksh Global Visa
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif", letterSpacing: "-0.02em" }}
            >
              A consultancy built on trust & transparency
            </h2>
            <p className="text-[#D6E4FF]/80 text-base leading-relaxed mb-6">
              Naksh Global Visa was established with a singular purpose — to make international immigration
              accessible, honest, and stress-free for every client. We work with students, working
              professionals, and families navigating the complex world of visa applications.
            </p>
            <p className="text-[#D6E4FF]/60 text-sm leading-relaxed mb-8">
              Our team brings deep knowledge of immigration regulations across Canada, the United Kingdom,
              Australia, the United States, Germany, and New Zealand. We believe in building long-term
              relationships, not just processing paperwork.
            </p>

            <ul className="space-y-3 mb-10">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E85D04] flex-shrink-0 mt-0.5" />
                  <span className="text-[#D6E4FF]/80 text-sm leading-relaxed">{v}</span>
                </li>
              ))}
            </ul>

            <div className="relative h-48 rounded-xl overflow-hidden mb-8">
              <Image
                src="/hero-consultation.png"
                alt="Naksh Global Visa consultation team"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A2463]/80 to-transparent" />
            </div>

            <Link href="/about" className="btn-outline-white inline-flex">
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
