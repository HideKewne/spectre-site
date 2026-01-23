'use client';

import React, { useState } from 'react';
import TransitionLink from '@/components/TransitionLink';

// --- Icons ---
const IconMail = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#39FF14]">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);

const IconPhone = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#39FF14]">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const IconWhatsApp = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#39FF14]">
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
  </svg>
);

const IconInstagram = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#39FF14]">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="18" cy="6" r="1" fill="currentColor" />
  </svg>
);

const IconGlobe = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const IconWifi = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
);

const IconShare = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const WireframeGlobe = () => (
  <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20 z-0">
    <svg width="600" height="400" viewBox="0 0 800 500" className="animate-pulse">
      <defs>
        <linearGradient id="grid-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="#39FF14" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <ellipse cx="400" cy="250" rx="350" ry="200" stroke="url(#grid-grad)" strokeWidth="0.5" fill="none" />
      <ellipse cx="400" cy="250" rx="350" ry="150" stroke="url(#grid-grad)" strokeWidth="0.5" fill="none" />
      <ellipse cx="400" cy="250" rx="350" ry="100" stroke="url(#grid-grad)" strokeWidth="0.5" fill="none" />
      <ellipse cx="400" cy="250" rx="50" ry="200" stroke="url(#grid-grad)" strokeWidth="0.5" fill="none" />
      <ellipse cx="400" cy="250" rx="150" ry="200" stroke="url(#grid-grad)" strokeWidth="0.5" fill="none" />
      <ellipse cx="400" cy="250" rx="250" ry="200" stroke="url(#grid-grad)" strokeWidth="0.5" fill="none" />
    </svg>
  </div>
);

