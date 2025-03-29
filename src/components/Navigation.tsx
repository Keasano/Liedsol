import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Staking', 'Support'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80">
      <div className="max-w-[880px] mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/images/logo.svg" alt="LIEDSOL" className="w-9 h-9" />
          <span className="text-[#212121] font-medium">LIEDSOL</span>
        </div>
        <div className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`text-[#212121] ${activeTab === tab ? 'font-bold' : 'font-normal'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
} 