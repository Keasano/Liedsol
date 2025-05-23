'use client';

import Image from 'next/image';
import AccountView from './components/AccountView';

export default function AccountPage() {
  return (
    <main className="min-h-screen">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        {/* 左侧装饰 */}
        <div className="fixed left-0 top-0 -z-10">
          <Image
            src="/stake/assets/stake-left-decoration.svg"
            alt=""
            width={381}
            height={637}
            priority
          />
        </div>

        {/* 右侧装饰 */}
        <div className="fixed right-0 top-0 -z-10">
          <Image
            src="/stake/assets/stake-right-decoration.svg"
            alt=""
            width={381}
            height={637}
            priority
          />
        </div>

        {/* 内容区域 */}
        <div className="pt-[120px]">
          <AccountView />
        </div>
      </div>
    </main>
  );
} 