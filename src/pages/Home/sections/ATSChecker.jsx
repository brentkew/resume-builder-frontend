
import {
  Target,
  FileCheck2,
  Search,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const ATSChecker = () => {
  const checks = [
    {
      label: "Resume formatting",
      status: "Passed",
      icon: CheckCircle2,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      label: "Relevant keywords",
      status: "Needs improvement",
      icon: AlertCircle,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      label: "Section organization",
      status: "Passed",
      icon: CheckCircle2,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      label: "Content readability",
      status: "Passed",
      icon: CheckCircle2,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <section className="section overflow-hidden bg-white">
      <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* Left: ATS report preview */}
        <div className="relative mx-auto w-full max-w-[500px] lg:order-1">
          <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-emerald-100/60 blur-3xl" />

          <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-7">

            {/* Header */}
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FileCheck2 size={22} />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  ATS Analysis Report
                </h3>
                <p className="text-xs text-slate-500">
                  Resume compatibility overview
                </p>
              </div>

              <span className="ml-auto rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Example
              </span>
            </div>

            {/* Score */}
            <div className="mt-7 flex flex-col items-center rounded-2xl bg-slate-50 p-6">
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-[10px] border-emerald-100">
                <div className="absolute inset-[-10px] rounded-full border-[10px] border-transparent border-t-emerald-500 border-r-emerald-500 border-b-emerald-500 rotate-45" />

                <div className="text-center">
                  <p className="text-4xl font-bold text-slate-900">
                    85
                  </p>
                  <p className="text-xs font-medium text-slate-500">
                    out of 100
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm font-semibold text-emerald-700">
                Good compatibility
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Illustrative score, not a real analysis
              </p>
            </div>

            {/* Checks */}
            <div className="mt-7">
              <h4 className="text-sm font-bold text-slate-900">
                Analysis breakdown
              </h4>

              <div className="mt-4 space-y-3">
                {checks.map((check) => {
                  const Icon = check.icon;

                  return (
                    <div
                      key={check.label}
                      className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 p-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${check.bg} ${check.color}`}>
                          <Icon size={17} />
                        </div>

                        <span className="text-sm font-medium text-slate-700">
                          {check.label}
                        </span>
                      </div>

                      <span className={`text-xs font-semibold ${check.color}`}>
                        {check.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Right: Content */}
        <div className="lg:order-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue-700">
            <ShieldCheck size={14} />
            ATS RESUME CHECKER
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Make your resume
            <span className="text-blue-600"> easier for ATS to read.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
            Review your resume for formatting, relevant keywords,
            content structure, and readability. Identify areas that
            may need improvement before applying.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Review resume structure and formatting",
              "Identify missing or relevant keywords",
              "Improve content readability",
              "Get actionable improvement suggestions",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-emerald-600"
                />
                <span className="text-sm font-medium text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/ats-checker"
            className="btn btn-primary mt-9"
          >
            Check My Resume
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ATSChecker;
