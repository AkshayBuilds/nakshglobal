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
          <p className="text-[#E85D04] text-xs font-bold tracking-[0.15em] uppercase mb-6">Global Destinations</p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-2xl leading-tight"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif", letterSpacing: "-0.02em" }}
          >
            Choose your destination
          </h1>
          <p className="text-[#D6E4FF]/80 text-lg max-w-xl">
            Explore detailed immigration guides, visa pathways, and cost breakdowns for the world&apos;s top destinations.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
            <p className="text-[#6B7280] text-sm">
              Select up to 2 countries to compare them side by side.
            </p>
            {selected.length > 0 && (
              <button
                onClick={() => setSelected([])}
                className="text-[#9CA3AF] hover:text-[#111827] text-sm transition-colors"
              >
                Clear selection
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {COUNTRIES.map((country, i) => {
              const isSelected = selected.includes(country.id);
              return (
                <motion.div
                  key={country.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.05, 0.4) }}
                >
                  <div
                    className={`flex items-center gap-3 px-5 py-3 bg-white border rounded-full transition-all ${
                      isSelected
                        ? "border-[#E85D04] shadow-md bg-[#FFF5E6]"
                        : "border-[#E5E7EB] hover:border-[#E85D04] hover:shadow-md hover:-translate-y-0.5"
                    }`}
                  >
                    <Link
                      href={`/countries/${country.slug}`}
                      className="flex items-center gap-3 group"
                    >
                      <span className="text-xl">{country.flag}</span>
                      <span
                        className="font-semibold text-sm text-[#374151] group-hover:text-[#E85D04] transition-colors"
                        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                      >
                        {country.name}
                      </span>
                    </Link>
                    <button
                      onClick={() => toggleCompare(country.id)}
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border transition-all ${
                        isSelected
                          ? "bg-[#E85D04] text-white border-[#E85D04]"
                          : "text-[#9CA3AF] border-[#E5E7EB] hover:border-[#E85D04] hover:text-[#E85D04]"
                      }`}
                    >
                      {isSelected ? "Selected" : "Compare"}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNTRIES.map((country, i) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={`/countries/${country.slug}`}
                  className="group block bg-[#F9FAFB] rounded-xl border border-[#E5E7EB] p-6 hover:border-[#E85D04]/30 hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{country.flag}</span>
                    <div>
                      <h2
                        className="text-lg font-bold text-[#111827] group-hover:text-[#E85D04] transition-colors"
                        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                      >
                        {country.name}
                      </h2>
                      <p className="text-[#9CA3AF] text-xs mt-0.5">{country.tagline}</p>
                    </div>
                  </div>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-4 line-clamp-2">
                    {country.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-[#0A2463] text-sm font-semibold group-hover:text-[#E85D04] transition-colors">
                    Explore Guide <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selected.length === 2 && (
        <section className="py-16 bg-[#F9FAFB] border-t border-[#E5E7EB]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="heading-md mb-8"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Comparing {selectedCountries[0].name} vs {selectedCountries[1].name}
            </h2>
            <div className="bg-white rounded-xl overflow-hidden border border-[#E5E7EB]">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Criteria</th>
                    <th>
                      {selectedCountries[0].flag} {selectedCountries[0].name}
                    </th>
                    <th>
                      {selectedCountries[1].flag} {selectedCountries[1].name}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Immigration Pathways</td>
                    <td>{selectedCountries[0].immigrationPathways.slice(0, 2).join(", ")}</td>
                    <td>{selectedCountries[1].immigrationPathways.slice(0, 2).join(", ")}</td>
                  </tr>
                  <tr>
                    <td>Study Highlight</td>
                    <td>{selectedCountries[0].studyOpportunities.highlights[0]}</td>
                    <td>{selectedCountries[1].studyOpportunities.highlights[0]}</td>
                  </tr>
                  <tr>
                    <td>Work Highlight</td>
                    <td>{selectedCountries[0].workOpportunities.highlights[0]}</td>
                    <td>{selectedCountries[1].workOpportunities.highlights[0]}</td>
                  </tr>
                  {selectedCountries[0].costs.map((cost, idx) => (
                    <tr key={cost.item}>
                      <td>{cost.item}</td>
                      <td>{cost.amount}</td>
                      <td>{selectedCountries[1].costs[idx]?.amount ?? "N/A"}</td>
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
