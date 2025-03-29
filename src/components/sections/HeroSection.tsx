export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url("/images/hero-pattern.svg")',
          backgroundRepeat: 'repeat',
          opacity: 0.1
        }}
      />

      {/* Left swirl */}
      <div className="absolute left-0 top-1/3 -translate-y-1/2 w-[140px] flex items-center">
        <img
          src="/images/hero-left.png"
          alt="Decorative swirl"
          className="w-full h-auto object-contain"
          style={{ transform: 'translateX(-20%)' }}
        />
      </div>

      {/* Right swirl */}
      <div className="absolute right-0 top-1/3 -translate-y-1/2 w-[140px] flex items-center">
        <img
          src="/images/hero-right.png"
          alt="Decorative swirl"
          className="w-full h-auto object-contain"
          style={{ transform: 'translateX(20%)' }}
        />
      </div>

      {/* Content */}
      <div className="text-center z-10 max-w-[800px] mx-auto px-4">
        <p className="text-[#212121] mb-4">Your Gateway to Passive Income</p>
        <h1 className="text-[64px] leading-tight font-bold text-[#212121] mb-6">
          STAKE YOUR SOL
        </h1>
        <p className="text-xl text-[#212121] mb-8">
          Join thousands staking SOL for rewards. Secure and hassle-free.
        </p>
        <button className="bg-[#A8EC8F] text-[#212121] px-8 py-4 rounded-full hover:opacity-90 transition-opacity font-medium text-lg">
          Deposit SOL
        </button>

        {/* Stats */}
        <div className="mt-16 flex justify-center gap-16">
          <div className="text-center">
            <p className="text-4xl font-bold text-[#212121] mb-2">8.4%</p>
            <p className="text-[#212121] uppercase text-sm">APY</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#212121] mb-2">3.5M SOL</p>
            <p className="text-[#212121] uppercase text-sm">TVL</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#212121] mb-2">3%</p>
            <p className="text-[#212121] uppercase text-sm">FEES</p>
          </div>
        </div>
      </div>
    </section>
  );
}; 