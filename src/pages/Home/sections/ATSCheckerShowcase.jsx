
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Search,
  Sparkles,
  Target,
  BarChart3,
  AlertCircle,
  TrendingUp,
  SearchCheck,
  WandSparkles,
  Lightbulb,
  AlertTriangle,
} from "lucide-react";

import atsInitial from "../../../assets/images/resume-builder-modal-1.png";
import atsInput from "../../../assets/images/resume-builder-modal-1.2.png";
import atsLoading from "../../../assets/images/resume-builder-modal-1.3.png";
import atsJobMatch from "../../../assets/images/resume-builder-job-match-1.png";
import atsResults from "../../../assets/images/resume-builder-analys-result-2.png";
import atsBreakdown from "../../../assets/images/resume-builder-score-breakdown-3.png";
import atsKeywords from "../../../assets/images/resume-builder-keywords-3.png";
import atsImprovements from "../../../assets/images/resume-builder-improvements-4.png";

const steps = [
  { number: "01", label: "Add job description" },
  { number: "02", label: "Analyze resume" },
  { number: "03", label: "Review results" },
  { number: "04", label: "Improve resume" },
];

function StepLabel({ number, children }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-xs font-bold text-white shadow-md shadow-blue-200/60">
        {number}
      </span>

      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
          Step {number}
        </p>
        <p className="text-sm font-bold text-slate-900">{children}</p>
      </div>
    </div>
  );
}

