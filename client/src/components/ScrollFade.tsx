import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollFadeProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  fadeIn?: boolean;
  fadeOut?: boolean;
  delay?: number;
}

export function ScrollFade({ 
  children, 
  className = '',
  threshold = 0.1,
  fadeIn = true,
  fadeOut = false,
  delay = 0
}: ScrollFadeProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        
        if (fadeIn && fadeOut) {
          // Fade in when entering, fade out when leaving
          setOpacity(ratio);
          setIsVisible(ratio > threshold);
        } else if (fadeIn) {
          // Only fade in
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
              setOpacity(1);
            }, delay);
          }
        } else if (fadeOut) {
          // Only fade out
          if (!entry.isIntersecting) {
            setIsVisible(false);
            setOpacity(0);
          }
        }
      },
      { 
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, fadeIn, fadeOut, delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: fadeIn && fadeOut ? opacity : (isVisible ? 1 : 0),
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      {children}
    </div>
  );
}

