import AnimatedContent from '../components/AnimatedContent';

export default function LiquidStakingPage() {
  return (
    <AnimatedContent>
      <div className="flex-1">
        <h1 className="text-[28px] font-bold text-[#212121] mb-8 leading-[100%]">Liquid Staking</h1>
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Understanding Liquid Staking</h2>
            <p className="text-sm text-[#636161] leading-[150%]">
              Liquid staking is an innovative solution that allows you to stake your SOL while maintaining liquidity through a representative token (LSOL). This approach eliminates the traditional trade-off between earning staking rewards and having access to your assets.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">How Liquid Staking Works</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Deposit SOL</span> - Users deposit SOL into the LIESOL protocol
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Receive LSOL</span> - Get LSOL tokens representing your staked SOL
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Earn Rewards</span> - Your staked SOL automatically earns rewards
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Use LSOL</span> - Utilize LSOL in DeFi while your SOL remains staked
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Benefits of Liquid Staking</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Capital Efficiency</span> - Use your staked assets in DeFi applications
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Flexibility</span> - No lockup periods, unstake whenever you want
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Automatic Rewards</span> - Rewards are automatically reinvested
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Risk Mitigation</span> - Stake is distributed across multiple validators
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">LIESOL's Approach</h2>
            <p className="text-sm text-[#636161] leading-[150%]">
              LIESOL enhances the liquid staking experience by focusing on community-driven validator selection and maintaining high security standards. Our protocol ensures optimal returns while contributing to Solana's decentralization through strategic stake distribution.
            </p>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
} 