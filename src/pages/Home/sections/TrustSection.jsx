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
    color: "blue",
  },
  {
    icon: Sparkles,
    title: "AI Writing Assistance",
    description: "Present your skills with stronger wording.",
    color: "pink",
  },
  {
    icon: ShieldCheck,
    title: "ATS-Focused Tools",
    description: "Create clear, readable resume content.",
    color: "emerald",
  },
  {
    icon: LayoutTemplate,
    title: "Modern Templates",
    description: "Choose a design that fits your career.",
    color: "violet",
  },
];

const colorStyles = {
  blue: {
    icon: "border-blue-100 bg-blue-50 text-blue-600 group-hover:bg-blue-100",
    accent: "from-blue-400 to-blue-600",
    border: "hover:border-blue-200",
    shadow: "hover:shadow-blue-100/60",
    arrow: "text-blue-500",
  },
  pink: {
    icon: "border-pink-100 bg-pink-50 text-pink-600 group-hover:bg-pink-100",
    accent: "from-pink-400 to-rose-500",
    border: "hover:border-pink-200",
    shadow: "hover:shadow-pink-100/60",
    arrow: "text-pink-500",
  },
  emerald: {
    icon: "border-emerald-100 bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100",
    accent: "from-emerald-400 to-teal-500",
    border: "hover:border-emerald-200",
    shadow: "hover:shadow-emerald-100/60",
    arrow: "text-emerald-500",
  },
  violet: {
    icon: "border-violet-100 bg-violet-50 text-violet-600 group-hover:bg-violet-100",
    accent: "from-violet-400 to-purple-600",
    border: "hover:border-violet-200",
    shadow: "hover:shadow-violet-100/60",
    arrow: "text-violet-500",
  },
};

const TrustSection = () => {
  return (
    <section className="relative border-y border-slate-200/80 bg-white py-6 sm:py-8">
      <div className="container">

        {/* Section label */}
        <div className="mb-5 flex items-center justify-center gap-3 sm:mb-6">
          <span className="h-px w-8 bg-pink-200" />

          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 sm:text-[11px]">
            Everything you need to stand out
          </p>

          <span className="h-px w-8 bg-pink-200" />
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;
            const colors = colorStyles[item.color];

            return (
              <div
                key={item.title}
                className={`group relative flex min-w-0 items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-slate-50/60 p-3.5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg sm:gap-4 sm:p-4 ${colors.border} ${colors.shadow}`}
              >
                {/* Colored hover accent */}
                <div
                  className={`absolute inset-x-0 top-0 h-[2px] scale-x-0 bg-gradient-to-r ${colors.accent} transition-transform duration-300 group-hover:scale-x-100`}
                />

                {/* Icon */}
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110 sm:h-12 sm:w-12 ${colors.icon}`}
                >
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
                  className={`absolute right-2 top-2 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 ${colors.arrow}`}
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