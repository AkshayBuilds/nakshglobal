"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Briefcase, Plane, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  GraduationCap,
  Briefcase,
  Plane,
};

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-[#F9FAFB] relative overflow-hidden">
      {/* Background radial lines */}
      <div
        className="absolute inset-0 opacity-[0.01] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0A2463 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="w-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="section-label mb-4">Our Services</div>
          <h2 className="heading-lg mb-4 text-[#0A2463]">Comprehensive Visa & Immigration Pathways</h2>
          <p className="body-md text-[#6B7280]">
            Expert legal counsel and document support tailored to your professional objectives.
            Select a pathway to learn about eligibility criteria and compliance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#E85D04]/30 p-8 shadow-sm hover:shadow-card-hover transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1.5  bg-[#0A2463] group-hover:bg-[#E85D04] transition-colors" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0A2463]/5 flex items-center justify-center mb-6 group-hover:bg-[#0A2463] transition-colors duration-300">
                    {Icon && (
                      <Icon className="w-6 h-6 text-[#0A2463] group-hover:text-white transition-colors duration-300" />
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <h3
                      className="font-bold text-[#111827] text-lg group-hover:text-[#0A2463] transition-colors"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {service.title}
                    </h3>
                    {i === 0 && (
                      <span className="text-[8px] font-bold px-2 py-0.5 rounded-full bg-[#FFF5E6] text-[#C44B00] border border-[#FAAB40]/30 uppercase tracking-wider">
                        Popular
                      </span>
                    )}
                  </div>

                  <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-2.5 mb-8 border-t border-[#E5E7EB] pt-6">
                    {service.features.map((feat: string) => (
                      <li key={feat} className="flex items-center gap-2.5 text-xs text-[#4B5563]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E85D04]" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#E85D04] hover:text-[#C44B00] transition-colors"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Explore Pathway <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-outline border-[#0A2463] text-[#0A2463] hover:bg-[#0A2463] hover:text-white inline-flex">
            Compare All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
