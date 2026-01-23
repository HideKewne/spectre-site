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

    // Trigger page fade-out animation
    document.body.classList.add('page-exit');

    // Navigate after animation completes (200ms > 150ms animation duration)
    setTimeout(() => {
      window.location.href = href;
    }, 200);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
