
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  MoveVertical,
  Columns2,
  LayoutTemplate,
  Sparkles,
} from "lucide-react";

import rearrangePreview from "../../../assets/images/resume-builder-re-arrange-screen.png";

const benefits = [
  {
    number: "01",
    icon: MoveVertical,
    title: "Rearrange with ease",
    description:
      "Drag experience, education, skills, and projects into the perfect order. Put your most relevant achievements where recruiters notice them first.",
  },
  {
    number: "02",
    icon: Columns2,
    title: "Take control of columns",
    description:
      "Move supported sections between your sidebar and main content area to create a balanced, easy-to-read resume.",
  },
  {
    number: "03",
    icon: LayoutTemplate,
    title: "Create your own layout",
    description:
      "Customize the structure around your career goals, highlight your strongest qualifications, and make every section count.",
  },
];

export default function RearrangeSectionsFeature() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-[#F5F9FF] to-[#EFF6FF] py-16 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-200/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-200/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Main showcase */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">

          {/* Left content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-700 shadow-sm">
              <Sparkles size={13} />
              Complete creative control
            </div>

            <h2 className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-slate-950 sm:text-4xl lg:text-[46px]">
              Put every section
              <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                exactly where it belongs.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
              Your experience is unique. Your resume should be too.
              Rearrange sections and organize your content to create
              a resume that puts your best qualifications first.
            </p>

            {/* Benefits */}
            <div className="mt-9 grid gap-3 sm:grid-cols-1">
            {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                <div
                    key={benefit.number}
                    className="group flex gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-[0_10px_30px_rgba(37,99,235,0.07)]"
                >
                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 transition-all duration-300 group-hover:border-blue-200 group-hover:from-blue-100 group-hover:to-cyan-100">
                    <Icon size={19} strokeWidth={1.8} />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center gap-2">
                        <span className="text-[10px] font-bold tracking-widest text-blue-500">
                        {benefit.number}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-700">
                        {benefit.title}
                        </h3>
                    </div>

                    <p className="text-xs leading-6 text-slate-500 sm:text-[13px]">
                        {benefit.description}
                    </p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden shrink-0 items-center text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-blue-500 sm:flex">
                    <ArrowRight size={17} />
                    </div>
                </div>
                );
            })}
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:from-blue-700 hover:to-blue-600 hover:shadow-blue-600/30"
              >
                Explore Premium
                <ArrowRight size={16} />
              </Link>

              <span className="text-xs text-slate-500">
                <Check size={14} className="mr-1 inline text-blue-600" />
                More control over your resume
              </span>
            </div>
          </div>

          {/* Right product preview */}
          <div className="relative mx-auto w-full max-w-[650px]">
            {/* Soft background glow */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full bg-blue-300/30 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-56 w-56 rounded-full bg-cyan-300/25 blur-[80px]" />

            {/* Screenshot frame */}
            <div className="relative rounded-2xl border border-blue-100/80 bg-white/95 p-2 shadow-[0_25px_70px_rgba(37,99,235,0.12)] sm:rounded-3xl sm:p-3">
              {/* Browser-style top bar */}
              <div className="flex items-center justify-between border-b border-slate-100 px-3 pb-3 pt-1 sm:px-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                </div>

                <span className="text-[10px] font-semibold tracking-wide text-slate-400 sm:text-xs">
                  RESUMEPILOT EDITOR
                </span>

                <span className="rounded-md border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 px-2 py-1 text-[9px] font-bold text-blue-700 sm:text-[10px]">
                  PREMIUM
                </span>
              </div>

              {/* Contained image viewport */}
              <div className="flex h-[280px] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-blue-50/60 p-2 sm:h-[390px] sm:p-3 lg:h-[420px]">
                <img
                  src={rearrangePreview}
                  alt="ResumePilot editor showing resume section rearrangement"
                  className="max-h-full max-w-full rounded-lg object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Floating feature note */}
            <div className="relative mx-auto mt-4 flex max-w-[90%] items-center gap-3 rounded-xl border border-blue-100 bg-white px-4 py-3 shadow-lg shadow-blue-900/5 sm:absolute sm:-bottom-6 sm:-left-7 sm:mx-0 sm:mt-0 sm:max-w-[270px]">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600">
                <MoveVertical size={18} />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-900">
                  Organize your resume
                </p>
                <p className="mt-0.5 text-[10px] text-slate-500">
                  Structure your content your way
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom premium strip */}
        <div className="mt-20 flex flex-col items-start justify-between gap-4 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-cyan-50 px-6 py-6 shadow-sm sm:flex-row sm:items-center sm:px-8">
          <div>
            <p className="text-sm font-bold text-slate-900">
              More than a resume template.
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Get the flexibility to shape your resume around your career.
            </p>
          </div>

          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-cyan-700"
          >
            See premium plans
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
