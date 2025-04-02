'use client';

import { Dialog } from '@headlessui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { createContext, useContext, useState, ReactNode } from 'react';

// 创建 Context
interface WalletModalContextType {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const WalletModalContext = createContext<WalletModalContextType | undefined>(undefined);

// Provider 组件
export function WalletModalProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);
  return (
    <WalletModalContext.Provider value={{ visible, setVisible }}>
      {children}
      <SolanaWalletModal />
    </WalletModalContext.Provider>
  );
}

// Hook
export function useWalletModal() {
  const context = useContext(WalletModalContext);
  if (context === undefined) {
    throw new Error('useWalletModal must be used within a WalletModalProvider');
  }
  return context;
}

// Modal 组件
function SolanaWalletModal() {
  const { visible, setVisible } = useWalletModal();
  const { select, wallets } = useWallet();

  return (
    <Dialog
      open={visible}
      onClose={() => setVisible(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-[#000000]/40" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-[360px] rounded-[20px] bg-white p-6">
          <div className="flex items-center justify-between mb-6">
            <Dialog.Title className="text-[18px] font-semibold text-[#373737]">
              Connect Wallet
            </Dialog.Title>
            <button
              onClick={() => setVisible(false)}
              className="p-1 hover:opacity-70"
            >
              <XMarkIcon className="w-5 h-5 text-[#373737]" />
            </button>
          </div>

          <div className="space-y-2">
            {wallets.map((wallet) => (
              <button
                key={wallet.adapter.name}
                onClick={() => {
                  select(wallet.adapter.name);
                  setVisible(false);
                }}
                className="w-full flex items-center justify-between p-4 rounded-[16px] bg-[#F6F7F9] hover:bg-[#F0F2F5] text-left"
              >
                <span className="text-[16px] text-[#373737] font-medium">
                  {wallet.adapter.name}
                </span>
                <img 
                  src={wallet.adapter.icon} 
                  alt={wallet.adapter.name} 
                  className="w-8 h-8"
                />
              </button>
            ))}
          </div>

          <div className="mt-4 text-center">
            <button
              onClick={() => window.open('https://phantom.app/', '_blank')}
              className="text-[14px] text-[#888888] hover:text-[#666666]"
            >
              I don&apos;t have a wallet
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
} 