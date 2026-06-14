# NAKSH GLOBAL VISA — FULL SITE REDESIGN
## Master Cursor Agent Prompt

---

## CONTEXT

You are doing a complete visual redesign of the Naksh Global Visa website — a professional immigration consultancy based in Ahmedabad, India. The site is built with Next.js 14 (App Router), Tailwind CSS v4, Framer Motion, and Lucide React.

The site works and the content is correct. The problem is it looks AI-generated:
- Every section uses the same layout formula
- Every section has a centered pill label → centered heading → equal card grid
- Decorative filler elements everywhere (gold dividers, duplicate credential bars)
- The color theme feels dated

**Your job: rewrite every component for visual quality, not just correctness.**

---

## PART 1 — NEW COLOR THEME

Replace the old gold + navy theme entirely. The new theme is:

**Deep Blue + White + Orange**

```css
/* globals.css — replace the entire @theme block */
@theme {
  /* Deep Blue family */
  --color-blue-950: #03071E;
  --color-blue-900: #051640;
  --color-blue-800: #0A2463;
  --color-blue-700: #1B3A8C;
  --color-blue-600: #2952B3;
  --color-blue-500: #3D6FD4;
  --color-blue-400: #5B8DE8;
  --color-blue-100: #D6E4FF;
  --color-blue-50:  #EBF1FF;

  /* Orange accent family */
  --color-orange-600: #C44B00;
  --color-orange-500: #E85D04;
  --color-orange-400: #F77F00;
  --color-orange-300: #FAAB40;
  --color-orange-100: #FEE5C0;
  --color-orange-50:  #FFF5E6;

  /* Neutral grays */
  --color-gray-950: #0D0D0D;
  --color-gray-900: #111827;
  --color-gray-800: #1F2937;
  --color-gray-700: #374151;
  --color-gray-600: #4B5563;
  --color-gray-500: #6B7280;
  --color-gray-400: #9CA3AF;
  --color-gray-300: #D1D5DB;
  --color-gray-200: #E5E7EB;
  --color-gray-100: #F3F4F6;
  --color-gray-50:  #F9FAFB;

  /* Semantic */
  --color-bg-primary:   #FFFFFF;
  --color-bg-secondary: #F9FAFB;
  --color-bg-dark:      #0A2463;
  --color-bg-darker:    #03071E;

  --color-text-primary:   #111827;
  --color-text-secondary: #4B5563;
  --color-text-muted:     #9CA3AF;

  --color-accent:       #E85D04;
  --color-accent-light: #F77F00;
  --color-accent-dark:  #C44B00;

  --color-border:       #E5E7EB;
  --color-border-dark:  rgba(255,255,255,0.08);

  /* Fonts */
  --font-jakarta: "Plus Jakarta Sans", sans-serif;
  --font-inter:   "Inter", sans-serif;

  /* Shadows */
  --shadow-card:       0 1px 3px rgba(10,36,99,0.06), 0 4px 16px rgba(10,36,99,0.08);
  --shadow-card-hover: 0 4px 24px rgba(10,36,99,0.14), 0 8px 32px rgba(10,36,99,0.10);
  --shadow-orange:     0 2px 12px rgba(232,93,4,0.30);
  --shadow-navbar:     0 1px 0 rgba(10,36,99,0.08), 0 4px 20px rgba(10,36,99,0.06);
}
```

**Also update the CSS utility classes in globals.css:**

