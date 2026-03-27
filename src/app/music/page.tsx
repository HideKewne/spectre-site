'use client';

import React, { useState, useEffect, useMemo } from 'react';
import TransitionLink from '@/components/TransitionLink';

// --- Icons ---
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

const IconSpotify = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#1DB954">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

// --- Wireframe Globe Background ---
const WireframeGlobe = () => (
  <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20 z-0">
    <svg width="800" height="400" viewBox="0 0 800 400" className="animate-pulse">
      <defs>
        <linearGradient id="grid-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="#39FF14" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <ellipse cx="400" cy="200" rx="350" ry="180" stroke="url(#grid-grad)" strokeWidth="0.5" fill="none" />
      <ellipse cx="400" cy="200" rx="350" ry="130" stroke="url(#grid-grad)" strokeWidth="0.5" fill="none" />
      <ellipse cx="400" cy="200" rx="350" ry="80" stroke="url(#grid-grad)" strokeWidth="0.5" fill="none" />
      <ellipse cx="400" cy="200" rx="350" ry="30" stroke="url(#grid-grad)" strokeWidth="0.5" fill="none" />
      <line x1="50" y1="200" x2="750" y2="200" stroke="url(#grid-grad)" strokeWidth="0.5" />
      <ellipse cx="400" cy="200" rx="50" ry="180" stroke="url(#grid-grad)" strokeWidth="0.5" fill="none" />
      <ellipse cx="400" cy="200" rx="150" ry="180" stroke="url(#grid-grad)" strokeWidth="0.5" fill="none" />
      <ellipse cx="400" cy="200" rx="250" ry="180" stroke="url(#grid-grad)" strokeWidth="0.5" fill="none" />
      <line x1="400" y1="20" x2="400" y2="380" stroke="url(#grid-grad)" strokeWidth="0.5" />
    </svg>
  </div>
);

// --- Types ---
interface Track {
  number: number;
  title: string;
  duration: string;
}

interface Album {
  id: string;
  title: string;
  category: 'ALBUMS' | 'EPs' | 'SINGLES' | 'FEATURES';
  artist: string;
  year: string;
  coverImage: string;
  tracks: Track[];
  spotifyUrl: string;
}

// --- Fallback Data (shown immediately while API loads) ---
const FALLBACK_ALBUMS: Album[] = [
  {
    id: '0IXco9q1StJnM35hiDVlnK',
    title: 'AGAINST THE MACHINE',
    category: 'ALBUMS',
    artist: 'ACE',
    year: '2025',
    coverImage: 'https://i.scdn.co/image/ab67616d0000b273316537450fa68974d72c1268',
    tracks: [
      { number: 1, title: 'Duin', duration: '1:15' },
      { number: 2, title: 'Dopamine', duration: '2:13' },
      { number: 3, title: 'Pijn', duration: '2:11' },
      { number: 4, title: 'Virgil', duration: '1:34' },
      { number: 5, title: 'Socials', duration: '2:54' },
      { number: 6, title: '222 (feat. Louis G)', duration: '2:20' },
      { number: 7, title: 'B.O.M. (feat. YC, Naldeaux)', duration: '2:07' },
      { number: 8, title: 'ATM (feat. Naldeaux)', duration: '3:11' },
    ],
    spotifyUrl: 'https://open.spotify.com/album/0IXco9q1StJnM35hiDVlnK',
  },
  {
    id: '7HIf23PUmXoqp3kIzlw0rm',
    title: 'WWW',
    category: 'EPs',
    artist: 'ACE',
    year: '2023',
    coverImage: 'https://i.scdn.co/image/ab67616d0000b2735eee6d4c3a29778df60bc5c8',
    tracks: [
      { number: 1, title: 'Hii Tekk', duration: '2:30' },
      { number: 2, title: 'Andersom', duration: '2:54' },
      { number: 3, title: 'Los Gansos', duration: '3:01' },
      { number: 4, title: '40 Plus', duration: '3:47' },
      { number: 5, title: 'Geen Tijd', duration: '2:57' },
      { number: 6, title: 'Gister', duration: '2:20' },
    ],
    spotifyUrl: 'https://open.spotify.com/album/7HIf23PUmXoqp3kIzlw0rm',
  },
];

const DISCOGRAPHY_TYPES = ['ALL', 'ALBUMS', 'EPs', 'SINGLES', 'FEATURES'] as const;

