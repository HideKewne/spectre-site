'use client'

import Image from 'next/image'
import Link from 'next/link'
import TransitionLink from '@/components/TransitionLink'

export default function ShopPage() {
    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white font-sans selection:bg-neon-green selection:text-black overflow-x-hidden">
            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-black/80 backdrop-blur-sm">
                <div className="flex items-center">
                    <span className="text-[#39FF14] font-bold text-sm tracking-widest">SPECTRE</span>
                </div>

                <div className="hidden md:flex items-center gap-16 text-[11px] tracking-[0.4em] font-medium text-white/50">
                    <TransitionLink href="/" className="hover:text-white transition-colors uppercase">Home</TransitionLink>
                    <Link href="/shop" className="text-white relative uppercase">
                        Shop
                        <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-white"></div>
                    </Link>
                    <Link href="/drop" className="hover:text-white transition-colors uppercase">Drop</Link>
                    <Link href="/about" className="hover:text-white transition-colors uppercase">About</Link>
                </div>

                <div>
                    <button className="text-[10px] tracking-[0.2em] border border-white/20 px-8 py-2.5 hover:bg-white hover:text-black transition-all duration-300 uppercase font-medium">
                        Sign In
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="pt-24 pb-16 px-8">
                {/* Light Content Card */}
                <div className="max-w-[1200px] mx-auto bg-[#e8e8e8] rounded-lg p-12">

                    {/* Chrome Logo - Small, Centered */}
                    <div className="flex justify-center mb-8">
                        <Image
                            src="/spectre_logo_transparent.png"
                            alt="Spectre Logo"
                            width={300}
                            height={100}
                            className="h-16 w-auto"
                            priority
                        />
                    </div>

                    {/* Two Column Layout */}
                    <div className="flex items-center justify-between">

                        {/* Left: Text Content */}
                        <div className="max-w-md">
                            <h1 className="text-black text-3xl font-bold tracking-wide mb-4">
                                WELCOME TO THE SPECTRE STORE
                            </h1>
                            <p className="text-gray-600 text-sm mb-8">
                                DISCOVER OUR EXCLUSIVE DIGITAL STREETWEAR
                            </p>
                            <button className="px-8 py-3 bg-[#39FF14] text-black text-xs tracking-widest font-bold uppercase hover:bg-[#2de00f] transition-colors">
                                SHOP NOW
                            </button>
                        </div>

                        {/* Right: Hoodie Image */}
                        <div className="w-[400px]">
                            <Image
                                src="/shop/hero_hoodie.png"
                                alt="Spectre Hoodie"
                                width={400}
                                height={500}
                                className="w-full h-auto"
                                priority
                            />
                        </div>

                    </div>
                </div>
            </main>

            {/* Product Grid */}
            <section className="max-w-[1200px] mx-auto px-8 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Product 1 */}
                    <div className="group cursor-pointer">
                        <div className="relative w-full aspect-[4/5] bg-white rounded-lg overflow-hidden">
                            <Image
                                src="/shop/hero_hoodie.png"
                                alt="Spectre Hoodie"
                                fill
                                className="object-contain p-8"
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-gray-800 text-sm font-medium mb-1">Spectre Hoodie</h3>
                            <p className="text-gray-500 text-sm">$120</p>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="group cursor-pointer">
                        <div className="relative w-full aspect-[4/5] bg-white rounded-lg overflow-hidden">
                            <Image
                                src="/shop/future_tech_tee.png"
                                alt="Future Tech Tee"
                                fill
                                className="object-contain p-8"
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-gray-800 text-sm font-medium mb-1">Future Tech Tee</h3>
                            <p className="text-gray-500 text-sm">$65</p>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="group cursor-pointer">
                        <div className="relative w-full aspect-[4/5] bg-white rounded-lg overflow-hidden">
                            <Image
                                src="/shop/digital_armor_pants.png"
                                alt="Digital Armor"
                                fill
                                className="object-contain p-8"
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-gray-800 text-sm font-medium mb-1">Digital Armor</h3>
                            <p className="text-gray-500 text-sm">$90</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="max-w-[1200px] mx-auto px-8 py-8 text-center">
                <p className="text-gray-500 text-xs">© SPECTRE 2024</p>
            </footer>
        </div>
    )
}
