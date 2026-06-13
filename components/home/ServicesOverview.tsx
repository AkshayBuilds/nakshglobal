"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Briefcase, Plane, ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  GraduationCap,
  Briefcase,
  Plane,
};

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto mb-4">Our Services</div>
          <h2 className="heading-lg">
            Comprehensive Visa Solutions
          </h2>
          <p className="body-md max-w-2xl mx-auto mt-4 text-[#334155]">
            From student visas to work permits, we offer end-to-end immigration services
            tailored to your unique goals and destination requirements.
          </p>
        </motion.div>

        {/* Service Cards — consistent styling, no colored variants */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="bg-white rounded-xl border border-[#E2E8F0] p-8 hover:border-[#C9A227]/30 hover:shadow-[0_8px_32px_rgba(15,23,42,0.10)] transition-all duration-300 hover:-translate-y-1 group flex flex-col"
              >
                {/* Icon */}
                <div className="w-13 h-13 w-[52px] h-[52px] rounded-xl bg-[#FDF9EE] border border-[#F2DB8E] flex items-center justify-center mb-6 group-hover:bg-[#C9A227]/10 transition-colors">
                  {IconComponent && (
                    <IconComponent className="w-6 h-6 text-[#C9A227]" />
                  )}
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-bold text-[#0F172A] mb-3"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[#475569]">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-[#C9A227] font-semibold text-sm group-hover:text-[#B08820] transition-colors"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View all services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-outline inline-flex">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
