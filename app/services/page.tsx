import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Briefcase, Plane, ArrowRight, CheckCircle } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services | Naksh Global Visa",
  description: "Comprehensive visa services: Student Visa, Work Permit, and Visitor Visa for Canada, UK, Australia, USA, Germany & New Zealand.",
};

const iconMap: Record<string, React.ElementType> = { GraduationCap, Briefcase, Plane };
const cardColors = [
  { bg: "from-blue-600/10 to-blue-900/10", border: "border-blue-500/20", icon: "bg-blue-500/20 text-blue-400" },
  { bg: "from-emerald-600/10 to-emerald-900/10", border: "border-emerald-500/20", icon: "bg-emerald-500/20 text-emerald-400" },
  { bg: "from-purple-600/10 to-purple-900/10", border: "border-purple-500/20", icon: "bg-purple-500/20 text-purple-400" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#060e1a] to-[#0A1628] overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium mb-6">
            Our Services
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Complete Visa <span className="text-gold-gradient">Solutions</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Expert end-to-end immigration services tailored to your unique goals and circumstances.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => {
              const IconComponent = iconMap[service.icon];
              const colors = cardColors[i];
              return (
                <div key={service.id} className={`group glass rounded-3xl p-8 border ${colors.border} bg-gradient-to-br ${colors.bg} hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-500`}>
                  <div className={`w-14 h-14 rounded-2xl ${colors.icon} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {IconComponent && <IconComponent className="w-7 h-7" />}
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">{service.title}</h2>
                  <p className="text-white/50 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                        <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#b8942a] text-[#0A1628] font-bold rounded-xl hover:shadow-gold transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#060e1a] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not sure which visa is right for you?</h2>
          <p className="text-white/50 mb-8">Our experts will assess your profile and recommend the best pathway — completely free.</p>
          <Link href="/free-assessment" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#b8942a] text-[#0A1628] font-bold rounded-2xl hover:shadow-[0_8px_40px_rgba(212,175,55,0.4)] transition-all hover:scale-105">
            Get Free Assessment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
