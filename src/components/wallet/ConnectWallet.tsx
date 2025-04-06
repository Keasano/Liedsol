'use client';

import { ConnectKitButton } from 'connectkit';
import { useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useDisconnect } from 'wagmi';

interface Props {
  className?: string;
}

// 模拟已连接的钱包地址
const MOCK_ADDRESS = "0xDAKL1234567890ABCDEF1234567890ABCDEFB6fn";

export function ConnectWallet({ className }: Props) {
  const [mounted, setMounted] = useState(false);
  const { disconnect } = useDisconnect();

  useEffect(() => {
    setMounted(true);
  }, []);

  // 默认显示静态按钮
  if (!mounted) {
    return (
      <button
        className={className || "bg-[#A8EC8F] text-black w-[130px] h-9 flex items-center justify-center rounded-full text-[14px] font-medium"}
      >
        Connect Wallet
      </button>
    );
  }

  // 客户端渲染后显示真实的钱包连接按钮
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, address, ensName }) => {
        // 使用模拟地址
        const mockConnected = true;
        const displayAddress = mockConnected ? 
          `${MOCK_ADDRESS.slice(0, 4)}....${MOCK_ADDRESS.slice(-4)}` : 
          (ensName || (address ? `${address.slice(0, 6)}...${address.slice(-4)}` : ''));
        
        if (!mockConnected) {
          return (
            <button
              onClick={show}
              className={className || "bg-[#A8EC8F] text-black w-[130px] h-9 flex items-center justify-center rounded-full text-[14px] font-medium hover:opacity-90 transition-opacity"}
            >
              Connect Wallet
            </button>
          );
        }

        return (
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button
              className={className || "bg-[#F0F0EB] text-[#212121] px-4 h-9 flex items-center justify-center rounded-full text-[14px] font-mono hover:opacity-90 transition-opacity"}
            >
              {displayAddress}
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => disconnect()}
                        className={`${
                          active ? 'bg-[#F7F8F5]' : ''
                        } group flex w-full items-center rounded-lg px-2 py-2 text-sm text-[#212121] font-medium`}
                      >
                        Disconnect
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        );
      }}
    </ConnectKitButton.Custom>
  );
} 