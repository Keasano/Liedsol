'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Web3Layout } from './Web3Layout';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Stake', href: '/stake' },
  { name: 'My account', href: '/account' },
  { name: 'Defi', href: '/defi' },
  { name: 'Docs', href: '/docs' },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[880px]">
      <div className="relative mx-4 rounded-full bg-[#F3F3EE] bg-opacity-50 backdrop-blur-[54px] px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={`relative flex items-center gap-3 ${pathname === '/' ? 'font-bold' : ''}`}>
          <Image 
            src="/icons/liedsolLogo.svg" 
            alt="LIESOL" 
            width={23} 
            height={6} 
            priority
          />
          <span className="text-[#212121] text-[18px] font-bold">LIESOL</span>
        </Link>

        {/* Navigation Links */}
        <div className="relative flex items-center gap-8">
          {navigationLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-[14px] text-[#212121] transition-all hover:opacity-50 ${
                pathname === item.href ? 'font-bold' : 'font-normal'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Connect Wallet Button */}
        <div className="relative">
          <button className="bg-[#A8EC8F] text-[#212121] px-6 h-10 rounded-full hover:opacity-90 transition-opacity font-medium text-[14px]">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
}; 