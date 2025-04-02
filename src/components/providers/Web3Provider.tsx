'use client';

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { useMemo } from 'react';
import { WalletModalProvider } from '../ui/SolanaWalletModal';

// 默认样式
require('@solana/wallet-adapter-react-ui/styles.css');

export function Web3Provider({ children }: { children: React.ReactNode }) {
  // 可以是 'mainnet-beta', 'testnet', 'devnet', 'localhost' 或者自定义的 RPC endpoint
  const endpoint = useMemo(() => clusterApiUrl('devnet'), []);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
} 