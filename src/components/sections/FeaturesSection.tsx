'use client';

import { AnimatedText } from '../ui/AnimatedText';

const features = [
  {
    icon: '/icons/highApy.svg',
    title: 'High APY',
    value: '8.8%',
    description: 'Earn an 8.8% APY to quickly grow your investments in the DeFi ecosystem.'
  },
  {
    icon: '/icons/lowFee.svg',
    title: 'Low fee',
    value: '3%',
    description: 'Pay only 3% in fees to boost your returns and enjoy high yields.'
  },
  {
    icon: '/icons/ecosystem.svg',
    title: 'DeFi Ecosystem',
    value: '10+',
    description: 'Our DeFi ecosystem blends staking rewards with trading, re-staking, and lending to boost your returns.'
  }
];

export const FeaturesSection = () => {
  return (
    <section className="w-full bg-[#121212] py-[60px] md:py-[100px] lg:py-[150px]">
      <div className="mobile-container max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-4">
          {features.map((feature, index) => (
            <AnimatedText 
              key={index} 
              threshold={0.1}
              className={`bg-[#202120] rounded-[20px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col`}
              delay={index * 200}
              animationClass="animate-fade-up-parallax"
            >
              <div className="bg-white w-14 h-14 rounded-[12px] flex items-center justify-center mb-5">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-7 h-7 sm:w-8 sm:h-8"
                />
              </div>
              <h3 className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-normal mb-2">
                {feature.title}
              </h3>
              <p className="text-white text-[36px] sm:text-[42px] md:text-[48px] font-normal mb-4">
                {feature.value}
              </p>
              <p className="text-[#929796] text-[14px] sm:text-[15px] md:text-base font-normal">
                {feature.description}
              </p>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
}; 