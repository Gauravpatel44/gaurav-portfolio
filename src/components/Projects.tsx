import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Layers, 
  Shield, 
  Smartphone, 
  Activity, 
  FileCode, 
  CheckCircle2, 
  ArrowUpRight,
  Eye,
  ChevronLeft,
  ChevronRight,
  Hand
} from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { useMobileCarousel } from '../hooks';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Mobile App', 'AI & Data', 'Cybersecurity'];

  const filteredProjects = filter === 'All' 
    ? featuredProjects 
    : featuredProjects.filter(p => p.category === filter);

  const {
    activeSlide,
    carouselRef,
    handleScroll,
    scrollCarousel,
    scrollToSlide,
  } = useMobileCarousel(filteredProjects.length, filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Mobile App':
        return <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-electric-cyan" />;
      case 'AI & Data':
        return <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-electric-emerald" />;
      case 'Cybersecurity':
        return <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />;
      default:
        return <FolderGit2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />;
    }
  };

  return (
    <section id="projects" className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-electric-cyan/40 text-[11px] sm:text-xs font-mono text-electric-cyan mb-2 shadow-glow-cyan backdrop-blur-md">
              <FolderGit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>HANDS-ON SOFTWARE REPOSITORIES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Featured <span className="text-electric-gradient">Technical Projects</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-base mt-1 max-w-2xl font-normal">
              Real open-source systems built in Flutter, Python data science pipelines, and cybersecurity classification engines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-obsidian-900 border border-white/15 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                  filter === cat
                    ? 'bg-electric-cyan text-obsidian-950 font-black shadow-glow-cyan'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* MOBILE CAROUSEL VIEW (< md screens) */}
        <div className="md:hidden">
          
          {/* Mobile Swipe Hint Bar */}
          <div className="flex items-center justify-between px-1 mb-2.5 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-electric-cyan font-bold">
              <Hand className="w-3.5 h-3.5 animate-pulse" />
              <span>Swipe projects ({activeSlide + 1} of {filteredProjects.length})</span>
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollCarousel('left')}
                disabled={activeSlide === 0}
                className="p-1 rounded-lg bg-obsidian-900 border border-white/15 text-slate-300 disabled:opacity-40"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                disabled={activeSlide >= filteredProjects.length - 1}
                className="p-1 rounded-lg bg-obsidian-900 border border-white/15 text-slate-300 disabled:opacity-40"
                aria-label="Next project"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Swipeable Carousel Slider */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 pb-3 px-1 scrollbar-none scroll-smooth"
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="w-[86vw] max-w-[340px] flex-shrink-0 snap-center bento-card p-4 border-2 border-white/15 hover:border-electric-cyan/60 flex flex-col justify-between shadow-bento group backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="p-2 rounded-xl bg-obsidian-950/90 border border-white/15 shadow-inner">
                      {getCategoryIcon(project.category)}
                    </span>
                    {project.badge && (
                      <span className="text-[10px] font-mono font-bold text-electric-cyan bg-cyan-950/80 px-2 py-0.5 rounded-md border border-electric-cyan/40">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-black text-white mb-1.5 group-hover:text-electric-cyan transition-colors truncate">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 mb-3 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-1 mb-3">
                    {project.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300 font-mono">
                        <CheckCircle2 className="w-3 h-3 text-electric-emerald shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="tech-chip text-[10px] py-0.5 px-2">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-chip text-[10px] py-0.5 px-2 text-slate-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-white/15 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-black text-electric-cyan hover:text-white transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-electric inline-flex items-center gap-1 px-3 py-1.5 text-[11px] font-extrabold"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-1.5 pt-1.5">
            {filteredProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === i 
                    ? 'w-6 bg-gradient-to-r from-electric-cyan to-electric-emerald shadow-glow-cyan' 
                    : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

        </div>

        {/* DESKTOP BENTO GRID VIEW (>= md screens) */}
        <div className="hidden md:grid md:grid-cols-2 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bento-card p-6 border-2 border-white/15 hover:border-electric-cyan/60 flex flex-col justify-between shadow-bento group backdrop-blur-md transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="p-2.5 rounded-xl bg-obsidian-950/90 border border-white/15 shadow-inner group-hover:scale-105 transition-transform">
                    {getCategoryIcon(project.category)}
                  </span>
                  {project.badge && (
                    <span className="text-xs font-mono font-bold text-electric-cyan bg-cyan-950/80 px-2.5 py-0.5 rounded-md border border-electric-cyan/40">
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-black text-white mb-2 group-hover:text-electric-cyan transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-3 mb-4 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Key Features */}
                <div className="space-y-1.5 mb-4">
                  {project.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-electric-emerald shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-chip text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-white/15 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-black text-electric-cyan hover:text-white transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>Architecture & Details</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-electric inline-flex items-center gap-1.5 px-4 py-2 text-xs font-extrabold"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
