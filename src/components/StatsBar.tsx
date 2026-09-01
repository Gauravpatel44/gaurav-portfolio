import React from 'react';
import { Code, Calendar, Briefcase, TrendingUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      value: personalInfo.stats.latestSpi,
      label: "Latest SPI",
      subLabel: "Sem 4 Academic",
      icon: TrendingUp,
      valueColor: "text-electric-cyan",
      borderColor: "border-electric-cyan/40 hover:border-electric-cyan",
      iconBg: "bg-cyan-950/80 text-electric-cyan border-electric-cyan/30"
    },
    {
      value: personalInfo.stats.projectsCount,
      label: "GitHub Repos",
      subLabel: "Flutter, ML & Python",
      icon: Code,
      valueColor: "text-electric-emerald",
      borderColor: "border-electric-emerald/40 hover:border-electric-emerald",
      iconBg: "bg-emerald-950/80 text-electric-emerald border-electric-emerald/30"
    },
    {
      value: "3",
      label: "Certificates",
      subLabel: "Microsoft, VOIS, IBM",
      icon: Briefcase,
      valueColor: "text-purple-400",
      borderColor: "border-purple-500/40 hover:border-purple-400",
      iconBg: "bg-purple-950/80 text-purple-400 border-purple-500/30"
    },
    {
      value: "2024–27",
      label: "Diploma",
      subLabel: "GP Valsad IT",
      icon: Calendar,
      valueColor: "text-amber-400",
      borderColor: "border-amber-500/40 hover:border-amber-400",
      iconBg: "bg-amber-950/80 text-amber-400 border-amber-500/30"
    }
  ];

  return (
    <section className="relative -mt-6 sm:-mt-8 z-20 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      {/* 2x2 Grid on Mobile to cut vertical scrolling length in half */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`bento-card p-3 sm:p-5 border-2 ${item.borderColor} flex flex-col sm:flex-row items-start sm:items-start justify-between gap-2 sm:gap-4 shadow-bento`}
            >
              <div className="space-y-0.5 sm:space-y-1">
                <div className={`text-2xl sm:text-3xl md:text-4xl font-black tracking-tight font-mono ${item.valueColor} drop-shadow-md`}>
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-white tracking-wide leading-tight">
                  {item.label}
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 leading-tight">
                  {item.subLabel}
                </div>
              </div>

              <div className={`p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border shadow-inner ${item.iconBg} self-end sm:self-start`}>
                <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
