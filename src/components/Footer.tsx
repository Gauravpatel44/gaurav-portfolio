import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-transparent border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-black text-sm sm:text-base text-white">Gaurav Patel</span>
              <span className="text-slate-600 font-bold">/</span>
              <span className="text-xs font-mono text-electric-cyan font-bold">Government Polytechnic Valsad</span>
            </div>
            <p className="text-xs text-slate-400 font-normal">
              Diploma in Information Technology (2024–2027) · Open Source & Practical Software Portfolio
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-obsidian-900/90 border border-white/15 text-slate-300 hover:text-white hover:border-electric-cyan transition-all shadow-sm backdrop-blur-md"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-obsidian-900/90 border border-white/15 text-slate-300 hover:text-white hover:border-electric-cyan transition-all shadow-sm backdrop-blur-md"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-xl bg-obsidian-900/90 border border-white/15 text-slate-300 hover:text-white hover:border-electric-cyan transition-all shadow-sm backdrop-blur-md"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-obsidian-900/90 border border-white/15 text-slate-300 hover:text-white hover:border-electric-cyan transition-all shadow-sm focus-ring backdrop-blur-md"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
