'use client';

import { useEffect, useRef } from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
}

export default function AnimatedCard({ children, delay = 0 }: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, delay);
        }
      },
      {
        threshold: 0.1
      }
    );

    const currentCard = cardRef.current;
    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="opacity-0 translate-y-3 duration-700 ease-[cubic-bezier(0.21,0.85,0.35,1)]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
} 