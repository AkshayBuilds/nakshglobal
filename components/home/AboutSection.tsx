"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const values = [
  "Transparent, jargon-free communication at every step",
  "Ethical advice aligned with your best interests",
  "Complete end-to-end documentation and filing support",
  "Dedicated case officer for your application",
  "Post-visa support and arrival guidance",
];

const founders = [
  {
    name: "Jay Trivedi",
    role: "Co-Founder & Principal Consultant",
    initials: "JT",
    bio: "With deep expertise in immigration law and international education, Jay leads client consultations and oversees complex visa applications across Canada, UK, and Australia.",
  },
  {
    name: "Shakti Rajput",
    role: "Co-Founder & Operations Director",
    initials: "SR",
    bio: "Shakti brings years of experience in documentation management and government liaisons, ensuring every client application meets the highest standards of accuracy and compliance.",
  },
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── About the Firm ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label mb-6">About Naksh Global Visa</div>
            <h2 className="heading-lg mb-6">
              A Consultancy Built on{" "}
              <span className="text-[#C9A227]">Trust &amp; Transparency</span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#C9A227] to-[#DDB954] rounded-full mb-8" />
            <p className="body-md text-[#334155] mb-6">
              Naksh Global Visa was established with a singular purpose — to make international immigration
              accessible, honest, and stress-free for every client. We work with students, working
              professionals, and families who are navigating the complex world of visa applications.
            </p>
            <p className="body-md text-[#334155] mb-8">
              Our team of experienced consultants brings together deep knowledge of immigration regulations
              across Canada, the United Kingdom, Australia, the United States, Germany, and New Zealand.
              We believe in building long-term relationships, not just processing paperwork.
            </p>

            <ul className="space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                  <span className="text-[#475569] text-sm leading-relaxed">{v}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Stats panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { number: "6+", label: "Countries Served", sub: "Canada, UK, Australia, USA, Germany & NZ" },
              { number: "3", label: "Visa Categories", sub: "Student, Work Permit & Visitor Visa" },
              { number: "2017", label: "Established", sub: "Nearly a decade of trusted guidance" },
              { number: "100%", label: "Client Focus", sub: "Dedicated case officer per application" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-xl border ${
                  i === 0
                    ? "bg-[#0F172A] border-[#0F172A] text-white"
                    : "bg-[#F8FAFC] border-[#E2E8F0]"
                }`}
              >
                <div
                  className={`text-3xl font-bold mb-1 ${
                    i === 0
                      ? "text-[#C9A227]"
                      : "text-[#0F172A]"
                  }`}
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {item.number}
                </div>
                <div
                  className={`font-semibold text-sm mb-1 ${
                    i === 0 ? "text-white" : "text-[#0F172A]"
                  }`}
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {item.label}
                </div>
                <div className={`text-xs leading-relaxed ${i === 0 ? "text-white/60" : "text-[#94A3B8]"}`}>
                  {item.sub}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Founders ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-[#E2E8F0] pt-16"
        >
          <div className="text-center mb-12">
            <div className="section-label mx-auto mb-4">Leadership</div>
            <h2 className="heading-lg">Meet Our Founders</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-8 hover:border-[#C9A227]/30 hover:shadow-[0_4px_24px_rgba(15,23,42,0.08)] transition-all duration-300"
              >
                {/* Avatar */}
                <div className="w-16 h-16 rounded-xl bg-[#0F172A] flex items-center justify-center mb-5">
                  <span
                    className="text-[#C9A227] text-xl font-bold"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {founder.initials}
                  </span>
                </div>
                <h3
                  className="font-bold text-[#0F172A] text-lg mb-1"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {founder.name}
                </h3>
                <p className="text-[#C9A227] text-xs font-semibold tracking-wide uppercase mb-4">
                  {founder.role}
                </p>
                <p className="text-[#64748B] text-sm leading-relaxed">{founder.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
