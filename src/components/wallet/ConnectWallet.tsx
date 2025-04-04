'use client';

import { ConnectKitButton } from 'connectkit';
import { useEffect, useState } from 'react';

export function ConnectWallet() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 默认显示静态按钮
  if (!mounted) {
    return (
      <button
        className="bg-[#A8EC8F] text-black w-[130px] h-9 flex items-center justify-center rounded-full text-[14px] font-medium"
      >
        Connect Wallet
      </button>
    );
  }

  // 客户端渲染后显示真实的钱包连接按钮
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, address, ensName }) => {
        const displayAddress = ensName || (address ? `${address.slice(0, 6)}...${address.slice(-4)}` : '');
        
        const handleClick = (e: React.MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();
          if (typeof show === 'function') {
            show();
          }
        };
        
        return (
          <button
            onClick={handleClick}
            className="bg-[#A8EC8F] text-black w-[130px] h-9 flex items-center justify-center rounded-full text-[14px] font-medium"
          >
            {isConnected ? displayAddress : 'Connect Wallet'}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
} 