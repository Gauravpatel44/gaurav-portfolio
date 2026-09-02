import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2, Layers, AlertCircle, Lightbulb, Smartphone, Shield, ArrowUpRight } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-3xl bg-obsidian-900 border-2 border-electric-cyan/60 rounded-2xl sm:rounded-3xl shadow-2xl z-10 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b-2 border-white/15 bg-obsidian-950">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[10px] sm:text-xs font-mono font-black text-electric-cyan bg-cyan-950/90 px-2.5 py-0.5 rounded-md border border-electric-cyan/40">
              {project.category}
            </span>
            <h3 className="text-base sm:text-xl font-black text-white truncate max-w-[200px] sm:max-w-md">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus-ring"
            aria-label="Close modal (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5">
          
          {/* Detailed Overview */}
          <div className="space-y-1.5">
            <h4 className="text-xs sm:text-sm font-mono font-bold text-electric-cyan uppercase tracking-wider">
              Project Architecture & Purpose
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              {project.fullDescription || project.shortDescription}
            </p>
          </div>

          {/* Problem & Solution (if present) */}
          {(project.problem || project.solution) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              {project.problem && (
                <div className="p-3.5 rounded-xl bg-obsidian-950 border border-white/15 space-y-1">
                  <div className="flex items-center gap-1.5 text-rose-400 font-bold">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>The Problem Space</span>
                  </div>
                  <p className="text-slate-300 text-[11px] font-normal leading-relaxed">{project.problem}</p>
                </div>
              )}
              {project.solution && (
                <div className="p-3.5 rounded-xl bg-obsidian-950 border border-white/15 space-y-1">
                  <div className="flex items-center gap-1.5 text-electric-emerald font-bold">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>Engineering Solution</span>
                  </div>
                  <p className="text-slate-300 text-[11px] font-normal leading-relaxed">{project.solution}</p>
                </div>
              )}
            </div>
          )}

          {/* Core Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs sm:text-sm font-mono font-bold text-electric-cyan uppercase tracking-wider">
                Key Technical Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200 font-mono">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-obsidian-950/80 border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-electric-emerald shrink-0 mt-0.5" />
                    <span className="font-semibold text-[11px] sm:text-xs leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Stack Chips */}
          <div className="space-y-2">
            <h4 className="text-xs sm:text-sm font-mono font-bold text-slate-400 uppercase tracking-wider">
              Tooling & Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5 items-center">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-chip text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-3.5 border-t-2 border-white/15 bg-obsidian-950">
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            Close
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-electric inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black"
          >
            <Github className="w-4 h-4" />
            <span>Open GitHub Repository</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
