import { Check, Search } from "lucide-react";
import atsLoading from "../../../../assets/images/resume-builder-modal-1.3.png";

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

export default function ATSCheckerStep02() {
  return (
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <div className="order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/70 to-pink-50/50 p-3 sm:p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <p className="text-xs font-bold text-slate-800">
                      Resume analysis
                    </p>
                    <span className="rounded-full bg-white px-2.5 py-1 text-[9px] font-bold text-violet-600 shadow-sm">
                      Processing
                    </span>
                  </div>

                  <ProductImage
                    src={atsLoading}
                    alt="ResumePilot ATS analysis progress"
                    className="mx-auto h-[250px] max-w-lg sm:h-[300px]"
                    imageClassName="h-full w-full"
                  />

                  <div className="mt-5 flex items-center gap-2 rounded-xl border border-white bg-white/80 p-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                      <Search size={15} />
                    </span>
                    <p className="text-[10px] font-medium leading-4 text-slate-600">
                      Resume content and job requirements are being compared.
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <StepLabel number="02">Analyze your resume</StepLabel>

                <SectionHeading
                  eyebrow="Let AI do the heavy lifting"
                  title="Let the analysis do the heavy lifting."
                  description="Once you save the job description, ResumePilot checks your resume against the target role and prepares a detailed report."
                />

                <div className="mt-5 space-y-3">
                  <FeaturePoint>Check resume content and structure.</FeaturePoint>
                  <FeaturePoint>Compare skills with job requirements.</FeaturePoint>
                  <FeaturePoint>Prepare your personalized analysis report.</FeaturePoint>
                </div>
              </div>
            </div>
  );
}
