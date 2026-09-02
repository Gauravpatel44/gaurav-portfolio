import React from 'react';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2, Trophy } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import { EducationItem, SemesterInfo } from '../types/portfolio';

export const Education: React.FC = () => {
  // Support both single object and array safely
  const education: EducationItem = Array.isArray(educationData) ? educationData[0] : educationData;

  return (
    <section id="education" className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-electric-cyan/40 text-[11px] sm:text-xs font-mono text-electric-cyan mb-2 shadow-glow-cyan backdrop-blur-md">
            <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>ACADEMIC FOUNDATION & TRACK RECORD</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Formal Education & <span className="text-electric-gradient">Academic Journey</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base mt-1 max-w-2xl font-normal">
            Pursuing Diploma in Information Technology at Government Polytechnic Valsad (2024–2027) with high academic distinction.
          </p>
        </div>

        {/* Bento Academic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          
          {/* Main Education Bento Card */}
          <div className="lg:col-span-8">
            <div className="bento-card p-5 sm:p-7 border-2 border-white/15 hover:border-electric-cyan/60 transition-all duration-300 shadow-bento backdrop-blur-md space-y-4 sm:space-y-5">
              
              {/* Institution Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 pb-3 sm:pb-4 border-b border-white/15">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-mono font-black text-electric-cyan bg-cyan-950/90 px-2.5 py-0.5 rounded-md border border-electric-cyan/40">
                      Technical Diploma
                    </span>
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-electric-emerald bg-emerald-950/80 px-2 py-0.5 rounded-md border border-electric-emerald/40">
                      {education.status}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1.5">
                    {education.degree}
                  </h3>
                  <div className="text-xs sm:text-sm font-bold text-slate-300 mt-0.5">
                    {education.institution}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end font-mono text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 font-bold text-white text-xs sm:text-sm">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-electric-cyan" />
                    {education.period}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400 mt-1 text-[11px] sm:text-xs font-medium">
                    <MapPin className="w-3 h-3 text-electric-emerald" />
                    {education.location}
                  </span>
                </div>
              </div>

              {/* Coursework & Competency Highlights */}
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Academic Focus & Applied Competencies:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {education.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 p-2.5 rounded-xl bg-obsidian-950/90 border border-white/10 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-electric-emerald shrink-0 mt-0.5" />
                      <span className="font-semibold text-[11px] sm:text-xs leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Semester Progression Bento (2x2 Grid on Mobile) */}
          <div className="lg:col-span-4">
            <div className="bento-card p-4 sm:p-5 border-2 border-electric-cyan/40 shadow-bento space-y-3 backdrop-blur-md">
              <div className="flex items-center justify-between pb-2.5 border-b border-white/15">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span className="text-xs sm:text-sm font-black text-white font-mono">Semester Progression</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-electric-emerald bg-emerald-950/80 px-2 py-0.5 rounded border border-electric-emerald/40">
                  9.07 Avg SPI
                </span>
              </div>

              {/* 2x2 Grid on Mobile, Single Column on Desktop */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                {education.semesters.map((sem, index) => (
                  <div
                    key={index}
                    className={`p-2.5 sm:p-3 rounded-xl border transition-all flex flex-col justify-between ${
                      sem.highlight
                        ? 'bg-cyan-950/60 border-electric-cyan/60 shadow-glow-cyan'
                        : 'bg-obsidian-950/80 border-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                      <span className="font-bold text-slate-300">{sem.semester}</span>
                      {sem.highlight && (
                        <span className="text-[9px] font-bold text-electric-cyan px-1 py-0.2 rounded bg-cyan-950 border border-cyan-500/40">
                          ★ Peak
                        </span>
                      )}
                    </div>

                    <div className="flex items-baseline justify-between">
                      <span className="text-base sm:text-lg font-black font-mono text-white">
                        {sem.spi.toFixed(2)}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">
                        / 10.00
                      </span>
                    </div>

                    <div className="mt-1.5 h-1.5 w-full bg-obsidian-900 rounded-full overflow-hidden border border-white/5">
                      <div
                        className={`h-full rounded-full ${
                          sem.highlight 
                            ? 'bg-gradient-to-r from-electric-cyan to-electric-emerald' 
                            : 'bg-slate-500'
                        }`}
                        style={{ width: `${(sem.spi / 10) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Standing:</span>
                <span className="font-black text-electric-emerald">First Class with Distinction</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
