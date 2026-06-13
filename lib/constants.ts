// ─── Site Info ────────────────────────────────────────────────────────────────
export const SITE_NAME = "Naksh Global Visa";
export const SITE_TAGLINE = "Your Trusted Partner for Global Opportunities";
export const SITE_DESCRIPTION =
  "Naksh Global Visa is a premium immigration and visa consultancy helping students, professionals, and families navigate their global journey with expert guidance, transparency, and care.";
export const SITE_URL = "https://www.nakshglobalvisa.com";
export const WHATSAPP_NUMBER = "+919876543210";
export const PHONE_NUMBER = "+91 98765 43210";
export const EMAIL = "contact@nakshglobalvisa.com";
export const ADDRESS = "3rd Floor, Prestige Tower, MG Road, Bangalore – 560001, Karnataka, India";
export const BUSINESS_HOURS = [
  { day: "Monday – Friday", hours: "9:00 AM – 7:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 5:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS = [
  { value: 5000, suffix: "+", label: "Visas Approved" },
  { value: 98, suffix: "%", label: "Success Rate" },
  { value: 25, suffix: "+", label: "Countries Served" },
  { value: 8, suffix: "+", label: "Years Experience" },
];

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: "student-visa",
    title: "Student Visa",
    slug: "student-visa",
    icon: "GraduationCap",
    shortDesc: "Study at top universities worldwide with expert visa guidance.",
    description:
      "We help ambitious students get admission to top universities and secure student visas across Canada, UK, Australia, USA, Germany, and New Zealand.",
    color: "from-blue-600 to-blue-800",
    features: ["University Admission Assistance", "Visa Application Filing", "SOP & LOR Guidance", "Pre-Departure Support"],
    process: [
      { step: 1, title: "Free Consultation", desc: "Discuss your academic profile, goals, and target countries." },
      { step: 2, title: "University Selection", desc: "We shortlist universities matching your profile and budget." },
      { step: 3, title: "Application & Admission", desc: "We prepare and submit applications on your behalf." },
      { step: 4, title: "Visa Documentation", desc: "Complete document checklist preparation and review." },
      { step: 5, title: "Visa Filing", desc: "Submit your visa application to the embassy." },
      { step: 6, title: "Pre-Departure", desc: "Travel briefing, accommodation and arrival guidance." },
    ],
    documents: [
      "Valid Passport (minimum 2 years validity)",
      "Academic Transcripts (10th, 12th, Degree)",
      "English Proficiency (IELTS / TOEFL / PTE)",
      "Statement of Purpose (SOP)",
      "Letters of Recommendation (LOR)",
      "Financial Statements (bank statements – last 6 months)",
      "Offer Letter / Acceptance Letter from University",
      "Passport-size Photographs",
    ],
    eligibility: [
      "Minimum 60% in academic qualifications",
      "IELTS 6.0+ or equivalent English test score",
      "Sufficient funds to cover tuition and living expenses",
      "No adverse immigration history",
      "Genuine Temporary Entrant (GTE) intent",
    ],
    faqs: [
      { q: "How long does a student visa take to process?", a: "Processing times vary: Canada 8–12 weeks, UK 3 weeks, Australia 4–6 weeks, USA 3–5 weeks." },
      { q: "Can I work while studying abroad?", a: "Yes! Most countries allow 20 hours/week during semesters and full-time during breaks." },
      { q: "Do you help with scholarships?", a: "Yes, we guide you on merit scholarships, government grants, and university bursaries." },
      { q: "What is the minimum age for a student visa?", a: "There is no minimum age, but for under-18s, additional guardian consent documents may be required." },
    ],
  },
  {
    id: "work-permit",
    title: "Work Permit",
    slug: "work-permit",
    icon: "Briefcase",
    shortDesc: "Build your career abroad with the right work authorization.",
    description:
      "We assist skilled professionals and employer-sponsored candidates in obtaining work permits across Canada, UK, Germany, Australia, and more.",
    color: "from-emerald-600 to-emerald-800",
    features: ["Skilled Worker Programs", "Employer Sponsorship", "LMIA Assistance", "Post-Study Work Permits"],
    process: [
      { step: 1, title: "Profile Assessment", desc: "Evaluate your skills, experience, and eligibility for various work permit streams." },
      { step: 2, title: "Program Selection", desc: "Identify the best work permit category for your profile." },
      { step: 3, title: "Documentation", desc: "Prepare all required employment and personal documents." },
      { step: 4, title: "Employer Coordination", desc: "Liaise with employers for sponsorship letters (where required)." },
      { step: 5, title: "Application Filing", desc: "Submit your complete work permit application." },
      { step: 6, title: "Approval & Onboarding", desc: "Receive approval and prepare for relocation." },
    ],
    documents: [
      "Valid Passport",
      "Educational Certificates",
      "Updated CV / Resume",
      "Work Experience Letters",
      "Job Offer Letter (if employer-sponsored)",
      "Professional Certifications / Licences",
      "English / French Proficiency Test Results",
      "Medical Examination Reports",
    ],
    eligibility: [
      "Relevant work experience (typically 2+ years)",
      "Valid job offer from a recognized employer (for some streams)",
      "Educational qualifications matching job role",
      "Language proficiency requirements",
      "Clean criminal record",
    ],
    faqs: [
      { q: "What is the difference between Open and Closed work permits?", a: "An open work permit allows you to work for any employer, while a closed (employer-specific) permit ties you to one employer." },
      { q: "Can my family accompany me?", a: "Yes, most work permit programs allow spouses and dependent children to accompany you." },
      { q: "Can a work permit lead to permanent residency?", a: "Yes! Canada, Australia, and Germany have pathways from work permits to PR and citizenship." },
      { q: "How long does a work permit application take?", a: "Typically 8–20 weeks depending on the country and program." },
    ],
  },
  {
    id: "visitor-visa",
    title: "Visitor Visa",
    slug: "visitor-visa",
    icon: "Plane",
    shortDesc: "Travel the world for tourism, family visits, and business.",
    description:
      "We make visitor visa applications smooth and stress-free for tourism, family reunions, and business travel to popular destinations.",
    color: "from-purple-600 to-purple-800",
    features: ["Tourist Visa", "Family Visit Visa", "Business Travel Visa", "Multiple Entry Visas"],
    process: [
      { step: 1, title: "Initial Consultation", desc: "Discuss travel purpose, destination, and timeline." },
      { step: 2, title: "Eligibility Check", desc: "Assess financial and personal eligibility for the visa." },
      { step: 3, title: "Document Preparation", desc: "Compile all required travel and personal documents." },
      { step: 4, title: "Application Submission", desc: "Submit the visa application to the consulate." },
      { step: 5, title: "Biometrics & Interview", desc: "Schedule and prepare for any required biometrics or interview." },
      { step: 6, title: "Visa Approval", desc: "Receive your visa and travel documentation." },
    ],
    documents: [
      "Valid Passport",
      "Recent Passport Photographs",
      "Bank Statements (last 3–6 months)",
      "Income Tax Returns / Salary Slips",
      "Travel Itinerary",
      "Hotel / Accommodation Booking",
      "Return Flight Tickets",
      "Invitation Letter (for family visits)",
    ],
    eligibility: [
      "Valid passport with sufficient validity",
      "Proof of sufficient financial funds",
      "Strong ties to home country",
      "No history of visa refusals (or must disclose)",
      "Clear purpose and intent to return",
    ],
    faqs: [
      { q: "How far in advance should I apply for a visitor visa?", a: "Apply at least 6–8 weeks before your planned travel date." },
      { q: "Can I extend my visitor visa?", a: "Yes, in many countries you can apply for an extension from within the country." },
      { q: "Do I need travel insurance?", a: "Some countries like Schengen require it. We recommend it regardless for protection." },
      { q: "What if my visa is refused?", a: "We analyze the refusal reason and advise on re-application strategy." },
    ],
  },
];

