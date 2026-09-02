import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Hand
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { useMobileCarousel } from '../hooks';

export const Experience: React.FC = () => {
  const {
    activeSlide,
    carouselRef,
    handleScroll,
    scrollCarousel,
    scrollToSlide,
  } = useMobileCarousel(experienceData.length);

  return (
    <section id="experience" className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-electric-cyan/40 text-[11px] sm:text-xs font-mono text-electric-cyan mb-2 shadow-glow-cyan backdrop-blur-md">
            <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>PRACTICAL INDUSTRY ENGAGEMENT</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Internships & <span className="text-electric-gradient">Industry Programs</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base mt-1 max-w-2xl font-normal">
            Formal technical internships and corporate-sponsored skill initiatives conducted in partnership with AICTE, Edunet, Microsoft & Vodafone Idea Foundation.
          </p>
        </div>

        {/* MOBILE CAROUSEL VIEW (< md screens) */}
        <div className="md:hidden">
          
          {/* Mobile Swipe Hint Bar */}
          <div className="flex items-center justify-between px-1 mb-2.5 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-electric-cyan font-bold">
              <Hand className="w-3.5 h-3.5 animate-pulse" />
              <span>Swipe internships ({activeSlide + 1} of {experienceData.length})</span>
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollCarousel('left')}
                disabled={activeSlide === 0}
                className="p-1 rounded-lg bg-obsidian-900 border border-white/15 text-slate-300 disabled:opacity-40"
                aria-label="Previous experience"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                disabled={activeSlide >= experienceData.length - 1}
                className="p-1 rounded-lg bg-obsidian-900 border border-white/15 text-slate-300 disabled:opacity-40"
                aria-label="Next experience"
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
            {experienceData.map((exp) => (
              <div
                key={exp.id}
                className="w-[86vw] max-w-[340px] flex-shrink-0 snap-center bento-card p-4 border-2 border-white/15 hover:border-electric-cyan/60 flex flex-col justify-between shadow-bento group backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/15 mb-2.5">
                    <span className="text-[10px] font-mono font-bold text-electric-cyan bg-cyan-950/80 px-2 py-0.5 rounded-md border border-electric-cyan/40">
                      {exp.type}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {exp.duration}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-white group-hover:text-electric-cyan transition-colors mb-1 truncate">
                    {exp.role}
                  </h3>

                  <div className="text-xs font-bold text-electric-emerald mb-1 truncate">
                    {exp.organization}
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 mb-2.5">
                    <Calendar className="w-3 h-3 text-electric-cyan shrink-0" />
                    <span>{exp.dateRange}</span>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-3 mb-3 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-1">
                    {exp.highlights.slice(0, 2).map((high, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300 font-mono">
                        <CheckCircle2 className="w-3 h-3 text-electric-emerald shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{high}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {exp.certificateUrl && (
                  <div className="pt-3 border-t border-white/15 mt-3">
                    <a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-electric w-full py-1.5 rounded-xl text-[11px] font-extrabold flex items-center justify-center gap-1.5"
                    >
                      <span>Verified Credential</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-1.5 pt-1.5">
            {experienceData.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === i 
                    ? 'w-6 bg-gradient-to-r from-electric-cyan to-electric-emerald shadow-glow-cyan' 
                    : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to experience ${i + 1}`}
              />
            ))}
          </div>

        </div>

        {/* DESKTOP BENTO GRID VIEW (>= md screens) */}
        <div className="hidden md:grid md:grid-cols-3 gap-5">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="bento-card p-6 border-2 border-white/15 hover:border-electric-cyan/60 flex flex-col justify-between shadow-bento group backdrop-blur-md transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/15 mb-3.5">
                  <span className="text-xs font-mono font-bold text-electric-cyan bg-cyan-950/80 px-2.5 py-0.5 rounded-md border border-electric-cyan/40">
                    {exp.type}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {exp.duration}
                  </span>
                </div>

                <h3 className="text-lg font-black text-white group-hover:text-electric-cyan transition-colors mb-1.5">
                  {exp.role}
                </h3>

                <div className="text-xs font-bold text-electric-emerald mb-2">
                  {exp.organization}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-3.5">
                  <Calendar className="w-3.5 h-3.5 text-electric-cyan" />
                  <span>{exp.dateRange}</span>
                </div>

                <p className="text-xs text-slate-300 line-clamp-3 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-1.5 mb-4">
                  {exp.highlights.map((high, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-electric-emerald shrink-0 mt-0.5" />
                      <span>{high}</span>
                    </div>
                  ))}
                </div>
              </div>

              {exp.certificateUrl && (
                <div className="pt-3 border-t border-white/15 mt-2">
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-electric w-full py-2 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2"
                  >
                    <span>View Verified Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
