import AnimatedContent from '../components/AnimatedContent';

export default function FeesPage() {
  return (
    <AnimatedContent>
      <div className="flex-1">
        <h1 className="text-[28px] font-bold text-[#212121] mb-8 leading-[100%]">Fees</h1>
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Fee Structure</h2>
            <p className="text-sm text-[#636161] leading-[150%]">
              LIESOL maintains a transparent and competitive fee structure designed to sustain protocol development while maximizing returns for users.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Staking Fees</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Protocol Fee</span> - 2% of staking rewards
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Validator Commission</span> - Varies by validator (5-10%)
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Network Fees</span> - Standard Solana transaction fees
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Unstaking Options</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Instant Unstake</span> - 0.3% fee for immediate liquidity
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Regular Unstake</span> - No fee (2-3 epoch waiting period)
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Fee Usage</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Protocol Development</span> - Continuous improvement of the platform
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Security</span> - Regular audits and security measures
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Community Growth</span> - Marketing and ecosystem development
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
} 