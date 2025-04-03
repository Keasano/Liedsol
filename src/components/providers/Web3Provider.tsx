'use client';

import { createConfig, WagmiConfig } from 'wagmi';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { mainnet } from 'wagmi/chains';

// 创建一个静态的 QueryClient 实例
const queryClient = new QueryClient();

// 使用 ConnectKit 的默认配置
const config = createConfig(
  getDefaultConfig({
    // 必需的应用信息
    appName: 'LIESOL DApp',
    // 你的 WalletConnect Project ID
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '',
    // 支持的链
    chains: [mainnet],
  }),
);

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>
          {children}
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiConfig>
  );
} 