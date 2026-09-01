import React from 'react';
import { User, Cpu, Shield, Globe, MapPin, GraduationCap, Terminal, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const focusAreas = [
    {
      title: "Mobile App Engineering",
      description: "Architecting responsive safety-critical apps in Flutter & Dart with sirens and SMS dispatchers.",
      icon: Cpu,
      tag: "Flutter / Dart",
      color: "border-electric-cyan/40 bg-cyan-950/40 text-electric-cyan"
    },
    {
      title: "Data Analytics & Modeling",
      description: "Pipelines, feature engineering, and statistical visualization using Python, Pandas, & Seaborn.",
      icon: Globe,
      tag: "Python / Pandas / Seaborn",
      color: "border-electric-emerald/40 bg-emerald-950/40 text-electric-emerald"
    },
    {
      title: "Cybersecurity & Detection",
      description: "Network anomaly classification, packet inspection models developed via Microsoft AICTE & VOIS.",
      icon: Shield,
      tag: "AI NIDS / Security",
      color: "border-purple-500/40 bg-purple-950/40 text-purple-400"
    }
  ];

  return (
    <section id="about" className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-electric-cyan/40 text-[11px] sm:text-xs font-mono text-electric-cyan mb-2 shadow-glow-cyan backdrop-blur-md">
            <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>AUTHENTIC DEVELOPER STORY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Engineering Background & <span className="text-electric-gradient">Technical Focus</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          
          {/* Main Story Bento Card */}
          <div className="lg:col-span-7 bento-card p-5 sm:p-7 border-2 border-white/15 flex flex-col justify-between space-y-4 backdrop-blur-md">
            <div className="space-y-3 text-slate-200 leading-relaxed text-xs sm:text-base">
              <p>
                I am an <strong className="text-white font-black">Information Technology student</strong> at <strong className="text-electric-cyan font-bold">Government Polytechnic Valsad</strong> who enjoys turning practical concepts into functioning software systems.
              </p>

              <p>
                Rather than generic demo templates, my portfolio emphasizes real, reproducible open-source implementations on GitHub — including <strong className="text-electric-cyan font-mono">Rakshak Connect</strong> (Flutter SOS safety app), <strong className="text-electric-emerald font-mono">Car Market Trends</strong> (VOIS Data Analytics Project-4), and <strong className="text-purple-400 font-mono">AI NIDS</strong> (machine learning intrusion detection).
              </p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-obsidian-950/90 border border-electric-cyan/30 text-[11px] sm:text-xs font-mono text-slate-200 flex items-center gap-2.5 shadow-inner">
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-electric-cyan shrink-0" />
              <span className="font-semibold text-slate-200">
                "Build software that addresses real human needs, maintains solid data integrity, and operates transparently."
              </span>
            </div>

            {/* Quick Factual Tile Strip - 2 columns on mobile */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div className="p-2.5 sm:p-3.5 rounded-xl bg-obsidian-900/80 border border-white/15 flex items-center gap-2.5 backdrop-blur-sm">
                <div className="p-1.5 sm:p-2 rounded-lg bg-cyan-950/80 text-electric-cyan border border-electric-cyan/40">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase font-bold">Location</div>
                  <div className="text-xs sm:text-sm font-black text-white">{personalInfo.location}</div>
                </div>
              </div>

              <div className="p-2.5 sm:p-3.5 rounded-xl bg-obsidian-900/80 border border-white/15 flex items-center gap-2.5 backdrop-blur-sm">
                <div className="p-1.5 sm:p-2 rounded-lg bg-emerald-950/80 text-electric-emerald border border-electric-emerald/40">
                  <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase font-bold">Current Diploma</div>
                  <div className="text-xs sm:text-sm font-black text-white">IT (2024–2027)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Core Pillars Bento Column */}
          <div className="lg:col-span-5 flex flex-col gap-2.5 sm:gap-3.5">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 px-1 font-bold flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-electric-cyan" />
              <span>Core Applied Pillars</span>
            </div>

            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className={`bento-card p-3.5 sm:p-5 border-2 ${area.color} transition-all duration-300 shadow-md flex-1 flex flex-col justify-between backdrop-blur-md`}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-obsidian-950/90 border border-white/15 text-white shrink-0 shadow-inner">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs sm:text-base font-black text-white">
                        {area.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-normal">
                        {area.description}
                      </p>
                      <div className="pt-1">
                        <span className="tech-chip text-[10px] sm:text-xs py-0.5 px-2">{area.tag}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
