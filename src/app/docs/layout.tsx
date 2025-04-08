'use client';

import Image from 'next/image';
import DocsView from './components/DocsView';

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <main className="min-h-screen">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        {/* 左侧装饰 */}
        <div className="fixed left-0 bottom-0 -z-10 pointer-events-none select-none">
          <Image
            src="/docs/assets/docs-left-decoration.svg"
            alt=""
            width={272}
            height={452}
            priority
          />
        </div>

        {/* 右侧装饰 */}
        <div className="fixed right-0 bottom-0 -z-10 pointer-events-none select-none">
          <Image
            src="/docs/assets/docs-right-decoration.svg"
            alt=""
            width={272}
            height={452}
            priority
          />
        </div>

        <DocsView>{children}</DocsView>
      </div>
    </main>
  );
} 