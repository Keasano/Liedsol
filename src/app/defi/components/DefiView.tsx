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
    <div className="bg-white rounded-[24px] p-6 border border-[#EFF0ED]">
      <div className="flex items-center gap-3 mb-8">
        <Image src={icon} alt="" width={32} height={32} />
        <div>
          <h3 className="text-[16px] font-bold text-[#212121]">{title}</h3>
          <p className="text-[14px] text-[#636161]">{address}</p>
        </div>
      </div>

      <div className="space-y-4 mb-8">
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

      <button className="w-full flex items-center justify-between bg-[#F7F8F5] rounded-[16px] px-4 py-3">
        <div className="flex items-center gap-2">
          <Image src={action.icon} alt="" width={24} height={24} />
          <span className="text-[14px] text-[#212121]">{action.text}</span>
        </div>
        <Image src="/icons/external-link.svg" alt="" width={16} height={16} />
      </button>
    </div>
  );
};

export default function DefiView() {
  const strategies = [
    {
      icon: '/icons/kamino-black.svg',
      title: 'Vault Strategy on Kamino',
      address: '6GGY...zcm7',
      features: {
        solayerRewards: true,
        openSource: true,
        audited: true
      },
      action: {
        icon: '/icons/lsol.svg',
        text: 'Supply LSOL'
      }
    },
    {
      icon: '/icons/kamino-yellow.svg',
      title: 'Vault Strategy on Kamino',
      address: '6GGY...zcm7',
      features: {
        solayerRewards: true,
        openSource: true,
        audited: true
      },
      action: {
        icon: '/icons/lsol.svg',
        text: 'Supply LSOL'
      }
    },
    {
      icon: '/icons/kamino-blue.svg',
      title: 'Vault Strategy on Kamino',
      address: '6GGY...zcm7',
      features: {
        solayerRewards: true,
        openSource: true,
        audited: true
      },
      action: {
        icon: '/icons/lsol.svg',
        text: 'Supply LSOL'
      }
    },
    {
      icon: '/icons/kamino-navy.svg',
      title: 'Vault Strategy on Kamino',
      address: '6GGY...zcm7',
      features: {
        solayerRewards: true,
        openSource: true,
        audited: true
      },
      action: {
        icon: '/icons/lsol.svg',
        text: 'Leveraged LSOL Restaking'
      }
    }
  ];

  return (
    <div className="container mx-auto px-4 pt-[120px]">
      <div className="grid grid-cols-2 gap-6">
        {strategies.map((strategy, index) => (
          <StrategyCard key={index} {...strategy} />
        ))}
      </div>
    </div>
  );
} 