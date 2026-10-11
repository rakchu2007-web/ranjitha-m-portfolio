import React from 'react';
import { Code2, Globe, Brain, FileSpreadsheet, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Code2 className="w-5 h-5 text-purple-700" />;
      case 'Web & Frameworks':
        return <Globe className="w-5 h-5 text-purple-700" />;
      case 'AI & Intelligent Systems':
        return <Brain className="w-5 h-5 text-purple-700" />;
      case 'Productivity & Office Tools':
        return <FileSpreadsheet className="w-5 h-5 text-purple-700" />;
      default:
        return <Code2 className="w-5 h-5 text-purple-700" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-white border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-700 mb-2">
            Technical Repertoire
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
            Technical Skills
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Core technologies, programming languages, web frameworks, and analytical tools applied across academic coursework and software projects.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="p-6 sm:p-7 bg-slate-50/60 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills in Category (Zero-pill discipline: unboxed clean cards with typographic indicators) */}
                <div className="mt-5 space-y-3.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs hover:border-purple-200 transition-colors"
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-sm font-semibold text-slate-900">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-medium text-purple-700 font-mono">
                          {skill.level}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quiet footer summary */}
              <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-700" />
                <span>Verified in academic coursework and active projects</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
