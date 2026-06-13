"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PhoneCall, ClipboardList, FileText, Send, Building2, CheckCircle2, ArrowRight } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";
import FAQAccordion from "@/components/features/FAQAccordion";

const iconMap: Record<string, React.ElementType> = { PhoneCall, ClipboardList, FileText, Send, Building2, CheckCircle2 };

const processFaqs = [
  { q: "How long does the entire visa process take?", a: "It depends on visa type and country. Student visas typically take 4–12 weeks, work permits 8–20 weeks, and visitor visas 3–8 weeks. We always aim for the fastest possible processing." },
  { q: "Do I need to visit your office?", a: "No. Our entire process can be managed online. We serve clients across India and internationally through video consultations, email, and WhatsApp." },
  { q: "What happens if my visa is refused?", a: "We analyze the refusal letter in detail, identify the root cause, and advise you on the best re-application strategy. We've successfully overturned many refusals." },
  { q: "How do you keep me updated on my application status?", a: "We provide regular updates via WhatsApp and email. You'll always know the current status and next steps." },
  { q: "Can I change my target country mid-process?", a: "Yes, though it may restart parts of the process. We'll advise you on the best approach to minimize delays." },
];

export default function ProcessClient() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#060e1a] to-[#0A1628]">
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium mb-6">
              How It Works
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Transparent{" "}
              <span className="text-gold-gradient">6-Step Process</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              No surprises, no confusion. Just a clear path from inquiry to visa approval — guided by experts at every step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Connector */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="absolute left-10 top-full h-6 w-px bg-gradient-to-b from-[#D4AF37]/40 to-transparent z-10" />
                  )}

                  <div className="glass rounded-3xl p-6 md:p-8 border border-white/10 hover:border-[#D4AF37]/20 transition-all">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon & Step */}
                      <div className="flex-shrink-0">
                        <div
                          className="w-20 h-20 rounded-2xl flex items-center justify-center relative"
                          style={{ background: `${step.color}15`, border: `1px solid ${step.color}30` }}
                        >
                          {Icon && <Icon className="w-9 h-9" style={{ color: step.color }} />}
                          <div
                            className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-[#0A1628]"
                            style={{ background: step.color }}
                          >
                            {step.step}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                          <span className="px-3 py-1 rounded-full text-xs font-semibold"
                            style={{ background: `${step.color}15`, color: step.color, border: `1px solid ${step.color}30` }}
                          >
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-white/60 mb-5 leading-relaxed">{step.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {step.details.map((d) => (
                            <div key={d} className="flex items-center gap-2 text-sm text-white/50">
                              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: step.color }} />
                              {d}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#060e1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={processFaqs} title="Process FAQs" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A1628] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to <span className="text-gold-gradient">Get Started?</span></h2>
          <p className="text-white/50 mb-8">Start your Step 1 today — a free, no-obligation consultation.</p>
          <Link href="/free-assessment" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#b8942a] text-[#0A1628] font-bold rounded-2xl hover:shadow-[0_8px_40px_rgba(212,175,55,0.4)] transition-all hover:scale-105">
            Start Step 1 — Free Assessment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
