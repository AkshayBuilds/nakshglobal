"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { BUSINESS_HOURS, EMAIL, PHONE_NUMBER, ADDRESS } from "@/lib/constants";

const SocialFB = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const SocialIG = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const SocialLI = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const SocialTW = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const inputClass =
  "w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#E85D04] focus:border-transparent transition-all";

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const update = (f: string, v: string) => setForm((prev) => ({ ...prev, [f]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-16 bg-[#0A2463] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#E85D04] text-xs font-bold tracking-[0.15em] uppercase mb-6">Get In Touch</p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl leading-tight"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif", letterSpacing: "-0.02em" }}
          >
            We&apos;re here to help
          </h1>
          <p className="text-[#D6E4FF]/80 text-lg max-w-xl">
            Reach out via any channel. Our experts are ready to answer your immigration questions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3 order-2 lg:order-1">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#F9FAFB] rounded-xl border border-[#E5E7EB] p-10 text-center h-full flex flex-col items-center justify-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-[#E85D04] mb-4" />
                  <h3
                    className="text-2xl font-bold text-[#111827] mb-3"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-[#6B7280]">Thank you for reaching out. We&apos;ll respond within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  onSubmit={handleSubmit}
                  className="bg-white rounded-xl border border-[#E5E7EB] p-8 space-y-5"
                >
                  <h2
                    className="text-2xl font-bold text-[#111827] mb-2"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Send us a message
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#374151] text-sm font-medium mb-1.5">Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-[#374151] text-sm font-medium mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#374151] text-sm font-medium mb-1.5">Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[#374151] text-sm font-medium mb-1.5">Subject</label>
                    <input
                      type="text"
                      placeholder="e.g. Student Visa for Canada"
                      value={form.subject}
                      onChange={(e) => update("subject", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[#374151] text-sm font-medium mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your visa needs..."
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message
                  </button>
                </motion.form>
              )}
            </div>

            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="bg-[#0A2463] rounded-xl p-8 text-white sticky top-24">
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Contact information
                </h3>

                <div className="space-y-5 mb-8">
                  <a href="tel:+919876543210" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#E85D04]" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs mb-0.5">Phone</p>
                      <p className="text-white text-sm font-medium group-hover:text-[#E85D04] transition-colors">
                        {PHONE_NUMBER}
                      </p>
                    </div>
                  </a>

                  <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#E85D04]" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs mb-0.5">Email</p>
                      <p className="text-white text-sm font-medium group-hover:text-[#E85D04] transition-colors">
                        {EMAIL}
                      </p>
                    </div>
                  </a>

                  <a href="#map" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#E85D04]" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs mb-0.5">Address</p>
                      <p className="text-white text-sm font-medium">{ADDRESS}</p>
                    </div>
                  </a>
                </div>

                <a
                  href="https://wa.me/919876543210?text=Hi%20Naksh%20Global%20Visa%2C%20I%20need%20visa%20assistance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-[#25D366]/20 border border-[#25D366]/30 hover:bg-[#25D366]/30 transition-all mb-8"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/30 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Chat on WhatsApp</p>
                    <p className="text-white/50 text-xs">Typically replies within 1 hour</p>
                  </div>
                </a>

                <div className="border-t border-white/10 pt-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-[#E85D04]" />
                    <h4 className="text-white font-semibold text-sm">Business Hours</h4>
                  </div>
                  {BUSINESS_HOURS.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between items-center py-2 border-b border-white/5 last:border-0"
                    >
                      <span className="text-white/50 text-sm">{h.day}</span>
                      <span
                        className={`text-sm font-medium ${
                          h.hours === "Closed" ? "text-[#FAAB40]" : "text-white"
                        }`}
                      >
                        {h.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="text-white font-semibold text-sm mb-4">Follow Us</h4>
                  <div className="flex gap-3">
                    {[
                      { Icon: SocialFB, href: "#", label: "Facebook" },
                      { Icon: SocialIG, href: "#", label: "Instagram" },
                      { Icon: SocialLI, href: "#", label: "LinkedIn" },
                      { Icon: SocialTW, href: "#", label: "Twitter" },
                    ].map(({ Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="w-9 h-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#E85D04] hover:border-[#E85D04]/30 transition-all"
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="map" className="py-0 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-white rounded-xl overflow-hidden border border-[#E5E7EB] h-72 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-10 h-10 text-[#E85D04] mx-auto mb-3" />
              <p
                className="text-[#111827] font-semibold"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                3rd Floor, Prestige Tower, MG Road
              </p>
              <p className="text-[#6B7280] text-sm">Bangalore – 560001, Karnataka, India</p>
              <a
                href="https://maps.google.com/?q=MG+Road+Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-5 py-2 bg-[#FFF5E6] border border-[#FAAB40]/30 text-[#C44B00] rounded-lg text-sm font-medium hover:bg-[#FEE5C0] transition-all"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
