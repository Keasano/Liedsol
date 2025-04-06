import Link from 'next/link';
import Image from 'next/image';
import { Web3Layout } from './Web3Layout';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Stake', href: '/stake' },
  { name: 'Docs', href: '/docs' },
];

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Lied Sol" width={32} height={32} priority />
          <span className="text-xl font-medium">Lied Sol</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base text-[#212121] hover:text-[#636161] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Connect Wallet Button */}
        <div className="relative">
          <Web3Layout />
        </div>
      </div>
    </nav>
  );
}; 