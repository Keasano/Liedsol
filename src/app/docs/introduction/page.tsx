'use client';

import AnimatedContent from '../components/AnimatedContent';

export default function IntroductionPage() {
  return (
    <AnimatedContent>
      <div className="flex-1">
        <h1 className="text-[28px] font-bold text-[#212121] mb-8 leading-[100%]">Introduction</h1>
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Welcome to LIESOL</h2>
            <p className="text-sm text-[#636161] leading-[150%]">
              LIESOL is a cutting-edge liquid staking protocol built on the Solana blockchain. We enable users to earn staking rewards while maintaining liquidity and participating in the DeFi ecosystem.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Our Mission</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Accessibility</span> - Making Solana staking accessible to everyone
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Innovation</span> - Pushing the boundaries of DeFi technology
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Security</span> - Maintaining the highest security standards
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Key Features</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Liquid Staking</span> - Stake SOL and receive LSOL tokens
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">DeFi Integration</span> - Use LSOL in various DeFi protocols
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Automated Rewards</span> - Earn rewards without manual claiming
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Getting Started</h2>
            <p className="text-sm text-[#636161] leading-[150%]">
              To begin your journey with LIESOL:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Connect Wallet</span> - Use any Solana-compatible wallet
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Deposit SOL</span> - Choose your staking amount
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Receive LSOL</span> - Start earning rewards immediately
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
} 