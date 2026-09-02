import React from 'react';
import { Terminal, Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-transparent border-t border-white/10 relative z-10 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-cyan-950/80 border border-electric-cyan/40 text-electric-cyan">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-black text-white text-sm">
              GAURAV<span className="text-electric-gradient">.DEV</span>
            </span>
          </div>

          {/* Copyright & Location */}
          <div className="text-slate-400 text-center">
            Built with React, TypeScript, Tailwind CSS & Canvas Physics · Valsad, Gujarat
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-obsidian-900 border border-white/15 text-slate-300 hover:text-white hover:border-electric-cyan transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-obsidian-900 border border-white/15 text-slate-300 hover:text-white hover:border-electric-cyan transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-xl bg-obsidian-900 border border-white/15 text-slate-300 hover:text-white hover:border-electric-cyan transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-obsidian-900 border border-white/15 text-slate-300 hover:text-white hover:border-electric-cyan transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
