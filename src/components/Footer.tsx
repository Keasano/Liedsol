'use client';

import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[#F4F4F4] py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <Image 
                src="/icons/liedsolLogo.svg" 
                alt="Brand" 
                width={20} 
                height={20}
                priority 
              />
              <span className="text-[#212121] font-medium">LIEDSOL</span>
            </div>
            <p className="text-[14px] text-[#636161] mt-8 mb-6">
              LIESOL is a hardware-accelerated blockchain scaling the SVM for fast, low-latency apps.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-[#A8EC8F] text-[#212121] px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-medium text-[14px]">
                Stake Now
              </button>
              <span className="text-[#636161] text-[14px]">1000+ TPS</span>
            </div>
          </div>

          <div className="flex gap-20">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-[6px] h-[6px] bg-[#212121]"></div>
                <h3 className="text-[#636161] font-normal text-[14px]">Overview</h3>
              </div>
              <ul className="space-y-[14px] pl-[14px]">
                <li><a href="#" className="text-[#212121] font-normal text-base">Introduction</a></li>
                <li><a href="#" className="text-[#212121] font-normal text-base">LSOL</a></li>
                <li><a href="#" className="text-[#212121] font-normal text-base">Fees</a></li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-[6px] h-[6px] bg-[#212121]"></div>
                <h3 className="text-[#636161] font-normal text-[14px]">Staking</h3>
              </div>
              <ul className="space-y-[14px] pl-[14px]">
                <li><a href="#" className="text-[#212121] font-normal text-base">Liquid staking</a></li>
                <li><a href="#" className="text-[#212121] font-normal text-base">Staking APY</a></li>
                <li><a href="#" className="text-[#212121] font-normal text-base">Risks</a></li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-[6px] h-[6px] bg-[#212121]"></div>
                <h3 className="text-[#636161] font-normal text-[14px]">Support</h3>
              </div>
              <ul className="space-y-[14px] pl-[14px]">
                <li><a href="#" className="text-[#212121] font-normal text-base">FAQ</a></li>
                <li><a href="#" className="text-[#212121] font-normal text-base">Contact us</a></li>
                <li><a href="#" className="text-[#212121] font-normal text-base">Delegation Strategy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-between items-center">
          <div className="flex gap-4">
            <a href="#" className="text-[#212121]">
              <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
            </a>
            <a href="#" className="text-[#212121]">
              <Image src="/icons/telegram.svg" alt="Telegram" width={24} height={24} />
            </a>
            <a href="#" className="text-[#212121]">
              <Image src="/icons/discord.svg" alt="Discord" width={24} height={24} />
            </a>
            <a href="#" className="text-[#212121]">
              <Image src="/icons/youtube.svg" alt="YouTube" width={24} height={24} />
            </a>
          </div>
          <p className="text-[#929796] text-[12px]">© 2025 Solayer · All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}; 