import Link from "next/link";
import { Phone, Mail, MapPin, CalendarCheck } from "lucide-react";

const SocialIcons = {
  Facebook: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  ),
  Linkedin: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Youtube: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
};

const footerLinks = {
  company: [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Our Process", href: "/process" },
    { title: "Success Stories", href: "/success-stories" },
    { title: "Free Assessment", href: "/free-assessment" },
    { title: "Contact Us", href: "/contact" },
  ],
  services: [
    { title: "Student Visa", href: "/services/student-visa" },
    { title: "Work Permit", href: "/services/work-permit" },
    { title: "Visitor Visa", href: "/services/visitor-visa" },
    { title: "Canada", href: "/countries/canada" },
    { title: "United Kingdom", href: "/countries/uk" },
    { title: "Australia", href: "/countries/australia" },
    { title: "Germany", href: "/countries/germany" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#03071E]">
      <div className="h-[3px] bg-[#E85D04]" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#0A2463] border border-[#E85D04]/30 flex items-center justify-center flex-shrink-0">
                <span
                  className="text-[#E85D04] font-bold text-lg"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  N
                </span>
              </div>
              <div>
                <span
                  className="text-white font-bold text-[17px] leading-none block"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Naksh Global
                </span>
                <span className="text-[#E85D04] text-[10px] font-semibold tracking-[0.12em] uppercase">
                  Visa & Immigration
                </span>
              </div>
            </Link>

            <p className="text-[#64748B] text-sm leading-relaxed mb-6">
              A trusted immigration consultancy providing transparent, personalised guidance for
              students, professionals, and families seeking international opportunities since 2017.
            </p>

            {/* Social */}
            <div className="flex gap-2">
              {(
                [
                  { Icon: SocialIcons.Facebook, href: "#", label: "Facebook" },
                  { Icon: SocialIcons.Instagram, href: "#", label: "Instagram" },
                  { Icon: SocialIcons.Linkedin, href: "#", label: "LinkedIn" },
                  { Icon: SocialIcons.Youtube, href: "#", label: "YouTube" },
                ] as const
              ).map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-[#0A2463] border border-[#0A2463] flex items-center justify-center text-[#9CA3AF] hover:text-[#E85D04] hover:border-[#E85D04]/30 transition-all"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-white font-semibold text-xs tracking-[0.1em] uppercase mb-5"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-[#9CA3AF] hover:text-[#E85D04] text-sm transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Countries */}
          <div>
            <h3
              className="text-white font-semibold text-xs tracking-[0.1em] uppercase mb-5"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Services & Countries
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-[#9CA3AF] hover:text-[#E85D04] text-sm transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-white font-semibold text-xs tracking-[0.1em] uppercase mb-5"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              Contact Us
            </h3>
            <ul className="space-y-4 mb-6">
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-start gap-3 text-[#64748B] hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[#E85D04] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@nakshglobalvisa.com"
                  className="flex items-start gap-3 text-[#64748B] hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#E85D04] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">contact@nakshglobalvisa.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[#64748B]">
                  <MapPin className="w-4 h-4 text-[#E85D04] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    3rd Floor, Prestige Tower,
                    <br />
                    MG Road, Bangalore – 560001,
                    <br />
                    Karnataka, India
                  </span>
                </div>
              </li>
            </ul>

            {/* Book CTA */}
            <Link
              href="/free-assessment"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#E85D04] text-white rounded-lg text-sm font-bold hover:bg-[#C44B00] transition-colors"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              <CalendarCheck className="w-4 h-4" />
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#475569] text-xs">
            © 2025 Naksh Global Visa. All rights reserved. IATA Registered.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-[#475569] hover:text-[#94A3B8] text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#475569] hover:text-[#94A3B8] text-xs transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-[#475569] hover:text-[#94A3B8] text-xs transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
