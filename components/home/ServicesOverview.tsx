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
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label mb-5">Our Services</div>
            <h2 className="heading-lg mb-4">Comprehensive Visa Solutions</h2>
            <p className="body-md mb-8">
              End-to-end immigration services tailored to your unique goals
              and destination requirements.
            </p>
            <Link href="/services" className="btn-primary inline-flex">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="lg:col-span-2 flex flex-col divide-y divide-[#E5E7EB]">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className={`flex items-center gap-6 py-6 group hover:bg-[#F9FAFB] px-4 -mx-4 rounded-lg transition-all duration-200 ${
                      i === 0 ? "border-l-4 border-[#E85D04] pl-4 ml-0" : "border-l-4 border-transparent hover:border-[#E85D04]/40"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#EBF1FF] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0A2463] transition-colors">
                      {Icon && (
                        <Icon className="w-6 h-6 text-[#0A2463] group-hover:text-[#E85D04] transition-colors" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3
                          className="font-bold text-[#111827] text-base"
                          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                        >
                          {service.title}
                        </h3>
                        {i === 0 && (
                          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#FFF5E6] text-[#C44B00] border border-[#FAAB40]/30 uppercase tracking-wider">
                            Most Popular
                          </span>
                        )}
                      </div>
                      <p className="text-[#6B7280] text-sm">{service.shortDesc}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#E85D04] group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
