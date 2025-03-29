'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div
      className={`
        bg-gray-800/50 backdrop-blur-sm
        rounded-xl p-6 shadow-lg
        transform transition-all duration-300 ease-in-out
        hover:-translate-y-1 hover:shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}; 