'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ConnectKitButton, Avatar } from 'connectkit';
import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';
import { useWalletState } from '@/store/useWalletState';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Stake', href: '/stake' },
  { name: 'My account', href: '/account' },
  { name: 'Defi', href: '/defi' },
  { name: 'Docs', href: '/docs/introduction' },
];

export function Navigation() {
  const pathname = usePathname();
  const { isConnected } = useAccount();
  const { setMockConnected } = useWalletState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sync wagmi connection state with Zustand mock state (both connect and disconnect)
  useEffect(() => {
    setMockConnected(isConnected);
  }, [isConnected, setMockConnected]);

  // 检查当前路径是否以某个链接开头
  const isActiveLink = (href: string) => {
    if (href === '/' ) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  // 关闭移动菜单
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pt-3 sm:pt-4">
      <nav className="w-full max-w-[880px] rounded-full bg-[#F3F3EE]/50 backdrop-blur-[54px] px-4 sm:px-6 h-12 sm:h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative flex items-center gap-2 sm:gap-3">
          <Image 
            src="/icons/liedsolLogo.svg" 
            alt="LIESOL" 
            width={20} 
            height={5} 
            priority
            className="w-[18px] sm:w-[23px]"
          />
          <span className="text-[#212121] text-[16px] sm:text-[18px] font-bold font-power-grotesk">LIESOL</span>
        </Link>

        {/* 移动端区域 - 右侧 */}
        <div className="md:hidden flex items-center">
          {/* 移动端 Connect 按钮 - 文字版 */}
          <ConnectKitButton.Custom>
            {({ show, isConnected, address, ensName, truncatedAddress }) => (
              <button
                onClick={show}
                className={`${
                  isConnected ? 'bg-[#F0F0EB]' : 'bg-[#A8EC8F]'
                } text-[#212121] text-sm px-4 h-8 mr-8 flex items-center justify-center rounded-full hover:opacity-90 transition-opacity font-medium`}
              >
                {isConnected ? (truncatedAddress || ensName) : 'Connect'}
              </button>
            )}
          </ConnectKitButton.Custom>

          {/* 汉堡菜单按钮 */}
          <button 
            className="flex items-center justify-center w-8 h-8" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              width="18" 
              height="14" 
              viewBox="0 0 18 14" 
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M1 1H17M1 7H17M1 13H17" 
                stroke="#212121" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* 导航链接 (桌面端) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navigationLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-[14px] text-[#212121] transition-all hover:opacity-50 font-power-grotesk ${
                isActiveLink(item.href) ? 'font-bold' : 'font-normal'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Connect Wallet Button (桌面端) */}
        <div className="hidden md:block relative">
          <ConnectKitButton.Custom>
            {({ isConnected, show, address, ensName, chain, truncatedAddress }) => {
              return (
                <button
                  onClick={show}
                  className={`${
                    isConnected ? 'bg-[#F0F0EB]' : 'bg-[#A8EC8F]'
                  } text-[#212121] px-4 py-2 flex items-center justify-center gap-2 rounded-full text-[14px] font-normal hover:opacity-90 transition-opacity font-power-grotesk`}
                >
                  {isConnected ? (
                    <>
                      <div className="w-5 h-5 rounded-full overflow-hidden">
                        <Avatar address={address} size={20} />
                      </div>
                      {truncatedAddress || ensName}
                    </>
                  ) : (
                    'Connect Wallet'
                  )}
                </button>
              );
            }}
          </ConnectKitButton.Custom>
        </div>
      </nav>

      {/* 移动端菜单弹出层 */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20">
          <div className="flex flex-col items-center gap-6 p-6">
            {navigationLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                className={`text-[18px] text-[#212121] transition-all hover:opacity-50 font-power-grotesk ${
                  isActiveLink(item.href) ? 'font-bold' : 'font-normal'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button 
              className="mt-6 text-[16px] text-[#636161]"
              onClick={closeMobileMenu}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 