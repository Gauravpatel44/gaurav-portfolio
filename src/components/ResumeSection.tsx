import React from 'react';
import { FileText, Download, ExternalLink, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-14 border-b border-white/10 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bento-spotlight p-6 sm:p-10 border-2 border-electric-cyan/50 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Left Info */}
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-cyan-950/80 border border-electric-cyan/40 text-xs font-mono text-electric-cyan font-bold shadow-glow-cyan">
                <FileText className="w-4 h-4" />
                <span>OFFICIAL CURRICULUM VITAE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Download Academic & Technical Resume
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                Includes full semester SPI progression (Sem 1–4), Government Polytechnic Valsad coursework, verified internships from Microsoft & VOIS, and project architecture summaries.
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-200 pt-1">
                <div className="flex items-center gap-1.5 bg-obsidian-950/90 px-2.5 py-1 rounded-lg border border-white/15">
                  <CheckCircle2 className="w-3.5 h-3.5 text-electric-emerald" />
                  <span className="font-bold">Latest SPI: 9.35</span>
                </div>
                <div className="flex items-center gap-1.5 bg-obsidian-950/90 px-2.5 py-1 rounded-lg border border-white/15">
                  <CheckCircle2 className="w-3.5 h-3.5 text-electric-cyan" />
                  <span className="font-bold">3 Industry Programs</span>
                </div>
                <div className="flex items-center gap-1.5 bg-obsidian-950/90 px-2.5 py-1 rounded-lg border border-white/15">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                  <span className="font-bold">Rakshak Connect Repo</span>
                </div>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-electric inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-extrabold shadow-glow-cyan focus-ring"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-obsidian-900/90 hover:bg-obsidian-800 border-2 border-white/20 hover:border-electric-cyan transition-all shadow-bento focus-ring backdrop-blur-md"
              >
                <span>Preview on Drive</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
