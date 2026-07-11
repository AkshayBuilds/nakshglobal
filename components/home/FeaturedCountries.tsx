"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import { COUNTRIES } from "@/lib/constants";

export default function FeaturedCountries() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="w-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <div className="section-label mb-4">Destinations</div>
            <h2 className="heading-lg text-[#0A2463]">Global Destinations We Serve</h2>
            <p className="body-md mt-3 max-w-lg text-[#6B7280]">
              Complete immigration, visa, and university intake support for leading countries across 6 continents.
            </p>
          </div>
          <Link href="/countries" className="btn-outline border-[#0A2463] text-[#0A2463] hover:bg-[#0A2463] hover:text-white inline-flex self-start">
            Explore All Countries <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COUNTRIES.map((country, i) => (
            <motion.div
              key={country.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.4) }}
            >
              <Link
                href={`/countries/${country.slug}`}
                className="flex flex-col justify-between p-6 bg-white border border-[#E5E7EB] hover:border-[#E85D04]/30 rounded-2xl shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group min-h-[170px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl filter drop-shadow-sm select-none">{country.flag}</span>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#0A2463]/5 text-[#0A2463] border border-[#0A2463]/10 uppercase tracking-wider">
                      {country.immigrationPathways?.length || 3} Pathways
                    </span>
                  </div>
                  
                  <h3
                    className="font-bold text-[#111827] text-base mb-2 group-hover:text-[#E85D04] transition-colors"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {country.name}
                  </h3>
                  
                  {/* Visual listing of pathways if present */}
                  <p className="text-[#6B7280] text-xs leading-relaxed line-clamp-2">
                    {country.description || `Explore student intakes, permanent residency streams, and visitor visas for ${country.name}.`}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-[#E85D04] mt-4 pt-4 border-t border-[#E5E7EB] group-hover:border-[#E85D04]/20 transition-colors">
                  View Entry Requirements
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
