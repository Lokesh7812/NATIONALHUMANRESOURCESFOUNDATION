import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

type AnimationType = 
  | 'fade-up'
  | 'fade-in'
  | 'slide-left'
  | 'slide-right'
  | 'scale-up'
  | 'rotate-fade'
  | 'blur-reveal';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

export function AnimatedSection({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  className = '',
  threshold = 0.1
}: AnimatedSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({ 
    threshold,
    triggerOnce: true 
  });

  const getAnimationClasses = () => {
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return 'opacity-0 translate-y-8';
        case 'fade-in':
          return 'opacity-0';
        case 'slide-left':
          return 'opacity-0 -translate-x-8';
        case 'slide-right':
          return 'opacity-0 translate-x-8';
        case 'scale-up':
          return 'opacity-0 scale-95';
        case 'rotate-fade':
          return 'opacity-0 rotate-2 scale-95';
        case 'blur-reveal':
          return 'opacity-0 blur-sm';
        default:
          return 'opacity-0 translate-y-8';
      }
    }

    switch (animation) {
      case 'fade-up':
        return 'opacity-100 translate-y-0';
      case 'fade-in':
        return 'opacity-100';
      case 'slide-left':
        return 'opacity-100 translate-x-0';
      case 'slide-right':
        return 'opacity-100 translate-x-0';
      case 'scale-up':
        return 'opacity-100 scale-100';
      case 'rotate-fade':
        return 'opacity-100 rotate-0 scale-100';
      case 'blur-reveal':
        return 'opacity-100 blur-0';
      default:
        return 'opacity-100 translate-y-0';
    }
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-out ${getAnimationClasses()} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform, filter'
      }}
    >
      {children}
    </div>
  );
}

