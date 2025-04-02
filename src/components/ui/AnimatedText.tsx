'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  initial?: boolean;
  delay?: number;
  animationClass?: string;
}

export const AnimatedText = ({
  children,
  className = '',
  threshold = 0.3,
  initial = false,
  delay = 0,
  animationClass = 'animate-fade-up'
}: AnimatedTextProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(initial);

  useEffect(() => {
    if (initial) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
          return () => clearTimeout(timer);
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
  }, [threshold, initial, delay]);

  return (
    <div
      ref={elementRef}
      className={`${className} ${isVisible ? animationClass : 'opacity-0'}`}
    >
      {children}
    </div>
  );
}; 