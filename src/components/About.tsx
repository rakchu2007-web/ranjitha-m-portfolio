import React from 'react';
import { GraduationCap, BookOpen, Target, Sparkles, Building2, Calendar, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50/50 border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-700 mb-2">
            Background & Academics
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
            About Me
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Second-year undergraduate engineering student with a strong passion for developing practical software applications, exploring artificial intelligence, and mastering emerging web architectures.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6 text-sm text-slate-700 leading-relaxed">
            <p>
              I am currently in my second year pursuing a <strong className="font-semibold text-slate-900">B.Tech in Computer Science and Business Systems (CSBS)</strong> at <strong className="font-semibold text-slate-900">{PERSONAL_INFO.college}</strong> in Chennai, India. My curriculum blends core computer science fundamentals—algorithms, data structures, and software engineering—with essential business and systems acumen.
            </p>

            <p>
              I maintain a cumulative grade point average of <strong className="font-semibold text-purple-700 font-mono">8.24 / 10.0</strong>, balancing academic rigor with practical hands-on software development. I am enthusiastic about applying programming concepts to build functional tools that solve real-world problems.
            </p>

            <p>
              My primary interests lie in <strong className="font-semibold text-slate-900">software development, artificial intelligence, natural language processing, and web development</strong>. I actively participate in hackathons and college tech challenges to continuously learn, test hypotheses, and collaborate on rapid prototyping.
            </p>

            {/* Core Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                <div className="text-xs font-semibold text-purple-800 flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-purple-700" />
                  Practical Problem-Solving
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Focusing on building functional, usable prototypes such as resume evaluators, accessibility tools, and smart retail systems.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                <div className="text-xs font-semibold text-purple-800 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-purple-700" />
                  Continuous Learning
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Consistently expanding skills through verified training in AI, data analytics, and Java (scoring 79% in NPTEL).
                </p>
              </div>
            </div>
          </div>

          {/* Education & Summary Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-5">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-purple-700" />
                Academic Overview
              </h3>

              <div className="space-y-4 text-xs">
                <div className="border-b border-slate-100 pb-3">
                  <div className="text-slate-400 uppercase tracking-wider font-medium text-[11px]">
                    Degree Program
                  </div>
                  <div className="font-semibold text-slate-900 text-sm mt-0.5">
                    B.Tech — Computer Science & Business Systems
                  </div>
                  <div className="text-slate-500 mt-0.5">
                    Designed in alignment with industry computing & systems requirements
                  </div>
                </div>

                <div className="border-b border-slate-100 pb-3">
                  <div className="text-slate-400 uppercase tracking-wider font-medium text-[11px]">
                    Institution
                  </div>
                  <div className="font-semibold text-slate-900 text-sm mt-0.5 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                    <span>{PERSONAL_INFO.college}</span>
                  </div>
                  <div className="text-slate-500 mt-0.5">Chennai, Tamil Nadu, India</div>
                </div>

                <div className="grid grid-cols-2 gap-3 border-b border-slate-100 pb-3">
                  <div>
                    <div className="text-slate-400 uppercase tracking-wider font-medium text-[11px]">
                      Academic Standing
                    </div>
                    <div className="font-bold text-purple-700 text-base font-mono mt-0.5">
                      CGPA 8.24
                    </div>
                    <div className="text-slate-500 text-[11px]">Second Year</div>
                  </div>
                  <div>
                    <div className="text-slate-400 uppercase tracking-wider font-medium text-[11px]">
                      Graduation Year
                    </div>
                    <div className="font-bold text-slate-900 text-base font-mono mt-0.5">
                      2029
                    </div>
                    <div className="text-slate-500 text-[11px]">Expected</div>
                  </div>
                </div>

                <div>
                  <div className="text-slate-400 uppercase tracking-wider font-medium text-[11px] mb-1.5">
                    Key Academic Interests
                  </div>
                  <div className="space-y-1 text-slate-700">
                    <div>• Software Development & Web Technologies</div>
                    <div>• Artificial Intelligence & Basic NLP</div>
                    <div>• Data Analytics & Object-Oriented Programming</div>
                    <div>• Enterprise Systems & Business Processes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
