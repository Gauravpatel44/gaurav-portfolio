import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-electric-cyan/40 text-[11px] sm:text-xs font-mono text-electric-cyan mb-2 shadow-glow-cyan backdrop-blur-md">
            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>COMMUNICATION & INQUIRIES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Get in <span className="text-electric-gradient">Direct Contact</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base mt-1 max-w-2xl font-normal">
            Open for software development collaborations, academic inquiries, and technical roles.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Left Contact Cards */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            
            {/* Email Card */}
            <div className="bento-card p-4 sm:p-5 border-2 border-white/15 hover:border-electric-cyan/60 flex items-center justify-between gap-3 shadow-bento backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-950/90 border border-electric-cyan/40 text-electric-cyan">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Email Address</div>
                  <div className="text-xs sm:text-sm font-black text-white">{personalInfo.email}</div>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="p-2 rounded-xl bg-obsidian-900 border border-white/15 text-slate-300 hover:text-white hover:border-electric-cyan transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-electric-emerald" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="bento-card p-4 sm:p-5 border-2 border-white/15 hover:border-electric-emerald/60 flex items-center justify-between gap-3 shadow-bento backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-950/90 border border-electric-emerald/40 text-electric-emerald">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Phone / WhatsApp</div>
                  <div className="text-xs sm:text-sm font-black text-white">{personalInfo.phone}</div>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="p-2 rounded-xl bg-obsidian-900 border border-white/15 text-slate-300 hover:text-white hover:border-electric-emerald transition-colors"
                title="Copy Phone Number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-electric-emerald" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="bento-card p-4 sm:p-5 border-2 border-white/15 flex items-center gap-3 shadow-bento backdrop-blur-md">
              <div className="p-2.5 rounded-xl bg-purple-950/90 border border-purple-500/40 text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Location & Campus</div>
                <div className="text-xs sm:text-sm font-black text-white">{personalInfo.location}</div>
                <div className="text-[11px] text-slate-400 font-mono">Government Polytechnic Valsad</div>
              </div>
            </div>

            {/* Social Connect strip */}
            <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-xs">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-obsidian-950/90 border border-white/15 hover:border-electric-cyan flex items-center justify-center gap-2 text-slate-200 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-electric-cyan" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-obsidian-950/90 border border-white/15 hover:border-electric-emerald flex items-center justify-center gap-2 text-slate-200 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-electric-emerald" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

          </div>

          {/* Right Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="bento-card p-5 sm:p-7 border-2 border-white/15 shadow-bento backdrop-blur-md">
              <h3 className="text-lg font-black text-white mb-1">
                Send Direct Message
              </h3>
              <p className="text-xs text-slate-300 mb-4 font-normal">
                Fill out the form below to send an immediate message directly to Gaurav's inbox.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/80 border border-electric-emerald text-center space-y-2 font-mono text-xs text-electric-emerald animate-fadeIn">
                  <CheckCircle2 className="w-8 h-8 mx-auto" />
                  <div className="font-bold text-white text-sm">Draft Created Successfully!</div>
                  <p className="text-slate-300 text-[11px]">Your email client has opened with the pre-filled message.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1 font-bold">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/15 text-white placeholder-slate-600 focus-ring outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1 font-bold">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/15 text-white placeholder-slate-600 focus-ring outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1 font-bold">Subject *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Collaboration / Project Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/15 text-white placeholder-slate-600 focus-ring outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1 font-bold">Your Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Gaurav, I reviewed your Rakshak Connect project and would like to connect..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/15 text-white placeholder-slate-600 focus-ring outline-none resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-electric w-full py-3 rounded-xl text-xs font-black flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Gaurav</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
