
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  LayoutTemplate,
  Sparkles,
  Check,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose a Template",
    description:
      "Select a professional design that fits your career, experience, and industry.",
    icon: LayoutTemplate,
    accent: "from-blue-500 to-blue-600",
    light: "bg-blue-500/10",
    text: "text-blue-300",
    border: "group-hover:border-blue-400/40",
  },
  {
    number: "02",
    title: "Build with AI",
    description:
      "Add your experience and improve your resume content with intelligent writing assistance.",
    icon: Sparkles,
    accent: "from-cyan-500 to-blue-500",
    light: "bg-cyan-500/10",
    text: "text-cyan-300",
    border: "group-hover:border-cyan-400/40",
  },
  {
    number: "03",
    title: "Download & Apply",
    description:
      "Review your finished resume, download it, and get ready for your next opportunity.",
    icon: Download,
    accent: "from-sky-500 to-cyan-500",
    light: "bg-sky-500/10",
    text: "text-sky-300",
    border: "group-hover:border-sky-400/40",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#0B1220] via-[#101D35] to-[#0C1B30] py-16 sm:py-20 lg:py-24">

      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/15 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/[0.07] blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-8">

        {/* SECTION HEADER */}
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">

          <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-300 shadow-sm shadow-blue-900/20 sm:text-xs">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
              <Sparkles size={13} />
            </span>
            Simple workflow
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[42px]">
            From blank page to
            <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-sky-300 bg-clip-text text-transparent">
              job-ready resume.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            Three straightforward steps to create a professional resume,
            highlight your strengths, and move forward with confidence.
          </p>
        </div>

        {/* WORKFLOW CARDS */}
        <div className="relative mx-auto grid max-w-5xl gap-5 md:grid-cols-3">

          {/* CONNECTING LINE - DESKTOP */}
          <div className="pointer-events-none absolute left-[17%] right-[17%] top-[43px] hidden h-px bg-gradient-to-r from-blue-400/40 via-cyan-300/40 to-sky-400/40 md:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className={`group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.035] p-6 shadow-[0_10px_35px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.10] hover:shadow-[0_18px_40px_rgba(0,0,0,0.20)] ${step.border}`}
              >

                {/* STEP ICON AND NUMBER */}
                <div className="relative z-10 flex items-center justify-between">

                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.accent} text-white shadow-lg`}>
                    <Icon size={22} strokeWidth={2} />
                  </div>

                  <span className="text-3xl font-bold tracking-tight text-white/15 transition-colors duration-300 group-hover:text-white/30">
                    {step.number}
                  </span>
                </div>

                {/* STEP CONTENT */}
                <div className="mt-7">
                  <h3 className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-cyan-100">
                    {step.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-7 text-slate-300">
                    {step.description}
                  </p>
                </div>

                {/* STEP FOOTER */}
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

                  <span className={`inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider ${step.text}`}>
                    <span className={`flex h-5 w-5 items-center justify-center rounded-full ${step.light}`}>
                      <Check size={11} strokeWidth={3} />
                    </span>
                    Step {step.number}
                  </span>

                  <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${step.accent} transition-all duration-300 group-hover:w-16`} />
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center sm:mt-14">

          <p className="mb-4 text-sm text-slate-300">
            Ready to create a resume that stands out?
          </p>

          <Link
            to="/resume-builder"
            className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/40"
          >
            Start Building Your Resume

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-medium text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <Check size={13} className="text-cyan-400" />
              Easy to get started
            </span>

            <span className="inline-flex items-center gap-1.5">
              <Check size={13} className="text-cyan-400" />
              AI-powered assistance
            </span>

            <span className="inline-flex items-center gap-1.5">
              <Check size={13} className="text-cyan-400" />
              Professional templates
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
