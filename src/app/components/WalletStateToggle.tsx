'use client';

import { useWalletState } from '@/store/useWalletState';

export default function WalletStateToggle() {
  const { isMockConnected, setMockConnected } = useWalletState();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setMockConnected(!isMockConnected)}
        className="bg-[#A8EC8F] text-[#212121] px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
      >
        {isMockConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
      </button>
    </div>
  );
} 