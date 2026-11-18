
import {
  ArrowRight,
  Eye,
  FileText,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import { templatesPreviewData } from "../data";

const TemplatesPreview = () => {
  return (
    <section className="section bg-white">
      <div className="container">

        {/* Section heading */}
        <div className="section-header">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue-700">
            <Sparkles size={14} />
            RESUME TEMPLATES
          </span>

          <h2 className="section-title mt-5">
            Find a resume template
            <span className="text-blue-600"> that fits your career.</span>
          </h2>

          <p className="section-description">
            Choose from professionally designed resume layouts
            that help present your skills and experience clearly.
          </p>
        </div>

        {/* Templates grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templatesPreviewData.map((template) => (
            <div
              key={template.name}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              {/* Template preview */}
              <div className="relative flex h-[310px] items-center justify-center overflow-hidden bg-slate-100 p-6">
                <div className="h-full w-[210px] overflow-hidden rounded-md border border-slate-200 bg-white p-5 shadow-md transition duration-300 group-hover:scale-[1.03]">

                  {/* Document header */}
                  <div className="border-b-2 border-blue-600 pb-4">
                    <div className="h-3 w-28 rounded bg-slate-800" />
                    <div className="mt-2 h-2 w-20 rounded bg-slate-300" />
                    <div className="mt-2 h-2 w-32 rounded bg-slate-200" />
                  </div>

                  {/* Document sections */}
                  <div className="mt-5 space-y-3">
                    <div className="h-2 w-16 rounded bg-blue-600" />
                    <div className="h-1.5 w-full rounded bg-slate-200" />
                    <div className="h-1.5 w-full rounded bg-slate-200" />
                    <div className="h-1.5 w-4/5 rounded bg-slate-200" />
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="h-2 w-20 rounded bg-blue-600" />

                    {[1, 2].map((item) => (
                      <div key={item}>
                        <div className="h-2 w-24 rounded bg-slate-700" />
                        <div className="mt-2 h-1.5 w-16 rounded bg-slate-300" />
                        <div className="mt-2 h-1.5 w-full rounded bg-slate-200" />
                        <div className="mt-1.5 h-1.5 w-4/5 rounded bg-slate-200" />
                      </div>
                    ))}
                  </div>

                  <div className="mt-5">
                    <div className="h-2 w-16 rounded bg-blue-600" />
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {[1, 2, 3, 4].map((item) => (
                        <span
                          key={item}
                          className="h-4 w-10 rounded bg-blue-50"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Preview overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 opacity-0 transition duration-300 group-hover:bg-slate-900/10 group-hover:opacity-100">
                  <span className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-lg">
                    <Eye size={16} />
                    Preview Template
                  </span>
                </div>
              </div>

              {/* Template information */}
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-bold text-slate-900">
                    {template.name}
                  </h3>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    {template.category}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {template.description}
                </p>

                <Link
                  to="/templates"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:gap-3"
                >
                  Explore Template
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link to="/templates" className="btn btn-secondary">
            View All Templates
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TemplatesPreview;
