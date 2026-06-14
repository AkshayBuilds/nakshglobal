"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, ChevronLeft, User, Globe, GraduationCap, MessageSquare } from "lucide-react";

const countries = ["Canada", "United Kingdom", "Australia", "United States", "Germany", "New Zealand", "Not sure yet"];
const visaTypes = ["Student Visa", "Work Permit", "Visitor Visa", "Permanent Residency", "Not sure yet"];
const educationLevels = ["High School (10+2)", "Diploma / Certificate", "Bachelor's Degree", "Master's Degree", "PhD", "Other"];
const experienceLevels = ["No experience", "Less than 1 year", "1–3 years", "3–5 years", "5+ years"];
const budgetRanges = ["Less than ₹5 Lakhs", "₹5–10 Lakhs", "₹10–25 Lakhs", "₹25–50 Lakhs", "₹50 Lakhs+"];

const steps = [
  { title: "Personal Info", icon: User, desc: "Tell us about yourself" },
  { title: "Visa Intent", icon: Globe, desc: "Where do you want to go?" },
  { title: "Background", icon: GraduationCap, desc: "Your education & experience" },
  { title: "Additional Info", icon: MessageSquare, desc: "Final details" },
];

const inputClass =
  "w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#E85D04] focus:border-transparent transition-all";

const chipClass = (selected: boolean) =>
  `px-3 py-2.5 rounded-lg text-sm font-medium border transition-all text-left ${
    selected
      ? "bg-[#E85D04] border-[#E85D04] text-white"
      : "bg-white border-[#E5E7EB] text-[#4B5563] hover:border-[#E85D04]/40"
  }`;

