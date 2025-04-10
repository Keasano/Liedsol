'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export const ProcessSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !step1Ref.current || !step2Ref.current || !step3Ref.current) return;

      const windowHeight = window.innerHeight;
      const viewportCenter = windowHeight / 2;

      // 获取各个元素的位置信息
      const step1Rect = step1Ref.current.getBoundingClientRect();
      const step2Rect = step2Ref.current.getBoundingClientRect();
      const step3Rect = step3Ref.current.getBoundingClientRect();

      // 计算每个步骤的顶部位置
      const step1Top = step1Rect.top;
      const step2Top = step2Rect.top;
      const step3Top = step3Rect.top;

      let progress = 0;

      // 如果第一步还没开始进入视窗
      if (step1Top > viewportCenter + windowHeight * 0.2) {
        progress = 0;
      }
      // 如果在第一步和第二步之间
      else if (step2Top > viewportCenter) {
        // 计算第一步到第二步之间的进度
        const range = step2Top - step1Top;
        const current = viewportCenter - step1Top;
        // 提前开始增长
        const adjustedCurrent = current + range * 0.2;
        progress = Math.min(0.33, (adjustedCurrent / range) * 0.4);
      }
      // 如果在第二步和第三步之间
      else if (step3Top > viewportCenter) {
        // 计算第二步到第三步之间的进度
        const range = step3Top - step2Top;
        const current = viewportCenter - step2Top;
        // 提前开始增长
        const adjustedCurrent = current + range * 0.2;
        progress = 0.33 + Math.min(0.33, (adjustedCurrent / range) * 0.4);
      }
      // 如果第三步已经开始进入视窗中心
      else {
        // 计算第三步的进度
        const range = step3Rect.height;
        const current = viewportCenter - step3Top;
        // 提前开始增长
        const adjustedCurrent = current + range * 0.2;
        progress = 0.66 + Math.min(0.34, (adjustedCurrent / range) * 0.4);
      }

      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始检查
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-[150px] bg-[#F7F7F7] font-power-grotesk relative">
      <div className="max-w-[1200px] mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:gap-20 gap-10">
          {/* Left content */}
          <div className="flex-1 min-w-0 flex flex-col justify-between">
            <div>
              <p className="text-[#929796] text-[16px] mb-4 font-light">Process</p>
              <h2 className="text-[48px] leading-tight font-medium text-[#212121] mb-6">
                The Simplest Way<br />
                With Lied Sol<br />
                STAKE SOL
              </h2>
            </div>
            <div className="relative">
              <Image 
                src="/images/feature-swirl.png"
                alt="Decorative swirl"
                width={264}
                height={264}
                className="mt-8 animate-float"
              />
            </div>
          </div>

          {/* Right content */}
          <div className="flex-1 relative min-w-0">
            <div className="flex">
              {/* Progress bar */}
              <div className="w-[6px] bg-[#E8E8E8] relative mr-20">
                <div 
                  className="w-full bg-[#A8EC8F] absolute top-0 bottom-0 transition-transform duration-300"
                  style={{
                    transformOrigin: 'top',
                    transform: `scaleY(${scrollProgress})`
                  }}
                />
              </div>

              {/* Steps container */}
              <div className="flex-1 min-w-0">
                {/* Step 1 */}
                <div ref={step1Ref} className="flex">
                  <div className="w-[60px] text-center text-[60px] font-[800] italic text-[#A8EC8F] opacity-20 font-power-grotesk leading-none -mr-[11px] mt-[38px]">1</div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col">
                      <Image 
                        src="/icons/menu.svg" 
                        alt="Menu icon" 
                        width={32} 
                        height={32}
                        className="mb-4"
                      />
                      <h3 className="text-[28px] font-medium text-[#212121] mb-2">Staking Solana</h3>
                      <p className="text-[#636161] text-[16px] font-light">
                        Deposit the amount of $Solana you wish to stake on LieSolx.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div ref={step2Ref} className="flex mt-20">
                  <div className="w-[60px] text-center text-[60px] font-[800] italic text-[#A8EC8F] opacity-20 font-power-grotesk leading-none -mr-[11px] mt-[38px]">2</div>
                  <div className="min-w-0 flex-1">
                    <Image 
                      src="/icons/receive.svg" 
                      alt="Receive icon" 
                      width={32} 
                      height={32}
                      className="mb-4"
                    />
                    <h3 className="text-[28px] font-medium text-[#212121] mb-2">Receive $LSOL</h3>
                    <p className="text-[#636161] text-[16px] font-light">
                      Receive $LSOL as a staking reward, which appreciates in value relative to $Sol after each epoch.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div ref={step3Ref} className="flex mt-20">
                  <div className="w-[60px] text-center text-[60px] font-[800] italic text-[#A8EC8F] opacity-20 font-power-grotesk leading-none -mr-[11px] mt-[38px]">3</div>
                  <div className="min-w-0 flex-1">
                    <div className="flex -space-x-2 mb-4">
                      <Image src="/partners/allstake.svg" alt="Allstake" width={36} height={36} />
                      <Image src="/partners/kamino.svg" alt="Kamino" width={36} height={36} />
                      <Image src="/partners/orca.svg" alt="Orca" width={36} height={36} />
                      <Image src="/partners/sanctum.svg" alt="Sanctum" width={36} height={36} />
                    </div>
                    <h3 className="text-[28px] font-medium text-[#212121] mb-2">Engage In DeFi</h3>
                    <p className="text-[#636161] text-[16px] font-light">
                      Use $LSOL in DeFi on Solana, or swap to $SOL anytime. Boost returns with extra DeFi yields atop staking rewards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 