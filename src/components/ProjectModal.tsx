import React from 'react';
import { X, ExternalLink, Code2, CheckCircle2, Layers, Cpu, ArrowUpRight } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/60">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-medium text-purple-700">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.implementationStatus}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 id="project-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Project Objective */}
          <div className="p-4 bg-purple-50/60 rounded-xl border border-purple-100 space-y-1.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-900 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-purple-700" />
              Core Objective & Problem Solved
            </h4>
            <p className="text-xs text-purple-950 leading-relaxed">
              {project.objective}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-700" />
              Key Capabilities & Architecture
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-purple-700" />
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600">
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="font-mono text-purple-900 font-medium">{tech}</span>
                  {idx < project.technologies.length - 1 && <span className="text-slate-300">/</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 px-6 border-t border-slate-100 bg-slate-50/60 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            Source repository available on GitHub profile
          </span>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Visit GitHub Profile</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400" />
            </a>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