export default function AssessmentClient() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    country: "",
    visaType: "",
    education: "",
    experience: "",
    budget: "",
    notes: "",
  });

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const canNext = () => {
    if (step === 0) return form.fullName && form.mobile && form.email;
    if (step === 1) return form.country && form.visaType;
    if (step === 2) return form.education && form.experience && form.budget;
    return true;
  };

  const handleSubmit = () => setSubmitted(true);

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#F9FAFB] rounded-xl p-12 border border-[#E5E7EB] max-w-lg w-full text-center"
        >
          <div className="w-20 h-20 rounded-full bg-[#FFF5E6] border-2 border-[#E85D04] flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-[#E85D04]" />
          </div>
          <h2
            className="text-3xl font-bold text-[#111827] mb-4"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            Assessment Submitted!
          </h2>
          <p className="text-[#6B7280] mb-6 leading-relaxed">
            Thank you, <strong className="text-[#111827]">{form.fullName}</strong>! Our expert team will review your
            profile and contact you within <strong className="text-[#E85D04]">24 hours</strong> with a personalised
            immigration roadmap.
          </p>
          <div className="bg-white rounded-xl p-4 border border-[#E5E7EB] mb-8">
            <p className="text-[#9CA3AF] text-sm">We&apos;ll reach you at:</p>
            <p className="text-[#111827] font-medium">{form.email}</p>
            <p className="text-[#111827] font-medium">{form.mobile}</p>
          </div>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#20bf5a] transition-all"
          >
            Chat on WhatsApp for Faster Response
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <p className="text-[#E85D04] text-xs font-bold tracking-[0.15em] uppercase mb-4">100% Free</p>
          <h1
            className="text-4xl md:text-5xl font-bold text-[#111827] mb-4"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif", letterSpacing: "-0.02em" }}
          >
            Get your free assessment
          </h1>
          <p className="text-[#6B7280] text-lg max-w-xl">
            Fill out the form and our certified experts will create a personalised immigration roadmap for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-2 flex-shrink-0">
                  <div
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${
                      i === step
                        ? "bg-[#E85D04] text-white"
                        : i < step
                          ? "bg-[#FFF5E6] text-[#C44B00] border border-[#FAAB40]/30"
                          : "bg-[#F9FAFB] text-[#9CA3AF] border border-[#E5E7EB]"
                    }`}
                  >
                    <s.icon className="w-4 h-4" />
                    <span className="text-xs font-semibold hidden sm:block">{s.title}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`h-px w-6 sm:w-10 ${i < step ? "bg-[#E85D04]" : "bg-[#E5E7EB]"}`} />
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
              <div className="h-1 bg-[#F3F4F6]">
                <motion.div
                  className="h-full bg-[#E85D04]"
                  animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <h2
                    className="text-2xl font-bold text-[#111827]"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {steps[step].title}
                  </h2>
                  <p className="text-[#6B7280] text-sm">{steps[step].desc}</p>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    {step === 0 && (
                      <>
                        <div>
                          <label className="block text-[#374151] text-sm font-medium mb-1.5">Full Name *</label>
                          <input
                            type="text"
                            placeholder="John Doe"
                            value={form.fullName}
                            onChange={(e) => update("fullName", e.target.value)}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-[#374151] text-sm font-medium mb-1.5">Mobile Number *</label>
                          <input
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={form.mobile}
                            onChange={(e) => update("mobile", e.target.value)}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-[#374151] text-sm font-medium mb-1.5">Email Address *</label>
                          <input
                            type="email"
                            placeholder="john@example.com"
                            value={form.email}
                            onChange={(e) => update("email", e.target.value)}
                            className={inputClass}
                          />
                        </div>
                      </>
                    )}

                    {step === 1 && (
                      <>
                        <div>
                          <label className="block text-[#374151] text-sm font-medium mb-3">Country of Interest *</label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {countries.map((c) => (
                              <button key={c} onClick={() => update("country", c)} className={chipClass(form.country === c)}>
                                {c}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-[#374151] text-sm font-medium mb-3">Visa Type *</label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {visaTypes.map((v) => (
                              <button key={v} onClick={() => update("visaType", v)} className={chipClass(form.visaType === v)}>
                                {v}
                              </button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {step === 2 && (
                      <>
                        <div>
                          <label className="block text-[#374151] text-sm font-medium mb-3">Highest Education *</label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {educationLevels.map((e) => (
                              <button key={e} onClick={() => update("education", e)} className={chipClass(form.education === e)}>
                                {e}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-[#374151] text-sm font-medium mb-3">Work Experience *</label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {experienceLevels.map((e) => (
                              <button key={e} onClick={() => update("experience", e)} className={chipClass(form.experience === e)}>
                                {e}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-[#374151] text-sm font-medium mb-3">Available Budget *</label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {budgetRanges.map((b) => (
                              <button key={b} onClick={() => update("budget", b)} className={chipClass(form.budget === b)}>
                                {b}
                              </button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {step === 3 && (
                      <div>
                        <label className="block text-[#374151] text-sm font-medium mb-1.5">Additional Notes (Optional)</label>
                        <textarea
                          rows={5}
                          placeholder="Tell us anything else that might be relevant — specific universities, job offers, family ties abroad, previous visa refusals, etc."
                          value={form.notes}
                          onChange={(e) => update("notes", e.target.value)}
                          className={`${inputClass} resize-none`}
                        />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="flex gap-3 mt-8">
                  {step > 0 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="flex items-center gap-2 px-5 py-3 border border-[#E5E7EB] text-[#374151] rounded-lg hover:bg-[#F9FAFB] transition-all"
                    >
                      <ChevronLeft className="w-4 h-4" /> Back
                    </button>
                  )}
                  {step < steps.length - 1 ? (
                    <button
                      onClick={() => setStep(step + 1)}
                      disabled={!canNext()}
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#E85D04] text-white font-bold rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#C44B00] transition-all"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      Continue <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="flex-1 py-3 bg-[#E85D04] text-white font-bold rounded-lg hover:bg-[#C44B00] transition-all"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      Submit Assessment
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-[#0A2463] rounded-xl p-8 text-white sticky top-24">
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Your assessment summary
              </h3>
              <p className="text-[#D6E4FF]/60 text-sm mb-6">Updates as you fill in each step.</p>
              <div className="space-y-4">
                {[
                  { label: "Name", value: form.fullName },
                  { label: "Email", value: form.email },
                  { label: "Mobile", value: form.mobile },
                  { label: "Country", value: form.country },
                  { label: "Visa Type", value: form.visaType },
                  { label: "Education", value: form.education },
                  { label: "Experience", value: form.experience },
                  { label: "Budget", value: form.budget },
                ].map(({ label, value }) => (
                  <div key={label} className="border-b border-white/10 pb-3 last:border-0">
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-white text-sm font-medium">{value || "—"}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-[#D6E4FF]/60 text-xs leading-relaxed">
                  Your information is kept confidential. A certified consultant will review your profile and contact you
                  within 24 hours with honest, personalised guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
