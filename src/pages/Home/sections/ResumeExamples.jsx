
import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Code,
  Megaphone,
  Stethoscope,
  BarChart3,
  FileText,
} from "lucide-react";

import { Link } from "react-router-dom";
import { resumeExamplesData } from "../data";

const icons = [
  Code,
  BarChart3,
  Megaphone,
  Stethoscope,
  BriefcaseBusiness,
  GraduationCap,
];

const ResumeExamples = () => {
  return (
    <section className="section bg-slate-50">
      <div className="container">

        {/* Section heading */}
        <div className="section-header">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue-700">
            <FileText size={14} />
            RESUME EXAMPLES
          </span>

          <h2 className="section-title mt-5">
            Find inspiration for your
            <span className="text-blue-600"> next career move.</span>
          </h2>

          <p className="section-description">
            Explore practical resume examples across different industries
            and career levels to help you present your experience effectively.
          </p>
        </div>

        {/* Examples grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resumeExamplesData.map((example, index) => {
            const Icon = icons[index % icons.length];

            return (
              <Link
                key={example.title}
                to="/resume-examples"
                className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={23} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-slate-900">
                      {example.title}
                    </h3>

                    <ArrowRight
                      size={18}
                      className="mt-0.5 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
                    />
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {example.description}
                  </p>

                  <span className="mt-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {example.category}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/resume-examples"
            className="btn btn-secondary"
          >
            Explore All Resume Examples
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ResumeExamples;
