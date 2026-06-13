"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { TESTIMONIALS, SUCCESS_STORIES, STATS } from "@/lib/constants";
import AnimatedCounter from "@/components/features/AnimatedCounter";

const categories = ["All", "Student Visa", "Work Permit", "Visitor Visa"];

export default function SuccessClient() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All"
    ? SUCCESS_STORIES
    : SUCCESS_STORIES.filter((s) => s.category === activeTab);

  return (
    <div className="min-h-screen bg-[#0A1628]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#060e1a] to-[#0A1628] overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium mb-6">
            Success Stories
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Lives We&apos;ve <span className="text-gold-gradient">Changed</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Real stories from real clients who trusted us with their most important life decisions.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#060e1a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-4xl font-bold text-gold-gradient mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                  activeTab === cat
                    ? "bg-[#D4AF37] border-[#D4AF37] text-[#0A1628]"
                    : "bg-white/5 border-white/10 text-white/60 hover:border-[#D4AF37]/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="wait">
              {filtered.map((story, i) => (
                <motion.div
                  key={story.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-3xl p-6 border border-white/10 hover:border-[#D4AF37]/20 transition-all"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#b8942a] flex items-center justify-center text-[#0A1628] font-bold text-lg flex-shrink-0">
                      {story.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-bold">{story.name}</h3>
                        <span className="text-xl">{story.flag}</span>
                      </div>
                      <p className="text-[#D4AF37] text-xs font-medium">{story.category}</p>
                      <p className="text-white/50 text-xs">{story.country}</p>
                    </div>
                    <div className="ml-auto px-2 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">Approved</div>
                  </div>
                  <div className="space-y-3 mb-5">
                    <div className="glass-dark rounded-xl p-3">
                      <p className="text-white/40 text-xs mb-1">Challenge</p>
                      <p className="text-white/70 text-sm">{story.challenge}</p>
                    </div>
                    <div className="glass-dark rounded-xl p-3">
                      <p className="text-white/40 text-xs mb-1">Our Solution</p>
                      <p className="text-white/70 text-sm">{story.solution}</p>
                    </div>
                    <div className="glass-dark rounded-xl p-3 border border-emerald-500/20">
                      <p className="text-emerald-400 text-xs mb-1">Outcome</p>
                      <p className="text-white/70 text-sm">{story.outcome}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white/30 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Timeline: {story.timeline}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#060e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">What Our <span className="text-gold-gradient">Clients Say</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="glass rounded-3xl p-6 border border-white/10">
                <div className="flex gap-1 mb-4">{Array.from({ length: t.rating }).map((_, idx) => <Star key={idx} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />)}</div>
                <p className="text-white/70 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#b8942a] flex items-center justify-center text-[#0A1628] font-bold text-sm">{t.avatar}</div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-white/40 text-xs">{t.flag} {t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A1628] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Your Success Story <span className="text-gold-gradient">Starts Here</span></h2>
          <p className="text-white/50 mb-8">Join thousands of clients who achieved their global dreams with Naksh Global Visa.</p>
          <Link href="/free-assessment" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#b8942a] text-[#0A1628] font-bold rounded-2xl hover:shadow-[0_8px_40px_rgba(212,175,55,0.4)] transition-all hover:scale-105">
            Begin Your Journey <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
