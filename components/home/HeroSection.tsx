"use client";

import { useState } from "react";
import Link from "next/link";
import { Newsreader, Hanken_Grotesk } from "next/font/google";
import PassportPage, { PassportFields } from "./PassportPage";
import { StampData } from "./VisaStamp";
import { PHONE_NUMBER } from "@/lib/constants";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

interface CountryConfig {
  name: string;
  code: string;
  category: "STUDY" | "WORK" | "VISIT" | "RESIDENCE";
  visaType: string;
  validFor: string;
  processingTime: string;
  color: "#1F4E8C" | "#B3262E" | "#2F7D5B";
  shape: "hexagon" | "oval" | "rect" | "circle" | "octagon";
  defaultAnchor: { x: number; y: number };
}

const COUNTRIES: CountryConfig[] = [
  {
    name: "Canada",
    code: "CAN",
    category: "STUDY",
    visaType: "Student Visa (V-1)",
    validFor: "Duration of studies + 90 days",
    processingTime: "7–11 weeks typical (IRCC)",
    color: "#1F4E8C", // Stamp Blue
    shape: "hexagon",
    defaultAnchor: { x: 32, y: 34 },
  },
  {
    name: "Australia",
    code: "AUS",
    category: "WORK",
    visaType: "Skilled Migration (Subclass 189/190)",
    validFor: "Permanent / 5-year travel facility",
    processingTime: "4–8 weeks typical (Home Affairs)",
    color: "#B3262E", // Stamp Red
    shape: "oval",
    defaultAnchor: { x: 68, y: 38 },
  },
  {
    name: "UK",
    code: "GBR",
    category: "WORK",
    visaType: "Skilled Worker Route",
    validFor: "Up to 5 years (extendable)",
    processingTime: "3 weeks standard (UKVI)",
    color: "#2F7D5B", // Muted Green
    shape: "rect",
    defaultAnchor: { x: 42, y: 72 },
  },
  {
    name: "USA",
    code: "USA",
    category: "STUDY",
    visaType: "F-1 Academic Student",
    validFor: "Duration of Status (D/S)",
    processingTime: "Post-interview decision (DoS)",
    color: "#1F4E8C", // Stamp Blue
    shape: "circle",
    defaultAnchor: { x: 74, y: 72 },
  },
  {
    name: "Germany",
    code: "DEU",
    category: "WORK",
    visaType: "Opportunity Card (Chancenkarte)",
    validFor: "12 months (extendable)",
    processingTime: "6–12 weeks typical",
    color: "#B3262E", // Stamp Red
    shape: "octagon",
    defaultAnchor: { x: 50, y: 52 },
  },
  {
    name: "New Zealand",
    code: "NZL",
    category: "STUDY",
    visaType: "Fee Paying Student",
    validFor: "Course duration (up to 4 years)",
    processingTime: "5–8 weeks typical",
    color: "#2F7D5B", // Muted Green
    shape: "oval",
    defaultAnchor: { x: 28, y: 64 },
  },
  {
    name: "Dubai",
    code: "ARE",
    category: "RESIDENCE",
    visaType: "Employment & Residence Permit",
    validFor: "2–5 years renewable",
    processingTime: "5–10 business days (GDRFA)",
    color: "#1F4E8C", // Stamp Blue
    shape: "hexagon",
    defaultAnchor: { x: 65, y: 56 },
  },
];

function createStampData(country: CountryConfig, indexOffset: number = 0): StampData {
  const randomAngle = Math.sin(country.name.length * 13 + indexOffset * 7) * 6;
  const jitterX = Math.cos(country.name.length * 9 + indexOffset) * 4;
  const jitterY = Math.sin(country.name.length * 9 + indexOffset) * 4;

  const today = new Date();
  const dateStr = today
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase();

  return {
    id: `${country.code}-${Date.now()}-${indexOffset}`,
    country: country.name,
    code: country.code,
    category: country.category,
    subtitle: country.visaType,
    date: dateStr,
    color: country.color,
    rotation: Math.round(randomAngle * 10) / 10,
    xPercent: Math.min(80, Math.max(22, country.defaultAnchor.x + jitterX)),
    yPercent: Math.min(82, Math.max(25, country.defaultAnchor.y + jitterY)),
    shape: country.shape,
  };
}

