
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  FileText,
  SearchCheck,
  WandSparkles,
  Palette,
  GripVertical,
  Download,
  Check,
  CheckCircle2,
  LayoutTemplate,
  Type,
  Image,
  SlidersHorizontal,
  ChevronRight,
  FileSearch,
  PenLine,
  Eye,
  Layers3,
  Rocket,
  UserCircle,
  Heading,
  CaseSensitive,
  Link2,
  PanelBottom,
} from "lucide-react";

/* --------------------------------------------------
   Reusable components
-------------------------------------------------- */

function SectionLabel({ children }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-blue-700">
      <Sparkles size={13} />
      {children}
    </span>
  );
}

function FeaturePoint({ children }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        <Check size={12} strokeWidth={3} />
      </span>
      <span className="text-sm leading-6 text-slate-600">
        {children}
      </span>
    </div>
  );
}

function FeatureButton({ to = "/resume-builder", children }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/15 transition hover:-translate-y-0.5 hover:bg-blue-700"
    >
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}

/* --------------------------------------------------
   Product mockups
-------------------------------------------------- */

function BuilderMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-blue-900/10">
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="text-[10px] font-medium text-slate-400">
          Resume Workspace
        </span>
        <Sparkles size={15} className="text-blue-500" />
      </div>

      <div className="grid min-h-[310px] grid-cols-[1fr_0.9fr] sm:min-h-[370px]">
        <div className="border-r border-slate-100 p-4 sm:p-6">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800">
              Your Information
            </span>
            <span className="rounded-md bg-blue-50 px-2 py-1 text-[9px] font-semibold text-blue-600">
              Editing
            </span>
          </div>

          {["Personal Details", "Work Experience", "Education", "Skills"].map(
            (item, index) => (
              <div
                key={item}
                className="mb-3 rounded-lg border border-slate-100 p-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-slate-700 sm:text-xs">
                    {item}
                  </span>
                  <ChevronRight size={13} className="text-slate-400" />
                </div>

                {index === 0 && (
                  <div className="mt-3 space-y-2">
                    <div className="h-2 w-4/5 rounded bg-slate-100" />
                    <div className="h-2 w-3/5 rounded bg-slate-100" />
                  </div>
                )}
              </div>
            )
          )}

          <div className="mt-5 flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2.5 text-white">
            <Sparkles size={13} />
            <span className="text-[10px] font-semibold">
              Improve with AI
            </span>
          </div>
        </div>

        <div className="bg-slate-100 p-3 sm:p-5">
          <div className="mx-auto min-h-[270px] max-w-[210px] bg-white p-3 shadow-md sm:min-h-[315px] sm:p-5">
            <div className="mb-4 border-b-2 border-blue-600 pb-3">
              <div className="mb-2 h-3 w-24 rounded bg-slate-800 sm:w-32" />
              <div className="h-1.5 w-20 rounded bg-slate-300" />
            </div>

            {["Profile", "Experience", "Education", "Skills"].map((item) => (
              <div key={item} className="mb-4">
                <div className="mb-2 h-1.5 w-16 rounded bg-blue-600" />
                <div className="mb-1 h-1 w-full rounded bg-slate-200" />
                <div className="mb-1 h-1 w-11/12 rounded bg-slate-200" />
                <div className="h-1 w-3/4 rounded bg-slate-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ATSMockup() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-blue-900/10 sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-slate-900">
            Resume Analysis
          </p>
          <p className="mt-1 text-[10px] text-slate-400">
            Job description comparison
          </p>
        </div>

        <span className="rounded-lg bg-emerald-50 px-2.5 py-1.5 text-[10px] font-semibold text-emerald-700">
          Analysis complete
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-blue-50/70 p-4">
          <div className="text-[10px] font-medium text-slate-500">
            ATS Score
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-3xl font-bold text-blue-700">85</span>
            <span className="text-xs text-slate-400">/100</span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-blue-100">
            <div className="h-full w-[85%] rounded-full bg-blue-600" />
          </div>
        </div>

        <div className="rounded-xl bg-cyan-50/70 p-4">
          <div className="text-[10px] font-medium text-slate-500">
            Job Match
          </div>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-3xl font-bold text-cyan-700">78</span>
            <span className="text-xs text-slate-400">/100</span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-cyan-100">
            <div className="h-full w-[78%] rounded-full bg-cyan-600" />
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-slate-100 p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-800">
            Keyword Analysis
          </span>
          <FileSearch size={15} className="text-blue-500" />
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            ["Project Management", true],
            ["Communication", true],
            ["Leadership", true],
            ["Data Analysis", false],
            ["Agile", false],
          ].map(([word, matched]) => (
            <span
              key={word}
              className={`rounded-md px-2.5 py-1.5 text-[9px] font-medium sm:text-[10px] ${
                matched
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-amber-50 text-amber-700"
              }`}
            >
              {matched ? "✓ " : "+ "}
              {word}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-100 p-4">
        <div className="mb-3 flex items-center gap-2">
          <span className="text-xs font-bold text-slate-800">
            Improvement Suggestions
          </span>
        </div>
        <div className="space-y-2">
          <div className="h-2 w-full rounded bg-slate-100" />
          <div className="h-2 w-11/12 rounded bg-slate-100" />
          <div className="h-2 w-3/4 rounded bg-slate-100" />
        </div>
      </div>
    </div>
  );
}

function WritingMockup() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-blue-900/10 sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <WandSparkles size={18} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900">
              AI Writing Assistant
            </p>
            <p className="text-[10px] text-slate-400">
              Improve your content
            </p>
          </div>
        </div>

        <span className="rounded-full bg-cyan-50 px-2.5 py-1 text-[9px] font-semibold text-cyan-700">
          AI powered
        </span>
      </div>

      <div className="rounded-xl border border-slate-200 p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-semibold text-slate-500">
            Original content
          </span>
          <PenLine size={13} className="text-slate-400" />
        </div>
        <p className="text-xs leading-6 text-slate-500">
          Responsible for managing projects and working with the team.
        </p>
      </div>

      <div className="my-3 flex justify-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <ArrowRight size={15} className="rotate-90" />
        </div>
      </div>

      <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-semibold text-blue-700">
            Improved version
          </span>
          <Sparkles size={14} className="text-blue-600" />
        </div>
        <p className="text-xs leading-6 text-slate-700">
          Led cross-functional project coordination, aligned team
          priorities, and supported successful delivery of key initiatives.
        </p>
        <div className="mt-3 flex items-center gap-2 text-[10px] font-semibold text-emerald-700">
          <CheckCircle2 size={13} />
          Ready to review
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-slate-200 py-2 text-center text-[10px] font-semibold text-slate-600">
          Try again
        </div>
        <div className="rounded-lg bg-blue-600 py-2 text-center text-[10px] font-semibold text-white">
          Use suggestion
        </div>
      </div>
    </div>
  );
}

