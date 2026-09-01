import React, { useState, useEffect } from 'react';
import { 
  Award, 
  ExternalLink, 
  Sparkles, 
  Bot, 
  ShieldCheck, 
  Eye, 
  X, 
  Building2, 
  CheckCircle2, 
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Hand
} from 'lucide-react';
import { certificationData } from '../data/portfolioData';
import { CertificationItem } from '../types/portfolio';
import { useMobileCarousel } from '../hooks';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };

    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  const {
    activeSlide,
    carouselRef,
    handleScroll,
    scrollCarousel,
    scrollToSlide,
  } = useMobileCarousel(certificationData.length);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'sparkles':
        return <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-electric-cyan" />;
      case 'bot':
        return <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />;
      case 'shield-check':
        return <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-electric-emerald" />;
      default:
        return <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />;
    }
  };

  return (
    <section id="certifications" className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-electric-cyan/40 text-[11px] sm:text-xs font-mono text-electric-cyan mb-2 shadow-glow-cyan backdrop-blur-md">
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>OFFICIAL CREDENTIAL DOCUMENTS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Verified <span className="text-electric-gradient">Industry Certifications</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base mt-1 max-w-2xl font-normal">
            Official completion credentials verified from Microsoft AICTE, Vodafone Idea Foundation & VOIS, and BharatCares / IBM.
          </p>
        </div>

        {/* MOBILE CAROUSEL VIEW (< md screens) */}
        <div className="md:hidden">
          
          {/* Mobile Swipe Hint Bar */}
          <div className="flex items-center justify-between px-1 mb-2.5 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-electric-cyan font-bold">
              <Hand className="w-3.5 h-3.5 animate-pulse" />
              <span>Swipe certificates ({activeSlide + 1} of {certificationData.length})</span>
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollCarousel('left')}
                disabled={activeSlide === 0}
                className="p-1 rounded-lg bg-obsidian-900 border border-white/15 text-slate-300 disabled:opacity-40"
                aria-label="Previous certificate"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                disabled={activeSlide >= certificationData.length - 1}
                className="p-1 rounded-lg bg-obsidian-900 border border-white/15 text-slate-300 disabled:opacity-40"
                aria-label="Next certificate"
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
            {certificationData.map((cert) => (
              <div
                key={cert.id}
                className="w-[86vw] max-w-[340px] flex-shrink-0 snap-center bento-card border-2 border-white/15 hover:border-electric-cyan/60 flex flex-col justify-between shadow-bento overflow-hidden group backdrop-blur-md"
              >
                <div>
                  {/* Certificate Image Thumbnail Preview */}
                  <div 
                    className="relative h-40 w-full overflow-hidden bg-black cursor-pointer border-b-2 border-white/15 group/img"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-obsidian-900 border-2 border-electric-cyan text-[11px] font-black text-white shadow-glow-cyan">
                        <ZoomIn className="w-3.5 h-3.5 text-electric-cyan" />
                        <span>Inspect Document</span>
                      </span>
                    </div>

                    <div className="absolute top-2 left-2 right-2 flex items-center justify-between pointer-events-none">
                      <span className="p-1.5 rounded-xl bg-black/90 backdrop-blur-md border border-white/20 shadow-lg">
                        {getIcon(cert.icon)}
                      </span>
                      <span className="text-[9px] font-mono font-black text-white bg-black/90 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20 shadow-lg">
                        {cert.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-4">
                    <div className="text-[10px] font-mono font-black text-electric-cyan uppercase tracking-wider mb-1">
                      {cert.certificateType}
                    </div>
                    <h3 className="text-base font-black text-white mb-1 group-hover:text-electric-cyan transition-colors truncate">
                      {cert.title}
                    </h3>
                    
                    {/* Issuer */}
                    <div className="text-xs font-bold text-electric-emerald flex items-center gap-1 mb-2">
                      <Building2 className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{cert.issuer}</span>
                    </div>

                    {/* Summary */}
                    <p className="text-[11px] text-slate-300 line-clamp-2 mb-3 leading-relaxed">
                      {cert.summary}
                    </p>

                    {/* Meta details */}
                    <div className="p-2.5 rounded-xl bg-obsidian-950/90 border border-white/15 text-[10px] font-mono space-y-1 shadow-inner">
                      <div className="flex items-center justify-between text-slate-300">
                        <span>Recipient:</span>
                        <span className="text-white font-black">{cert.recipientName}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span>Duration:</span>
                        <span className="text-electric-cyan font-bold">{cert.dateRange}</span>
                      </div>
                      {(cert.credentialId || cert.enrollmentNo) && (
                        <div className="flex items-center justify-between text-slate-300 truncate">
                          <span>ID / Reg:</span>
                          <span className="text-electric-emerald font-black truncate max-w-[130px]">{cert.credentialId || cert.enrollmentNo}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="px-4 pb-4 pt-2 border-t border-white/15 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1 text-xs font-black text-electric-cyan hover:text-white transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect</span>
                  </button>

                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-electric inline-flex items-center gap-1 px-3 py-1.5 text-[11px] font-extrabold"
                  >
                    <span>Google Drive</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-1.5 pt-1.5">
            {certificationData.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === i 
                    ? 'w-6 bg-gradient-to-r from-electric-cyan to-electric-emerald shadow-glow-cyan' 
                    : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to certificate ${i + 1}`}
              />
            ))}
          </div>

        </div>

        {/* DESKTOP BENTO GRID VIEW (>= md screens) */}
        <div className="hidden md:grid md:grid-cols-3 gap-5">
          {certificationData.map((cert) => (
            <div
              key={cert.id}
              className="bento-card border-2 border-white/15 hover:border-electric-cyan/60 flex flex-col justify-between shadow-bento overflow-hidden group backdrop-blur-md"
            >
              <div>
                {/* Certificate Image Thumbnail Preview */}
                <div 
                  className="relative h-48 w-full overflow-hidden bg-black cursor-pointer border-b-2 border-white/15 group/img"
                  onClick={() => setSelectedCert(cert)}
                >
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-obsidian-900 border-2 border-electric-cyan text-xs font-black text-white shadow-glow-cyan">
                      <ZoomIn className="w-4 h-4 text-electric-cyan" />
                      <span>Inspect Document</span>
                    </span>
                  </div>

                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                    <span className="p-2 rounded-xl bg-black/90 backdrop-blur-md border border-white/20 shadow-lg">
                      {getIcon(cert.icon)}
                    </span>
                    <span className="text-[10px] font-mono font-black text-white bg-black/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20 shadow-lg">
                      {cert.category}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5">
                  <div className="text-[10px] font-mono font-black text-electric-cyan uppercase tracking-wider mb-1.5">
                    {cert.certificateType}
                  </div>
                  <h3 className="text-lg font-black text-white mb-1.5 group-hover:text-electric-cyan transition-colors">
                    {cert.title}
                  </h3>
                  
                  {/* Issuer */}
                  <div className="text-xs font-bold text-electric-emerald flex items-center gap-1.5 mb-2.5">
                    <Building2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{cert.issuer}</span>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                    {cert.summary}
                  </p>

                  {/* Meta details */}
                  <div className="p-3 rounded-xl bg-obsidian-950/90 border border-white/15 text-[11px] font-mono space-y-1.5 shadow-inner">
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Recipient:</span>
                      <span className="text-white font-black">{cert.recipientName}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Duration:</span>
                      <span className="text-electric-cyan font-bold">{cert.dateRange}</span>
                    </div>
                    {(cert.credentialId || cert.enrollmentNo) && (
                      <div className="flex items-center justify-between text-slate-300 truncate">
                        <span>ID / Reg:</span>
                        <span className="text-electric-emerald font-black truncate max-w-[140px]">{cert.credentialId || cert.enrollmentNo}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-5 pb-5 pt-2.5 border-t border-white/15 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-black text-electric-cyan hover:text-white transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect</span>
                </button>

                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-electric inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-extrabold"
                >
                  <span>Google Drive</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Certificate Inspection Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn overflow-y-auto">
          <div className="fixed inset-0" onClick={() => setSelectedCert(null)}></div>

          <div className="relative w-full max-w-3xl bg-obsidian-900 border-2 border-electric-cyan/60 rounded-2xl sm:rounded-3xl shadow-2xl z-10 overflow-hidden flex flex-col max-h-[92vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5 border-b-2 border-white/15 bg-obsidian-950">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 sm:p-2 rounded-xl bg-obsidian-900 border border-white/20">
                  {getIcon(selectedCert.icon)}
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-electric-cyan uppercase tracking-wide font-black">
                    {selectedCert.certificateType}
                  </span>
                  <h3 className="text-sm sm:text-lg font-black text-white truncate max-w-[200px] sm:max-w-none">
                    {selectedCert.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus-ring"
                aria-label="Close modal (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-3.5">
              
              {/* Certificate Image Viewer */}
              <div className="rounded-xl overflow-hidden border-2 border-electric-cyan/40 bg-black shadow-2xl">
                <img
                  src={selectedCert.imageUrl}
                  alt={selectedCert.title}
                  className="w-full h-auto object-contain max-h-[380px] sm:max-h-[440px] mx-auto rounded-xl"
                />
              </div>

              {/* Complete Metadata Breakdown */}
              <div className="space-y-2 font-mono text-xs">
                <div className="p-2.5 rounded-xl bg-obsidian-950 border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-0.5">
                  <span className="text-slate-400 font-bold text-[11px]">Issuing Authority:</span>
                  <span className="font-black text-white text-left sm:text-right text-[11px]">{selectedCert.issuer}</span>
                </div>

                <div className="p-2.5 rounded-xl bg-obsidian-950 border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-0.5">
                  <span className="text-slate-400 font-bold text-[11px]">Collaborating Partners:</span>
                  <span className="font-bold text-electric-cyan text-left sm:text-right text-[11px]">{selectedCert.partners}</span>
                </div>

                <div className="p-2.5 rounded-xl bg-obsidian-950 border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-0.5">
                  <span className="text-slate-400 font-bold text-[11px]">Conducted Dates:</span>
                  <span className="text-electric-emerald font-black text-left sm:text-right text-[11px]">{selectedCert.dateRange}</span>
                </div>

                {selectedCert.credentialId && (
                  <div className="p-2.5 rounded-xl bg-obsidian-950 border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-0.5">
                    <span className="text-slate-400 font-bold text-[11px]">Student ID / Reg:</span>
                    <span className="text-electric-cyan font-black text-left sm:text-right break-all text-[11px]">{selectedCert.credentialId}</span>
                  </div>
                )}
              </div>

            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between gap-2 px-4 py-3 border-t-2 border-white/15 bg-obsidian-950">
              <span className="text-[10px] sm:text-xs font-mono text-electric-emerald flex items-center gap-1 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Verified Credential</span>
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
                <a
                  href={selectedCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-electric inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-black"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>View Original</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
