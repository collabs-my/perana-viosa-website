'use client';

import React, { useState, useEffect } from 'react';
import { useFirstVisit } from '@/hooks/useFirstVisit';

/**
 * Preloader component that shows on first visit
 * Features a wave animation with the brand colors
 */
export function Preloader() {
  const { isFirstVisit, isLoading } = useFirstVisit();
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // If not first visit or loading is complete, start fade out
    if (!isFirstVisit || !isLoading) {
      setIsVisible(false);
      
      // Remove from DOM after fade animation completes
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isFirstVisit, isLoading]);

  // Prevent body scroll when preloader is active
  useEffect(() => {
    if (shouldRender && isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [shouldRender, isVisible]);

  // Don't render if not first visit
  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Loader Container */}
      <div className="relative">
        {/* Main Loader Circle */}
        <div className="relative w-20 h-20 border border-transparent rounded-full overflow-hidden shadow-[0_0_0_2px_#1a1a1a]">
          {/* Wave Container */}
          <div className="relative w-full h-full rounded-full bg-[#fe6601] shadow-[inset_0_0_50px_rgba(0,0,0,0.3)]">
            {/* Wave 1 - Slower rotation */}
            <div
              className="absolute w-[200%] h-[200%] top-0 left-1/2 bg-gray-100"
              style={{
                transform: 'translate(-50%, -75%)',
                borderRadius: '45%',
                animation: 'wave-rotation 5s linear infinite',
              }}
            ></div>

            {/* Wave 2 - Faster rotation with opacity */}
            <div
              className="absolute w-[200%] h-[200%] top-0 left-1/2 bg-white/50"
              style={{
                transform: 'translate(-50%, -75%)',
                borderRadius: '40%',
                animation: 'wave-rotation 10s linear infinite',
              }}
            ></div>
          </div>
        </div>

        {/* Additional spinning ring for more visible animation */}
        <div
          className="absolute inset-0 w-20 h-20 border-2 border-transparent border-t-[#fe6601] rounded-full"
          style={{
            animation: 'spin 1s linear infinite',
          }}
        ></div>

        {/* Loading Text with pulse animation */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center">
          <p className="text-gray-600 text-sm font-medium animate-pulse">Loading...</p>
        </div>
      </div>
    </div>
  );
}
