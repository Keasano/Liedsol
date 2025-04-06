'use client';

import { WagmiConfig, createConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { SafeConnector } from 'wagmi/connectors/safe';

// 创建一个静态的 QueryClient 实例
const queryClient = new QueryClient();

if (!process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID) {
  throw new Error('Missing NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID');
}

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID || '', // or infuraId
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
    
    // Required
    appName: "Lied Sol",

    // Optional
    appDescription: "Stake your SOL tokens and earn rewards while maintaining liquidity with Lied Sol.",
    appUrl: "https://liedsol.com", // your app's url
    appIcon: "https://liedsol.com/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)

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
          appName: 'Lied Sol',
          reloadOnDisconnect: false,
          darkMode: false,
          headlessMode: true
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

export function Providers({ children }: { children: React.ReactNode }) {
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
            walletConnectCTA: "modal",
            overlayBlur: 4,
            customTheme: {
              "--ck-overlay-background": "rgba(0, 0, 0, 0.4)",
              "--ck-body-background": "#ffffff",
              "--ck-body-background-secondary": "#F7F8F5",
              "--ck-body-background-tertiary": "#F3F3EE",
              "--ck-connectbutton-background": "#A8EC8F",
              "--ck-connectbutton-hover-background": "#98DC7F",
              "--ck-connectbutton-active-background": "#88CC6F",
              "--ck-connectbutton-color": "#212121",
              "--ck-font-family": "system-ui, sans-serif",
              "--ck-modal-box-shadow": "none",
              "--ck-border-radius": "16px"
            }
          }}
        >
          {children}
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiConfig>
  );
} 