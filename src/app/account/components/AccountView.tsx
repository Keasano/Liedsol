'use client';

import { useEffect, useState } from 'react';
import { useWalletState } from '@/store/useWalletState';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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

// 数字动画变体
const numberVariants = {
  enter: {
    y: 20,
    opacity: 0
  },
  center: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: -20,
    opacity: 0
  }
};

// 格式化数字为紧凑格式
const formatCompact = (value: number) => {
  const formatter = Intl.NumberFormat('en', { 
    notation: 'compact',
    maximumFractionDigits: 2
  });
  return formatter.format(value);
};

export default function AccountView() {
  const router = useRouter();
  const { isMockConnected, mockAddress } = useWalletState();
  const [tvl, setTvl] = useState(0);
  const [lsol, setLsol] = useState(0);
  const [staked, setStaked] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isMockConnected && !isAnimating) {
      setIsAnimating(true);
      const duration = 2000; // 2秒
      const steps = 60; // 每秒30帧
      const interval = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        const progress = step / steps;
        const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic

        setTvl(0);
        setLsol(0);
        setStaked(1032.91 * easeProgress);

        if (step >= steps) {
          setIsAnimating(false);
          clearInterval(timer);
        }
        step++;
      }, interval);

      return () => clearInterval(timer);
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
          <div className="text-[28px] leading-none mb-1.5 font-bold text-[#212121] h-[34px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={tvl}
                initial="enter"
                animate="center"
                exit="exit"
                variants={numberVariants}
                transition={{ duration: 0.2 }}
              >
                {formatCompact(tvl)}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="text-[14px] font-light text-[#636161]">MY TVL</div>
        </motion.div>

        {/* 绿色小方块 */}
        <motion.div 
          className="w-2 h-2 bg-[#A8EC8F] mt-[-20px]" 
          variants={itemVariants}
        />

        <motion.div className="text-center" variants={itemVariants}>
          <div className="text-[28px] leading-none mb-1.5 font-bold text-[#212121] h-[34px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={lsol}
                initial="enter"
                animate="center"
                exit="exit"
                variants={numberVariants}
                transition={{ duration: 0.2 }}
              >
                {formatCompact(lsol)}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="text-[14px] font-light text-[#636161]">MY LSOL</div>
        </motion.div>

        {/* 绿色小方块 */}
        <motion.div 
          className="w-2 h-2 bg-[#A8EC8F] mt-[-20px]" 
          variants={itemVariants}
        />

        <motion.div className="text-center" variants={itemVariants}>
          <div className="text-[28px] leading-none mb-1.5 font-bold text-[#212121] h-[34px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={staked}
                initial="enter"
                animate="center"
                exit="exit"
                variants={numberVariants}
                transition={{ duration: 0.2 }}
              >
                {formatCompact(staked)}
              </motion.div>
            </AnimatePresence>
          </div>
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