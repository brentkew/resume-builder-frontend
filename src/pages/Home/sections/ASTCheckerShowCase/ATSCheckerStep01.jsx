import { Check, FileText } from "lucide-react";
import atsInitial from "../../../../assets/images/resume-builder-modal-1.png";
import atsInput from "../../../../assets/images/resume-builder-modal-1.2.png";

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

function ProductImageGrid({ images, columns = 2, imageHeight = "h-[230px] sm:h-[270px]" }) {
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  };

  const gridClass =
    columnClasses[columns] || "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${gridClass} items-stretch gap-4 sm:gap-5`}>
      {images.map((image) => (
        <div key={image.alt} className="flex min-w-0 flex-col">
          <ProductImage
            src={image.src}
            alt={image.alt}
            className={`${imageHeight} w-full`}
            imageClassName="h-full w-full"
          />
          {image.caption && <ImageCaption>{image.caption}</ImageCaption>}
        </div>
      ))}
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

function ImageCaption({ children }) {
  return (
    <p className="mt-3 text-center text-[10px] font-semibold text-slate-500">
      {children}
    </p>
  );
}

export default function ATSCheckerStep01() {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
      <div>
        <StepLabel number="01">Add job description</StepLabel>

        <SectionHeading
          eyebrow="Start with your target role"
          title="Start with the job you want."
          description="Add the job description you're targeting. ResumePilot uses it to understand the skills, experience, and keywords employers are looking for."
        />

        <div className="mt-5 space-y-3">
          <FeaturePoint>Add the target job description.</FeaturePoint>
          <FeaturePoint>Paste the complete job posting.</FeaturePoint>
          <FeaturePoint>Save it before starting your analysis.</FeaturePoint>
        </div>
      </div>

      {/* STEP 01 IMAGES */}
      <div className="relative overflow-hidden rounded-2xl border border-pink-100 bg-gradient-to-br from-pink-50/70 to-violet-50/50 p-3 sm:p-5">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-xs font-bold text-slate-800">
            Job description setup
          </p>
          <span className="rounded-full bg-white px-2.5 py-1 text-[9px] font-bold text-pink-600 shadow-sm">
            Step 01
          </span>
        </div>

        <ProductImageGrid
          images={[
            {
              src: atsInitial,
              alt: "ATS checker initial job description screen",
              caption: "Add description",
            },
            {
              src: atsInput,
              alt: "Job description input modal",
              caption: "Enter job details",
            },
          ]}
          columns={2}
          imageHeight="h-[220px] sm:h-[250px]"
        />

        <div className="mt-5 flex items-center gap-2 rounded-xl border border-white bg-white/80 p-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-pink-600">
            <FileText size={15} />
          </span>
          <p className="text-[10px] font-medium leading-4 text-slate-600">
            Your target job helps personalize the entire analysis.
          </p>
        </div>
      </div>
    </div>
  );
}
