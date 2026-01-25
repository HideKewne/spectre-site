'use client'
import Image from 'next/image'
import Link from 'next/link'
import TransitionLink from '@/components/TransitionLink'
export default function ShopPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-neon-green selection:text-black overflow-x-hidden">
            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-black/80 backdrop-blur-sm">
                <div className="flex items-center">
                    <Image
                        src="/spectre_logo_transparent.png"
                        alt="Spectre Logo"
                        width={120}
                        height={40}
                        className="w-24 h-auto object-contain brightness-110"
                    />
                    <span className="text-neon-green font-bold text-sm tracking-widest">SPECTRE</span>
                </div>
                <div className="hidden md:flex items-center gap-16 text-[11px] tracking-[0.4em] font-medium text-white/50">
                    <TransitionLink href="/" className="hover:text-white transition-colors uppercase font-bold">Home</TransitionLink>
                    <Link href="/shop" className="text-white relative uppercase font-bold">
                        Shop
                        <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-white"></div>
                    </Link>
                    <Link href="/drop" className="hover:text-white transition-colors uppercase font-bold">Drop</Link>
                    <Link href="/about" className="hover:text-white transition-colors uppercase font-bold">About</Link>
                </div>
                <div>
                    <button className="text-[10px] tracking-[0.2em] border border-white/20 px-8 py-2.5 hover:bg-white hover:text-black transition-all duration-300 uppercase font-bold">
                        Sign In
                    </button>
                </div>
            </nav>

            {/* Left Edge Vertical Indicator */}
            <div className="fixed left-6 top-1/2 -translate-y-1/2 vertical-text text-[9px] tracking-[0.4em] text-white/10 uppercase font-mono z-20">
                NY/LON/TYO // 004
            </div>

            {/* Right Edge Vertical Indicator */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 vertical-text text-[9px] tracking-[0.4em] text-white/10 uppercase font-mono z-20 whitespace-nowrap">
                SPECTRE // SYSTEM // 2024
            </div>

            {/* Hero Section */}
            <main className="relative pt-32 pb-32 px-16 max-w-[1400px] mx-auto min-h-screen flex flex-col items-center justify-center overflow-visible">
                {/* Large Chrome Logo - Scaled Up and Backgrounded */}
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] max-w-[1800px] opacity-[0.8] z-0 pointer-events-none">
                    <Image
                        src="/spectre_logo_transparent.png"
                        alt="Spectre Chrome Logo"
                        width={2400}
                        height={1200}
                        className="w-full h-auto"
                        priority
                    />
                </div>

                {/* Content Layout */}
                <div className="w-full relative flex flex-col md:flex-row items-center justify-between gap-12 z-10">
                    {/* Left Side Content */}
                    <div className="max-w-4xl">
                        {/* Decorative Top Left IDs */}
                        <div className="text-[8px] tracking-[0.4em] text-white/20 uppercase mb-4 font-mono">
                            X-2024V // RG-1001
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-[48px] font-black tracking-[0.02em] leading-none mb-4 uppercase text-white whitespace-nowrap">
                            Welcome to the Spectre Store
                        </h1>
                        <p className="text-white/40 tracking-[0.5em] text-[10px] mb-12 uppercase font-medium">
                            Your destination for digital streetwear
                        </p>
                        <button className="px-8 py-3 bg-transparent border border-neon-green text-neon-green text-[10px] tracking-[0.5em] font-black uppercase transition-all duration-300 hover:bg-neon-green hover:text-black hover:shadow-[0_0_40px_rgba(57,255,20,0.3)]">
                            Shop Now
                        </button>
                    </div>

                    {/* Hero Visual - Product Floating */}
                    <div className="relative w-full max-w-xl aspect-square flex items-center justify-center">
                        {/* Decorative Top Right ID */}
                        <div className="absolute top-0 right-0 text-[8px] tracking-[0.4em] text-white/20 uppercase font-mono">
                            SPECTRE // ID
                        </div>

                        {/* Featured Product - Floating (no box) */}
                        <div className="relative z-10 w-full h-full flex items-center justify-center">
                            {/* Radial Glow behind hoodie */}
                            <div className="absolute w-[120%] h-[120%] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none"></div>
                            <Image
                                src="/shop/hero_hoodie.png"
                                alt="Spectre Hoodie"
                                width={1000}
                                height={1000}
                                className="w-full h-full object-contain filter brightness-[1.1] contrast-[1.4] mix-blend-screen drop-shadow-[0_60px_120px_rgba(0,0,0,1)] grayscale-[0.2]"
                                priority
                            />
                            {/* Main Reference ID - Bottom Right of Hoodie */}
                            <div className="absolute -bottom-4 -right-8 text-[9px] tracking-[0.4em] text-white/40 uppercase font-mono text-right transform rotate-0">
                                #X1001-RG-2024V
                            </div>
                        </div>

                        {/* Technical Labels bottom right area */}
                        <div className="absolute bottom-12 -right-12 text-[7px] tracking-[0.4em] text-white/10 uppercase font-mono text-right leading-loose">
                            X:0014 // P-RG004<br />
                            #X1001-1A-NY004
                        </div>
                    </div>
                </div>
            </main>

            {/* Product Grid */}
            <section className="max-w-[1400px] mx-auto px-12 pb-48 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Product 1 */}
                    <div className="group cursor-pointer">
                        <div className="relative w-full aspect-[4/5] bg-transparent border border-white/[0.05] rounded-none overflow-hidden transition-all duration-700 group-hover:bg-white/[0.02]">
                            {/* Specific Corner Icons: Plus/Crosshair in ALL 4 corners */}
                            <div className="absolute top-4 left-4 w-3 h-3 flex items-center justify-center opacity-30">
                                <div className="absolute w-full h-[1px] bg-white"></div>
                                <div className="absolute w-[1px] h-full bg-white"></div>
                            </div>
                            <div className="absolute top-4 right-4 w-3 h-3 flex items-center justify-center opacity-30">
                                <div className="absolute w-full h-[1px] bg-white"></div>
                                <div className="absolute w-[1px] h-full bg-white"></div>
                            </div>
                            <div className="absolute bottom-4 left-4 w-3 h-3 flex items-center justify-center opacity-30">
                                <div className="absolute w-full h-[1px] bg-white"></div>
                                <div className="absolute w-[1px] h-full bg-white"></div>
                            </div>
                            <div className="absolute bottom-4 right-4 w-3 h-3 flex items-center justify-center opacity-30">
                                <div className="absolute w-full h-[1px] bg-white"></div>
                                <div className="absolute w-[1px] h-full bg-white"></div>
                            </div>
                            <Image
                                src="/shop/hero_hoodie.png"
                                alt="Spectre Hoodie"
                                fill
                                className="object-cover p-12 transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute bottom-4 right-10 text-[7px] tracking-[0.4em] text-white/10 uppercase font-mono">#X1001-SARM-004</div>
                        </div>
                        <div className="mt-8 text-center">
                            <h3 className="text-[12px] tracking-[0.4em] uppercase font-black mb-2 group-hover:text-neon-green transition-colors">Spectre Hoodie</h3>
                            <p className="text-white/20 text-[10px] tracking-[0.4em]">$120</p>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="group cursor-pointer">
                        <div className="relative w-full aspect-[4/5] bg-transparent border border-white/[0.05] rounded-none overflow-hidden transition-all duration-700 group-hover:bg-white/[0.02]">
                            {/* Specific Corner Icons: Plus/Crosshair in ALL 4 corners */}
                            <div className="absolute top-4 left-4 w-3 h-3 flex items-center justify-center opacity-30">
                                <div className="absolute w-full h-[1px] bg-white"></div>
                                <div className="absolute w-[1px] h-full bg-white"></div>
                            </div>
                            <div className="absolute top-4 right-4 w-3 h-3 flex items-center justify-center opacity-30">
                                <div className="absolute w-full h-[1px] bg-white"></div>
                                <div className="absolute w-[1px] h-full bg-white"></div>
                            </div>
                            <div className="absolute bottom-4 left-4 w-3 h-3 flex items-center justify-center opacity-30">
                                <div className="absolute w-full h-[1px] bg-white"></div>
                                <div className="absolute w-[1px] h-full bg-white"></div>
                            </div>
                            <div className="absolute bottom-4 right-4 w-3 h-3 flex items-center justify-center opacity-30">
                                <div className="absolute w-full h-[1px] bg-white"></div>
                                <div className="absolute w-[1px] h-full bg-white"></div>
                            </div>
                            <Image
                                src="/shop/future_tech_tee.png"
                                alt="Future Tech Tee"
                                fill
                                className="object-cover p-16 transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute bottom-4 right-10 text-[7px] tracking-[0.4em] text-white/10 uppercase font-mono">#X1001-SYG-01</div>
                        </div>
                        <div className="mt-8 text-center">
                            <h3 className="text-[12px] tracking-[0.4em] uppercase font-black mb-2 group-hover:text-neon-green transition-colors">Future Tech Tee</h3>
                            <p className="text-white/20 text-[10px] tracking-[0.4em]">$65</p>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="group cursor-pointer">
                        <div className="relative w-full aspect-[4/5] bg-transparent border border-white/[0.05] rounded-none overflow-hidden transition-all duration-700 group-hover:bg-white/[0.02]">
                            {/* Specific Corner Icons: Plus/Crosshair in ALL 4 corners */}
                            <div className="absolute top-4 left-4 w-3 h-3 flex items-center justify-center opacity-30">
                                <div className="absolute w-full h-[1px] bg-white"></div>
                                <div className="absolute w-[1px] h-full bg-white"></div>
                            </div>
                            <div className="absolute top-4 right-4 w-3 h-3 flex items-center justify-center opacity-30">
                                <div className="absolute w-full h-[1px] bg-white"></div>
                                <div className="absolute w-[1px] h-full bg-white"></div>
                            </div>
                            <div className="absolute bottom-4 left-4 w-3 h-3 flex items-center justify-center opacity-30">
                                <div className="absolute w-full h-[1px] bg-white"></div>
                                <div className="absolute w-[1px] h-full bg-white"></div>
                            </div>
                            <div className="absolute bottom-4 right-4 w-3 h-3 flex items-center justify-center opacity-30">
                                <div className="absolute w-full h-[1px] bg-white"></div>
                                <div className="absolute w-[1px] h-full bg-white"></div>
                            </div>
                            <Image
                                src="/shop/digital_armor_pants.png"
                                alt="Digital Armor"
                                fill
                                className="object-cover p-12 transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute bottom-4 right-10 text-[7px] tracking-[0.4em] text-white/10 uppercase font-mono">#X1001-A-RE01</div>
                        </div>
                        <div className="mt-8 text-center">
                            <h3 className="text-[12px] tracking-[0.4em] uppercase font-black mb-2 group-hover:text-neon-green transition-colors">Digital Armor</h3>
                            <p className="text-white/20 text-[10px] tracking-[0.4em]">$90</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Details */}
            <footer className="px-12 pb-16 flex justify-between items-end">
                <div className="text-[9px] tracking-[0.4em] text-white/10 uppercase flex flex-col gap-2">
                    <span>#X1001-LOG</span>
                    <span>© SPECTRE 2024</span>
                </div>
                <div className="text-[9px] tracking-[0.4em] text-white/10 uppercase flex flex-col gap-2 items-end">
                    <span>#SYG-DP004-STORE</span>
                    <span>LOC: NY/LON/TYO</span>
                </div>
            </footer>
        </div>
    )
}
