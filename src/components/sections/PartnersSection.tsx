'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const partners = [
  { name: 'Allstake', logo: '/partners/allstake.svg' },
  { name: 'Kamino', logo: '/partners/kamino.svg' },
  { name: 'Orca', logo: '/partners/orca.svg' },
  { name: 'Sanctum', logo: '/partners/sanctum.svg' },
];

export const PartnersSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 检测是否为移动设备
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // 初始检查
    checkMobile();
    
    // 添加窗口大小变化监听
    window.addEventListener('resize', checkMobile);
    
    // 清理函数
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <section className="pt-[150px] pb-[150px] overflow-hidden relative">
      <h2 className="text-center text-[#929796] text-[14px] mb-16">
        Trusted partner to top institutions & industry leaders.
      </h2>
      <div className="relative max-w-[1200px] mx-auto">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        <div className="overflow-hidden">
          <div className="partners-track flex items-center">
            {[undefined, undefined, undefined, undefined].map((_, i) => (
              <div className="partners-group flex items-center" key={`set-${i}`}>
                {partners.map((partner, j) => (
                  <div
                    className="partner-item flex items-center"
                    style={{ 
                      padding: isMobile ? '0 25px' : '0 40px'
                    }}
                    key={`${i}-${j}`}
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={isMobile ? 32 : 40}
                      height={isMobile ? 32 : 40}
                      className={isMobile ? "min-w-[32px]" : "min-w-[40px]"}
                    />
                    <span className={`text-[#212121] whitespace-nowrap ${isMobile ? 'text-sm ml-1.5' : 'text-base ml-2'}`}>
                      {partner.name}
                    </span>
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