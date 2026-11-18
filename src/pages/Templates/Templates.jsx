
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  SlidersHorizontal,
  ArrowRight,
  Eye,
  Sparkles,
  Check,
  X,
  ChevronDown,
  FileText,
  BriefcaseBusiness,
} from "lucide-react";

const categories = [
  "All",
  "Professional",
  "Modern",
  "Minimal",
  "Creative",
  "Executive",
];

const templates = [
  {
    id: "professional-01",
    name: "Professional Classic",
    category: "Professional",
    description: "A clean, traditional layout for any career.",
    color: "#2563EB",
    popularity: 98,
    isPopular: true,
    isNew: false,
    layout: "classic",
  },
  {
    id: "modern-01",
    name: "Modern Edge",
    category: "Modern",
    description: "A contemporary design with a polished look.",
    color: "#0891B2",
    popularity: 95,
    isPopular: true,
    isNew: true,
    layout: "modern",
  },
  {
    id: "minimal-01",
    name: "Minimal Focus",
    category: "Minimal",
    description: "Simple typography and distraction-free design.",
    color: "#475569",
    popularity: 92,
    isPopular: false,
    isNew: false,
    layout: "minimal",
  },
  {
    id: "creative-01",
    name: "Creative Profile",
    category: "Creative",
    description: "A distinctive layout for creative professionals.",
    color: "#7C3AED",
    popularity: 89,
    isPopular: false,
    isNew: true,
    layout: "creative",
  },
  {
    id: "executive-01",
    name: "Executive Pro",
    category: "Executive",
    description: "A confident layout for leadership roles.",
    color: "#0F172A",
    popularity: 96,
    isPopular: true,
    isNew: false,
    layout: "executive",
  },
  {
    id: "professional-02",
    name: "Career Standard",
    category: "Professional",
    description: "A balanced format for experienced candidates.",
    color: "#1D4ED8",
    popularity: 87,
    isPopular: false,
    isNew: false,
    layout: "standard",
  },
  {
    id: "modern-02",
    name: "Modern Simple",
    category: "Modern",
    description: "A fresh, structured design with clear sections.",
    color: "#0E7490",
    popularity: 90,
    isPopular: false,
    isNew: true,
    layout: "modern",
  },
  {
    id: "minimal-02",
    name: "Essential",
    category: "Minimal",
    description: "A lightweight layout focused on your experience.",
    color: "#64748B",
    popularity: 84,
    isPopular: false,
    isNew: false,
    layout: "minimal",
  },
];

