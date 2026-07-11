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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="glow-blob glow-blue w-[450px] h-[450px] -bottom-20 -left-10 opacity-[0.06]" />

      <div className="w-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <div className="section-label mb-4">Why Naksh Global</div>
            <h2 className="heading-lg text-[#0A2463]">Why Clients Partner with Us</h2>
          </div>
          <p className="body-md max-w-sm lg:text-right text-[#6B7280]">
            Regulatory compliance, transparent appraisals, and dedicated case officers managing every milestone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-white border border-[#E5E7EB] rounded-2xl hover-glow-border relative group flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#0A2463]/5 flex items-center justify-center group-hover:bg-[#0A2463] transition-colors duration-300">
                      {Icon && <Icon className="w-5 h-5 text-[#E85D04] group-hover:text-white transition-colors duration-300" />}
                    </div>
                    <div
                      className="text-3xl font-extrabold text-[#0A2463]/10 select-none group-hover:text-[#E85D04]/20 transition-colors"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  
                  <h3
                    className="font-bold text-[#111827] text-base mb-2 group-hover:text-[#0A2463] transition-colors"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
