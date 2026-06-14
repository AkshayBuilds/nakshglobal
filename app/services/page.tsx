import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Briefcase, Plane, ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services | Naksh Global Visa",
  description: "Comprehensive visa services: Student Visa, Work Permit, and Visitor Visa for Canada, UK, Australia, USA, Germany & New Zealand.",
};

const iconMap: Record<string, React.ElementType> = { GraduationCap, Briefcase, Plane };

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-[#0A2463] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#E85D04] text-xs font-bold tracking-[0.15em] uppercase mb-6">Our Services</p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-2xl leading-tight"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif", letterSpacing: "-0.02em" }}
          >
            Complete visa solutions
          </h1>
          <p className="text-[#D6E4FF]/80 text-lg max-w-xl">
            Expert end-to-end immigration services tailored to your unique goals and circumstances.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col divide-y divide-[#E5E7EB]">
            {SERVICES.map((service, i) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div
                  key={service.id}
                  className={`py-10 ${i === 0 ? "border-t border-[#E5E7EB]" : ""}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-xl bg-[#EBF1FF] flex items-center justify-center flex-shrink-0">
                        {IconComponent && <IconComponent className="w-7 h-7 text-[#0A2463]" />}
                      </div>
                      <div>
                        <h2
                          className="text-2xl font-bold text-[#111827] mb-2"
                          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                        >
                          {service.title}
                        </h2>
                        <p className="text-[#6B7280] text-sm leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {service.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-sm text-[#4B5563]">
                            <CheckCircle2 className="w-4 h-4 text-[#E85D04] flex-shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>
                      <Link
                        href={`/services/${service.slug}`}
                        className="btn-primary inline-flex text-sm"
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A2463]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Not sure which visa is right for you?
          </h2>
          <p className="text-[#D6E4FF]/70 mb-8">
            Our experts will assess your profile and recommend the best pathway — completely free.
          </p>
          <Link href="/free-assessment" className="btn-primary">
            Get Free Assessment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