```css
/* Fix heading color bug — current code has #94A3B8 which makes headings gray */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #111827;
}

/* Section label — now blue + orange */
.section-label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 1rem;
  background: rgba(232, 93, 4, 0.08);
  border: 1px solid rgba(232, 93, 4, 0.25);
  border-radius: 4px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #C44B00;
}

/* Buttons */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8125rem 1.75rem;
  background: #E85D04;
  color: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 6px;
  border: 2px solid transparent;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(232,93,4,0.30);
}
.btn-primary:hover {
  background: #C44B00;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(232,93,4,0.40);
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8125rem 1.75rem;
  background: transparent;
  color: #0A2463;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 6px;
  border: 2px solid #0A2463;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}
.btn-outline:hover {
  background: #0A2463;
  color: #ffffff;
  transform: translateY(-2px);
}

.btn-outline-white {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8125rem 1.75rem;
  background: rgba(255,255,255,0.08);
  color: #ffffff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 6px;
  border: 2px solid rgba(255,255,255,0.40);
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}
.btn-outline-white:hover {
  background: rgba(255,255,255,0.15);
  border-color: rgba(255,255,255,0.75);
}

/* Typography */
.heading-xl {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: #111827;
}
.heading-lg {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.5rem, 3.5vw, 2.5rem);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: #111827;
}
.heading-md {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-weight: 700;
  line-height: 1.35;
  color: #111827;
}
.body-lg {
  font-size: 1.0625rem;
  line-height: 1.8;
  color: #4B5563;
}
.body-md {
  font-size: 0.9375rem;
  line-height: 1.75;
  color: #4B5563;
}

/* Cards */
.card {
  background: #ffffff;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(10,36,99,0.06), 0 4px 16px rgba(10,36,99,0.06);
  transition: all 0.3s ease;
}
.card:hover {
  border-color: #D1D5DB;
  box-shadow: 0 6px 24px rgba(10,36,99,0.12);
  transform: translateY(-3px);
}
.card-dark {
  background: #0A2463;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  color: #D6E4FF;
}

.section-padding {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
@media (min-width: 768px) {
  .section-padding {
    padding-top: 7rem;
    padding-bottom: 7rem;
  }
}

/* Scrollbar */
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: #F9FAFB; }
::-webkit-scrollbar-thumb { background: #D1D5DB; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #9CA3AF; }

::selection {
  background: rgba(232, 93, 4, 0.15);
  color: #03071E;
}
```

---

## PART 2 — LOADING ANIMATION

Create a new file: `components/LoadingScreen.tsx`

This component shows on first page load for ~2.5 seconds, then fades out. It has THREE animations in sequence:

**Sequence:**
1. (0–0.8s) A paper airplane flies in from bottom-left to center, trailing a dotted path
2. (0.8–1.6s) The airplane reaches center and a passport "stamp" slams down with a bounce — showing "NAKSH GLOBAL VISA" text
3. (1.6–2.5s) Everything fades out, site content fades in

**Implementation:**

```tsx
// components/LoadingScreen.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<"plane" | "stamp" | "done">("plane");

  useEffect(() => {
    // Only show once per session
    const seen = sessionStorage.getItem("naksh_loaded");
    if (seen) { setVisible(false); return; }

    const t1 = setTimeout(() => setPhase("stamp"), 900);
    const t2 = setTimeout(() => setPhase("done"), 1800);
    const t3 = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("naksh_loaded", "1");
    }, 2600);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#03071E] overflow-hidden"
        >
          {/* Dotted world grid background */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 500">
            {Array.from({ length: 20 }).map((_, row) =>
              Array.from({ length: 32 }).map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={col * 26 + 13}
                  cy={row * 26 + 13}
                  r={1}
                  fill="#5B8DE8"
                />
              ))
            )}
          </svg>

          {/* Flying plane phase */}
          {phase === "plane" && (
            <motion.div
              initial={{ x: -200, y: 150, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <svg width="80" height="80" viewBox="0 0 64 64" fill="none">
                <path
                  d="M60 4L4 28l20 8 8 20 8-20 20-32z"
                  fill="#E85D04"
                  stroke="#FAAB40"
                  strokeWidth="1.5"
                />
                <path d="M24 36l8-8" stroke="#FAAB40" strokeWidth="1.5" strokeDasharray="2 2" />
              </svg>
              {/* Dotted trail */}
              <motion.svg
                className="absolute top-1/2 right-full"
                width="160"
                height="4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ originX: "right" }}
              >
                <line x1="0" y1="2" x2="160" y2="2" stroke="#E85D04" strokeWidth="2" strokeDasharray="6 4" />
              </motion.svg>
            </motion.div>
          )}

          {/* Stamp phase */}
          {phase === "stamp" && (
            <motion.div
              initial={{ scale: 2, opacity: 0, rotate: -12 }}
              animate={{ scale: 1, opacity: 1, rotate: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="flex flex-col items-center justify-center border-[6px] border-[#E85D04] rounded-lg px-12 py-8"
              style={{ boxShadow: "0 0 0 2px rgba(232,93,4,0.2), inset 0 0 0 2px rgba(232,93,4,0.2)" }}
            >
              <p className="text-[#E85D04] text-[10px] font-black tracking-[0.3em] uppercase mb-1">
                Approved
              </p>
              <p
                className="text-white text-2xl font-black tracking-tight"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                NAKSH GLOBAL
              </p>
              <p className="text-[#5B8DE8] text-[11px] font-semibold tracking-[0.2em] uppercase mt-1">
                Visa & Immigration
              </p>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

**Add to `app/layout.tsx`:**
```tsx
import LoadingScreen from "@/components/LoadingScreen";

