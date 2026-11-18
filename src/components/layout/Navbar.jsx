
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FileText,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Sparkles,
  FileSearch,
  WandSparkles,
  FileEdit,
  BookOpen,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/", end: true },
  { name: "Templates", path: "/templates" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const megaMenuGroups = [
  {
    title: "RESUME BUILDER",
    items: [
      {
        name: "AI Resume Builder",
        description: "Create a professional resume with AI.",
        path: "/resume-builder",
        icon: Sparkles,
      },
      {
        name: "Resume Templates",
        description: "Explore professionally designed templates.",
        path: "/templates",
        icon: FileText,
      },
    ],
  },
  {
    title: "CAREER TOOLS",
    items: [
      {
        name: "ATS Resume Checker",
        description: "Check how your resume performs.",
        path: "/ats-checker",
        icon: FileSearch,
      },
      {
        name: "AI Resume Optimizer",
        description: "Improve your resume with AI suggestions.",
        path: "/resume-optimizer",
        icon: WandSparkles,
      },
      // {
      //   name: "Cover Letter Builder",
      //   description: "Write a tailored cover letter.",
      //   path: "/cover-letter",
      //   icon: FileEdit,
      // },
    ],
  },
  {
    title: "RESOURCES",
    items: [
      {
        name: "Resume Writing Guide",
        description: "Learn how to write a stronger resume.",
        path: "/resume-writing-guide",
        icon: BookOpen,
      },
      {
        name: "Career Advice",
        description: "Practical tips for your job search.",
        path: "/career-advice",
        icon: Lightbulb,
      },
    ],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const megaMenuRef = useRef(null);

  const closeMenu = () => {
    setIsOpen(false);
    setIsMegaMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target)
      ) {
        setIsMegaMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMegaMenuOpen(false);
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const getLinkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "text-blue-600"
        : "text-slate-600 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white">
      <nav className="container flex h-[var(--navbar-height)] items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-2.5"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm transition group-hover:bg-blue-700">
            <FileText size={21} strokeWidth={2.2} />
          </span>

          <span className="text-[21px] font-bold tracking-tight text-slate-900">
            Resume<span className="text-blue-600">Pilot</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <NavLink
            to="/"
            end
            className={getLinkClass}
          >
            Home
          </NavLink>

          {/* Mega Menu */}
          <div
            ref={megaMenuRef}
            className="relative"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsMegaMenuOpen((prev) => !prev)}
              onFocus={() => setIsMegaMenuOpen(true)}
              aria-expanded={isMegaMenuOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                isMegaMenuOpen
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              Tools
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${
                  isMegaMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Mega Menu Panel */}
            <div
              className={`absolute left-1/2 top-full z-50 w-[850px] -translate-x-1/2 pt-5 transition-all duration-200 ${
                isMegaMenuOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-2 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_-15px_rgba(15,23,42,0.18)]">

                <div className="grid grid-cols-3 gap-7 p-7">
                  {megaMenuGroups.map((group) => (
                    <div key={group.title}>
                      <h3 className="mb-4 text-[11px] font-bold tracking-[0.12em] text-slate-400">
                        {group.title}
                      </h3>

                      <div className="space-y-2">
                        {group.items.map((item) => {
                          const Icon = item.icon;

                          return (
                            <Link
                              key={item.name}
                              to={item.path}
                              onClick={closeMenu}
                              className="group flex gap-3 rounded-xl p-2.5 transition hover:bg-blue-50"
                            >
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                                <Icon size={19} strokeWidth={1.9} />
                              </span>

                              <span className="min-w-0">
                                <span className="flex items-center gap-1 text-[13px] font-semibold text-slate-800 transition group-hover:text-blue-600">
                                  {item.name}
                                  <ArrowUpRight
                                    size={13}
                                    className="opacity-0 transition group-hover:opacity-100"
                                  />
                                </span>

                                <span className="mt-1 block text-[11px] leading-relaxed text-slate-500">
                                  {item.description}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mega Menu Footer */}
                <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/80 px-7 py-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Your next opportunity starts here.
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Build a resume that gets noticed.
                    </p>
                  </div>

                  <Link
                    to="/resume-builder"
                    onClick={closeMenu}
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700"
                  >
                    Start Building
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <NavLink
            to="/templates"
            className={getLinkClass}
          >
            Templates
          </NavLink>

          <NavLink
            to="/about"
            className={getLinkClass}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={getLinkClass}
          >
            Contact
          </NavLink>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-5 md:flex">
          <Link
            to="/login"
            className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
          >
            Sign In
          </Link>

          <Link to="/resume-builder" className="btn btn-primary">
            Build My Resume
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-6 py-5 md:hidden"
        >
          <div className="container flex flex-col gap-5">

            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={getLinkClass}
            >
              Home
            </NavLink>

            {/* Mobile Tools Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setIsMegaMenuOpen((prev) => !prev)}
                className="flex w-full items-center justify-between text-sm font-medium text-slate-700"
                aria-expanded={isMegaMenuOpen}
              >
                Tools
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    isMegaMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isMegaMenuOpen && (
                <div className="mt-4 space-y-5 border-l-2 border-blue-100 pl-4">
                  {megaMenuGroups.map((group) => (
                    <div key={group.title}>
                      <p className="mb-2 text-[10px] font-bold tracking-widest text-slate-400">
                        {group.title}
                      </p>

                      <div className="space-y-3">
                        {group.items.map((item) => {
                          const Icon = item.icon;

                          return (
                            <Link
                              key={item.name}
                              to={item.path}
                              onClick={closeMenu}
                              className="flex items-center gap-3 text-sm font-medium text-slate-700 transition hover:text-blue-600"
                            >
                              <Icon size={17} className="text-blue-600" />
                              {item.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                onClick={closeMenu}
                className={getLinkClass}
              >
                {link.name}
              </NavLink>
            ))}

            <div className="border-t border-slate-100 pt-5">
              <Link
                to="/login"
                onClick={closeMenu}
                className="block text-sm font-semibold text-slate-700 hover:text-blue-600"
              >
                Sign In
              </Link>

              <Link
                to="/resume-builder"
                onClick={closeMenu}
                className="btn btn-primary mt-4 w-full"
              >
                Build My Resume
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
