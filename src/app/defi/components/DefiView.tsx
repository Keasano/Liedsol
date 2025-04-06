'use client';

import Image from 'next/image';

interface StrategyCardProps {
  icon: string;
  title: string;
  address: string;
  features: {
    solayerRewards: boolean;
    openSource: boolean;
    audited: boolean;
  };
  action: {
    icon: string;
    text: string;
  };
}

const StrategyCard: React.FC<StrategyCardProps> = ({ icon, title, address, features, action }) => {
  return (
    <div className="bg-[#F7F8F5] rounded-[24px] px-6 pt-6 w-[360px] h-[300px] flex flex-col font-power-grotesk">
      <div className="flex items-center gap-3 mb-6">
        <Image src={icon} alt="" width={40} height={40} />
        <div>
          <h3 className="text-[16px] font-bold text-[#212121]">{title}</h3>
          <p className="text-[14px] text-[#636161]">{address}</p>
        </div>
      </div>

      <div className="h-[1px] bg-[#ECEDEA] mb-6" />

      <div className="space-y-4 mb-auto">
        <div className="flex justify-between">
          <span className="text-[14px] text-[#212121]">Solayer rewards</span>
          <span className="text-[14px] text-[#77DC53]">Yes</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[14px] text-[#212121]">Open source</span>
          <span className="text-[14px] text-[#77DC53]">Yes</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[14px] text-[#212121]">Audited</span>
          <span className="text-[14px] text-[#77DC53]">Yes</span>
        </div>
      </div>

      <button className="w-full h-[48px] flex items-center justify-between bg-white rounded-full pl-[6px] pr-[14px] relative mb-[24px]">
        <div className="flex items-center gap-2">
          <div className="py-[6px]">
            <Image src="/defi/assets/lsol.svg" alt="" width={36} height={36} />
          </div>
          <span className="text-[14px] text-[#212121]">{action.text}</span>
        </div>
        <div className="py-[14px]">
          <Image src="/defi/assets/arrow.svg" alt="" width={20} height={20} />
        </div>
      </button>
    </div>
  );
};

export default function DefiView() {
  const strategies = [
    {
      icon: '/defi/assets/kamino.svg',
      title: 'Vault Strategy on Kamino',
      address: '6GGY...zcm7',
      features: {
        solayerRewards: true,
        openSource: true,
        audited: true
      },
      action: {
        icon: '/defi/assets/lsol.svg',
        text: 'Supply LSOL'
      }
    },
    {
      icon: '/defi/assets/orca.svg',
      title: 'Provide liquidity on Orca',
      address: '6GGY...zcm7',
      features: {
        solayerRewards: true,
        openSource: true,
        audited: true
      },
      action: {
        icon: '/defi/assets/lsol.svg',
        text: 'Supply LSOL'
      }
    },
    {
      icon: '/defi/assets/sanctum.svg',
      title: 'Liquid Staking on Sanctum',
      address: '6GGY...zcm7',
      features: {
        solayerRewards: true,
        openSource: true,
        audited: true
      },
      action: {
        icon: '/defi/assets/lsol.svg',
        text: 'Supply LSOL'
      }
    },
    {
      icon: '/defi/assets/allstake.svg',
      title: 'Allstake',
      address: '6GGY...zcm7',
      features: {
        solayerRewards: true,
        openSource: true,
        audited: true
      },
      action: {
        icon: '/defi/assets/lsol.svg',
        text: 'Leveraged LSOL Restaking'
      }
    }
  ];

  return (
    <div className="flex justify-center mb-[80px]">
      <div className="grid grid-cols-2 gap-[24px]">
        {strategies.map((strategy, index) => (
          <StrategyCard key={index} {...strategy} />
        ))}
      </div>
    </div>
  );
} 