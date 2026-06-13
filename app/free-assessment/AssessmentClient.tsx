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

export default function AssessmentClient() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "", mobile: "", email: "",
    country: "", visaType: "",
    education: "", experience: "", budget: "",
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
      <div className="min-h-screen bg-[#0A1628] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass rounded-3xl p-12 border border-[#D4AF37]/30 max-w-lg w-full text-center"
        >
          <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-[#D4AF37]" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Assessment Submitted!</h2>
          <p className="text-white/60 mb-6 leading-relaxed">
            Thank you, <strong className="text-white">{form.fullName}</strong>! Our expert team will review your profile and contact you within <strong className="text-[#D4AF37]">24 hours</strong> with a personalised immigration roadmap.
          </p>
          <div className="glass rounded-2xl p-4 border border-white/10 mb-8">
            <p className="text-white/50 text-sm">We'll reach you at:</p>
            <p className="text-white font-medium">{form.email}</p>
            <p className="text-white font-medium">{form.mobile}</p>
          </div>
          <a
            href="https://wa.me/919876543210"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20bf5a] transition-all"
          >
            Chat on WhatsApp for Faster Response
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A1628] pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium mb-4">
            100% Free
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your Free <span className="text-gold-gradient">Assessment</span>
          </h1>
          <p className="text-white/50 text-lg">Fill out the form and our certified experts will create a personalised immigration roadmap for you.</p>
        </motion.div>

        {/* Step Indicators */}
        <div className="flex items-center gap-2 mb-10 justify-center">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${
                i === step ? "bg-[#D4AF37] text-[#0A1628]" :
                i < step ? "bg-[#D4AF37]/20 text-[#D4AF37]" :
                "bg-white/5 text-white/30"
              }`}>
                <s.icon className="w-4 h-4" />
                <span className="text-xs font-semibold hidden sm:block">{s.title}</span>
              </div>
              {i < steps.length - 1 && <div className={`h-px w-6 sm:w-10 ${ i < step ? "bg-[#D4AF37]" : "bg-white/10" }`} />}
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="glass rounded-3xl border border-white/10 overflow-hidden">
          {/* Progress */}
          <div className="h-1 bg-white/5">
            <motion.div
              className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F5E6A3]"
              animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          <div className="p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white">{steps[step].title}</h2>
              <p className="text-white/50 text-sm">{steps[step].desc}</p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {step === 0 && (
                  <>
                    <div>
                      <label className="block text-white/60 text-sm mb-1.5">Full Name *</label>
                      <input
                        type="text" placeholder="John Doe"
                        value={form.fullName} onChange={(e) => update("fullName", e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-1.5">Mobile Number *</label>
                      <input
                        type="tel" placeholder="+91 98765 43210"
                        value={form.mobile} onChange={(e) => update("mobile", e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-1.5">Email Address *</label>
                      <input
                        type="email" placeholder="john@example.com"
                        value={form.email} onChange={(e) => update("email", e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                      />
                    </div>
                  </>
                )}

                {step === 1 && (
                  <>
                    <div>
                      <label className="block text-white/60 text-sm mb-3">Country of Interest *</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {countries.map((c) => (
                          <button key={c} onClick={() => update("country", c)}
                            className={`px-3 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                              form.country === c
                                ? "bg-[#D4AF37] border-[#D4AF37] text-[#0A1628]"
                                : "bg-white/5 border-white/10 text-white/60 hover:border-[#D4AF37]/30"
                            }`}>{c}</button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-3">Visa Type *</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {visaTypes.map((v) => (
                          <button key={v} onClick={() => update("visaType", v)}
                            className={`px-3 py-2.5 rounded-xl text-sm font-medium border transition-all text-left ${
                              form.visaType === v
                                ? "bg-[#D4AF37] border-[#D4AF37] text-[#0A1628]"
                                : "bg-white/5 border-white/10 text-white/60 hover:border-[#D4AF37]/30"
                            }`}>{v}</button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div>
                      <label className="block text-white/60 text-sm mb-3">Highest Education *</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {educationLevels.map((e) => (
                          <button key={e} onClick={() => update("education", e)}
                            className={`px-3 py-2.5 rounded-xl text-sm font-medium border transition-all text-left ${
                              form.education === e
                                ? "bg-[#D4AF37] border-[#D4AF37] text-[#0A1628]"
                                : "bg-white/5 border-white/10 text-white/60 hover:border-[#D4AF37]/30"
                            }`}>{e}</button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-3">Work Experience *</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {experienceLevels.map((e) => (
                          <button key={e} onClick={() => update("experience", e)}
                            className={`px-3 py-2.5 rounded-xl text-sm font-medium border transition-all text-left ${
                              form.experience === e
                                ? "bg-[#D4AF37] border-[#D4AF37] text-[#0A1628]"
                                : "bg-white/5 border-white/10 text-white/60 hover:border-[#D4AF37]/30"
                            }`}>{e}</button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-3">Available Budget *</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {budgetRanges.map((b) => (
                          <button key={b} onClick={() => update("budget", b)}
                            className={`px-3 py-2.5 rounded-xl text-sm font-medium border transition-all text-left ${
                              form.budget === b
                                ? "bg-[#D4AF37] border-[#D4AF37] text-[#0A1628]"
                                : "bg-white/5 border-white/10 text-white/60 hover:border-[#D4AF37]/30"
                            }`}>{b}</button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <div>
                      <label className="block text-white/60 text-sm mb-1.5">Additional Notes (Optional)</label>
                      <textarea
                        rows={5}
                        placeholder="Tell us anything else that might be relevant — specific universities, job offers, family ties abroad, previous visa refusals, etc."
                        value={form.notes} onChange={(e) => update("notes", e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37]/50 transition-colors resize-none"
                      />
                    </div>
                    {/* Summary */}
                    <div className="glass rounded-2xl p-5 border border-[#D4AF37]/20">
                      <h4 className="text-white font-semibold mb-3 text-sm">Your Assessment Summary</h4>
                      <div className="grid grid-cols-2 gap-y-2 text-sm">
                        {[
                          ["Name", form.fullName], ["Email", form.email],
                          ["Country", form.country], ["Visa", form.visaType],
                          ["Education", form.education], ["Experience", form.experience],
                          ["Budget", form.budget],
                        ].map(([label, value]) => (
                          <div key={label}>
                            <span className="text-white/40">{label}:</span>{" "}
                            <span className="text-white/80">{value || "—"}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex gap-3 mt-8">
              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="flex items-center gap-2 px-5 py-3 glass border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
              )}
              {step < steps.length - 1 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={!canNext()}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#D4AF37] to-[#b8942a] text-[#0A1628] font-bold rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-gold transition-all"
                >
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex-1 py-3 bg-gradient-to-r from-[#D4AF37] to-[#b8942a] text-[#0A1628] font-bold rounded-xl hover:shadow-[0_8px_40px_rgba(212,175,55,0.4)] transition-all"
                >
                  Submit Assessment ✓
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
