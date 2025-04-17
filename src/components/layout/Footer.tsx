import Image from 'next/image';
import Link from 'next/link';

const navigationLinks = {
  Overview: [
    { name: 'Introduction', href: '#' },
    { name: 'LSOL', href: '#' },
    { name: 'Fees', href: '#' },
  ],
  Staking: [
    { name: 'Liquid staking', href: '#' },
    { name: 'Staking APY', href: '#' },
    { name: 'Risks', href: '#' },
  ],
  Support: [
    { name: 'FAQ', href: '#' },
    { name: 'Contact us', href: '#' },
    { name: 'Delegation Strategy', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Twitter', icon: '/icons/twitter.svg', href: '#' },
  { name: 'Telegram', icon: '/icons/telegram.svg', href: '#' },
  { name: 'Discord', icon: '/icons/discord.svg', href: '#' },
  { name: 'Youtube', icon: '/icons/youtube.svg', href: '#' },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-[#F4F4F4] pt-12 sm:pt-16 pb-8 sm:pb-12">
      <div className="mobile-container max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 sm:gap-20 mb-12 sm:mb-20">
          {/* Brand section */}
          <div className="max-w-[480px] pt-[3px]">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Image 
                src="/icons/liedsolLogo.svg" 
                alt="LIEDSOL" 
                width={20} 
                height={6} 
                priority
                className="w-[18px] sm:w-[23px]"
              />
              <span className="text-[#212121] text-[16px] sm:text-[18px] font-bold">LIEDSOL</span>
            </div>
            <p className="text-[#636161] text-[13px] sm:text-[14px] font-normal mb-6 sm:mb-8 max-w-[360px]">
              LIESOL is a hardware-accelerated blockchain scaling the SVM for fast, low-latency apps.
            </p>
            <div className="flex items-center gap-3">
              <Link 
                href="/stake" 
                className="bg-[#A8EC8F] text-black w-[110px] sm:w-[130px] h-9 sm:h-10 flex items-center justify-center rounded-full hover:bg-opacity-90 transition-all text-[13px] sm:text-[14px]"
              >
                Stake Now
              </Link>
              <span className="text-[#636161] text-[13px] sm:text-[14px]">1000+ TPS</span>
            </div>
          </div>

          {/* Navigation section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-20">
            {Object.entries(navigationLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col">
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center">
                    <div className="w-[4px] sm:w-[6px] h-[4px] sm:h-[6px] bg-[#212121]"></div>
                    <h3 className="text-[#636161] text-[12px] sm:text-[14px] font-normal ml-2 sm:ml-3">{category}</h3>
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:gap-4 ml-[14px] sm:ml-[18px]">
                  {links.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      className="text-[#212121] text-[13px] sm:text-[14px]"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social links and copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0 mt-10 sm:mt-14">
          <div className="flex gap-4 sm:gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <Image 
                  src={link.icon} 
                  alt={link.name} 
                  width={18}
                  height={18}
                  className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]"
                />
              </Link>
            ))}
          </div>
          <p className="text-[#636161] text-[12px] sm:text-[14px]">
            © 2025 Solayer · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}; 