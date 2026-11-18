
import {
  FileText,
  Sparkles,
  Target,
  LayoutTemplate,
  CheckCircle2,
  Download,
  ArrowUpRight,
} from "lucide-react";

import { featuresData } from "../data";

const icons = [
  LayoutTemplate,
  Sparkles,
  Target,
  FileText,
  CheckCircle2,
  Download,
];

const Features = () => {
  return (
    <section className="section bg-white">
      <div className="container">

        {/* Section heading */}
        <div className="section-header">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue-700">
            <Sparkles size={14} />
            POWERFUL RESUME TOOLS
          </span>

          <h2 className="section-title mt-5">
            Everything you need to
            <span className="text-blue-600"> build a better resume.</span>
          </h2>

          <p className="section-description">
            From professional templates to AI-powered suggestions,
            get everything you need to create a resume that stands out.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-slate-300 transition group-hover:text-blue-600"
                  />
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {feature.description}
                </p>

                <div className="absolute -bottom-16 -right-16 h-36 w-36 rounded-full bg-blue-50/70 transition duration-300 group-hover:scale-125" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;
