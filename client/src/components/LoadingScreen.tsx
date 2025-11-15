import { useEffect, useState, useRef } from 'react';

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set the main app content to inert while loading
    const root = document.getElementById('root');
    const mainContent = root?.querySelector('div:not([data-testid="loading-screen"])');
    
    if (mainContent && isVisible) {
      (mainContent as HTMLElement).inert = true;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      if (mainContent) {
        (mainContent as HTMLElement).inert = false;
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
      if (mainContent) {
        (mainContent as HTMLElement).inert = false;
      }
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center animate-out fade-out duration-500" 
      role="alert" 
      aria-live="polite" 
      aria-label="Loading"
      data-testid="loading-screen"
    >
      <div className="flex flex-col items-center gap-8">
        <div className="relative" aria-hidden="true">
          <img
            src="/nhrf-logo.png"
            alt="NHRF"
            className="h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 animate-pulse"
          />
          <div className="absolute inset-0 rounded-full border-4 md:border-[6px] border-primary border-t-transparent animate-spin" />
        </div>
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary animate-pulse">NHRF</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-1">Empowering Communities</p>
        </div>
      </div>
    </div>
  );
}
