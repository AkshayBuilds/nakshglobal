"use client";

import { motion, useReducedMotion } from "framer-motion";
import VisaStamp, { StampData } from "./VisaStamp";

export interface PassportFields {
  country: string;
  visaType: string;
  validFor: string;
  processingTime: string;
  authority: string;
}

interface PassportPageProps {
  fields: PassportFields;
  stamps: StampData[];
  onClear: () => void;
  shakeKey: number;
}

export default function PassportPage({
  fields,
  stamps,
  onClear,
  shakeKey,
}: PassportPageProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-[315px] min-[370px]:max-w-[335px] sm:max-w-[390px] lg:max-w-[440px] mx-auto select-none">
      {/* Desk drop shadow beneath passport leaf (desktop rotated, mobile flat) */}
      <div
        className="absolute inset-0 bg-[#14213D]/10 rounded-[14px] blur-xl transform rotate-0 md:rotate-[-3deg] translate-y-2 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Passport Page Leaf: strictly 0deg on mobile, -3deg on md+ */}
      <motion.div
        key={shakeKey}
        animate={
          shouldReduceMotion || shakeKey === 0
            ? {}
            : {
              y: [0, 1.5, -0.8, 0],
              x: [0, -0.8, 0.8, 0],
            }
        }
        transition={{ duration: 0.28, ease: "easeInOut" }}
        className="relative bg-[#FAFAF9] text-[#14213D] rounded-[14px] border border-[#D5D8DE] shadow-[0_10px_28px_rgba(20,33,61,0.08),0_2px_5px_rgba(20,33,61,0.04)] overflow-hidden transform rotate-0 md:rotate-[-3deg] transition-transform duration-300"
      >
        {/* Left Book Spine / Binding Stitch */}
        <div
          className="absolute left-0 top-0 bottom-0 w-3.5 sm:w-5 bg-gradient-to-r from-[#14213D]/15 via-[#14213D]/5 to-transparent z-20 pointer-events-none flex flex-col justify-around py-5 sm:py-8 items-center"
          aria-hidden="true"
        >
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="w-0.5 sm:w-1 h-2 sm:h-3 rounded-full bg-[#14213D]/25"
            />
          ))}
        </div>

        {/* Faint Guilloche Security Line Pattern SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.055] z-0"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="passport-guilloche-pattern"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="#14213D"
                strokeWidth="0.8"
              />
              <circle
                cx="25"
                cy="25"
                r="14"
                fill="none"
                stroke="#14213D"
                strokeWidth="0.6"
              />
              <ellipse
                cx="25"
                cy="25"
                rx="23"
                ry="9"
                fill="none"
                stroke="#14213D"
                strokeWidth="0.5"
                transform="rotate(30 25 25)"
              />
              <ellipse
                cx="25"
                cy="25"
                rx="23"
                ry="9"
                fill="none"
                stroke="#14213D"
                strokeWidth="0.5"
                transform="rotate(60 25 25)"
              />
              <ellipse
                cx="25"
                cy="25"
                rx="23"
                ry="9"
                fill="none"
                stroke="#14213D"
                strokeWidth="0.5"
                transform="rotate(120 25 25)"
              />
              <ellipse
                cx="25"
                cy="25"
                rx="23"
                ry="9"
                fill="none"
                stroke="#14213D"
                strokeWidth="0.5"
                transform="rotate(150 25 25)"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#passport-guilloche-pattern)" />
        </svg>

        {/* PAGE CONTENT */}
        <div className="relative z-10 p-3.5 sm:p-5 pl-5 sm:pl-7 flex flex-col justify-between min-h-[430px] sm:min-h-[480px]">
          {/* Header Bar */}
          <div>
            <div className="flex items-start justify-between border-b-2 border-[#14213D]/20 pb-1.5 mb-2.5">
              <div>
                <p className="text-[7.5px] sm:text-[9px] font-bold tracking-[0.2em] text-[#14213D]/60 uppercase leading-tight font-sans">
                  PASSPORT
                </p>
                <h2 className="text-base sm:text-xl font-black tracking-[0.16em] text-[#14213D] font-sans">
                  VISA
                </h2>
              </div>

              {/* Security Emblem and Perforated Page Number */}
              <div className="text-right flex flex-col items-end">
                <div className="flex items-center gap-1 mb-0.5" aria-hidden="true">
                  <span className="w-1 h-1 rounded-full bg-[#14213D]/25" />
                  <span className="w-1 h-1 rounded-full bg-[#14213D]/25" />
                  <span className="w-1 h-1 rounded-full bg-[#14213D]/25" />
                  <span className="text-[8.5px] font-mono font-bold text-[#14213D]/45 ml-0.5">
                    08
                  </span>
                </div>
                <span className="text-[7.5px] sm:text-[8px] font-mono text-[#14213D]/60 tracking-wider">
                  DOC: NG·AMD·2017·088
                </span>
              </div>
            </div>

            {/* Official Data Grid */}
            <div className="grid grid-cols-2 gap-x-2.5 gap-y-1.5 text-left border-b border-[#14213D]/15 pb-2.5 mb-2.5 font-sans">
              <div>
                <span className="block text-[7.5px] sm:text-[8px] font-bold text-[#14213D]/50 tracking-wider uppercase">
                  Country / Pays
                </span>
                <span className="block text-[10.5px] sm:text-xs font-bold text-[#14213D] tracking-wide truncate">
                  {fields.country || "—"}
                </span>
              </div>

              <div>
                <span className="block text-[7.5px] sm:text-[8px] font-bold text-[#14213D]/50 tracking-wider uppercase">
                  Visa Type / Catégorie
                </span>
                <span className="block text-[10.5px] sm:text-xs font-bold text-[#14213D] tracking-wide truncate">
                  {fields.visaType || "—"}
                </span>
              </div>

              <div>
                <span className="block text-[7.5px] sm:text-[8px] font-bold text-[#14213D]/50 tracking-wider uppercase">
                  Valid For / Validité
                </span>
                <span className="block text-[10px] sm:text-xs font-semibold text-[#14213D]/90 truncate">
                  {fields.validFor || "—"}
                </span>
              </div>

              <div>
                <span className="block text-[7.5px] sm:text-[8px] font-bold text-[#14213D]/50 tracking-wider uppercase">
                  Processing / Délai
                </span>
                <span className="block text-[10px] sm:text-xs font-semibold text-[#14213D]/90 truncate">
                  {fields.processingTime || "—"}
                </span>
              </div>
            </div>
          </div>

          {/* Stamp Canvas Area */}
          <div
            className="relative flex-1 min-h-[180px] sm:min-h-[205px] my-1 border border-dashed border-[#14213D]/15 rounded-lg bg-[#14213D]/[0.015] overflow-hidden"
            aria-label="Visa stamps pressed on this passport page"
          >
            {/* Watermark area caption when empty */}
            {stamps.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[9px] sm:text-xs text-[#14213D]/30 font-mono tracking-widest uppercase">
                  [ BLANK VISA STAMP AREA ]
                </span>
              </div>
            )}

            {/* Rendered Stamped Visas with Organic Stacked Overlap */}
            {stamps.map((stamp, index) => (
              <VisaStamp
                key={stamp.id}
                stamp={stamp}
                isLatest={index === stamps.length - 1}
              />
            ))}
          </div>

          {/* Bottom Machine Readable Zone (MRZ) */}
          <div className="mt-1.5 pt-1.5 border-t border-[#14213D]/15 font-mono text-[7.5px] sm:text-[8.5px] tracking-[0.12em] sm:tracking-[0.16em] text-[#14213D]/70 select-none overflow-hidden leading-tight">
            <p className="truncate">V&lt;INDNAKSH&lt;&lt;GLOBAL&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</p>
            <p className="truncate">73838880884IND1710126M&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;AMD08</p>
          </div>
        </div>
      </motion.div>

      {/* Clear Page Action (Quiet & Understated) */}
      <div className="mt-2 text-right pr-1">
        <button
          type="button"
          onClick={onClear}
          className="text-xs font-sans text-[#14213D]/60 hover:text-[#14213D] underline underline-offset-4 transition-colors focus:outline-none focus:ring-2 focus:ring-[#14213D] rounded px-1"
        >
          Clear page
        </button>
      </div>
    </div>
  );
}
