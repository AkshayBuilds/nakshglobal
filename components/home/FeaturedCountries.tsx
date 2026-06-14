"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COUNTRIES } from "@/lib/constants";

export default function FeaturedCountries() {
  return (
    <section className="section-padding bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <h2 className="heading-lg">Countries We Serve</h2>
            <p className="body-md mt-3 max-w-lg">
              We have deep expertise across 10+ countries and growing.
            </p>
          </div>
          <Link href="/countries" className="btn-outline inline-flex self-start">
            Explore All Countries <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {COUNTRIES.map((country, i) => (
            <motion.div
              key={country.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.4) }}
            >
              <Link
                href={`/countries/${country.slug}`}
                className="flex items-center gap-3 px-5 py-3 bg-white border border-[#E5E7EB] rounded-full hover:border-[#E85D04] hover:shadow-md hover:-translate-y-0.5 transition-all group"
              >
                <span className="text-xl">{country.flag}</span>
                <span
                  className="font-semibold text-sm text-[#374151] group-hover:text-[#E85D04] transition-colors"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {country.name}
                </span>
                <span className="text-[10px] text-[#9CA3AF] border border-[#E5E7EB] rounded-full px-2 py-0.5">
                  {country.immigrationPathways?.length || 3} visas
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
