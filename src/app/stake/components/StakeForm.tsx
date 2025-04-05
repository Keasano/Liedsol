'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { StakeFormProps } from './types';

export function StakeForm(props: StakeFormProps) {
  const [selectedTab, setSelectedTab] = useState<'stake' | 'unstake'>('stake');
  const [amount, setAmount] = useState('');

  return (
    <div className="w-full max-w-[500px]">
      {/* 切换按钮 */}
      <div className="flex bg-[#F7F8F5] rounded-full p-1 mb-8">
        <button
          className={`flex-1 py-3 px-4 rounded-full text-[#212121] text-base font-medium transition-all ${
            selectedTab === 'stake'
              ? 'bg-white shadow-[0_2px_4px_rgba(0,0,0,0.06)]'
              : 'hover:text-black'
          }`}
          onClick={() => setSelectedTab('stake')}
        >
          Stake
        </button>
        <button
          className={`flex-1 py-3 px-4 rounded-full text-[#212121] text-base font-medium transition-all ${
            selectedTab === 'unstake'
              ? 'bg-white shadow-[0_2px_4px_rgba(0,0,0,0.06)]'
              : 'hover:text-black'
          }`}
          onClick={() => setSelectedTab('unstake')}
        >
          Unstake
        </button>
      </div>

      {/* 代币展示 */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <div className="text-gray-500 mb-2">Stake</div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full overflow-hidden bg-black flex items-center justify-center">
              <span className="text-white text-xs">S</span>
            </div>
            <span className="font-medium">SOL</span>
          </div>
          <div className="text-right">
            <div className="text-2xl">0.00</div>
            <div className="text-sm text-gray-500">$0</div>
          </div>
        </div>

        {/* 交换图标 */}
        <div className="flex justify-center my-6">
          <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
            ↓
          </div>
        </div>

        <div className="text-gray-500 mb-2">Receive</div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full overflow-hidden bg-[#A8EC8F] flex items-center justify-center">
              <span className="text-black text-xs">L</span>
            </div>
            <span className="font-medium">LSOL</span>
          </div>
          <div className="text-right">
            <div className="text-2xl">0.00</div>
            <div className="text-sm text-gray-500">$0</div>
          </div>
        </div>
      </div>

      {/* Exchange Rate */}
      <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
        <span>EXCHANGE RATE</span>
        <span>1 SOL = 1.03048723 LSOL</span>
      </div>

      {/* Connect Wallet 按钮 */}
      <button
        type="button"
        className="w-full py-4 bg-[#A8EC8F] text-black rounded-full font-medium hover:bg-[#97d580] transition-colors mt-4"
      >
        Connect Wallet
      </button>

      <div className="bg-white rounded-2xl p-6 shadow-sm mt-4">
        <h2 className="text-xl font-semibold mb-6">Stake SOL</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount (SOL)
            </label>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0.0"
                min="0"
                step="0.1"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-blue-600 hover:text-blue-700"
                onClick={() => setAmount('0.0')} // TODO: Set to max balance
              >
                MAX
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Stake
          </button>
        </form>
      </div>
    </div>
  );
} 