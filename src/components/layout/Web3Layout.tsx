'use client';

import { Web3Provider } from '../providers/Web3Provider';
import { ConnectWallet } from '../wallet/ConnectWallet';
import { ErrorBoundary } from 'react-error-boundary';

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
    <Web3Provider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ConnectWallet />
      </ErrorBoundary>
    </Web3Provider>
  );
} 