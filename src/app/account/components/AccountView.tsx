'use client';

import { useEffect } from 'react';
import { useWalletState } from '@/store/useWalletState';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

// 动画变体
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function AccountView() {
  const router = useRouter();
  const { isMockConnected, mockAddress } = useWalletState();

  // 创建动画数值
  const tvlCount = useMotionValue(0);
  const lsolCount = useMotionValue(0);
  const stakedCount = useMotionValue(0);

  const tvlDisplay = useTransform(tvlCount, value => value.toFixed(2));
  const lsolDisplay = useTransform(lsolCount, value => value.toFixed(2));
  const stakedDisplay = useTransform(stakedCount, value => value.toFixed(2));

  useEffect(() => {
    if (isMockConnected) {
      // 动画过渡到目标值
      animate(tvlCount, 0, { duration: 2 });
      animate(lsolCount, 0, { duration: 2 });
      animate(stakedCount, 1032.91, { duration: 2 });
    }
  }, [isMockConnected]);

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
      <motion.div 
        className="h-[calc(100vh-144px)] flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Image
            src="/account/assets/empty-wallet.svg"
            alt="Empty wallet state"
            width={160}
            height={160}
            className="mb-8"
          />
        </motion.div>
        <motion.p 
          variants={itemVariants}
          className="text-[16px] text-[#212121] mb-8"
        >
          Please connect a wallet first
        </motion.p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="h-[calc(100vh-144px)] flex flex-col"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 数据组 */}
      <motion.div 
        className="flex justify-center items-center gap-12 mb-10"
        variants={itemVariants}
      >
        <motion.div className="text-center" variants={itemVariants}>
          <motion.div className="text-[28px] leading-none mb-1.5 font-bold text-[#212121]">{tvlDisplay}</motion.div>
          <div className="text-[14px] font-light text-[#636161]">MY TVL</div>
        </motion.div>

        {/* 绿色小方块 */}
        <motion.div 
          className="w-2 h-2 bg-[#A8EC8F] mt-[-20px]" 
          variants={itemVariants}
        />

        <motion.div className="text-center" variants={itemVariants}>
          <motion.div className="text-[28px] leading-none mb-1.5 font-bold text-[#212121]">{lsolDisplay}</motion.div>
          <div className="text-[14px] font-light text-[#636161]">MY LSOL</div>
        </motion.div>

        {/* 绿色小方块 */}
        <motion.div 
          className="w-2 h-2 bg-[#A8EC8F] mt-[-20px]" 
          variants={itemVariants}
        />

        <motion.div className="text-center" variants={itemVariants}>
          <motion.div className="text-[28px] leading-none mb-1.5 font-bold text-[#212121]">{stakedDisplay}</motion.div>
          <div className="text-[14px] font-light text-[#636161]">TOTAL SOL STAKED</div>
        </motion.div>
      </motion.div>

      {/* 活动记录表格 */}
      <motion.div 
        className="flex-1 bg-white rounded-[24px] border border-[#EFF0ED] p-4"
        variants={itemVariants}
      >
        <motion.div 
          className="overflow-x-auto"
          variants={itemVariants}
        >
          <table className="w-full">
            <motion.thead variants={itemVariants}>
              <tr>
                <th className="text-left py-4 px-6 text-[16px] font-bold bg-[#F7F8F5] rounded-l-[16px]">Time</th>
                <th className="text-left py-4 px-6 text-[16px] font-bold bg-[#F7F8F5]">Actions</th>
                <th className="text-left py-4 px-6 text-[16px] font-bold bg-[#F7F8F5]">Amount</th>
                <th className="text-left py-4 px-6 text-[16px] font-bold bg-[#F7F8F5]">Status</th>
                <th className="text-left py-4 px-6 text-[16px] font-bold bg-[#F7F8F5] rounded-r-[16px]">Tx hash</th>
              </tr>
            </motion.thead>
            <motion.tbody variants={itemVariants}>
              {transactions.map((tx, index) => (
                <motion.tr 
                  key={tx.hash}
                  className={transactions.length > 1 && index !== transactions.length - 1 ? 'border-b border-[#F0F0EB]' : ''}
                  variants={itemVariants}
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
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 