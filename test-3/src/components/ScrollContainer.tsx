'use client';

import { useEffect, useRef, KeyboardEvent, ReactNode } from "react";

type ScrollContainerProps = {
  children: ReactNode;
};

export default function ScrollContainer({ children }: ScrollContainerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Restore scroll position
    const savedScrollPosition = sessionStorage.getItem('home-scroll-position');
    if (savedScrollPosition) {
      container.scrollTop = parseInt(savedScrollPosition);
      sessionStorage.removeItem('home-scroll-position');
    }
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    switch (e.key) {
      case 'ArrowDown':
      case 'PageDown':
        e.preventDefault();
        container.scrollTop += window.innerHeight;
        break;
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        container.scrollTop -= window.innerHeight;
        break;
      case 'Home':
        e.preventDefault();
        container.scrollTop = 0;
        break;
      case 'End':
        e.preventDefault();
        container.scrollTop = container.scrollHeight;
        break;
    }
  };

  return (
    <div 
      ref={scrollContainerRef}
      className="snap-y snap-mandatory h-screen overflow-y-auto"
      tabIndex={0}
      role="feed"
      aria-label="Blog posts feed"
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
}