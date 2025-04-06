'use client';

import Image from 'next/image';
import StakeView from './components/StakeView';
import { useAccount } from 'wagmi';

export default function StakePage() {
  const { isConnected } = useAccount();

  return (
    <main className="min-h-screen">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        {/* 左侧装饰 */}
        <div className="fixed left-0 top-0 -z-10">
          <Image
            src="/stake/assets/stake-left-decoration.svg"
            alt=""
            width={381}
            height={637}
            priority
          />
        </div>

        {/* 右侧装饰 */}
        <div className="fixed right-0 top-0 -z-10">
          <Image
            src="/stake/assets/stake-right-decoration.svg"
            alt=""
            width={381}
            height={637}
            priority
          />
        </div>

        {/* APY 和 TVL */}
        <div className="flex justify-center items-center gap-12 mb-6 mt-[120px]">
          <div className="text-center">
            <div className="text-[28px] leading-none mb-1.5 font-bold text-[#212121] font-power-grotesk">8.4%</div>
            <div className="text-[14px] font-light text-[#636161] font-power-grotesk">APY</div>
          </div>

          {/* 绿色小方块 */}
          <div className="w-2 h-2 bg-[#A8EC8F] mt-[-20px]" />

          <div className="text-center">
            <div className="text-[28px] leading-none mb-1.5 font-bold text-[#212121] font-power-grotesk">3.5M SOL</div>
            <div className="text-[14px] font-light text-[#636161] font-power-grotesk">TVL</div>
          </div>
        </div>

        <StakeView />
      </div>
    </main>
  );
} 