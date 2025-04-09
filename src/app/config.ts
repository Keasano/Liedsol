import { getDefaultConfig } from "connectkit";
import { configureChains, createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

// 在开发环境下使用默认的项目 ID
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 
  (process.env.NODE_ENV === 'development' ? 'demo' : '');

if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID');
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const connectors = [
  new MetaMaskConnector({ chains }),
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
      projectId,
      showQrModal: true,
      qrModalOptions: {
        themeMode: "light"
      }
    },
  })
];

export const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID || '', // or infuraId
    walletConnectProjectId: projectId,
    
    // Required
    appName: "Lied Sol",
    // 支持的链
    chains,
    // 连接器
    connectors,
    // 公共客户端
    publicClient,
    // WebSocket 客户端
    webSocketPublicClient,

    // Optional
    appDescription: "Stake your SOL tokens and earn rewards while maintaining liquidity with Lied Sol.",
    appUrl: "https://liedsol.com", // your app's url
    appIcon: "https://liedsol.com/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
); 