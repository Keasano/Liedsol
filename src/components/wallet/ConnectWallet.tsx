'use client';

import { ConnectKitButton } from 'connectkit';

export function ConnectWallet() {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, address, ensName, chain }) => {
        return (
          <button
            onClick={show}
            className="bg-[#A8EC8F] text-black w-[130px] h-9 flex items-center justify-center rounded-full text-[14px] font-medium hover:opacity-90 transition-opacity"
          >
            {isConnected ? (
              ensName ?? `${address?.slice(0, 6)}...${address?.slice(-4)}`
            ) : (
              'Connect Wallet'
            )}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
} 