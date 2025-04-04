'use client';

import { createConfig, WagmiConfig } from 'wagmi';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { mainnet } from 'wagmi/chains';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { SafeConnector } from 'wagmi/connectors/safe';

// 创建一个静态的 QueryClient 实例
const queryClient = new QueryClient();

if (!process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID) {
  throw new Error('Missing NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID');
}

// 使用 ConnectKit 的默认配置
const config = createConfig(
  getDefaultConfig({
    // 必需的应用信息
    appName: 'LIESOL DApp',
    // 你的 WalletConnect Project ID
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
    // 支持的链
    chains: [mainnet],
    // 添加所有连接器
    connectors: [
      new MetaMaskConnector({ 
        chains: [mainnet],
        options: {
          shimDisconnect: true,
          UNSTABLE_shimOnConnectSelectAccount: true,
        }
      }),
      new CoinbaseWalletConnector({ 
        chains: [mainnet],
        options: {
          appName: 'LIESOL DApp',
          headlessMode: true,
        }
      }),
      new SafeConnector({
        chains: [mainnet],
        options: {
          allowedDomains: [/gnosis-safe.io$/, /app.safe.global$/],
          debug: false,
        },
      }),
      new WalletConnectConnector({
        chains: [mainnet],
        options: {
          projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
          showQrModal: true,
          qrModalOptions: {
            themeMode: "light"
          }
        },
      })
    ]
  }),
);

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider
          options={{
            initialChainId: 1,
            enforceSupportedChains: false,
            hideBalance: false,
            hideTooltips: false,
            hideQuestionMarkCTA: true,
            walletConnectCTA: "modal"
          }}
        >
          {children}
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiConfig>
  );
} 