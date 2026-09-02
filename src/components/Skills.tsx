import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Database, 
  Wrench, 
  Lightbulb, 
  Terminal, 
  Flame, 
  Layers, 
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Hand
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { useMobileCarousel } from '../hooks';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const {
    activeSlide,
    carouselRef,
    handleScroll,
    scrollCarousel,
    scrollToSlide,
  } = useMobileCarousel(skillCategories.length);

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Programming Languages':
        return <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-electric-cyan" />;
      case 'Frameworks & Technologies':
        return <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-electric-emerald" />;
      case 'Data Science & Python':
        return <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />;
      case 'Databases':
        return <Database className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />;
      case 'Development Tools':
        return <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />;
      case 'Areas of Interest':
        return <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" />;
      default:
        return <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-electric-cyan" />;
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Proficient':
        return (
          <span className="text-[10px] font-mono font-bold text-electric-emerald bg-emerald-950/80 px-2 py-0.5 rounded border border-electric-emerald/40">
            Proficient
          </span>
        );
      case 'Hands-on':
        return (
          <span className="text-[10px] font-mono font-bold text-electric-cyan bg-cyan-950/80 px-2 py-0.5 rounded border border-electric-cyan/40">
            Hands-on
          </span>
        );
      case 'Experimented':
        return (
          <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/40">
            Applied
          </span>
        );
      default:
        return (
          <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-500/40">
            {level}
          </span>
        );
    }
  };

  return (
    <section id="skills" className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-electric-cyan/40 text-[11px] sm:text-xs font-mono text-electric-cyan mb-2 shadow-glow-cyan backdrop-blur-md">
            <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>CORE TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Technical Stack & <span className="text-electric-gradient">Domain Competencies</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base mt-1 max-w-2xl font-normal">
            Hands-on toolchain, programming languages, and specialized domains applied across real software projects.
          </p>
        </div>

        {/* MOBILE CAROUSEL VIEW (< md screens) */}
        <div className="md:hidden">
          
          {/* Mobile Swipe Hint Bar */}
          <div className="flex items-center justify-between px-1 mb-2.5 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-electric-cyan font-bold">
              <Hand className="w-3.5 h-3.5 animate-pulse" />
              <span>Swipe cards ({activeSlide + 1} of {skillCategories.length})</span>
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollCarousel('left')}
                disabled={activeSlide === 0}
                className="p-1 rounded-lg bg-obsidian-900 border border-white/15 text-slate-300 disabled:opacity-40"
                aria-label="Previous skill card"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                disabled={activeSlide >= skillCategories.length - 1}
                className="p-1 rounded-lg bg-obsidian-900 border border-white/15 text-slate-300 disabled:opacity-40"
                aria-label="Next skill card"
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
            {skillCategories.map((category) => (
              <div
                key={category.name}
                className="w-[86vw] max-w-[340px] flex-shrink-0 snap-center bento-card p-4 border-2 border-white/15 hover:border-electric-cyan/60 flex flex-col justify-between shadow-bento group backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center gap-2.5 pb-3 border-b border-white/15 mb-3">
                    <span className="p-2 rounded-xl bg-obsidian-950/90 border border-white/15 shadow-inner">
                      {getCategoryIcon(category.name)}
                    </span>
                    <div>
                      <h3 className="text-base font-black text-white group-hover:text-electric-cyan transition-colors truncate">
                        {category.name}
                      </h3>
                      <p className="text-[11px] text-slate-400 line-clamp-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2 rounded-xl bg-obsidian-950/80 border border-white/10 hover:border-electric-cyan/40 transition-colors"
                      >
                        <span className="text-xs font-bold text-white font-mono">
                          {skill.name}
                        </span>
                        {getLevelBadge(skill.level)}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Count:</span>
                  <span className="font-black text-electric-cyan">{category.skills.length} Competencies</span>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-1.5 pt-1.5">
            {skillCategories.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === i 
                    ? 'w-6 bg-gradient-to-r from-electric-cyan to-electric-emerald shadow-glow-cyan' 
                    : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to skill category ${i + 1}`}
              />
            ))}
          </div>

        </div>

        {/* DESKTOP BENTO GRID VIEW (>= md screens) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="bento-card p-5 border-2 border-white/15 hover:border-electric-cyan/60 flex flex-col justify-between shadow-bento group backdrop-blur-md transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3 pb-3 border-b border-white/15 mb-3.5">
                  <span className="p-2.5 rounded-xl bg-obsidian-950/90 border border-white/15 shadow-inner group-hover:scale-105 transition-transform">
                    {getCategoryIcon(category.name)}
                  </span>
                  <div>
                    <h3 className="text-base font-black text-white group-hover:text-electric-cyan transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-obsidian-950/80 border border-white/10 hover:border-electric-cyan/40 transition-colors"
                    >
                      <span className="text-xs font-bold text-white font-mono">
                        {skill.name}
                      </span>
                      {getLevelBadge(skill.level)}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 mt-3.5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Domain Total:</span>
                <span className="font-black text-electric-cyan">{category.skills.length} Competencies</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
