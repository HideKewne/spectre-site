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

    // Find the content wrapper and trigger close animation
    const content = document.querySelector('.page-transition');
    if (content) {
      content.classList.add('iris-exit');
    }

    // Set flag so next page knows to play open animation
    sessionStorage.setItem('iris-transitioning', 'true');

    // Navigate after iris close animation completes (1250ms > 1200ms animation)
    setTimeout(() => {
      window.location.href = href;
    }, 1250);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
