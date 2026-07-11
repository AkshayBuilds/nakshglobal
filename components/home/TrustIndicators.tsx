"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, Scale, UserCheck } from "lucide-react";

const trustPillars = [
  {
    icon: ShieldCheck,
    title: "Transparent Case Management",
    description:
      "We provide clear milestone mapping and real-time visibility for your application. No hidden procedures, no sudden surprises.",
  },
  {
    icon: FileText,
    title: "Rigorous Document Auditing",
    description:
      "Every document, transcript, and financial record undergoes a meticulous multi-tier review to ensure compliance before submission.",
  },
  {
    icon: Scale,
    title: "Strict Policy Compliance",
    description:
      "We align every case strategy strictly with current embassy laws and policy directives. We only recommend legitimate visa pathways.",
  },
  {
    icon: UserCheck,
    title: "Tailored Case Strategy",
    description:
      "No generic strategies. We evaluate your unique academic and professional background to design a roadmap built for success.",
  },
];

export default function TrustIndicators() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="w-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border-l-4 border-[#E85D04] pl-8"
          >
            <p className="text-[#E85D04] text-xs font-bold tracking-[0.15em] uppercase mb-3">
              The Naksh Standard
            </p>
            <h2 className="heading-lg mb-4 text-[#0A2463]">What Sets Our Practice Apart</h2>
            <p className="body-md text-[#6B7280]">
              We operate under a simple mandate: your successful outcome. We reject shortcut methods, 
              focusing purely on professional integrity and legal compliance.
            </p>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {trustPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 items-start p-4 rounded-xl hover:bg-[#F9FAFB] transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0A2463]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0A2463] transition-colors duration-300">
                  <pillar.icon className="w-5 h-5 text-[#E85D04] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3
                    className="font-bold text-[#111827] text-base mb-1.5 group-hover:text-[#0A2463] transition-colors"
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
