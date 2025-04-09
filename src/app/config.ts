import { createConfig, configureChains } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { getDefaultConfig } from "connectkit";

const { chains } = configureChains(
  [mainnet],
  [publicProvider()]
);

export const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'demo',

    // Required
    appName: "LIESOL",
    chains,

    // Optional
    appDescription: "LIESOL - Liquid Staking Solution",
    appUrl: "https://liedsol.com",
    appIcon: "/logo.svg",
  }),
); 