import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  Smartphone, 
  ArrowUpRight, 
  Eye, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Hand 
} from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { useMobileCarousel } from '../hooks';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterCategories = ['All', 'Mobile App', 'AI & Data', 'Cybersecurity'];

  const getCategoryCount = (category: string) => {
    if (category === 'All') return featuredProjects.length;
    return featuredProjects.filter(p => p.category === category).length;
  };

  const filteredProjects = selectedFilter === 'All'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === selectedFilter);

  // Spotlight Project: Rakshak Connect
  const spotlightProject = featuredProjects.find(p => p.id === 'rakshak-connect');

  const {
    activeSlide,
    carouselRef,
    handleScroll,
    scrollCarousel,
    scrollToSlide,
  } = useMobileCarousel(filteredProjects.length, selectedFilter);

  return (
    <section id="projects" className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-electric-cyan/40 text-[11px] sm:text-xs font-mono text-electric-cyan mb-2 shadow-glow-cyan backdrop-blur-md">
            <FolderGit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>REAL OPEN-SOURCE CODE & REPOSITORIES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Featured Projects & <span className="text-electric-gradient">Engineering Repositories</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base mt-1 max-w-2xl font-normal">
            Real, functional repositories directly published on GitHub — spanning mobile safety applications, data analytics suites, and AI security systems.
          </p>
        </div>

        {/* SPOTLIGHT PROJECT: Rakshak Connect (Bento Hero Showcase) */}
        {spotlightProject && (
          <div className="mb-6 sm:mb-8">
            <div className="bento-spotlight p-5 sm:p-10 border-2 border-electric-cyan/50 shadow-2xl backdrop-blur-md">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                
                {/* Left Description */}
                <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
                  
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] sm:text-[11px] font-mono font-black text-slate-950 bg-gradient-to-r from-electric-cyan to-electric-emerald px-2.5 py-0.5 rounded-md shadow-md">
                      ★ Featured Showcase
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold text-electric-cyan bg-cyan-950/80 px-2 py-0.5 rounded-md border border-electric-cyan/40">
                      Flutter & Dart
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                      {spotlightProject.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-electric-cyan mt-0.5 font-mono">
                      Smart Emergency Response & Citizen Safety Mobile System
                    </p>
                  </div>

                  <p className="text-slate-200 text-xs sm:text-base leading-relaxed font-normal">
                    {spotlightProject.shortDescription}
                  </p>

                  {/* Highlights Grid with Clean Alignment */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200 font-mono">
                    {spotlightProject.features.slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-obsidian-950/80 border border-white/10">
                        <CheckCircle2 className="w-3.5 h-3.5 text-electric-emerald shrink-0" />
                        <span className="truncate font-semibold text-[11px] sm:text-xs">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Aligned Technology Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1 items-center">
                    {spotlightProject.technologies.map((tech) => (
                      <span key={tech} className="tech-chip text-[10px] sm:text-xs py-0.5 px-2">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* High-Contrast Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-2 sm:pt-3 border-t border-white/15">
                    <a
                      href={spotlightProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-electric inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-extrabold focus-ring"
                    >
                      <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>View GitHub Repo</span>
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>

                    <button
                      onClick={() => setSelectedProject(spotlightProject)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm text-white bg-obsidian-850/90 hover:bg-obsidian-800 border-2 border-white/20 hover:border-electric-cyan transition-all shadow-bento backdrop-blur-md focus-ring"
                    >
                      <Eye className="w-3.5 h-3.5 text-electric-cyan" />
                      <span>Explore Case Study</span>
                    </button>
                  </div>

                </div>

                {/* Right Architecture Block */}
                <div className="lg:col-span-5">
                  <div className="p-4 sm:p-6 rounded-2xl bg-obsidian-950/90 border-2 border-electric-cyan/30 space-y-2.5 font-mono text-xs shadow-2xl backdrop-blur-md">
                    <div className="flex items-center justify-between pb-2.5 border-b border-white/15">
                      <span className="font-black text-white flex items-center gap-2 text-xs sm:text-sm">
                        <Smartphone className="w-4 h-4 text-electric-cyan" />
                        Rakshak Core Architecture
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-black text-electric-emerald bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40">
                        MIT Open Source
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-obsidian-900/80 border border-white/10 space-y-0.5 hover:border-electric-cyan/50 transition-colors">
                      <div className="text-electric-cyan font-bold text-[11px] sm:text-xs">1. Emergency SOS Dispatch</div>
                      <div className="text-slate-300 text-[10px] sm:text-[11px]">Instant SMS broadcast with accurate GPS coordinates</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-obsidian-900/80 border border-white/10 space-y-0.5 hover:border-electric-emerald/50 transition-colors">
                      <div className="text-electric-emerald font-bold text-[11px] sm:text-xs">2. High-Decibel Siren System</div>
                      <div className="text-slate-300 text-[10px] sm:text-[11px]">Hardware audio channel override for immediate alarm</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-obsidian-900/80 border border-white/10 space-y-0.5 hover:border-purple-400/50 transition-colors">
                      <div className="text-purple-400 font-bold text-[11px] sm:text-xs">3. Background State Handling</div>
                      <div className="text-slate-300 text-[10px] sm:text-[11px]">Persistent listeners ensuring instant trigger readiness</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Filter Pills with Dynamic Count Badges & Crisp Contrast */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1.5 mb-4 sm:mb-6 scrollbar-none">
          {filterCategories.map((cat) => {
            const count = getCategoryCount(cat);
            const isSelected = selectedFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                  isSelected
                    ? 'bg-gradient-to-r from-electric-cyan to-electric-emerald text-slate-950 shadow-glow-cyan scale-105 font-black'
                    : 'bg-obsidian-900/80 text-slate-300 hover:text-white border-2 border-white/10 hover:border-electric-cyan/50 backdrop-blur-sm'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded-full font-black ${
                  isSelected ? 'bg-black/30 text-slate-950' : 'bg-obsidian-950 text-electric-cyan border border-white/10'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
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
                aria-label="Previous project card"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                disabled={activeSlide >= filteredProjects.length - 1}
                className="p-1 rounded-lg bg-obsidian-900 border border-white/15 text-slate-300 disabled:opacity-40"
                aria-label="Next project card"
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
                className="w-[86vw] max-w-[340px] flex-shrink-0 snap-center bento-card p-5 border-2 border-white/15 hover:border-electric-cyan/60 flex flex-col justify-between shadow-bento backdrop-blur-md"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[11px] font-mono font-black text-electric-cyan bg-cyan-950/80 px-2 py-0.5 rounded-md border border-electric-cyan/40">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="text-[9px] font-mono font-bold text-slate-200 bg-obsidian-950/90 px-1.5 py-0.5 rounded-md border border-white/15">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-black text-white mb-1.5">
                    {project.title}
                  </h3>

                  <p className="text-[11px] text-slate-300 line-clamp-3 mb-3.5 leading-relaxed font-normal">
                    {project.shortDescription}
                  </p>

                  {/* Tech Chips with Proper Alignment */}
                  <div className="flex flex-wrap gap-1.5 mb-3.5 items-center">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="tech-chip text-[10px] py-0.5 px-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-2.5 border-t border-white/15 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-electric-cyan hover:text-white transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Case Study</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-obsidian-950/90 border border-white/20 text-[11px] font-mono font-bold text-slate-200 hover:text-white hover:border-electric-cyan transition-colors shadow-sm"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repository</span>
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
        <div className="hidden md:grid md:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bento-card p-5 sm:p-6 border-2 border-white/15 hover:border-electric-cyan/60 flex flex-col justify-between shadow-bento transition-all duration-300 animate-fadeIn backdrop-blur-md"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-black text-electric-cyan bg-cyan-950/80 px-2.5 py-0.5 rounded-md border border-electric-cyan/40">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="text-[10px] font-mono font-bold text-slate-200 bg-obsidian-950/90 px-2 py-0.5 rounded-md border border-white/15">
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-black text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 mb-4 leading-relaxed font-normal">
                  {project.shortDescription}
                </p>

                {/* Tech Chips with Proper Alignment */}
                <div className="flex flex-wrap gap-2 mb-4 items-center">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="tech-chip text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-3 border-t border-white/15 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-electric-cyan hover:text-white transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Case Study</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-950/90 border border-white/20 text-xs font-mono font-bold text-slate-200 hover:text-white hover:border-electric-cyan transition-colors shadow-sm"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
