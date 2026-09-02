import React from 'react';
import { Award, FolderGit2, Calendar, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: <Award className="w-5 h-5 text-electric-cyan" />,
      value: `${personalInfo.latestSpi?.toFixed(2) || '9.35'}`,
      label: 'Latest SPI (Sem 4)',
      subtext: `Avg SPI: ${personalInfo.averageSpi?.toFixed(2) || '9.07'}`,
      accent: 'border-electric-cyan/40 hover:border-electric-cyan',
      glow: 'shadow-glow-cyan'
    },
    {
      icon: <FolderGit2 className="w-5 h-5 text-electric-emerald" />,
      value: '4+',
      label: 'Real GitHub Repos',
      subtext: 'Flutter, Python, AI Anomaly',
      accent: 'border-electric-emerald/40 hover:border-electric-emerald',
      glow: 'shadow-glow-emerald'
    },
    {
      icon: <Calendar className="w-5 h-5 text-purple-400" />,
      value: personalInfo.years || '2024 – 2027',
      label: 'Diploma Journey',
      subtext: 'GP Valsad (IT Branch)',
      accent: 'border-purple-500/40 hover:border-purple-400',
      glow: 'shadow-glow-purple'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      value: '3 Verified',
      label: 'Certifications & Internships',
      subtext: 'Microsoft, VOIS, IBM',
      accent: 'border-amber-500/40 hover:border-amber-400',
      glow: 'shadow-glow-amber'
    }
  ];

  return (
    <section className="py-6 sm:py-8 border-b border-white/10 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bento-card p-4 sm:p-5 border-2 ${stat.accent} transition-all duration-300 flex flex-col justify-between shadow-bento backdrop-blur-md`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="p-2 rounded-xl bg-obsidian-950/90 border border-white/15 shadow-inner">
                  {stat.icon}
                </span>
                <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-400 text-right truncate">
                  {stat.label}
                </span>
              </div>

              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black font-mono tracking-tight text-white">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-mono mt-0.5 truncate">
                  {stat.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
