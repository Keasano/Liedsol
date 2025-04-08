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
  const [initialWalletState, setInitialWalletState] = useState({
    isMockConnected: false,
    mockAddress: ''
  });

  // 处理组件加载状态
  useEffect(() => {
    try {
      const walletStorage = localStorage.getItem('wallet-storage');
      if (walletStorage) {
        const parsedStorage = JSON.parse(walletStorage);
        setInitialWalletState({
          isMockConnected: parsedStorage.state.isMockConnected || false,
          mockAddress: parsedStorage.state.mockAddress || ''
        });
        if (parsedStorage.state.isMockConnected) {
          setMockConnected(true);
        }
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
    setMounted(true);
  }, [setMockConnected]);

  // 如果组件未加载完成，显示与当前状态匹配的静态按钮
  if (!mounted) {
    return (
      <button
        className={`${
          initialWalletState.isMockConnected 
            ? 'bg-[#F0F0EB]' 
            : 'bg-[#A8EC8F]'
        } text-[#212121] px-4 h-9 flex items-center justify-center rounded-full text-[14px] font-medium hover:opacity-90 transition-opacity font-power-grotesk`}
      >
        {initialWalletState.isMockConnected ? initialWalletState.mockAddress : 'Connect Wallet'}
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
                onClick={show}
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