// ─── Countries ────────────────────────────────────────────────────────────────
export const COUNTRIES = [
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    slug: "canada",
    tagline: "Land of Opportunities",
    description: "Canada is one of the most immigrant-friendly countries with a robust immigration system, world-class universities, and excellent quality of life.",
    heroColor: "from-red-900 to-red-800",
    benefits: ["High quality of life", "Universal healthcare", "Multicultural society", "Strong economy", "Path to PR & citizenship", "Free public education"],
    studyOpportunities: {
      summary: "Canada is home to 96 ranked universities. International students enjoy post-study work permits and pathways to PR.",
      highlights: ["University of Toronto, UBC, McGill", "PGWP up to 3 years", "2-year Post-Graduate Work Permit", "Avg tuition: CAD 25,000–45,000/year"],
    },
    workOpportunities: {
      summary: "Canada actively recruits skilled workers through Express Entry, Provincial Nominee Programs, and the Atlantic Immigration Program.",
      highlights: ["Express Entry (FSW, CEC, FST)", "Provincial Nominee Programs (PNP)", "Atlantic Immigration Program", "Rural and Northern Immigration Pilot"],
    },
    immigrationPathways: ["Express Entry", "Provincial Nominee Program (PNP)", "Family Sponsorship", "Start-Up Visa", "Atlantic Immigration Program"],
    costs: [
      { item: "Student Visa Fee", amount: "CAD 150" },
      { item: "Work Permit Fee", amount: "CAD 155" },
      { item: "PR Application Fee", amount: "CAD 1,325" },
      { item: "Avg Monthly Living Cost", amount: "CAD 1,500–2,500" },
    ],
    documents: ["Valid Passport", "Educational Certificates", "Language Test Results", "Financial Proof", "Medical Exam", "Police Clearance", "Offer Letter / Acceptance Letter"],
    visaProcess: ["Online Application on IRCC Portal", "Upload Documents", "Biometrics Enrollment", "Medical Examination", "Wait for Decision", "COPR / Visa Stamp"],
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    slug: "uk",
    tagline: "Excellence Meets Tradition",
    description: "The UK is home to some of the world's most prestigious universities and offers a Graduate Route visa that allows graduates to work for up to 2 years.",
    heroColor: "from-blue-900 to-blue-800",
    benefits: ["World-class education", "Graduate Route visa", "NHS healthcare", "Cultural diversity", "Strong financial hub", "English-speaking environment"],
    studyOpportunities: {
      summary: "The UK has 4 of the world's top 10 universities. International students can work 20 hours/week and access a 2-year Graduate Route post-study.",
      highlights: ["Oxford, Cambridge, Imperial, UCL", "2-year Graduate Route visa", "Avg tuition: £15,000–35,000/year", "Part-time work during studies"],
    },
    workOpportunities: {
      summary: "The UK Skilled Worker visa sponsors professionals across healthcare, technology, finance, and engineering sectors.",
      highlights: ["Skilled Worker Visa", "Health and Care Worker Visa", "Global Talent Visa", "Intra-Company Transfer"],
    },
    immigrationPathways: ["Skilled Worker Visa", "Graduate Route", "Health and Care Worker Visa", "Global Talent Visa", "Entrepreneur Visa"],
    costs: [
      { item: "Student Visa Fee", amount: "£363" },
      { item: "Skilled Worker Visa", amount: "£625–£1,235" },
      { item: "IHS Surcharge (per year)", amount: "£776" },
      { item: "Avg Monthly Living Cost", amount: "£1,000–1,800" },
    ],
    documents: ["Valid Passport", "CAS Number (Student)", "Financial Evidence", "English Test Results", "Certificate of Sponsorship (Work)", "Tuberculosis Test"],
    visaProcess: ["Online Application", "Pay Visa Fee & IHS", "Biometrics Enrollment", "Document Submission", "Decision by UKVI", "BRP Collection"],
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    slug: "australia",
    tagline: "Live, Work, Thrive Down Under",
    description: "Australia's points-based immigration system and strong economy make it a top destination for students and skilled workers seeking a high quality of life.",
    heroColor: "from-yellow-800 to-yellow-900",
    benefits: ["Points-based immigration", "High wages", "Outdoor lifestyle", "World-class healthcare", "Safe and stable", "Strong PR pathways"],
    studyOpportunities: {
      summary: "Australia has 7 universities in the top 100 globally. Post-study work visas allow graduates to stay and work for 2–6 years.",
      highlights: ["ANU, Monash, UNSW, Melbourne", "Post-Study Work Visa 2–6 years", "Avg tuition: AUD 20,000–45,000/year", "Can work 48 hours/fortnight"],
    },
    workOpportunities: {
      summary: "Australia actively recruits through the SkillSelect system with various skilled migration visas.",
      highlights: ["Skilled Independent Visa (189)", "Skilled Nominated Visa (190)", "Employer Nomination Scheme (186)", "Regional Sponsored Migration Scheme (187)"],
    },
    immigrationPathways: ["Skilled Independent (189)", "Skilled Nominated (190)", "Employer Nomination Scheme (186)", "Temporary Skill Shortage (482)", "Partner Visa"],
    costs: [
      { item: "Student Visa Fee", amount: "AUD 710" },
      { item: "Skilled Independent Visa", amount: "AUD 4,640" },
      { item: "TSS Visa (Employer)", amount: "AUD 2,645–3,035" },
      { item: "Avg Monthly Living Cost", amount: "AUD 1,500–2,500" },
    ],
    documents: ["Valid Passport", "Confirmation of Enrollment (CoE)", "Health Insurance (OSHC)", "Financial Proof", "Skills Assessment", "English Test Results"],
    visaProcess: ["Create ImmiAccount", "Complete Online Application", "Health & Character Checks", "Biometrics (if required)", "Upload Supporting Documents", "Decision & Grant"],
  },
  {
    id: "usa",
    name: "United States",
    flag: "🇺🇸",
    slug: "usa",
    tagline: "The American Dream Awaits",
    description: "The USA offers world-renowned universities, cutting-edge industries, and diverse opportunities for students and professionals from around the globe.",
    heroColor: "from-blue-950 to-red-950",
    benefits: ["Top-ranked universities", "Silicon Valley tech hub", "OPT & STEM OPT", "Research opportunities", "Diverse culture", "Strong salary packages"],
    studyOpportunities: {
      summary: "The USA has the most top-ranked universities globally. F-1 visa students get OPT for 12 months + 24-month STEM extension.",
      highlights: ["Harvard, MIT, Stanford, Caltech", "F-1 Student Visa", "12-month OPT + 24-month STEM OPT", "Avg tuition: USD 25,000–60,000/year"],
    },
    workOpportunities: {
      summary: "The USA offers H-1B, L-1, O-1, and EB visa categories for skilled professionals across all industries.",
      highlights: ["H-1B Specialty Occupation Visa", "L-1 Intracompany Transfer", "O-1 Extraordinary Ability", "EB-1, EB-2, EB-3 Green Cards"],
    },
    immigrationPathways: ["H-1B Visa", "L-1 Transfer", "O-1 Extraordinary Ability", "EB-2 NIW (National Interest Waiver)", "Green Card Lottery (DV)"],
    costs: [
      { item: "F-1 Student Visa (SEVIS)", amount: "USD 350" },
      { item: "H-1B Petition Fee", amount: "USD 2,460+" },
      { item: "DS-160 Visa Fee", amount: "USD 160" },
      { item: "Avg Monthly Living Cost", amount: "USD 1,500–3,000" },
    ],
    documents: ["Valid Passport", "I-20 Form (Student)", "DS-160 Form", "SEVIS Fee Receipt", "Financial Statements", "Admission Offer Letter", "English Test Results"],
    visaProcess: ["Get I-20 from University", "Pay SEVIS Fee", "Complete DS-160", "Schedule Consulate Interview", "Attend Visa Interview", "Visa Stamping"],
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    slug: "germany",
    tagline: "Engineering Your Future in Europe",
    description: "Germany is Europe's economic powerhouse with tuition-free public universities, a thriving job market, and a clear path to EU permanent residency.",
    heroColor: "from-gray-800 to-gray-900",
    benefits: ["Mostly tuition-free public universities", "Strong engineering sector", "EU permanent residency", "High quality of life", "Excellent public transport", "German language learning"],
    studyOpportunities: {
      summary: "Germany's public universities charge little to no tuition. Strong programs in engineering, technology, business, and sciences.",
      highlights: ["TU Munich, Heidelberg, LMU Munich", "Low/no tuition at public universities", "Job Seeker Visa after graduation", "Avg costs: €10,000–20,000/year (private)"],
    },
    workOpportunities: {
      summary: "Germany's Skilled Immigration Act 2020 opened doors for non-EU workers. The Opportunity Card (Chancenkarte) launched in 2024 is a new job-seeking route.",
      highlights: ["EU Blue Card", "Skilled Worker Visa", "Opportunity Card (Chancenkarte 2024)", "ICT Permit"],
    },
    immigrationPathways: ["Student Visa", "EU Blue Card", "Skilled Worker Visa", "Opportunity Card", "Self-Employment Visa", "Family Reunification"],
    costs: [
      { item: "Student Visa Fee", amount: "€75" },
      { item: "National Visa (Work)", amount: "€75" },
      { item: "Blocked Account (min)", amount: "€11,208/year" },
      { item: "Avg Monthly Living Cost", amount: "€800–1,200" },
    ],
    documents: ["Valid Passport", "Admission Letter", "German/English Language Proof", "Blocked Account Proof", "Health Insurance", "Biometric Photos", "APS Certificate (Indian students)"],
    visaProcess: ["Get Admission / Job Offer", "Open Blocked Account", "Apply at German Consulate", "Attend Visa Interview", "Receive National Visa D", "Register in Germany (Anmeldung)"],
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    slug: "new-zealand",
    tagline: "A Fresh Start at the Edge of the World",
    description: "New Zealand offers a welcoming immigration system, stunning landscapes, quality education, and a high standard of living with straightforward PR pathways.",
    heroColor: "from-teal-900 to-teal-800",
    benefits: ["Safe and peaceful country", "Welcoming immigration policies", "Post-study work rights", "Stunning natural environment", "High quality education", "Fast PR pathways"],
    studyOpportunities: {
      summary: "New Zealand's universities are globally recognized with strong programs in agriculture, engineering, and health sciences.",
      highlights: ["University of Auckland, Victoria", "3-year Post-Study Work Visa", "Work 20 hrs/week during studies", "Avg tuition: NZD 22,000–35,000/year"],
    },
    workOpportunities: {
      summary: "New Zealand's Accredited Employer Work Visa (AEWV) is the primary pathway for skilled workers.",
      highlights: ["Accredited Employer Work Visa (AEWV)", "Skilled Migrant Category (SMC)", "Working Holiday Visa", "Essential Skills Work Visa"],
    },
    immigrationPathways: ["Skilled Migrant Category (SMC)", "Accredited Employer Work Visa", "Residence from Work", "Investor Visa", "Family Category"],
    costs: [
      { item: "Student Visa Fee", amount: "NZD 375" },
      { item: "AEWV Fee", amount: "NZD 750" },
      { item: "Skilled Migrant PR", amount: "NZD 3,230" },
      { item: "Avg Monthly Living Cost", amount: "NZD 1,200–2,000" },
    ],
    documents: ["Valid Passport", "Offer of Place (Student)", "Proof of Funds", "Health Insurance", "Medical Certificate", "Police Clearance", "Job Offer (Work)"],
    visaProcess: ["Create RealMe Account", "Online Application on Immigration NZ", "Health & Character Declarations", "Biometrics Enrollment", "Decision Notification", "Visa Grant"],
  },
];

