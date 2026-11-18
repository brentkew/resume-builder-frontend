
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Eye,
  LayoutTemplate,
  Sparkles,
} from "lucide-react";

const templates = [
  {
    name: "Professional",
    category: "Corporate",
    description: "Clean and structured for traditional careers.",
    style: "professional",
    accent: "bg-blue-600",
  },
  {
    name: "Modern",
    category: "Creative",
    description: "Contemporary design with strong visual hierarchy.",
    style: "modern",
    accent: "bg-violet-600",
  },
  {
    name: "Minimal",
    category: "ATS Friendly",
    description: "Simple formatting focused on readability.",
    style: "minimal",
    accent: "bg-cyan-600",
  },
];

const ResumePreview = ({ style, accent }) => (
  <div className="mx-auto h-[235px] w-[175px] overflow-hidden rounded-t-lg border border-slate-200 bg-white p-3 shadow-lg transition duration-500 group-hover:-translate-y-2">

    <div className="border-b border-slate-200 pb-3">
      <div className={`h-2.5 w-20 rounded-sm ${accent}`} />
      <div className="mt-2 h-1 w-28 rounded bg-slate-300" />
      <div className="mt-1 h-1 w-16 rounded bg-slate-200" />
    </div>

    <div className="mt-4 space-y-2">
      <div className={`h-1.5 w-14 rounded ${style === "modern" ? "bg-violet-500" : "bg-slate-700"}`} />
      <div className="h-1 w-full rounded bg-slate-200" />
      <div className="h-1 w-11/12 rounded bg-slate-200" />
      <div className="h-1 w-4/5 rounded bg-slate-200" />
    </div>

    <div className="mt-4 space-y-2">
      <div className={`h-1.5 w-16 rounded ${accent}`} />
      <div className="h-1 w-full rounded bg-slate-200" />
      <div className="h-1 w-10/12 rounded bg-slate-200" />
      <div className="h-1 w-11/12 rounded bg-slate-200" />
    </div>

    <div className="mt-4 space-y-2">
      <div className="h-1.5 w-12 rounded bg-slate-700" />
      <div className="flex gap-2">
        <div className="h-1 w-10 rounded bg-slate-200" />
        <div className="h-1 w-14 rounded bg-slate-200" />
      </div>
      <div className="flex gap-2">
        <div className="h-1 w-12 rounded bg-slate-200" />
        <div className="h-1 w-10 rounded bg-slate-200" />
      </div>
    </div>
  </div>
);

const TemplateGallery = () => {
  return (
    <section className="section bg-white">
      <div className="container">

        {/* Heading */}
        <div className="mx-auto mb-10 flex max-w-5xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-700">
              <LayoutTemplate size={14} />
              RESUME COLLECTION
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Designs that make
              <span className="text-blue-600"> an impression.</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Find a professional layout that presents your
              experience with confidence.
            </p>
          </div>

          <Link
            to="/templates"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
          >
            View all templates
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Template cards */}
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">

          {templates.map((template) => (
            <article
              key={template.name}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="relative flex h-[250px] items-end justify-center overflow-hidden bg-gradient-to-br from-slate-100 to-blue-50 px-5 pt-5">

                <ResumePreview
                  style={template.style}
                  accent={template.accent}
                />

                <span className="absolute left-4 top-4 rounded-full border border-white bg-white/90 px-3 py-1 text-[10px] font-bold text-slate-600 shadow-sm">
                  {template.category}
                </span>

                <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-blue-600 shadow-md transition group-hover:bg-blue-600 group-hover:text-white">
                  <Eye size={17} />
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-slate-900">
                    {template.name}
                  </h3>

                  <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                    <Check size={13} />
                    Professional
                  </span>
                </div>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  {template.description}
                </p>

                <Link
                  to="/templates"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:gap-3"
                >
                  Explore design
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}

        </div>

        {/* Resume examples banner */}
        <div className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-r from-[#090D16] via-[#111C35] to-[#172554] p-6 sm:p-8">

          <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
                <Sparkles size={21} />
              </div>

              <div>
                <h3 className="font-bold text-white">
                  Need inspiration for your next resume?
                </h3>

                <p className="mt-2 max-w-lg text-xs leading-6 text-slate-300">
                  Explore resume examples across different
                  industries, roles, and career stages.
                </p>
              </div>
            </div>

            <Link
              to="/resume-examples"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1"
            >
              Browse Examples
              <ArrowRight size={16} />
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
};

export default TemplateGallery;
