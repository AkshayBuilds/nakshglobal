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
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-l-4 border-[#E85D04] pl-8"
          >
            <p className="text-[#E85D04] text-xs font-bold tracking-[0.15em] uppercase mb-3">
              Our Commitment
            </p>
            <h2 className="heading-lg mb-4">What sets our practice apart</h2>
            <p className="body-md">
              We operate with one simple rule: your interests always come first.
              No upselling, no shortcuts, no false promises.
            </p>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trustPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0A2463] flex items-center justify-center flex-shrink-0">
                  <pillar.icon className="w-5 h-5 text-[#E85D04]" />
                </div>
                <div>
                  <h3
                    className="font-bold text-[#111827] text-[15px] mb-1"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