// Inside <body>, BEFORE everything else:
<LoadingScreen />
```

---

## PART 3 — CONTAINER VS FULL-WIDTH RULES

Apply these rules to EVERY section. This is the most important structural change:

**USE full-width (no max-w container) when:**
- Section has a dark/colored background that should bleed edge to edge
- Hero image panels
- CTA banners
- Any section where the background color IS the design
- Stats/metrics bars

**USE container (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`) for:**
- All text content areas
- Card grids
- Form elements
- Navigation content

**Pattern for full-bleed sections with contained content:**
```tsx
// CORRECT — background full width, content contained
<section className="bg-[#0A2463] py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* content here */}
  </div>
</section>

// WRONG — don't wrap the section itself in a container
<div className="max-w-7xl mx-auto">
  <section className="bg-[#0A2463] py-24">
    ...
  </section>
</div>
```

---

## PART 4 — SECTION-BY-SECTION REDESIGN

**GOLDEN RULE: No two consecutive sections can share the same layout pattern.**

### SECTION BACKGROUNDS (alternate this sequence)
1. HeroSection → white
2. TrustIndicators → `#F9FAFB` (light gray)
3. AboutSection → `#0A2463` (deep blue, full-bleed)
4. ServicesOverview → white
5. FeaturedCountries → `#F9FAFB`
6. ProcessTimeline → `#03071E` (near black, full-bleed)
7. WhyChooseUs → white
8. Testimonials → `#F9FAFB`
9. FAQSection → white
10. CTABanner → `#0A2463` (full-bleed)

---

### HeroSection — Split layout

**Layout:** 50/50 grid — text left, image panel right  
**Full-width section, content NOT in a container**

```tsx
<section className="relative bg-white overflow-hidden pt-[73px]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-73px)] items-center gap-0">
      
      {/* LEFT — text, left aligned, no centering */}
      <div className="py-16 lg:py-24 pr-0 lg:pr-20">
        {/* Small eyebrow — NOT the section-label pill */}
        <p className="text-[#E85D04] text-xs font-bold tracking-[0.15em] uppercase mb-6">
          Professional Immigration Consultancy
        </p>
        
        {/* Big headline — first line normal, second line orange */}
        <h1 className="heading-xl mb-8">
          Navigate Your<br />
          <span className="text-[#E85D04]">Global Journey</span><br />
          With Confidence
        </h1>
        
        {/* NO decorative gold/orange divider line here */}
        
        <p className="body-lg max-w-lg mb-10">
          Helping students, families, and professionals navigate international
          opportunities through transparent guidance, expert consultation, and
          complete documentation support.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-14">
          <Link href="/free-assessment" className="btn-primary">
            <CalendarCheck className="w-4 h-4" />
            Book Consultation
          </Link>
          <Link href="/free-assessment" className="btn-outline">
            <ClipboardCheck className="w-4 h-4" />
            Free Assessment
          </Link>
        </div>
        
        {/* Service chips */}
        <div className="flex flex-wrap gap-2">
          {serviceLinks.map((s) => (
            <Link key={s.label} href={s.href}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#F3F4F6] border border-[#E5E7EB] text-[#374151] text-xs font-semibold hover:border-[#E85D04] hover:text-[#E85D04] hover:bg-[#FFF5E6] transition-all"
            >
              <s.icon className="w-3.5 h-3.5 text-[#E85D04]" />
              {s.label}
            </Link>
          ))}
        </div>
      </div>
      
      {/* RIGHT — dark blue panel, full height */}
      <div className="relative hidden lg:block h-full min-h-[calc(100vh-73px)]">
        {/* Deep blue background panel */}
        <div className="absolute inset-0 bg-[#0A2463]" />
        {/* Orange left accent stripe */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E85D04]" />
        
        {/* Photo fills panel */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/hero-consultation.png"
            alt="Professional immigration consultation"
            fill
            className="object-cover object-center opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#03071E]/70 via-[#0A2463]/20 to-transparent" />
        </div>
        
        {/* Stats — bottom of panel, NOT duplicated elsewhere */}
        <div className="absolute bottom-10 left-8 right-8">
          <div className="grid grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden">
            {[
              { num: "500+", label: "Clients Helped" },
              { num: "10+", label: "Countries" },
              { num: "2017", label: "Established" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#03071E]/60 backdrop-blur-sm px-4 py-5 text-center">
                <div className="text-2xl font-black text-[#E85D04] font-jakarta">{stat.num}</div>
                <div className="text-[10px] text-white/50 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* NO bottom credentials bar — stats are in the right panel */}
</section>
```

