'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAccount, useDisconnect } from 'wagmi';
import { Web3Layout } from '@/components/Web3Layout';
import { ConnectKitButton } from 'connectkit';
import { useWalletState } from '@/store/useWalletState';

export function StakeView() {
  const [activeTab, setActiveTab] = useState<'stake' | 'unstake'>('stake');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { address: walletAddress, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [inputAmount, setInputAmount] = useState('');
  const [outputAmount, setOutputAmount] = useState('');
  const { isMockConnected, setMockConnected } = useWalletState();

  // 模拟钱包余额数据
  const walletBalance = {
    SOL: 100.95,
    LSOL: 12.45
  };

  // 模拟 SOL 价格数据
  const tokenPrice = {
    SOL: 96.85, // SOL-USDT 价格
  };

  const calculateUsdValue = (amount: string, isLSOL: boolean) => {
    if (!amount || amount === '0.00') return '$0';
    const numValue = parseFloat(amount);
    if (isNaN(numValue)) return '$0';
    
    // 如果是 LSOL，先转换成 SOL
    const solValue = isLSOL ? numValue / 1.030487323 : numValue;
    const usdValue = solValue * tokenPrice.SOL;
    
    // 如果金额大于 1，显示两位小数，否则显示更多位数
    return `$${usdValue >= 1 ? usdValue.toFixed(2) : usdValue.toFixed(6)}`;
  };

  const handleTabChange = (newTab: 'stake' | 'unstake') => {
    if (newTab === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(newTab);
      setInputAmount('');
      setOutputAmount('0.00');
      setIsTransitioning(false);
    }, 150);
  };

  const handleInputChange = (value: string) => {
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setInputAmount(value);
      // 模拟输出金额计算（1 SOL = 1.030487323 LSOL）
      const numValue = parseFloat(value || '0');
      const rate = 1.030487323;
      if (value === '') {
        setOutputAmount('0.00');
      } else {
        setOutputAmount(activeTab === 'stake' 
          ? (numValue * rate).toFixed(8)
          : (numValue / rate).toFixed(8)
        );
      }
    }
  };

  const handleMaxClick = () => {
    const maxAmount = activeTab === 'stake' ? walletBalance.SOL : walletBalance.LSOL;
    handleInputChange(maxAmount.toString());
  };

  // 定义代币数据
  const topToken = activeTab === 'stake' ? {
    label: 'Stake',
    icon: '/stake/assets/tokens/sol.svg',
    symbol: 'SOL',
    balance: walletBalance.SOL
  } : {
    label: 'Unstake',
    icon: '/stake/assets/tokens/lsol.svg',
    symbol: 'LSOL',
    balance: walletBalance.LSOL
  };

  const bottomToken = activeTab === 'stake' ? {
    icon: '/stake/assets/tokens/lsol.svg',
    symbol: 'LSOL',
    balance: walletBalance.LSOL
  } : {
    icon: '/stake/assets/tokens/sol.svg',
    symbol: 'SOL',
    balance: walletBalance.SOL
  };

  const topTokenClasses = `transition-all duration-300 ease-in-out ${
    isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
  }`;

  const bottomTokenClasses = `transition-all duration-300 ease-in-out ${
    isTransitioning ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
  }`;

  // 计算按钮文案和状态
  const getButtonState = () => {
    if (!isMockConnected) {
      return {
        text: 'Connect Wallet',
        disabled: false,
        className: 'bg-[#A8EC8F]'
      };
    }

    if (!inputAmount || parseFloat(inputAmount) === 0) {
      return {
        text: 'Enter an amount',
        disabled: true,
        className: 'bg-[#A8EC8F] opacity-50'
      };
    }

    const inputValue = parseFloat(inputAmount);
    const balance = topToken.balance;

    if (inputValue > balance) {
      return {
        text: 'Insufficient balance',
        disabled: true,
        className: 'bg-[#A8EC8F] opacity-50'
      };
    }

    return {
      text: activeTab === 'stake' ? 'Stake' : 'Unstake',
      disabled: false,
      className: 'bg-[#A8EC8F] hover:opacity-90'
    };
  };

  const buttonState = getButtonState();

  return (
    <div className="w-full max-w-[480px] mx-auto font-power-grotesk">
      {/* 切换滑块 */}
      <div className="bg-[#F7F8F5] rounded-full p-[5px] flex mb-4 relative h-12">
        <div 
          className={`absolute w-[calc(50%-10px)] h-[calc(100%-10px)] bg-white rounded-full transition-transform duration-300 shadow-[0_2px_4px_rgba(0,0,0,0.06)] ${
            activeTab === 'unstake' ? 'translate-x-[calc(100%+10px)]' : 'translate-x-0'
          }`}
        />
        <button
          onClick={() => handleTabChange('stake')}
          className={`flex-1 h-10 rounded-full text-base font-medium z-10 transition-colors relative ${
            activeTab === 'stake'
              ? 'text-[#212121]'
              : 'text-[#929796] hover:text-[#212121]'
          }`}
        >
          Stake
        </button>
        <button
          onClick={() => handleTabChange('unstake')}
          className={`flex-1 h-10 rounded-full text-base font-medium z-10 transition-colors relative ${
            activeTab === 'unstake'
              ? 'text-[#212121]'
              : 'text-[#929796] hover:text-[#212121]'
          }`}
        >
          Unstake
        </button>
      </div>

      {/* 主要内容区域 */}
      <div className="bg-[#F7F8F5] rounded-3xl p-6 h-[266px] flex flex-col justify-between mb-4 overflow-hidden">
        {/* 顶部代币输入区域 */}
        <div className={topTokenClasses}>
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm text-[#929796] font-normal font-power-grotesk">{topToken.label}</div>
            {isMockConnected && (
              <div className="flex items-center gap-[3px]">
                <Image
                  src="/stake/assets/tokens/wallet.svg"
                  alt="Balance"
                  width={18}
                  height={18}
                />
                <span className="text-sm text-[#929796] font-normal font-power-grotesk">{topToken.balance.toFixed(2)} {topToken.symbol}</span>
                <div className="w-[1px] h-[14px] bg-[#ECEDEA] mx-2"></div>
                <span className="text-sm text-[#212121] font-normal cursor-pointer hover:opacity-80 font-power-grotesk" onClick={handleMaxClick}>Max</span>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={topToken.icon}
                alt={topToken.symbol}
                width={32}
                height={32}
              />
              <span className="text-xl text-[#212121] font-power-grotesk">{topToken.symbol}</span>
            </div>
            <div className="text-right">
              <input
                type="text"
                value={inputAmount}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="0.00"
                disabled={!isMockConnected}
                className={`text-[26px] leading-none ${inputAmount ? 'text-[#212121]' : 'text-[#929796]'} font-normal bg-transparent text-right w-[140px] focus:outline-none placeholder-[#929796] font-power-grotesk`}
              />
              <div className="text-sm text-[#929796] mt-1 font-normal font-power-grotesk">
                {calculateUsdValue(inputAmount, topToken.symbol === 'LSOL')}
              </div>
            </div>
          </div>
        </div>

        {/* 分割线和转换图标 */}
        <div className="relative flex items-center">
          {/* 左侧分割线 */}
          <div className="flex-1 h-px bg-[#ECEDEA]" />
          
          {/* 转换图标 */}
          <button 
            onClick={() => handleTabChange(activeTab === 'stake' ? 'unstake' : 'stake')}
            className="mx-[18px] hover:opacity-80 transition-opacity"
          >
            <Image
              src="/stake/assets/tokens/switch-arrow.svg"
              alt="Switch"
              width={56}
              height={32}
            />
          </button>
          
          {/* 右侧分割线 */}
          <div className="flex-1 h-px bg-[#ECEDEA]" />
        </div>

        {/* 底部代币输入区域 */}
        <div className={bottomTokenClasses}>
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm text-[#929796] font-normal font-power-grotesk">Receive</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={bottomToken.icon}
                alt={bottomToken.symbol}
                width={32}
                height={32}
              />
              <span className="text-xl text-[#212121] font-power-grotesk">{bottomToken.symbol}</span>
            </div>
            <div className="text-right">
              <div className={`text-[26px] leading-none ${outputAmount && outputAmount !== '0.00' ? 'text-[#212121]' : 'text-[#929796]'} font-normal font-power-grotesk`}>
                {outputAmount || '0.00'}
              </div>
              <div className="text-sm text-[#929796] mt-1 font-normal font-power-grotesk">
                {calculateUsdValue(outputAmount, bottomToken.symbol === 'LSOL')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 兑换比率 */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-[14px] font-light text-[#636161] font-power-grotesk">Exchange rate</span>
        <span className="text-[14px] font-light text-[#636161] font-power-grotesk">1 SOL = 1.030487323 LSOL</span>
      </div>

      {/* 底部按钮区域 */}
      <div className="w-full">
        {!isMockConnected ? (
          <ConnectKitButton.Custom>
            {({ show }) => (
              <button
                onClick={() => {
                  if (show) show();
                  setMockConnected(true);
                }}
                className={`w-full h-[48px] rounded-full text-base font-medium transition-all text-[#212121] font-power-grotesk ${buttonState.className}`}
              >
                {buttonState.text}
              </button>
            )}
          </ConnectKitButton.Custom>
        ) : (
          <button
            disabled={buttonState.disabled}
            className={`w-full h-[48px] rounded-full text-base font-medium transition-all text-[#212121] font-power-grotesk ${buttonState.className}`}
          >
            {buttonState.text}
          </button>
        )}
      </div>
    </div>
  );
} 