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
      { name: 'Introduction', icon: '/docs/assets/Introduction.svg', href: '/docs/introduction' },
      { name: 'LSOL', icon: '/docs/assets/LSOL.svg', href: '/docs/lsol' },
      { name: 'Fees', icon: '/docs/assets/Fees.svg', href: '/docs/fees' },
    ]
  },
  {
    category: 'Staking',
    items: [
      { name: 'Liquid staking', icon: '/docs/assets/Liquid-staking.svg', href: '/docs/liquid-staking' },
      { name: 'Staking APY', icon: '/docs/assets/Staking-APY.svg', href: '/docs/staking-apy' },
      { name: 'Risks', icon: '/docs/assets/Risks.svg', href: '/docs/risks' },
    ]
  },
  {
    category: 'Support',
    items: [
      { name: 'FAQ', icon: '/docs/assets/FAQ.svg', href: '/docs/faq' },
      { name: 'Contact us', icon: '/docs/assets/Contact-us.svg', href: '/docs/contact' },
      { name: 'Delegation Strategy', icon: '/docs/assets/Delegation-Strategy.svg', href: '/docs/delegation-strategy' },
    ]
  }
];

export default function DocsView({ children }: DocsViewProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOverflow, setSidebarOverflow] = useState<string>('overflow-y-auto');
  const [contentOverflow, setContentOverflow] = useState<string>('overflow-y-auto');

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

  // 检测内容高度并设置滚动条
  useEffect(() => {
    const checkContentHeight = () => {
      // 侧边栏检测
      const sidebarNav = document.querySelector('.docs-sidebar-nav');
      const sidebarContainer = document.querySelector('.docs-sidebar-container');
      if (sidebarNav && sidebarContainer) {
        const sidebarHeight = sidebarNav.scrollHeight;
        const sidebarContainerHeight = (sidebarContainer as HTMLElement).clientHeight;
        const needsScroll = sidebarHeight > sidebarContainerHeight - 172; // 减去底部留白高度172px (原200px减28px)
        
        // 始终保持overflow-y-auto以支持滚动，但根据条件添加/移除一个类来控制内容是否应该滚动
        setSidebarOverflow(needsScroll ? 'overflow-y-auto' : 'overflow-y-auto max-h-fit');
        
        // 动态更新控制台日志，帮助调试
        console.log('Sidebar Heights:', { 
          sidebarHeight, 
          containerHeight: sidebarContainerHeight, 
          needsScroll,
          overflow: needsScroll ? 'overflow-y-auto' : 'overflow-y-auto max-h-fit'
        });
      }

      // 主内容区检测
      const contentArea = document.querySelector('.docs-content-area');
      const contentContainer = document.querySelector('.docs-content-container');
      if (contentArea && contentContainer) {
        const contentHeight = contentArea.scrollHeight;
        const contentContainerHeight = (contentContainer as HTMLElement).clientHeight;
        const needsScroll = contentHeight > contentContainerHeight - 69; // 减去底部留白高度69px (原97px减28px)
        
        setContentOverflow(needsScroll ? 'overflow-y-auto' : 'overflow-y-auto max-h-fit');
        
        // 动态更新控制台日志，帮助调试
        console.log('Content Heights:', { 
          contentHeight, 
          containerHeight: contentContainerHeight, 
          needsScroll,
          overflow: needsScroll ? 'overflow-y-auto' : 'overflow-y-auto max-h-fit' 
        });
      }
    };
    
    // 初始检测可能需要延迟执行，确保DOM已完全渲染
    setTimeout(checkContentHeight, 100);
    
    // 监听窗口大小变化
    window.addEventListener('resize', checkContentHeight);
    
    // 清理函数
    return () => window.removeEventListener('resize', checkContentHeight);
  }, [pathname, children]); // 页面路径或内容变化时重新检测

  return (
    <div className="flex bg-white">
      {/* Left Sidebar */}
      <div className="w-[240px] shrink-0">
        <div className={`docs-sidebar-container fixed w-[240px] h-screen ${sidebarOverflow} scrollbar-hide`}>
          <nav className="docs-sidebar-nav pt-0 pb-[172px]">
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
        <div className={`docs-content-container max-w-[560px] fixed h-[calc(100vh-136px)] top-[136px] ${contentOverflow} scrollbar-hide pr-8`}>
          <div className="docs-content-area pb-[69px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 