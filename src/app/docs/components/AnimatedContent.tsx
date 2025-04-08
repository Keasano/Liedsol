'use client';

import { useEffect, useState } from 'react';

interface AnimatedContentProps {
  children: React.ReactNode;
}

export default function AnimatedContent({ children }: AnimatedContentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      className={`flex-1 opacity-0 transform translate-y-5 ${
        isVisible ? 'animate-fade-in-up' : ''
      }`}
    >
      {children}
    </div>
  );
} 