// ─── Process Steps ─────────────────────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Lead Intake",
    shortTitle: "Inquiry",
    icon: "PhoneCall",
    color: "#D4AF37",
    duration: "Day 1",
    description: "Your journey begins with a simple inquiry. Fill our free assessment form or call us directly. We gather your basic profile details — education, work experience, target country, and visa type.",
    details: ["Free initial inquiry form", "WhatsApp / Phone consultation", "Understand your goals and timeline", "No commitment required"],
  },
  {
    step: 2,
    title: "Assessment",
    shortTitle: "Assessment",
    icon: "ClipboardList",
    color: "#3f68b4",
    duration: "Day 2–3",
    description: "Our certified immigration consultants conduct a thorough assessment of your profile. We evaluate eligibility across multiple visa streams and recommend the best pathway.",
    details: ["Profile evaluation by expert consultants", "Visa stream comparison and recommendation", "Points calculation (if applicable)", "Detailed assessment report"],
  },
  {
    step: 3,
    title: "Documentation",
    shortTitle: "Documents",
    icon: "FileText",
    color: "#7C3AED",
    duration: "Week 1–3",
    description: "We provide a complete, customized document checklist. Our team reviews every document for accuracy, completeness, and compliance with embassy requirements before submission.",
    details: ["Customized document checklist", "Document review and verification", "Translation services (if needed)", "SOP and cover letter drafting"],
  },
  {
    step: 4,
    title: "Application Submission",
    shortTitle: "Submission",
    icon: "Send",
    color: "#059669",
    duration: "Week 3–4",
    description: "Once all documents are verified and approved, we prepare and submit your complete visa application to the embassy or immigration authority on your behalf.",
    details: ["Online / offline application filing", "Fee payment guidance", "Biometrics scheduling", "Embassy appointment booking"],
  },
  {
    step: 5,
    title: "Embassy Processing",
    shortTitle: "Processing",
    icon: "Building2",
    color: "#DC2626",
    duration: "4–12 weeks",
    description: "The embassy or immigration authority reviews your application. We monitor the status and promptly respond to any additional information requests (ADRs) or queries.",
    details: ["Application tracking", "Prompt ADR response", "Regular status updates", "Interview preparation (if required)"],
  },
  {
    step: 6,
    title: "Visa Decision",
    shortTitle: "Decision",
    icon: "CheckCircle2",
    color: "#D4AF37",
    duration: "Outcome",
    description: "You receive the embassy's decision. In case of approval, we guide you through pre-departure formalities. In rare cases of refusals, we analyze the reason and advise on the best next step.",
    details: ["Visa grant and documentation", "Pre-departure briefing", "Accommodation and travel guidance", "Refusal analysis and re-application plan"],
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Student, Canada",
    flag: "🇨🇦",
    visaType: "Student Visa",
    rating: 5,
    text: "Naksh Global Visa made my dream of studying at the University of Toronto a reality. Their team guided me through every step — from SOP writing to visa filing. Absolutely outstanding service!",
    university: "University of Toronto",
    avatar: "PS",
  },
  {
    name: "Rahul Mehta",
    flag: "🇬🇧",
    role: "Software Engineer, UK",
    visaType: "Skilled Worker Visa",
    rating: 5,
    text: "Got my UK Skilled Worker Visa in just 3 weeks! The team was incredibly professional, transparent about costs, and always available to answer my questions. Highly recommend!",
    company: "Tech Company, London",
    avatar: "RM",
  },
  {
    name: "Ananya Krishnan",
    flag: "🇦🇺",
    role: "Nurse, Australia",
    visaType: "Skilled Worker Visa",
    rating: 5,
    text: "I was skeptical about immigration consultants, but Naksh Global Visa changed my mind. They got me a Skilled Independent Visa for Australia in 4 months. Life-changing experience!",
    company: "Melbourne Hospital",
    avatar: "AK",
  },
  {
    name: "Vikram Patel",
    flag: "🇩🇪",
    role: "Masters Student, Germany",
    visaType: "Student Visa",
    rating: 5,
    text: "Getting a German student visa seemed complex, but Naksh Global Visa simplified everything — APS, blocked account, language requirements. I'm now at TU Munich studying engineering.",
    university: "TU Munich",
    avatar: "VP",
  },
  {
    name: "Sunita Reddy",
    flag: "🇳🇿",
    role: "PR Holder, New Zealand",
    visaType: "Skilled Migrant",
    rating: 5,
    text: "From work permit to permanent residency in New Zealand — Naksh Global handled everything with expertise. Their knowledge of NZ immigration is second to none. Five stars!",
    avatar: "SR",
  },
  {
    name: "Arjun Nair",
    flag: "🇺🇸",
    role: "PhD Student, USA",
    visaType: "Student Visa",
    rating: 5,
    text: "Got my F-1 visa for a PhD program at a top US university. The team prepared me thoroughly for the visa interview. I passed on the first attempt. Eternally grateful!",
    university: "University of Michigan",
    avatar: "AN",
  },
];

