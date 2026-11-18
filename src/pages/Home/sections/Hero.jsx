
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Sparkles,
  Target,
  WandSparkles,
  ChevronDown,
  ArrowDown
} from "lucide-react";

const Hero = () => {
  const benefits = [
    "Easy to use",
    "Professional templates",
    "ATS-focused tools",
  ];

  const suggestions = [
    "Improve bullet points",
    "Add relevant keywords",
    "Strengthen your summary",
  ];

  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 250);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero-section" className="relative isolate overflow-hidden bg-gradient-to-br from-[#F0F7FF] via-white to-[#ECFAFC] pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-24">

      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="pointer-events-none absolute right-[38%] top-24 -z-10 h-48 w-48 rounded-full bg-indigo-100/20 blur-3xl" />

      <div className="container relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">

            {/* BADGE */}
            <div className="hero-animate inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-2 text-xs font-bold text-blue-700 shadow-sm shadow-blue-100/50 sm:text-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                <Sparkles size={13} />
              </span>
              AI-powered resume optimization
            </div>

            {/* HEADING */}
            <h1 className="hero-animate hero-delay-1 mt-7 text-[36px] font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-[58px]">
              Build an ATS-ready resume.

              <span className="mt-2 block bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Get closer to your next opportunity.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="hero-animate hero-delay-2 mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
              Create a professional resume with AI-powered writing
              assistance, modern templates, and tools designed to
              help you present your experience with confidence.
            </p>

            {/* CTA BUTTONS */}
            <div className="hero-animate hero-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/resume-builder"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-200/70"
              >
                Build My Resume Free

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/templates"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-100 bg-white/90 px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/70 hover:text-blue-700"
              >
                <FileText size={17} />
                View Templates
              </Link>
            </div>

            {/* BENEFITS */}
            <div className="hero-animate hero-delay-4 mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {benefits.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 sm:text-sm"
                >
                  <CheckCircle2
                    size={16}
                    className="shrink-0 text-blue-600"
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT PRODUCT PREVIEW */}
          <div className="relative mx-auto w-full max-w-[540px]">

            {/* SOFT BACKGROUND GLOW */}
            <div className="pointer-events-none absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-200/40 via-white/30 to-cyan-200/40 blur-2xl" />

            {/* MAIN RESUME PREVIEW */}
            <div className="hero-preview-float rounded-2xl border border-blue-100/80 bg-white/95 p-4 shadow-[0_20px_60px_rgba(37,99,235,0.12)] transition-shadow duration-500 hover:shadow-[0_25px_70px_rgba(37,99,235,0.17)] sm:rounded-3xl sm:p-6">

              {/* PREVIEW HEADER */}
              <div className="flex items-center justify-between border-b border-blue-50 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-200/60">
                    <FileText size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      ResumePilot
                    </p>
                    <p className="text-xs text-slate-500">
                      Resume workspace
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-700 sm:text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Preview
                </span>
              </div>

              <div className="grid gap-4 pt-5 sm:grid-cols-[1fr_165px] sm:gap-5">

                {/* RESUME DOCUMENT */}
                <div className="rounded-xl border border-blue-100/80 bg-gradient-to-br from-[#F1F6FF] to-[#F6FBFF] p-3 sm:p-4">
                  <div className="rounded-lg border border-slate-100 bg-white p-4 shadow-sm">

                    {/* DOCUMENT HEADER */}
                    <div className="border-b border-slate-200 pb-3">
                      <div className="h-3 w-28 rounded bg-slate-800" />

                      <div className="mt-2 h-2 w-36 rounded bg-blue-200" />

                      <div className="mt-3 h-1.5 w-full rounded bg-slate-100" />

                      <div className="mt-1.5 h-1.5 w-4/5 rounded bg-slate-100" />
                    </div>

                    {/* EXPERIENCE */}
                    <div className="mt-4">
                      <p className="text-[9px] font-bold tracking-widest text-blue-700">
                        EXPERIENCE
                      </p>

                      <div className="mt-2 h-2 w-3/4 rounded bg-slate-300" />

                      <div className="mt-2 h-1.5 w-full rounded bg-slate-100" />

                      <div className="mt-1.5 h-1.5 w-full rounded bg-slate-100" />

                      <div className="mt-1.5 h-1.5 w-4/5 rounded bg-slate-100" />
                    </div>

                    {/* EDUCATION */}
                    <div className="mt-4">
                      <p className="text-[9px] font-bold tracking-widest text-blue-700">
                        EDUCATION
                      </p>

                      <div className="mt-2 h-2 w-2/3 rounded bg-slate-300" />

                      <div className="mt-2 h-1.5 w-full rounded bg-slate-100" />
                    </div>

                    {/* SKILLS */}
                    <div className="mt-4">
                      <p className="text-[9px] font-bold tracking-widest text-blue-700">
                        SKILLS
                      </p>

                      <div className="mt-2 flex flex-wrap gap-1.5">
                        <div className="h-4 w-12 rounded bg-blue-50" />
                        <div className="h-4 w-14 rounded bg-blue-50" />
                        <div className="h-4 w-10 rounded bg-cyan-50" />
                        <div className="h-4 w-16 rounded bg-blue-50" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ATS & AI PANELS */}
                <div className="flex flex-col gap-3">

                  {/* ATS SCORE */}
                  <div className="rounded-xl border border-emerald-100 bg-gradient-to-br from-[#ECFDF5] to-[#F0FDF9] p-4">
                    <div className="flex items-center gap-2 text-emerald-700">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/80">
                        <Target size={16} />
                      </span>

                      <span className="text-[10px] font-bold tracking-wide">
                        ATS SCORE
                      </span>
                    </div>

                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-4xl font-bold tracking-tight text-slate-900">
                        94
                      </span>

                      <span className="text-sm font-medium text-slate-500">
                        /100
                      </span>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-emerald-100">
                      <div className="hero-score-progress h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500" />
                    </div>

                    <p className="mt-2 text-[10px] font-medium text-emerald-700">
                      Illustrative score
                    </p>
                  </div>

                  {/* AI SUGGESTIONS */}
                  <div className="hero-card-float rounded-xl border border-blue-100/80 bg-gradient-to-br from-white to-[#F5F9FF] p-4 shadow-sm">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <WandSparkles size={16} />
                      </span>

                      <p className="text-xs font-bold text-slate-800">
                        AI Suggestions
                      </p>
                    </div>

                    <div className="mt-4 space-y-3">
                      {suggestions.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="mt-0.5 shrink-0 text-emerald-500"
                          />

                          <span className="text-[10px] leading-4 text-slate-600">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM PREVIEW MESSAGE */}
              <div className="mt-5 flex items-center justify-between rounded-xl border border-blue-100/70 bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
                    <Sparkles size={15} />
                  </span>

                  <span className="text-[11px] font-bold text-blue-950 sm:text-xs">
                    Your next career move starts here
                  </span>
                </div>

                <ArrowRight size={16} className="text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* FIXED SCROLL DOWN INDICATOR */}
      <button
        type="button"
        aria-label="Scroll to next section"
        onClick={() => {
          const hero = document.getElementById("hero-section");
          const nextSection = hero?.nextElementSibling;

          if (nextSection) {
            const navbarHeight =
              document.querySelector("header")?.offsetHeight || 0;

            const targetPosition =
              nextSection.getBoundingClientRect().top +
              window.scrollY -
              navbarHeight;

            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            });
          }
        }}
        className={`group fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-2 transition-all duration-300 ${
          showScrollIndicator
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`} >
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 transition-colors duration-300 group-hover:text-blue-600">
          Scroll to explore
        </span>

        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-cyan-500/30">
          <ArrowDown
            size={20}
            strokeWidth={2.2}
            className="transition-transform duration-300 group-hover:translate-y-1"
          />
        </span>
      </button>
    </section>
  );
};

export default Hero;
