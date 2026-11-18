
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Sparkles,
  Zap,
} from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Get started with essential resume tools.",
    price: "$0",
    period: "forever",
    features: [
      "Basic resume templates",
      "Resume editing",
      "PDF export",
      "Essential formatting",
    ],
    button: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    description: "Build a stronger resume with advanced tools.",
    price: "$9",
    period: "per month",
    features: [
      "All premium templates",
      "AI writing assistance",
      "ATS resume analysis",
      "Unlimited resume downloads",
      "Advanced customization",
    ],
    button: "Choose Pro",
    featured: true,
  },
  {
    name: "Career",
    description: "More flexibility for your job search.",
    price: "$49",
    period: "sample one-time price",
    features: [
      "Everything in Pro",
      "Multiple resume versions",
      "Cover letter tools",
      "Career-focused resources",
    ],
    button: "Explore Career",
    featured: false,
  },
];

const PricingPreview = () => {
  return (
    <section className="section bg-white">
      <div className="container">

        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1.5 text-xs font-bold text-cyan-700">
            <Zap size={14} />
            SIMPLE PRICING
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Choose the right plan for
            <span className="text-blue-600"> your next step.</span>
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-500">
            Start with the essentials and explore more tools
            as your career needs grow.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl items-stretch gap-5 md:grid-cols-3">

          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "border-blue-500 bg-gradient-to-b from-blue-50 to-white shadow-xl shadow-blue-100/60"
                  : "border-slate-200 bg-white shadow-sm hover:border-blue-200 hover:shadow-lg"
              }`}
            >

              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                  Most Popular
                </span>
              )}

              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">
                  {plan.name}
                </h3>

                {plan.featured && (
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Sparkles size={18} />
                  </div>
                )}
              </div>

              <p className="mt-2 min-h-10 text-xs leading-5 text-slate-500">
                {plan.description}
              </p>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                  {plan.price}
                </span>
                <span className="text-xs text-slate-500">
                  {plan.period}
                </span>
              </div>

              <div className="my-6 h-px bg-slate-200" />

              <p className="text-xs font-bold text-slate-800">
                What's included
              </p>

              <ul className="mt-4 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5"
                  >
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${
                        plan.featured ? "text-blue-600" : "text-emerald-600"
                      }`}
                    />
                    <span className="text-xs leading-5 text-slate-600">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/pricing"
                className={`mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${
                  plan.featured
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-blue-200 hover:shadow-lg"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {plan.button}
                <ArrowRight size={16} />
              </Link>

            </article>
          ))}

        </div>

        <p className="mt-6 text-center text-[10px] text-slate-400">
          Sample pricing for design preview only. Final plans and prices
          should be confirmed before launch.
        </p>

      </div>
    </section>
  );
};

export default PricingPreview;
