'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  initial?: boolean;
}

export const AnimatedText = ({ 
  children, 
  className = '', 
  threshold = 0.3,
  initial = false
}: AnimatedTextProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(initial);

  useEffect(() => {
    if (initial) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, initial]);

  return (
    <div
      ref={elementRef}
      className={`${className} transition-opacity duration-600 ${
        isVisible ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
}; 