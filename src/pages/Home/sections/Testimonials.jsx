
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Morgan",
    role: "Software Developer",
    initials: "AM",
    avatar: "bg-blue-100 text-blue-700",
    quote:
      "The resume builder made it much easier to organize my experience and create a clean, professional resume.",
  },
  {
    name: "Sarah Chen",
    role: "Marketing Specialist",
    initials: "SC",
    avatar: "bg-violet-100 text-violet-700",
    quote:
      "I liked how simple the process was. The writing suggestions helped me communicate my achievements more clearly.",
  },
  {
    name: "Daniel Brooks",
    role: "Recent Graduate",
    initials: "DB",
    avatar: "bg-cyan-100 text-cyan-700",
    quote:
      "The templates gave me a great starting point. I could focus on my skills instead of worrying about formatting.",
  },
];

const Testimonials = () => {
  return (
    <section className="section bg-slate-50">
      <div className="container">

        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
            <Quote size={14} />
            USER EXPERIENCES
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A better way to present
            <span className="text-blue-600"> your potential.</span>
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-500">
            Designed to make resume creation clearer, simpler,
            and more approachable.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">

          {testimonials.map((item) => (
            <article
              key={item.name}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >

              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={14}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <Quote
                  size={24}
                  className="text-blue-100 transition group-hover:text-blue-200"
                />
              </div>

              <p className="mt-5 flex-1 text-sm leading-7 text-slate-600">
                "{item.quote}"
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold ${item.avatar}`}
                >
                  {item.initials}
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {item.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                Sample testimonial
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
