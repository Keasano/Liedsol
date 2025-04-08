import { createConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { getDefaultConfig } from "connectkit";
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

if (!process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID) {
  throw new Error('Missing NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID');
}

export const config = createConfig(
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