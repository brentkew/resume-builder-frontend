
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#090D16] py-20 sm:py-24">

      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[100px]" />
        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-cyan-500/15 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.10),transparent_65%)]" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-cyan-300 shadow-lg shadow-blue-900/20">
            <WandSparkles size={27} />
          </div>

          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold text-cyan-300">
            <Sparkles size={14} />
            YOUR NEXT CAREER MOVE STARTS HERE
          </span>

          <h2 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your experience deserves
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              a better presentation.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Build a professional resume, highlight your strengths,
            and take the next step in your career with confidence.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/resume-builder"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-1 hover:shadow-xl sm:w-auto"
            >
              Build My Resume
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/templates"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10 sm:w-auto"
            >
              Explore Templates
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-cyan-400" />
              Professional designs
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-cyan-400" />
              Easy customization
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-cyan-400" />
              Career-focused tools
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