// Contact info - replace with actual values
const CONTACT_INFO = {
  email: 'info@spectresoundsz.com',
  phone: '+31 6 12345678',
  whatsapp: '+31612345678',
  instagram: 'spectresoundsz',
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_CONTACT_WEBHOOK;

      if (!webhookUrl) {
        console.log('Form data:', formData);
        // Simulate success for demo
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setSubmitStatus('error');
        }
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-[#39FF14] font-mono overflow-x-hidden relative selection:bg-[#39FF14] selection:text-black">

      {/* CSS for custom effects */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Metal+Mania&family=Orbitron:wght@400;500;700;900&family=Share+Tech+Mono&display=swap');

        .scanlines {
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0),
            rgba(255,255,255,0) 50%,
            rgba(0,0,0,0.2) 50%,
            rgba(0,0,0,0.2)
          );
          background-size: 100% 4px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 50;
        }
        .glow-text {
          text-shadow: 0 0 10px rgba(57, 255, 20, 0.7);
        }
        .font-orbitron {
          font-family: 'Orbitron', sans-serif;
        }
        .font-share-tech {
          font-family: 'Share Tech Mono', monospace;
        }
      `}</style>

      {/* Scanline Overlay */}
      <div className="scanlines"></div>

      {/* --- TOP BAR --- */}
      <div className="relative z-30 w-full max-w-7xl mx-auto pt-6 px-4">
        <div className="flex justify-between items-center border-b border-[#39FF14]/30 pb-2 text-xs tracking-widest opacity-80 font-share-tech">
          <TransitionLink href="/" className="flex gap-4 items-center hover:opacity-100 transition-opacity">
            <img src="/ghost.png" alt="Ghost" className="w-8 h-8" />
            <span>SPECTRE SOUNDSZ™</span>
            <span className="text-[#39FF14]/50">//</span>
            <span>CONTACT</span>
          </TransitionLink>
          <div className="flex gap-4 items-center">
            <span className="cursor-pointer hover:text-white">@</span>
            <IconGlobe />
            <IconWifi />
            <IconShare />
          </div>
        </div>
        <div className="absolute top-6 left-4 w-2 h-2 border-t border-l border-[#39FF14]"></div>
        <div className="absolute top-6 right-4 w-2 h-2 border-t border-r border-[#39FF14]"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <div className="relative w-full py-16 flex flex-col items-center justify-center overflow-hidden">
        <WireframeGlobe />
        <div className="relative z-10 text-center">
          <h1 className="font-orbitron text-5xl md:text-7xl text-white glow-text tracking-wider">CONTACT</h1>
          <p className="text-sm tracking-[0.3em] text-[#39FF14]/80 font-share-tech mt-4">
            ESTABLISH CONNECTION // INITIATE TRANSFER
          </p>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left: Contact Form */}
          <div className="relative border border-[#39FF14]/40 rounded-xl bg-black/50 backdrop-blur-sm p-6 md:p-8">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#39FF14] rounded-tl-xl"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#39FF14] rounded-br-xl"></div>

            <h2 className="font-orbitron text-xl text-[#39FF14] tracking-wider mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#39FF14] rounded-full animate-pulse"></span>
              TRANSMISSION FORM
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[10px] text-gray-400 uppercase tracking-wider font-share-tech mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/60 border border-[#39FF14]/40 rounded-lg px-4 py-3 text-white placeholder-gray-500 font-share-tech focus:outline-none focus:border-[#39FF14] focus:shadow-[0_0_10px_rgba(57,255,20,0.2)] transition-all"
                  placeholder="Enter your name..."
                />
              </div>

              <div>
                <label className="block text-[10px] text-gray-400 uppercase tracking-wider font-share-tech mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/60 border border-[#39FF14]/40 rounded-lg px-4 py-3 text-white placeholder-gray-500 font-share-tech focus:outline-none focus:border-[#39FF14] focus:shadow-[0_0_10px_rgba(57,255,20,0.2)] transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-[10px] text-gray-400 uppercase tracking-wider font-share-tech mb-2">
                  SUBJECT
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-black/60 border border-[#39FF14]/40 rounded-lg px-4 py-3 text-white placeholder-gray-500 font-share-tech focus:outline-none focus:border-[#39FF14] focus:shadow-[0_0_10px_rgba(57,255,20,0.2)] transition-all"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label className="block text-[10px] text-gray-400 uppercase tracking-wider font-share-tech mb-2">
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/60 border border-[#39FF14]/40 rounded-lg px-4 py-3 text-white placeholder-gray-500 font-share-tech focus:outline-none focus:border-[#39FF14] focus:shadow-[0_0_10px_rgba(57,255,20,0.2)] transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#39FF14]/20 border border-[#39FF14] rounded-lg text-[#39FF14] font-orbitron tracking-wider hover:bg-[#39FF14]/30 hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT'}
              </button>

              {submitStatus === 'success' && (
                <div className="text-center text-[#39FF14] font-share-tech text-sm mt-4 p-3 border border-[#39FF14]/40 rounded-lg bg-[#39FF14]/10">
                  TRANSMISSION SUCCESSFUL // MESSAGE RECEIVED
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-center text-red-500 font-share-tech text-sm mt-4 p-3 border border-red-500/40 rounded-lg bg-red-500/10">
                  TRANSMISSION FAILED // PLEASE TRY AGAIN
                </div>
              )}
            </form>
          </div>

          {/* Right: Contact Info Cards */}
          <div className="space-y-4">
            {/* Email */}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="group relative block border border-[#39FF14]/40 rounded-xl bg-black/50 backdrop-blur-sm p-5 hover:border-[#39FF14] transition-all"
            >
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#39FF14] rounded-tl-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#39FF14] rounded-br-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-4">
                <div className="p-2 border border-[#39FF14]/30 rounded bg-black group-hover:shadow-[0_0_10px_#39FF14] transition-shadow">
                  <IconMail />
                </div>
                <div>
                  <h3 className="font-orbitron text-white group-hover:text-[#39FF14] transition-colors">EMAIL</h3>
                  <p className="text-sm text-gray-400 font-share-tech">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="group relative block border border-[#39FF14]/40 rounded-xl bg-black/50 backdrop-blur-sm p-5 hover:border-[#39FF14] transition-all"
            >
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#39FF14] rounded-tl-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#39FF14] rounded-br-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-4">
                <div className="p-2 border border-[#39FF14]/30 rounded bg-black group-hover:shadow-[0_0_10px_#39FF14] transition-shadow">
                  <IconPhone />
                </div>
                <div>
                  <h3 className="font-orbitron text-white group-hover:text-[#39FF14] transition-colors">PHONE</h3>
                  <p className="text-sm text-gray-400 font-share-tech">{CONTACT_INFO.phone}</p>
                </div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block border border-[#39FF14]/40 rounded-xl bg-black/50 backdrop-blur-sm p-5 hover:border-[#39FF14] transition-all"
            >
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#39FF14] rounded-tl-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#39FF14] rounded-br-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-4">
                <div className="p-2 border border-[#39FF14]/30 rounded bg-black group-hover:shadow-[0_0_10px_#39FF14] transition-shadow">
                  <IconWhatsApp />
                </div>
                <div>
                  <h3 className="font-orbitron text-white group-hover:text-[#39FF14] transition-colors">WHATSAPP</h3>
                  <p className="text-sm text-gray-400 font-share-tech">Click to chat</p>
                </div>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={`https://instagram.com/${CONTACT_INFO.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block border border-[#39FF14]/40 rounded-xl bg-black/50 backdrop-blur-sm p-5 hover:border-[#39FF14] transition-all"
            >
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#39FF14] rounded-tl-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#39FF14] rounded-br-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-4">
                <div className="p-2 border border-[#39FF14]/30 rounded bg-black group-hover:shadow-[0_0_10px_#39FF14] transition-shadow">
                  <IconInstagram />
                </div>
                <div>
                  <h3 className="font-orbitron text-white group-hover:text-[#39FF14] transition-colors">INSTAGRAM</h3>
                  <p className="text-sm text-gray-400 font-share-tech">@{CONTACT_INFO.instagram}</p>
                </div>
              </div>
            </a>

            {/* Back to Home */}
            <TransitionLink
              href="/"
              className="block text-center text-sm text-gray-500 hover:text-[#39FF14] font-share-tech mt-8 transition-colors"
            >
              ← RETURN TO MAIN TERMINAL
            </TransitionLink>
          </div>

        </div>
      </div>

      {/* --- BOTTOM COPYRIGHT --- */}
      <div className="relative z-20 w-full border-t border-[#39FF14]/20 bg-black py-2 px-8 flex justify-between items-center text-[10px] text-gray-500 font-share-tech">
        <div className="flex items-center gap-2">
          <span>© SPECTRE SYSTEM</span>
          <span className="text-[#39FF14]">10/99</span>
        </div>
        <div className="tracking-[0.2em]">
          CODE: <span className="text-gray-300">88413874008000-00</span>
        </div>
      </div>

      {/* Decorative side tech lines */}
      <div className="fixed top-1/3 left-4 w-[1px] h-32 bg-gradient-to-b from-transparent via-[#39FF14]/50 to-transparent hidden md:block"></div>
      <div className="fixed top-1/3 right-4 w-[1px] h-32 bg-gradient-to-b from-transparent via-[#39FF14]/50 to-transparent hidden md:block"></div>

    </div>
  );
}