// --- Album Section Component ---
const AlbumSection = ({ album }: { album: Album }) => (
  <div className="mb-16">
    {/* Album Title Row */}
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4 flex-wrap">
        <h2 className="font-orbitron text-2xl md:text-3xl text-white tracking-wider glow-text">
          {album.title}
        </h2>
        <div className="flex gap-2">
          <span className="font-orbitron text-[0.5rem] tracking-widest px-3 py-1 border border-[#39FF14]/20 rounded bg-[#39FF14]/5 text-[#39FF14]/50">
            {album.artist}
          </span>
          <span className="font-orbitron text-[0.5rem] tracking-widest px-3 py-1 border border-[#39FF14]/30 rounded text-[#39FF14]/60">
            {album.category === 'ALBUMS' ? 'ALBUM' : album.category === 'EPs' ? 'EP' : album.category === 'SINGLES' ? 'SINGLE' : 'FEATURE'}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <a
          href={album.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <IconSpotify size={28} />
        </a>
      </div>
    </div>

    {/* Divider */}
    <div className="h-[1px] w-full bg-[#39FF14]/30 mb-8"></div>

    {/* Album Content: Cover + Tracks */}
    <div className="border border-[#39FF14]/30 rounded-xl bg-black/50 backdrop-blur-sm p-6 md:p-8 relative overflow-hidden">
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#39FF14] rounded-tl-xl"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#39FF14] rounded-br-xl"></div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Album Cover — uses Spotify CDN URL directly, no disk storage */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <div className="relative w-[250px] h-[250px] md:w-[280px] md:h-[280px] border border-[#39FF14]/20 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(57,255,20,0.1)]">
            <img
              src={album.coverImage}
              alt={album.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-3 text-center md:text-left">
            <span className="font-share-tech text-xs text-[#39FF14]/60 tracking-wider">
              {album.artist} &middot; {album.year} &middot; {album.tracks.length} TRACKS
            </span>
          </div>
        </div>

        {/* Track Listing */}
        <div className="flex-1">
          <div className="space-y-0">
            {album.tracks.map((track) => (
              <div
                key={track.number}
                className="flex items-center justify-between py-3 border-b border-[#39FF14]/10 hover:bg-[#39FF14]/5 px-3 rounded transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <span className="font-share-tech text-sm text-[#39FF14]/50 w-6 text-right group-hover:text-[#39FF14] transition-colors">
                    {track.number}.
                  </span>
                  <span className="font-share-tech text-sm text-gray-300 group-hover:text-white transition-colors">
                    {track.title}
                  </span>
                </div>
                <span className="font-share-tech text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                  {track.duration}
                </span>
              </div>
            ))}
          </div>

          {/* Spotify Badge */}
          <div className="mt-6 flex items-center gap-3">
            <IconSpotify size={16} />
            <span className="font-share-tech text-xs text-gray-400">
              Available on Spotify
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Play on Spotify CTA - outside the card, right-aligned */}
    <div className="mt-4 flex justify-end">
      <a
        href={album.spotifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-8 py-3 border border-[#39FF14] rounded-lg font-orbitron text-sm tracking-widest text-[#39FF14] bg-[#39FF14]/10 hover:bg-[#39FF14]/20 hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all duration-300"
      >
        PLAY ON SPOTIFY
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </a>
    </div>
  </div>
);

// --- Main Music Page ---
export default function MusicPage() {
  const [albums, setAlbums] = useState<Album[]>(FALLBACK_ALBUMS);
  const [loading, setLoading] = useState(true);
  const [activeArtist, setActiveArtist] = useState<string>('ALL');
  const [activeType, setActiveType] = useState<string>('ALL');

  // Fetch fresh data from Netlify Function on mount
  useEffect(() => {
    fetch('/.netlify/functions/spotify-discography')
      .then((res) => res.json())
      .then((data) => {
        if (data.albums && data.albums.length > 0) {
          const seen = new Set<string>();
          const deduped = data.albums.filter((a: Album) => {
            if (seen.has(a.id)) return false;
            seen.add(a.id);
            return true;
          });
          setAlbums(deduped);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Only show SPECTRE roster artists in the filter — not featured collaborators
  const ROSTER_ARTISTS = ['ACE', 'CROW', 'LOUIS G', 'YC'];
  const artistList = ['ALL', ...ROSTER_ARTISTS];

  // Filter albums
  const filteredAlbums = albums.filter((album) => {
    let matchArtist = activeArtist === 'ALL' || album.artist === activeArtist;
    // For FEATURES, also match if the selected roster artist appears in any track title
    if (!matchArtist && album.category === 'FEATURES') {
      matchArtist = album.tracks.some((t) =>
        t.title.toUpperCase().includes(`FEAT. ${activeArtist}`)
      );
    }
    const matchType = activeType === 'ALL' || album.category === activeType;
    return matchArtist && matchType;
  });

  return (
    <div className="min-h-screen bg-black text-[#39FF14] font-mono overflow-x-hidden relative selection:bg-[#39FF14] selection:text-black">
      {/* Inline styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Share+Tech+Mono&display=swap');

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
          z-index: 9999;
          opacity: 0.15;
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
          <div className="flex gap-4 items-center">
            <TransitionLink href="/">
              <img src="/ghost.png" alt="Ghost" className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity" />
            </TransitionLink>
            <span>SPECTRE SOUNDSZ&trade;</span>
            <span className="text-[#39FF14]/50">//</span>
            <span>MUSIC</span>
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

      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[300px] md:h-[350px] flex flex-col items-center justify-center overflow-hidden">
        <WireframeGlobe />

        <div className="relative z-10 text-center">
          <h1 className="font-orbitron text-5xl md:text-7xl text-white tracking-[0.3em] glow-text">
            MUSIC
          </h1>
          <p className="mt-4 font-share-tech text-sm text-[#39FF14]/60 tracking-widest">
            System Error: Creativity Detected ++
          </p>
        </div>
      </div>

      {/* --- DUAL FILTER SYSTEM --- */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 mb-12">
        {/* Row 1: Filter by Artist — auto-populated from data */}
        <div className="mb-4">
          <p className="font-orbitron text-[0.6rem] text-[#39FF14]/40 tracking-[0.2em] mb-3">
            // FILTER BY ARTIST
          </p>
          <div className="flex items-center gap-2.5 overflow-x-auto scrollbar-hide pb-2">
            {artistList.map((artist) => {
              const isActive = activeArtist === artist;
              return (
                <button
                  key={artist}
                  onClick={() => setActiveArtist(artist)}
                  className={`px-5 py-2 rounded-lg font-orbitron text-[0.65rem] tracking-widest whitespace-nowrap transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#39FF14]/20 border-[#39FF14] text-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.2)]'
                      : 'border-[#39FF14]/30 text-gray-400 hover:text-[#39FF14] hover:border-[#39FF14]/60 hover:bg-[#39FF14]/5'
                  }`}
                >
                  {artist}
                </button>
              );
            })}
          </div>
          <div className="h-[1px] w-full bg-[#39FF14]/15 mt-3"></div>
        </div>

        {/* Row 2: Filter by Discography */}
        <div>
          <p className="font-orbitron text-[0.6rem] text-[#39FF14]/40 tracking-[0.2em] mb-3">
            // FILTER BY DISCOGRAPHY
          </p>
          <div className="flex items-center gap-2.5 overflow-x-auto scrollbar-hide pb-2">
            {DISCOGRAPHY_TYPES.map((type) => {
              const isActive = activeType === type;
              return (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-5 py-2 rounded-lg font-orbitron text-[0.65rem] tracking-widest whitespace-nowrap transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#39FF14]/20 border-[#39FF14] text-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.2)]'
                      : 'border-[#39FF14]/30 text-gray-400 hover:text-[#39FF14] hover:border-[#39FF14]/60 hover:bg-[#39FF14]/5'
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
          <div className="h-[1px] w-full bg-[#39FF14]/15 mt-3"></div>
        </div>
      </div>

      {/* --- ALBUM SECTIONS --- */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-20">
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-8 h-8 border-2 border-[#39FF14]/30 border-t-[#39FF14] rounded-full animate-spin mb-6"></div>
            <p className="font-share-tech text-[#39FF14]/60 text-lg tracking-wider">
              // LOADING DISCOGRAPHY...
            </p>
            <p className="font-share-tech text-[#39FF14]/30 text-sm mt-2">
              Fetching latest releases from Spotify
            </p>
          </div>
        ) : filteredAlbums.length > 0 ? (
          filteredAlbums.map((album) => (
            <AlbumSection key={album.id} album={album} />
          ))
        ) : (
          <div className="text-center py-20">
            <p className="font-share-tech text-gray-500 text-lg tracking-wider">
              // NO RESULTS
            </p>
            <p className="font-share-tech text-[#39FF14]/30 text-sm mt-2">
              No releases match these filters...
            </p>
          </div>
        )}
      </div>

      {/* --- BOTTOM BAR --- */}
      <div className="relative z-10 border-t border-[#39FF14]/20 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-share-tech text-xs text-[#39FF14]/40 tracking-widest">
            &copy; 2025 SPECTRE SOUNDSZ&trade; // ALL RIGHTS RESERVED
          </div>
          <div className="flex gap-6 font-share-tech text-xs text-[#39FF14]/40 tracking-wider">
            <TransitionLink href="/" className="hover:text-[#39FF14] transition-colors">HOME</TransitionLink>
            <TransitionLink href="/shop" className="hover:text-[#39FF14] transition-colors">SHOP</TransitionLink>
            <TransitionLink href="/contact" className="hover:text-[#39FF14] transition-colors">CONTACT</TransitionLink>
          </div>
        </div>
      </div>
    </div>
  );
}
