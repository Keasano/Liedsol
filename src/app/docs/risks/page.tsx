export default function RisksPage() {
  return (
    <div className="flex-1">
      <h1 className="text-[28px] font-bold text-[#212121] mb-8 leading-[100%]">Risks</h1>
      <div className="space-y-8">
        <div className="space-y-3">
          <h2 className="text-base font-medium text-[#212121] leading-[150%]">Smart Contract Risks</h2>
          <p className="text-sm text-[#636161] leading-[150%]">
            While our smart contracts undergo rigorous auditing and testing, all blockchain protocols carry inherent risks. We maintain transparency about potential vulnerabilities and implement multiple security layers to protect user assets.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-base font-medium text-[#212121] leading-[150%]">Validator Risks</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li className="text-sm text-[#636161] leading-[150%]">
              <span className="font-medium text-[#212121]">Slashing Risk</span> - Potential penalties if validators misbehave
            </li>
            <li className="text-sm text-[#636161] leading-[150%]">
              <span className="font-medium text-[#212121]">Downtime Risk</span> - Temporary interruption of staking rewards
            </li>
            <li className="text-sm text-[#636161] leading-[150%]">
              <span className="font-medium text-[#212121]">Performance Risk</span> - Variations in validator performance affecting returns
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-base font-medium text-[#212121] leading-[150%]">Market Risks</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li className="text-sm text-[#636161] leading-[150%]">
              <span className="font-medium text-[#212121]">Price Volatility</span> - SOL and LSOL price fluctuations
            </li>
            <li className="text-sm text-[#636161] leading-[150%]">
              <span className="font-medium text-[#212121]">Liquidity Risk</span> - Potential difficulty in converting LSOL to SOL
            </li>
            <li className="text-sm text-[#636161] leading-[150%]">
              <span className="font-medium text-[#212121]">DeFi Integration Risk</span> - Exposure to connected protocol risks
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-base font-medium text-[#212121] leading-[150%]">Risk Mitigation</h2>
          <p className="text-sm text-[#636161] leading-[150%]">
            LIESOL implements comprehensive risk management strategies including diversified validator selection, regular security audits, and emergency response procedures. We maintain significant insurance coverage and continuously monitor system performance to ensure asset safety.
          </p>
        </div>
      </div>
    </div>
  );
} 