"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, FileText, UserCheck, ArrowRight } from "lucide-react";
import FAQAccordion from "@/components/features/FAQAccordion";

interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string;
  shortDesc: string;
  description: string;
  color: string;
  features: string[];
  process: Array<{ step: number; title: string; desc: string }>;
  documents: string[];
  eligibility: string[];
  faqs: Array<{ q: string; a: string }>;
}

export default function ServiceDetailClient({ service }: { service: Service }) {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#060e1a] to-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, rgba(212,175,55,0.5) 0%, transparent 50%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/40 text-sm mb-8">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#D4AF37] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/70">{service.title}</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium mb-6">
              Visa Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {service.title} <span className="text-gold-gradient">Experts</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl leading-relaxed mb-8">{service.description}</p>
            <Link
              href="/free-assessment"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#b8942a] text-[#0A1628] font-bold rounded-2xl hover:shadow-[0_8px_40px_rgba(212,175,55,0.4)] transition-all hover:scale-105"
            >
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#060e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">How It <span className="text-gold-gradient">Works</span></h2>
            <p className="text-white/50">Our streamlined process for your {service.title} application.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/10 relative"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#b8942a] flex items-center justify-center text-[#0A1628] font-bold text-sm mb-4">
                  {p.step}
                </div>
                <h3 className="text-white font-bold mb-2">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents & Eligibility */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Documents */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h2 className="text-xl font-bold text-white">Required Documents</h2>
              </div>
              <ul className="space-y-3">
                {service.documents.map((doc) => (
                  <li key={doc} className="flex items-start gap-3 text-white/60 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    {doc}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Eligibility */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold text-white">Eligibility Criteria</h2>
              </div>
              <ul className="space-y-3">
                {service.eligibility.map((e) => (
                  <li key={e} className="flex items-start gap-3 text-white/60 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    {e}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#060e1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={service.faqs} title={`${service.title} FAQs`} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A1628] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for your <span className="text-gold-gradient">{service.title}?</span></h2>
          <p className="text-white/50 mb-8">Our certified experts are ready to guide you. Get a free, personalised consultation today.</p>
          <Link href="/free-assessment" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#b8942a] text-[#0A1628] font-bold rounded-2xl hover:shadow-[0_8px_40px_rgba(212,175,55,0.4)] transition-all hover:scale-105">
            Book Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
