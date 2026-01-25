'use client';

import Link from 'next/link';
import { ReactNode, useRef } from 'react';

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function TransitionLink({ href, children, className }: TransitionLinkProps) {
  const isNavigating = useRef(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Prevent rapid double-clicks
    if (isNavigating.current) return;
    isNavigating.current = true;

    // Find the content wrapper and trigger close animation using Web Animations API
    const content = document.querySelector('.page-transition') as HTMLElement;
    if (content) {
      // Calculate viewport center relative to the element
      // This ensures the circle is always at the viewport center, not element center
      const rect = content.getBoundingClientRect();
      const centerX = (window.innerWidth / 2) - rect.left;
      const centerY = (window.innerHeight / 2) - rect.top;

      content.animate(
        [
          { clipPath: `circle(150% at ${centerX}px ${centerY}px)` },
          { clipPath: `circle(0% at ${centerX}px ${centerY}px)` }
        ],
        {
          duration: 600,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          fill: 'forwards'
        }
      );
    }

    // Set flag so next page knows to play open animation
    sessionStorage.setItem('iris-transitioning', 'true');

    // Navigate after iris close animation completes
    setTimeout(() => {
      window.location.href = href;
    }, 650);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
