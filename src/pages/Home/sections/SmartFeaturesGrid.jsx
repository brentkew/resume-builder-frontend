
const features = [
  {
    number: "02",
    title: "AI-Powered Content Enhancer",
    description: "Turn basic bullet points into impactful achievements.",
    color: "violet",
    icon: (
      <>
        <path d="M8 12h19M8 19h13M8 26h11" />
        <path d="m30 5 1.8 5.2L37 12l-5.2 1.8L30 19l-1.8-5.2L23 12l5.2-1.8L30 5Z" />
        <path d="m34 23 1.2 3.8L39 28l-3.8 1.2L34 33l-1.2-3.8L29 28l3.8-1.2L34 23Z" />
      </>
    ),
  },
  {
    number: "03",
    title: "Drag-and-Drop Rearranging",
    description: "Organize your resume sections in the right order.",
    color: "cyan",
    icon: (
      <>
        <rect x="8" y="7" width="22" height="9" rx="2" />
        <rect x="8" y="25" width="22" height="9" rx="2" />
        <path d="m34 14 4 4 4-4M38 18V7M34 27l4-4 4 4M38 23v11" />
      </>
    ),
  },
  {
    number: "04",
    title: "Flexible Templates & Layouts",
    description: "Choose from professional single and multi-column layouts.",
    color: "blue",
    icon: (
      <>
        <rect x="6" y="6" width="36" height="30" rx="3" />
        <path d="M6 15h36M18 15v21M30 15v21" />
      </>
    ),
  },
  {
    number: "05",
    title: "Typography & Font Styles",
    description: "Make your content easier to read with refined typography.",
    color: "violet",
    icon: (
      <>
        <path d="M7 35 19 9l12 26M12 25h14" />
        <path d="M30 15h12M36 15v20M32 35h8" />
      </>
    ),
  },
  {
    number: "06",
    title: "Smart Spacing Control",
    description: "Fine-tune spacing to make the most of every page.",
    color: "cyan",
    icon: (
      <>
        <path d="M8 12h28M8 32h28" />
        <path d="m22 5-5 5 5 5M22 5l5 5-5 5" />
        <path d="m22 39-5-5 5-5M22 39l5-5-5-5" />
        <rect x="12" y="18" width="20" height="8" rx="2" />
      </>
    ),
  },
  {
    number: "07",
    title: "Personal Branding Controls",
    description: "Customize colors, profile photos, and professional links.",
    color: "blue",
    icon: (
      <>
        <path d="M23 7a16 16 0 1 0 0 32h3a4 4 0 0 0 0-8h-2a3 3 0 0 1 0-6h5a9 9 0 0 0 9-9c0-5-7-9-15-9Z" />
        <circle cx="15" cy="17" r="2" />
        <circle cx="24" cy="13" r="2" />
        <circle cx="33" cy="19" r="2" />
      </>
    ),
  },
  {
    number: "08",
    title: "Custom Footer & Page Numbers",
    description: "Control footer content and page number alignment.",
    color: "violet",
    icon: (
      <>
        <rect x="10" y="5" width="27" height="35" rx="3" />
        <path d="M16 13h15M16 19h15M16 25h10M14 32h19" />
      </>
    ),
  },
];

const iconStyles = {
  blue: "bg-blue-50 text-blue-600",
  cyan: "bg-cyan-50 text-cyan-600",
  violet: "bg-violet-50 text-violet-600",
};

const FeatureIcon = ({ children, color = "blue", large = false }) => (
  <div
    className={`flex shrink-0 items-center justify-center rounded-xl ${
      iconStyles[color]
    } ${large ? "h-14 w-14" : "h-10 w-10"}`}
  >
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={large ? "h-8 w-8" : "h-6 w-6"}
      aria-hidden="true"
    >
      {children}
    </svg>
  </div>
);

const SmartFeaturesGrid = () => {
  return (
    <section className="overflow-hidden bg-[#F8FAFC] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">

        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600">
              The ResumePilot Advantage
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl">
              Everything to build a
              <span className="text-blue-600"> stronger resume.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
              Eight intelligent tools that help you create, refine,
              and optimize your professional story.
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
              8
            </span>
            <div>
              <p className="text-xs font-bold text-slate-800">
                Smart features
              </p>
              <p className="mt-0.5 text-[11px] text-slate-500">
                In one powerful editor
              </p>
            </div>
          </div>
        </div>

        {/* Feature layout */}
        <div className="grid items-stretch gap-4 lg:grid-cols-12">

          {/* Featured ATS card */}
          <div className="relative flex flex-col overflow-hidden rounded-3xl bg-[#0F1B35] p-6 text-white sm:p-8 lg:col-span-5">

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/[0.06]" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/[0.06]" />

            <div className="relative flex flex-1 flex-col">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-[10px] font-bold tracking-wider text-cyan-300">
                  01 · ANALYZE
                </span>
                <span className="text-[11px] font-medium text-slate-400">
                  Core feature
                </span>
              </div>

              <div className="mt-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
                  <rect x="9" y="5" width="25" height="32" rx="3" />
                  <path d="M15 13h12M15 19h8M15 25h6" />
                  <circle cx="30" cy="29" r="7" />
                  <path d="m35 34 4 4" />
                </svg>
              </div>

              <div className="mt-6 max-w-sm">
                <h3 className="text-[22px] font-bold leading-[1.3] tracking-tight text-white sm:text-[25px]">
                  Real-Time ATS Score
                  <span className="block text-cyan-300">
                    & Keyword Checker
                  </span>
                </h3>

                <p className="mt-4 text-[13px] leading-7 text-slate-300">
                  Check your resume against ATS requirements, discover
                  missing keywords, and improve your chances of getting
                  noticed by recruiters.
                </p>
              </div>

              {/* ATS preview */}
              <div className="mt-auto pt-8">
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-200">
                      Resume analysis
                    </span>
                    <span className="rounded-full bg-cyan-300/10 px-2.5 py-1 text-[9px] font-semibold text-cyan-300">
                      Preview
                    </span>
                  </div>

                  <div className="mt-5 flex items-center gap-4">
                    <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border-[3px] border-cyan-400 text-lg font-bold text-white">
                      85
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-white">
                        ATS compatibility
                      </p>
                      <p className="mt-1 text-[10px] leading-5 text-slate-400">
                        Keyword and formatting overview
                      </p>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[85%] rounded-full bg-cyan-400" />
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 border-t border-white/10 pt-3 text-[10px] text-slate-400">
                    Illustrative score preview
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Other seven features */}
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">

            {features.map((feature) => (
              <article
                key={feature.number}
                className="group relative flex min-h-[176px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(37,99,235,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <FeatureIcon color={feature.color}>
                    {feature.icon}
                  </FeatureIcon>

                  <span className="text-[11px] font-semibold tracking-wider text-slate-300 transition-colors group-hover:text-blue-500">
                    {feature.number}
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="text-[14px] font-bold leading-5 tracking-tight text-slate-900 transition-colors group-hover:text-blue-700">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-[12px] leading-[1.7] text-slate-500">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-5 right-5 h-[2px] origin-left scale-x-0 rounded-full bg-blue-500 transition-transform duration-300 group-hover:scale-x-100" />
              </article>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartFeaturesGrid;