---

### TrustIndicators — Editorial split, NOT a card grid

**Background:** `#F9FAFB`  
**Layout:** 1/3 statement left, 2/3 compact items right

```tsx
<section className="py-20 bg-[#F9FAFB]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
      
      {/* LEFT — statement, no pill label */}
      <div className="border-l-4 border-[#E85D04] pl-8">
        <p className="text-[#E85D04] text-xs font-bold tracking-[0.15em] uppercase mb-3">
          Our Commitment
        </p>
        <h2 className="heading-lg mb-4">What sets our practice apart</h2>
        <p className="body-md">
          We operate with one simple rule: your interests always come first.
          No upselling, no shortcuts, no false promises.
        </p>
      </div>
      
      {/* RIGHT — 2x2 compact grid */}
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {trustPillars.map((pillar) => (
          <div key={pillar.title} className="flex gap-4 items-start">
            {/* Dark blue icon box — NOT gold */}
            <div className="w-10 h-10 rounded-lg bg-[#0A2463] flex items-center justify-center flex-shrink-0">
              <pillar.icon className="w-5 h-5 text-[#E85D04]" />
            </div>
            <div>
              <h3 className="font-bold text-[#111827] text-[15px] mb-1 font-jakarta">
                {pillar.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{pillar.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
```

---

### AboutSection — Full-bleed deep blue

**Background:** `#0A2463` full bleed  
**Layout:** 2-column — big stat numbers left, text + image right  
**All text white/light**

This section should feel premium. Large numbers, white text on deep blue. No cards.

---

### ServicesOverview — Asymmetric, NOT 3-equal-cards

**Background:** white  
**Layout:** Left 1/3 intro + "View all" link, Right 2/3 vertical stacked list

```tsx
<section className="section-padding bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
      
      {/* LEFT — intro, left aligned */}
      <div>
        <div className="section-label mb-5">Our Services</div>
        <h2 className="heading-lg mb-4">Comprehensive Visa Solutions</h2>
        <p className="body-md mb-8">
          End-to-end immigration services tailored to your unique goals
          and destination requirements.
        </p>
        <Link href="/services" className="btn-primary inline-flex">
          View All Services <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      
      {/* RIGHT — stacked horizontal service rows, NOT cards */}
      <div className="lg:col-span-2 flex flex-col divide-y divide-[#E5E7EB]">
        {SERVICES.map((service, i) => {
          const Icon = iconMap[service.icon];
          return (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className={`flex items-center gap-6 py-6 group hover:bg-[#F9FAFB] px-4 -mx-4 rounded-lg transition-colors ${i === 0 ? "border-l-4 border-[#E85D04] pl-4 ml-0" : ""}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#EBF1FF] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0A2463] transition-colors">
                <Icon className="w-6 h-6 text-[#0A2463] group-hover:text-[#E85D04] transition-colors" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-[#111827] text-base font-jakarta">{service.title}</h3>
                  {i === 0 && (
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#FFF5E6] text-[#C44B00] border border-[#FAAB40]/30 uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                </div>
                <p className="text-[#6B7280] text-sm">{service.shortDesc}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#E85D04] group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
          );
        })}
      </div>
    </div>
  </div>
</section>
```

---

### FeaturedCountries — Chip layout, NOT tall cards

**Background:** `#F9FAFB`  
**NO section-label pill — use large left-aligned heading**

