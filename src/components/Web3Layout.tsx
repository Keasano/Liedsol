'use client';

import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ConnectKitButton } from 'connectkit';
import { useAccount, useDisconnect } from 'wagmi';
import { useWalletState } from '@/store/useWalletState';

interface Props {
  className?: string;
}

function ErrorFallback() {
  return (
    <button className="bg-[#A8EC8F] text-black w-[130px] h-9 flex items-center justify-center rounded-full text-[14px] font-medium">
      Connect Wallet
    </button>
  );
}

export function Web3Layout({ className = '' }: { className?: string }) {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isMockConnected, setMockConnected } = useWalletState();

  // 格式化钱包地址
  const formatAddress = (address: string) => {
    if (!address) return '';
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  const handleDisconnect = () => {
    disconnect();
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
              className="bg-[#F0F0EB] text-[#212121] px-4 h-9 flex items-center justify-center rounded-full text-[14px] font-mono hover:opacity-90 transition-opacity font-power-grotesk"
            >
              0xDA...B6fn
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg p-1 z-50">
                <button
                  onClick={handleDisconnect}
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
                  if (show) show();
                  setMockConnected(true);
                }} 
                className="bg-[#A8EC8F] text-[#212121] px-4 h-9 flex items-center justify-center rounded-full text-[14px] font-mono hover:opacity-90 transition-opacity font-power-grotesk"
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