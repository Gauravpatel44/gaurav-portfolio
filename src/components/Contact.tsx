import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const copyToClipboard = (text: string, field: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    // Direct mailto trigger
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-electric-cyan/40 text-[11px] sm:text-xs font-mono text-electric-cyan mb-2 shadow-glow-cyan backdrop-blur-md">
            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>DIRECT COMMUNICATION & COLLABORATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Get in Touch & <span className="text-electric-gradient">Collaborate</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base mt-1 max-w-2xl font-normal">
            Available for technical internships, developer discussions, and academic collaborations.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          
          {/* Left Direct Details Bento Box - Tight gap without excessive stretching */}
          <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4 justify-start">
            
            {/* Email Card */}
            <div className="bento-card p-4 sm:p-5 border-2 border-electric-cyan/40 shadow-bento space-y-2.5 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-950/90 border border-electric-cyan/40 text-electric-cyan shadow-sm">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-400 uppercase">Email Address</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-black text-white hover:text-electric-cyan transition-colors font-mono break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-2 rounded-xl bg-obsidian-950/90 hover:bg-obsidian-850 border border-white/20 text-slate-300 hover:text-white transition-colors focus-ring"
                  title="Copy email to clipboard"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-electric-emerald" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copiedField === 'email' && (
                <div className="text-[10px] sm:text-[11px] font-mono text-electric-emerald font-bold flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Email address copied to clipboard!</span>
                </div>
              )}
            </div>

            {/* Phone Card */}
            <div className="bento-card p-4 sm:p-5 border-2 border-electric-emerald/40 shadow-bento space-y-2.5 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-950/90 border border-electric-emerald/40 text-electric-emerald shadow-sm">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-400 uppercase">Direct Phone</div>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                      className="text-xs sm:text-sm font-black text-white hover:text-electric-emerald transition-colors font-mono"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-2 rounded-xl bg-obsidian-950/90 hover:bg-obsidian-850 border border-white/20 text-slate-300 hover:text-white transition-colors focus-ring"
                  title="Copy phone to clipboard"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-electric-emerald" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copiedField === 'phone' && (
                <div className="text-[10px] sm:text-[11px] font-mono text-electric-emerald font-bold flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Phone number copied to clipboard!</span>
                </div>
              )}
            </div>

            {/* Location & Social Box */}
            <div className="bento-card p-4 sm:p-5 border-2 border-white/15 shadow-bento space-y-3.5 backdrop-blur-md">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-electric-cyan shrink-0" />
                <span className="font-bold text-white">{personalInfo.location}</span>
              </div>

              <div className="pt-2.5 border-t border-white/15 flex items-center gap-2.5">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-obsidian-950/90 hover:bg-obsidian-900 border-2 border-white/15 text-[11px] sm:text-xs font-mono font-bold text-slate-200 hover:text-white hover:border-electric-cyan transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-obsidian-950/90 hover:bg-obsidian-900 border-2 border-white/15 text-[11px] sm:text-xs font-mono font-bold text-slate-200 hover:text-white hover:border-electric-cyan transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Message Form Bento Card */}
          <div className="lg:col-span-7 w-full">
            <div className="bento-card p-5 sm:p-7 border-2 border-white/20 shadow-2xl h-full flex flex-col justify-between backdrop-blur-md">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-white mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-5 font-normal">
                  Pre-fills and launches your default email client with structured subject and message body.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] sm:text-xs font-mono text-slate-200 font-bold">
                        Your Name <span className="text-electric-cyan">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950/90 border-2 border-white/20 text-base sm:text-sm text-white placeholder-slate-500 focus:border-electric-cyan focus-ring font-mono"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] sm:text-xs font-mono text-slate-200 font-bold">
                        Your Email <span className="text-electric-cyan">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950/90 border-2 border-white/20 text-base sm:text-sm text-white placeholder-slate-500 focus:border-electric-cyan focus-ring font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] sm:text-xs font-mono text-slate-200 font-bold">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Internship Opportunity / Collaboration"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950/90 border-2 border-white/20 text-base sm:text-sm text-white placeholder-slate-500 focus:border-electric-cyan focus-ring font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] sm:text-xs font-mono text-slate-200 font-bold">
                      Message <span className="text-electric-cyan">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Type your message here..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950/90 border-2 border-white/20 text-base sm:text-sm text-white placeholder-slate-500 focus:border-electric-cyan focus-ring resize-none font-mono"
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                    <span className="text-[11px] sm:text-xs font-mono text-slate-400">
                      Direct: <strong className="text-white">gauravpatel2060@gmail.com</strong>
                    </span>

                    <button
                      type="submit"
                      className="btn-electric inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-black focus-ring"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Direct Email</span>
                    </button>
                  </div>

                  {status === 'success' && (
                    <div className="p-3 rounded-xl bg-emerald-950/90 border-2 border-electric-emerald text-[11px] sm:text-xs font-mono text-electric-emerald font-bold">
                      Mail application launched with formatted message payload!
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="p-3 rounded-xl bg-rose-950/90 border-2 border-rose-500 text-[11px] sm:text-xs font-mono text-rose-300 font-bold">
                      Please fill out all required fields (Name, Email, Message).
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
