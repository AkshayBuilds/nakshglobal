"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Briefcase,
  Plane,
  Phone,
  CalendarCheck,
} from "lucide-react";

const services = [
  {
    title: "Student Visa",
    href: "/services/student-visa",
    icon: GraduationCap,
    desc: "Study at top universities abroad",
  },
  {
    title: "Work Permit",
    href: "/services/work-permit",
    icon: Briefcase,
    desc: "Build your international career",
  },
  {
    title: "Visitor Visa",
    href: "/services/visitor-visa",
    icon: Plane,
    desc: "Tourism, family & business travel",
  },
];

const countries = [
  { title: "Canada", href: "/countries/canada", flag: "🇨🇦" },
  { title: "United Kingdom", href: "/countries/uk", flag: "🇬🇧" },
  { title: "Australia", href: "/countries/australia", flag: "🇦🇺" },
  { title: "United States", href: "/countries/usa", flag: "🇺🇸" },
  { title: "Germany", href: "/countries/germany", flag: "🇩🇪" },
  { title: "New Zealand", href: "/countries/new-zealand", flag: "🇳🇿" },
];

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services", hasDropdown: true, type: "services" },
  { title: "Countries", href: "/countries", hasDropdown: true, type: "countries" },
  { title: "Assessment", href: "/free-assessment" },
  { title: "Success Stories", href: "/success-stories" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b ${
        scrolled
          ? "border-[#E5E7EB] shadow-[0_1px_0_rgba(10,36,99,0.08),0_4px_20px_rgba(10,36,99,0.06)] backdrop-blur-md"
          : "border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 rounded-lg bg-[#0A2463] flex items-center justify-center flex-shrink-0">
              <span
                className="text-[#E85D04] font-bold text-base"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                N
              </span>
            </div>
            <div className="hidden sm:block">
              <span
                className="text-[#0A2463] font-bold text-sm leading-tight block"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Naksh Global
              </span>
              <span className="text-[#E85D04] text-[8px] font-semibold tracking-wider uppercase leading-none">
                Visa & Immigration
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.title}
                className="relative"
                onMouseEnter={() =>
                  link.hasDropdown ? setActiveDropdown(link.type!) : setActiveDropdown(null)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-0.5 px-2.5 py-1.5 rounded-md text-[13px] font-medium transition-all duration-150 whitespace-nowrap ${
                    isActive(link.href)
                      ? "text-[#E85D04] underline underline-offset-4 decoration-[#E85D04]"
                      : "text-[#374151] hover:text-[#0A2463] hover:bg-[#F9FAFB]"
                  }`}
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  {link.title}
                  {link.hasDropdown && (
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        activeDropdown === link.type ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {link.type === "services" && (
                  <AnimatePresence>
                    {activeDropdown === "services" && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-2 w-72"
                      >
                        <div className="bg-white rounded-xl shadow-[0_8px_40px_rgba(10,36,99,0.12)] border border-[#E5E7EB] overflow-hidden">
                          <div className="p-2">
                            {services.map((s) => (
                              <Link
                                key={s.title}
                                href={s.href}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F9FAFB] transition-all group"
                              >
                                <div className="w-9 h-9 rounded-lg bg-[#EBF1FF] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0A2463] transition-colors">
                                  <s.icon className="w-4.5 h-4.5 text-[#E85D04]" />
                                </div>
                                <div>
                                  <div
                                    className="text-[#111827] font-semibold text-sm"
                                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                                  >
                                    {s.title}
                                  </div>
                                  <div className="text-[#9CA3AF] text-xs mt-0.5">{s.desc}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="border-t border-[#E5E7EB] px-4 py-2.5">
                            <Link
                              href="/services"
                              className="text-[#E85D04] text-sm font-semibold hover:underline"
                              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                            >
                              View All Services →
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {link.type === "countries" && (
                  <AnimatePresence>
                    {activeDropdown === "countries" && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-2 w-60"
                      >
                        <div className="bg-white rounded-xl shadow-[0_8px_40px_rgba(10,36,99,0.12)] border border-[#E5E7EB] overflow-hidden">
                          <div className="p-2">
                            <div className="grid grid-cols-2 gap-0.5">
                              {countries.map((c) => (
                                <Link
                                  key={c.title}
                                  href={c.href}
                                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#F9FAFB] transition-all"
                                >
                                  <span className="text-lg">{c.flag}</span>
                                  <span className="text-[#374151] text-sm font-medium">{c.title}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                          <div className="border-t border-[#E5E7EB] px-4 py-2.5">
                            <Link
                              href="/countries"
                              className="text-[#E85D04] text-sm font-semibold hover:underline"
                              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                            >
                              Compare All Countries →
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="hidden xl:flex items-center gap-1.5 text-[#0A2463] hover:text-[#E85D04] text-[13px] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-medium">+91 98765 43210</span>
            </a>
            <Link
              href="/free-assessment"
              id="navbar-cta"
              className="inline-flex items-center gap-1.5 text-xs px-4 py-2 bg-[#E85D04] text-white font-bold rounded-md hover:bg-[#C44B00] transition-colors"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">Book</span>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] text-[#0A2463] hover:bg-[#F3F4F6] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-[#E5E7EB]"
          >
            <div className="px-4 py-5 space-y-1">
              {navLinks.map((link) => (
                <div key={link.title}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg font-medium text-sm transition-all ${
                      isActive(link.href)
                        ? "text-[#E85D04] bg-[#FFF5E6]"
                        : "text-[#374151] hover:text-[#0A2463] hover:bg-[#F9FAFB]"
                    }`}
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {link.title}
                  </Link>
                  {link.type === "services" && (
                    <div className="ml-4 mt-1 space-y-0.5">
                      {services.map((s) => (
                        <Link
                          key={s.title}
                          href={s.href}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#6B7280] hover:text-[#E85D04] text-sm transition-all"
                        >
                          <s.icon className="w-4 h-4" />
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                  {link.type === "countries" && (
                    <div className="ml-4 mt-1 grid grid-cols-2 gap-0.5">
                      {countries.map((c) => (
                        <Link
                          key={c.title}
                          href={c.href}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-[#6B7280] hover:text-[#0A2463] text-sm transition-all"
                        >
                          <span>{c.flag}</span>
                          <span>{c.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-[#E5E7EB] space-y-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 px-4 py-3 text-[#0A2463] text-sm"
                >
                  <Phone className="w-4 h-4 text-[#E85D04]" />
                  +91 98765 43210
                </a>
                <Link href="/free-assessment" className="btn-primary w-full justify-center text-sm">
                  Book Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
