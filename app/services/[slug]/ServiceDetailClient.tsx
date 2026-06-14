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
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-[#0A2463] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/40 text-sm mb-8">
            <Link href="/" className="hover:text-[#E85D04] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#E85D04] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/70">{service.title}</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-[#E85D04] text-xs font-bold tracking-[0.15em] uppercase mb-6">Visa Services</p>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif", letterSpacing: "-0.02em" }}
            >
              {service.title}
            </h1>
            <p className="text-[#D6E4FF]/80 text-lg max-w-2xl leading-relaxed mb-8">{service.description}</p>
            <Link href="/free-assessment" className="btn-primary">
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="heading-lg mb-2">How it works</h2>
            <p className="body-md">Our streamlined process for your {service.title} application.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E7EB] border border-[#E5E7EB] rounded-xl overflow-hidden">
            {service.process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 hover:bg-[#F9FAFB] transition-colors relative"
              >
                <div
                  className="text-[48px] font-black text-[#0A2463]/[0.04] leading-none absolute top-4 right-4 select-none"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {String(p.step).padStart(2, "0")}
                </div>
                <div className="w-8 h-8 rounded-full border border-[#E85D04] flex items-center justify-center mb-4">
                  <span className="text-[#E85D04] text-xs font-bold">{p.step}</span>
                </div>
                <h3
                  className="font-bold text-[#111827] mb-2"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {p.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-[#E5E7EB] p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#0A2463] flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#E85D04]" />
                </div>
                <h2
                  className="text-xl font-bold text-[#111827]"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Required Documents
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.documents.map((doc) => (
                  <div key={doc} className="flex items-start gap-2 text-sm text-[#4B5563]">
                    <CheckCircle2 className="w-4 h-4 text-[#E85D04] flex-shrink-0 mt-0.5" />
                    {doc}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-[#E5E7EB] p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#0A2463] flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-[#E85D04]" />
                </div>
                <h2
                  className="text-xl font-bold text-[#111827]"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Eligibility Criteria
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.eligibility.map((e) => (
                  <div key={e} className="flex items-start gap-2 text-sm text-[#4B5563]">
                    <CheckCircle2 className="w-4 h-4 text-[#E85D04] flex-shrink-0 mt-0.5" />
                    {e}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={service.faqs} title={`${service.title} FAQs`} variant="light" />
        </div>
      </section>

      <section className="py-24 bg-[#0A2463]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Ready for your {service.title}?
          </h2>
          <p className="text-[#D6E4FF]/70 mb-8">
            Our certified experts are ready to guide you. Get a free, personalised consultation today.
          </p>
          <Link href="/free-assessment" className="btn-primary">
            Book Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
