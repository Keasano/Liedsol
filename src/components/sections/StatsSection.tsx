'use client';

export const StatsSection = () => {
  return (
    <section className="py-16 bg-[#151615]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-16">
          <div>
            <img src="/icons/chart.svg" alt="High APY" className="w-16 h-16 mb-4" />
            <h3 className="text-white text-2xl font-medium mb-4">High APY</h3>
            <p className="text-[#929796] text-[16px] font-light">8.8%</p>
            <p className="text-[#929796] text-[16px] font-light">Earn an 8.8% APY to quickly grow your investments in the DeFi ecosystem.</p>
          </div>

          <div>
            <img src="/icons/coin.svg" alt="Low fee" className="w-16 h-16 mb-4" />
            <h3 className="text-white text-2xl font-medium mb-4">Low fee</h3>
            <p className="text-[#929796] text-[16px] font-light">3%</p>
            <p className="text-[#929796] text-[16px] font-light">Pay only 3% in fees to boost your returns and enjoy high yields.</p>
          </div>

          <div>
            <img src="/icons/rainbow.svg" alt="DeFi Ecosystem" className="w-16 h-16 mb-4" />
            <h3 className="text-white text-2xl font-medium mb-4">DeFi Ecosystem</h3>
            <p className="text-[#929796] text-[16px] font-light">10+</p>
            <p className="text-[#929796] text-[16px] font-light">Our DeFi ecosystem blends staking rewards with trading, re-staking, and lending to boost your returns.</p>
          </div>
        </div>
      </div>
    </section>
  );
}; 