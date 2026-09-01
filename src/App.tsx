import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Hero,
  StatsBar,
  About,
  Education,
  Skills,
  Projects,
  Experience,
  Certifications,
  GitHubHub,
  Achievements,
  ResumeSection,
  Contact,
  Footer,
  InteractiveBackground
} from './components';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'education',
      'skills',
      'projects',
      'experience',
      'certifications',
      'github',
      'achievements',
      'resume',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 relative bg-deep-space selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Live Interactive Cursor-Reactive Background */}
      <InteractiveBackground />

      {/* Main Content Layer */}
      <div className="relative z-10">
        <Navbar activeSection={activeSection} />
        
        <main>
          <Hero />
          <StatsBar />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <GitHubHub />
          <Achievements />
          <ResumeSection />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