function FeaturePoint({ children }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        <Check size={11} strokeWidth={3} />
      </span>

      <span className="text-[13px] leading-5 text-slate-600">
        {children}
      </span>
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
      className={`overflow-hidden rounded-xl border border-blue-100/80 bg-gradient-to-br from-[#F7FAFF] to-[#F0FAFC] shadow-[0_3px_14px_rgba(37,99,235,0.045)] transition duration-300 hover:border-blue-200 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`block h-full w-full object-contain ${imageClassName}`}
      />
    </div>
  );
}

function WorkflowProgress() {
  return (
    <div className="mx-auto mb-10 max-w-3xl">
      <div className="grid grid-cols-4 gap-2">
        {steps.map((step, index) => (
          <div key={step.number} className="relative text-center">
            <div className="relative z-10 mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-blue-100 bg-gradient-to-br from-white to-blue-50 text-[11px] font-bold text-blue-700 shadow-sm shadow-blue-100/60">
              {step.number}
            </div>

            <p className="mt-2 text-[10px] font-semibold text-slate-600 sm:text-xs">
              {step.label}
            </p>

            {index !== steps.length - 1 && (
              <div className="absolute left-[calc(50%+20px)] top-[18px] h-px w-[calc(100%-28px)] bg-gradient-to-r from-blue-200 to-cyan-100" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function StageDivider() {
  return (
    <div className="my-9 border-t border-blue-100/70 sm:my-11" />
  );
}

function InsightItem({ icon: Icon, title, description, color }) {
  const colors = {
    green: "bg-emerald-50 text-emerald-600",
    blue: "bg-blue-50 text-blue-600",
    amber: "bg-amber-50 text-amber-600",
  };

  return (
    <div className="flex items-start gap-2.5">
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${colors[color]}`}
      >
        <Icon size={16} />
      </span>

      <div>
        <p className="text-xs font-bold text-slate-800">{title}</p>
        <p className="mt-0.5 text-[11px] leading-4 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

function BenefitRow({
  icon: Icon,
  title,
  description,
  color = "blue",
}) {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    cyan: "bg-cyan-50 text-cyan-700",
    green: "bg-emerald-50 text-emerald-600",
    rose: "bg-rose-50 text-rose-600",
    amber: "bg-amber-50 text-amber-600",
  };

  return (
    <div className="flex items-start gap-3">
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${colors[color]}`}
      >
        <Icon size={17} />
      </span>

      <div>
        <p className="text-sm font-semibold text-slate-800">
          {title}
        </p>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ATSCheckerShowcase() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F0F7FF] via-white to-[#ECFAFC] py-14 sm:py-16 lg:py-20">
      <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-8">

        {/* FEATURE HEADER */}
        <div className="mx-auto mb-9 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-700 shadow-sm shadow-blue-100/50">
            <Sparkles size={13} />
            ResumePilot ATS Checker
          </span>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[42px]">
            Know your resume&apos;s strength.
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Improve it with confidence.
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            From job description analysis to personalized improvement
            suggestions, get everything you need to make your resume more
            relevant to your target role.
          </p>
        </div>

        {/* ONE UNIFIED PRODUCT EXPERIENCE */}
        <div className="overflow-hidden rounded-2xl border border-blue-100/80 bg-white shadow-[0_15px_55px_rgba(37,99,235,0.08)] sm:rounded-3xl">

          {/* WORKFLOW HEADER */}
          <div className="border-b border-blue-100/80 bg-gradient-to-r from-[#F0F6FF] via-[#F7FBFF] to-[#EFFBFC] px-5 py-6 sm:px-8 sm:py-7 lg:px-10">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Your ATS analysis journey
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Four simple steps to a more targeted resume
                </p>
              </div>

              <span className="rounded-lg border border-blue-100 bg-white/80 px-3 py-1.5 text-[10px] font-bold text-blue-700 shadow-sm">
                4-step workflow
              </span>
            </div>

            <WorkflowProgress />
          </div>

          <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-10">

            {/* STEP 01 */}
            <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
              <div>
                <StepLabel number="01">
                  Add job description
                </StepLabel>

                <h3 className="max-w-md text-2xl font-bold tracking-tight text-slate-950 sm:text-[28px]">
                  Start with the job you want.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                  Add the job description you&apos;re targeting. ResumePilot
                  uses it to understand the skills, experience, and keywords
                  employers are looking for.
                </p>

                <div className="mt-5 space-y-3">
                  <FeaturePoint>
                    Add the target job description.
                  </FeaturePoint>
                  <FeaturePoint>
                    Paste the complete job posting.
                  </FeaturePoint>
                  <FeaturePoint>
                    Save it before starting your analysis.
                  </FeaturePoint>
                </div>
              </div>

              <div className="grid grid-cols-2 items-start gap-3 sm:gap-5">
                <div className="min-w-0">
                  <ProductImage
                    src={atsInitial}
                    alt="ATS checker initial job description screen"
                  />
                  <p className="mt-2 text-center text-[10px] font-medium text-slate-500">
                    Add description
                  </p>
                </div>

                <div className="min-w-0 translate-y-5">
                  <ProductImage
                    src={atsInput}
                    alt="Job description input modal"
                  />
                  <p className="mt-2 text-center text-[10px] font-medium text-slate-500">
                    Enter job details
                  </p>
                </div>
              </div>
            </div>

            <StageDivider />

            {/* STEP 02 */}
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <div className="order-2 lg:order-1">
                <ProductImage
                  src={atsLoading}
                  alt="ResumePilot ATS analysis progress"
                  className="mx-auto max-w-lg"
                  imageClassName="h-auto w-full"
                />
              </div>

              <div className="order-1 lg:order-2">
                <StepLabel number="02">
                  Analyze your resume
                </StepLabel>

                <h3 className="max-w-md text-2xl font-bold tracking-tight text-slate-950 sm:text-[28px]">
                  Let the analysis do the heavy lifting.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                  Once you save the job description, ResumePilot checks your
                  resume against the target role and prepares a detailed
                  report.
                </p>

                <div className="mt-5 space-y-3">
                  <FeaturePoint>
                    Check resume content and structure.
                  </FeaturePoint>
                  <FeaturePoint>
                    Compare skills with job requirements.
                  </FeaturePoint>
                  <FeaturePoint>
                    Prepare your personalized analysis report.
                  </FeaturePoint>
                </div>
              </div>
            </div>

            <StageDivider />

            {/* STEP 03 */}
            <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
              <div>
                <StepLabel number="03">
                  Review your results
                </StepLabel>

                <h3 className="max-w-md text-2xl font-bold tracking-tight text-slate-950 sm:text-[28px]">
                  Understand your resume performance.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                  Get a clear overview of your job match, ATS score, content
                  quality, and individual resume section performance.
                </p>

                <div className="mt-5 space-y-3">
                  <FeaturePoint>
                    Review your job match and ATS scores.
                  </FeaturePoint>
                  <FeaturePoint>
                    Identify content gaps and potential issues.
                  </FeaturePoint>
                  <FeaturePoint>
                    Explore your detailed score breakdown.
                  </FeaturePoint>
                </div>

                <div className="mt-7 border-t border-blue-100/70 pt-5">
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    What you&apos;ll discover
                  </p>

                  <div className="space-y-4">
                    <InsightItem
                      icon={CheckCircle2}
                      title="Matched keywords"
                      description="Relevant terms already found in your resume."
                      color="green"
                    />

                    <InsightItem
                      icon={Search}
                      title="Missing keywords"
                      description="Important job terms that may need attention."
                      color="blue"
                    />

                    <InsightItem
                      icon={AlertCircle}
                      title="Content issues"
                      description="Areas where your resume could be stronger."
                      color="amber"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="min-w-0">
                    <ProductImage
                      src={atsJobMatch}
                      alt="ATS job match analysis"
                      className="h-[180px] sm:h-[220px]"
                      imageClassName="h-full"
                    />
                    <p className="mt-2 text-center text-[10px] font-medium text-slate-500">
                      Job match
                    </p>
                  </div>

                  <div className="min-w-0">
                    <ProductImage
                      src={atsResults}
                      alt="ATS analysis results"
                      className="h-[180px] sm:h-[220px]"
                      imageClassName="h-full"
                    />
                    <p className="mt-2 text-center text-[10px] font-medium text-slate-500">
                      Analysis results
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-[0.75fr_1.25fr] items-center gap-3 rounded-xl border border-blue-100/80 bg-gradient-to-br from-[#F3F8FF] to-[#F0FBFC] p-3 sm:gap-4 sm:p-4">
                  <div>
                    <span className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm shadow-blue-100">
                      <BarChart3 size={18} />
                    </span>

                    <p className="text-sm font-bold text-slate-800">
                      Score breakdown
                    </p>

                    <p className="mt-1 text-[11px] leading-5 text-slate-500">
                      Section-by-section performance.
                    </p>
                  </div>

                  <ProductImage
                    src={atsBreakdown}
                    alt="Detailed ATS score breakdown"
                    imageClassName="h-auto w-full"
                  />
                </div>
              </div>
            </div>

            <StageDivider />

            {/* STEP 04 */}
            <div>
              <div className="mb-7 max-w-xl">
                <StepLabel number="04">
                  Improve your resume
                </StepLabel>

                <h3 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-[28px]">
                  Turn insights into meaningful improvements.
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Use your analysis results to identify missing keywords and
                  make focused improvements with AI-powered guidance.
                </p>
              </div>

              {/* KEYWORD ANALYSIS */}
              <div className="grid items-center gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
                <div className="min-w-0">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <SearchCheck size={16} />
                    </span>

                    <p className="text-sm font-bold text-slate-800">
                      Keyword analysis
                    </p>
                  </div>

                  <ProductImage
                    src={atsKeywords}
                    alt="ResumePilot keyword analysis showing matched and missing keywords"
                    className="bg-gradient-to-br from-[#F7FAFF] to-[#F0FAFC] p-2 sm:p-3"
                    imageClassName="h-auto max-h-[400px] w-full"
                  />
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                      Find the missing pieces
                    </p>

                    <h4 className="mt-2 text-xl font-bold leading-snug text-slate-900">
                      Know which keywords your resume is missing.
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Compare your resume with the target job description and
                      understand which relevant terms are already included
                      and which ones deserve attention.
                    </p>
                  </div>

                  <div className="space-y-4 border-t border-blue-100/70 pt-5">
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
                      color="rose"
                    />

                    <BenefitRow
                      icon={Target}
                      title="Better job alignment"
                      description="Understand where to focus when tailoring your resume."
                      color="cyan"
                    />
                  </div>
                </div>
              </div>

              {/* AI SUGGESTIONS */}
              <div className="my-8 border-t border-blue-100/70" />

              <div className="grid items-center gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
                <div className="order-2 space-y-5 lg:order-1">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-700">
                      Your AI writing assistant
                    </p>

                    <h4 className="mt-2 text-xl font-bold leading-snug text-slate-900">
                      Get clear suggestions to strengthen your resume.
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Go beyond identifying problems. Get practical
                      recommendations that help you improve your resume
                      content and highlight your qualifications more
                      effectively.
                    </p>
                  </div>

                  <div className="space-y-4 border-t border-blue-100/70 pt-5">
                    <BenefitRow
                      icon={AlertTriangle}
                      title="High-priority suggestions"
                      description="Identify important changes that deserve your attention first."
                      color="rose"
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
                      color="blue"
                    />
                  </div>
                </div>

                <div className="order-1 min-w-0 lg:order-2">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700">
                      <WandSparkles size={16} />
                    </span>

                    <p className="text-sm font-bold text-slate-800">
                      AI improvement suggestions
                    </p>
                  </div>

                  <ProductImage
                    src={atsImprovements}
                    alt="ResumePilot AI improvement suggestions grouped by priority"
                    className="bg-gradient-to-br from-[#F7FAFF] to-[#F0FAFC] p-2 sm:p-3"
                    imageClassName="h-auto max-h-[400px] w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* UNIFIED CTA */}
          <div className="border-t border-blue-100/80 bg-gradient-to-r from-[#EFF6FF] via-[#F7FBFF] to-[#ECFAFC] px-5 py-8 text-center sm:px-8 sm:py-10">
            <div className="mx-auto max-w-xl">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-200/60">
                <TrendingUp size={19} />
              </div>

              <h3 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                Make your next application stronger.
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Understand your resume, close the gaps, and apply with more
                confidence.
              </p>

              <Link
                to="/ats-checker"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-blue-200/60 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200/70"
              >
                Try ATS Checker
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-[10px] leading-5 text-slate-400">
          Scores and sample insights are illustrative and may vary depending
          on your resume and target job description.
        </p>
      </div>
    </section>
  );
}
