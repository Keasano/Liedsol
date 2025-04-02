'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from './SolanaWalletModal';

export const ConnectButton = () => {
  const { connected, publicKey } = useWallet();
  const { setVisible } = useWalletModal();

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <button
      onClick={() => setVisible(true)}
      className="bg-[#A8EC8F] text-[#212121] px-6 h-10 rounded-full hover:opacity-90 transition-opacity font-medium text-[14px] relative z-10"
      style={{
        WebkitTapHighlightColor: 'transparent',
        fontFamily: 'PowerGrotesk',
      }}
    >
      {connected && publicKey ? truncateAddress(publicKey.toBase58()) : 'Connect Wallet'}
    </button>
  );
}; 