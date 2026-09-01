import React, { useEffect, useState } from 'react';
import { 
  Github, 
  Star, 
  GitFork, 
  ExternalLink, 
  Code, 
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Hand
} from 'lucide-react';
import { fetchGitHubRepos } from '../services/githubService';
import { GitHubRepo } from '../types/portfolio';
import { personalInfo } from '../data/portfolioData';
import { useMobileCarousel } from '../hooks';

export const GitHubHub: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isSynced, setIsSynced] = useState<boolean>(false);

  const loadRepos = async () => {
    setLoading(true);
    const result = await fetchGitHubRepos(personalInfo.githubUsername);
    setRepos(result.repos);
    setLoading(false);
    setIsSynced(true);
    setTimeout(() => setIsSynced(false), 3000);
  };

  useEffect(() => {
    loadRepos();
  }, []);

  const {
    activeSlide,
    carouselRef,
    handleScroll,
    scrollCarousel,
    scrollToSlide,
  } = useMobileCarousel(repos.length);

  const getLanguageColor = (lang: string | null) => {
    switch (lang) {
      case 'Dart':
        return 'bg-blue-400 shadow-glow-cyan';
      case 'Python':
        return 'bg-yellow-400';
      case 'Jupyter Notebook':
        return 'bg-amber-500';
      case 'JavaScript':
        return 'bg-yellow-300';
      case 'TypeScript':
        return 'bg-blue-500';
      case 'HTML':
        return 'bg-orange-500';
      case 'CSS':
        return 'bg-indigo-400';
      default:
        return 'bg-slate-400';
    }
  };

  return (
    <section id="github" className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3.5 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-electric-cyan/40 text-[11px] sm:text-xs font-mono text-electric-cyan mb-2 shadow-glow-cyan backdrop-blur-md">
              <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>LIVE GITHUB REPOSITORY FEED</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Open Source <span className="text-electric-gradient">Repositories</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-base mt-1 font-normal">
              Active repositories authored on <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="text-electric-cyan underline font-mono font-bold">github.com/{personalInfo.githubUsername}</a>.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={loadRepos}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-obsidian-900/90 border-2 border-white/15 text-xs font-mono font-bold text-slate-200 hover:text-white hover:border-electric-cyan transition-all shadow-sm active:scale-95 backdrop-blur-md"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-electric-cyan' : isSynced ? 'text-electric-emerald' : ''}`} />
              <span>{loading ? 'Syncing...' : isSynced ? 'Synced!' : 'Sync'}</span>
            </button>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-electric inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-black"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Follow @Gauravpatel44</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* MOBILE CAROUSEL VIEW (< md screens) */}
        <div className="md:hidden">
          
          {/* Mobile Swipe Hint Bar */}
          <div className="flex items-center justify-between px-1 mb-2.5 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-electric-cyan font-bold">
              <Hand className="w-3.5 h-3.5 animate-pulse" />
              <span>Swipe repos ({activeSlide + 1} of {repos.length})</span>
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollCarousel('left')}
                disabled={activeSlide === 0}
                className="p-1 rounded-lg bg-obsidian-900 border border-white/15 text-slate-300 disabled:opacity-40"
                aria-label="Previous repo"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                disabled={activeSlide >= repos.length - 1}
                className="p-1 rounded-lg bg-obsidian-900 border border-white/15 text-slate-300 disabled:opacity-40"
                aria-label="Next repo"
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
                className="w-[86vw] max-w-[340px] flex-shrink-0 snap-center bento-card p-5 border-2 border-white/15 hover:border-electric-cyan/60 flex flex-col justify-between shadow-bento group backdrop-blur-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-black text-sm font-mono text-electric-cyan hover:text-white hover:underline inline-flex items-center gap-1.5 break-all"
                    >
                      <Code className="w-4 h-4 text-slate-400 shrink-0 group-hover:text-electric-cyan transition-colors" />
                      <span className="truncate">{repo.name}</span>
                    </a>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-[9px] font-mono font-bold text-slate-400 bg-obsidian-950/90 px-1.5 py-0.2 rounded border border-white/15">
                        Public
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-300 leading-relaxed mb-3 line-clamp-3">
                    {repo.description || 'Public open-source repository by Gaurav Patel.'}
                  </p>

                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3 items-center">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="tech-chip text-[10px] py-0.5 px-2"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Meta details */}
                <div className="pt-2.5 border-t border-white/15 flex items-center justify-between text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <div className="flex items-center gap-1">
                        <span className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`}></span>
                        <span className="font-bold text-white text-[11px]">{repo.language}</span>
                      </div>
                    )}

                    <div className="flex items-center gap-1 font-bold text-[11px]">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      <span>{repo.stargazers_count}</span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px]">
                      <GitFork className="w-3.5 h-3.5 text-slate-400" />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-electric-cyan hover:text-white font-bold inline-flex items-center gap-1 text-xs hover:underline"
                  >
                    <span>Code</span>
                    <ExternalLink className="w-3 h-3" />
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
                aria-label={`Go to repo ${i + 1}`}
              />
            ))}
          </div>

        </div>

        {/* DESKTOP VIEW (>= md screens) */}
        <div className="hidden md:grid md:grid-cols-2 gap-5">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bento-card p-5 sm:p-6 border-2 border-white/15 hover:border-electric-cyan/60 flex flex-col justify-between shadow-bento group backdrop-blur-md"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-black text-sm sm:text-base font-mono text-electric-cyan hover:text-white hover:underline inline-flex items-center gap-2 break-all"
                  >
                    <Code className="w-4 h-4 text-slate-400 shrink-0 group-hover:text-electric-cyan transition-colors" />
                    <span>{repo.name}</span>
                  </a>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-400 bg-obsidian-950/90 px-2 py-0.5 rounded-md border border-white/15">
                      Public
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-2">
                  {repo.description || 'Public open-source repository by Gaurav Patel.'}
                </p>

                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4 items-center">
                    {repo.topics.slice(0, 4).map((topic) => (
                      <span
                        key={topic}
                        className="tech-chip text-[10px] py-0.5 px-2"
                      >
                        #{topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Meta details */}
              <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs font-mono text-slate-300">
                <div className="flex items-center gap-4">
                  {repo.language && (
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`}></span>
                      <span className="font-bold text-white text-xs">{repo.language}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-1 font-bold text-xs">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span>{repo.stargazers_count}</span>
                  </div>

                  <div className="flex items-center gap-1 text-xs">
                    <GitFork className="w-3.5 h-3.5 text-slate-400" />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-electric-cyan hover:text-white font-bold inline-flex items-center gap-1 text-xs hover:underline"
                >
                  <span>View Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
