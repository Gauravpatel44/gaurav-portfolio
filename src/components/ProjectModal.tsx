import React, { useEffect } from 'react';
import { X, Github, AlertTriangle, Lightbulb, CheckCircle2, Award, BookOpen } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-surface-raised border border-surface-borderBold rounded-2xl shadow-modal overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-surface-border bg-surface-sunken">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded border border-brand-500/30">
              {project.type}
            </span>
            {project.badge && (
              <span className="text-xs font-mono text-slate-400 bg-surface-raised px-2 py-0.5 rounded border border-surface-border">
                {project.badge}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus-ring"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Title & Summary */}
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              {project.title}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-xl bg-surface-sunken border border-surface-border space-y-1.5">
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold font-mono">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Problem Statement</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-sunken border border-surface-border space-y-1.5">
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold font-mono">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Technical Solution</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features List */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Key Features & Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 p-2.5 rounded-lg bg-surface-sunken border border-surface-border text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Learnings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="space-y-2">
              <h3 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Challenges Overcome</span>
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {project.challenges?.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-brand-400" />
                <span>What I Learned</span>
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {project.learnings?.map((l, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-brand-400 font-bold">•</span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="flex items-center justify-between gap-3 px-6 py-4 border-t border-surface-border bg-surface-sunken">
          <div className="text-xs font-mono text-slate-400">
            Open Source: <span className="text-emerald-400 font-semibold">{project.isOpenSource ? 'Yes (Public Repo)' : 'Case Study'}</span>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-xs text-slate-950 bg-white hover:bg-slate-200 transition-colors focus-ring"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Open Repository</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
