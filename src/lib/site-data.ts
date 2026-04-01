export type Program = {
  slug: string;
  label: string;
};

export type Subject = {
  slug: string;
  label: string;
  shortDescription: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedOn: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Story = {
  name: string;
  line: string;
  outcome: string;
};

export const primaryNavLinks = [
  { href: "/courses", label: "Courses" },
  { href: "/pricing", label: "Membership" },
  { href: "/free-resources", label: "Free Resources" },
  { href: "/blog", label: "Blog" },
] as const;

export const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/pricing", label: "Membership" },
  { href: "/free-resources", label: "Free Resources" },
  { href: "/blog", label: "Blog" },
] as const;

export const socialLinks = [
  { href: "https://x.com", label: "X" },
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "https://www.instagram.com", label: "Instagram" },
  { href: "https://www.youtube.com", label: "YouTube" },
] as const;

export const programs: Program[] = [
  { slug: "ib-myp-1", label: "IB MYP 1" },
  { slug: "ib-myp-2", label: "IB MYP 2" },
  { slug: "ib-myp-3", label: "IB MYP 3" },
  { slug: "ib-myp-4-5", label: "IB MYP 4 & 5" },
  { slug: "ib-dp", label: "IB DP" },
  { slug: "caie-a-level", label: "CAIE A LEVEL" },
  { slug: "igcse", label: "IGCSE" },
];

export const subjects: Subject[] = [
  {
    slug: "physics",
    label: "Physics",
    shortDescription: "Mechanics, waves, electricity and exam-grade problem solving.",
  },
  {
    slug: "chemistry",
    label: "Chemistry",
    shortDescription: "Concept-first chemistry with structured practice and quick revision.",
  },
  {
    slug: "mathematics",
    label: "Mathematics",
    shortDescription: "From fundamentals to hard-level timed quizzes and mocks.",
  },
  {
    slug: "biology",
    label: "Biology",
    shortDescription: "Visual learning paths, short notes, and past-paper workflows.",
  },
  {
    slug: "economics",
    label: "Economics",
    shortDescription: "Core models, case-study drills, and exam writing technique.",
  },
];

export const conversionStats = [
  { title: "Average Mark Lift", value: "+18%", detail: "after 10-week guided cadence" },
  { title: "Active Learners", value: "12k+", detail: "across board-specific programs" },
  { title: "Parent Satisfaction", value: "96%", detail: "report stronger exam confidence" },
];

export const trackStats = [
  { title: "Key Concepts", value: "1,200+" },
  { title: "Question Banks", value: "8,500+" },
  { title: "Quiz Questions", value: "4,200+" },
  { title: "Past Papers", value: "650+" },
  { title: "Mock Papers", value: "220+" },
];

export const homeOutcomes = [
  {
    title: "Concept Mastery",
    detail: "Students stop memorizing blindly and start solving with clarity under pressure.",
  },
  {
    title: "Exam Temperament",
    detail: "Timed drills and controlled mock loops build confidence before the real paper.",
  },
  {
    title: "Score Momentum",
    detail: "Weekly action plans create measurable marks growth without burnout.",
  },
];

export const pathwaySteps = [
  {
    title: "Diagnose",
    description: "Find score blockers through baseline diagnostics and chapter-level confidence maps.",
  },
  {
    title: "Train",
    description: "Follow a learn-practice-revise rhythm with mentor checkpoints each week.",
  },
  {
    title: "Simulate",
    description: "Run timed mocks, fix error patterns, and strengthen exam-day pacing.",
  },
];

export const studentStories: Story[] = [
  {
    name: "Aarav S.",
    line: "I moved from inconsistent mock performance to stable high scores in 8 weeks.",
    outcome: "Physics: 74 to 89",
  },
  {
    name: "Mehak R.",
    line: "The weekly revision loop made my prep calm and structured for the first time.",
    outcome: "Math: 68 to 86",
  },
  {
    name: "Ishaan K.",
    line: "I stopped jumping topics and finally had a plan that actually worked.",
    outcome: "Chemistry: 70 to 87",
  },
];

export const resourcePillars = [
  {
    title: "Key Concepts",
    color: "#28A8BF",
    description:
      "Clear, concise topic summaries designed for quick understanding and last-mile retention.",
  },
  {
    title: "Question Banks",
    color: "#58489D",
    description:
      "Focused practice sets grouped by concept and difficulty, with step-by-step answers.",
  },
  {
    title: "Quiz Engine",
    color: "#F16B25",
    description:
      "Timed easy, medium, and hard quizzes that simulate exam pressure in short bursts.",
  },
  {
    title: "Past Papers",
    color: "#D31C88",
    description:
      "Topic-tagged past papers with worked solutions and common mistake breakdowns.",
  },
  {
    title: "Mock Papers",
    color: "#EDB83C",
    description:
      "Full-length mocks for realistic exam rehearsal and confidence building.",
  },
];

