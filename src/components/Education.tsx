import React from 'react';
import { GraduationCap, Award, TrendingUp, BookOpen, Compass, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-electric-emerald/40 text-[11px] sm:text-xs font-mono text-electric-emerald mb-2 shadow-glow-emerald backdrop-blur-md">
            <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>ACADEMIC PERFORMANCE & SPI PROGRESSION</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Academic Pathway & <span className="text-electric-gradient">Transcript Records</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base mt-1 max-w-2xl font-normal">
            Continuous academic performance and technical foundation at Government Polytechnic Valsad.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          
          {/* Main Institution Bento Box */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3 sm:gap-4">
            <div className="bento-card p-5 sm:p-7 border-2 border-electric-cyan/40 shadow-glow-cyan space-y-3 sm:space-y-4 flex-1 backdrop-blur-md">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[10px] sm:text-xs font-mono font-black text-slate-950 bg-electric-cyan px-2.5 py-0.5 rounded-md shadow-sm">
                    {educationData.period}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-black text-white mt-2 leading-snug">
                    {educationData.institution}
                  </h3>
                  <div className="text-xs sm:text-sm font-black text-electric-emerald mt-0.5 font-mono">
                    {educationData.degree}
                  </div>
                </div>

                <div className="p-2.5 sm:p-3 rounded-2xl bg-obsidian-950/90 border border-electric-cyan/40 text-electric-cyan shrink-0 shadow-inner">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {educationData.description}
              </p>

              <div className="pt-3 sm:pt-4 border-t border-white/15 space-y-1.5 sm:space-y-2 text-xs font-mono text-slate-300">
                <div className="flex items-center justify-between p-2 rounded-lg bg-obsidian-950/80 border border-white/10">
                  <span className="text-slate-400 font-bold text-[11px] sm:text-xs">Academic Status:</span>
                  <span className="text-electric-emerald font-black text-[11px] sm:text-xs">{educationData.status}</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-obsidian-950/80 border border-white/10">
                  <span className="text-slate-400 font-bold text-[11px] sm:text-xs">Campus Location:</span>
                  <span className="text-white font-bold text-[11px] sm:text-xs">{educationData.location}</span>
                </div>
              </div>
            </div>

            {/* Next Academic Step: B.Tech Target */}
            <div className="bento-card p-4 sm:p-5 border-2 border-purple-500/40 bg-obsidian-950/80 space-y-1.5 sm:space-y-2.5 shadow-bento backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-purple-400 font-black tracking-wider uppercase">
                <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
                <span>Next Milestone Pathway</span>
              </div>
              <h4 className="text-xs sm:text-base font-black text-white">
                Planning B.Tech in Information Technology
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                Planning to pursue B.Tech in IT after diploma graduation. (College selection: <span className="text-white font-bold font-mono">"To Be Decided"</span>).
              </p>
            </div>
          </div>

          {/* Right Semester Progression Bento Column */}
          <div className="lg:col-span-7 space-y-3 flex flex-col justify-between">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-black flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-electric-cyan" />
                <span>Semester Performance (SPI / 10.0)</span>
              </h3>
              <span className="text-[10px] sm:text-xs font-mono text-electric-cyan font-black bg-cyan-950/80 px-2 py-0.5 rounded border border-electric-cyan/40">
                10.0 Scale
              </span>
            </div>

            {/* 2x2 Grid on Mobile for compact display */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3 flex-1">
              {educationData.semesters.map((sem, index) => {
                const percentage = (sem.spi / sem.maxSpi) * 100;
                const isLatest = sem.semester === "Semester 4";

                return (
                  <div
                    key={index}
                    className={`bento-card p-3 sm:p-4 border-2 transition-all duration-300 backdrop-blur-md flex flex-col justify-between ${
                      isLatest
                        ? 'border-electric-cyan bg-obsidian-900/90 shadow-glow-cyan'
                        : 'border-white/15 bg-obsidian-900/80'
                    }`}
                  >
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="font-black text-white text-xs sm:text-base">
                            {sem.semester}
                          </span>
                          {isLatest && (
                            <span className="hidden sm:inline-block text-[9px] font-mono font-black text-slate-950 bg-gradient-to-r from-electric-cyan to-electric-emerald px-1.5 py-0.2 rounded shadow-md">
                              ★ Highest
                            </span>
                          )}
                        </div>

                        <div className="flex items-baseline gap-1 font-mono">
                          <span className={`text-lg sm:text-2xl font-black ${isLatest ? 'text-electric-cyan' : 'text-electric-emerald'} drop-shadow-md`}>
                            {sem.spi.toFixed(2)}
                          </span>
                          <span className="text-[10px] font-bold text-slate-400">/ 10</span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-obsidian-950 rounded-full h-1.5 sm:h-2 overflow-hidden mb-1.5 border border-white/10 p-0.5 shadow-inner">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ${
                            isLatest
                              ? 'bg-gradient-to-r from-electric-cyan via-cyan-400 to-electric-emerald shadow-glow-cyan'
                              : 'bg-gradient-to-r from-emerald-600 to-electric-emerald'
                          }`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>

                    {sem.highlight && (
                      <p className="text-[10px] sm:text-[11px] text-slate-200 flex items-center gap-1.5 font-mono truncate">
                        <CheckCircle2 className="w-3 h-3 text-electric-emerald shrink-0" />
                        <span className="truncate">{sem.highlight}</span>
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Academic Standing Callout */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-obsidian-950/85 border-2 border-amber-500/40 flex items-center justify-between text-xs font-mono text-slate-200 shadow-inner backdrop-blur-md">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="font-bold text-white text-[11px] sm:text-xs">Overall Academic Average</span>
              </div>
              <span className="font-black text-amber-400 text-xs sm:text-sm font-mono">
                ~9.07 SPI
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
