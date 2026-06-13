"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, AlertCircle, ChevronRight } from "lucide-react";

const questions = [
  {
    id: "country",
    question: "Which country are you interested in?",
    options: ["Canada", "United Kingdom", "Australia", "United States", "Germany", "New Zealand"],
  },
  {
    id: "visa",
    question: "What type of visa are you applying for?",
    options: ["Student Visa", "Work Permit", "Visitor Visa", "Permanent Residency"],
  },
  {
    id: "education",
    question: "What is your highest educational qualification?",
    options: ["High School (10+2)", "Bachelor's Degree", "Master's Degree", "PhD", "Diploma / Certificate"],
  },
  {
    id: "english",
    question: "Do you have an English proficiency test score?",
    options: ["Yes, IELTS 6.0+", "Yes, IELTS 5.0–6.0", "TOEFL / PTE", "No test yet"],
  },
  {
    id: "funds",
    question: "Do you have sufficient funds to cover your initial year abroad?",
    options: ["Yes, fully", "Partially available", "Applying for loan", "Not yet arranged"],
  },
];

function getResult(answers: Record<string, string>) {
  const score = [
    answers.education?.includes("Master") || answers.education?.includes("Bachelor") || answers.education?.includes("PhD"),
    answers.english?.includes("IELTS 6.0+") || answers.english?.includes("TOEFL"),
    answers.funds === "Yes, fully" || answers.funds === "Partially available",
  ].filter(Boolean).length;

  if (score >= 3) return { level: "high", message: "Great news! Your profile looks strong for visa approval.", icon: CheckCircle2, color: "text-emerald-400" };
  if (score === 2) return { level: "medium", message: "Your profile shows potential. With some preparation, you have good chances.", icon: AlertCircle, color: "text-[#D4AF37]" };
  return { level: "low", message: "Your profile needs strengthening. Our consultants can create the best strategy for you.", icon: XCircle, color: "text-orange-400" };
}

export default function EligibilityChecker() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [questions[step].id]: answer };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const result = showResult ? getResult(answers) : null;

  return (
    <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#D4AF37] text-sm font-medium">Eligibility Checker</span>
          {!showResult && (
            <span className="text-white/40 text-sm">{step + 1} / {questions.length}</span>
          )}
        </div>
        {!showResult && (
          <div className="w-full bg-white/10 rounded-full h-1.5">
            <motion.div
              className="h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#F5E6A3] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((step) / questions.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">{questions[step].question}</h3>
            <div className="grid gap-3">
              {questions[step].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className="flex items-center justify-between px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 hover:text-white transition-all text-left group"
                >
                  <span>{option}</span>
                  <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-[#D4AF37] transition-colors" />
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-4"
          >
            {result && (
              <>
                <div className="flex justify-center mb-4">
                  <result.icon className={`w-16 h-16 ${result.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Eligibility Assessment</h3>
                <p className="text-white/60 mb-8">{result.message}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="/free-assessment"
                    className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#b8942a] text-[#0A1628] font-bold rounded-xl hover:shadow-gold transition-all"
                  >
                    Get Expert Assessment
                  </a>
                  <button
                    onClick={reset}
                    className="px-6 py-3 bg-white/5 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-all"
                  >
                    Try Again
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