```tsx
<section className="section-padding bg-[#F9FAFB]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Left aligned heading — not centered */}
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
      <div>
        <h2 className="heading-lg">Countries We Serve</h2>
        <p className="body-md mt-3 max-w-lg">
          We have deep expertise across 10+ countries and growing.
        </p>
      </div>
      <Link href="/countries" className="btn-outline inline-flex self-start">
        Explore All Countries <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
    
    {/* Flowing chip layout — NOT a strict card grid */}
    <div className="flex flex-wrap gap-3">
      {COUNTRIES.map((country) => (
        <Link
          key={country.name}
          href={`/countries/${country.slug}`}
          className="flex items-center gap-3 px-5 py-3 bg-white border border-[#E5E7EB] rounded-full hover:border-[#E85D04] hover:shadow-md hover:-translate-y-0.5 transition-all group"
        >
          <span className="text-xl">{country.flag}</span>
          <span className="font-semibold text-sm text-[#374151] group-hover:text-[#E85D04] font-jakarta transition-colors">
            {country.name}
          </span>
          <span className="text-[10px] text-[#9CA3AF] border border-[#E5E7EB] rounded-full px-2 py-0.5">
            {country.visaTypes?.length || 3} visas
          </span>
        </Link>
      ))}
    </div>
  </div>
</section>
```

---

### ProcessTimeline — Full-bleed dark, NO cards

**Background:** `#03071E` full-bleed  
**NO section-label pill — large ghost numbers ARE the visual**

```tsx
<section className="py-24 bg-[#03071E]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
      <h2 className="heading-lg text-white">How it works</h2>
      <p className="body-md text-white/40 max-w-sm text-right">
        A transparent, step-by-step process so you always know what comes next.
      </p>
    </div>
    
    {/* Steps — horizontal on desktop */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
      {PROCESS_STEPS.map((step, i) => (
        <div key={step.title} className="relative p-8 bg-[#03071E] hover:bg-[#0A2463]/50 transition-colors group">
          {/* Ghost number */}
          <div className="text-[80px] font-black text-white/[0.04] leading-none mb-4 select-none font-jakarta">
            {String(i + 1).padStart(2, "0")}
          </div>
          {/* Step number badge */}
          <div className="w-8 h-8 rounded-full border border-[#E85D04] flex items-center justify-center mb-4">
            <span className="text-[#E85D04] text-xs font-bold">{i + 1}</span>
          </div>
          <h3 className="text-white font-bold text-base mb-2 font-jakarta">{step.title}</h3>
          <p className="text-white/45 text-sm leading-relaxed">{step.description}</p>
          
          {/* Connector line (not last) */}
          {i < PROCESS_STEPS.length - 1 && (
            <div className="hidden lg:block absolute top-8 right-0 w-px h-16 bg-gradient-to-b from-transparent via-[#E85D04]/30 to-transparent" />
          )}
        </div>
      ))}
    </div>
  </div>
</section>
```

---

### WhyChooseUs — White background, numbered cells

**Background:** white  
**NO section-label pill — numbered grid IS the visual anchor**

```tsx
<section className="section-padding bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Header — split, NOT centered */}
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
      <div>
        <p className="text-[#E85D04] text-xs font-bold tracking-[0.15em] uppercase mb-3">
          Why Naksh Global
        </p>
        <h2 className="heading-lg">Why clients choose us</h2>
      </div>
      <p className="body-md max-w-sm text-right text-[#6B7280]">
        Deep expertise. Genuine care. Honest advice — even when it's not what you hoped to hear.
      </p>
    </div>
    
    {/* 3-column numbered grid — cells separated by borders, NOT cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-[#E5E7EB] border border-[#E5E7EB] rounded-xl overflow-hidden">
      {WHY_CHOOSE_US.map((item, i) => {
        const Icon = iconMap[item.icon];
        return (
          <div key={item.title} className="p-8 hover:bg-[#F9FAFB] transition-colors group relative">
            {/* Ghost number */}
            <div className="text-[64px] font-black text-[#0A2463]/[0.04] leading-none absolute top-4 right-6 select-none font-jakarta">
              {String(i + 1).padStart(2, "0")}
            </div>
            {/* Icon in dark box */}
            <div className="w-10 h-10 rounded-lg bg-[#0A2463] flex items-center justify-center mb-6">
              {Icon && <Icon className="w-5 h-5 text-[#E85D04]" />}
            </div>
            <h3 className="font-bold text-[#111827] text-base mb-2 font-jakarta">{item.title}</h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">{item.description}</p>
          </div>
        );
      })}
    </div>
  </div>
</section>
```