export default function HeroSection() {
  const [selectedCountry, setSelectedCountry] = useState<string>("Canada");
  const [fields, setFields] = useState<PassportFields>({
    country: "Canada",
    visaType: "Student Visa (V-1)",
    validFor: "Duration of studies + 90 days",
    processingTime: "7–11 weeks typical (IRCC)",
    authority: "Ahmedabad Hub (Est. 2017)",
  });

  // A first stamp auto-lands on page load so the page isn't empty
  const [stamps, setStamps] = useState<StampData[]>(() => [createStampData(COUNTRIES[0], 0)]);
  const [shakeKey, setShakeKey] = useState<number>(0);

  const handleCountryClick = (country: CountryConfig) => {
    setSelectedCountry(country.name);
    setFields({
      country: country.name,
      visaType: country.visaType,
      validFor: country.validFor,
      processingTime: country.processingTime,
      authority: "Ahmedabad Hub (Est. 2017)",
    });

    // Check if country already exists on page; if so, replace or add natural layer
    setStamps((prev) => {
      const filtered = prev.filter((s) => s.country !== country.name);
      const newStamp = createStampData(country, filtered.length);
      return [...filtered, newStamp];
    });

    // Trigger physical passport page stamp thud shake
    setShakeKey((prev) => prev + 1);
  };

  const handleClearPage = () => {
    setStamps([]);
    setFields({
      country: "",
      visaType: "",
      validFor: "",
      processingTime: "",
      authority: "Ahmedabad Hub (Est. 2017)",
    });
  };

  // TODO: Add verified approval counts here once the audited 2026 dataset is finalized.

  return (
    <section
      className={`relative min-h-[85vh] lg:min-h-screen bg-[#EDEFF2] text-[#14213D] pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 lg:pb-20 flex flex-col justify-center overflow-x-clip ${hanken.className}`}
    >
      {/* Subtle paper grain SVG pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035] pointer-events-none select-none z-0"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id="hero-paper-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-paper-noise)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12">
        {/* Unified Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* ════ LEFT COLUMN: CONTENT & CONTROLS ════ */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Headline: characterful serif via Newsreader, sentence case, all one colour, strictly under 2 lines on desktop */}
            <h1
              className={`${newsreader.className} text-[1.62rem] min-[360px]:text-[1.72rem] sm:text-3xl lg:text-[2.6rem] xl:text-[2.95rem] font-normal text-[#14213D] leading-[1.12] tracking-[-0.02em] mb-3.5 max-w-2xl break-words`}
            >
              Visas that get approved the first time.
            </h1>

            {/* One-sentence supporting line */}
            <p className="text-[13.5px] sm:text-base lg:text-lg text-[#14213D]/75 leading-relaxed max-w-xl mb-5 sm:mb-6 font-normal">
              We prepare, verify, and file student, work, and visitor visa applications
              from Ahmedabad with certified consular accuracy.
            </p>

            {/* Country Chips Selector */}
            <div className="w-full mb-6 lg:mb-8">
              <span className="block text-[11px] sm:text-xs font-semibold text-[#14213D]/60 uppercase tracking-wider mb-2">
                Select a destination to stamp:
              </span>
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Select destination country"
              >
                {COUNTRIES.map((country) => {
                  const isSelected = selectedCountry === country.name;
                  return (
                    <button
                      key={country.name}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => handleCountryClick(country)}
                      className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-150 border focus:outline-none focus:ring-2 focus:ring-[#14213D] focus:ring-offset-2 focus:ring-offset-[#EDEFF2] ${
                        isSelected
                          ? "bg-[#14213D] text-[#EDEFF2] border-[#14213D] shadow-sm"
                          : "bg-white/85 text-[#14213D] border-[#14213D]/25 hover:border-[#14213D] hover:bg-white"
                      }`}
                    >
                      {country.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Primary & Secondary CTAs (Desktop view) */}
            <div className="hidden lg:flex items-center gap-6 pt-1">
              <Link
                href="/free-assessment"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#14213D] hover:bg-[#1F4E8C] text-[#EDEFF2] text-sm font-semibold rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#14213D] focus:ring-offset-2 focus:ring-offset-[#EDEFF2]"
              >
                Book a free consultation
              </Link>

              <Link
                href="/services"
                className="text-sm font-semibold text-[#14213D] hover:text-[#1F4E8C] underline underline-offset-4 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#14213D] rounded px-1"
              >
                See all services
              </Link>
            </div>

            {/* Direct Telephone Helpline Notice (Desktop view) */}
            <div className="hidden lg:block mt-5 text-xs text-[#14213D]/65">
              <span>Direct office enquiry: </span>
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                className="font-semibold text-[#14213D] hover:underline"
              >
                {PHONE_NUMBER}
              </a>
              <span className="ml-2 text-[#14213D]/45">· Naroda, Ahmedabad</span>
            </div>
          </div>

          {/* ════ CENTER / RIGHT: PASSPORT PAGE ════ */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <PassportPage
              fields={fields}
              stamps={stamps}
              onClear={handleClearPage}
              shakeKey={shakeKey}
            />
          </div>

          {/* ════ MOBILE CTAs: Stacks cleanly after passport page on mobile ════ */}
          <div className="lg:hidden col-span-1 flex flex-col items-stretch sm:items-center gap-3.5 pt-4 border-t border-[#14213D]/10 w-full">
            <Link
              href="/free-assessment"
              className="w-full sm:w-auto text-center px-6 py-3.5 bg-[#14213D] hover:bg-[#1F4E8C] text-[#EDEFF2] text-sm font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#14213D]"
            >
              Book a free consultation
            </Link>

            <Link
              href="/services"
              className="text-center text-sm font-semibold text-[#14213D] hover:text-[#1F4E8C] underline underline-offset-4 transition-colors"
            >
              See all services
            </Link>

            <p className="text-center text-xs text-[#14213D]/60 pt-1">
              Direct enquiry:{" "}
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                className="font-semibold text-[#14213D]"
              >
                {PHONE_NUMBER}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
