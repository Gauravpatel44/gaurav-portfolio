import React from 'react';
import { FileText, Download, ExternalLink, Award, CheckCircle2, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Bento Resume Container */}
        <div className="bento-card p-6 sm:p-10 border-2 border-electric-cyan/40 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-3.5 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-electric-cyan/40 text-[11px] sm:text-xs font-mono text-electric-cyan shadow-glow-cyan backdrop-blur-md">
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>OFFICIAL CURRICULUM VITAE</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                Download & Review <span className="text-electric-gradient">Official Resume</span>
              </h2>

              <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
                Structured document detailing complete academic history at Government Polytechnic Valsad, verified virtual internships with Microsoft & VOIS, and real open-source GitHub repositories.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300 pt-1">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-obsidian-950/80 border border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-electric-emerald shrink-0" />
                  <span className="truncate font-semibold">Updated with Semester 4 SPI (9.35)</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-obsidian-950/80 border border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-electric-emerald shrink-0" />
                  <span className="truncate font-semibold">Includes Verified Certificate IDs</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={personalInfo.resumeDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-electric inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-black focus-ring"
                >
                  <Download className="w-4 h-4" />
                  <span>Open Full PDF in Google Drive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Document Badge */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-xs p-5 rounded-2xl bg-obsidian-950/90 border-2 border-white/15 text-center space-y-3 font-mono text-xs shadow-inner">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-cyan-950/90 border border-electric-cyan/50 flex items-center justify-center text-electric-cyan shadow-glow-cyan">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <div className="font-black text-sm text-white">{personalInfo.formalName}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Diploma in IT · 2024–2027</div>
                </div>
                <div className="p-2 rounded-lg bg-obsidian-900 border border-white/10 text-[10px] text-electric-emerald font-bold">
                  PDF Document · Verified Drive Link
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
