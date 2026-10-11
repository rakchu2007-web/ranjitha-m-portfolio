import React, { useState } from 'react';
import { ArrowDown, Mail, Copy, Check, ExternalLink, Code, Sparkles, GraduationCap, MapPin, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Subtle background ambient soft purple aura */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100/60 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-40 left-1/3 w-80 h-80 bg-indigo-50/70 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          {/* Left Column: Typographic Hierarchy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Academic Status Label */}
            <div className="flex items-center gap-2 text-xs font-medium text-purple-800 mb-4 tracking-normal">
              <span>B.Tech CSBS</span>
              <span aria-hidden="true">·</span>
              <span>St. Peter's College of Engineering and Technology</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] text-balance">
              Hi, I’m <span className="text-purple-700">Ranjitha M</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-lg sm:text-xl font-medium text-slate-800 leading-snug">
              Aspiring Software Developer | AI & Web Development Enthusiast
            </p>

            {/* Short Bio text */}
            <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-xl">
              I’m a Computer Science and Business Systems student interested in building practical software solutions using programming, web technologies, and AI.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollTo('projects')}
                className="px-5 py-2.5 text-sm font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-800 active:bg-purple-900 transition-colors shadow-xs whitespace-nowrap shrink-0"
              >
                View My Projects
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="px-5 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
              >
                Contact Me
              </button>

              <a
                href="/Ranjitha_M_Professional_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-sm font-medium text-purple-700 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
                title="View or download Ranjitha M's Resume"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>

            {/* Quick Contact & Profile Strip */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 hover:text-purple-700 transition-colors"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-purple-700" />
                <span className="font-mono text-slate-700">{PERSONAL_INFO.email}</span>
                {copiedEmail ? (
                  <span className="text-emerald-600 font-semibold text-[11px] ml-1">Copied!</span>
                ) : (
                  <Copy className="w-3 h-3 text-slate-400 ml-0.5" />
                )}
              </button>

              <span aria-hidden="true" className="text-slate-300">·</span>

              <a
                href={PERSONAL_INFO.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-700 transition-colors inline-flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <span aria-hidden="true" className="text-slate-300">·</span>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-700 transition-colors inline-flex items-center gap-1"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Student Developer Card (No photo as explicitly requested) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="p-6 sm:p-7 bg-white rounded-2xl border border-slate-200/90 shadow-md space-y-6">
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <div className="text-xs font-semibold text-purple-700 uppercase tracking-wider">
                    Student Profile
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                    Ranjitha M
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Second Year B.Tech CSBS
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                    CGPA
                  </div>
                  <div className="text-2xl font-bold font-mono text-purple-700 tabular-nums">
                    8.24
                  </div>
                </div>
              </div>

              {/* Academic & Focus Details */}
              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-2.5">
                  <GraduationCap className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">
                      St. Peter’s College of Engineering and Technology
                    </span>
                    <span className="text-slate-500">
                      Computer Science and Business Systems · Class of 2029
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">
                      Chennai, India
                    </span>
                    <span className="text-slate-500">
                      Open for Summer & Semester IT Internships
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Code className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">
                      Core Technical Focus
                    </span>
                    <span className="text-slate-500">
                      Python · Java · Flask · Basic NLP · Web Dev · Problem Solving
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Banner */}
              <div className="p-3 bg-purple-50/70 rounded-xl border border-purple-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="font-medium text-purple-950">
                    Seeking Internship Opportunities
                  </span>
                </div>
                <span className="text-[11px] text-purple-800 font-mono">2025–2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI / Highlights strip below the split */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="space-y-0.5">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 tabular-nums">
              8.24
            </div>
            <div className="text-xs text-slate-500">Current CGPA</div>
          </div>

          <div className="space-y-0.5">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-purple-700 tabular-nums">
              2029
            </div>
            <div className="text-xs text-slate-500">Expected Graduation</div>
          </div>

          <div className="space-y-0.5">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 tabular-nums">
              5
            </div>
            <div className="text-xs text-slate-500">AI & Web Projects</div>
          </div>

          <div className="space-y-0.5">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-purple-700 tabular-nums">
              79%
            </div>
            <div className="text-xs text-slate-500">NPTEL Java Certification</div>
          </div>
        </div>
      </div>
    </section>
  );
};