---

### Testimonials — Staggered, white bg

**Background:** `#F9FAFB`  
**Header:** heading left, tagline right — same row  
**Cards:** vertically staggered (not flat grid)  
**NO carousel on desktop**

```tsx
<section className="section-padding bg-[#F9FAFB]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Header — split row */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
      <div>
        <div className="section-label mb-4">Success Stories</div>
        <h2 className="heading-lg">Clients we've helped</h2>
      </div>
      <p className="text-[#9CA3AF] text-sm">Real people. Real approvals.</p>
    </div>
    
    {/* Desktop — staggered 3 columns */}
    <div className="hidden md:grid grid-cols-3 gap-6 items-start">
      {TESTIMONIALS.slice(0, 3).map((t, i) => (
        <motion.div
          key={t.name}
          style={{ marginTop: i === 1 ? 32 : i === 2 ? 16 : 0 }}
          className="bg-white rounded-xl border border-[#E5E7EB] p-6 hover:border-[#E85D04]/20 hover:shadow-lg transition-all duration-300"
        >
          {/* Stars */}
          <div className="flex gap-0.5 mb-4">
            {Array.from({ length: t.rating }).map((_, idx) => (
              <span key={idx} className="text-[#F77F00] text-sm">★</span>
            ))}
          </div>
          {/* Visa badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0A2463] text-[#E85D04] text-xs font-bold mb-4">
            <CheckCircle2 className="w-3 h-3" />
            {t.visaType} — Approved
          </div>
          <p className="text-[#4B5563] text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
          {/* Author */}
          <div className="flex items-center gap-3 pt-4 border-t border-[#E5E7EB]">
            <div className="w-9 h-9 rounded-full bg-[#0A2463] flex items-center justify-center text-[#E85D04] font-bold text-xs font-jakarta flex-shrink-0">
              {t.avatar}
            </div>
            <div>
              <div className="font-semibold text-[#111827] text-sm font-jakarta">{t.name}</div>
              <div className="text-[#9CA3AF] text-xs mt-0.5">{t.flag} {t.role}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    
    {/* Mobile carousel — keep existing logic, just update colors */}
  </div>
</section>
```

---

### FAQSection — Left-aligned accordion

**Background:** white  
**NO centered heading — left aligned**  
**Orange + / − toggle, not chevron**

```tsx
<section className="section-padding bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
      
      {/* LEFT — sticky intro */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="section-label mb-5">FAQ</div>
        <h2 className="heading-lg mb-4">Common questions</h2>
        <p className="body-md mb-6">
          Can't find what you're looking for? Get in touch directly.
        </p>
        <Link href="/contact" className="btn-primary inline-flex">
          Contact Us <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      
      {/* RIGHT — accordion */}
      <div className="lg:col-span-2 space-y-0 divide-y divide-[#E5E7EB] border-t border-[#E5E7EB]">
        {FAQS.map((faq, i) => (
          <FAQItem key={i} faq={faq} />
        ))}
      </div>
    </div>
  </div>
</section>
```

For the FAQ toggle icon: use `+` / `−` characters styled in orange, NOT the `ChevronDown` lucide icon.

---

### CTABanner — Full-bleed deep blue, centered (deliberate exception)

**Background:** `#0A2463` full-bleed  
**This is the ONE section where centering is correct** — it's the final call to action

```tsx
<section className="py-24 bg-[#0A2463] relative overflow-hidden">
  {/* Subtle dot grid background */}
  <div className="absolute inset-0 opacity-[0.04]"
    style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
  />
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
    <h2 className="heading-lg text-white mb-4">
      Ready to start your visa journey?
    </h2>
    <p className="body-lg text-white/60 mb-10">
      Book a free consultation today. No commitment, no hidden fees —
      just honest guidance from people who care about your outcome.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
      <Link href="/free-assessment" className="btn-primary">
        <CalendarCheck className="w-4 h-4" />
        Book Free Consultation
      </Link>
      <Link href="/contact" className="btn-outline-white">
        <Phone className="w-4 h-4" />
        +91 98765 43210
      </Link>
    </div>
    {/* Trust chips */}
    <div className="flex flex-wrap justify-center gap-3">
      {["Registered Consultants", "10+ Countries", "Since 2017", "500+ Clients"].map((chip) => (
        <div key={chip} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-white/60 text-xs font-medium">
          <div className="w-1.5 h-1.5 rounded-full bg-[#E85D04]" />
          {chip}
        </div>
      ))}
    </div>
  </div>
</section>
```

