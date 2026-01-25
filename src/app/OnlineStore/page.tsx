'use client';

import Image from 'next/image';
import { useState } from 'react';
import TransitionLink from '@/components/TransitionLink';

// Barcode Component - Horizontal
const HorizontalBarcode = () => {
  const bars = [2, 1, 3, 1, 2, 1, 1, 3, 1, 2, 1, 3, 1, 2, 1, 1, 3, 1, 2, 1, 3, 1, 2, 1, 1, 3, 1, 2, 1, 2, 1, 3, 1, 2, 1, 1, 2, 1, 3, 1, 2, 1, 1, 3, 1, 2, 1];
  return (
    <div className="flex items-end gap-[1px] h-5">
      {bars.map((width, i) => (
        <div
          key={i}
          className="bg-gray-400"
          style={{ width: `${width}px`, height: '100%' }}
        />
      ))}
    </div>
  );
};

// Barcode Component - Vertical (90 degrees)
const VerticalBarcode = () => {
  const bars = [2, 1, 3, 1, 2, 1, 1, 3, 1, 2, 1, 3, 1, 2, 1, 1, 3, 1, 2, 1, 3, 1, 2, 1, 1, 3, 1, 2, 1, 2, 1, 3, 1, 2, 1];
  return (
    <div className="flex flex-col gap-[1px] w-6">
      {bars.map((height, i) => (
        <div
          key={i}
          className="bg-gray-400"
          style={{ height: `${height}px`, width: '100%' }}
        />
      ))}
    </div>
  );
};

// Product Card Component
const ProductCard = ({
  name,
  price,
  placeholderText,
  cornerText,
}: {
  name: string;
  price: string;
  placeholderText: string;
  cornerText: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Card */}
      <div
        className="relative bg-[#1A1A1A] rounded-xl aspect-square flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Placeholder for product image */}
        <div className="w-3/4 h-3/4 bg-[#2A2A2A] rounded-lg flex items-center justify-center">
          <span className="text-gray-500 text-xs">Product Image</span>
        </div>

        {/* Circle indicator - bottom left */}
        <div
          className={`absolute bottom-4 left-4 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
            isHovered ? 'bg-[#00FF00] border-[#00FF00] shadow-[0_0_10px_#00FF00]' : 'border-gray-500'
          }`}
        />

        {/* Placeholder text - bottom right */}
        <div className="absolute bottom-4 right-4 text-[10px] text-gray-500 font-mono">
          {cornerText}
        </div>
      </div>

      {/* Product info below card */}
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-white font-medium text-lg">{name}</h3>
          <p className="text-gray-400 text-sm">{price}</p>
        </div>
        <span className="text-[10px] text-gray-500 font-mono mt-1">{placeholderText}</span>
      </div>
    </div>
  );
};

