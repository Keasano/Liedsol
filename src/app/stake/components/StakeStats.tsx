'use client';

import type { StakeStatsProps } from './types';

export function StakeStats(props: StakeStatsProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Statistics</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">APY</span>
          <span className="font-medium">8.4%</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Value Locked</span>
          <span className="font-medium">3.5M SOL</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Your Stake</span>
          <span className="font-medium">0 SOL</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Earned Rewards</span>
          <span className="font-medium">0 SOL</span>
        </div>
      </div>
    </div>
  );
} 