import React from 'react';
import { 
  ArrowUpRight, 
  FolderGit2, 
  FileText, 
  Award,
  Copy,
  Check
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 border-b border-white/10 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Developer Status Pill */}
        <div className="flex flex-wrap items-center gap-2 mb-4 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-electric-cyan/40 text-[11px] sm:text-xs font-mono text-electric-cyan shadow-glow-cyan backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>AVAILABLE FOR TECHNICAL COLLABORATION & INTERNSHIPS</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-obsidian-900/80 border border-white/15 text-[11px] sm:text-xs font-mono text-slate-300 backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Latest SPI: <strong className="text-white">9.35</strong> (Sem 4)</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-electric-gradient">{personalInfo.name}</span>.
              </h1>
              <p className="text-base sm:text-xl font-bold text-slate-200 mt-1 sm:mt-2">
                {personalInfo.title}
              </p>
            </div>

            <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
              {personalInfo.tagline} Currently pursuing Diploma coursework at <strong>Government Polytechnic Valsad</strong> while engineering open-source projects in Flutter, Python, and applied data analytics.
            </p>

            {/* High-Contrast CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="btn-electric inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-black focus-ring"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>Explore Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-obsidian-900/90 hover:bg-obsidian-850 border-2 border-white/20 hover:border-electric-cyan transition-all shadow-bento backdrop-blur-md focus-ring"
              >
                <FileText className="w-4 h-4 text-electric-cyan" />
                <span>View Full Resume</span>
              </a>

              <button
                onClick={copyEmail}
                className="p-2.5 sm:p-3 rounded-xl bg-obsidian-900/80 hover:bg-obsidian-850 border-2 border-white/15 text-slate-300 hover:text-white hover:border-electric-cyan/50 transition-all focus-ring shadow-sm"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-4 h-4 text-electric-emerald" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Right Terminal Card Showcase */}
          <div className="lg:col-span-5">
            <div className="bento-card border-2 border-electric-cyan/40 shadow-2xl p-4 sm:p-5 backdrop-blur-md font-mono text-xs space-y-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-white/15 text-slate-400">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-[11px] text-slate-400 ml-2 font-bold">gaurav@gpvalsad:~</span>
                </div>
                <span className="text-[10px] text-electric-cyan">zsh</span>
              </div>

              <div className="space-y-2 text-[11px] sm:text-xs">
                <div>
                  <span className="text-electric-emerald">$</span> <span className="text-white">whoami</span>
                  <div className="text-slate-300 pl-4 mt-0.5">Patel Gaurav Dinesh (Diploma IT Student)</div>
                </div>

                <div>
                  <span className="text-electric-emerald">$</span> <span className="text-white">cat stack.json</span>
                  <div className="text-electric-cyan pl-4 mt-0.5">{`["Flutter", "Python", "SQL", "Pandas", "AI"]`}</div>
                </div>

                <div>
                  <span className="text-electric-emerald">$</span> <span className="text-white">git status --active</span>
                  <div className="text-slate-300 pl-4 mt-0.5">
                    <span className="text-electric-emerald">●</span> Rakshak Connect (SOS Safety App)<br/>
                    <span className="text-electric-emerald">●</span> Car Market EDA (VOIS Project-4)
                  </div>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-obsidian-950/90 border border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                <span>Location: <strong className="text-white">Valsad, Gujarat</strong></span>
                <span className="text-electric-emerald font-bold">● Status: Active</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
