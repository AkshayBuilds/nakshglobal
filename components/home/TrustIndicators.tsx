"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, Scale, UserCheck } from "lucide-react";

const trustPillars = [
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    description:
      "Every step of your visa application is communicated clearly. No hidden steps, no surprises — you always know where your case stands.",
  },
  {
    icon: FileText,
    title: "Documentation Support",
    description:
      "Our team prepares and reviews every document required for your application, ensuring accuracy and completeness before submission.",
  },
  {
    icon: Scale,
    title: "Ethical Guidance",
    description:
      "We provide honest, unbiased advice. We will not recommend a visa path unless it genuinely aligns with your profile and goals.",
  },
  {
    icon: UserCheck,
    title: "Personalised Consultation",
    description:
      "No cookie-cutter advice. Every client receives a dedicated consultation tailored to their individual circumstances and destination.",
  },
];

export default function TrustIndicators() {
  return (
    <section className="py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="section-label mx-auto mb-4">Our Commitment to You</div>
          <h2 className="heading-lg">
            What Sets Our Practice Apart
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 gold-accent-top hover:shadow-[0_4px_24px_rgba(15,23,42,0.08)] transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-lg bg-[#FDF9EE] border border-[#F2DB8E] flex items-center justify-center mb-5 group-hover:bg-[#C9A227]/10 transition-colors">
                <pillar.icon className="w-5 h-5 text-[#C9A227]" />
              </div>
              <h3
                className="font-bold text-[#0F172A] text-base mb-2"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                {pillar.title}
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
