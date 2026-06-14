"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, Headphones, Globe, CheckSquare } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";

const iconMap = {
  ShieldCheck,
  Clock,
  Users,
  BadgeCheck: CheckSquare,
  Globe2: Globe,
  HeadphonesIcon: Headphones,
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-[#E85D04] text-xs font-bold tracking-[0.15em] uppercase mb-3">
              Why Naksh Global
            </p>
            <h2 className="heading-lg">Why clients choose us</h2>
          </div>
          <p className="body-md max-w-sm lg:text-right text-[#6B7280]">
            Deep expertise. Genuine care. Honest advice — even when it&apos;s not what you hoped to hear.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-[#E5E7EB] border border-[#E5E7EB] rounded-xl overflow-hidden">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 hover:bg-[#F9FAFB] transition-colors group relative"
              >
                <div
                  className="text-[64px] font-black text-[#0A2463]/[0.04] leading-none absolute top-4 right-6 select-none"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#0A2463] flex items-center justify-center mb-6">
                  {Icon && <Icon className="w-5 h-5 text-[#E85D04]" />}
                </div>
                <h3
                  className="font-bold text-[#111827] text-base mb-2"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
