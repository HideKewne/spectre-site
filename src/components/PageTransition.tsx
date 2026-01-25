'use client';

import { useLayoutEffect, useEffect, useRef } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

// Helper to fully reset transition state
function resetTransitionState(content: HTMLElement | null) {
  // Always clear the sessionStorage flag
  sessionStorage.removeItem('iris-transitioning');

  // Remove classes from html
  document.documentElement.classList.remove('iris-entering');

  if (content) {
    // CRITICAL: Cancel any active animations (fill: forwards keeps element hidden!)
    content.getAnimations().forEach(anim => anim.cancel());

    content.classList.remove('iris-exit');
    content.classList.remove('iris-enter');
    content.style.clipPath = '';
    content.style.visibility = '';
  }
}

export default function PageTransition({ children }: PageTransitionProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  // useLayoutEffect runs BEFORE browser paint - critical for preventing flicker
  useLayoutEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    // Check if we're coming from a page exit (iris should open)
    const wasExiting = sessionStorage.getItem('iris-transitioning') === 'true';
    let timer: NodeJS.Timeout | null = null;

    if (wasExiting) {
      // Clear the flag immediately
      sessionStorage.removeItem('iris-transitioning');

      // Calculate viewport center relative to the element
      const rect = content.getBoundingClientRect();
      const centerX = (window.innerWidth / 2) - rect.left;
      const centerY = (window.innerHeight / 2) - rect.top;

      // CRITICAL: Set clip-path FIRST (while still hidden), then make visible
      content.style.clipPath = `circle(0% at ${centerX}px ${centerY}px)`;
      content.style.visibility = 'visible';

      // Start animation immediately (runs before paint)
      const animation = content.animate(
        [
          { clipPath: `circle(0% at ${centerX}px ${centerY}px)` },
          { clipPath: `circle(150% at ${centerX}px ${centerY}px)` }
        ],
        {
          duration: 600,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          fill: 'forwards'
        }
      );

      // Clean up after animation completes
      timer = setTimeout(() => {
        animation.cancel();
        resetTransitionState(content);
      }, 650);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  // Event listeners for edge cases (bfcache, back/forward navigation)
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    // Handle bfcache restoration
    const handlePageShow = (e: PageTransitionEvent) => {
      // If page was restored from bfcache, always reset
      if (e.persisted) {
        resetTransitionState(content);
      }
    };

    // Handle browser back/forward buttons
    const handlePopState = () => {
      resetTransitionState(content);
    };

    // Handle tab visibility changes
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        resetTransitionState(content);
      }
    };

    window.addEventListener('pageshow', handlePageShow);
    window.addEventListener('popstate', handlePopState);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('pageshow', handlePageShow);
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <div ref={contentRef} className="page-transition">
      {children}
    </div>
  );
}
