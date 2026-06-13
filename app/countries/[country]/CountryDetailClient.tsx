"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight, BookOpen, Briefcase, MapPin, DollarSign, FileText, GitBranch } from "lucide-react";

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
    <div className="min-h-screen bg-[#0A1628]">
      {/* Hero */}
      <section className={`relative pt-32 pb-24 bg-gradient-to-br ${country.heroColor} overflow-hidden`}>
        <div className="absolute inset-0 bg-[#0A1628]/60" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A1628] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/40 text-sm mb-8">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/countries" className="hover:text-[#D4AF37] transition-colors">Countries</Link>
            <span>/</span>
            <span className="text-white/70">{country.name}</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-5 mb-6">
              <span className="text-8xl">{country.flag}</span>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white">{country.name}</h1>
                <p className="text-[#D4AF37] text-lg font-medium mt-1">{country.tagline}</p>
              </div>
            </div>
            <p className="text-white/70 text-xl max-w-3xl leading-relaxed mb-8">{country.description}</p>
            <Link href="/free-assessment" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#b8942a] text-[#0A1628] font-bold rounded-2xl hover:shadow-[0_8px_40px_rgba(212,175,55,0.4)] transition-all hover:scale-105">
              Apply for {country.name} Visa <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">Why <span className="text-gold-gradient">{country.name}?</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {country.benefits.map((b, i) => (
              <motion.div key={b} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl p-4 border border-white/10 text-center hover:border-[#D4AF37]/20 transition-all">
                <p className="text-white/70 text-sm">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Study & Work */}
      <section className="py-20 bg-[#060e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Study */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-8 border border-blue-500/20 bg-gradient-to-br from-blue-600/5 to-transparent">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center"><BookOpen className="w-5 h-5 text-blue-400" /></div>
                <h2 className="text-xl font-bold text-white">Study Opportunities</h2>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-5">{country.studyOpportunities.summary}</p>
              <ul className="space-y-2">
                {country.studyOpportunities.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />{h}
                  </li>
                ))}
              </ul>
            </motion.div>
            {/* Work */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-8 border border-emerald-500/20 bg-gradient-to-br from-emerald-600/5 to-transparent">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center"><Briefcase className="w-5 h-5 text-emerald-400" /></div>
                <h2 className="text-xl font-bold text-white">Work Opportunities</h2>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-5">{country.workOpportunities.summary}</p>
              <ul className="space-y-2">
                {country.workOpportunities.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />{h}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pathways, Costs, Documents, Process */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pathways */}
            <div className="glass rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-5"><GitBranch className="w-5 h-5 text-[#D4AF37]" /><h3 className="text-lg font-bold text-white">Immigration Pathways</h3></div>
              <ul className="space-y-2">
                {country.immigrationPathways.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-white/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />{p}
                  </li>
                ))}
              </ul>
            </div>
            {/* Costs */}
            <div className="glass rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-5"><DollarSign className="w-5 h-5 text-[#D4AF37]" /><h3 className="text-lg font-bold text-white">Cost Estimates</h3></div>
              <table className="w-full">
                <tbody className="space-y-2">
                  {country.costs.map((c) => (
                    <tr key={c.item} className="border-b border-white/5">
                      <td className="py-2 text-sm text-white/50">{c.item}</td>
                      <td className="py-2 text-sm text-[#D4AF37] font-semibold text-right">{c.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Documents */}
            <div className="glass rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-5"><FileText className="w-5 h-5 text-[#D4AF37]" /><h3 className="text-lg font-bold text-white">Key Documents Required</h3></div>
              <ul className="space-y-2">
                {country.documents.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />{d}
                  </li>
                ))}
              </ul>
            </div>
            {/* Visa Process */}
            <div className="glass rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-5"><MapPin className="w-5 h-5 text-[#D4AF37]" /><h3 className="text-lg font-bold text-white">Visa Process Steps</h3></div>
              <ol className="space-y-3">
                {country.visaProcess.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-white/60">
                    <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#b8942a] flex items-center justify-center text-[#0A1628] font-bold text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#060e1a] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Immigrate to <span className="text-gold-gradient">{country.name}?</span></h2>
          <p className="text-white/50 mb-8">Our certified experts will create a personalised strategy for your {country.name} visa application.</p>
          <Link href="/free-assessment" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#b8942a] text-[#0A1628] font-bold rounded-2xl hover:shadow-[0_8px_40px_rgba(212,175,55,0.4)] transition-all hover:scale-105">
            Start Your {country.name} Journey <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
