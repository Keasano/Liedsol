'use client';

import { useState } from 'react';
import Image from 'next/image';

export function StakeView() {
  const [activeTab, setActiveTab] = useState<'stake' | 'unstake'>('stake');

  return (
    <div className="w-full max-w-[480px] mx-auto">
      {/* 标签切换 */}
      <div className="flex p-1 bg-[#F7F8F5] rounded-full relative mb-8">
        {/* 滑动背景 */}
        <div
          className={`absolute inset-y-1 w-[calc(50%-4px)] bg-white rounded-full transition-transform duration-300 ease-in-out shadow-[0_2px_4px_rgba(0,0,0,0.06)] ${
            activeTab === 'stake' ? 'left-1' : 'left-[calc(50%+3px)]'
          }`}
        />
        
        <button
          className={`relative flex-1 h-10 text-base font-medium transition-colors duration-300 rounded-full ${
            activeTab === 'stake' ? 'text-[#212121]' : 'text-[#636161]'
          }`}
          onClick={() => setActiveTab('stake')}
        >
          Stake
        </button>
        <button
          className={`relative flex-1 h-10 text-base font-medium transition-colors duration-300 rounded-full ${
            activeTab === 'unstake' ? 'text-[#212121]' : 'text-[#636161]'
          }`}
          onClick={() => setActiveTab('unstake')}
        >
          Unstake
        </button>
      </div>

      {/* 主要内容区域 */}
      <div className="bg-[#F7F8F5] rounded-3xl p-6 h-[266px] flex flex-col justify-between mb-8">
        {/* SOL 输入区域 */}
        <div>
          <div className="text-sm text-[#929796] mb-3">Stake</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/stake/assets/tokens/sol.svg"
                alt="SOL"
                width={32}
                height={32}
              />
              <span className="text-xl text-[#212121]">SOL</span>
            </div>
            <div className="text-right">
              <div className="text-[28px] leading-none text-[#929796]">0.00</div>
              <div className="text-sm text-[#929796] mt-1">$0</div>
            </div>
          </div>
        </div>

        {/* 分割线和转换图标 */}
        <div className="relative flex items-center">
          {/* 左侧分割线 */}
          <div className="flex-1 h-px bg-[#ECEDEA]" />
          
          {/* 转换图标 */}
          <div className="mx-[18px]">
            <Image
              src="/stake/assets/tokens/switch-arrow.svg"
              alt=""
              width={56}
              height={56}
            />
          </div>
          
          {/* 右侧分割线 */}
          <div className="flex-1 h-px bg-[#ECEDEA]" />
        </div>

        {/* LSOL 输入区域 */}
        <div>
          <div className="text-sm text-[#929796] mb-3">Receive</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/stake/assets/tokens/lsol.svg"
                alt="LSOL"
                width={32}
                height={32}
              />
              <span className="text-xl text-[#212121]">LSOL</span>
            </div>
            <div className="text-right">
              <div className="text-[28px] leading-none text-[#929796]">0.00</div>
              <div className="text-sm text-[#929796] mt-1">$0</div>
            </div>
          </div>
        </div>
      </div>

      {/* 兑换比率 */}
      <div className="flex justify-between items-center mb-8">
        <span className="text-[14px] font-light text-[#636161]">EXCHANGE RATE</span>
        <span className="text-[14px] font-light text-[#636161]">1 SOL = 1.030487323 LSOL</span>
      </div>

      {/* 操作按钮 */}
      <button className="w-full h-[52px] bg-[#A8EC8F] rounded-full text-base font-medium text-[#212121] hover:bg-opacity-90 transition-colors">
        Connect Wallet
      </button>
    </div>
  );
} 