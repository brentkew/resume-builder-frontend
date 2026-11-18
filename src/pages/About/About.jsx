
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Target,
  Lightbulb,
  Heart,
  ShieldCheck,
  Zap,
  FileText,
  CheckCircle2,
  Users,
  Rocket,
  BrainCircuit,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Purpose-driven",
    description:
      "Everything we build is focused on helping people move closer to their career goals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation first",
    description:
      "We use thoughtful AI technology to make resume creation smarter, simpler, and more effective.",
  },
  {
    icon: Heart,
    title: "People over complexity",
    description:
      "Creating a professional resume should feel empowering, not overwhelming.",
  },
  {
    icon: ShieldCheck,
    title: "Built on trust",
    description:
      "We believe your career information deserves care, transparency, and responsible handling.",
  },
];

const features = [
  {
    icon: BrainCircuit,
    title: "AI-powered writing",
    description:
      "Turn your experience into clear, compelling resume content with intelligent writing assistance.",
  },
  {
    icon: FileText,
    title: "Professional templates",
    description:
      "Choose from thoughtfully designed resume layouts for different careers and industries.",
  },
  {
    icon: CheckCircle2,
    title: "ATS-friendly approach",
    description:
      "Create structured resumes designed to be easier for applicant tracking systems to read.",
  },
  {
    icon: TrendingUp,
    title: "Career-focused tools",
    description:
      "Improve your resume, identify opportunities, and present your strengths with confidence.",
  },
];

function SectionLabel({ children }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-blue-700">
      <Sparkles size={13} />
      {children}
    </span>
  );
}

function About() {
  return (
    <main className="overflow-x-clip bg-white text-slate-700">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-[#F0F7FF] via-white to-[#ECFAFC] px-4 py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <SectionLabel>ABOUT RESUMEPILOT</SectionLabel>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Helping you turn your
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              experience into opportunity.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            We believe everyone deserves a resume that reflects their
            potential. ResumePilot combines thoughtful design and AI-powered
            tools to make creating a professional resume easier.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/resume-builder"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Build your resume
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/templates"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50"
            >
              Explore templates
            </Link>
          </div>

          {/* Hero visual */}
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="rounded-2xl border border-blue-100 bg-white p-3 shadow-2xl shadow-blue-900/10 sm:p-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <FileText size={16} />
                  </div>
                  <span className="text-sm font-bold text-slate-900">
                    ResumePilot
                  </span>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Your career workspace
                </span>
              </div>

              <div className="grid gap-4 py-6 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-5 text-left">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <BrainCircuit size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    AI Assistance
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Write with clarity and confidence.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50 p-5 text-left">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                    <FileText size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Better Design
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Present your experience professionally.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50 p-5 text-left">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                    <Rocket size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Career Ready
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Take the next step in your career.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel>OUR STORY</SectionLabel>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A better way to tell your professional story.
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
              <p>
                Building a resume can be one of the most important parts of
                a job search, but it is not always easy. Knowing what to
                write, how to structure your experience, and how to present
                your strengths can feel overwhelming.
              </p>

              <p>
                ResumePilot was created around a simple idea: professional
                resume building should be accessible, intuitive, and
                empowering.
              </p>

              <p>
                By bringing together AI-powered assistance, professional
                templates, and practical career tools, we aim to help people
                communicate their value and approach new opportunities with
                greater confidence.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-100 to-cyan-100 opacity-70 blur-xl" />

            <div className="relative rounded-3xl border border-blue-100 bg-gradient-to-br from-[#F0F7FF] to-[#ECFAFC] p-7 sm:p-10">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <Target size={27} />
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Our mission
              </span>

              <h3 className="mt-4 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
                Make professional resume building simpler, smarter, and more
                accessible.
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Your experience has value. Our goal is to help you present it
                in a way that makes that value easier to recognize.
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-blue-200/70 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600">
                  <Sparkles size={19} />
                </div>
                <span className="text-sm font-semibold text-slate-800">
                  Built to support your next career move.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="border-y border-slate-100 bg-[#F8FAFC] px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionLabel>WHAT WE BELIEVE</SectionLabel>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              The values behind everything we build.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              Our approach is guided by a few simple principles that shape
              how we design, develop, and improve ResumePilot.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={21} />
                  </div>

                  <h3 className="text-base font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionLabel>WHY RESUMEPILOT</SectionLabel>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to move forward.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              We bring the essential parts of resume creation together in
              one straightforward workspace.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 sm:p-7"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="border-t border-slate-100 bg-gradient-to-br from-[#F0F7FF] via-white to-[#ECFAFC] px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <Users size={25} />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Your next opportunity starts with your story.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Take the next step with a resume that communicates your
            experience, highlights your strengths, and reflects your
            potential.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/resume-builder"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Create your resume
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/templates"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50"
            >
              Browse templates
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
