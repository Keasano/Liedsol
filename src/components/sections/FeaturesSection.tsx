'use client';

import { useEffect, useRef, useState } from 'react';

export const FeaturesSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY - sectionTop + window.innerHeight / 2;
      const step = Math.floor((scrollPosition / sectionHeight) * 3);
      
      if (step >= 0 && step <= 2) {
        setActiveStep(step);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <p className="text-[#636161] mb-3">Process</p>
          <h2 className="text-4xl font-bold text-[#212121]">The Simplest Way With Lied Sol STAKE SOL</h2>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="bg-[#151615] rounded-[32px] p-8">
            <img src="/icons/menu.svg" alt="Menu" className="w-16 h-16 mb-4" />
            <h3 className="text-white text-xl font-medium mb-2">Connect Wallet</h3>
            <p className="text-[16px] font-light text-[#929796]">Connect your wallet to start staking SOL tokens.</p>
          </div>

          <div className="bg-[#151615] rounded-[32px] p-8">
            <img src="/icons/receive.svg" alt="Receive" className="w-16 h-16 mb-4" />
            <h3 className="text-white text-xl font-medium mb-2">Stake SOL</h3>
            <p className="text-[16px] font-light text-[#929796]">Choose the amount of SOL you want to stake.</p>
          </div>

          <div className="bg-[#151615] rounded-[32px] p-8">
            <img src="/icons/send.svg" alt="Send" className="w-16 h-16 mb-4" />
            <h3 className="text-white text-xl font-medium mb-2">Earn Rewards</h3>
            <p className="text-[16px] font-light text-[#929796]">Start earning staking rewards automatically.</p>
          </div>
        </div>

        <div className="mt-16 bg-[#151615] rounded-[32px] p-16">
          <div className="grid grid-cols-3 gap-16">
            <div>
              <img src="/icons/chart.svg" alt="High APY" className="w-16 h-16 mb-4" />
              <h3 className="text-white text-2xl font-medium mb-4">High APY</h3>
              <p className="text-[#929796] text-[16px] font-light">8.8%</p>
              <p className="text-[#929796] text-[16px] font-light">Earn an 8.8% APY to quickly grow your investments in the DeFi ecosystem.</p>
            </div>

            <div>
              <img src="/icons/coin.svg" alt="Low fee" className="w-16 h-16 mb-4" />
              <h3 className="text-white text-2xl font-medium mb-4">Low fee</h3>
              <p className="text-[#929796] text-[16px] font-light">3%</p>
              <p className="text-[#929796] text-[16px] font-light">Pay only 3% in fees to boost your returns and enjoy high yields.</p>
            </div>

            <div>
              <img src="/icons/rainbow.svg" alt="DeFi Ecosystem" className="w-16 h-16 mb-4" />
              <h3 className="text-white text-2xl font-medium mb-4">DeFi Ecosystem</h3>
              <p className="text-[#929796] text-[16px] font-light">10+</p>
              <p className="text-[#929796] text-[16px] font-light">Our DeFi ecosystem blends staking rewards with trading, re-staking, and lending to boost your returns.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 