function ResumePreview({ template }) {
  const isModern = template.layout === "modern";
  const isCreative = template.layout === "creative";
  const isExecutive = template.layout === "executive";
  const isMinimal = template.layout === "minimal";

  return (
    <div className="flex h-full w-full justify-center overflow-hidden bg-slate-100 p-5 sm:p-7">
      <div className="relative min-h-[310px] w-full max-w-[245px] origin-top scale-100 overflow-hidden bg-white p-4 shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
        <div
          className={`mb-4 ${
            isModern || isCreative ? "flex gap-3" : ""
          }`}
        >
          {(isModern || isCreative) && (
            <div
              className="h-12 w-12 shrink-0 rounded-lg"
              style={{ backgroundColor: `${template.color}20` }}
            />
          )}

          <div className="min-w-0 flex-1">
            <div
              className="mb-1 h-3 w-28 rounded-sm"
              style={{ backgroundColor: template.color }}
            />
            <div className="mb-2 h-1.5 w-20 rounded bg-slate-300" />
            <div className="h-1 w-24 rounded bg-slate-200" />
          </div>
        </div>

        {isExecutive && (
          <div
            className="mb-4 h-1 w-full"
            style={{ backgroundColor: template.color }}
          />
        )}

        {!isMinimal && (
          <div className="mb-4 border-t border-slate-200 pt-2">
            <div
              className="mb-2 h-1.5 w-20 rounded"
              style={{ backgroundColor: template.color }}
            />
            <div className="space-y-1.5">
              <div className="h-1 w-full rounded bg-slate-200" />
              <div className="h-1 w-[92%] rounded bg-slate-200" />
              <div className="h-1 w-[85%] rounded bg-slate-200" />
            </div>
          </div>
        )}

        {["Experience", "Education", "Skills"].map((section, index) => (
          <div
            key={section}
            className="mb-4 border-t border-slate-200 pt-2"
          >
            <div
              className="mb-2 h-1.5 w-16 rounded"
              style={{
                backgroundColor: isCreative
                  ? template.color
                  : "#334155",
              }}
            />
            <div className="mb-1 h-1 w-24 rounded bg-slate-300" />
            <div className="mb-1 h-1 w-full rounded bg-slate-200" />
            <div className="h-1 w-[80%] rounded bg-slate-200" />
            {index === 0 && (
              <div className="mt-2 h-1 w-[90%] rounded bg-slate-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Templates() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const filteredTemplates = useMemo(() => {
    let result = templates.filter((template) => {
      const matchesCategory =
        activeCategory === "All" ||
        template.category === activeCategory;

      const query = searchQuery.trim().toLowerCase();

      const matchesSearch =
        !query ||
        template.name.toLowerCase().includes(query) ||
        template.category.toLowerCase().includes(query) ||
        template.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    if (sortBy === "popular") {
      result.sort((a, b) => b.popularity - a.popularity);
    } else if (sortBy === "newest") {
      result.sort((a, b) => Number(b.isNew) - Number(a.isNew));
    } else if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-[#F0F7FF] via-white to-[#ECFAFC] px-4 pb-14 pt-20 sm:pb-16 sm:pt-24">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            <Sparkles size={15} />
            Professionally designed resume templates
          </div>

          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Find the perfect resume
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              for your next opportunity
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore professional, ATS-friendly resume templates. Choose
            a design, customize it with AI, and create a resume that
            helps you stand out.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm text-slate-600">
            <span className="flex items-center gap-2">
              <Check size={16} className="text-blue-600" />
              ATS-friendly layouts
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-blue-600" />
              Easy customization
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-blue-600" />
              Professional designs
            </span>
          </div>
        </div>
      </section>

      {/* Sticky Search Bar - outside the hero */}
      <div className="sticky top-[var(--navbar-height)] z-40 border-b border-slate-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-2xl items-center gap-3 rounded-xl border border-slate-200 bg-white p-2 transition focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-50">
          <Search className="ml-2 shrink-0 text-slate-400" size={19} />

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search resume templates..."
            aria-label="Search resume templates"
            className="min-w-0 flex-1 bg-transparent py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />

          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
              <X size={17} />
            </button>
          )}

          <span className="hidden rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white sm:inline-flex">
            Search
          </span>
        </div>
      </div>

      {/* Template Gallery */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                <FileText size={16} />
                TEMPLATE COLLECTION
              </span>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Explore resume templates
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                Choose a layout that matches your experience, industry,
                and personal style.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-3 py-2.5 sm:self-auto">
              <SlidersHorizontal size={16} className="text-slate-500" />

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort templates"
                className="cursor-pointer bg-transparent text-sm font-medium text-slate-700 outline-none"
              >
                <option value="popular">Most popular</option>
                <option value="newest">Newest</option>
                <option value="name">Name: A–Z</option>
              </select>

              <ChevronDown size={15} className="text-slate-400" />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/15"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-900">
                {filteredTemplates.length}
              </span>{" "}
              {filteredTemplates.length === 1 ? "template" : "templates"}
            </p>

            {(activeCategory !== "All" || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Cards */}
          {filteredTemplates.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredTemplates.map((template) => (
                <article
                  key={template.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10"
                >
                  <div className="relative h-[310px] overflow-hidden">
                    <ResumePreview template={template} />

                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 opacity-0 transition duration-300 group-hover:bg-slate-950/35 group-hover:opacity-100">
                      <button
                        type="button"
                        onClick={() => setSelectedTemplate(template)}
                        className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-lg transition hover:bg-blue-50"
                      >
                        <Eye size={17} />
                        Preview template
                      </button>
                    </div>

                    {template.isPopular && (
                      <span className="absolute left-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                        Popular
                      </span>
                    )}

                    {template.isNew && (
                      <span className="absolute right-3 top-3 rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">
                        New
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <h3 className="font-bold text-slate-900">
                        {template.name}
                      </h3>

                      <span
                        className="h-3 w-3 shrink-0 rounded-full"
                        style={{ backgroundColor: template.color }}
                      />
                    </div>

                    <p className="mb-4 text-sm leading-5 text-slate-500">
                      {template.description}
                    </p>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-xs font-medium text-slate-500">
                        {template.category}
                      </span>

                      <Link
                        to={`/resume-builder?template=${template.id}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition hover:gap-2.5 hover:text-blue-700"
                      >
                        Use template
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Search size={25} />
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                No templates found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try another search term or choose a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-5 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0F172A] via-[#172554] to-[#164E63] px-4 py-16 sm:py-20">
        <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-cyan-300">
            <BriefcaseBusiness size={26} />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to build your next resume?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-blue-100/75 sm:text-base">
            Choose your favorite template and let AI help you create a
            professional resume that gets noticed.
          </p>

          <Link
            to="/resume-builder"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
          >
            Build my resume
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Preview Modal */}
      {selectedTemplate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
          onClick={() => setSelectedTemplate(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedTemplate.name} preview`}
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedTemplate(null)}
              aria-label="Close preview"
              className="absolute right-4 top-4 rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
              <X size={20} />
            </button>

            <div className="mb-5 pr-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Template preview
              </span>

              <h3 className="mt-1 text-xl font-bold text-slate-900">
                {selectedTemplate.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {selectedTemplate.description}
              </p>
            </div>

            <div className="h-[390px] overflow-hidden rounded-xl border border-slate-200">
              <ResumePreview template={selectedTemplate} />
            </div>

            <Link
              to={`/resume-builder?template=${selectedTemplate.id}`}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Use this template
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

export default Templates;
