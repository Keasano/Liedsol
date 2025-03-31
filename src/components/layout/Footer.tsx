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
    <footer className="w-full bg-[#F4F4F4] pt-16 pb-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex justify-between mb-20">
          {/* Brand section */}
          <div className="max-w-[480px] pt-[3px]">
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/icons/logo.svg" 
                alt="LIEDSOL" 
                width={23} 
                height={6} 
                priority
              />
              <span className="text-[#212121] text-[18px] font-bold">LIEDSOL</span>
            </div>
            <p className="text-[#636161] text-[14px] font-normal mb-8 max-w-[360px]">
              LIESOL is a hardware-accelerated blockchain scaling the SVM for fast, low-latency apps.
            </p>
            <div className="flex items-center gap-3">
              <Link 
                href="/stake" 
                className="bg-[#A8EC8F] text-black w-[130px] h-10 flex items-center justify-center rounded-full hover:bg-opacity-90 transition-all text-[14px]"
              >
                Stake Now
              </Link>
              <span className="text-[#636161]">1000+ TPS</span>
            </div>
          </div>

          {/* Navigation section */}
          <div className="flex gap-20">
            {Object.entries(navigationLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col">
                <div className="mb-6">
                  <div className="flex items-center">
                    <div className="w-[6px] h-[6px] bg-[#212121]"></div>
                    <h3 className="text-[#636161] text-[14px] font-normal ml-3">{category}</h3>
                  </div>
                </div>
                <div className="flex flex-col gap-4 ml-[18px]">
                  {links.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      className="text-[#212121]"
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
        <div className="flex justify-between items-center mt-14">
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6"
              >
                <Image 
                  src={link.icon} 
                  alt={link.name} 
                  width={20} 
                  height={20}
                  className="w-full h-full"
                />
              </Link>
            ))}
          </div>
          <p className="text-[#929796] text-[12px] font-normal">© 2025 Solayer • All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}; 