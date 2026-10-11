import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Academic Identity */}
          <div className="text-center md:text-left space-y-1">
            <span className="text-base font-bold text-slate-900 block">
              Ranjitha M
            </span>
            <p className="text-xs text-slate-500">
              B.Tech Computer Science and Business Systems · St. Peter’s College of Engineering and Technology, Chennai
            </p>
          </div>

          {/* Clean Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600">
            <a href="#about" className="hover:text-purple-700 transition-colors">About</a>
            <a href="#skills" className="hover:text-purple-700 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-purple-700 transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-purple-700 transition-colors">Achievements</a>
            <a href="#certifications" className="hover:text-purple-700 transition-colors">Certifications</a>
            <a
              href="/Ranjitha_M_Professional_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 hover:text-purple-900 font-medium transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-purple-700 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 text-slate-500 hover:text-purple-700 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Email Ranjitha"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quiet copyright */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
          <span>
            © {new Date().getFullYear()} Ranjitha M. All rights reserved.
          </span>
          <span>
            Built for IT internship recruiting & technical portfolio showcasing.
          </span>
        </div>
      </div>
    </footer>
  );
};
