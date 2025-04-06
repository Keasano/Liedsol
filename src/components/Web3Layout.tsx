'use client';

import { useState, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ConnectKitButton } from 'connectkit';
import { useAccount, useDisconnect } from 'wagmi';
import { useWalletState } from '@/store/useWalletState';

interface Props {
  className?: string;
}

const ErrorFallback = () => {
  return (
    <button
      className="bg-[#A8EC8F] text-[#212121] px-4 h-9 flex items-center justify-center rounded-full text-[14px] font-mono hover:opacity-90 transition-opacity font-power-grotesk"
    >
      Connect Wallet
    </button>
  );
};

export function Web3Layout({ className = '' }: { className?: string }) {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isMockConnected, mockAddress, setMockConnected } = useWalletState();
  const [mounted, setMounted] = useState(false);

  // 处理组件加载状态
  useEffect(() => {
    // 从 localStorage 直接获取连接状态
    const walletStorage = localStorage.getItem('wallet-storage');
    const initialState = walletStorage ? JSON.parse(walletStorage).state.isMockConnected : false;
    
    // 如果已经连接，直接设置状态
    if (initialState) {
      setMockConnected(true);
    }
    
    setMounted(true);
  }, [setMockConnected]);

  // 如果组件未加载完成，显示与当前状态匹配的静态按钮
  if (!mounted) {
    const walletStorage = localStorage.getItem('wallet-storage');
    const initialState = walletStorage ? JSON.parse(walletStorage).state.isMockConnected : false;
    const initialAddress = walletStorage ? JSON.parse(walletStorage).state.mockAddress : '';

    return (
      <button
        className={`${
          initialState 
            ? 'bg-[#F0F0EB]' 
            : 'bg-[#A8EC8F]'
        } text-[#212121] px-4 h-9 flex items-center justify-center rounded-full text-[14px] font-medium hover:opacity-90 transition-opacity font-power-grotesk`}
      >
        {initialState ? initialAddress : 'Connect Wallet'}
      </button>
    );
  }

  const handleDisconnect = () => {
    setIsDropdownOpen(false);
    setMockConnected(false);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="relative">
        {isMockConnected ? (
          <>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-[#F0F0EB] text-[#212121] px-4 h-9 flex items-center justify-center rounded-full text-[14px] font-medium hover:opacity-90 transition-opacity font-power-grotesk"
            >
              {mockAddress}
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg p-1 z-50">
                <button
                  onClick={() => {
                    handleDisconnect();
                    setIsDropdownOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left text-sm text-[#212121] hover:bg-[#F7F8F5] rounded-lg font-power-grotesk"
                >
                  Disconnect
                </button>
              </div>
            )}
          </>
        ) : (
          <ConnectKitButton.Custom>
            {({ show }) => (
              <button 
                onClick={() => {
                  setMockConnected(true);
                }}
                className="bg-[#A8EC8F] text-[#212121] px-4 h-9 flex items-center justify-center rounded-full text-[14px] font-medium hover:opacity-90 transition-opacity font-power-grotesk"
              >
                Connect Wallet
              </button>
            )}
          </ConnectKitButton.Custom>
        )}
      </div>
    </ErrorBoundary>
  );
} 