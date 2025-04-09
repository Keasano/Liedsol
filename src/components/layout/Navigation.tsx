'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ConnectKitButton } from 'connectkit';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Stake', href: '/stake' },
  { name: 'My account', href: '/account' },
  { name: 'Defi', href: '/defi' },
  { name: 'Docs', href: '/docs/introduction' },
];

export function Navigation() {
  const pathname = usePathname();

  // 检查当前路径是否以某个链接开头
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav className="w-full max-w-[880px] rounded-full bg-[#F3F3EE]/50 backdrop-blur-[54px] px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={`relative flex items-center gap-3 ${pathname === '/' ? 'font-bold' : ''}`}>
          <Image 
            src="/icons/liedsolLogo.svg" 
            alt="LIESOL" 
            width={23} 
            height={6} 
            priority
          />
          <span className="text-[#212121] text-[18px] font-bold font-power-grotesk">LIESOL</span>
        </Link>

        {/* Navigation Links */}
        <div className="relative flex items-center gap-8">
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

        {/* Connect Wallet Button */}
        <div className="relative">
          <ConnectKitButton.Custom>
            {({ isConnected, show, address, ensName }) => {
              const displayAddress = ensName || (address ? `${address.slice(0, 6)}...${address.slice(-4)}` : '');
              
              return (
                <button
                  onClick={show}
                  className={`${
                    isConnected ? 'bg-[#F0F0EB]' : 'bg-[#A8EC8F]'
                  } text-[#212121] px-4 h-9 flex items-center justify-center rounded-full text-[14px] font-mono hover:opacity-90 transition-opacity font-power-grotesk`}
                >
                  {isConnected ? displayAddress : 'Connect Wallet'}
                </button>
              );
            }}
          </ConnectKitButton.Custom>
        </div>
      </nav>
    </div>
  );
} 