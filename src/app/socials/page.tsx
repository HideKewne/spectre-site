'use client';

import React, { useState, useEffect } from 'react';
import TransitionLink from '@/components/TransitionLink';

const artists = [
  { name: 'SPECTRE', image: '/artists/spectre.png' },
  { name: 'ACE', image: '/artists/ace.png' },
  { name: 'LOUISG', image: '/artists/louisg.png' },
  { name: 'NALDEAUX', image: '/artists/naldeaux.png' },
  { name: 'CROW', image: '/artists/crow.png' },
  { name: 'YC', image: '/artists/yc.png' },
];

const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const IconTikTok = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.05a8.27 8.27 0 004.76 1.5V7.1a4.83 4.83 0 01-1-.41z" />
  </svg>
);

const IconSpotify = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

const IconYouTube = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const socialLinks = [
  { icon: IconInstagram, label: 'Instagram' },
  { icon: IconTikTok, label: 'TikTok' },
  { icon: IconSpotify, label: 'Spotify' },
  { icon: IconYouTube, label: 'YouTube' },
];

export default function SocialsPage() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{ top: number; left: number; opacity: number; duration: number }>>([]);

  useEffect(() => {
    setMounted(true);
    setParticles(
      Array.from({ length: 30 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.1,
        duration: Math.random() * 3 + 2,
      }))
    );
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
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
                animation: `pulse ${particle.duration}s infinite`,
              }}
            />
          ))}
        </div>
      )}

      {/* Decorative side lines */}
      <div className="fixed top-1/3 left-4 w-[1px] h-32 bg-gradient-to-b from-transparent via-[#39FF14]/50 to-transparent hidden md:block"></div>
      <div className="fixed top-1/3 right-4 w-[1px] h-32 bg-gradient-to-b from-transparent via-[#39FF14]/50 to-transparent hidden md:block"></div>

      {/* Back Navigation */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 pt-8">
        <TransitionLink
          href="/"
          className="inline-flex items-center gap-2 text-[#39FF14] hover:text-white transition-colors font-share-tech text-sm tracking-wider"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          BACK TO HOME
        </TransitionLink>
      </div>

      {/* Page Header */}
      <div className="relative z-10 text-center pt-8 pb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#39FF14]"></div>
          <h1 className="font-orbitron text-4xl md:text-5xl text-[#39FF14] tracking-[0.2em] glow-text">
            THE CREW
          </h1>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#39FF14]"></div>
        </div>
        <p className="font-share-tech text-sm text-gray-400 tracking-[0.3em] uppercase">
          Follow the Spectre artists
        </p>
      </div>

      {/* Artist Grid */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="group relative border border-[#39FF14]/30 rounded-xl bg-black/50 backdrop-blur-sm overflow-hidden hover:border-[#39FF14]/70 transition-all duration-300 hover:shadow-[0_0_25px_rgba(57,255,20,0.15)]"
            >
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#39FF14] rounded-tl-xl z-10"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#39FF14] rounded-br-xl z-10"></div>

              {/* Artist Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                {/* Scan line effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(57,255,20,0.1) 2px, rgba(57,255,20,0.1) 4px)',
                  }}
                ></div>
              </div>

              {/* Artist Info */}
              <div className="relative p-5 -mt-8">
                <h3 className="font-orbitron text-2xl text-white tracking-widest mb-4 group-hover:text-[#39FF14] transition-colors">
                  {artist.name}
                </h3>

                {/* Social Buttons */}
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      title={label}
                      className="w-10 h-10 rounded-lg border border-[#39FF14]/30 bg-black/60 flex items-center justify-center text-gray-400 hover:text-[#39FF14] hover:border-[#39FF14] hover:shadow-[0_0_10px_rgba(57,255,20,0.3)] transition-all duration-200"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-20 w-full border-t border-[#39FF14]/20 bg-black py-2 px-8 flex justify-between items-center text-[10px] text-gray-500 font-share-tech">
        <div className="flex items-center gap-2">
          <span>&copy; SPECTRE SYSTEM</span>
          <span className="text-[#39FF14]">10/99</span>
        </div>
        <div className="tracking-[0.2em]">
          CODE: <span className="text-gray-300">88413874008000-00</span>
        </div>
      </div>
    </div>
  );
}
