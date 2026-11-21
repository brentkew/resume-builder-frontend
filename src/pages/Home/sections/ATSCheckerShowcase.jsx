import { Link } from "react-router-dom";
import {
  ArrowRight, Sparkles, FileText, Search, BarChart3, WandSparkles,
  ClipboardCheck, TrendingUp,
} from "lucide-react";

import ATSCheckerStep01 from "./ASTCheckerShowCase/ATSCheckerStep01";
import ATSCheckerStep02 from "./ASTCheckerShowCase/ATSCheckerStep02";
import ATSCheckerStep03 from "./ASTCheckerShowCase/ATSCheckerStep03";
import ATSCheckerStep04 from "./ASTCheckerShowCase/ATSCheckerStep04";

const steps = [
  { number: "01", label: "Add job description", icon: FileText },
  { number: "02", label: "Analyze resume", icon: Search },
  { number: "03", label: "Review results", icon: BarChart3 },
  { number: "04", label: "Improve resume", icon: WandSparkles },
];

function WorkflowProgress() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="grid grid-cols-4 gap-2">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.number} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-pink-100 bg-white text-pink-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-md">
                <Icon size={16} />
              </div>

              <p className="mt-2 text-[9px] font-bold text-slate-600 sm:text-xs">
                {step.label}
              </p>

              {index !== steps.length - 1 && (
                <div className="absolute left-[calc(50%+22px)] top-5 h-px w-[calc(100%-28px)] bg-gradient-to-r from-pink-200 to-violet-200" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StageDivider() {
  return (
    <div className="my-10 flex items-center gap-4 sm:my-14">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-slate-200" />
      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-pink-100 bg-pink-50 text-pink-500">
        <Sparkles size={13} />
      </div>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-200 to-slate-200" />
    </div>
  );
}

export default function ATSCheckerShowcase() {
  return (
    <section className="relative overflow-hidden bg-slate-50/70 py-16 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-pink-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-violet-100/50 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* FEATURE HEADER */}
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-14">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-violet-600 shadow-sm shadow-violet-100/50">
            <Sparkles size={13} />
            ResumePilot ATS Checker
          </span>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[42px]">
            Know your resume&apos;s strength.
            <span className="block bg-gradient-to-r from-pink-600 via-rose-500 to-violet-600 bg-clip-text text-transparent">
              Improve it with confidence.
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            From job description analysis to personalized improvement
            suggestions, get everything you need to make your resume more
            relevant to your target role.
          </p>
        </div>

        {/* UNIFIED PRODUCT EXPERIENCE */}
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50 sm:rounded-3xl">
          {/* WORKFLOW HEADER */}
          <div className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-pink-50/80 via-white to-violet-50/80 px-5 py-7 sm:px-8 sm:py-9 lg:px-10">
            <div className="pointer-events-none absolute -right-10 -top-20 h-48 w-48 rounded-full bg-violet-200/30 blur-3xl" />

            <div className="relative mb-7 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-pink-600 shadow-sm">
                    <ClipboardCheck size={16} />
                  </span>

                  <p className="text-sm font-extrabold text-slate-900">
                    Your ATS analysis journey
                  </p>
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Four simple steps to a more targeted resume
                </p>
              </div>

              <span className="rounded-full border border-violet-100 bg-white/90 px-3 py-1.5 text-[10px] font-bold text-violet-600 shadow-sm">
                4-step workflow
              </span>
            </div>

            <div className="relative">
              <WorkflowProgress />
            </div>
          </div>

          <div className="px-5 py-9 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
            <ATSCheckerStep01 />
            <StageDivider />
            <ATSCheckerStep02 />
            <StageDivider />
            <ATSCheckerStep03 />
            <StageDivider />
            <ATSCheckerStep04 />
          </div>
          
          {/* FINAL CTA */}
          <div className="relative overflow-hidden border-t border-pink-100 bg-gradient-to-br from-pink-50 via-white to-violet-50 px-5 py-10 text-center sm:px-8 sm:py-12">
            <div className="pointer-events-none absolute -left-10 -top-20 h-40 w-40 rounded-full bg-pink-200/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-40 w-40 rounded-full bg-violet-200/40 blur-3xl" />

            <div className="relative mx-auto max-w-xl">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-violet-600 text-white shadow-lg shadow-pink-200/60">
                <TrendingUp size={21} />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-violet-600">
                Your next opportunity starts here
              </span>

              <h3 className="mt-2 text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
                Make your next application stronger.
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Understand your resume, close the gaps, and apply with more
                confidence.
              </p>

              <Link
                to="/ats-checker"
                className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-pink-200/60 transition-all duration-300 hover:-translate-y-0.5 hover:from-pink-700 hover:to-violet-700 hover:shadow-xl hover:shadow-pink-200/70"
              >
                Try ATS Checker
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-[10px] leading-5 text-slate-400">
          Scores and sample insights are illustrative and may vary depending
          on your resume and target job description.
        </p>
      </div>
    </section>
  );
}
