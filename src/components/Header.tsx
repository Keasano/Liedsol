'use client';

import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[880px]">
      <header className="bg-[#F3F3EE]/50 backdrop-blur-sm rounded-full">
        <div className="px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <img src="/icons/liedsolLogo.svg" alt="Lied Sol Logo" className="h-7 w-7" />
              <span className="text-[#212121] font-medium text-lg">LIEDSOL</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-[#212121] hover:text-[#A8EC8F]">
                Home
              </a>
              <a href="/stake" className="text-[#212121] hover:text-[#A8EC8F]">
                Stake
              </a>
              <a href="/account" className="text-[#212121] hover:text-[#A8EC8F]">
                My account
              </a>
              <a href="/defi" className="text-[#212121] hover:text-[#A8EC8F]">
                Defi
              </a>
              <a href="/docs" className="text-[#212121] hover:text-[#A8EC8F]">
                Docs
              </a>
              <button className="bg-[#A8EC8F] text-[#212121] px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-medium">
                Connect Wallet
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <img src="/icons/menu.svg" alt="Menu" className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/90">
            <div className="px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <a
                  href="/"
                  className="text-[#212121] hover:text-[#A8EC8F]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="/stake"
                  className="text-[#212121] hover:text-[#A8EC8F]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Stake
                </a>
                <a
                  href="/account"
                  className="text-[#212121] hover:text-[#A8EC8F]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My account
                </a>
                <a
                  href="/defi"
                  className="text-[#212121] hover:text-[#A8EC8F]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Defi
                </a>
                <a
                  href="/docs"
                  className="text-[#212121] hover:text-[#A8EC8F]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Docs
                </a>
                <button className="bg-[#A8EC8F] text-[#212121] px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-medium">
                  Connect Wallet
                </button>
              </nav>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}; 