export default function OnlineStorePage() {
  return (
    <div className="min-h-screen min-w-[1400px] bg-black text-white font-sans">
      {/* ===== HEADER BAR ===== */}
      <header className="w-full relative border-b border-gray-900 bg-black">
        {/* Bottom shadow/gradient separator */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-900/80 via-gray-950/40 to-transparent translate-y-full pointer-events-none" />
        <div className="w-full px-8 py-2 flex items-center">
          {/* Left - Logo */}
          <TransitionLink href="/" className="flex-shrink-0">
            <Image
              src="/spectre_logo_transparent.png"
              alt="SPECTRE"
              width={280}
              height={100}
              className="h-20 w-auto -my-4"
            />
          </TransitionLink>

          {/* Navigation - positioned left */}
          <nav className="flex items-center gap-10 ml-32">
            <TransitionLink
              href="/"
              className="group relative text-base font-medium tracking-wider transition-colors text-gray-400 hover:text-white"
            >
              HOME
              <span className="absolute -bottom-[18px] left-1/2 -translate-x-1/2 w-16 h-[3px] bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </TransitionLink>
            <TransitionLink
              href="/shop"
              className="group relative text-base font-medium tracking-wider transition-colors text-gray-400 hover:text-white"
            >
              WEAR
              <span className="absolute -bottom-[18px] left-1/2 -translate-x-1/2 w-16 h-[3px] bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </TransitionLink>
            {['MUSIC', 'ART', 'DROPS'].map((item, index) => (
              <a
                key={index}
                href="#"
                className="group relative text-base font-medium tracking-wider transition-colors text-gray-400 hover:text-white"
              >
                {item}
                <span className="absolute -bottom-[18px] left-1/2 -translate-x-1/2 w-16 h-[3px] bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </nav>

          {/* Right - Sign In Button */}
          <button className="ml-auto px-6 py-2 border-2 border-white rounded-md text-sm font-medium tracking-wider hover:bg-white hover:text-black transition-colors">
            SIGN IN
          </button>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top left placeholder text */}
          <div className="absolute top-8 left-48 text-[10px] text-gray-500 font-mono tracking-wider">
            VTONIAC HUO GENNES
          </div>

          <div className="flex items-start justify-between">
            {/* LEFT SIDE - Logo and text */}
            <div className="flex-1 flex flex-col items-start pt-8">
              {/* Large SPECTRE Logo - centered above text */}
              <div className="w-full flex justify-center mb-8">
                <Image
                  src="/spectre_logo_transparent.png"
                  alt="SPECTRE"
                  width={400}
                  height={150}
                  className="w-[450px] h-auto drop-shadow-[0_0_30px_rgba(0,255,0,0.5)] translate-x-72 -translate-y-4"
                />
              </div>

              {/* Text content - left aligned */}
              <div className="space-y-1">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                  WELCOME TO THE SPECTRE STORE
                </h1>
                <p className="text-white text-lg tracking-wide pb-4">
                  YOUR DESTINATION FOR DIGITAL STREETWEAR
                </p>

                {/* SHOP NOW Button */}
                <button className="mt-4 px-14 py-3 border-2 border-[#4ADE80] rounded-xl text-white font-bold tracking-wider uppercase bg-[#111111] shadow-[0_0_10px_rgba(74,222,128,0.25),0_0_24px_rgba(74,222,128,0.1),inset_0_0_20px_rgba(74,222,128,0.15),inset_0_0_40px_rgba(74,222,128,0.08)] hover:shadow-[0_0_14px_rgba(74,222,128,0.35),0_0_32px_rgba(74,222,128,0.14),inset_0_0_25px_rgba(74,222,128,0.2),inset_0_0_50px_rgba(74,222,128,0.1)] transition-all duration-300">
                  SHOP NOW
                </button>
              </div>
            </div>

            {/* RIGHT SIDE - Hoodie display */}
            <div className="flex-1 flex flex-col items-end relative">
              {/* Top text */}
              <div className="mb-4">
                <span className="text-[12px] text-gray-400 font-mono tracking-wider">
                  CONTACTAIMUS
                </span>
              </div>

              {/* Vertical barcode - far right */}
              <div className="absolute top-0 -right-16 xl:fixed xl:top-28 xl:right-6">
                <VerticalBarcode />
              </div>

              {/* Hoodie Image */}
              <div className="relative w-[350px] h-[400px] flex items-center justify-center">
                {/* Placeholder for hoodie */}
                <div className="w-full h-full bg-[#1A1A1A] rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Hoodie Image</span>
                </div>
              </div>

              {/* Bottom text */}
              <div className="mt-2 text-[12px] text-gray-400 font-mono tracking-wider">
                JIOCONE LISG COGS
              </div>

              {/* Bottom barcode */}
              <div className="mt-16">
                <HorizontalBarcode />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCT SECTION ===== */}
      <section className="w-full -mt-8 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard
              name="Spectre Hoodie"
              price="$120"
              placeholderText="9.RRO:MDRLOD86E"
              cornerText="2.BONO MIBBONYA"
            />
            <ProductCard
              name="Future Tech Tee"
              price="$65"
              placeholderText="3.GFRAF BAHCOFVT"
              cornerText="4.XENO DIGITALIS"
            />
            <ProductCard
              name="Digital Camor"
              price="$80"
              placeholderText="RPTO1 SBAL ROSER"
              cornerText="DHOFNI. VANOSART"
            />
          </div>
        </div>
      </section>

      {/* ===== FOOTER AREA ===== */}
      <footer className="w-full py-8 relative">
        {/* Left corner - Vertical text */}
        <div className="absolute left-8 bottom-8 flex items-end gap-2">
          <span className="vertical-text-up text-[10px] text-gray-500 font-mono tracking-wider">
            © SPECTREWEAR
          </span>
          <span className="text-[10px] text-gray-500 font-mono tracking-wider">
            APNTECTURE
          </span>
        </div>
      </footer>
    </div>
  );
}
