'use client';

import React, { useState, useEffect } from 'react';

// --- Icons & SVG Components ---

const IconWifi = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
);

const IconGlobe = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
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

const IconComputer = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#39FF14]">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <path d="M5 6h14" strokeOpacity="0.5" />
    <path d="M5 9h8" strokeOpacity="0.5" />
  </svg>
);

const IconWorld = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#39FF14]">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M12 2v20" />
  </svg>
);

const IconAlienCalendar = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#39FF14]">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    {/* Alien Face */}
    <path d="M9 16c0-2 1.5-3 3-3s3 1 3 3c0 1.5-1 2.5-3 2.5S9 17.5 9 16z" />
    <circle cx="10.5" cy="15.5" r="0.5" fill="currentColor" />
    <circle cx="13.5" cy="15.5" r="0.5" fill="currentColor" />
  </svg>
);

const AlienLogo = () => (
  <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="text-[#39FF14]">
    <path d="M30 5C20 5 15 12 15 20C15 28 20 35 30 35C40 35 45 28 45 20C45 12 40 5 30 5Z" stroke="currentColor" strokeWidth="2" fill="rgba(57, 255, 20, 0.1)"/>
    <circle cx="23" cy="22" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="37" cy="22" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="30" cy="28" r="2" fill="currentColor" />
    <path d="M28 12L30 15L32 12" stroke="currentColor" strokeWidth="2" />
    {/* Decorative wings */}
    <path d="M15 20C10 18 5 22 2 25" stroke="currentColor" strokeWidth="1" />
    <path d="M45 20C50 18 55 22 58 25" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const WireframeGlobe = () => (
  <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30 z-0">
    <svg width="800" height="500" viewBox="0 0 800 500" className="animate-pulse">
      <defs>
        <linearGradient id="grid-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="#39FF14" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      {/* Latitudes */}
      <ellipse cx="400" cy="250" rx="350" ry="200" stroke="url(#grid-grad)" strokeWidth="0.5" fill="none" />
      <ellipse cx="400" cy="250" rx="350" ry="150" stroke="url(#grid-grad)" strokeWidth="0.5" fill="none" />
      <ellipse cx="400" cy="250" rx="350" ry="100" stroke="url(#grid-grad)" strokeWidth="0.5" fill="none" />
      <ellipse cx="400" cy="250" rx="350" ry="50" stroke="url(#grid-grad)" strokeWidth="0.5" fill="none" />
      <line x1="50" y1="250" x2="750" y2="250" stroke="url(#grid-grad)" strokeWidth="0.5" />

      {/* Longitudes */}
      <ellipse cx="400" cy="250" rx="50" ry="200" stroke="url(#grid-grad)" strokeWidth="0.5" fill="none" />
      <ellipse cx="400" cy="250" rx="150" ry="200" stroke="url(#grid-grad)" strokeWidth="0.5" fill="none" />
      <ellipse cx="400" cy="250" rx="250" ry="200" stroke="url(#grid-grad)" strokeWidth="0.5" fill="none" />
      <line x1="400" y1="50" x2="400" y2="450" stroke="url(#grid-grad)" strokeWidth="0.5" />
    </svg>
  </div>
);

// --- Barcode Component ---
const Barcode = () => {
  const bars = [2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1];
  const heights = [20, 28, 18, 25, 30, 22, 28, 20, 26, 24, 18, 30, 22, 28, 20, 26, 24, 18, 30, 22];

  return (
    <div className="h-8 flex items-end gap-[1px]">
      {bars.map((width, i) => (
        <div
          key={i}
          className="bg-white"
          style={{
            width: `${width}px`,
            height: `${heights[i]}px`
          }}
        />
      ))}
    </div>
  );
};

// --- Main Component ---

export default function SpectreSystem() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Particles with fixed positions for SSR
  const particles = [
    { top: 10, left: 20, opacity: 0.8, duration: 1.5 },
    { top: 30, left: 80, opacity: 0.6, duration: 1.2 },
    { top: 50, left: 15, opacity: 0.9, duration: 1.8 },
    { top: 70, left: 60, opacity: 0.5, duration: 1.3 },
    { top: 20, left: 45, opacity: 0.7, duration: 1.6 },
    { top: 80, left: 30, opacity: 0.4, duration: 1.4 },
    { top: 40, left: 90, opacity: 0.8, duration: 1.1 },
    { top: 60, left: 5, opacity: 0.6, duration: 1.7 },
    { top: 15, left: 70, opacity: 0.9, duration: 1.9 },
    { top: 85, left: 50, opacity: 0.5, duration: 1.2 },
  ];

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
        .chrome-text {
          font-family: 'Metal Mania', cursive;
          background: linear-gradient(to bottom, #ccffcc 0%, #ffffff 40%, #39FF14 50%, #0f4d0f 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 5px #39FF14);
          letter-spacing: 0.05em;
        }
        .corner-border {
          position: absolute;
          width: 10px;
          height: 10px;
          border: 2px solid #39FF14;
          transition: all 0.3s ease;
        }
        .card-hover:hover .corner-border {
          width: 100%;
          height: 100%;
          opacity: 0.5;
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

      {/* Vignette */}
      <div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>

      {/* --- TOP BAR --- */}
      <div className="relative z-30 w-full max-w-7xl mx-auto pt-6 px-4">
        <div className="flex justify-between items-center border-b border-[#39FF14]/30 pb-2 text-xs tracking-widest opacity-80 font-share-tech">
          <div className="flex gap-4">
            <span>Y2K SYSTEM</span>
            <span className="text-[#39FF14]/50">//</span>
            <span>SINCE 1999</span>
            <span className="text-[#39FF14]/50">//</span>
            <span>CODE 0071</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="cursor-pointer hover:text-white">@</span>
            <IconGlobe />
            <IconWifi />
            <IconShare />
          </div>
        </div>

        {/* Decorative top corners */}
        <div className="absolute top-6 left-4 w-2 h-2 border-t border-l border-[#39FF14]"></div>
        <div className="absolute top-6 right-4 w-2 h-2 border-t border-r border-[#39FF14]"></div>
      </div>

      {/* --- NAVIGATION --- */}
      <div className="relative z-30 flex justify-center mt-4">
        <div className="relative" onMouseLeave={() => setActiveDropdown(null)}>
          {/* Nav Container Shape */}
          <div className="flex items-center gap-8 px-12 py-3 border-b border-[#39FF14] bg-black/80 backdrop-blur-sm relative">
            {/* Decorative angled borders for nav */}
            <div className="absolute bottom-0 left-0 w-8 h-[1px] bg-[#39FF14] origin-left -rotate-45 translate-y-3 -translate-x-2"></div>
            <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-[#39FF14] origin-right rotate-45 translate-y-3 translate-x-2"></div>

            {['ARTISTS', 'WEBSHOP', 'INFO', 'BOOKING', 'SOCIALS'].map((item) => {
              const hasDropdown = ['ARTISTS', 'WEBSHOP', 'INFO', 'BOOKING', 'SOCIALS'].includes(item);
              const isActive = activeDropdown === item;
              return (
                <div
                  key={item}
                  className={`relative cursor-pointer font-orbitron tracking-widest text-sm ${isActive ? 'text-[#39FF14] glow-text' : 'text-white hover:text-[#39FF14] transition-colors'}`}
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item)}
                >
                  {item}
                  {hasDropdown && isActive && (
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[10px] animate-bounce">▼</div>
                  )}
                </div>
              );
            })}
          </div>

          {/* --- ARTISTS DROPDOWN --- */}
          <div
            className={`absolute top-full left-0 mt-4 min-w-[200px] border border-[#39FF14]/50 bg-black/90 backdrop-blur-md p-1 z-50 shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all duration-200 ${activeDropdown === 'ARTISTS' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}
          >
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#39FF14]"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#39FF14]"></div>
            <div className="p-4 flex flex-col gap-2 font-share-tech">
              <a href="#" className="hover:bg-[#39FF14] hover:text-black px-1 transition-colors block">ACE</a>
              <a href="#" className="hover:bg-[#39FF14] hover:text-black px-1 transition-colors block">LOUISG</a>
              <a href="#" className="hover:bg-[#39FF14] hover:text-black px-1 transition-colors block">NALDEAUX</a>
              <a href="#" className="hover:bg-[#39FF14] hover:text-black px-1 transition-colors block">SAFFARA</a>
              <a href="#" className="hover:bg-[#39FF14] hover:text-black px-1 transition-colors block">CROW</a>
              <a href="#" className="hover:bg-[#39FF14] hover:text-black px-1 transition-colors block">YC</a>
            </div>
          </div>

          {/* --- WEBSHOP DROPDOWN --- */}
          <div
            className={`absolute top-full left-[90px] mt-4 min-w-[180px] border border-[#39FF14]/50 bg-black/90 backdrop-blur-md p-1 z-50 shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all duration-200 ${activeDropdown === 'WEBSHOP' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}
          >
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#39FF14]"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#39FF14]"></div>
            <div className="p-4 flex flex-col gap-2 font-share-tech">
              <a href="#" className="hover:bg-[#39FF14] hover:text-black px-1 transition-colors block">Fashion</a>
              <div className="h-[1px] w-full bg-[#39FF14]/20 my-1"></div>
              <a href="#" className="hover:bg-[#39FF14] hover:text-black px-1 transition-colors block">Vinyl</a>
              <a href="#" className="hover:bg-[#39FF14] hover:text-black px-1 transition-colors block">Accessories</a>
              <a href="#" className="hover:bg-[#39FF14] hover:text-black px-1 transition-colors block">Limited Drops</a>
            </div>
          </div>

          {/* --- INFO DROPDOWN --- */}
          <div
            className={`absolute top-full left-[200px] mt-4 min-w-[200px] border border-[#39FF14]/50 bg-black/90 backdrop-blur-md p-1 z-50 shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all duration-200 ${activeDropdown === 'INFO' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}
          >
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#39FF14]"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#39FF14]"></div>
            <div className="p-4 flex flex-col gap-2 font-share-tech">
              <a href="#" className="hover:bg-[#39FF14] hover:text-black px-1 transition-colors block">Press Kit</a>
              <div className="h-[1px] w-full bg-[#39FF14]/20 my-1"></div>
              <a href="#" className="hover:bg-[#39FF14] hover:text-black px-1 transition-colors block">Press Kit Spectre</a>
              <a href="#" className="hover:bg-[#39FF14] hover:text-black px-1 transition-colors block">Press Kit Ace</a>
              <a href="#" className="hover:bg-[#39FF14] hover:text-black px-1 transition-colors block">Contact</a>
            </div>
          </div>

          {/* --- BOOKING DROPDOWN --- */}
          <div
            className={`absolute top-full left-[280px] mt-4 min-w-[320px] border border-[#39FF14]/50 bg-black/90 backdrop-blur-md p-1 z-50 shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all duration-200 ${activeDropdown === 'BOOKING' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}
          >
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#39FF14]"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#39FF14]"></div>
            <div className="grid grid-cols-2 gap-0">
              {/* Left Column */}
              <div className="p-4 border-r border-[#39FF14]/20 flex flex-col gap-2 font-share-tech">
                <a href="#" className="hover:bg-[#39FF14] hover:text-black px-1 transition-colors block">Agenda</a>
                <div className="h-[1px] w-full bg-[#39FF14]/20 my-1"></div>
                <a href="#" className="hover:bg-[#39FF14] hover:text-black px-1 transition-colors block">Events</a>
              </div>
              {/* Right Column */}
              <div className="p-4 flex flex-col gap-2 font-share-tech">
                <div className="text-[10px] text-[#39FF14]/60 mb-1">e_sinas</div>
                <a href="#" className="hover:bg-[#39FF14] hover:text-black px-1 transition-colors block">Previous Gigs</a>
              </div>
            </div>
          </div>

          {/* --- SOCIALS DROPDOWN --- */}
          <div
            className={`absolute top-full right-0 mt-4 min-w-[180px] border border-[#39FF14]/50 bg-black/90 backdrop-blur-md p-1 z-50 shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all duration-200 ${activeDropdown === 'SOCIALS' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}
          >
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#39FF14]"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#39FF14]"></div>
            <div className="p-4 flex flex-col gap-2 font-share-tech">
              <a href="#" className="hover:bg-[#39FF14] hover:text-black px-1 transition-colors block">Instagram</a>
              <a href="#" className="hover:bg-[#39FF14] hover:text-black px-1 transition-colors block">TikTok</a>
              <a href="#" className="hover:bg-[#39FF14] hover:text-black px-1 transition-colors block">Spotify</a>
              <a href="#" className="hover:bg-[#39FF14] hover:text-black px-1 transition-colors block">YouTube</a>
            </div>
          </div>
        </div>
      </div>

      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[500px] flex flex-col items-center justify-center overflow-hidden">
        <WireframeGlobe />

        {/* Floating Tech Particles */}
        {mounted && (
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((particle, i) => (
              <div
                key={i}
                className="absolute bg-[#39FF14] w-[2px] h-[2px]"
                style={{
                  top: `${particle.top}%`,
                  left: `${particle.left}%`,
                  opacity: particle.opacity,
                  animation: `pulse ${particle.duration}s infinite`
                }}
              />
            ))}
          </div>
        )}

        {/* LOGO */}
        <div className="relative z-10 text-center transform scale-110 hover:scale-[1.15] transition-transform duration-500">
          {/* Star flare above logo */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[2px] h-24 bg-white blur-[1px]"></div>
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-white blur-[1px]"></div>
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full blur-md shadow-[0_0_20px_white]"></div>

          <h1 className="text-[120px] leading-none chrome-text select-none">
            SPECTRE
          </h1>
        </div>

        {/* Subtitles */}
        <div className="relative z-10 mt-8 text-center space-y-2">
          <h2 className="font-orbitron text-2xl tracking-[0.2em] text-white glow-text">SHOP THE FUTURE</h2>
          <p className="text-sm tracking-widest text-[#39FF14]/80 font-share-tech">Y2K FASHION & PIXEL GEAR ++</p>
        </div>
      </div>

      {/* --- CTA CARDS --- */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="group relative h-24 border border-[#39FF14]/40 rounded-xl bg-black/50 backdrop-blur-sm flex items-center px-6 gap-4 cursor-pointer overflow-hidden card-hover">
            <div className="absolute inset-0 bg-[#39FF14]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="corner-border top-0 left-0 border-t-2 border-l-2 rounded-tl-xl"></div>
            <div className="corner-border bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl"></div>

            <div className="p-2 border border-[#39FF14]/30 rounded bg-black group-hover:shadow-[0_0_10px_#39FF14] transition-shadow">
              <IconComputer />
            </div>
            <div>
              <h3 className="font-orbitron text-xl text-white group-hover:text-[#39FF14] transition-colors">WESHOP</h3>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-share-tech">Futuristic Fashion</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative h-24 border border-[#39FF14]/40 rounded-xl bg-black/50 backdrop-blur-sm flex items-center px-6 gap-4 cursor-pointer overflow-hidden card-hover">
            <div className="absolute inset-0 bg-[#39FF14]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="corner-border top-0 left-0 border-t-2 border-l-2 rounded-tl-xl"></div>
            <div className="corner-border bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl"></div>

            <div className="p-2 border border-[#39FF14]/30 rounded bg-black group-hover:shadow-[0_0_10px_#39FF14] transition-shadow">
              <IconWorld />
            </div>
            <div>
              <h3 className="font-orbitron text-xl text-white group-hover:text-[#39FF14] transition-colors">INFO</h3>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-share-tech">Spectre System Data</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative h-24 border border-[#39FF14]/40 rounded-xl bg-black/50 backdrop-blur-sm flex items-center px-6 gap-4 cursor-pointer overflow-hidden card-hover">
            <div className="absolute inset-0 bg-[#39FF14]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="corner-border top-0 left-0 border-t-2 border-l-2 rounded-tl-xl"></div>
            <div className="corner-border bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl"></div>

            <div className="p-2 border border-[#39FF14]/30 rounded bg-black group-hover:shadow-[0_0_10px_#39FF14] transition-shadow">
              <IconAlienCalendar />
            </div>
            <div>
              <h3 className="font-orbitron text-xl text-white group-hover:text-[#39FF14] transition-colors">BOOKING</h3>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-share-tech">Live & Collabs</p>
            </div>
          </div>

        </div>
      </div>

      {/* --- FOOTER BANNER --- */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 mb-12">
        <div className="relative border border-[#39FF14] rounded-full h-24 flex items-center justify-between px-8 bg-black/80 shadow-[0_0_20px_rgba(57,255,20,0.1)] overflow-hidden">

          {/* Left: Alien Logo */}
          <div className="flex items-center gap-4">
             <div className="relative">
               <AlienLogo />
               <div className="absolute inset-0 bg-[#39FF14] blur-xl opacity-20"></div>
             </div>
          </div>

          {/* Center: Text */}
          <div className="flex flex-col items-center">
            <h2 className="font-orbitron text-2xl text-white tracking-widest">
              SPECTRE<span className="text-xs align-top">®</span> — SHOP THE FUTURE
            </h2>
            <div className="flex gap-4 mt-2 text-[10px] text-gray-400 font-share-tech">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full border border-[#39FF14]"></span> SPECTRE SYSTEM</span>
              <div className="flex gap-2 text-white">
                <span className="hover:text-[#39FF14] cursor-pointer">IG</span>
                <span className="hover:text-[#39FF14] cursor-pointer">FB</span>
                <span className="hover:text-[#39FF14] cursor-pointer">YT</span>
              </div>
            </div>
          </div>

          {/* Right: Barcode & Phone */}
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-2">
               <Barcode />
               <div className="text-2xl font-bold text-white">+❖</div>
            </div>
            <div className="text-[10px] tracking-widest text-gray-300 font-share-tech">
              (045) 8841387400800-00
            </div>
          </div>

          {/* Decorative lines inside pill */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-[#39FF14]/30"></div>
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
