import AnimatedContent from '../components/AnimatedContent';

export default function DelegationStrategyPage() {
  return (
    <AnimatedContent>
      <div className="flex-1">
        <h1 className="text-[28px] font-bold text-[#212121] mb-8 leading-[100%]">Delegation Strategy</h1>
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Strategy Overview</h2>
            <p className="text-sm text-[#636161] leading-[150%]">
              LIESOL's delegation strategy is designed to maximize returns while maintaining network security and decentralization. We carefully select and monitor validators based on multiple criteria to ensure optimal performance and reliability.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Validator Selection Criteria</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Performance History</span>
                <p className="mt-1">Validators must maintain 99%+ uptime and demonstrate consistent performance over time.</p>
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Technical Infrastructure</span>
                <p className="mt-1">High-quality hardware, robust security measures, and reliable network connectivity.</p>
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Geographic Distribution</span>
                <p className="mt-1">Validators spread across different regions to enhance network resilience.</p>
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Commission Rates</span>
                <p className="mt-1">Competitive and stable commission structures that align with market standards.</p>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Risk Management</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Stake Distribution</span>
                <p className="mt-1">No single validator receives more than 5% of total stake to minimize concentration risk.</p>
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Performance Monitoring</span>
                <p className="mt-1">Continuous monitoring of validator performance with automated alerts for any issues.</p>
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Quick Response</span>
                <p className="mt-1">Rapid stake reallocation if performance drops below acceptable thresholds.</p>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-medium text-[#212121] leading-[150%]">Decentralization Focus</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Validator Diversity</span>
                <p className="mt-1">Supporting both established and emerging validators to promote network decentralization.</p>
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Geographic Balance</span>
                <p className="mt-1">Maintaining stake distribution across different regions and jurisdictions.</p>
              </li>
              <li className="text-sm text-[#636161] leading-[150%]">
                <span className="font-medium text-[#212121]">Infrastructure Diversity</span>
                <p className="mt-1">Supporting validators using different hosting providers and infrastructure setups.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
} 