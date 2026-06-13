"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { COUNTRIES } from "@/lib/constants";

export default function FeaturedCountries() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto mb-4">Destinations We Serve</div>
          <h2 className="heading-lg">
            Top Immigration Destinations
          </h2>
          <p className="body-md max-w-2xl mx-auto mt-4 text-[#334155]">
            Explore visa and immigration opportunities in the world&apos;s most sought-after
            destinations — for students, professionals, and families.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COUNTRIES.map((country, i) => (
            <motion.div
              key={country.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/countries/${country.slug}`}
                className="group block bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-6 hover:border-[#C9A227]/30 hover:bg-white hover:shadow-[0_4px_24px_rgba(15,23,42,0.10)] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Flag & Name */}
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-4xl">{country.flag}</span>
                  <div>
                    <h3
                      className="text-lg font-bold text-[#0F172A] group-hover:text-[#1E3A5F] transition-colors"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {country.name}
                    </h3>
                    <p className="text-[#94A3B8] text-xs mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {country.tagline}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#E2E8F0] mb-4" />

                {/* Description */}
                <p className="text-[#64748B] text-sm leading-relaxed mb-5 line-clamp-2">
                  {country.description}
                </p>

                {/* Pathways */}
                <div className="space-y-1.5 mb-5">
                  {country.immigrationPathways.slice(0, 3).map((pathway) => (
                    <div key={pathway} className="flex items-center gap-2 text-xs text-[#64748B]">
                      <div className="w-1 h-1 rounded-full bg-[#C9A227] flex-shrink-0" />
                      {pathway}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-[#1E3A5F] text-sm font-semibold group-hover:text-[#C9A227] group-hover:gap-2.5 transition-all"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Explore Options <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/countries" className="btn-outline inline-flex">
            Compare All Countries <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
