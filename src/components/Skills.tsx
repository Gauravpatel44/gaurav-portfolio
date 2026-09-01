import React, { useState } from 'react';
import { 
  Code2, 
  Search, 
  Smartphone, 
  Layers, 
  Database, 
  Shield, 
  Bot, 
  LayoutTemplate, 
  ChevronLeft, 
  ChevronRight, 
  Hand 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { useMobileCarousel } from '../hooks';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryNames = ['All', ...skillCategories.map(c => c.name)];

  const getDomainIcon = (name: string) => {
    switch (name) {
      case 'Programming Languages':
        return <Code2 className="w-5 h-5 text-electric-cyan" />;
      case 'Frameworks & Technologies':
        return <Smartphone className="w-5 h-5 text-electric-emerald" />;
      case 'Data Science & Python':
        return <Bot className="w-5 h-5 text-amber-400" />;
      case 'Databases':
        return <Database className="w-5 h-5 text-purple-400" />;
      case 'Development Tools':
        return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Areas of Interest':
        return <Shield className="w-5 h-5 text-rose-400" />;
      default:
        return <LayoutTemplate className="w-5 h-5 text-electric-cyan" />;
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Proficient':
        return 'text-electric-emerald bg-emerald-950/90 border-emerald-500/50 shadow-sm';
      case 'Hands-on':
        return 'text-electric-cyan bg-cyan-950/90 border-cyan-500/50 shadow-sm';
      case 'Experimented':
        return 'text-amber-300 bg-amber-950/90 border-amber-500/50 shadow-sm';
      case 'Learning':
        return 'text-purple-300 bg-purple-950/90 border-purple-500/50 shadow-sm';
      default:
        return 'text-slate-300 bg-slate-800 border-slate-700';
    }
  };

  // Filter skills based on selected category and search input
  const filteredCategories = skillCategories.map(category => {
    if (selectedCategory !== 'All' && category.name !== selectedCategory) {
      return null;
    }

    const matchedSkills = category.skills.filter(skill =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.level.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matchedSkills.length === 0 && searchQuery.trim() !== '') {
      return null;
    }

    return {
      ...category,
      skills: matchedSkills
    };
  }).filter((c): c is typeof skillCategories[0] => Boolean(c));

  const {
    activeSlide,
    carouselRef,
    handleScroll,
    scrollCarousel,
    scrollToSlide,
  } = useMobileCarousel(filteredCategories.length, `${selectedCategory}-${searchQuery}`);

  return (
    <section id="skills" className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-electric-cyan/40 text-[11px] sm:text-xs font-mono text-electric-cyan mb-2 shadow-glow-cyan backdrop-blur-md">
            <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>TECHNICAL SKILL MATRIX</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Applied Tooling & <span className="text-electric-gradient">Ecosystem</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base mt-1 max-w-2xl font-normal">
            Every technical tool is categorized by practical hands-on application across mobile, backend, data analytics, and security.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-5 sm:mb-7">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categoryNames.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-electric-cyan to-electric-emerald text-slate-950 shadow-glow-cyan scale-105 font-black'
                    : 'bg-obsidian-900/80 text-slate-300 hover:text-white border-2 border-white/10 hover:border-electric-cyan/50 backdrop-blur-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[240px] sm:min-w-[260px]">
            <Search className="w-3.5 h-3.5 text-electric-cyan absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Flutter, SQL)..."
              className="w-full pl-9 pr-12 py-2 bg-obsidian-900/90 border-2 border-white/20 hover:border-electric-cyan focus:border-electric-cyan rounded-xl text-base sm:text-xs text-white placeholder-slate-400 focus-ring shadow-inner font-mono font-semibold backdrop-blur-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-obsidian-800 border border-white/10"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* MOBILE CAROUSEL VIEW (< md screens) */}
        <div className="md:hidden">
          
          {/* Mobile Swipe Hint Bar */}
          <div className="flex items-center justify-between px-1 mb-2.5 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-electric-cyan font-bold">
              <Hand className="w-3.5 h-3.5 animate-pulse" />
              <span>Swipe cards ({activeSlide + 1} of {filteredCategories.length})</span>
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
                disabled={activeSlide >= filteredCategories.length - 1}
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
            {filteredCategories.map((category) => (
              <div
                key={category.name}
                className="w-[86vw] max-w-[340px] flex-shrink-0 snap-center bento-card p-5 border-2 border-white/15 hover:border-electric-cyan/60 flex flex-col justify-between shadow-bento backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2.5 mb-2.5">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-obsidian-950/90 border border-white/15 shadow-inner">
                        {getDomainIcon(category.name)}
                      </div>
                      <h3 className="text-base font-black text-white truncate">
                        {category.name}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono font-black text-electric-cyan bg-cyan-950/80 px-2 py-0.5 rounded-full border border-electric-cyan/40 shrink-0">
                      {category.skills.length}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-300 mb-3.5 leading-relaxed line-clamp-2">
                    {category.description}
                  </p>

                  {/* Aligned Tech Chips Grid */}
                  <div className="flex flex-wrap gap-1.5 items-center">
                    {category.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="tech-chip flex items-center justify-between gap-1.5 py-1 px-2 text-[11px] hover:border-electric-cyan"
                      >
                        <span className="font-bold text-white text-[11px]">
                          {skill.name}
                        </span>
                        <span className={`text-[9px] font-mono font-bold px-1 py-0.2 rounded border ${getLevelBadgeClass(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-1.5 pt-2">
            {filteredCategories.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === i 
                    ? 'w-6 bg-gradient-to-r from-electric-cyan to-electric-emerald shadow-glow-cyan' 
                    : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>

        {/* DESKTOP BENTO GRID VIEW (>= md screens) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="bento-card p-5 sm:p-6 border-2 border-white/15 hover:border-electric-cyan/60 flex flex-col justify-between shadow-bento backdrop-blur-md"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-obsidian-950/90 border border-white/15 shadow-inner">
                      {getDomainIcon(category.name)}
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-white">
                      {category.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-black text-electric-cyan bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-electric-cyan/40">
                    {category.skills.length}
                  </span>
                </div>

                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Perfectly Aligned Chips Grid */}
                <div className="flex flex-wrap gap-2 items-center">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="tech-chip flex items-center justify-between gap-2 hover:border-electric-cyan"
                    >
                      <span className="font-bold text-white text-xs">
                        {skill.name}
                      </span>
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${getLevelBadgeClass(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
