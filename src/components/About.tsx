import React from 'react';
import { User, Code2, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-electric-cyan/40 text-[11px] sm:text-xs font-mono text-electric-cyan mb-2 shadow-glow-cyan backdrop-blur-md">
            <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            About <span className="text-electric-gradient">Gaurav Patel</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base mt-1 max-w-2xl font-normal">
            A software developer with a practical problem-solving mindset, combining academic rigor with real hands-on development.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-8">
            <div className="bento-card p-5 sm:p-7 border-2 border-white/15 hover:border-electric-cyan/60 transition-all duration-300 h-full flex flex-col justify-between shadow-bento backdrop-blur-md space-y-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-electric-cyan font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>DIPLOMA IN IT · GOVERNMENT POLYTECHNIC VALSAD</span>
                </div>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  {personalInfo.aboutText || personalInfo.shortIntro || 'An Information Technology student with hands-on focus in Flutter, Python, Data Analytics, and Cybersecurity.'}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  My technical focus spans mobile app engineering (Flutter/Dart), exploratory data analytics (Python, Pandas, Seaborn), network intrusion anomaly detection, and modern UI engineering.
                </p>
              </div>

              {/* Badges Strip (2-column on mobile) */}
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/15 text-[11px] sm:text-xs font-mono">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-obsidian-950/80 border border-white/10 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-electric-cyan shrink-0" />
                  <span className="truncate">{personalInfo.location}</span>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-xl bg-obsidian-950/80 border border-white/10 text-slate-300">
                  <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-electric-emerald shrink-0" />
                  <span className="truncate">GP Valsad (2024–27)</span>
                </div>
              </div>

            </div>
          </div>

          {/* Side Philosophy Bento Card */}
          <div className="lg:col-span-4">
            <div className="bento-card p-5 sm:p-7 border-2 border-white/15 hover:border-electric-emerald/60 transition-all duration-300 h-full flex flex-col justify-between shadow-bento backdrop-blur-md space-y-3.5">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-electric-emerald uppercase tracking-wider mb-2">
                  <Code2 className="w-4 h-4" />
                  <span>Technical Philosophy</span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-white mb-2">
                  Code that solves real problems.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  I believe in building real, usable software rather than hypothetical concepts. Every repository reflects hands-on implementation and structured documentation.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-obsidian-950/90 border border-white/15 text-[11px] font-mono text-electric-cyan space-y-1">
                <div>⚡ 100% Practical Implementation</div>
                <div>🛡️ Clean Defensive Architecture</div>
                <div>📱 Responsive Mobile-First Design</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
