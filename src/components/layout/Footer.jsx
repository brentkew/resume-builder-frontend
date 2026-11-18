
import { Link } from "react-router-dom";
import { FileText, ArrowUpRight, ArrowRight } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Resume Templates", path: "/templates" },
    { label: "Resume Builder", path: "/resume-builder" },
    { label: "ATS Resume Checker", path: "/ats-checker" },
    { label: "Pricing Plans", path: "/pricing" },
  ],

  Company: [
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
    { label: "Blog & Resources", path: "/blog" },
  ],

  Resources: [
    { label: "Resume Examples", path: "/resume-examples" },
    { label: "Career Advice", path: "/blog" },
    { label: "Frequently Asked Questions", path: "/faq" },
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52C22 2.68 21.31 2 20.45 2ZM7.93 18.5H4.95V9h2.98v9.5ZM6.44 7.7a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46ZM19.05 18.5h-2.98v-4.62c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.7H9.77V9h2.86v1.3h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.56 1.98 3.56 4.55v5.19Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.1L5.84 22H2.7l7.25-8.3L2.2 2h6.4l4.43 6.58L18.9 2Zm-1.1 18h1.73L7.68 3.9H5.82L17.8 20Z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.31-3.76-1.31-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.68 2.02 3.43 1.43.1-.73.4-1.22.72-1.5-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.21 1.16-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.16 1.77 1.16 2.99 0 4.3-2.61 5.25-5.1 5.53.4.35.76 1.03.76 2.08v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#090D16] text-slate-400">
      <div className="container py-16 lg:py-20">

        {/* Main Footer */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                <FileText size={21} />
              </span>

              <span className="text-xl font-bold tracking-tight text-white">
                Resume<span className="text-blue-400">Pilot</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Create professional resumes that help you stand out,
              showcase your strengths, and move confidently toward
              your next career opportunity.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition duration-200 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Link Groups */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="lg:col-span-2">
              <h3 className="mb-6 text-sm font-semibold text-white">
                {heading}
              </h3>

              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="group inline-flex items-center gap-1 text-sm transition-colors hover:text-blue-400"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-sm font-semibold text-white">
              Start your journey
            </h3>

            <p className="mb-6 text-sm leading-6 text-slate-400">
              Your next career opportunity deserves a resume
              that stands out.
            </p>

            <Link
              to="/resume-builder"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Create Resume
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 flex flex-col gap-5 border-t border-slate-800 pt-7 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} ResumePilot. All rights reserved.
          </p>

          <p className="text-slate-500">
            Built for your next career move.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