export const plans = [
  {
    name: "Knowledge Sphere Basic",
    price: "Free",
    tagline: "Start your journey now.",
    cta: "Get Started",
    features: [
      "Choose your board and preferred subjects",
      "Access selected free concept notes",
      "Practice sample quiz rounds",
      "Explore entry-level past paper packs",
      "Community discussion access",
    ],
  },
  {
    name: "Knowledge Sphere Pro",
    price: "₹1,999",
    tagline: "Ace your exams with structure.",
    cta: "View Membership",
    features: [
      "Unlimited question bank and quiz access",
      "Complete past papers with guided solutions",
      "Full mock paper series and progress tracking",
      "Personalized revision roadmap",
      "Priority mentoring support",
    ],
  },
];

export const whyChooseUs = [
  {
    title: "Course Benefits",
    points: [
      "Flexible, self-paced study with daily consistency prompts.",
      "Structured Learn -> Practice -> Revise flow for each chapter.",
      "Affordable plans with measurable grade-impact goals.",
      "Resource depth without overwhelm through curated weekly paths.",
    ],
  },
  {
    title: "Course Methodology",
    points: [
      "Board-aligned lesson mapping and exam pattern coverage.",
      "Three-level difficulty progression with clear prerequisites.",
      "Timed practice for speed, stamina, and exam temperament.",
      "Mentor feedback loops to close conceptual gaps quickly.",
    ],
  },
];

export const freeResourceTracks = [
  "IB MYP 1",
  "IB MYP 2",
  "IB MYP 3",
  "IB MYP 4 & 5",
  "IB DP",
  "CAIE A LEVEL",
  "IGCSE",
];

export const faqs: FaqItem[] = [
  {
    question: "What resources are available on Knowledge Sphere?",
    answer:
      "You get concept notes, question banks, timed quizzes, past papers, and full mock papers organized by board, grade, and subject.",
  },
  {
    question: "Is sign-up free?",
    answer:
      "Yes. The Basic plan is free and gives access to selected resources so students can evaluate the platform before upgrading.",
  },
  {
    question: "How is this different from random YouTube prep?",
    answer:
      "Knowledge Sphere combines structured pathways, progressive testing, and revision analytics so students know exactly what to improve next.",
  },
  {
    question: "Can I get one-to-one mentoring support?",
    answer:
      "Yes. Pro membership includes scheduled mentor sessions and targeted study recommendations.",
  },
  {
    question: "Do you support schools and coaching institutes?",
    answer:
      "Yes. We provide collaborative dashboards for institutions to monitor progress across batches.",
  },
];

export const freeResourceCatalog = [
  {
    title: "Past Paper Vault",
    description: "Topic-indexed paper sets with structured starter and challenge packs.",
  },
  {
    title: "Rapid Revision Notes",
    description: "One-screen summaries built for final-week revision and confidence recovery.",
  },
  {
    title: "Formula and Method Sheets",
    description: "Compact method banks for physics, chemistry, and mathematics workflows.",
  },
  {
    title: "Practice Starters",
    description: "Zero-friction practice sets that build momentum for deeper study sessions.",
  },
];

export const valuePillars = [
  {
    title: "Structured Outcomes",
    description:
      "Every track is designed backward from exam outcomes, not random content dumps.",
  },
  {
    title: "Evidence-based Revision",
    description:
      "Students get a practical loop: concept clarity, active practice, and timed rehearsal.",
  },
  {
    title: "Mentor-guided Precision",
    description:
      "Targeted interventions focus on weak areas and save months of unfocused effort.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-revise-without-burnout",
    title: "How to Revise Without Burnout in the Final 30 Days",
    excerpt:
      "A practical system to improve retention and confidence while keeping stress controlled.",
    category: "Revision Strategy",
    readTime: "6 min",
    publishedOn: "Mar 28, 2026",
  },
  {
    slug: "physics-mock-test-mistakes",
    title: "5 Mistakes Students Repeat in Physics Mock Tests",
    excerpt:
      "Pattern-level errors that affect marks, and how to correct them before finals.",
    category: "Physics",
    readTime: "5 min",
    publishedOn: "Mar 24, 2026",
  },
  {
    slug: "building-a-weekly-study-system",
    title: "Build a Weekly Study System That Actually Works",
    excerpt:
      "Turn a vague timetable into a measurable learning rhythm across subjects.",
    category: "Productivity",
    readTime: "7 min",
    publishedOn: "Mar 19, 2026",
  },
  {
    slug: "math-speed-and-accuracy",
    title: "How to Improve Math Speed Without Losing Accuracy",
    excerpt:
      "Use layered practice and timed blocks to improve pace while preserving method quality.",
    category: "Mathematics",
    readTime: "8 min",
    publishedOn: "Mar 12, 2026",
  },
];

export const sampleCourseUnits = [
  "Concept Foundations",
  "Application Drills",
  "Mixed Practice",
  "Timed Revision",
  "Mock Readiness",
];

export const lessonSections = [
  "Concept Brief",
  "Worked Example",
  "Guided Practice",
  "Timed Checkpoint",
  "Revision Wrap-up",
];

export function fromSlug(input: string): string {
  return input
    .split("-")
    .map((part) => {
      if (part.length <= 3) {
        return part.toUpperCase();
      }
      return part[0].toUpperCase() + part.slice(1);
    })
    .join(" ");
}

export function toCourseSlug(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
