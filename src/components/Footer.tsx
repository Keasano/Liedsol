'use client';

export const Footer = () => {
  return (
    <footer className="bg-[#F4F4F4] py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <img src="/icons/liedsolLogo.svg" alt="Brand" className="h-9 w-9" />
              <span className="text-[#212121] font-medium">LIEDSOL</span>
            </div>
            <p className="text-[14px] text-[#636161] mb-[120px]">
              LIESOL is a hardware-accelerated blockchain scaling the SVM for fast, low-latency apps.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-[#A8EC8F] text-[#212121] px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-medium">
                Stake Now
              </button>
              <span className="text-[#636161] text-sm">1000+ TPS</span>
            </div>
          </div>

          <div className="flex gap-20">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-[6px] h-[6px] bg-[#212121]"></div>
                <h3 className="text-[#636161] font-normal">Overview</h3>
              </div>
              <ul className="space-y-2 ml-0">
                <li><a href="#" className="text-[#636161] font-normal">Introduction</a></li>
                <li><a href="#" className="text-[#636161] font-normal">LSOL</a></li>
                <li><a href="#" className="text-[#636161] font-normal">Fees</a></li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-[6px] h-[6px] bg-[#212121]"></div>
                <h3 className="text-[#636161] font-normal">Staking</h3>
              </div>
              <ul className="space-y-2 ml-0">
                <li><a href="#" className="text-[#636161] font-normal">Liquid staking</a></li>
                <li><a href="#" className="text-[#636161] font-normal">Staking APY</a></li>
                <li><a href="#" className="text-[#636161] font-normal">Risks</a></li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-[6px] h-[6px] bg-[#212121]"></div>
                <h3 className="text-[#636161] font-normal">Support</h3>
              </div>
              <ul className="space-y-2 ml-0">
                <li><a href="#" className="text-[#636161] font-normal">FAQ</a></li>
                <li><a href="#" className="text-[#636161] font-normal">Contact us</a></li>
                <li><a href="#" className="text-[#636161] font-normal">Delegation Strategy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-between items-center">
          <div className="flex gap-4">
            <a href="#" className="text-[#212121]">
              <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#212121]">
              <img src="/icons/telegram.svg" alt="Telegram" className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#212121]">
              <img src="/icons/discord.svg" alt="Discord" className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#212121]">
              <img src="/icons/youtube.svg" alt="YouTube" className="w-6 h-6" />
            </a>
          </div>
          <p className="text-[#929796] text-[12px]">© 2025 Solayer · All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}; 