// ─── Team ─────────────────────────────────────────────────────────────────────
export const TEAM = [
  {
    name: "Rajesh Naksh",
    role: "Founder & Chief Immigration Consultant",
    bio: "8+ years of experience in immigration law. Licensed RCIC. Has successfully processed 3,000+ visa applications across Canada, UK, and Australia.",
    avatar: "RN",
    specialization: ["Canada", "UK", "Australia"],
    linkedin: "#",
  },
  {
    name: "Meera Iyer",
    role: "Senior Visa Consultant – Europe",
    bio: "Expert in German, UK, and Schengen visa applications. Fluent in German. Has guided 500+ students to European universities.",
    avatar: "MI",
    specialization: ["Germany", "UK", "Schengen"],
    linkedin: "#",
  },
  {
    name: "Suresh Pillai",
    role: "Senior Visa Consultant – Oceania",
    bio: "Specialist in Australia and New Zealand immigration. 6 years experience with PR and skilled migration pathways.",
    avatar: "SP",
    specialization: ["Australia", "New Zealand"],
    linkedin: "#",
  },
  {
    name: "Deepa Sharma",
    role: "Documentation & Compliance Officer",
    bio: "Expert in immigration documentation, SOP writing, and compliance review. Ensures every application meets embassy standards.",
    avatar: "DS",
    specialization: ["Documentation", "SOP Writing", "Compliance"],
    linkedin: "#",
  },
];

