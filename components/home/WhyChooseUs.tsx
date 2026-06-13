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
    <section className="section-padding bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto mb-4">Why Naksh Global Visa</div>
          <h2 className="heading-lg">
            Why Clients Choose Us
          </h2>
          <p className="body-md max-w-2xl mx-auto mt-4 text-[#334155]">
            We combine deep expertise with genuine care to provide immigration guidance that is honest,
            thorough, and tailored to each individual case.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-xl border border-[#E2E8F0] p-6 hover:border-[#C9A227]/25 hover:shadow-[0_4px_24px_rgba(15,23,42,0.08)] transition-all duration-300 flex gap-5"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-lg bg-[#0F172A] flex items-center justify-center flex-shrink-0 mt-0.5">
                  {Icon && <Icon className="w-5 h-5 text-[#C9A227]" />}
                </div>
                {/* Content */}
                <div>
                  <h3
                    className="text-base font-bold text-[#0F172A] mb-2"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
