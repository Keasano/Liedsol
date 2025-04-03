'use client';

import { Web3Provider } from '../providers/Web3Provider';
import { ConnectWallet } from '../wallet/ConnectWallet';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { StaticButton } from '../wallet/StaticButton';

// 动态导入 Web3 相关组件
const Web3Components = dynamic(
  () => import('./Web3Components').then((mod) => mod.Web3Components),
  {
    ssr: false,
    loading: () => <StaticButton />
  }
);

const ErrorFallback = () => {
  return (
    <button
      className="bg-[#A8EC8F] text-black w-[130px] h-9 flex items-center justify-center rounded-full text-[14px] font-medium"
    >
      Connect Wallet
    </button>
  );
}

export function Web3Layout() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<StaticButton />}>
        <Web3Components />
      </Suspense>
    </ErrorBoundary>
  );
} 