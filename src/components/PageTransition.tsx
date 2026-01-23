'use client';

import { useEffect, useRef } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    // Check if we're coming from a page exit (iris should open)
    const wasExiting = sessionStorage.getItem('iris-transitioning') === 'true';

    if (wasExiting) {
      // Clear the flag
      sessionStorage.removeItem('iris-transitioning');
      // Start with circle closed, then open
      overlay.classList.add('iris-enter');

      // Remove animation class after it completes
      const timer = setTimeout(() => {
        overlay.classList.remove('iris-enter');
      }, 450);

      return () => clearTimeout(timer);
    }

    // Handle pageshow for bfcache
    const handlePageShow = () => {
      overlay.classList.remove('iris-exit');
      overlay.classList.remove('iris-enter');
    };

    // Handle visibility change
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        overlay.classList.remove('iris-exit');
      }
    };

    window.addEventListener('pageshow', handlePageShow);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('pageshow', handlePageShow);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <>
      <div ref={overlayRef} className="iris-overlay" />
      <div className="page-transition">
        {children}
      </div>
    </>
  );
}
