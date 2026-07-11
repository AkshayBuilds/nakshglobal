"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, CheckCircle2, ClipboardCopy, Search, CheckSquare, Award } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Eligibility Check",
    shortDesc: "Profile Review",
    longDesc: "We analyze your academic, professional, and financial records to map out the most viable, policy-compliant visa options.",
    icon: Search,
    color: "from-blue-600 to-indigo-600",
    checklist: [
      "Academic transcript evaluation & GPA conversion",
      "IELTS / PTE / TOEFL English benchmark check",
      "Financial block and asset valuation estimation",
      "Previous visa history compliance audit",
    ],
  },
  {
    num: "02",
    title: "Document Collation",
    shortDesc: "SOP & Proofs Prep",
    longDesc: "We provide detailed checklists for your financial proofs, letters of recommendation, and guide you through writing an authentic, high-impact Statement of Purpose (SOP).",
    icon: ClipboardCopy,
    color: "from-[#E85D04] to-orange-500",
    checklist: [
      "Bespoke SOP drafting and revision guidelines",
      "Sponsor income documentation & asset mapping",
      "Employer experience verification letters",
      "Apostille & certified translation facilitation",
    ],
  },
  {
    num: "03",
    title: "Compliance Audit",
    shortDesc: "File Quality Audit",
    longDesc: "Every application undergoes a rigorous audit by our senior case officers, checking against live immigration regulations to guarantee zero processing errors.",
    icon: CheckSquare,
    color: "from-indigo-600 to-blue-700",
    checklist: [
      "GTE (Genuine Temporary Entrant) intent validation",
      "Visa application portal data audit",
      "Recent regulatory policy update compliance check",
      "Sub-agent file auditing & secondary signoff",
    ],
  },
  {
    num: "04",
    title: "Filing & Mocks",
    shortDesc: "Submission & Mocks",
    longDesc: "We submit your visa application directly through verified channels, and conduct intensive mock interview prep sessions to ensure your absolute confidence.",
    icon: Award,
    color: "from-emerald-500 to-teal-600",
    checklist: [
      "Secure application filing to corresponding high commission",
      "Live mock interview simulations with feedback",
      "Biometrics slot booking & document checklist briefing",
      "Pre-departure orientation & airport landing guide",
    ],
  },
];

export default function VisaGuideAnimation() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto rotate steps every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const ActiveIcon = steps[activeStep].icon;

  return (
    <section className="py-24 bg-[#03071E] relative overflow-hidden text-white">
      {/* Background elements */}
      <div className="glow-blob glow-blue w-[600px] h-[600px] -top-20 -left-20 opacity-20" />
      <div className="glow-blob glow-orange w-[500px] h-[500px] bottom-10 right-10 opacity-10" />

      <div className="w-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#E85D04] text-[11px] font-bold uppercase tracking-wider mb-4">
              Your Pathway
            </div>
            <h2 className="heading-lg text-white">Our Transparent Filing Process</h2>
          </div>
          <p className="body-md text-white/50 max-w-sm lg:text-right">
            We follow a rigorous, four-phase strategy to secure your approval. Click on any step to explore details.
          </p>
        </motion.div>

        {/* Timeline Path with Gliding Plane */}
        <div className="relative mb-16 px-4 hidden md:block">
          <div className="absolute top-[27px] left-8 right-8 h-0.5 bg-white/10" />
          
          {/* Animated Flight Path Line */}
          <div 
            className="absolute top-[27px] left-8 h-0.5 bg-gradient-to-r from-[#E85D04] to-indigo-500 transition-all duration-700" 
            style={{ width: `${(activeStep / (steps.length - 1)) * 90}%` }}
          />

          <div className="grid grid-cols-4 relative">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = index === activeStep;
              const isPassed = index < activeStep;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(index)}
                  className="flex flex-col items-center text-center focus:outline-none group relative"
                >
                  {/* Step bubble */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-2 z-10 transition-all duration-500 ${
                      isActive
                        ? "bg-[#E85D04] border-[#E85D04] shadow-orange text-white scale-110"
                        : isPassed
                        ? "bg-[#0A2463] border-[#E85D04] text-white"
                        : "bg-[#03071E] border-white/20 text-white/40 group-hover:border-white/45 group-hover:text-white"
                    }`}
                  >
                    <StepIcon className="w-5 h-5" />
                  </div>

                  {/* Plane Glider Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="flightIndicator"
                      className="absolute -top-6 text-[#E85D04] flex flex-col items-center"
                      transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    >
                      <Plane className="w-4 h-4 rotate-45 animate-pulse" />
                    </motion.div>
                  )}

                  <span
                    className={`mt-4 text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                      isActive ? "text-[#E85D04]" : "text-white/60 group-hover:text-white"
                    }`}
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {step.title}
                  </span>
                  <span className="text-[10px] text-white/40 mt-1">{step.shortDesc}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Layout: Steps List on Mobile/Left, Active Step Display on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Panel: Steps Selector (Horizontal scroll on mobile, vertical list on desktop) */}
          <div className="lg:col-span-5 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-none snap-x">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(index)}
                  className={`flex-shrink-0 w-[230px] lg:w-full snap-start text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                    isActive
                      ? "bg-white/5 border-[#E85D04] shadow-[0_4px_24px_rgba(232,93,4,0.06)]"
                      : "bg-white/[0.01] border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs ${
                      isActive ? "bg-[#E85D04] text-white" : "bg-white/5 text-white/40"
                    }`}
                  >
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <div
                      className={`text-sm font-bold transition-colors ${
                        isActive ? "text-white" : "text-white/70"
                      }`}
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      {step.title}
                    </div>
                    <div className="text-[11px] text-white/40 mt-0.5">{step.shortDesc}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Panel: Animated Details Area */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 lg:p-10 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center`}>
                      <ActiveIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#E85D04] font-bold">
                        Phase {steps[activeStep].num}
                      </div>
                      <h3
                        className="text-xl font-bold text-white"
                        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                      >
                        {steps[activeStep].title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed mb-8">
                    {steps[activeStep].longDesc}
                  </p>

                  <div className="border-t border-white/5 pt-6">
                    <h4
                      className="text-xs uppercase tracking-wider text-white/50 font-bold mb-4"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      Execution Checklist
                    </h4>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {steps[activeStep].checklist.map((item, idx) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1, duration: 0.3 }}
                          className="flex items-start gap-2.5 text-xs text-white/70"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Additional Visual - Visa Stamp Animation for step 4 */}
                {activeStep === 3 && (
                  <div className="mt-8 border-t border-white/5 pt-6 flex justify-center">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
                      className="inline-flex items-center gap-2.5 px-4 py-2 border-2 border-emerald-500/30 rounded-xl bg-emerald-500/10 text-emerald-400 font-extrabold text-xs uppercase tracking-widest rotate-[-3deg] select-none"
                      style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                    >
                      <Award className="w-4.5 h-4.5 animate-bounce" />
                      Visa Approved
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
