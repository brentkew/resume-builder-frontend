
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
  BookOpen,
  Lightbulb,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";


import logo from "../../assets/logo/logo.jpg";

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
        closeMenu();
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
    `relative inline-flex items-center py-2 text-[13px] font-semibold transition-colors duration-200 ${
      isActive
        ? "text-blue-600"
        : "text-slate-600 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 shadow-[0_2px_12px_rgba(15,23,42,0.035)] backdrop-blur-xl">
      <nav className="container mx-auto flex h-20 items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          to="/"
          onClick={closeMenu}
          aria-label="ResumePilot home"
          className="flex h-[76px] w-[180px] shrink-0 items-center overflow-hidden"
        >
          <img
            src={logo}
            alt="ResumePilot"
            className="block"
          />
        </Link>
        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-7 lg:flex">

          <NavLink to="/" end className={getLinkClass}>
            Home
          </NavLink>

          {/* TOOLS MEGA MENU */}
          <div
            ref={megaMenuRef}
            className="relative"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsMegaMenuOpen((prev) => !prev)}
              aria-expanded={isMegaMenuOpen}
              aria-haspopup="true"
              className={`group flex items-center gap-1.5 py-2 text-[13px] font-semibold transition-colors duration-200 ${
                isMegaMenuOpen
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              Tools
              <ChevronDown
                size={15}
                className={`transition-transform duration-300 ${
                  isMegaMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* MEGA MENU */}
            <div
              className={`absolute left-1/2 top-full z-50 w-[850px] -translate-x-1/2 pt-4 transition-all duration-200 ${
                isMegaMenuOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-2 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_24px_70px_-20px_rgba(15,23,42,0.22)]">

                <div className="grid grid-cols-3 gap-6 p-7">
                  {megaMenuGroups.map((group) => (
                    <div key={group.title}>
                      <div className="mb-4 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
                        <h3 className="text-[10px] font-bold tracking-[0.16em] text-slate-400">
                          {group.title}
                        </h3>
                      </div>

                      <div className="space-y-2">
                        {group.items.map((item) => {
                          const Icon = item.icon;

                          return (
                            <Link
                              key={item.name}
                              to={item.path}
                              onClick={closeMenu}
                              className="group flex gap-3 rounded-xl border border-transparent p-3 transition-all duration-200 hover:border-blue-100 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-cyan-50/50"
                            >
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-200 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white">
                                <Icon size={19} strokeWidth={1.9} />
                              </span>

                              <span className="min-w-0 flex-1">
                                <span className="flex items-center gap-1 text-[12px] font-bold text-slate-800 transition-colors group-hover:text-blue-700">
                                  {item.name}
                                  <ArrowUpRight
                                    size={13}
                                    className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                                  />
                                </span>

                                <span className="mt-1 block text-[11px] leading-[1.6] text-slate-500">
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

                {/* MEGA MENU FOOTER */}
                <div className="flex items-center justify-between border-t border-slate-100 bg-gradient-to-r from-[#F5F9FF] to-[#F0FBFD] px-7 py-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                      <Sparkles size={19} />
                    </span>

                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Your next opportunity starts here.
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-500">
                        Create a resume that makes an impression.
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/resume-builder"
                    onClick={closeMenu}
                    className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Start Building
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <NavLink to="/templates" className={getLinkClass}>
            Templates
          </NavLink>

          <NavLink to="/about" className={getLinkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={getLinkClass}>
            Contact
          </NavLink>
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-5 lg:flex">
          <Link
            to="/login"
            className="text-[13px] font-semibold text-slate-600 transition-colors hover:text-blue-600"
          >
            Sign In
          </Link>

          <Link
            to="/resume-builder"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-3 text-[12px] font-bold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30"
          >
            Build My Resume
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => {
            setIsOpen((prev) => !prev);
            setIsMegaMenuOpen(false);
          }}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        className={`grid overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="container mx-auto flex flex-col gap-1 px-5 py-5 sm:px-6">

            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-xl px-3 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                }`
              }
            >
              Home
            </NavLink>

            {/* MOBILE TOOLS ACCORDION */}
            <div className="rounded-xl">
              <button
                type="button"
                onClick={() => setIsMegaMenuOpen((prev) => !prev)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold transition ${
                  isMegaMenuOpen
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
                aria-expanded={isMegaMenuOpen}
              >
                <span className="flex items-center gap-2">
                  <Sparkles size={16} />
                  Tools
                </span>

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    isMegaMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid overflow-hidden transition-all duration-300 ${
                  isMegaMenuOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="ml-3 mt-2 space-y-4 border-l-2 border-blue-100 py-2 pl-4">
                    {megaMenuGroups.map((group) => (
                      <div key={group.title}>
                        <p className="mb-2 text-[10px] font-bold tracking-[0.14em] text-slate-400">
                          {group.title}
                        </p>

                        <div className="space-y-1">
                          {group.items.map((item) => {
                            const Icon = item.icon;

                            return (
                              <Link
                                key={item.name}
                                to={item.path}
                                onClick={closeMenu}
                                className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-xs font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                              >
                                <Icon size={16} className="shrink-0 text-blue-600" />
                                {item.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* MOBILE ACTIONS */}
            <div className="mt-3 border-t border-slate-100 pt-5">
              <Link
                to="/login"
                onClick={closeMenu}
                className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-slate-600 transition hover:text-blue-600"
              >
                <CheckCircle2 size={16} />
                Sign In
              </Link>

              <Link
                to="/resume-builder"
                onClick={closeMenu}
                className="group mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition hover:shadow-lg"
              >
                Build My Resume
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
