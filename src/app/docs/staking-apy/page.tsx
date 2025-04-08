import AnimatedContent from '../components/AnimatedContent';

export default function StakingAPYPage() {
  return (
    <AnimatedContent>
      <div className="flex-1">
        <h1 className="text-[28px] font-bold text-[#212121] mb-8 leading-[100%]">Staking APY</h1>
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Current APY Overview</h2>
            <p className="text-sm text-[#636161] leading-[150%]">
              LIESOL offers competitive staking returns through our optimized validator selection and DeFi integrations. Our current APY consists of base staking rewards plus additional yields from DeFi activities.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">APY Breakdown</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Base Staking APY</span> - 6.8% from Solana network validation
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">DeFi Bonus</span> - Up to 3.2% additional yield from DeFi activities
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Compounding Effect</span> - Automatic reinvestment of rewards
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">APY Calculation</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Real-time Updates</span> - APY is calculated and updated every epoch
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Performance Based</span> - Rates vary based on validator performance
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Market Dependent</span> - DeFi yields fluctuate with market conditions
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Maximizing Returns</h2>
            <p className="text-sm text-[#636161] leading-[150%]">
              To maximize your staking returns, LIESOL automatically:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Optimizes Validator Selection</span> - Choosing best performing validators
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Manages Risk</span> - Balancing returns with security
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Compounds Rewards</span> - Reinvesting returns for optimal growth
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
} 