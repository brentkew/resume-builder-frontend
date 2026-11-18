
import {
  FileCheck2,
  LayoutTemplate,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const trustItems = [
  {
    icon: FileCheck2,
    title: "Professional Resumes",
    description: "Polished layouts for your next opportunity.",
  },
  {
    icon: Sparkles,
    title: "AI Writing Assistance",
    description: "Present your skills with stronger wording.",
  },
  {
    icon: ShieldCheck,
    title: "ATS-Focused Tools",
    description: "Create clear, readable resume content.",
  },
  {
    icon: LayoutTemplate,
    title: "Modern Templates",
    description: "Choose a design that fits your career.",
  },
];

const TrustSection = () => {
  return (
    <section className="relative border-y border-slate-200/80 bg-white py-6 sm:py-8">
      <div className="container">

        {/* Section label */}
        <div className="mb-5 flex items-center justify-center gap-3 sm:mb-6">
          <span className="h-px w-8 bg-blue-200" />

          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-[11px]">
            Everything you need to stand out
          </p>

          <span className="h-px w-8 bg-blue-200" />
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative flex min-w-0 items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-blue-100/60 sm:gap-4 sm:p-4"
              >
                {/* Brand gradient hover accent */}
                <div className="absolute inset-x-0 top-0 h-[2px] scale-x-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-transform duration-300 group-hover:scale-x-100" />

                {/* Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-200 group-hover:bg-blue-100 sm:h-12 sm:w-12">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-[11px] font-bold leading-5 text-slate-900 sm:text-sm">
                    {item.title}
                  </h3>

                  <p className="mt-0.5 text-[10px] leading-4 text-slate-500 sm:text-xs sm:leading-5">
                    {item.description}
                  </p>
                </div>

                {/* Hover icon */}
                <ArrowUpRight
                  size={15}
                  className="absolute right-2 top-2 text-blue-400 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