// ─── Values ───────────────────────────────────────────────────────────────────
export const VALUES = [
  {
    icon: "Shield",
    title: "Transparency",
    description: "We provide clear, honest guidance on visa processes, success chances, and costs — no hidden fees, no false promises.",
    color: "gold",
  },
  {
    icon: "Handshake",
    title: "Trust",
    description: "Building long-term relationships based on integrity. Your journey matters to us beyond just the visa application.",
    color: "blue",
  },
  {
    icon: "Award",
    title: "Expertise",
    description: "Our certified consultants bring years of specialized knowledge in immigration law, university admissions, and visa processes.",
    color: "gold",
  },
  {
    icon: "Heart",
    title: "Ethical Guidance",
    description: "We uphold the highest ethical standards. We only take your case when we genuinely believe in your success.",
    color: "blue",
  },
];

// ─── Why Choose Us ────────────────────────────────────────────────────────────
export const WHY_CHOOSE_US = [
  { icon: "ShieldCheck", title: "98% Success Rate", description: "Our expert guidance consistently delivers results across all visa categories." },
  { icon: "Clock", title: "Fast Processing", description: "We streamline your application to avoid delays and ensure timely submissions." },
  { icon: "Users", title: "Personalized Approach", description: "Every client receives a tailored strategy based on their unique profile and goals." },
  { icon: "BadgeCheck", title: "Certified Consultants", description: "All our consultants are licensed and keep up-to-date with immigration policy changes." },
  { icon: "Globe2", title: "25+ Countries", description: "We cover visa services for more than 25 countries across 6 continents." },
  { icon: "HeadphonesIcon", title: "End-to-End Support", description: "From first consultation to landing in your new country — we're with you every step." },
];

