import React, { useState } from 'react';
import { ArrowUpRight, FolderGit2, Code2, Layers, Info } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & NLP' },
    { id: 'dev', label: 'Developer Tools' },
    { id: 'iot', label: 'Systems & IoT' },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'ai') return project.category.includes('AI') || project.category.includes('NLP');
    if (filter === 'dev') return project.category.includes('Developer') || project.category.includes('Web');
    if (filter === 'iot') return project.category.includes('IoT') || project.category.includes('Retail');
    return true;
  });

  return (
    <section id="projects" className="py-20 bg-slate-50/50 border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-700 mb-2">
              Featured Work
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
              Academic & Technical Projects
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Practical software systems, accessibility tools, and intelligent agents developed to address real-world challenges.
            </p>
          </div>

          {/* Interactive filter controls (functional buttons with active state) */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-xl shrink-0 self-start md:self-auto">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  filter === opt.id
                    ? 'bg-white text-purple-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`p-6 sm:p-7 bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:border-purple-200 hover:shadow-md transition-all flex flex-col justify-between ${
                index === 0 && filter === 'all' ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                {/* Clean unboxed metadata kicker */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <span className="font-medium text-purple-700">{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.implementationStatus}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight text-slate-900 hover:text-purple-700 transition-colors">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-left w-full focus-visible:outline-hidden"
                  >
                    {project.title}
                  </button>
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Objective bullet */}
                <div className="mt-4 p-3 bg-purple-50/50 rounded-xl border border-purple-100 text-xs text-purple-950 leading-relaxed">
                  <span className="font-semibold block text-[11px] uppercase tracking-wider text-purple-900 mb-0.5">
                    Objective
                  </span>
                  {project.objective}
                </div>
              </div>

              {/* Technologies & Actions footer */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-4">
                {/* Zero-pill unboxed tech stack list */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
                  {project.technologies.map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span className="font-mono text-slate-700 font-medium">{tech}</span>
                      {idx < project.technologies.length - 1 && <span className="text-slate-300">·</span>}
                    </React.Fragment>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center justify-between gap-3 pt-1">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 hover:text-purple-900 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Architecture</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
                    title="View GitHub repository on Ranjitha's profile"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Source Code Note */}
        <div className="mt-10 p-4 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <FolderGit2 className="w-4 h-4 text-purple-700 shrink-0" />
            <span>
              All project repositories and technical prototypes are organized under Ranjitha's GitHub profile.
            </span>
          </div>
          <a
            href="https://github.com/rakchu2007-web"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:text-purple-900 font-semibold inline-flex items-center gap-1 shrink-0"
          >
            <span>Browse @rakchu2007-web</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
