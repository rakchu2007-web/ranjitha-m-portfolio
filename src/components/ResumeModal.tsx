import React, { useState } from 'react';
import { X, FileText, Download, AlertCircle, Copy, Check, ExternalLink, GraduationCap, Award, Briefcase, Mail } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, ACHIEVEMENTS, CERTIFICATIONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyInstructions = () => {
    navigator.clipboard.writeText(
      'To add your resume PDF: Place your PDF file in the public folder as "Ranjitha_M_Resume.pdf" or host it on Google Drive/GitHub.'
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="resume-modal-title" className="text-base font-semibold text-slate-900">
                Ranjitha M — Curriculum Vitae
              </h2>
              <p className="text-xs text-slate-500">
                Official profile overview & resume placeholder
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
              title="Print or Save as PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Informative Placeholder Notice */}
        <div className="px-6 py-3 bg-purple-50/80 border-b border-purple-100 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-purple-700 mt-0.5 shrink-0" />
          <div className="text-xs text-purple-900 flex-1 leading-relaxed">
            <span className="font-semibold text-purple-950">PDF Upload Placeholder:</span>{' '}
            The official compiled PDF file will be linked directly once uploaded to the project directory. Below is the verified academic summary matching Ranjitha M's credentials.
          </div>
          <button
            onClick={handleCopyInstructions}
            className="text-xs font-medium text-purple-800 hover:text-purple-950 underline flex items-center gap-1 shrink-0 ml-2"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Copied guide</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Setup info</span>
              </>
            )}
          </button>
        </div>

        {/* Scrollable Document Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-white print:p-0">
          {/* Resume Header */}
          <div className="border-b border-slate-200 pb-6 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Ranjitha M
            </h1>
            <p className="text-sm font-medium text-purple-700 mt-1">
              Aspiring Software Developer · B.Tech CSBS (2029) · CGPA 8.24
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-y-1 gap-x-3 text-xs text-slate-600">
              <span>{PERSONAL_INFO.college}, Chennai</span>
              <span aria-hidden="true">·</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-purple-700 hover:underline">
                {PERSONAL_INFO.email}
              </a>
              <span aria-hidden="true">·</span>
              <a href={PERSONAL_INFO.linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">
                LinkedIn Profile
              </a>
              <span aria-hidden="true">·</span>
              <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Education */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              <GraduationCap className="w-4 h-4 text-purple-700" />
              <span>Education</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-sm">
              <div>
                <h4 className="font-semibold text-slate-900">
                  St. Peter's College of Engineering and Technology, Chennai
                </h4>
                <p className="text-slate-600">
                  Bachelor of Technology (B.Tech) — Computer Science and Business Systems (CSBS)
                </p>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <span className="font-semibold text-purple-700">CGPA: 8.24 / 10.0</span>
                <p className="text-xs text-slate-500">Expected: 2029 (Second Year)</p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              <Briefcase className="w-4 h-4 text-purple-700" />
              <span>Technical Skills</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <span className="font-semibold text-slate-900 block mb-1">Programming & Web:</span>
                <p className="text-slate-600">Python, Java, HTML5, CSS3, Flask</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <span className="font-semibold text-slate-900 block mb-1">AI & Intelligent Tech:</span>
                <p className="text-slate-600">Basic NLP, AI Developer Tools, Computer Vision Concepts</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <span className="font-semibold text-slate-900 block mb-1">Productivity & Documentation:</span>
                <p className="text-slate-600">Microsoft Word (Technical Reports), Microsoft Excel</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                <span className="font-semibold text-slate-900 block mb-1">Focus Areas:</span>
                <p className="text-slate-600">Software Development, Algorithmic Problem Solving, Web Systems</p>
              </div>
            </div>
          </section>

          {/* Selected Projects */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              <FileText className="w-4 h-4 text-purple-700" />
              <span>Key Software Projects</span>
            </div>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="text-xs space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-semibold text-slate-900 text-sm">{proj.title}</span>
                    <span className="text-slate-500 font-mono text-[11px]">{proj.technologies.join(' · ')}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{proj.shortDescription}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Hackathons & Achievements */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              <Award className="w-4 h-4 text-purple-700" />
              <span>Hackathon Participations & Technical Presentations</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {ACHIEVEMENTS.map((item) => (
                <div key={item.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <span className="font-semibold text-slate-900 block">{item.title}</span>
                  <span className="text-purple-700 text-[11px] block mb-1">{item.context}</span>
                  <p className="text-slate-600 leading-relaxed text-[11px]">{item.summary}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              <Award className="w-4 h-4 text-purple-700" />
              <span>Certifications & Specialized Training</span>
            </div>
            <div className="space-y-2 text-xs">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="flex items-baseline justify-between py-1.5 border-b border-slate-100 last:border-b-0">
                  <div>
                    <span className="font-medium text-slate-900">{cert.title}</span>
                    <span className="text-slate-500 text-[11px] ml-2">({cert.organization})</span>
                  </div>
                  <span className="font-semibold text-purple-700 shrink-0 ml-2">{cert.scoreOrDetail}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 border-t border-slate-200 bg-slate-50/70 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Email: <span className="font-medium text-slate-800">{PERSONAL_INFO.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Resume%20Inquiry%20-%20Ranjitha%20M`}
              className="px-3.5 py-1.5 text-xs font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-800 transition-colors inline-flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact via Email</span>
            </a>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
