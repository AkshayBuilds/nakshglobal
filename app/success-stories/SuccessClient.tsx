"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Newsreader, Hanken_Grotesk } from "next/font/google";
import { TESTIMONIALS, SUCCESS_STORIES, PHONE_NUMBER } from "@/lib/constants";
import VisaStamp, { type StampData } from "@/components/home/VisaStamp";

// ─── Fonts ───────────────────────────────────────────────────────────────────
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// ─── Types ───────────────────────────────────────────────────────────────────
type CategoryFilter = "All" | "Student Visa" | "Work Permit" | "Visitor Visa";

interface StoryType {
  category: string;
  name: string;
  flag: string;
  country: string;
  university?: string;
  program?: string;
  company?: string;
  role?: string;
  purpose?: string;
  challenge: string;
  solution: string;
  outcome: string;
  timeline: string;
  avatar: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
const FILTER_CATEGORIES: CategoryFilter[] = [
  "All",
  "Student Visa",
  "Work Permit",
  "Visitor Visa",
];

const FILTER_LABELS: Record<CategoryFilter, string> = {
  All: "All",
  "Student Visa": "Study",
  "Work Permit": "Work",
  "Visitor Visa": "Visitor",
};

function categoryToStampCategory(
  cat: string
): "STUDY" | "WORK" | "VISIT" | "RESIDENCE" {
  if (cat === "Student Visa") return "STUDY";
  if (cat === "Work Permit") return "WORK";
  return "VISIT";
}

function categoryToStampColor(cat: string): "#1F4E8C" | "#B3262E" | "#2F7D5B" {
  if (cat === "Student Visa") return "#1F4E8C";
  if (cat === "Work Permit") return "#B3262E";
  return "#2F7D5B";
}

const SHAPES: Array<"hexagon" | "oval" | "rect" | "circle" | "octagon"> = [
  "hexagon",
  "oval",
  "rect",
  "circle",
  "octagon",
];

const DETERMINISTIC_ROTATIONS = [-2.5, 3.2, -4.1, 2.8, -1.5];

function buildStampForStory(story: StoryType, index: number): StampData {
  return {
    id: `story-stamp-${index}`,
    country: story.country,
    code: story.country.substring(0, 3).toUpperCase(),
    category: categoryToStampCategory(story.category),
    subtitle: story.category,
    date: "2024",
    color: categoryToStampColor(story.category),
    rotation: DETERMINISTIC_ROTATIONS[index % DETERMINISTIC_ROTATIONS.length],
    xPercent: 50,
    yPercent: 50,
    shape: SHAPES[index % SHAPES.length],
  };
}

// ─── Sub-components ──────────────────────────────────────────────────────────

/** Timeline bar — simple start → end */
function TimelineBar({
  duration,
  compact,
}: {
  duration: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 ${compact ? "mt-1" : "mt-4"}`}
      aria-label={`Timeline: ${duration}`}
    >
      <div className="relative flex items-center flex-1 max-w-[200px]">
        {/* Track */}
        <div className="absolute inset-y-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-[var(--color-divider)]" />
        {/* Start dot */}
        <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-[var(--color-stamp-blue)] border-2 border-white" />
        {/* Filled portion */}
        <div className="flex-1 h-[2px] bg-[var(--color-stamp-blue)]" />
        {/* End dot */}
        <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-[var(--color-approved-green)] border-2 border-white" />
      </div>
      <span
        className={`${hanken.className} text-sm font-medium text-[var(--color-ink)]/70`}
      >
        {duration}
      </span>
    </div>
  );
}

/** Expandable case row */
function CaseRow({ story }: { story: StoryType }) {
  const [open, setOpen] = useState(false);

  const metaLine = [
    story.name,
    story.category,
    story.country,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <div className="border-b border-[var(--color-divider)]">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={`
          w-full text-left py-5 px-1 group
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-stamp-blue)]
          cursor-pointer
        `}
      >
        {/* Layout: content on left, chevron on right */}
        <div className="flex items-start md:items-center justify-between gap-4">
          <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-center md:gap-6">
            {/* Outcome sentence */}
            <p
              className={`${newsreader.className} text-lg md:text-xl font-medium text-[var(--color-ink)] leading-snug`}
            >
              {story.outcome}
            </p>

            {/* Meta + timeline */}
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mt-2 md:mt-0 shrink-0">
              <span
                className={`${hanken.className} text-sm text-[var(--color-ink)]/60`}
              >
                {metaLine}
              </span>
              <TimelineBar duration={story.timeline} compact />
            </div>
          </div>

          {/* Expand chevron */}
          <svg
            className={`w-5 h-5 text-[var(--color-ink)]/40 group-hover:text-[var(--color-ink)] transition-transform duration-200 shrink-0 mt-1 md:mt-0 ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {/* Expanded detail */}
      <div
        className="grid transition-[grid-template-rows] duration-250 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="pb-6 px-1 pt-1">
            <div className="max-w-[65ch] space-y-4">
              <div>
                <h4
                  className={`${hanken.className} text-sm font-semibold text-[var(--color-ink)]/80 mb-1`}
                >
                  What was difficult
                </h4>
                <p
                  className={`${hanken.className} text-base text-[var(--color-ink)]/75 leading-relaxed`}
                >
                  {story.challenge}
                </p>
              </div>
              <div>
                <h4
                  className={`${hanken.className} text-sm font-semibold text-[var(--color-ink)]/80 mb-1`}
                >
                  What we did
                </h4>
                <p
                  className={`${hanken.className} text-base text-[var(--color-ink)]/75 leading-relaxed`}
                >
                  {story.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function SuccessClient() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");
  const [countryFilter, setCountryFilter] = useState("All");

  // TODO: Get written client consent before displaying real names and results
  const featured = SUCCESS_STORIES[0]; // Priya — strongest story
  const remaining = SUCCESS_STORIES.slice(1);

  const filtered = useMemo(() => {
    return remaining.filter((s) => {
      const catMatch =
        activeFilter === "All" || s.category === activeFilter;
      const countryMatch =
        countryFilter === "All" || s.country === countryFilter;
      return catMatch && countryMatch;
    });
  }, [activeFilter, countryFilter, remaining]);

  const countries = useMemo(() => {
    const set = new Set(remaining.map((s) => s.country));
    return ["All", ...Array.from(set).sort()];
  }, [remaining]);

  // Featured stamp
  const featuredStamp = useMemo(
    () => buildStampForStory(featured, 0),
    [featured]
  );

  // Pull-quotes — pick 2-3 testimonials with varied sizes
  const pullQuotes = TESTIMONIALS.slice(0, 3);
  const quoteStyles = [
    { size: "text-2xl md:text-[1.65rem]", align: "" },
    { size: "text-xl md:text-[1.4rem]", align: "md:ml-auto md:max-w-lg" },
    { size: "text-lg md:text-xl", align: "md:ml-16" },
  ];

  return (
    <div
      className={`${hanken.className} min-h-screen`}
      style={{ backgroundColor: "var(--color-paper)" }}
    >
      {/* ── Page header ── */}
      <section className="pt-32 md:pt-40 pb-8 md:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className={`${newsreader.className} text-[2rem] md:text-[2.75rem] font-medium leading-tight text-[var(--color-ink)]`}
          >
            Real cases, real outcomes.
          </h1>
          <p className="mt-3 text-base text-[var(--color-ink)]/65 max-w-xl leading-relaxed">
            {/* TODO: Get written client consent before publishing names/results */}
            These are verified results from clients who agreed to share their
            journeys with Naksh Global Visa.
          </p>
        </div>
      </section>

      {/* ── Featured case ── */}
      <section className="pb-10 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-6 md:p-10 border border-[var(--color-divider)]/50">
            <div className="flex flex-col md:flex-row md:items-start md:gap-10">
              {/* Stamp — on mobile above, on desktop right */}
              <div className="relative w-[160px] h-[115px] md:w-[185px] md:h-[130px] mx-auto md:mx-0 md:order-2 shrink-0 mb-5 md:mb-0">
                <VisaStamp stamp={featuredStamp} isLatest={true} />
              </div>

              {/* Text — left */}
              <div className="flex-1 md:order-1">
                <p
                  className={`${newsreader.className} text-[1.375rem] md:text-[1.75rem] font-medium text-[var(--color-ink)] leading-snug`}
                >
                  Canada study visa approved with a 58% academic score.
                </p>
                <p className="mt-3 text-sm text-[var(--color-ink)]/55">
                  {featured.name} · {featured.category} · {featured.country}
                </p>

                {/* Timeline bar */}
                <TimelineBar duration={featured.timeline} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filters ── */}
      <section className="pb-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {/* Category filters */}
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`
                  text-sm font-semibold pb-0.5 transition-colors
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-stamp-blue)]
                  cursor-pointer
                  ${
                    activeFilter === cat
                      ? "text-[var(--color-ink)] border-b-2 border-[var(--color-ink)]"
                      : "text-[var(--color-ink)]/45 hover:text-[var(--color-ink)]/70 border-b-2 border-transparent"
                  }
                `}
              >
                {FILTER_LABELS[cat]}
              </button>
            ))}

            {/* Country select */}
            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="text-sm font-medium text-[var(--color-ink)]/60 bg-transparent border border-[var(--color-divider)] rounded-md px-2 py-1 ml-auto focus-visible:outline-2 focus-visible:outline-[var(--color-stamp-blue)] cursor-pointer"
            >
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c === "All" ? "All countries" : c}
                </option>
              ))}
            </select>

            {/* Count */}
            <span className="text-sm text-[var(--color-ink)]/45 tabular-nums">
              {filtered.length} {filtered.length === 1 ? "case" : "cases"}
            </span>
          </div>
        </div>
      </section>

      {/* ── Case list ── */}
      <section className="py-6 md:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top border */}
          <div className="border-t border-[var(--color-divider)]">
            {filtered.length > 0 ? (
              filtered.map((story, i) => (
                <CaseRow key={story.name} story={story} />
              ))
            ) : (
              <p className="py-10 text-center text-base text-[var(--color-ink)]/50">
                No cases match the current filters.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── Pull-quotes ── */}
      <section className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-14">
          {pullQuotes.map((t, i) => {
            const style = quoteStyles[i] || quoteStyles[0];
            return (
              <blockquote
                key={t.name}
                className={`max-w-2xl ${style.align}`}
              >
                <p
                  className={`${newsreader.className} ${style.size} italic text-[var(--color-ink)]/80 leading-relaxed`}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <footer className="mt-3 text-sm text-[var(--color-ink)]/50">
                  — {t.name.split(" ")[0]},{" "}
                  {t.role
                    ? t.role.split(",").pop()?.trim()
                    : t.flag}
                  {/* TODO: If real Google review links exist, add: <a href="...">Read on Google</a> */}
                </footer>
              </blockquote>
            );
          })}
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className={`${newsreader.className} text-xl md:text-2xl font-medium text-[var(--color-ink)] mb-6`}
          >
            Your next chapter could start here.
          </p>
          <Link
            href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
            className="inline-flex items-center px-7 py-3.5 bg-[var(--color-stamp-blue)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--color-ink)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-stamp-blue)]"
          >
            Book a free consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
