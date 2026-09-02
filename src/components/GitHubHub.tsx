import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Star, 
  GitFork, 
  ExternalLink, 
  FolderGit2, 
  Terminal, 
  ArrowUpRight,
  Code2,
  ChevronLeft,
  ChevronRight,
  Hand
} from 'lucide-react';
import { fetchGitHubRepos } from '../services';
import { GitHubRepo } from '../types/portfolio';
import { personalInfo } from '../data/portfolioData';
import { useMobileCarousel } from '../hooks';

export const GitHubHub: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadRepos = async () => {
      setLoading(true);
      const data = await fetchGitHubRepos(personalInfo.githubUsername);
      setRepos(data);
      setLoading(false);
    };

    loadRepos();
  }, []);

  const {
    activeSlide,
    carouselRef,
    handleScroll,
    scrollCarousel,
    scrollToSlide,
  } = useMobileCarousel(repos.length);

  return (
    <section id="github" className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-electric-cyan/40 text-[11px] sm:text-xs font-mono text-electric-cyan mb-2 shadow-glow-cyan backdrop-blur-md">
              <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>LIVE REPOSITORY DISCOVERY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Open Source & <span className="text-electric-gradient">GitHub Activity</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-base mt-1 max-w-2xl font-normal">
              Live repositories fetched directly from GitHub API for user @{personalInfo.githubUsername}.
            </p>
          </div>

          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-electric inline-flex items-center gap-2 px-4 py-2 text-xs font-black self-start md:self-auto"
          >
            <Github className="w-4 h-4" />
            <span>Visit @{personalInfo.githubUsername}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* MOBILE CAROUSEL VIEW (< md screens) */}
        <div className="md:hidden">
          
          {/* Mobile Swipe Hint Bar */}
          <div className="flex items-center justify-between px-1 mb-2.5 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-electric-cyan font-bold">
              <Hand className="w-3.5 h-3.5 animate-pulse" />
              <span>Swipe repositories ({activeSlide + 1} of {repos.length})</span>
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollCarousel('left')}
                disabled={activeSlide === 0}
                className="p-1 rounded-lg bg-obsidian-900 border border-white/15 text-slate-300 disabled:opacity-40"
                aria-label="Previous repository"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                disabled={activeSlide >= repos.length - 1}
                className="p-1 rounded-lg bg-obsidian-900 border border-white/15 text-slate-300 disabled:opacity-40"
                aria-label="Next repository"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Swipeable Carousel Slider */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 pb-3 px-1 scrollbar-none scroll-smooth"
          >
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="w-[86vw] max-w-[340px] flex-shrink-0 snap-center bento-card p-4 border-2 border-white/15 hover:border-electric-cyan/60 flex flex-col justify-between shadow-bento group backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/15 mb-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-electric-cyan font-bold">
                      <FolderGit2 className="w-3.5 h-3.5" />
                      <span className="truncate max-w-[140px]">{personalInfo.githubUsername}</span>
                    </div>

                    {repo.language && (
                      <span className="text-[10px] font-mono text-electric-emerald bg-emerald-950/80 px-2 py-0.5 rounded border border-electric-emerald/40 font-bold">
                        {repo.language}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-black text-white group-hover:text-electric-cyan transition-colors mb-1.5 truncate">
                    {repo.name}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 mb-3 leading-relaxed">
                    {repo.description || 'Open source software repository with clean architecture.'}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      <span>{repo.stargazers_count}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-slate-400" />
                      <span>{repo.forks_count}</span>
                    </span>
                  </div>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-electric inline-flex items-center gap-1 px-3 py-1.5 text-[11px] font-extrabold"
                  >
                    <span>View</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-1.5 pt-1.5">
            {repos.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === i 
                    ? 'w-6 bg-gradient-to-r from-electric-cyan to-electric-emerald shadow-glow-cyan' 
                    : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to repository ${i + 1}`}
              />
            ))}
          </div>

        </div>

        {/* DESKTOP BENTO GRID VIEW (>= md screens) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bento-card p-5 border-2 border-white/15 hover:border-electric-cyan/60 flex flex-col justify-between shadow-bento group backdrop-blur-md transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/15 mb-3">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-electric-cyan font-bold">
                    <FolderGit2 className="w-3.5 h-3.5" />
                    <span className="truncate">{personalInfo.githubUsername}</span>
                  </div>

                  {repo.language && (
                    <span className="text-[10px] font-mono text-electric-emerald bg-emerald-950/80 px-2 py-0.5 rounded border border-electric-emerald/40 font-bold">
                      {repo.language}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-black text-white group-hover:text-electric-cyan transition-colors mb-2 truncate">
                  {repo.name}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-3 mb-4 leading-relaxed">
                  {repo.description || 'Open source software repository with clean architecture.'}
                </p>
              </div>

              <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-slate-400" />
                    <span>{repo.forks_count}</span>
                  </span>
                </div>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-electric inline-flex items-center gap-1 px-3 py-1.5 text-xs font-extrabold"
                >
                  <span>View</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
