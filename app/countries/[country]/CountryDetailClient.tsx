"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight, BookOpen, Briefcase, DollarSign, FileText, GitBranch, MapPin } from "lucide-react";

interface Country {
  id: string;
  name: string;
  flag: string;
  slug: string;
  tagline: string;
  description: string;
  heroColor: string;
  benefits: string[];
  studyOpportunities: { summary: string; highlights: string[] };
  workOpportunities: { summary: string; highlights: string[] };
  immigrationPathways: string[];
  costs: Array<{ item: string; amount: string }>;
  documents: string[];
  visaProcess: string[];
}

export default function CountryDetailClient({ country }: { country: Country }) {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-24 bg-[#0A2463] overflow-hidden">
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
            <Link href="/countries" className="hover:text-[#E85D04] transition-colors">Countries</Link>
            <span>/</span>
            <span className="text-white/70">{country.name}</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-5 mb-6">
              <span className="text-7xl md:text-8xl">{country.flag}</span>
              <div>
                <h1
                  className="text-4xl md:text-5xl font-bold text-white leading-tight"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif", letterSpacing: "-0.02em" }}
                >
                  {country.name}
                </h1>
                <p className="text-[#E85D04] text-lg font-medium mt-1">{country.tagline}</p>
              </div>
            </div>
            <p className="text-[#D6E4FF]/80 text-lg max-w-3xl leading-relaxed mb-8">{country.description}</p>
            <Link href="/free-assessment" className="btn-primary">
              Apply for {country.name} Visa <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="heading-lg mb-2">Why {country.name}?</h2>
          </motion.div>
          <div className="flex flex-wrap gap-3">
            {country.benefits.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] text-[#4B5563] text-sm hover:border-[#E85D04]/30 transition-all"
              >
                {b}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-[#E5E7EB] p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0A2463] flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-[#E85D04]" />
                </div>
                <h2
                  className="text-xl font-bold text-[#111827]"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Study Opportunities
                </h2>
              </div>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-5">{country.studyOpportunities.summary}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {country.studyOpportunities.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2 text-sm text-[#4B5563]">
                    <CheckCircle2 className="w-4 h-4 text-[#E85D04] flex-shrink-0 mt-0.5" />
                    {h}
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
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0A2463] flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-[#E85D04]" />
                </div>
                <h2
                  className="text-xl font-bold text-[#111827]"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Work Opportunities
                </h2>
              </div>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-5">{country.workOpportunities.summary}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {country.workOpportunities.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2 text-sm text-[#4B5563]">
                    <CheckCircle2 className="w-4 h-4 text-[#E85D04] flex-shrink-0 mt-0.5" />
                    {h}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F9FAFB] rounded-xl border border-[#E5E7EB] p-8">
              <div className="flex items-center gap-3 mb-5">
                <GitBranch className="w-5 h-5 text-[#E85D04]" />
                <h3
                  className="text-lg font-bold text-[#111827]"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Immigration Pathways
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {country.immigrationPathways.map((p) => (
                  <div key={p} className="flex items-center gap-2 text-sm text-[#4B5563]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E85D04]" />
                    {p}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F9FAFB] rounded-xl border border-[#E5E7EB] p-8">
              <div className="flex items-center gap-3 mb-5">
                <DollarSign className="w-5 h-5 text-[#E85D04]" />
                <h3
                  className="text-lg font-bold text-[#111827]"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Cost Estimates
                </h3>
              </div>
              <table className="w-full">
                <tbody>
                  {country.costs.map((c) => (
                    <tr key={c.item} className="border-b border-[#E5E7EB] last:border-0">
                      <td className="py-2 text-sm text-[#6B7280]">{c.item}</td>
                      <td className="py-2 text-sm text-[#E85D04] font-semibold text-right">{c.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#F9FAFB] rounded-xl border border-[#E5E7EB] p-8">
              <div className="flex items-center gap-3 mb-5">
                <FileText className="w-5 h-5 text-[#E85D04]" />
                <h3
                  className="text-lg font-bold text-[#111827]"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Key Documents Required
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {country.documents.map((d) => (
                  <div key={d} className="flex items-start gap-2 text-sm text-[#4B5563]">
                    <CheckCircle2 className="w-4 h-4 text-[#E85D04] flex-shrink-0 mt-0.5" />
                    {d}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F9FAFB] rounded-xl border border-[#E5E7EB] p-8">
              <div className="flex items-center gap-3 mb-5">
                <MapPin className="w-5 h-5 text-[#E85D04]" />
                <h3
                  className="text-lg font-bold text-[#111827]"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Visa Process Steps
                </h3>
              </div>
              <ol className="space-y-3">
                {country.visaProcess.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-[#4B5563]">
                    <span
                      className="w-5 h-5 rounded-full bg-[#0A2463] flex items-center justify-center text-[#E85D04] font-bold text-xs flex-shrink-0 mt-0.5"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A2463]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Ready to immigrate to {country.name}?
          </h2>
          <p className="text-[#D6E4FF]/70 mb-8">
            Our certified experts will create a personalised strategy for your {country.name} visa application.
          </p>
          <Link href="/free-assessment" className="btn-primary">
            Start Your {country.name} Journey <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
