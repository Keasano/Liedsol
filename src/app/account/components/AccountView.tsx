'use client';

import { useEffect } from 'react';
import { useWalletState } from '@/store/useWalletState';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AccountView() {
  const router = useRouter();
  const { isMockConnected, mockAddress } = useWalletState();

  // 模拟数据
  const transactions = [
    {
      time: 'Sep 11,2024 10:38 AM',
      action: 'Deposit',
      amount: '+0.097998 SOL',
      status: 'Success',
      hash: '5BuEhv..panic'
    }
  ];

  // 如果未连接钱包，显示空状态
  if (!isMockConnected) {
    return (
      <div className="h-[calc(100vh-144px)] flex flex-col items-center justify-center">
        <Image
          src="/account/assets/empty-wallet.svg"
          alt="Empty wallet state"
          width={160}
          height={160}
          className="mb-8"
        />
        <p className="text-[16px] text-[#212121] mb-8">
          Please connect a wallet first
        </p>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-144px)] flex flex-col">
      {/* 数据组 */}
      <div className="flex justify-center items-center gap-12 mb-10">
        <div className="text-center">
          <div className="text-[28px] leading-none mb-1.5 font-bold text-[#212121]">0</div>
          <div className="text-[14px] font-light text-[#636161]">MY TVL</div>
        </div>

        {/* 绿色小方块 */}
        <div className="w-2 h-2 bg-[#A8EC8F] mt-[-20px]" />

        <div className="text-center">
          <div className="text-[28px] leading-none mb-1.5 font-bold text-[#212121]">0</div>
          <div className="text-[14px] font-light text-[#636161]">MY LSOL</div>
        </div>

        {/* 绿色小方块 */}
        <div className="w-2 h-2 bg-[#A8EC8F] mt-[-20px]" />

        <div className="text-center">
          <div className="text-[28px] leading-none mb-1.5 font-bold text-[#212121]">1032.91</div>
          <div className="text-[14px] font-light text-[#636161]">TOTAL SOL STAKED</div>
        </div>
      </div>

      {/* 活动记录表格 */}
      <div className="flex-1 bg-white rounded-[24px] border border-[#EFF0ED] p-4">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-4 px-6 text-[16px] font-bold bg-[#F7F8F5] rounded-l-[16px]">Time</th>
                <th className="text-left py-4 px-6 text-[16px] font-bold bg-[#F7F8F5]">Actions</th>
                <th className="text-left py-4 px-6 text-[16px] font-bold bg-[#F7F8F5]">Amount</th>
                <th className="text-left py-4 px-6 text-[16px] font-bold bg-[#F7F8F5]">Status</th>
                <th className="text-left py-4 px-6 text-[16px] font-bold bg-[#F7F8F5] rounded-r-[16px]">Tx hash</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr 
                  key={tx.hash}
                  className={transactions.length > 1 && index !== transactions.length - 1 ? 'border-b border-[#F0F0EB]' : ''}
                >
                  <td className="text-left py-4 px-6 text-[14px]">{tx.time}</td>
                  <td className="text-left py-4 px-6 text-[14px]">{tx.action}</td>
                  <td className="text-left py-4 px-6 text-[14px]">{tx.amount}</td>
                  <td className="text-left py-4 px-6">
                    <div className="flex">
                      <div className="inline-flex items-center gap-1">
                        <span className="text-[14px] text-[#77DC53]">{tx.status}</span>
                        <Image
                          src="/icons/success.svg"
                          alt=""
                          width={16}
                          height={16}
                          className="relative top-[1px]"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="text-left py-4 px-6">
                    <div className="flex">
                      <div className="inline-flex items-center gap-1">
                        <span className="text-[14px] text-[#212121]">{tx.hash}</span>
                        <Image
                          src="/icons/external-link.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 