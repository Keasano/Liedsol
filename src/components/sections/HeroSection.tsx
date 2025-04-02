'use client';

import { AnimatedText } from '../ui/AnimatedText';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center font-power-grotesk">
      {/* Decorative images */}
      <div className="absolute inset-0 overflow-visible pointer-events-none">
        {/* Left decorative image */}
        <img
          src="/images/hero-left.png"
          alt=""
          className="absolute left-0 top-1/2 w-[343px] -translate-y-1/2 animate-spin-left"
        />
        {/* Right decorative image */}
        <img
          src="/images/hero-right.png"
          alt=""
          className="absolute right-0 top-1/2 w-[343px] -translate-y-1/2 animate-spin-right"
        />
      </div>

      {/* Main content */}
      <div className="max-w-[800px] mx-auto px-4 text-center mt-9 relative">
        {/* Background pattern */}
        <img 
          src="/images/hero-pattern.svg"
          alt=""
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[720px] pointer-events-none -z-10"
        />
        
        <AnimatedText className="text-[#929796] text-[18px] mb-4 font-light" initial>
          Your Gateway to Passive Income
        </AnimatedText>
        <AnimatedText className="text-[74px] leading-tight font-bold text-[#212121] mb-6" initial>
          STAKE YOUR SOL
        </AnimatedText>
        <AnimatedText className="text-[12px] text-[#636161] mb-8 font-light" initial>
          Join thousands staking SOL for rewards. Secure and hassle-free.
        </AnimatedText>
        <AnimatedText initial>
          <button className="bg-[#A8EC8F] text-[#212121] px-8 h-11 rounded-full hover:opacity-90 transition-opacity font-medium text-[14px]">
            Deposit SOL
          </button>
        </AnimatedText>

        {/* Stats */}
        <div className="mt-16 flex justify-center gap-[120px]">
          <AnimatedText className="text-center" initial>
            <p className="text-[34px] font-bold text-[#212121] mb-0.5">8.4%</p>
            <p className="text-[#636161] uppercase text-[12px] font-medium">APY</p>
          </AnimatedText>
          <AnimatedText className="text-center" initial>
            <p className="text-[34px] font-bold text-[#212121] mb-0.5">3.5M SOL</p>
            <p className="text-[#636161] uppercase text-[12px] font-medium">TVL</p>
          </AnimatedText>
          <AnimatedText className="text-center" initial>
            <p className="text-[34px] font-bold text-[#212121] mb-0.5">3%</p>
            <p className="text-[#636161] uppercase text-[12px] font-medium">FEES</p>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}; 