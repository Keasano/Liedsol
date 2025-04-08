import AnimatedContent from '../components/AnimatedContent';

export default function LSOLPage() {
  return (
    <AnimatedContent>
      <div className="flex-1">
        <h1 className="text-[28px] font-bold text-[#212121] mb-8 leading-[100%]">LSOL Token</h1>
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">What is LSOL?</h2>
            <p className="text-sm text-[#636161] leading-[150%]">
              LSOL is LIESOL's liquid staking token that represents staked SOL. Each LSOL token is backed by SOL in the protocol's staking pool and automatically accrues staking rewards.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Token Features</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">1:1 Backing</span> - Each LSOL is backed by at least 1 SOL in the staking pool
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Reward Accrual</span> - Value increases automatically as staking rewards accumulate
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">DeFi Compatible</span> - Can be used in various DeFi protocols
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Using LSOL</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Trading</span> - Trade LSOL on supported DEXs
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Lending</span> - Use as collateral in lending protocols
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Yield Farming</span> - Participate in yield farming opportunities
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Token Economics</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Supply</span> - Dynamically adjusts based on staked SOL
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Value</span> - Increases with staking rewards
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Liquidity</span> - Deep liquidity in major DEX pools
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
} 