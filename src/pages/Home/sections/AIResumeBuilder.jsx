
import {
  Sparkles,
  WandSparkles,
  CheckCircle2,
  ArrowRight,
  FileText,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";

const AIResumeBuilder = () => {
  const benefits = [
    "Improve resume descriptions",
    "Write stronger professional summaries",
    "Highlight relevant skills",
    "Make your experience easier to understand",
  ];

  return (
    <section className="section overflow-hidden bg-slate-50">
      <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* Left content */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue-700">
            <Sparkles size={14} />
            AI-POWERED RESUME WRITING
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Write a stronger resume with
            <span className="text-blue-600"> AI assistance.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
            Turn your experience into clear, compelling resume content.
            Get helpful writing suggestions and present your professional
            strengths with confidence.
          </p>

          <div className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-emerald-600"
                />
                <span className="text-sm font-medium text-slate-700">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/resume-builder"
            className="btn btn-primary mt-9"
          >
            Try AI Resume Builder
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Right AI interface preview */}
        <div className="relative mx-auto w-full max-w-[500px]">
          <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-indigo-100/60 blur-3xl" />

          <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-7">

            {/* Card header */}
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                <WandSparkles size={22} />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  AI Writing Assistant
                </h3>
                <p className="text-xs text-slate-500">
                  Improve your resume content
                </p>
              </div>

              <span className="ml-auto rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Assistant
              </span>
            </div>

            {/* Original content */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Your original content
              </p>

              <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm leading-7 text-slate-600">
                  Worked on website development and helped improve
                  the user experience.
                </p>
              </div>
            </div>

            {/* AI suggestion */}
            <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-blue-600" />
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                  Suggested improvement
                </p>
              </div>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Developed and enhanced responsive web interfaces,
                improving usability and delivering a more consistent
                user experience across devices.
              </p>

              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-700">
                  <CheckCircle2 size={14} />
                  Clearer wording
                </span>

                <span className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-blue-600 shadow-sm">
                  Example suggestion
                </span>
              </div>
            </div>

            {/* Bottom insight */}
            <div className="mt-5 flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                <Lightbulb size={18} />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Writing tip
                </p>
                <p className="mt-1 text-xs leading-6 text-slate-500">
                  Use specific achievements and measurable results
                  when describing your experience.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AIResumeBuilder;
