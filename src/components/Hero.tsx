import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Code2, 
  ShieldCheck, 
  Smartphone, 
  ExternalLink, 
  CheckCircle2, 
  GraduationCap, 
  Sparkles, 
  Copy, 
  Check,
  Activity,
  MapPin,
  ChevronDown
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flutter' | 'analytics' | 'security'>('flutter');
  const [copiedCode, setCopiedCode] = useState(false);

  const codeSnippets = {
    flutter: {
      filename: "RakshakService.dart",
      env: "Flutter v3.22 · Dart SDK",
      status: "Build: Passing (0 errors)",
      code: `// Rakshak Connect - Mobile Safety Application
// https://github.com/Gauravpatel44/rakshak-connect
class RakshakEmergencyService {
  static Future<void> triggerEmergencySOS() async {
    await AudioService.playHighDecibelSiren();
    final location = await GeoLocation.getCurrentCoordinates();
    await SMSDispatcher.sendEmergencyPayload(
      recipients: Contacts.emergencyList,
      coords: location,
      message: "EMERGENCY: Immediate assistance requested."
    );
  }
}`
    },
    analytics: {
      filename: "CarDekho_EDA.py",
      env: "Python 3.11 · Pandas · Seaborn",
      status: "EDA Pipeline: Verified",
      code: `# Car Market Trends - VOIS Data Analytics Project-4
# https://github.com/Gauravpatel44/Car-Market-Trends-Analysis-with-Car-Dekho-Data
import pandas as pd
import seaborn as sns

def compute_market_depreciation(df):
    df['Car_Age'] = 2026 - df['Year']
    df['Depreciation'] = df['Present_Price'] - df['Selling_Price']
    df['Depreciation_Pct'] = (df['Depreciation'] / df['Present_Price']) * 100
    
    # Analyze retention by fuel type and transmission
    return df.groupby(['Fuel_Type', 'Transmission'])['Depreciation_Pct'].mean()`
    },
    security: {
      filename: "AI_NIDS_Engine.py",
      env: "Scikit-Learn · Network Classifier",
      status: "Model Accuracy: 98.4%",
      code: `# AI-Based Network Intrusion Detection System
# https://github.com/Gauravpatel44/AI-Based-Network-Intrusion-Detection-System-
def evaluate_network_packet(packet_features):
    prediction = nids_classifier.predict([packet_features])
    if prediction[0] == ANOMALOUS_TRAFFIC:
        security_logger.warning("Intrusion signature detected on port %s", packet_features['dst_port'])
        trigger_firewall_mitigation(packet_features['src_ip'])
    return prediction[0]`
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab].code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-28 pb-10 md:pt-32 md:pb-12 overflow-hidden border-b border-white/10 bg-transparent">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Bento Grid Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
          
          {/* Left Hero Profile & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* High-Contrast Live Status Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-obsidian-850/90 border border-electric-cyan/40 text-xs font-mono text-slate-200 mb-5 shadow-glow-cyan backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <div className="flex items-center gap-1.5 text-white font-bold">
                <MapPin className="w-3.5 h-3.5 text-electric-cyan" />
                <span>Valsad, Gujarat</span>
              </div>
              <span className="text-slate-600 font-bold">/</span>
              <span className="text-electric-emerald font-black">Sem 4 SPI: 9.35</span>
            </div>

            {/* Main Greeting & Name with High-Contrast Text */}
            <div className="space-y-1 mb-3">
              <div className="text-electric-cyan font-mono text-sm sm:text-base font-bold tracking-wider uppercase flex items-center gap-2">
                <Activity className="w-4 h-4 text-electric-emerald" />
                <span>Diploma in IT · Software Developer</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white-pure">
                Gaurav <span className="text-electric-gradient">Patel</span>
              </h1>
            </div>

            {/* Academic & Professional Institution Subtitle */}
            <div className="mb-5 flex flex-wrap items-center gap-2.5 text-sm sm:text-base font-semibold text-slate-200">
              <span className="text-white">Government Polytechnic Valsad</span>
              <span className="text-electric-cyan">•</span>
              <span className="text-electric-cyan font-mono">2024–2027</span>
              <span className="text-electric-cyan">•</span>
              <span className="text-electric-emerald font-semibold">Open Source Creator</span>
            </div>

            {/* Punchy Factual Bio */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-6 font-normal">
              Developing open-source mobile solutions in <strong className="text-white">Flutter & Dart</strong>, engineering predictive insights using <strong className="text-white">Python data analytics</strong>, and evaluating anomaly detection algorithms in <strong className="text-white">cybersecurity & AI</strong>.
            </p>

            {/* High-Contrast Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-6">
              <a
                href="#projects"
                className="w-full sm:w-auto btn-electric inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-extrabold focus-ring"
              >
                <span>View Real Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white bg-obsidian-850/90 hover:bg-obsidian-800 border-2 border-white/20 hover:border-electric-cyan transition-all hover:scale-[1.02] shadow-bento backdrop-blur-md focus-ring"
              >
                <Download className="w-4 h-4 text-electric-cyan" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus-ring"
              >
                <span>Contact</span>
              </a>
            </div>

            {/* Quick Badges Strip */}
            <div className="flex flex-wrap items-center gap-4 pt-3.5 border-t border-white/10 w-full text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-2 bg-obsidian-900/80 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm">
                <GraduationCap className="w-4 h-4 text-electric-emerald" />
                <span className="font-semibold text-white">Govt Polytechnic Valsad</span>
              </div>
              <div className="flex items-center gap-2 bg-obsidian-900/80 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-electric-cyan" />
                <span className="font-semibold text-white">Open for Internships</span>
              </div>
            </div>

          </div>

          {/* Right Live Interactive Code Terminal (High-Contrast Bento Box) */}
          <div className="lg:col-span-5 w-full">
            <div className="bento-spotlight p-1 shadow-2xl backdrop-blur-md">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-obsidian-950/90 border-b border-white/15 rounded-t-xl">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500 shadow-sm"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm"></div>
                  <span className="text-xs font-mono text-white font-bold ml-2">
                    {codeSnippets[activeTab].filename}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyCode}
                    className="px-2.5 py-1 rounded-lg bg-obsidian-850 hover:bg-obsidian-750 text-slate-200 hover:text-white border border-white/15 transition-all text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-electric-emerald" /> : <Copy className="w-3.5 h-3.5 text-electric-cyan" />}
                    <span>{copiedCode ? "Copied!" : "Copy Code"}</span>
                  </button>
                </div>
              </div>

              {/* Code Tab Switcher */}
              <div className="flex border-b border-white/15 bg-obsidian-900/90 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('flutter')}
                  className={`flex items-center gap-2 px-3.5 py-2.5 border-r border-white/15 transition-all font-bold ${
                    activeTab === 'flutter'
                      ? 'bg-obsidian-850 text-electric-cyan border-b-2 border-b-electric-cyan shadow-glow-cyan'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Rakshak.dart</span>
                </button>

                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`flex items-center gap-2 px-3.5 py-2.5 border-r border-white/15 transition-all font-bold ${
                    activeTab === 'analytics'
                      ? 'bg-obsidian-850 text-electric-emerald border-b-2 border-b-electric-emerald shadow-glow-emerald'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>CarDekho_EDA.py</span>
                </button>

                <button
                  onClick={() => setActiveTab('security')}
                  className={`flex items-center gap-2 px-3.5 py-2.5 transition-all font-bold ${
                    activeTab === 'security'
                      ? 'bg-obsidian-850 text-purple-400 border-b-2 border-b-purple-400 shadow-glow-purple'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>AI_NIDS.py</span>
                </button>
              </div>

              {/* Code Content View */}
              <div className="p-4 bg-obsidian-950/95 font-mono text-xs text-slate-100 overflow-x-auto min-h-[195px] leading-relaxed selection:bg-electric-cyan selection:text-black">
                <pre>
                  <code>{codeSnippets[activeTab].code}</code>
                </pre>
              </div>

              {/* Terminal Environment & Status Sub-Bar */}
              <div className="px-4 py-2 bg-obsidian-950/90 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-electric-cyan animate-pulse"></span>
                  <span>{codeSnippets[activeTab].env}</span>
                </span>
                <span className="text-electric-emerald font-bold">
                  {codeSnippets[activeTab].status}
                </span>
              </div>

              {/* Terminal Quick Metrics Footer */}
              <div className="p-3.5 bg-obsidian-900/90 border-t border-white/15 flex items-center justify-between text-xs font-mono text-slate-300 rounded-b-xl">
                <span className="flex items-center gap-2 text-electric-emerald font-bold">
                  <Sparkles className="w-4 h-4" />
                  Verified Open-Source Repository
                </span>
                <a
                  href="https://github.com/Gauravpatel44"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-electric-cyan hover:text-white font-black inline-flex items-center gap-1.5 hover:underline"
                >
                  <span>github.com/Gauravpatel44</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Hero Scroll Down Cue */}
        <div className="flex flex-col items-center justify-center pt-2">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-electric-cyan transition-colors group cursor-pointer focus-ring rounded-lg p-1.5"
            aria-label="Scroll to about section"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-slate-400 group-hover:text-electric-cyan transition-colors">
              Explore Portfolio
            </span>
            <div className="w-5 h-8 rounded-full border-2 border-slate-600 group-hover:border-electric-cyan p-0.5 flex justify-center transition-colors">
              <div className="w-1.5 h-2 rounded-full bg-electric-cyan animate-bounce"></div>
            </div>
            <ChevronDown className="w-3.5 h-3.5 -mt-1 text-slate-500 group-hover:text-electric-cyan animate-pulse" />
          </a>
        </div>

      </div>
    </section>
  );
};
