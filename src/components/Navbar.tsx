import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Download, Terminal, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'education', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 px-3 sm:px-6 pointer-events-none">
      <nav
        className={`w-full max-w-7xl transition-all duration-300 rounded-2xl pointer-events-auto ${
          isScrolled
            ? 'bg-obsidian-950/85 backdrop-blur-xl border border-white/15 shadow-2xl py-2.5 px-4 sm:px-6'
            : 'bg-obsidian-950/50 backdrop-blur-md border border-white/10 py-3.5 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-ring rounded-xl px-1"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-cyan-600 via-emerald-500 to-electric-cyan flex items-center justify-center p-0.5 shadow-glow-cyan transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-obsidian-950 rounded-[10px] flex items-center justify-center">
                <Terminal className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-electric-cyan" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-black tracking-tight text-white group-hover:text-electric-cyan transition-colors">
                GAURAV<span className="text-electric-gradient">.DEV</span>
              </span>
              <span className="text-[9px] font-mono text-slate-400 -mt-1 hidden sm:block">
                IT · GP VALSAD
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 bg-obsidian-900/60 p-1.5 rounded-xl border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    isActive
                      ? 'text-white bg-white/15 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action Icons & Resume CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-obsidian-900/80 hover:bg-obsidian-850 border border-white/15 text-slate-300 hover:text-white hover:border-electric-cyan/50 transition-all focus-ring shadow-sm"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-obsidian-900/80 hover:bg-obsidian-850 border border-white/15 text-slate-300 hover:text-white hover:border-electric-cyan/50 transition-all focus-ring shadow-sm"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.resumeDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-electric inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-black shadow-glow-cyan focus-ring"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={personalInfo.resumeDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-electric inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-black sm:hidden"
            >
              <Download className="w-3 h-3" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-obsidian-900/90 border border-white/15 text-slate-300 hover:text-white focus-ring"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-2 border-t border-white/10 mt-3 animate-fadeIn flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-bold text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            ))}

            <div className="pt-2 border-t border-white/10 flex items-center justify-around gap-2 text-xs font-mono">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-slate-300 hover:text-white p-1"
              >
                <Github className="w-4 h-4 text-electric-cyan" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-slate-300 hover:text-white p-1"
              >
                <Linkedin className="w-4 h-4 text-electric-emerald" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