// ─── Success Stories ───────────────────────────────────────────────────────────
export const SUCCESS_STORIES = [
  {
    category: "Student Visa",
    name: "Priya Sharma",
    flag: "🇨🇦",
    country: "Canada",
    university: "University of Toronto",
    program: "MSc Computer Science",
    challenge: "Low academic percentage (58%) + tight timeline",
    solution: "Identified a pathway university, crafted a strong SOP, and filed well before deadlines.",
    outcome: "Student visa approved. Full scholarship offer received.",
    timeline: "3 months",
    avatar: "PS",
  },
  {
    category: "Work Permit",
    name: "Karthik Rao",
    flag: "🇬🇧",
    country: "United Kingdom",
    company: "Deloitte UK",
    role: "Senior Data Analyst",
    challenge: "Employer required complex sponsorship documentation",
    solution: "Coordinated with employer's HR, prepared all Home Office compliance documents.",
    outcome: "Skilled Worker Visa granted in 3 weeks.",
    timeline: "6 weeks",
    avatar: "KR",
  },
  {
    category: "Visitor Visa",
    name: "Lakshmi & Family",
    flag: "🇦🇺",
    country: "Australia",
    purpose: "Family visit to son studying in Melbourne",
    challenge: "First-time international travel. Previous Schengen refusal.",
    solution: "Prepared strong financial documents and addressed previous refusal in cover letter.",
    outcome: "Australia visitor visa approved. 3-month multiple entry.",
    timeline: "5 weeks",
    avatar: "LF",
  },
  {
    category: "Student Visa",
    name: "Mohammed Irfan",
    flag: "🇩🇪",
    country: "Germany",
    university: "RWTH Aachen",
    program: "MEng Mechanical Engineering",
    challenge: "APS certification, blocked account, German visa process complexity",
    solution: "Guided through APS process, opened blocked account, prepared full German consulate application.",
    outcome: "National Visa approved. Full tuition exemption at public university.",
    timeline: "4 months",
    avatar: "MI",
  },
];

