import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavItem {
  name: string;
  href: string;
  items?: NavItem[];
}

const navigation: NavItem[] = [
  {
    name: 'Products',
    href: '#',
    items: [
      { name: 'Staking', href: '#' },
      { name: 'Lending', href: '#' },
      { name: 'Trading', href: '#' },
    ],
  },
  {
    name: 'Resources',
    href: '#',
    items: [
      { name: 'Documentation', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Support', href: '#' },
    ],
  },
];

const SubNavigation = ({ items }: { items: NavItem[] }) => {
  return (
    <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
      <div className="py-2" role="menu">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block px-4 py-2 text-[#212121] hover:bg-gray-50"
            role="menuitem"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export const Navigation = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.svg" alt="Liesol" width={24} height={24} />
          <span className="font-bold text-[#212121]">LIESOL</span>
        </Link>

        <div className="flex items-center gap-8">
          <Link href="/" className="text-[#212121] hover:opacity-70 transition-opacity">
            Home
          </Link>
          <Link href="/stake" className="text-[#212121] hover:opacity-70 transition-opacity">
            Stake
          </Link>
          <Link href="/account" className="text-[#212121] hover:opacity-70 transition-opacity">
            My account
          </Link>
          <Link href="/defi" className="text-[#212121] hover:opacity-70 transition-opacity">
            Defi
          </Link>
          <Link href="/docs" className="text-[#212121] hover:opacity-70 transition-opacity">
            Docs
          </Link>
          <button className="bg-[#A8EC8F] text-[#212121] px-6 h-10 rounded-full hover:opacity-90 transition-opacity font-medium text-[14px]">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
}; 