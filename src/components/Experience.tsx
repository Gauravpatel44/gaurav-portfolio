import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  Building2, 
  ExternalLink, 
  Award, 
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
            <span>INDUSTRY INITIATIVES & INTERNSHIPS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Practical Experience & <span className="text-electric-gradient">Industry Programs</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base mt-1 max-w-2xl font-normal">
            Formal technical initiatives and virtual internships completed with Microsoft AICTE, Vodafone Idea Foundation / VOIS, and BharatCares / IBM.
          </p>
        </div>

        {/* MOBILE CAROUSEL VIEW (< md screens) */}
        <div className="md:hidden">
          
          {/* Mobile Swipe Hint Bar */}
          <div className="flex items-center justify-between px-1 mb-2.5 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-electric-cyan font-bold">
              <Hand className="w-3.5 h-3.5 animate-pulse" />
              <span>Swipe programs ({activeSlide + 1} of {experienceData.length})</span>
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollCarousel('left')}
                disabled={activeSlide === 0}
                className="p-1 rounded-lg bg-obsidian-900 border border-white/15 text-slate-300 disabled:opacity-40"
                aria-label="Previous experience card"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                disabled={activeSlide >= experienceData.length - 1}
                className="p-1 rounded-lg bg-obsidian-900 border border-white/15 text-slate-300 disabled:opacity-40"
                aria-label="Next experience card"
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
            {experienceData.map((item) => (
              <div
                key={item.id}
                className="w-[86vw] max-w-[340px] flex-shrink-0 snap-center bento-card p-5 border-2 border-white/15 hover:border-electric-cyan/60 flex flex-col justify-between shadow-bento backdrop-blur-md space-y-3.5"
              >
                <div className="space-y-3">
                  {/* Header */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-base font-black text-white truncate">
                        {item.organization}
                      </span>
                      <span className="text-[10px] font-mono font-black text-electric-cyan bg-cyan-950/90 px-2 py-0.5 rounded-md border border-electric-cyan/40 shrink-0">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-electric-cyan">
                      {item.role}
                    </h3>
                  </div>

                  {/* Duration & Dates */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-300 bg-obsidian-950/80 p-2 rounded-lg border border-white/10">
                    <span className="text-electric-emerald font-bold">{item.duration}</span>
                    <span className="flex items-center gap-1 text-slate-400 font-medium">
                      <Calendar className="w-3 h-3" />
                      {item.dateRange}
                    </span>
                  </div>

                  {/* Partner Details */}
                  {item.partner && (
                    <div className="p-2.5 rounded-xl bg-obsidian-950/90 border border-white/15 text-[11px] font-mono text-slate-200 flex items-start gap-2 shadow-inner">
                      <Building2 className="w-3.5 h-3.5 text-electric-cyan shrink-0 mt-0.5" />
                      <span className="line-clamp-2">Partner: <strong className="text-white font-bold">{item.partner}</strong></span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-[11px] text-slate-300 leading-relaxed font-normal line-clamp-3">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-2 border-t border-white/15">
                    {item.highlights.slice(0, 2).map((h, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-1.5 text-[10px] text-slate-200 p-2 rounded-lg bg-obsidian-950/80 border border-white/10"
                      >
                        <CheckCircle2 className="w-3 h-3 text-electric-emerald shrink-0 mt-0.5" />
                        <span className="font-semibold line-clamp-2">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certificate CTA */}
                {item.certificateUrl && (
                  <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs">
                    <span className="font-mono text-electric-emerald flex items-center gap-1 font-bold text-[10px]">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified Record</span>
                    </span>

                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-electric inline-flex items-center gap-1 px-3 py-1 text-[11px] font-black"
                    >
                      <Award className="w-3 h-3" />
                      <span>Certificate</span>
                      <ExternalLink className="w-2.5 h-2.5" />
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
                aria-label={`Go to program ${i + 1}`}
              />
            ))}
          </div>

        </div>

        {/* DESKTOP VIEW (>= md screens) */}
        <div className="hidden md:block space-y-4 max-w-4xl">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="bento-card p-6 sm:p-7 border-2 border-white/15 hover:border-electric-cyan/60 transition-all duration-300 space-y-4 shadow-bento backdrop-blur-md"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg sm:text-xl font-black text-white">
                      {item.organization}
                    </span>
                    <span className="text-[10px] font-mono font-black text-electric-cyan bg-cyan-950/90 px-2.5 py-0.5 rounded-md border border-electric-cyan/40">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-electric-cyan mt-0.5">
                    {item.role}
                  </h3>
                </div>

                <div className="flex flex-col sm:items-end font-mono text-xs">
                  <span className="text-electric-emerald font-black bg-emerald-950/80 px-2.5 py-0.5 rounded-md border border-electric-emerald/40">{item.duration}</span>
                  <span className="text-slate-400 mt-1 flex items-center gap-1 font-semibold text-[11px]">
                    <Calendar className="w-3 h-3" />
                    {item.dateRange}
                  </span>
                </div>
              </div>

              {/* Partner Details */}
              {item.partner && (
                <div className="p-3 rounded-xl bg-obsidian-950/90 border border-white/15 text-xs font-mono text-slate-200 flex items-center gap-2.5 shadow-inner">
                  <Building2 className="w-4 h-4 text-electric-cyan shrink-0" />
                  <span>Partner: <strong className="text-white font-bold">{item.partner}</strong></span>
                </div>
              )}

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-white/15">
                {item.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-xs text-slate-200 p-2.5 rounded-lg bg-obsidian-950/80 border border-white/10"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-electric-emerald shrink-0 mt-0.5" />
                    <span className="font-semibold">{h}</span>
                  </div>
                ))}
              </div>

              {/* Certificate CTA */}
              {item.certificateUrl && (
                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs">
                  <span className="font-mono text-electric-emerald flex items-center gap-1.5 font-bold text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Completion Document</span>
                  </span>

                  <a
                    href={item.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-electric inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-black"
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>View Official Certificate</span>
                    <ExternalLink className="w-3 h-3" />
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
