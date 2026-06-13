"use client";

import { motion } from "framer-motion";
import { Shield, Award, Heart } from "lucide-react";
const Handshake = () => <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current" fill="none" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;
const LinkedinIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
import Link from "next/link";
import { TEAM, VALUES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = { Shield, Handshake, Award, Heart };

const milestones = [
  { year: "2017", title: "Founded", desc: "Naksh Global Visa established in Bangalore with a mission to democratize immigration guidance." },
  { year: "2019", title: "1,000 Visas", desc: "Crossed 1,000 successful visa approvals across Canada, UK, and Australia." },
  { year: "2021", title: "Expanded Services", desc: "Added Germany, New Zealand, and USA to our portfolio. Team grew to 15 experts." },
  { year: "2023", title: "5,000 Visas", desc: "Milestone of 5,000+ visa approvals with a 98% success rate across 25+ countries." },
  { year: "2025", title: "Digital First", desc: "Launched fully digital consultation platform enabling clients across India to access our services." },
];

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#060e1a] to-[#0A1628]" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium mb-6">
              About Us
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl">
              More Than a Consultancy —{" "}
              <span className="text-gold-gradient">A Trusted Partner</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
              Since 2017, Naksh Global Visa has been the trusted immigration partner for thousands of students, professionals, and families across India. We believe everyone deserves a fair chance at global opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#060e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 border border-[#D4AF37]/20"
            >
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-5">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-white/60 leading-relaxed">
                To provide honest, expert, and accessible immigration guidance that empowers every client to achieve their global aspirations — with transparency, dignity, and a genuine commitment to their success.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1E3A5F]/50 border border-white/10 flex items-center justify-center mb-5">
                <span className="text-2xl">🌍</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-white/60 leading-relaxed">
                To be India's most trusted and ethical immigration consultancy — a company where every client feels heard, respected, and confident that they are receiving the best possible guidance for their unique situation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core <span className="text-gold-gradient">Values</span></h2>
            <p className="text-white/50 max-w-xl mx-auto">The principles that guide every decision, every consultation, and every case we handle.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, i) => {
              const Icon = iconMap[value.icon];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 border border-white/10 hover:border-[#D4AF37]/30 transition-all group text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {Icon && <Icon className="w-7 h-7 text-[#D4AF37]" />}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#060e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our <span className="text-gold-gradient">Expert Team</span></h2>
            <p className="text-white/50 max-w-xl mx-auto">Certified, experienced, and genuinely passionate about helping you succeed.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-3xl p-6 border border-white/10 hover:border-[#D4AF37]/20 transition-all group"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#b8942a] flex items-center justify-center text-[#0A1628] font-bold text-2xl mx-auto mb-4 group-hover:scale-105 transition-transform">
                  {member.avatar}
                </div>
                <h3 className="text-white font-bold text-center mb-1">{member.name}</h3>
                <p className="text-[#D4AF37] text-xs text-center mb-3">{member.role}</p>
                <p className="text-white/50 text-xs text-center leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {member.specialization.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs">{s}</span>
                  ))}
                </div>
                <div className="flex justify-center">
                  <a href={member.linkedin} className="w-8 h-8 rounded-lg bg-[#0077b5]/10 border border-[#0077b5]/20 flex items-center justify-center text-[#0077b5] hover:bg-[#0077b5]/20 transition-all">
                    <LinkedinIcon />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4">Our <span className="text-gold-gradient">Journey</span></h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/30 to-transparent" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 pl-14 relative"
                >
                  <div className="absolute left-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#b8942a] flex items-center justify-center text-[#0A1628] font-bold text-sm flex-shrink-0">
                    {m.year}
                  </div>
                  <div className="glass rounded-2xl p-5 border border-white/10 flex-1">
                    <h3 className="text-white font-bold mb-1">{m.title}</h3>
                    <p className="text-white/50 text-sm">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#060e1a] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin Your <span className="text-gold-gradient">Journey?</span></h2>
          <p className="text-white/50 mb-8">Join thousands of satisfied clients who trusted Naksh Global Visa with their future.</p>
          <Link href="/free-assessment" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#b8942a] text-[#0A1628] font-bold rounded-2xl hover:shadow-[0_8px_40px_rgba(212,175,55,0.4)] transition-all hover:scale-105">
            Get Your Free Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
