
import { Link } from "react-router-dom";
import {
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  FileText,
  Sparkles,
  Target,
  XCircle,
} from "lucide-react";

const beforeItems = [
  "Vague descriptions of responsibilities",
  "Limited measurable achievements",
  "Missing role-specific keywords",
];

const afterItems = [
  "Clear, action-oriented language",
  "More specific responsibilities",
  "Relevant role-specific terminology",
];

const ATSComparison = () => {
  return (
    <section className="section bg-slate-50">
      <div className="container">

        <div className="section-header">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
            <Target size={14} />
            SMART RESUME OPTIMIZATION
          </span>

          <h2 className="section-title mt-5">
            Turn ordinary content into
            <span className="text-blue-600"> stronger storytelling.</span>
          </h2>

          <p className="section-description">
            See how better wording and relevant keywords can
            improve the way your experience is presented.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-2">

          {/* BEFORE */}
          <article className="overflow-hidden rounded-2xl border border-rose-200 bg-white shadow-sm">

            <div className="flex items-center justify-between bg-gradient-to-r from-rose-50 to-white px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Before Optimization
                  </h3>
                  <p className="text-xs text-slate-500">
                    Original example
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-rose-100 px-3 py-1 text-[10px] font-bold text-rose-700">
                NEEDS WORK
              </span>
            </div>

            <div className="p-5">
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Marketing Executive
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Worked on marketing campaigns and helped the
                  company with social media and other tasks.
                </p>
              </div>

              <div className="mt-5">
                <p className="text-xs font-bold text-slate-700">
                  Improvement opportunities
                </p>

                <div className="mt-3 space-y-3">
                  {beforeItems.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <XCircle size={16} className="mt-0.5 shrink-0 text-rose-500" />
                      <span className="text-xs leading-5 text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-lg bg-rose-50 px-3 py-2.5 text-xs font-medium text-rose-700">
                <AlertCircle size={15} />
                Content could communicate more impact.
              </div>
            </div>
          </article>

          {/* AFTER */}
          <article className="overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-md shadow-emerald-100/50">

            <div className="flex items-center justify-between bg-gradient-to-r from-emerald-50 to-white px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    After Optimization
                  </h3>
                  <p className="text-xs text-slate-500">
                    Improved example
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold text-emerald-700">
                IMPROVED
              </span>
            </div>

            <div className="p-5">
              <div className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                  Marketing Executive
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Planned digital marketing campaigns, coordinated
                  social media content, and monitored campaign
                  performance to support business objectives.
                </p>
              </div>

              <div className="mt-5">
                <p className="text-xs font-bold text-slate-700">
                  Improvements made
                </p>

                <div className="mt-3 space-y-3">
                  {afterItems.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-600" />
                      <span className="text-xs leading-5 text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2.5 text-xs font-medium text-emerald-700">
                <CheckCircle2 size={15} />
                Clearer and more structured content.
              </div>
            </div>
          </article>

        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl bg-gradient-to-r from-[#090D16] via-[#111C35] to-[#172554] p-6 text-white sm:flex-row sm:p-7">

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
              <Target size={21} />
            </div>

            <div>
              <h3 className="font-bold text-white">
                Give your resume a stronger presentation.
              </h3>
              <p className="mt-1 text-xs leading-5 text-slate-300">
                Explore resume feedback and optimization tools.
              </p>
            </div>
          </div>

          <Link
            to="/ats-checker"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1"
          >
            Try ATS Checker
            <ArrowRight size={17} />
          </Link>
        </div>

        <p className="mt-4 text-center text-[10px] text-slate-400">
          Illustrative content comparison. Actual ATS results vary by
          resume, job description, and employer system.
        </p>

      </div>
    </section>
  );
};

export default ATSComparison;
