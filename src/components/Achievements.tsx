import React from 'react';
import { Award, Trophy, Users, Presentation, Terminal, CheckCircle2 } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getAchievementIcon = (id: string) => {
    switch (id) {
      case 'hackarena':
        return <Terminal className="w-5 h-5 text-purple-700" />;
      case 'code4edtech':
        return <Users className="w-5 h-5 text-purple-700" />;
      case 'ey-techathon':
        return <Trophy className="w-5 h-5 text-purple-700" />;
      case 'paper-presentations':
        return <Presentation className="w-5 h-5 text-purple-700" />;
      default:
        return <Award className="w-5 h-5 text-purple-700" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-white border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-700 mb-2">
            Competitive & Academic Highlights
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
            Hackathons & Presentations
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Active participation in national hackathons, technical challenges, and academic symposiums demonstrating hands-on problem solving and teamwork.
          </p>
        </div>

        {/* 2x2 Grid of Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 bg-slate-50/60 rounded-2xl border border-slate-200/90 shadow-xs hover:border-purple-200 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header row with icon and type */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                    {getAchievementIcon(item.id)}
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono text-purple-800 font-semibold block">
                      {item.type}
                    </span>
                    <span className="text-[11px] text-slate-400 block">
                      {item.focusArea}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-purple-700 mt-0.5">
                  {item.context}
                </p>

                {/* Summary */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              {/* Card Footer with verification note */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-700" />
                <span>Collegiate & inter-college competitive highlight</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
