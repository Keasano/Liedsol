'use client';

import type { StakeHistoryProps } from './types';

export function StakeHistory(props: StakeHistoryProps) {
  const history = [
    {
      type: 'Stake',
      amount: '100 SOL',
      date: '2024-04-05',
      status: 'Completed',
    },
    {
      type: 'Unstake',
      amount: '50 SOL',
      date: '2024-04-04',
      status: 'Completed',
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">History</h2>
      
      <div className="space-y-4">
        {history.length > 0 ? (
          history.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <div className="font-medium">{item.type}</div>
                <div className="text-sm text-gray-500">{item.date}</div>
              </div>
              <div className="text-right">
                <div className="font-medium">{item.amount}</div>
                <div className="text-sm text-gray-500">{item.status}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 py-4">
            No history available
          </div>
        )}
      </div>
    </div>
  );
} 