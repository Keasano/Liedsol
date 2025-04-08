'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface DocsViewProps {
  children: React.ReactNode;
}

// 导航项配置
const navItems = [
  { 
    category: 'Overview',
    items: [
      { name: 'Introduction', icon: '/docs/assets/introduction.svg', href: '/docs/introduction' },
      { name: 'LSOL', icon: '/docs/assets/lsol.svg', href: '/docs/lsol' },
      { name: 'Fees', icon: '/docs/assets/fees.svg', href: '/docs/fees' },
    ]
  },
  {
    category: 'Staking',
    items: [
      { name: 'Liquid staking', icon: '/docs/assets/liquid-staking.svg', href: '/docs/liquid-staking' },
      { name: 'Staking APY', icon: '/docs/assets/staking-apy.svg', href: '/docs/staking-apy' },
      { name: 'Risks', icon: '/docs/assets/risks.svg', href: '/docs/risks' },
    ]
  },
  {
    category: 'Support',
    items: [
      { name: 'FAQ', icon: '/docs/assets/faq.svg', href: '/docs/faq' },
      { name: 'Contact us', icon: '/docs/assets/contact-us.svg', href: '/docs/contact' },
      { name: 'Delegation Strategy', icon: '/docs/assets/delegation-strategy.svg', href: '/docs/delegation-strategy' },
    ]
  }
];

export default function DocsView({ children }: DocsViewProps) {
  const pathname = usePathname();
  const router = useRouter();

  // 预加载所有文档页面
  useEffect(() => {
    navItems.forEach(section => {
      section.items.forEach(item => {
        router.prefetch(item.href);
      });
    });
  }, [router]);

  // 如果访问 /docs，重定向到 /docs/introduction
  useEffect(() => {
    if (pathname === '/docs') {
      router.replace('/docs/introduction');
    }
  }, [pathname, router]);

  return (
    <div className="flex bg-white">
      {/* Left Sidebar */}
      <div className="w-[240px] shrink-0">
        <div className="fixed w-[240px]">
          <nav>
            {navItems.map((section) => (
              <div key={section.category} className="mb-6">
                <h3 className="px-4 mb-2 text-[14px] text-[#212121]">{section.category}</h3>
                <ul>
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`group flex items-center px-4 py-2 ${
                          pathname === item.href 
                            ? 'text-[#212121] font-medium text-[14px]' 
                            : 'text-[#929796] text-[14px] hover:text-[#212121]'
                        }`}
                      >
                        <Image 
                          src={item.icon} 
                          alt={item.name} 
                          width={20} 
                          height={20} 
                          className="transform transition-transform duration-300 ease-out group-hover:scale-105" 
                        />
                        <span 
                          className={`
                            ml-2 
                            transition-all 
                            duration-300 
                            ease-out
                            ${pathname !== item.href && 'hover:text-shadow-[0_0_0.5px_#212121,0_0_0.5px_#212121]'}
                          `}
                          style={{
                            WebkitFontSmoothing: 'antialiased',
                            MozOsxFontSmoothing: 'grayscale'
                          }}
                        >
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0 pl-8">
        <div className="max-w-[560px]">
          {children}
        </div>
      </div>
    </div>
  );
} 