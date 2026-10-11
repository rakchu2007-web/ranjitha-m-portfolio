import React from 'react';
import { Award, CheckCircle, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-50/50 border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-700 mb-2">
            Professional Development
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
            Certifications & Training
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Formal technical certifications and specialized training programs expanding capabilities in programming, analytics, and intelligent systems.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-6 sm:p-7 bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:border-purple-200 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with Score highlight */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold font-mono text-purple-700 block">
                      {cert.scoreOrDetail}
                    </span>
                    <span className="text-[11px] text-slate-400 block">
                      {cert.organization}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Issued through {cert.organization}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Acquired List (Unboxed metadata) */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Skills Validated:
                  </span>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-600">
                    {cert.skillsAcquired.map((skill, idx) => (
                      <React.Fragment key={skill}>
                        <span className="font-medium text-slate-800">{skill}</span>
                        {idx < cert.skillsAcquired.length - 1 && <span className="text-slate-300">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Status strip */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5 text-purple-900 font-medium">
                  <ShieldCheck className="w-4 h-4 text-purple-700" />
                  <span>Credential Completed</span>
                </div>
                <span className="text-[11px] text-slate-400">
                  Documentation available upon request
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