function CustomizationMockup() {
  const settings = [
    { icon: LayoutTemplate, label: "Layout", value: "Modern" },
    { icon: Palette, label: "Theme", value: "Ocean Blue" },
    { icon: Type, label: "Font Size", value: "Medium" },
    { icon: Image, label: "Photo", value: "Enabled" },
  ];

  return (
    <div className="grid grid-cols-[0.9fr_1.1fr] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-blue-900/10">
      <div className="border-r border-slate-100 p-4 sm:p-5">
        <div className="mb-4 flex items-center gap-2">
          <SlidersHorizontal size={15} className="text-blue-600" />
          <span className="text-xs font-bold text-slate-900">
            Design Settings
          </span>
        </div>

        {settings.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="mb-3 rounded-lg border border-slate-100 p-2.5"
          >
            <div className="mb-2 flex items-center gap-2">
              <Icon size={13} className="text-blue-600" />
              <span className="text-[10px] font-semibold text-slate-700">
                {label}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-slate-50 px-2 py-1.5">
              <span className="text-[9px] text-slate-500">{value}</span>
              <ChevronRight size={11} className="text-slate-400" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center bg-slate-100 p-3 sm:p-5">
        <div className="w-full max-w-[210px] bg-white p-3 shadow-lg sm:p-5">
          <div className="mb-4 flex gap-3 border-b border-slate-200 pb-3">
            <div className="h-9 w-9 rounded-full bg-blue-100" />
            <div className="flex-1 pt-1">
              <div className="mb-2 h-2.5 w-24 rounded bg-blue-700" />
              <div className="h-1 w-16 rounded bg-slate-300" />
            </div>
          </div>

          {["Summary", "Experience", "Education", "Skills"].map((item) => (
            <div key={item} className="mb-4">
              <div className="mb-2 h-1.5 w-16 rounded bg-blue-600" />
              <div className="mb-1 h-1 w-full rounded bg-slate-200" />
              <div className="mb-1 h-1 w-11/12 rounded bg-slate-200" />
              <div className="h-1 w-4/5 rounded bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReorderMockup() {
  const sections = [
    ["Profile", true],
    ["Work Experience", false],
    ["Education", false],
    ["Skills", false],
    ["Projects", false],
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-blue-900/10 sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-slate-900">
            Resume Sections
          </p>
          <p className="mt-1 text-[10px] text-slate-400">
            Arrange your content
          </p>
        </div>
        <span className="rounded-lg bg-blue-50 px-2.5 py-1.5 text-[10px] font-semibold text-blue-600">
          Customize
        </span>
      </div>

      <div className="space-y-2">
        {sections.map(([section, active], index) => (
          <div
            key={section}
            className={`flex items-center gap-3 rounded-xl border p-3 ${
              active
                ? "border-blue-200 bg-blue-50/70"
                : "border-slate-200 bg-white"
            }`}
          >
            <GripVertical size={16} className="text-slate-400" />
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 text-[10px] font-semibold text-slate-500">
              {index + 1}
            </span>
            <span className="flex-1 text-xs font-semibold text-slate-700">
              {section}
            </span>
            <CheckCircle2
              size={15}
              className={active ? "text-blue-600" : "text-slate-300"}
            />
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl bg-slate-50 p-3 text-center text-[10px] text-slate-500">
        Organize your resume to highlight what matters most.
      </div>
    </div>
  );
}

/* --------------------------------------------------
   Customization options cards
-------------------------------------------------- */

const customizationOptions = [
  {
    icon: FileText,
    title: "Document",
    description: "Manage your resume document and its content.",
  },
  {
    icon: LayoutTemplate,
    title: "Templates",
    description: "Choose a professional design that fits your style.",
  },
  {
    icon: Layers3,
    title: "Layout",
    description: "Control the structure and arrangement of your pages.",
  },
  {
    icon: UserCircle,
    title: "Profile Header",
    description: "Personalize your name, contact details, and header.",
  },
  {
    icon: Type,
    title: "Font Size",
    description: "Adjust text size for a balanced, readable resume.",
  },
  {
    icon: SlidersHorizontal,
    title: "Spacing",
    description: "Fine-tune spacing between sections and content.",
  },
  {
    icon: Heading,
    title: "Headings",
    description: "Customize the appearance of section headings.",
  },
  {
    icon: CaseSensitive,
    title: "Font Style",
    description: "Choose typography that suits your resume design.",
  },
  {
    icon: Palette,
    title: "Colors",
    description: "Personalize colors and visual accents.",
  },
  {
    icon: Image,
    title: "Photo",
    description: "Manage your profile photo and its placement.",
  },
  {
    icon: Link2,
    title: "Links",
    description: "Manage the links displayed in your resume.",
  },
  {
    icon: PanelBottom,
    title: "Footer",
    description: "Customize footer details and page settings.",
  },
];

/* --------------------------------------------------
   Main page
-------------------------------------------------- */

function Features() {
  return (
    <main className="overflow-x-clip bg-white text-slate-700">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-[#F0F7FF] via-white to-[#ECFAFC] px-4 py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <SectionLabel>THE RESUMEPILOT EXPERIENCE</SectionLabel>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Powerful tools.
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Better resumes. Bigger possibilities.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            From AI-powered writing to detailed resume analysis and
            flexible customization, everything you need to create a
            professional resume comes together in one workspace.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <FeatureButton>Start building for free</FeatureButton>

            <Link
              to="/templates"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50"
            >
              Explore templates
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-7 gap-y-3 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-blue-600" />
              AI-assisted writing
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-blue-600" />
              Resume customization
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-blue-600" />
              ATS analysis tools
            </span>
          </div>
        </div>
      </section>

      {/* Feature Navigation */}
      <nav className="sticky top-[var(--navbar-height)] z-30 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto">
          {[
            ["AI Builder", "#ai-builder"],
            ["ATS Checker", "#ats-checker"],
            ["AI Writing", "#ai-writing"],
            ["Customization", "#customization"],
            ["Rearrange", "#rearrange"],
            ["Templates", "#templates"],
            ["Export", "#export"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="shrink-0 rounded-lg px-3 py-2 text-xs font-semibold text-slate-500 transition hover:bg-blue-50 hover:text-blue-700"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* AI Builder */}
      <section id="ai-builder" className="scroll-mt-28 px-4 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel>01 — AI RESUME BUILDER</SectionLabel>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Build your resume with a smarter workflow.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Create your professional resume using an intuitive workspace
              that brings your information, content, and design together.
              Get AI assistance while keeping control over your resume.
            </p>

            <div className="mt-7 space-y-3">
              <FeaturePoint>
                Organize personal details, experience, education, and skills.
              </FeaturePoint>
              <FeaturePoint>
                Get AI assistance while writing your resume.
              </FeaturePoint>
              <FeaturePoint>
                Preview your resume as you customize it.
              </FeaturePoint>
              <FeaturePoint>
                Build around a professional template.
              </FeaturePoint>
            </div>

            <div className="mt-8">
              <FeatureButton>Try the Resume Builder</FeatureButton>
            </div>
          </div>

          <BuilderMockup />
        </div>
      </section>

      {/* ATS Checker */}
      <section
        id="ats-checker"
        className="scroll-mt-28 border-y border-blue-100 bg-gradient-to-br from-[#F0F7FF] via-white to-[#ECFAFC] px-4 py-20 sm:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <ATSMockup />
          </div>

          <div className="order-1 lg:order-2">
            <SectionLabel>02 — ATS RESUME CHECKER</SectionLabel>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Understand how your resume matches a job.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Compare your resume against a job description and get a
              structured overview of its strengths and potential
              improvements.
            </p>

            <div className="mt-7 space-y-3">
              <FeaturePoint>
                Analyze your resume against a job description.
              </FeaturePoint>
              <FeaturePoint>
                Review ATS, job match, and content quality scores.
              </FeaturePoint>
              <FeaturePoint>
                Identify matched and missing keywords.
              </FeaturePoint>
              <FeaturePoint>
                Review improvement suggestions and priorities.
              </FeaturePoint>
              <FeaturePoint>
                Explore detailed score breakdowns and insights.
              </FeaturePoint>
            </div>

            <div className="mt-8">
              <FeatureButton to="/ats-checker">
                Explore ATS Checker
              </FeatureButton>
            </div>
          </div>
        </div>
      </section>

      {/* AI Writing */}
      <section id="ai-writing" className="scroll-mt-28 px-4 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel>03 — AI WRITING ASSISTANT</SectionLabel>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Make every word work harder.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Get help improving the way you communicate your professional
              experience. Turn basic descriptions into clearer, more
              polished resume content.
            </p>

            <div className="mt-7 space-y-3">
              <FeaturePoint>
                Improve the wording of your experience descriptions.
              </FeaturePoint>
              <FeaturePoint>
                Create clearer and more professional sentences.
              </FeaturePoint>
              <FeaturePoint>
                Refine your resume content with AI suggestions.
              </FeaturePoint>
              <FeaturePoint>
                Review suggestions before using them.
              </FeaturePoint>
            </div>

            <div className="mt-8">
              <FeatureButton>Try AI Resume Writing</FeatureButton>
            </div>
          </div>

          <WritingMockup />
        </div>
      </section>

      {/* Customization */}
      <section
        id="customization"
        className="scroll-mt-28 border-y border-slate-100 bg-[#F8FAFC] px-4 py-20 sm:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <CustomizationMockup />
          </div>

          <div className="order-1 lg:order-2">
            <SectionLabel>04 — RESUME CUSTOMIZATION</SectionLabel>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Make your resume feel like yours.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Go beyond choosing a template. Customize the look and
              structure of your resume with controls designed to give you
              more flexibility.
            </p>

            <div className="mt-7 space-y-3">
              <FeaturePoint>
                Switch between available resume layouts.
              </FeaturePoint>
              <FeaturePoint>
                Customize colors and visual styling.
              </FeaturePoint>
              <FeaturePoint>
                Adjust font size and spacing.
              </FeaturePoint>
              <FeaturePoint>
                Control profile photo placement.
              </FeaturePoint>
              <FeaturePoint>
                Customize header, footer, and page settings.
              </FeaturePoint>
            </div>

            <div className="mt-8">
              <FeatureButton>Customize your resume</FeatureButton>
            </div>
          </div>
        </div>
      </section>

      {/* Reorder Sections */}
      <section
        id="rearrange"
        className="scroll-mt-28 px-4 py-20 sm:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel>05 — REARRANGE SECTIONS</SectionLabel>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Put your strongest experience first.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Your professional story should follow the order that makes
              sense for you. Arrange your resume sections to highlight
              the information that matters most.
            </p>

            <div className="mt-7 space-y-3">
              <FeaturePoint>
                Reorder resume sections with drag-and-drop controls.
              </FeaturePoint>
              <FeaturePoint>
                Organize your professional information.
              </FeaturePoint>
              <FeaturePoint>
                Customize the flow of your resume.
              </FeaturePoint>
              <FeaturePoint>
                Give important sections more visibility.
              </FeaturePoint>
            </div>

            <div className="mt-8">
              <FeatureButton>Start organizing your resume</FeatureButton>
            </div>
          </div>

          <ReorderMockup />
        </div>
      </section>

      {/* Templates */}
      <section
        id="templates"
        className="scroll-mt-28 border-y border-blue-100 bg-gradient-to-br from-[#F0F7FF] via-white to-[#ECFAFC] px-4 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionLabel>06 — RESUME TEMPLATES</SectionLabel>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Start with a design that fits your career.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Explore different resume styles and choose a professional
              layout that matches your experience and personal preference.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Professional",
                desc: "Clean and structured designs for traditional career paths.",
                color: "bg-blue-600",
              },
              {
                name: "Modern",
                desc: "Contemporary layouts with balanced visual hierarchy.",
                color: "bg-cyan-600",
              },
              {
                name: "Minimal",
                desc: "Simple, elegant layouts focused on your content.",
                color: "bg-slate-600",
              },
              {
                name: "Creative",
                desc: "Distinctive styles for creative professionals.",
                color: "bg-violet-600",
              },
            ].map((template) => (
              <div
                key={template.name}
                className="rounded-2xl border border-blue-100 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/5"
              >
                <div className="mb-5 flex h-36 items-center justify-center rounded-xl bg-slate-100 p-4">
                  <div className="h-full w-24 bg-white p-3 shadow-md">
                    <div className={`mb-3 h-2 w-14 rounded ${template.color}`} />
                    <div className="mb-3 h-1 w-10 rounded bg-slate-300" />
                    {[1, 2, 3, 4].map((line) => (
                      <div
                        key={line}
                        className="mb-2 h-1 rounded bg-slate-200"
                      />
                    ))}
                  </div>
                </div>

                <h3 className="font-bold text-slate-900">
                  {template.name}
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {template.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9 text-center">
            <FeatureButton to="/templates">
              Explore all templates
            </FeatureButton>
          </div>
        </div>
      </section>

      {/* Export */}
      <section
        id="export"
        className="scroll-mt-28 px-4 py-20 sm:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel>07 — RESUME EXPORT</SectionLabel>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Your finished resume, ready to share.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              When your resume is ready, take it with you. Export your
              completed work in the formats supported by ResumePilot.
            </p>

            <div className="mt-7 space-y-3">
              <FeaturePoint>
                Download your completed resume.
              </FeaturePoint>
              <FeaturePoint>
                Keep your selected layout and customization.
              </FeaturePoint>
              <FeaturePoint>
                Prepare a polished document for applications.
              </FeaturePoint>
            </div>

            <div className="mt-8">
              <FeatureButton>Build and export your resume</FeatureButton>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-[#F0F7FF] to-[#ECFAFC] p-8 sm:p-12">
            <div className="mx-auto max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-blue-900/10">
              <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <FileText size={19} className="text-blue-600" />
                  <span className="text-xs font-bold text-slate-800">
                    My Resume
                  </span>
                </div>
                <CheckCircle2 size={18} className="text-emerald-500" />
              </div>

              <div className="mb-5">
                <div className="mb-2 h-3 w-32 rounded bg-slate-800" />
                <div className="h-1.5 w-24 rounded bg-slate-300" />
              </div>

              {["Professional Summary", "Experience", "Education"].map(
                (item) => (
                  <div key={item} className="mb-5">
                    <p className="mb-2 text-[9px] font-bold text-blue-600">
                      {item}
                    </p>
                    <div className="mb-1.5 h-1.5 w-full rounded bg-slate-100" />
                    <div className="mb-1.5 h-1.5 w-11/12 rounded bg-slate-100" />
                    <div className="h-1.5 w-4/5 rounded bg-slate-100" />
                  </div>
                )
              )}

              <div className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-white">
                <Download size={16} />
                <span className="text-xs font-semibold">
                  Download Resume
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>


              {/* Resume Customization Options */}
<section
  id="customization-options"
  className="border-y border-slate-100 bg-gradient-to-b from-[#F8FAFC] to-white px-4 py-20 sm:py-24"
>
  <div className="mx-auto max-w-7xl">
    {/* Section Heading */}
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <SectionLabel>COMPLETE DESIGN CONTROL</SectionLabel>

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        More control over every detail.
      </h2>

      <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
        A collection of practical tools that help you refine your resume
        and create a more polished result.
      </p>
    </div>

    {/* Modern Icon Tiles */}
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {customizationOptions.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/[0.05] sm:p-6"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 transition-all duration-300 group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white">
              <Icon size={22} strokeWidth={1.8} />
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1 pt-0.5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-700">
                  {item.title}
                </h3>

                <span className="shrink-0 text-[10px] font-semibold tracking-wider text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-1.5 text-xs leading-6 text-slate-500">
                {item.description}
              </p>
            </div>

            {/* Hover Accent */}
            <div className="absolute bottom-0 left-5 right-5 h-px origin-left scale-x-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
          </div>
        );
      })}
    </div>

    {/* Bottom CTA */}
    <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center">
      <p className="text-xs text-slate-500">
        Fine-tune every detail and make your resume your own.
      </p>

      <FeatureButton>
        Customize your resume
      </FeatureButton>
    </div>
  </div>
</section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#172554] to-[#164E63] px-4 py-20 sm:py-24">
        <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-cyan-300">
            <Rocket size={26} />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your next career move starts here.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-blue-100/75 sm:text-base">
            Bring your experience to life with professional templates,
            intelligent writing assistance, and tools designed to help
            you build a stronger resume.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/resume-builder"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Create your resume
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/templates"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Browse templates
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Features;
