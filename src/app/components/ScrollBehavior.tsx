'use client';

import { useEffect } from 'react';

export function ScrollBehavior() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
} 