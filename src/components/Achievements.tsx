import React from 'react';
import { Award, TrendingUp, Code, Briefcase } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Academic':
        return <TrendingUp className="w-5 h-5 text-electric-cyan" />;
      case 'Open Source':
      case 'Development':
        return <Code className="w-5 h-5 text-electric-emerald" />;
      case 'Training':
        return <Briefcase className="w-5 h-5 text-purple-400" />;
      default:
        return <Award className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="achievements" className="py-12 sm:py-14 border-b border-white/10 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-electric-cyan/40 text-xs font-mono text-electric-cyan mb-2.5 shadow-glow-cyan backdrop-blur-md">
            <Award className="w-4 h-4" />
            <span>ACADEMIC & PRACTICAL MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Key Academic & <span className="text-electric-gradient">Development Highlights</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-1.5 max-w-2xl font-normal">
            Verified milestones across diploma semesters, open-source publishing, and global training programs.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="bento-card p-5 sm:p-6 border-2 border-white/15 hover:border-electric-cyan/60 flex items-start gap-4 shadow-bento backdrop-blur-md"
            >
              <div className="p-3 rounded-2xl bg-obsidian-950/90 border border-white/15 shrink-0 shadow-inner">
                {getCategoryIcon(item.category)}
              </div>

              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  {item.metric && (
                    <span className="text-xs font-mono font-black text-electric-emerald bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40">
                      {item.metric}
                    </span>
                  )}
                </div>

                <h3 className="text-sm sm:text-base font-black text-white leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
