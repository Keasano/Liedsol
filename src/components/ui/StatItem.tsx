'use client';

import { ReactNode } from 'react';

interface StatItemProps {
  value: string;
  label: string;
  icon?: ReactNode;
  className?: string;
}

export const StatItem = ({ value, label, icon, className = '' }: StatItemProps) => {
  return (
    <div
      className={`
        group
        bg-gray-800/50 backdrop-blur-sm
        rounded-xl p-6
        transform transition-all duration-300 ease-in-out
        hover:-translate-y-1 hover:shadow-xl
        ${className}
      `}
    >
      {icon && (
        <div className="mb-4 text-blue-500 transition-transform duration-300 ease-in-out group-hover:scale-110">
          {icon}
        </div>
      )}
      <div className="text-3xl font-bold text-white mb-2">{value}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}; 