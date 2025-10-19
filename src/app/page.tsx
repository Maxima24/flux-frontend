"use client";

import { Hero, Features, Stats, CTA } from "../components/landing";
import ConnectWallet from "@/components/web3/ConnectWallet";

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <style>{`
        .dark { --bg: 0 0% 0%; }
        .light { --bg: 0 0% 100%; }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-orange-500/10 bg-black/20 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            FLUX
          </div>
          <ConnectWallet />
        </div>
      </header>

      <main className="pt-20">
        <Hero />
        <Features />
        <Stats />
        <CTA />
      </main>

      <footer className="border-t border-orange-500/10 py-8 text-center text-gray-500">
        <p>© 2025 Flux. All rights reserved.</p>
      </footer>
    </div>
  );
}
