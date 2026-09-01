import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certifications' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-obsidian-950/95 backdrop-blur-lg border-b border-white/15 py-3 sm:py-3.5 shadow-2xl'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identifier */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 sm:gap-3.5 focus-ring rounded-lg py-1 px-1 -ml-1 group"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-obsidian-900 border-2 border-electric-cyan/60 flex items-center justify-center font-mono font-black text-xs sm:text-sm text-electric-cyan group-hover:shadow-glow-cyan transition-all">
              GP
            </div>
            <div className="flex flex-col">
              <span className="font-black text-sm sm:text-base tracking-tight text-white group-hover:text-electric-cyan transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 font-bold">
                IT Student & Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-obsidian-900/90 p-1.5 rounded-2xl border border-white/15 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'text-slate-950 bg-gradient-to-r from-electric-cyan to-electric-emerald shadow-glow-cyan font-black'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-obsidian-900 border-2 border-white/15 text-slate-200 hover:text-white hover:border-electric-cyan transition-all shadow-sm"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-obsidian-900 border-2 border-white/15 text-slate-200 hover:text-white hover:border-electric-cyan transition-all shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-electric inline-flex items-center gap-1.5 px-4 py-2 text-xs font-black"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-electric px-3 py-1.5 text-xs font-black flex items-center gap-1 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-obsidian-900 border-2 border-white/15 text-slate-200 hover:text-white focus-ring active:scale-95 transition-transform"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-electric-cyan" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-obsidian-950/98 backdrop-blur-xl border-b-2 border-white/15 p-4 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? 'text-slate-950 bg-gradient-to-r from-electric-cyan to-electric-emerald font-black shadow-glow-cyan'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-electric-cyan'}`} />
                </a>
              );
            })}
          </div>

          {/* Mobile Drawer Footer with Socials */}
          <div className="pt-3 mt-2 border-t border-white/15 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-obsidian-900 border border-white/15 text-slate-200 hover:text-white text-xs font-mono font-bold flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-obsidian-900 border border-white/15 text-slate-200 hover:text-white text-xs font-mono font-bold flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>

            <span className="text-[11px] font-mono text-electric-emerald font-bold">
              SPI: 9.35
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
