"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COUNTRIES } from "@/lib/constants";
import { useState } from "react";

export default function CountriesClient() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleCompare = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : prev.length < 2 ? [...prev, id] : prev
    );
  };

  const selectedCountries = COUNTRIES.filter((c) => selected.includes(c.id));

  return (
    <div className="min-h-screen bg-[#0A1628]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#060e1a] to-[#0A1628] overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium mb-6">
            Global Destinations
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Choose Your <span className="text-gold-gradient">Destination</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Explore detailed immigration guides, visa pathways, and cost breakdowns for the world's top destinations.
          </p>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
            <p className="text-white/50 text-sm">
              Select up to 2 countries to compare them side by side.
            </p>
            {selected.length > 0 && (
              <button
                onClick={() => setSelected([])}
                className="text-white/40 hover:text-white text-sm transition-colors"
              >
                Clear selection
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNTRIES.map((country, i) => {
              const isSelected = selected.includes(country.id);
              return (
                <motion.div
                  key={country.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`group glass rounded-3xl overflow-hidden border transition-all duration-300 ${
                    isSelected
                      ? "border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                      : "border-white/10 hover:border-[#D4AF37]/20"
                  }`}
                >
                  {/* Header */}
                  <div className={`p-6 bg-gradient-to-br ${country.heroColor} flex items-center justify-between`}>
                    <div className="flex items-center gap-3">
                      <span className="text-5xl">{country.flag}</span>
                      <div>
                        <h2 className="text-white font-bold text-xl">{country.name}</h2>
                        <p className="text-white/60 text-sm">{country.tagline}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleCompare(country.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        isSelected
                          ? "bg-[#D4AF37] text-[#0A1628]"
                          : "bg-white/10 text-white/60 hover:bg-white/20"
                      }`}
                    >
                      {isSelected ? "✓ Selected" : "Compare"}
                    </button>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">{country.description}</p>
                    <div className="space-y-1.5 mb-5">
                      {country.immigrationPathways.slice(0, 3).map((p) => (
                        <div key={p} className="flex items-center gap-2 text-xs text-white/40">
                          <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                          {p}
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/countries/${country.slug}`}
                      className="inline-flex items-center gap-2 text-[#D4AF37] text-sm font-semibold group-hover:gap-3 transition-all"
                    >
                      Explore Guide <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      {selected.length === 2 && (
        <section className="py-16 bg-[#060e1a] border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Comparing <span className="text-gold-gradient">{selectedCountries[0].name} vs {selectedCountries[1].name}</span>
            </h2>
            <div className="glass rounded-3xl overflow-hidden border border-white/10">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Criteria</th>
                    <th>{selectedCountries[0].flag} {selectedCountries[0].name}</th>
                    <th>{selectedCountries[1].flag} {selectedCountries[1].name}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="text-white/60">Immigration Pathways</td><td>{selectedCountries[0].immigrationPathways.slice(0,2).join(", ")}</td><td>{selectedCountries[1].immigrationPathways.slice(0,2).join(", ")}</td></tr>
                  <tr><td className="text-white/60">Study Highlight</td><td>{selectedCountries[0].studyOpportunities.highlights[0]}</td><td>{selectedCountries[1].studyOpportunities.highlights[0]}</td></tr>
                  <tr><td className="text-white/60">Work Highlight</td><td>{selectedCountries[0].workOpportunities.highlights[0]}</td><td>{selectedCountries[1].workOpportunities.highlights[0]}</td></tr>
                  {selectedCountries[0].costs.map((cost, i) => (
                    <tr key={cost.item}>
                      <td className="text-white/60">{cost.item}</td>
                      <td>{cost.amount}</td>
                      <td>{selectedCountries[1].costs[i]?.amount ?? "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
