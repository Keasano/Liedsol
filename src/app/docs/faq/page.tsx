import AnimatedContent from '../components/AnimatedContent';

export default function FAQPage() {
  return (
    <AnimatedContent>
      <div className="flex-1">
        <h1 className="text-[28px] font-bold text-[#212121] mb-8 leading-[100%]">Frequently Asked Questions</h1>
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">General Questions</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">What is LIESOL?</span>
                <p className="mt-1">LIESOL is a liquid staking protocol for Solana that allows users to earn staking rewards while maintaining liquidity through LSOL tokens.</p>
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">How do I start staking?</span>
                <p className="mt-1">Simply connect your wallet, deposit SOL, and receive LSOL tokens. Your staking rewards will start accumulating automatically.</p>
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">What are the minimum and maximum stake amounts?</span>
                <p className="mt-1">The minimum stake amount is 0.1 SOL. There is no maximum limit for staking.</p>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Rewards & APY</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">How are rewards calculated?</span>
                <p className="mt-1">Rewards are calculated based on your stake amount, validator performance, and additional DeFi yields. They compound automatically.</p>
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">When do I receive rewards?</span>
                <p className="mt-1">Rewards are reflected in the increasing value of your LSOL tokens relative to SOL. This happens continuously.</p>
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Why does APY fluctuate?</span>
                <p className="mt-1">APY varies based on network conditions, validator performance, and DeFi market opportunities.</p>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Security & Risks</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">How secure is LIESOL?</span>
                <p className="mt-1">Our smart contracts are regularly audited, and we implement multiple security layers to protect user assets.</p>
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">What happens if a validator misbehaves?</span>
                <p className="mt-1">Our risk management system quickly detects and responds to validator issues, redistributing stake as needed.</p>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Using LSOL</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Where can I use LSOL?</span>
                <p className="mt-1">LSOL can be used in various DeFi protocols including Orca, Kamino Finance, and other integrated platforms.</p>
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">How do I unstake?</span>
                <p className="mt-1">You can choose between instant unstaking with a small fee or standard unstaking which takes 2-3 epochs but has no fee.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
} 