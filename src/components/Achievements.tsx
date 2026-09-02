import React from 'react';
import { Trophy, Award, Star, ArrowUpRight } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-electric-cyan/40 text-[11px] sm:text-xs font-mono text-electric-cyan mb-2 shadow-glow-cyan backdrop-blur-md">
            <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>MILESTONES & RECOGNITION</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Key Achievements & <span className="text-electric-gradient">Milestones</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base mt-1 max-w-2xl font-normal">
            Highlighted academic distinctions, software milestones, and project recognitions.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {achievementsData.map((item, index) => (
            <div
              key={item.id || index}
              className="bento-card p-5 sm:p-6 border-2 border-white/15 hover:border-electric-cyan/60 flex flex-col justify-between shadow-bento group backdrop-blur-md transition-all duration-300 space-y-4"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="p-2 rounded-xl bg-obsidian-950/90 border border-white/15 text-amber-400 shadow-inner group-hover:scale-105 transition-transform">
                    <Award className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] font-mono font-bold text-electric-cyan bg-cyan-950/80 px-2 py-0.5 rounded-md border border-electric-cyan/40">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base font-black text-white mb-1.5 group-hover:text-electric-cyan transition-colors">
                  {item.title}
                </h3>

                <div className="text-xs font-mono text-electric-emerald font-bold mb-2">
                  {item.organization} · {item.date}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {item.metric && (
                <div className="pt-2.5 border-t border-white/15 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Metric / Result:</span>
                  <span className="text-white font-black text-xs bg-obsidian-950/90 px-2.5 py-0.5 rounded-md border border-white/10">
                    {item.metric}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
