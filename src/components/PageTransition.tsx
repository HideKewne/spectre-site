'use client';

import { useEffect, useRef } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    // Check if we're coming from a page exit (iris should open)
    const wasExiting = sessionStorage.getItem('iris-transitioning') === 'true';

    if (wasExiting) {
      // Clear the flag
      sessionStorage.removeItem('iris-transitioning');
      // Start with circle closed, then open
      content.classList.add('iris-enter');

      // Remove animation class after it completes
      const timer = setTimeout(() => {
        content.classList.remove('iris-enter');
      }, 450);

      return () => clearTimeout(timer);
    }

    // Handle pageshow for bfcache
    const handlePageShow = () => {
      content.classList.remove('iris-exit');
      content.classList.remove('iris-enter');
      // Reset to fully visible
      content.style.clipPath = 'circle(150% at 50% 50%)';
    };

    // Handle visibility change
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        content.classList.remove('iris-exit');
        content.style.clipPath = 'circle(150% at 50% 50%)';
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
    <div ref={contentRef} className="page-transition">
      {children}
    </div>
  );
}
