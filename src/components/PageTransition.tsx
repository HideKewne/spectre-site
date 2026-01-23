'use client';

import { useEffect } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  useEffect(() => {
    // Always remove on mount
    document.body.classList.remove('page-exit');

    // Handle ALL pageshow events, not just persisted (bfcache)
    const handlePageShow = () => {
      document.body.classList.remove('page-exit');
    };

    // Additional safety: handle visibility change (tab switching)
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        document.body.classList.remove('page-exit');
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
    <div className="page-transition">
      {children}
    </div>
  );
}
