'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

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
    // 预加载所有页面
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
    <div className="flex gap-8 mt-[136px] font-power-grotesk">
      {/* 左侧导航栏 */}
      <nav className="w-[240px] flex-shrink-0">
        <div className="sticky top-[80px] space-y-8">
          {navItems.map((section) => (
            <div key={section.category}>
              <h3 className="text-sm text-[#212121] mb-2">{section.category}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      prefetch={true}
                      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-150 ${
                        pathname === item.href
                          ? 'text-[#212121] font-medium'
                          : 'text-[#929796] hover:opacity-80'
                      }`}
                    >
                      <Image 
                        src={item.icon} 
                        alt="" 
                        width={20} 
                        height={20} 
                        className="opacity-60"
                        priority={pathname === item.href} // 当前页面的图标优先加载
                      />
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>

      {/* 右侧内容区域 */}
      <div className="flex-1">
        <div className="prose max-w-none
          prose-h1:text-[28px] prose-h1:font-bold prose-h1:text-[#212121] prose-h1:mb-8
          prose-h2:text-base prose-h2:font-medium prose-h2:text-[#212121] prose-h2:mb-3 prose-h2:leading-[150%]
          prose-p:text-sm prose-p:font-normal prose-p:text-[#636161] prose-p:mb-8 prose-p:leading-[150%]
          prose-ul:mt-3 prose-ul:mb-8
          prose-li:mb-3 prose-li:text-sm prose-li:text-[#636161] prose-li:leading-[150%]
          last:prose-li:mb-0 last:prose-p:mb-0 last:prose-ul:mb-0">
          {children}
        </div>
      </div>
    </div>
  );
} 