// ─── Blog Posts (UI only) ─────────────────────────────────────────────────────
export const BLOG_POSTS = [
  {
    title: "Canada Express Entry 2025: What You Need to Know",
    category: "Canada",
    date: "June 5, 2025",
    readTime: "5 min read",
    excerpt: "Canada's Express Entry system underwent significant changes in 2025. Here's everything you need to know about the new CRS cutoffs, targeted draws, and how to boost your score.",
    slug: "canada-express-entry-2025",
  },
  {
    title: "Germany's Opportunity Card: Your Path to Europe",
    category: "Germany",
    date: "May 28, 2025",
    readTime: "4 min read",
    excerpt: "The Chancenkarte (Opportunity Card) launched in June 2024 allows non-EU skilled workers to move to Germany without a job offer. Learn how to apply and who qualifies.",
    slug: "germany-opportunity-card-guide",
  },
  {
    title: "UK Graduate Route Visa: 2 Years to Build Your Future",
    category: "United Kingdom",
    date: "May 15, 2025",
    readTime: "3 min read",
    excerpt: "The UK Graduate Route allows international students to stay and work in the UK for 2 years (3 years for PhDs) after graduation. Here's a complete guide to eligibility and application.",
    slug: "uk-graduate-route-visa-guide",
  },
];

