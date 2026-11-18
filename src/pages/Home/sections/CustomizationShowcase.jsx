import React, { useState } from 'react';
import { LayoutTemplate, Type, Palette, AlignLeft, CheckCircle2, Sparkles } from 'lucide-react';

export default function CustomizationShowcase() {
  const [activeTab, setActiveTab] = useState('layout');

  // State configurations for the live preview based on active customization tab
  const previewConfigs = {
    layout: {
      title: "Layout & Templates",
      desc: "Switch between 1-column, 2-column, and multi-section layouts instantly.",
      badge: "Modern 2-Column Grid",
      accent: "from-cyan-400 to-blue-500",
      contentStyle: "grid grid-cols-3 gap-2",
    },
    typography: {
      title: "Typography & Spacing",
      desc: "Fine-tune font size, headings, and line spacing to effortlessly fit your resume onto 1 page.",
      badge: "Compact 1-Page Fit Active",
      accent: "from-blue-500 to-indigo-500",
      contentStyle: "space-y-3 font-sans tracking-tight",
    },
    colors: {
      title: "Colors & Profile Header",
      desc: "Customize accent palettes, profile photos, and clickable social/portfolio links.",
      badge: "Electric Cyan & Indigo Theme",
      accent: "from-cyan-400 to-purple-500",
      contentStyle: "border-l-4 border-cyan-400 pl-3",
    },
    footer: {
      title: "Footers & Page Numbers",
      desc: "Add custom footer text and align page numbers (Left, Center, or Right).",
      badge: "Footer Aligned: Center",
      accent: "from-purple-400 to-pink-500",
      contentStyle: "text-center italic text-xs",
    }
  };

  const current = previewConfigs[activeTab];

  return (
    <section className="bg-[#090D16] py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Editor Preview
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Test Our Deep Customization Power Live
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Click through our sidebar control options below and see how easily you can tailor every pixel of your resume before exporting.
          </p>
        </div>

        {/* Interactive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
          
          {/* Left Column: Control Sidebar Simulation (4 Tabs) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 px-2 mb-2">
              Customization Panel
            </h3>

            {/* Tab 1: Layout */}
            <button
              onClick={() => setActiveTab('layout')}
              className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between border ${
                activeTab === 'layout' 
                  ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/50 text-white shadow-lg' 
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${activeTab === 'layout' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
                  <LayoutTemplate className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Templates & Layouts</div>
                  <div className="text-xs text-slate-500">Multi-column & section arrangement</div>
                </div>
              </div>
              <CheckCircle2 className={`w-4 h-4 ${activeTab === 'layout' ? 'text-cyan-400' : 'opacity-0'}`} />
            </button>

            {/* Tab 2: Typography */}
            <button
              onClick={() => setActiveTab('typography')}
              className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between border ${
                activeTab === 'typography' 
                  ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/50 text-white shadow-lg' 
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${activeTab === 'typography' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
                  <Type className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Font Size, Spacing & Headings</div>
                  <div className="text-xs text-slate-500">Precision 1-page fit controls[cite: 5]</div>
                </div>
              </div>
              <CheckCircle2 className={`w-4 h-4 ${activeTab === 'typography' ? 'text-cyan-400' : 'opacity-0'}`} />
            </button>

            {/* Tab 3: Colors */}
            <button
              onClick={() => setActiveTab('colors')}
              className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between border ${
                activeTab === 'colors' 
                  ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/50 text-white shadow-lg' 
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${activeTab === 'colors' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Colors, Photo & Links</div>
                  <div className="text-xs text-slate-500">Personal branding & header styling</div>
                </div>
              </div>
              <CheckCircle2 className={`w-4 h-4 ${activeTab === 'colors' ? 'text-cyan-400' : 'opacity-0'}`} />
            </button>

            {/* Tab 4: Footer */}
            <button
              onClick={() => setActiveTab('footer')}
              className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between border ${
                activeTab === 'footer' 
                  ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/50 text-white shadow-lg' 
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${activeTab === 'footer' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
                  <AlignLeft className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Footer & Page Numbers</div>
                  <div className="text-xs text-slate-500">Left, Center, Right alignment pills[cite: 5]</div>
                </div>
              </div>
              <CheckCircle2 className={`w-4 h-4 ${activeTab === 'footer' ? 'text-cyan-400' : 'opacity-0'}`} />
            </button>
          </div>

          {/* Right Column: Live Dynamic Resume Preview Card */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden shadow-inner min-h-[380px] flex flex-col justify-between">
            
            {/* Top Indicator inside preview */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/60">
              <span className="text-xs font-mono text-slate-400">Live Preview: Michelle Lopez</span>
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium bg-gradient-to-r ${current.accent} text-slate-950 shadow-sm`}>
                {current.badge}
              </span>
            </div>

            {/* Dynamic Content Area */}
            <div className="py-6 transition-all duration-300">
              <div className="bg-slate-900/90 border border-slate-800/80 rounded-xl p-5 shadow-lg space-y-4">
                
                {/* Header Mock */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold text-lg">Michelle Lopez</h4>
                    <p className="text-xs text-cyan-400">Senior Full-Stack Developer</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs text-slate-300 font-bold">
                    ML
                  </div>
                </div>

                {/* Sub-content changing based on state */}
                <div className={current.contentStyle}>
                  <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/50">
                    <div className="text-xs font-semibold text-slate-300">Experience Section</div>
                    <div className="text-[11px] text-slate-400 mt-1">Built scalable microservices and optimized React web apps with 99.9% uptime.</div>
                  </div>
                  <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/50">
                    <div className="text-xs font-semibold text-slate-300">ATS Keywords Match</div>
                    <div className="text-[11px] text-emerald-400 mt-1 font-mono">✓ 94/100 Optimized Score</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Footer Mock & CTA */}
            <div className="pt-4 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                {activeTab === 'footer' ? "MICHELLE LOPEZ • Page 1 of 1" : "Fully customizable in 1 click."}
              </div>
              <a 
                href="/builder" 
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold text-xs hover:opacity-90 transition shadow-lg shadow-cyan-500/20 text-center"
              >
                Customize Your Resume Free →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}