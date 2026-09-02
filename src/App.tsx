import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { GitHubHub } from './components/GitHubHub';
import { Achievements } from './components/Achievements';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { InteractiveBackground } from './components/InteractiveBackground';

export function App() {
  return (
    <div className="relative min-h-screen bg-obsidian-950 text-slate-100 font-sans selection:bg-electric-cyan/20 selection:text-electric-cyan overflow-x-hidden">
      {/* Dynamic Pop-Up Grid Background Canvas */}
      <InteractiveBackground />

      {/* Floating Glass Navbar */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="relative z-10">
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

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
