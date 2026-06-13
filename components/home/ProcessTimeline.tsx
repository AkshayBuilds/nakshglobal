"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { PhoneCall, ClipboardList, FileText, Send, Building2, CheckCircle2 } from "lucide-react";

const iconMap = { PhoneCall, ClipboardList, FileText, Send, Building2, CheckCircle2 };

// Canonical 5-step simplified process for the homepage
const processSteps = [
  {
    step: 1,
    title: "Initial Assessment",
    description: "Share your profile, goals, and destination preferences with our consultant for an honest eligibility review.",
    icon: "PhoneCall",
  },
  {
    step: 2,
    title: "Documentation",
    description: "We prepare a personalised document checklist and guide you through gathering every required file.",
    icon: "ClipboardList",
  },
  {
    step: 3,
    title: "Application Filing",
    description: "Our team meticulously prepares and submits your application to the concerned authority or embassy.",
    icon: "FileText",
  },
  {
    step: 4,
    title: "Embassy Processing",
    description: "We liaise with embassy or immigration authorities and keep you informed at every stage of processing.",
    icon: "Building2",
  },
  {
    step: 5,
    title: "Visa Outcome",
    description: "Upon approval, we guide you through the next steps — travel planning, arrival prep, and beyond.",
    icon: "CheckCircle2",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="section-padding bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/25 text-[#C9A227] text-xs font-semibold tracking-widest uppercase mb-6">
            Our Process
          </div>
          <p
            className="text-3xl md:text-4xl font-bold text-[#94A3B8] mb-4"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif", letterSpacing: "-0.02em" }}
          >
            From Assessment to Approval
          </p>
          <p className="text-[#94A3B8] max-w-xl mx-auto text-base leading-relaxed">
            A clear, step-by-step process designed to maximise your chances and keep you informed throughout.
          </p>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-[#1E3A5F]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C9A227]/30 via-[#C9A227]/60 to-[#C9A227]/30" />
            </div>

            <div className="grid grid-cols-5 gap-4">
              {processSteps.map((step, i) => {
                const Icon = iconMap[step.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Step circle */}
                    <div className="relative z-10 w-14 h-14 rounded-full bg-[#1E3A5F] border-2 border-[#C9A227]/30 flex items-center justify-center mb-5 hover:border-[#C9A227] transition-colors">
                      {Icon && <Icon className="w-6 h-6 text-[#C9A227]" />}
                      <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#C9A227] flex items-center justify-center text-[10px] font-bold text-[#0F172A]"
                        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                      >
                        {step.step}
                      </div>
                    </div>
                    <h4
                      className="text-white font-semibold text-sm mb-2"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {step.title}
                    </h4>
                    <p className="text-[#64748B] text-xs leading-relaxed px-2">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden space-y-4">
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 bg-[#1E3A5F]/40 rounded-xl p-5 border border-[#1E3A5F]"
              >
                <div className="flex-shrink-0 relative">
                  <div className="w-12 h-12 rounded-full bg-[#1E3A5F] border border-[#C9A227]/30 flex items-center justify-center">
                    {Icon && <Icon className="w-5 h-5 text-[#C9A227]" />}
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#C9A227] flex items-center justify-center text-[10px] font-bold text-[#0F172A]">
                    {step.step}
                  </div>
                </div>
                <div>
                  <h4
                    className="text-white font-semibold mb-1.5"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {step.title}
                  </h4>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
