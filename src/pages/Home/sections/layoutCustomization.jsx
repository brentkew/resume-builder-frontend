import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeftRight,
  Check,
  Columns2,
  FileText,
  LayoutList,
  Sparkles,
  Eye,
} from "lucide-react";

import layoutColumnImg from "../../../assets/images/layout_customization.png";
import layoutColumnImg2 from "../../../assets/images/layout_customization2.png";

const layoutFeatures = [
  {
    icon: LayoutList,
    title: "Single column layout",
    description:
      "A clean, traditional structure designed for easy reading and straightforward resume scanning.",
    color: "pink",
  },
  {
    icon: Columns2,
    title: "Double column layout",
    description:
      "A modern, space-efficient design that organizes your information into two balanced columns.",
    color: "violet",
  },
];

const LayoutCustomization = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50/70 py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left: Resume Layout Showcase */}
          <div className="relative lg:order-1">

            {/* Background decoration */}
            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-pink-200/40 blur-3xl" />
            <div className="absolute -bottom-10 right-0 h-40 w-40 rounded-full bg-violet-200/40 blur-3xl" />

            <div className="relative rounded-3xl border border-slate-200/80 bg-white/80 p-3 shadow-xl shadow-slate-200/50 backdrop-blur-sm sm:p-5">

              {/* Showcase Header */}
              <div className="mb-5 flex items-center justify-between gap-3 px-1">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 text-white shadow-md shadow-pink-200/60">
                    <LayoutList size={19} />
                  </div>

                  <div>
                    <h3 className="text-sm font-extrabold text-slate-800">
                      Resume Preview
                    </h3>
                    <p className="mt-0.5 text-[11px] text-slate-400">
                      Explore your design possibilities
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-emerald-600">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  Live Preview
                </span>
              </div>

              {/* Resume Preview Cards */}
              <div className="relative rounded-2xl bg-gradient-to-br from-pink-50 via-white to-violet-50 p-3 sm:p-5">

                {/* Decorative circles */}
                <div className="absolute left-0 top-10 h-24 w-24 rounded-full bg-pink-100/60 blur-2xl" />
                <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-violet-100/60 blur-2xl" />

                <div className="relative grid grid-cols-2 items-center gap-3 sm:gap-5">

                  {/* Single Column Card */}
                  <div className="group relative min-w-0 -rotate-2 transition-all duration-500 hover:z-20 hover:rotate-0 hover:scale-[1.03]">

                    <div className="overflow-hidden rounded-xl border border-pink-200/80 bg-white shadow-lg shadow-pink-100/70">

                      {/* Card Top Label */}
                      <div className="flex items-center justify-between border-b border-pink-100 bg-white px-2.5 py-2 sm:px-3">
                        <span className="truncate text-[10px] font-extrabold text-pink-600 sm:text-xs">
                          Single Column
                        </span>

                        <span className="shrink-0 rounded-md bg-pink-50 px-1.5 py-1 text-[8px] font-bold text-pink-600 sm:text-[9px]">
                          01
                        </span>
                      </div>

                      {/* Image */}
                      <div className="relative flex h-[260px] items-center justify-center overflow-hidden bg-gradient-to-b from-pink-50/70 to-white p-2 sm:h-[340px] sm:p-3">
                        <img
                          src={layoutColumnImg}
                          alt="Single column resume layout preview"
                          className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                          loading="lazy"
                        />

                        {/* Image overlay label */}
                        <div className="absolute bottom-2 left-2 right-2 rounded-lg border border-white/80 bg-white/90 px-2 py-2 shadow-sm backdrop-blur-md sm:bottom-3 sm:left-3 sm:right-3 sm:px-3">
                          <div className="flex items-center gap-1.5">
                            <LayoutList size={12} className="shrink-0 text-pink-500" />
                            <span className="truncate text-[9px] font-bold text-slate-700 sm:text-[11px]">
                              Single Column
                            </span>
                          </div>
                          <p className="mt-0.5 text-[8px] text-slate-400 sm:text-[9px]">
                            Clean & professional
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Double Column Card */}
                  <div className="group relative z-10 min-w-0 rotate-2 transition-all duration-500 hover:z-20 hover:rotate-0 hover:scale-[1.03]">

                    <div className="overflow-hidden rounded-xl border border-violet-200/80 bg-white shadow-lg shadow-violet-100/70">

                      {/* Card Top Label */}
                      <div className="flex items-center justify-between border-b border-violet-100 bg-white px-2.5 py-2 sm:px-3">
                        <span className="truncate text-[10px] font-extrabold text-violet-600 sm:text-xs">
                          Double Column
                        </span>

                        <span className="shrink-0 rounded-md bg-violet-50 px-1.5 py-1 text-[8px] font-bold text-violet-600 sm:text-[9px]">
                          02
                        </span>
                      </div>

                      {/* Image */}
                      <div className="relative flex h-[260px] items-center justify-center overflow-hidden bg-gradient-to-b from-violet-50/70 to-white p-2 sm:h-[340px] sm:p-3">
                        <img
                          src={layoutColumnImg2}
                          alt="Double column resume layout preview"
                          className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                          loading="lazy"
                        />

                        {/* Image overlay label */}
                        <div className="absolute bottom-2 left-2 right-2 rounded-lg border border-white/80 bg-white/90 px-2 py-2 shadow-sm backdrop-blur-md sm:bottom-3 sm:left-3 sm:right-3 sm:px-3">
                          <div className="flex items-center gap-1.5">
                            <Columns2 size={12} className="shrink-0 text-violet-500" />
                            <span className="truncate text-[9px] font-bold text-slate-700 sm:text-[11px]">
                              Double Column
                            </span>
                          </div>
                          <p className="mt-0.5 text-[8px] text-slate-400 sm:text-[9px]">
                            Modern & organized
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Floating Switch Indicator */}
                  <div className="absolute left-1/2 top-1/2 z-30 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-slate-900 text-white shadow-lg sm:h-11 sm:w-11">
                    <ArrowLeftRight size={17} />
                  </div>

                </div>

                {/* Bottom Preview Caption */}
                <div className="relative mt-5 flex items-center justify-center gap-2">
                  <Sparkles size={13} className="text-pink-500" />
                  <p className="text-center text-[10px] font-semibold text-slate-500 sm:text-xs">
                    One resume. Two ways to stand out.
                  </p>
                </div>
              </div>

              {/* Showcase Footer */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1">
                <div className="flex items-center gap-2 text-[10px] font-medium text-slate-500 sm:text-xs">
                  <Eye size={14} className="text-violet-500" />
                  Visualize your resume style
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 sm:text-xs">
                  <Check size={14} />
                  Flexible layouts
                </div>
              </div>
            </div>

            {/* Floating Feature Card */}
            <div className="absolute -bottom-5 -left-2 z-30 hidden items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 shadow-lg shadow-slate-200/60 sm:flex lg:-left-7">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-600">
                <Check size={19} />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-800">
                  Your choice, your style
                </p>
                <p className="mt-0.5 text-[10px] text-slate-400">
                  Personalized resume structure
                </p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="max-w-xl lg:order-2">

            <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-600">
              <Sparkles size={14} />
              PERSONALIZE YOUR RESUME
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[42px]">
              Your resume.
              <br />
              Your preferred
              <span className="text-pink-600"> layout.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Choose how your professional story comes together. Switch
              between single-column and double-column layouts to create a
              resume that matches your style and career goals.
            </p>

            {/* Layout Options */}
            <div className="mt-8 space-y-4">
              {layoutFeatures.map((feature) => {
                const Icon = feature.icon;
                const isPink = feature.color === "pink";

                return (
                  <div
                    key={feature.title}
                    className={`group flex gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                      isPink
                        ? "hover:border-pink-200"
                        : "hover:border-violet-200"
                    }`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                        isPink
                          ? "bg-pink-50 text-pink-600"
                          : "bg-violet-50 text-violet-600"
                      }`}
                    >
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold text-slate-900">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                        {feature.description}
                      </p>
                    </div>

                    <Check
                      size={17}
                      className={`mt-1 shrink-0 ${
                        isPink ? "text-pink-500" : "text-violet-500"
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            {/* Supporting Note */}
            <div className="mt-5 flex items-start gap-2 text-xs leading-5 text-slate-500">
              <FileText
                size={15}
                className="mt-0.5 shrink-0 text-emerald-500"
              />
              <span>
                Customize your resume structure to suit your content and
                presentation preferences.
              </span>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/resume-builder"
                className="group inline-flex items-center gap-2 rounded-xl bg-pink-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-pink-200/60 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-700 hover:shadow-pink-300/60"
              >
                Customize your resume
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <span className="text-xs font-medium text-slate-400">
                Make it yours, your way.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LayoutCustomization;