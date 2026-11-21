import {
  CheckCircle2, AlertCircle, Target, SearchCheck, WandSparkles,
  AlertTriangle, Lightbulb,
} from "lucide-react";

import atsKeywords from "../../../../assets/images/resume-builder-keywords-3.png";
import atsImprovements from "../../../../assets/images/resume-builder-improvements-4.png";

function StepLabel({ number, children }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-violet-600 text-xs font-extrabold text-white shadow-lg shadow-pink-200/50">
        {number}
      </span>

      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-violet-600">
          Step {number}
        </p>
        <p className="text-sm font-bold text-slate-900">{children}</p>
      </div>
    </div>
  );
}

function ProductImage({
  src,
  alt,
  className = "",
  imageClassName = "",
}) {
  return (
    <div
      className={`group relative h-full min-w-0 overflow-hidden rounded-2xl border border-white/90 bg-white p-1.5 shadow-[0_8px_25px_rgba(148,163,184,0.12)] ring-1 ring-slate-200/70 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(168,85,247,0.13)] hover:ring-pink-200 sm:p-2 ${className}`}
    >
      <div className="relative flex h-full min-h-0 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 via-white to-violet-50/40">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`block h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02] ${imageClassName}`}
        />
      </div>
    </div>
  );
}

function BenefitRow({ icon: Icon, title, description, color = "pink" }) {
  const colors = {
    pink: "bg-pink-50 text-pink-600",
    violet: "bg-violet-50 text-violet-600",
    green: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
  };

  return (
    <div className="group flex items-start gap-3">
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${colors[color]}`}
      >
        <Icon size={17} />
      </span>

      <div>
        <p className="text-sm font-semibold text-slate-800">{title}</p>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-6">
      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-violet-600">
        {eyebrow}
      </p>

      <h3 className="max-w-md text-2xl font-extrabold tracking-tight text-slate-950 sm:text-[28px]">
        {title}
      </h3>

      <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}

export default function ATSCheckerStep04() {
  return (
            <div>
              <div className="mb-8 max-w-xl">
                <StepLabel number="04">Improve your resume</StepLabel>

                <SectionHeading
                  eyebrow="Make meaningful improvements"
                  title="Turn insights into meaningful improvements."
                  description="Use your analysis results to identify missing keywords and make focused improvements with AI-powered guidance."
                />
              </div>

              {/* KEYWORD ANALYSIS */}
              <div className="grid items-center gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
                <div className="rounded-2xl border border-pink-100 bg-gradient-to-br from-pink-50/50 to-violet-50/40 p-3 sm:p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-pink-600 shadow-sm">
                        <SearchCheck size={16} />
                      </span>

                      <p className="text-xs font-bold text-slate-800">
                        Keyword analysis
                      </p>
                    </div>

                    <span className="rounded-full bg-white px-2 py-1 text-[9px] font-bold text-pink-600 shadow-sm">
                      Insights
                    </span>
                  </div>

                  <ProductImage
                    src={atsKeywords}
                    alt="ResumePilot keyword analysis showing matched and missing keywords"
                    className="h-[300px] w-full sm:h-[380px]"
                    imageClassName="h-full w-full"
                  />
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-pink-600">
                      Find the missing pieces
                    </p>

                    <h4 className="mt-2 text-xl font-extrabold leading-snug text-slate-900">
                      Know which keywords your resume is missing.
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Compare your resume with the target job description and
                      understand which relevant terms are already included
                      and which ones deserve attention.
                    </p>
                  </div>

                  <div className="space-y-4 border-t border-slate-100 pt-5">
                    <BenefitRow
                      icon={CheckCircle2}
                      title="Matched keywords"
                      description="See relevant skills and terms already present in your resume."
                      color="green"
                    />

                    <BenefitRow
                      icon={AlertCircle}
                      title="Missing keywords"
                      description="Discover relevant job requirements that may be missing."
                      color="pink"
                    />

                    <BenefitRow
                      icon={Target}
                      title="Better job alignment"
                      description="Understand where to focus when tailoring your resume."
                      color="violet"
                    />
                  </div>
                </div>
              </div>

              {/* AI SUGGESTIONS */}
              <div className="my-10 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-100" />
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <WandSparkles size={16} />
                </span>
                <div className="h-px flex-1 bg-slate-100" />
              </div>

              <div className="grid items-center gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
                <div className="order-2 space-y-5 lg:order-1">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-violet-600">
                      Your AI writing assistant
                    </p>

                    <h4 className="mt-2 text-xl font-extrabold leading-snug text-slate-900">
                      Get clear suggestions to strengthen your resume.
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Go beyond identifying problems. Get practical
                      recommendations that help you improve your resume
                      content and highlight your qualifications more
                      effectively.
                    </p>
                  </div>

                  <div className="space-y-4 border-t border-slate-100 pt-5">
                    <BenefitRow
                      icon={AlertTriangle}
                      title="High-priority suggestions"
                      description="Identify important changes that deserve your attention first."
                      color="pink"
                    />

                    <BenefitRow
                      icon={Lightbulb}
                      title="Content refinements"
                      description="Improve wording, clarity, and the impact of your achievements."
                      color="amber"
                    />

                    <BenefitRow
                      icon={WandSparkles}
                      title="Section-based guidance"
                      description="Review recommendations for areas such as experience and skills."
                      color="violet"
                    />
                  </div>
                </div>

                <div className="order-1 rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/50 to-pink-50/40 p-3 sm:p-5 lg:order-2">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-violet-600 shadow-sm">
                        <WandSparkles size={16} />
                      </span>

                      <p className="text-xs font-bold text-slate-800">
                        AI improvement suggestions
                      </p>
                    </div>

                    <span className="rounded-full bg-white px-2 py-1 text-[9px] font-bold text-violet-600 shadow-sm">
                      AI powered
                    </span>
                  </div>

                  <ProductImage
                    src={atsImprovements}
                    alt="ResumePilot AI improvement suggestions grouped by priority"
                    className="h-[300px] w-full sm:h-[380px]"
                    imageClassName="h-full w-full"
                  />
                </div>
              </div>
            </div>
  );
}