// ─── FAQ (General) ────────────────────────────────────────────────────────────
export const GENERAL_FAQS = [
  { q: "How much does your consultation cost?", a: "Our initial consultation is 100% FREE. Service fees vary based on the complexity of your case and the visa type. We provide a complete, transparent fee breakdown before you commit." },
  { q: "Are you RCIC certified?", a: "Yes, our lead consultant Rajesh Naksh is a Regulated Canadian Immigration Consultant (RCIC). Our UK and Australian consultants are registered with the relevant immigration authorities." },
  { q: "Do you guarantee visa approval?", a: "No ethical consultant can guarantee visa approval. We guarantee our best effort, complete preparation, and transparent guidance. Our 98% success rate speaks to our expertise." },
  { q: "How long does the process take?", a: "It varies by visa type and country: Student visas 4–12 weeks, Work permits 8–20 weeks, Visitor visas 3–8 weeks. We always aim for the fastest possible processing." },
  { q: "Can you help with visa refusals?", a: "Yes. We specialize in analyzing refusal letters, identifying the root cause, and building a stronger re-application strategy." },
  { q: "Do I need to visit your office?", a: "No. We serve clients globally online. All consultations, document reviews, and applications can be managed remotely." },
];

// ─── Nav Links ─────────────────────────────────────────────────────────────────
export const NAV_SERVICES = [
  { title: "Student Visa", href: "/services/student-visa", icon: "GraduationCap", desc: "Study abroad at top universities" },
  { title: "Work Permit", href: "/services/work-permit", icon: "Briefcase", desc: "Build your career globally" },
  { title: "Visitor Visa", href: "/services/visitor-visa", icon: "Plane", desc: "Tourism, family & business travel" },
];

export const NAV_COUNTRIES = [
  { title: "Canada", href: "/countries/canada", flag: "🇨🇦" },
  { title: "United Kingdom", href: "/countries/uk", flag: "🇬🇧" },
  { title: "Australia", href: "/countries/australia", flag: "🇦🇺" },
  { title: "United States", href: "/countries/usa", flag: "🇺🇸" },
  { title: "Germany", href: "/countries/germany", flag: "🇩🇪" },
  { title: "New Zealand", href: "/countries/new-zealand", flag: "🇳🇿" },
];
