'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook to detect if this is the user's first visit to the website
 * Uses localStorage to persist the visit state across sessions
 */
export function useFirstVisit() {
  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      const hasVisited = localStorage.getItem('pv-first-visit');
      
      if (hasVisited) {
        // User has visited before
        setIsFirstVisit(false);
        setIsLoading(false);
      } else {
        // First time visitor - mark as visited and show preloader
        localStorage.setItem('pv-first-visit', 'true');
        setIsFirstVisit(true);
        
        // Minimum display time for better UX
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
      }
    }
  }, []);

  return { isFirstVisit, isLoading };
}
