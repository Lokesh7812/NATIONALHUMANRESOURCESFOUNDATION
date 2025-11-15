import { useEffect } from 'react';
import { useLocation } from 'wouter';

export function useScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top immediately when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
    
    // Also ensure smooth scroll behavior is reset
    document.documentElement.style.scrollBehavior = 'auto';
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    });
  }, [location]);
}

