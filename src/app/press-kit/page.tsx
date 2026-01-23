'use client';

import React from 'react';
import TransitionLink from '@/components/TransitionLink';

// --- Icons ---
const IconDownload = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#39FF14]">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7,10 12,15 17,10" />
    <line x1="12" y1="15" x2="12" y2="3" />
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

// Brand assets
const BRAND_ASSETS = [
  {
    name: 'SPECTRE LOGO',
    description: 'Transparent PNG',
    file: '/spectre_logo_transparent.png',
    preview: '/spectre_logo_transparent.png',
  },
  {
    name: 'GHOST MASCOT',
    description: 'Transparent PNG',
    file: '/ghost.png',
    preview: '/ghost.png',
  },
  {
    name: 'LOGO WITH BG',
    description: 'Standard PNG',
    file: '/spectre-logo.png',
    preview: '/spectre-logo.png',
  },
];

// Press Articles
const PRESS_ARTICLES = [
  {
    id: 'ace-against-the-machine',
    source: '3VOOR12 UTRECHT',
    date: 'FEBRUARY 2025',
    title: 'ACE Against The Machine: Het Vreedzame Verzet',
    subtitle: '"Wij zijn onderdeel van het probleem – bewust of onbewust. Daarom strijd ik Against The Machine."',
    author: 'Leon van der Horst',
    excerpt: `Utrecht-based artist Damon Brunings, performing as ACE, released his EP "ACE Against the Machine" in late February, featuring eight tracks addressing inequality and social media algorithms. The EP functions as "peaceful resistance against injustice."

The track "Virgil" explores mindset through a running joke within ACE's friend group, with the artist explaining that "twee Virgil" represents maintaining authenticity and integrity at 100%.

The song "ATM" captures ACE's internal struggle, examining questions like "With whom am I fighting so hard? And why?" The artist reflects on time as humanity's most precious resource and how individuals choose to allocate their attention and financial support.

ACE emphasizes the dual nature of complicity: "We are part of the problem—consciously or unconsciously." He describes his creative process as conceptual, beginning with freestyling around core ideas until reaching their essence, particularly prioritizing "the first four bars" to establish emotional tone.`,
    url: 'https://3voor12.vpro.nl/lokaal/utrecht/update~9e16ab1c-0201-4650-91dd-7ab6d1f88167~ace-against-the-machine-het-vreedzame-verzet~.html',
  },
];

// External link icon
const IconExternalLink = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function PressKitPage() {
  const handleDownload = (file: string, name: string) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = name.toLowerCase().replace(/\s+/g, '-') + '.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            <span>PRESS KIT</span>
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
          <h1 className="font-orbitron text-5xl md:text-7xl text-white glow-text tracking-wider">PRESS KIT</h1>
          <p className="text-sm tracking-[0.3em] text-[#39FF14]/80 font-share-tech mt-4">
            MEDIA COVERAGE // PRESS ARTICLES
          </p>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left: Downloadable Assets */}
          <div className="relative border border-[#39FF14]/40 rounded-xl bg-black/50 backdrop-blur-sm p-6 md:p-8">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#39FF14] rounded-tl-xl"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#39FF14] rounded-br-xl"></div>

            <h2 className="font-orbitron text-xl text-[#39FF14] tracking-wider mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#39FF14] rounded-full animate-pulse"></span>
              BRAND ASSETS
            </h2>

            <div className="space-y-4">
              {BRAND_ASSETS.map((asset) => (
                <div
                  key={asset.name}
                  className="group relative border border-[#39FF14]/30 rounded-lg bg-black/40 p-4 hover:border-[#39FF14]/60 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 flex items-center justify-center bg-black/60 rounded border border-[#39FF14]/20 group-hover:border-[#39FF14]/50 transition-all overflow-hidden">
                      <img
                        src={asset.preview}
                        alt={asset.name}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-orbitron text-white text-sm">{asset.name}</h3>
                      <p className="text-xs text-gray-500 font-share-tech">{asset.description}</p>
                    </div>
                    <button
                      onClick={() => handleDownload(asset.file, asset.name)}
                      className="px-4 py-2 bg-[#39FF14]/10 border border-[#39FF14]/50 rounded text-[#39FF14] font-share-tech text-xs tracking-wider hover:bg-[#39FF14]/20 hover:shadow-[0_0_10px_rgba(57,255,20,0.2)] transition-all flex items-center gap-2"
                    >
                      <IconDownload />
                      <span className="hidden sm:inline">DOWNLOAD</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Press Coverage */}
          <div className="space-y-6">
            {PRESS_ARTICLES.map((article) => (
              <div key={article.id} className="relative border border-[#39FF14]/40 rounded-xl bg-black/50 backdrop-blur-sm p-6 md:p-8">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#39FF14] rounded-tl-xl"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#39FF14] rounded-br-xl"></div>

                {/* Source & Date */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] text-[#39FF14] font-orbitron tracking-wider bg-[#39FF14]/10 px-3 py-1 rounded border border-[#39FF14]/30">
                    {article.source}
                  </span>
                  <span className="text-[10px] text-gray-500 font-share-tech">{article.date}</span>
                </div>

                {/* Title */}
                <h2 className="font-orbitron text-xl md:text-2xl text-white tracking-wide mb-3 leading-tight">
                  {article.title}
                </h2>

                {/* Subtitle/Quote */}
                <p className="text-sm text-[#39FF14]/80 font-share-tech italic mb-4 border-l-2 border-[#39FF14]/40 pl-4">
                  {article.subtitle}
                </p>

                {/* Author */}
                <p className="text-xs text-gray-500 font-share-tech mb-6">
                  Door: <span className="text-gray-400">{article.author}</span>
                </p>

                {/* Article Content */}
                <div className="text-sm text-gray-300 font-share-tech leading-relaxed space-y-4">
                  {article.excerpt.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Read Original Link */}
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-[#39FF14]/10 border border-[#39FF14]/50 rounded text-[#39FF14] font-share-tech text-xs tracking-wider hover:bg-[#39FF14]/20 hover:shadow-[0_0_10px_rgba(57,255,20,0.2)] transition-all"
                >
                  <IconExternalLink />
                  READ ORIGINAL ARTICLE
                </a>
              </div>
            ))}

            {/* Back to Home */}
            <TransitionLink
              href="/"
              className="block text-center text-sm text-gray-500 hover:text-[#39FF14] font-share-tech mt-4 transition-colors"
            >
              ← RETURN TO MAIN TERMINAL
            </TransitionLink>
          </div>

        </div>

        {/* Press Contact Section */}
        <div className="mt-12 relative border border-[#39FF14]/40 rounded-xl bg-black/50 backdrop-blur-sm p-6 md:p-8 text-center">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#39FF14] rounded-tl-xl"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#39FF14] rounded-br-xl"></div>

          <h2 className="font-orbitron text-xl text-[#39FF14] tracking-wider mb-4">PRESS INQUIRIES</h2>
          <p className="text-gray-400 font-share-tech mb-4">
            For press inquiries, interviews, and media requests:
          </p>
          <a
            href="mailto:press@spectresoundsz.com"
            className="inline-block px-6 py-3 bg-[#39FF14]/20 border border-[#39FF14] rounded-lg text-[#39FF14] font-orbitron tracking-wider hover:bg-[#39FF14]/30 hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all"
          >
            press@spectresoundsz.com
          </a>
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