---

## PART 5 — NAVBAR UPDATE

Update the Navbar component to match the new theme:

- Logo accent color: `#E85D04` (orange) not gold
- Active nav link: `text-[#E85D04]` underline
- "Book" button: `bg-[#E85D04] text-white hover:bg-[#C44B00]`
- Phone number: `text-[#0A2463]`
- Navbar bg: `bg-white` with `border-b border-[#E5E7EB]`
- Mobile menu: white bg, links use same colors

---

## PART 6 — INNER PAGES

Apply the same layout rules to all inner pages:

**`/about`**
- Hero: full-bleed `#0A2463` with white text, no container constraint on bg
- Mission/Vision: white bg, 2-column side by side (not stacked cards with same height)
- Team section (if exists): asymmetric, not equal cards

**`/services/[slug]`**
- Hero: dark blue full-bleed, page title large and white
- Content: max-w container, white bg
- Feature list: use a proper 2-col layout not bullet points

**`/countries/[slug]`**  
- Same pattern: full-bleed dark hero, contained white content

**`/contact`**  
- Split layout: form left 60%, info right 40%
- Info panel: deep blue bg, white text
- Form: white bg, orange focus rings on inputs (`focus:ring-[#E85D04]`)

**`/free-assessment`**  
- Left: form steps with orange progress indicator
- Right: sticky summary panel with deep blue bg

---

## PART 7 — ANIMATION GUIDELINES

**Keep these, they're good:**
- `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}` on section entry
- Stagger delay: `delay: i * 0.1` (max 0.4s total)

**Add these new micro-interactions:**
- Service row on hover: left border slides in (use CSS `border-left` transition)
- Country chip on hover: slight scale + shadow
- FAQ accordion: smooth height transition with `AnimatePresence`
- Navbar: subtle backdrop-blur on scroll

**Remove these:**
- `hover:-translate-y-4` (too bouncy for business site — use `-translate-y-1` max)
- Any horizontal sliding on desktop
- Carousel on desktop testimonials

**Page transitions:** Add to `app/layout.tsx`:
```tsx
<motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.35, ease: "easeOut" }}
>
  {children}
</motion.div>
```

---

## PART 8 — WHAT NOT TO DO

- ❌ Never use `text-center` on section headings unless explicitly marked above
- ❌ Never use the `divider-gold` class or any `w-12 h-1` decorative lines
- ❌ Never use `.section-label` pill on more than 3–4 sections total
- ❌ Never duplicate the same content in two places (credentials bar + floating card)
- ❌ Never use equal-height card grids when a list or editorial layout fits
- ❌ Never use `hover:-translate-y-4` — max `-translate-y-1`
- ❌ Never hardcode old gold colors (`#C9A227`, `#B08820`, `#DDB954`) anywhere
- ❌ Never put a container div around a full-bleed section background
- ❌ Never add new sections not already in the codebase

---

## EXECUTION ORDER

Do these files in this order:

1. `app/globals.css` — theme + utility classes
2. `components/LoadingScreen.tsx` — new file
3. `app/layout.tsx` — add LoadingScreen + page transition
4. `components/Navbar.tsx` (or wherever navbar lives) — color update
5. `components/home/HeroSection.tsx`
6. `components/home/TrustIndicators.tsx`
7. `components/home/ServicesOverview.tsx`
8. `components/home/FeaturedCountries.tsx`
9. `components/home/ProcessTimeline.tsx`
10. `components/home/WhyChooseUs.tsx`
11. `components/home/Testimonials.tsx`
12. `components/home/FAQSection.tsx`
13. `components/home/CTABanner.tsx`
14. All files in `app/about/`
15. All files in `app/services/`
16. All files in `app/countries/`
17. All files in `app/contact/`
18. All files in `app/free-assessment/`

For each file: output the COMPLETE rewritten file. No `// ... existing code` shortcuts. All imports included.

