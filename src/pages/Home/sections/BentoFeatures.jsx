
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CheckCircle2,
  Download,
  FileText,
  LayoutTemplate,
  Sparkles,
  Target,
  WandSparkles,
  FileDown,
} from "lucide-react";

const templates = [
  { name: "Modern", accent: "bg-blue-600" },
  { name: "Professional", accent: "bg-cyan-600" },
  { name: "Minimal", accent: "bg-slate-700" },
];

const metrics = [
  { label: "Content Quality", score: 80 },
  { label: "Job Match", score: 91 },
  { label: "Keyword Match", score: 75 },
  { label: "Skills Match", score: 85 },
];

const BentoFeatures = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        {/* Section heading */}
        <div className="section-header">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
            <Sparkles size={14} />
            POWERFUL RESUME TOOLS
          </span>

          <h2 className="section-title mt-5">
            Everything you need to
            <span className="text-blue-600"> stand out.</span>
          </h2>

          <p className="section-description">
            Create a polished resume, improve your content, and prepare
            for your next opportunity with tools designed to work together.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">

          {/* AI Resume Builder */}
          <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 text-slate-900 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/60 sm:p-7 md:col-span-7">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-700">
                <Sparkles size={21} />
              </div>

              <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-semibold tracking-wide text-blue-700">
                AI POWERED
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 md:text-[27px]">
              AI Resume Builder
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
              Turn your experience into a polished, professional resume.
              Organize your career story and make every section count.
            </p>

            <Link
              to="/resume-builder"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-all hover:gap-3 hover:text-blue-800"
            >
              Build your resume
              <ArrowUpRight size={17} />
            </Link>

            {/* Resume editor preview */}
            <div className="mt-7 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm sm:p-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-600" />
                  <span className="text-[11px] font-medium text-slate-600">
                    Resume preview
                  </span>
                </div>

                <span className="rounded-md bg-blue-50 px-2 py-1 text-[9px] font-medium text-blue-700">
                  LIVE EDITOR
                </span>
              </div>

              <div className="mt-4 grid grid-cols-[1fr_auto] gap-3">
                <div>
                  <div className="h-3 w-32 rounded bg-slate-800" />
                  <div className="mt-2 h-1.5 w-24 rounded bg-slate-300" />

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded bg-blue-50 px-2 py-1 text-[9px] font-medium text-blue-700">
                      Product Designer
                    </span>

                    <span className="rounded bg-slate-100 px-2 py-1 text-[9px] text-slate-500">
                      4+ Years Experience
                    </span>
                  </div>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-100 bg-blue-50">
                  <FileText size={20} className="text-blue-600" />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {[
                  { title: "Experience", lines: ["w-full", "w-4/5"] },
                  { title: "Education", lines: ["w-4/5", "w-3/5"] },
                  { title: "Skills", lines: ["w-full", "w-3/4"] },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-slate-200 bg-slate-50 p-2.5 sm:p-3"
                  >
                    <p className="text-[10px] font-semibold text-slate-700">
                      {item.title}
                    </p>

                    {item.lines.map((width, index) => (
                      <div
                        key={index}
                        className={`mt-2 h-1 rounded-full bg-blue-400 ${width}`}
                      />
                    ))}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">
                <span className="text-[10px] text-slate-500">
                  Clean structure · Professional layout
                </span>

                <span className="flex items-center gap-1 text-[10px] font-medium text-blue-700">
                  <CheckCircle2 size={12} />
                  Ready to edit
                </span>
              </div>
            </div>
          </article>

          {/* ATS Checker */}
          <article className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-[#F0F6FF] via-white to-[#F8FBFF] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/60 sm:p-7 md:col-span-5">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-200">
                <Target size={21} />
              </div>

              <span className="rounded-full border border-blue-100 bg-white px-3 py-1 text-[10px] font-semibold text-blue-700">
                ATS ANALYSIS
              </span>
            </div>

            <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900">
              ATS Resume Checker
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Understand your resume's strengths, keyword relevance,
              and compatibility with a target job description.
            </p>

            {/* Score preview */}
            <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3.5 sm:p-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Overall ATS Score
                </p>

                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                    84
                  </span>
                  <span className="text-sm font-semibold text-slate-400">
                    /100
                  </span>
                </div>

                <p className="mt-1 text-[11px] font-medium text-blue-700">
                  Example analysis score
                </p>
              </div>

              <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border-[6px] border-blue-100 border-t-blue-600">
                <span className="text-lg font-bold text-blue-700">84%</span>
              </div>
            </div>

            {/* Score metrics */}
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-slate-200/80 bg-white p-3"
                >
                  <p className="text-[10px] font-medium leading-4 text-slate-500">
                    {metric.label}
                  </p>

                  <p className="mt-1 text-lg font-bold text-slate-900">
                    {metric.score}%
                  </p>

                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-blue-600"
                      style={{ width: `${metric.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/ats-checker"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition hover:gap-3"
            >
              Analyze your resume
              <ArrowUpRight size={17} />
            </Link>

            <p className="mt-2 text-[10px] leading-4 text-slate-400">
              Illustrative scores. Actual results depend on resume content
              and the target job description.
            </p>
          </article>

          {/* Professional Templates */}
          <article className="group relative overflow-hidden mt-3 rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 sm:p-6 md:col-span-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <LayoutTemplate size={20} />
            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Professional Templates
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Choose a clean, professional layout that suits your
              experience, industry, and career goals.
            </p>

            <div className="mt-5 flex items-end gap-3">
              {templates.map((template, index) => (
                <div
                  key={template.name}
                  className={`flex-1 rounded-t-lg border border-slate-200 bg-white p-2 shadow-sm transition duration-300 group-hover:-translate-y-1 ${
                    index === 1 ? "h-32" : "h-28"
                  }`}
                >
                  <div className={`h-2 w-10 rounded ${template.accent}`} />
                  <div className="mt-3 h-1 w-full rounded bg-slate-200" />
                  <div className="mt-2 h-1 w-4/5 rounded bg-slate-200" />
                  <div className="mt-3 h-1 w-2/3 rounded bg-slate-300" />
                  <p className="mt-3 truncate text-[8px] font-medium text-slate-400">
                    {template.name}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/templates"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition hover:gap-3"
            >
              Explore templates
              <ArrowUpRight size={17} />
            </Link>
          </article>

          {/* AI Writing Assistance */}
          <article className="group relative overflow-hidden mt-3 rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-white to-cyan-50/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-100/40 sm:p-6 md:col-span-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
              <WandSparkles size={20} />
            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              AI Writing Assistance
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Make your experience descriptions clearer, more specific,
              and easier for recruiters to understand.
            </p>

            <div className="mt-5 space-y-3 rounded-xl border border-cyan-100 bg-white p-3.5 shadow-sm">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Original wording
                </p>

                <p className="mt-2 rounded-lg bg-slate-50 p-2.5 text-[11px] leading-5 text-slate-500">
                  Worked on social media and marketing tasks.
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-700">
                  Improved example
                </p>

                <p className="mt-2 rounded-lg border border-cyan-100 bg-cyan-50/70 p-2.5 text-[11px] font-medium leading-5 text-slate-700">
                  Coordinated social media campaigns and supported
                  digital marketing initiatives.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1 text-[10px] font-semibold text-cyan-700">
                <Sparkles size={13} />
                Clearer wording. Stronger presentation.
              </div>
            </div>
          </article>

          {/* Easy Export */}
          <article className="group relative overflow-hidden mt-3 rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40 sm:p-6 md:col-span-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <Download size={20} />
            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Easy Export
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Prepare a clean resume document that's ready to share
              with employers.
            </p>

            <div className="mt-5 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <FileText size={21} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-bold text-slate-800">
                    My-Resume.pdf
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    PDF document
                  </p>
                </div>

                <CheckCircle2 size={17} className="shrink-0 text-blue-600" />
              </div>

              <div className="mt-4 rounded-lg bg-blue-50 px-3 py-2.5">
                <div className="flex items-center gap-2 text-blue-700">
                  <FileDown size={15} />
                  <span className="text-[10px] font-bold">
                    Ready for sharing
                  </span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between gap-2 text-[10px] text-slate-400">
                <span>Professional format</span>
                <span className="flex items-center gap-1 font-semibold text-blue-600">
                  <CheckCircle2 size={12} />
                  Preview
                </span>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
