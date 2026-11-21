
import {
  Check,
  CheckCircle2,
  Search,
  BarChart3,
  AlertCircle,
  ArrowLeftRight,
  Sparkles,
  Eye,
} from "lucide-react";

import atsJobMatch from "../../../../assets/images/resume-builder-job-match-1.png";
import atsResults from "../../../../assets/images/resume-builder-analys-result-2.png";
import atsBreakdown from "../../../../assets/images/resume-builder-score-breakdown-3.png";

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

function FeaturePoint({ children }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="mt-0.5 flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-pink-50 text-pink-600">
        <Check size={11} strokeWidth={3} />
      </span>

      <span className="text-[13px] leading-5 text-slate-600">
        {children}
      </span>
    </div>
  );
}

function InsightItem({ icon: Icon, title, description, color }) {
  const colors = {
    green: "bg-emerald-50 text-emerald-600",
    pink: "bg-pink-50 text-pink-600",
    violet: "bg-violet-50 text-violet-600",
    amber: "bg-amber-50 text-amber-600",
  };

  return (
    <div className="flex items-start gap-3">
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${colors[color]}`}
      >
        <Icon size={16} />
      </span>

      <div>
        <p className="text-xs font-bold text-slate-800">{title}</p>
        <p className="mt-0.5 text-[11px] leading-5 text-slate-500">
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

/* Reusable styled image preview card */
function ProductImage({
  src,
  alt,
  title,
  description,
  number,
  accent = "pink",
  icon: Icon = Eye,
  className = "",
  imageClassName = "",
}) {
  const styles = {
    pink: {
      border: "border-pink-200/80",
      header: "text-pink-600",
      number: "bg-pink-50 text-pink-600",
      background: "from-pink-50/80 to-white",
      icon: "text-pink-500",
      shadow: "shadow-pink-100/70",
    },
    violet: {
      border: "border-violet-200/80",
      header: "text-violet-600",
      number: "bg-violet-50 text-violet-600",
      background: "from-violet-50/80 to-white",
      icon: "text-violet-500",
      shadow: "shadow-violet-100/70",
    },
    emerald: {
      border: "border-emerald-200/80",
      header: "text-emerald-600",
      number: "bg-emerald-50 text-emerald-600",
      background: "from-emerald-50/80 to-white",
      icon: "text-emerald-500",
      shadow: "shadow-emerald-100/70",
    },
  };

  const theme = styles[accent];

  return (
    <div
      className={`group relative min-w-0 overflow-hidden rounded-xl border bg-white shadow-lg ${theme.border} ${theme.shadow} transition-all duration-500 hover:z-20 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      {/* Card Header */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-100 bg-white px-2.5 py-2.5 sm:px-3">
        <span className={`truncate text-[10px] font-extrabold sm:text-xs ${theme.header}`}>
          {title}
        </span>

        <span className={`shrink-0 rounded-md px-1.5 py-1 text-[8px] font-bold sm:text-[9px] ${theme.number}`}>
          {number}
        </span>
      </div>

      {/* Image Area */}
      <div className={`relative flex h-[210px] items-center justify-center overflow-hidden bg-gradient-to-b ${theme.background} p-2 sm:h-[250px] sm:p-3`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.04] ${imageClassName}`}
        />

        {/* Bottom Image Overlay */}
        <div className="absolute bottom-2 left-2 right-2 rounded-lg border border-white/80 bg-white/90 px-2 py-2 shadow-sm backdrop-blur-md sm:bottom-3 sm:left-3 sm:right-3 sm:px-3">
          <div className="flex items-center gap-1.5">
            <Icon size={12} className={`shrink-0 ${theme.icon}`} />
            <span className="truncate text-[9px] font-bold text-slate-700 sm:text-[11px]">
              {title}
            </span>
          </div>

          <p className="mt-0.5 truncate text-[8px] text-slate-400 sm:text-[9px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ATSCheckerStep03() {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
      {/* LEFT: CONTENT */}
      <div>
        <StepLabel number="03">Review your results</StepLabel>

        <SectionHeading
          eyebrow="Understand your performance"
          title="Understand your resume performance."
          description="Get a clear overview of your job match, ATS score, content quality, and individual resume section performance."
        />

        <div className="space-y-3">
          <FeaturePoint>Review your job match and ATS scores.</FeaturePoint>
          <FeaturePoint>Identify content gaps and potential issues.</FeaturePoint>
          <FeaturePoint>Explore your detailed score breakdown.</FeaturePoint>
        </div>

        {/* Insights Card */}
        <div className="mt-7 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
            What you'll discover
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
              color="violet"
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

      {/* RIGHT: VISUAL ANALYSIS SHOWCASE */}
      <div className="relative lg:pl-2">

        {/* Decorative Background */}
        <div className="absolute -left-8 top-12 h-40 w-40 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute -bottom-8 right-0 h-40 w-40 rounded-full bg-violet-200/40 blur-3xl" />

        {/* Main Showcase Container */}
        <div className="relative rounded-3xl border border-slate-200/80 bg-white/85 p-3 shadow-xl shadow-slate-200/50 backdrop-blur-sm sm:p-5">

          {/* Showcase Header */}
          <div className="mb-5 flex items-center justify-between gap-3 px-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 text-white shadow-md shadow-pink-200/60">
                <BarChart3 size={19} />
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-slate-800">
                  Resume Analysis
                </h3>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  Your performance at a glance
                </p>
              </div>
            </div>

            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1.5 text-[9px] font-bold text-emerald-600 sm:text-[10px]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Results ready
            </span>
          </div>

          {/* Image Preview Stage */}
          <div className="relative rounded-2xl bg-gradient-to-br from-pink-50 via-white to-violet-50 p-3 sm:p-5">

            {/* Decorative Circles */}
            <div className="absolute left-0 top-10 h-24 w-24 rounded-full bg-pink-100/60 blur-2xl" />
            <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-violet-100/60 blur-2xl" />

            {/* Two Preview Cards */}
            <div className="relative grid grid-cols-2 items-center gap-3 sm:gap-5">

              {/* Job Match Card */}
              <ProductImage
                src={atsJobMatch}
                alt="ATS job match analysis"
                title="Job Match"
                description="Compare your resume with the job"
                number="01"
                accent="pink"
                icon={CheckCircle2}
                className="-rotate-2 transition-transform duration-500 hover:rotate-0"
              />

              {/* Results Card */}
              <ProductImage
                src={atsResults}
                alt="ATS analysis results"
                title="Analysis Results"
                description="Review your resume performance"
                number="02"
                accent="violet"
                icon={Search}
                className="rotate-2 transition-transform duration-500 hover:rotate-0"
              />

              {/* Center Floating Switch Indicator */}
              <div className="absolute left-1/2 top-[42%] z-30 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-slate-900 text-white shadow-lg sm:h-11 sm:w-11">
                <ArrowLeftRight size={17} />
              </div>
            </div>

            {/* Preview Caption */}
            <div className="relative mt-5 flex items-center justify-center gap-2">
              <Sparkles size={13} className="text-pink-500" />
              <p className="text-center text-[10px] font-semibold text-slate-500 sm:text-xs">
                Every detail. One clear analysis.
              </p>
            </div>
          </div>

          {/* Featured Score Breakdown */}
          <div className="mt-4 overflow-hidden rounded-2xl border border-violet-100 bg-gradient-to-br from-white via-white to-violet-50/50 p-3 sm:p-4">

            {/* Breakdown Header */}
            <div className="mb-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <BarChart3 size={17} />
                </span>

                <div>
                  <p className="text-xs font-extrabold text-slate-800">
                    Score Breakdown
                  </p>
                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Section-by-section performance
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-violet-50 px-2.5 py-1 text-[9px] font-bold text-violet-600">
                Detailed view
              </span>
            </div>

            {/* Breakdown Image */}
            <div className="group relative overflow-hidden rounded-xl border border-violet-100 bg-gradient-to-br from-violet-50/70 to-white p-2 shadow-sm transition-all duration-500 hover:border-violet-200 hover:shadow-md sm:p-3">
              <img
                src={atsBreakdown}
                alt="Detailed ATS score breakdown"
                loading="lazy"
                className="h-[190px] w-full object-contain transition-transform duration-700 group-hover:scale-[1.02] sm:h-[230px]"
              />

              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg border border-white/80 bg-white/90 px-2.5 py-1.5 shadow-sm backdrop-blur-md">
                <CheckCircle2 size={12} className="text-emerald-500" />
                <span className="text-[9px] font-bold text-slate-600">
                  Detailed insights
                </span>
              </div>
            </div>
          </div>

          {/* Showcase Footer */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1">
            <div className="flex items-center gap-2 text-[10px] font-medium text-slate-500 sm:text-xs">
              <Eye size={14} className="text-violet-500" />
              Explore your resume insights
            </div>

            <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 sm:text-xs">
              <Check size={14} />
              Analysis complete
            </div>
          </div>
        </div>

        {/* Floating Feature Card */}
        <div className="absolute -bottom-5 -left-2 z-30 hidden items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 shadow-lg shadow-slate-200/60 sm:flex lg:-left-7">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-600">
            <CheckCircle2 size={19} />
          </div>

          <div>
            <p className="text-xs font-bold text-slate-800">
              Insights at a glance
            </p>
            <p className="mt-0.5 text-[10px] text-slate-400">
              Know where to improve
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
