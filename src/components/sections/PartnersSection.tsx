'use client';

import Image from 'next/image';

const partners = [
  { name: 'Allstake', logo: '/partners/allstake.svg' },
  { name: 'Kamino', logo: '/partners/kamino.svg' },
  { name: 'Orca', logo: '/partners/orca.svg' },
  { name: 'Sanctum', logo: '/partners/sanctum.svg' },
];

export const PartnersSection = () => {
  return (
    <section className="pt-[200px] pb-[200px] overflow-hidden relative">
      {/* Title */}
      <h2 className="text-center text-[#929796] text-[14px] mb-16">
        Trusted partner to top institutions & industry leaders.
      </h2>

      {/* Partners carousel container */}
      <div className="relative max-w-[1200px] mx-auto">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Partners carousel */}
        <div className="overflow-hidden">
          <div className="partners-track flex items-center">
            {/* Repeat the partners list multiple times to ensure smooth transition */}
            {[...Array(4)].map((_, setIndex) => (
              <div key={`set-${setIndex}`} className="partners-group flex items-center">
                {partners.map((partner, index) => (
                  <div 
                    key={`${setIndex}-${index}`} 
                    className="partner-item flex items-center"
                    style={{
                      padding: '0 40px',
                    }}
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={40}
                      height={40}
                      className="min-w-[40px]"
                    />
                    <span className="text-[#212121] whitespace-nowrap text-base ml-2">{partner.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Add this to your globals.css
/*
@keyframes infinite-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-33.33%);
  }
}

.animate-infinite-scroll {
  animation: infinite-scroll 20s linear infinite;
}
*/ 