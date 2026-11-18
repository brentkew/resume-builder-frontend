
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

const faqs = [
  {
    question: "What is ResumePilot?",
    answer:
      "ResumePilot is a resume creation platform designed to help you build, customize, and organize professional resumes using modern templates and writing tools.",
  },
  {
    question: "Are the resume templates ATS-friendly?",
    answer:
      "Our templates are designed with readable layouts and clear structures to support applicant tracking system compatibility. However, no template can guarantee a specific ATS result.",
  },
  {
    question: "Can I download my resume as a PDF?",
    answer:
      "PDF export is part of the planned resume workflow. Available download options will depend on the final product features and selected plan.",
  },
  {
    question: "Can AI help me improve my resume?",
    answer:
      "AI writing assistance can help refine descriptions, improve clarity, and suggest stronger ways to present your experience. Always review suggestions for accuracy.",
  },
  {
    question: "Can I create multiple resumes?",
    answer:
      "The platform is designed to support tailored resume versions for different roles and career opportunities. Availability may depend on your plan.",
  },
  {
    question: "Is ResumePilot suitable for beginners?",
    answer:
      "Yes. The guided resume-building approach is intended to make it easier for students, graduates, career changers, and experienced professionals to get started.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section bg-slate-50">
      <div className="container">

        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* Left introduction */}
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
              <HelpCircle size={14} />
              HAVE QUESTIONS?
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need
              <span className="text-blue-600"> to know.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Find answers about creating resumes, templates,
              AI writing assistance, and the ResumePilot platform.
            </p>

            <div className="mt-8 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <MessageCircle size={19} />
              </div>

              <h3 className="mt-4 font-bold text-slate-900">
                Still have questions?
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-500">
                Our contact page is the place to send your questions
                or feedback.
              </p>

              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-3"
              >
                Contact us
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={faq.question}
                  className={`overflow-hidden rounded-xl border bg-white transition duration-200 ${
                    isOpen
                      ? "border-blue-200 shadow-md shadow-blue-100/40"
                      : "border-slate-200 hover:border-blue-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-bold leading-6 text-slate-800">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition ${
                        isOpen
                          ? "rotate-180 bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <ChevronDown size={17} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5">
                      <div className="h-px bg-slate-100" />
                      <p className="pt-4 text-xs leading-7 text-slate-500">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
