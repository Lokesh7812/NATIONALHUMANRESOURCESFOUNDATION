import { useEffect, useState, ReactNode } from 'react';
import { useLocation } from 'wouter';

type TransitionType = 
  | 'fade'
  | 'slide-up'
  | 'slide-right'
  | 'zoom'
  | 'overlay-wipe'
  | 'opacity-blur'
  | 'shutter'
  | 'circular-mask'
  | 'color-wipe';

interface PageTransitionProps {
  children: ReactNode;
  transition?: TransitionType;
  duration?: number;
  color?: 'blue' | 'green';
}

export function PageTransition({ 
  children, 
  transition = 'color-wipe',
  duration = 600,
  color = 'blue'
}: PageTransitionProps) {
  const [location] = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const [key, setKey] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Start transition
    setIsTransitioning(true);
    setIsVisible(false);
    
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setKey(prev => prev + 1);
      // Small delay to ensure DOM is ready
      requestAnimationFrame(() => {
        setIsVisible(true);
        // End transition after animation
        setTimeout(() => {
          setIsTransitioning(false);
        }, duration);
      });
    }, 50);

    return () => clearTimeout(timer);
  }, [location, children, duration]);

  const getTransitionClasses = () => {
    const baseClasses = 'transition-all ease-out';
    
    switch (transition) {
      case 'fade':
        return `${baseClasses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
        
      case 'slide-up':
        return `${baseClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;
        
      case 'slide-right':
        return `${baseClasses} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`;
        
      case 'zoom':
        return `${baseClasses} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`;
        
      case 'overlay-wipe':
        return `${baseClasses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
        
      case 'opacity-blur':
        return `${baseClasses} ${isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`;
        
      case 'shutter':
        return `${baseClasses} ${isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`;
        
      case 'circular-mask':
        return `${baseClasses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
        
      case 'color-wipe':
        return `${baseClasses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
        
      default:
        return `${baseClasses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
    }
  };

  const getColorWipeStyle = () => {
    if (transition !== 'color-wipe' || !isTransitioning) return {};
    
    const colorValue = color === 'blue' 
      ? 'hsl(207, 82%, 51%)' 
      : 'hsl(145, 63%, 42%)';
    
    return {
      '--wipe-color': colorValue,
    } as React.CSSProperties;
  };

  return (
    <div className="relative">
      {/* Color Wipe Overlay */}
      {transition === 'color-wipe' && isTransitioning && (
        <div
          className="fixed inset-0 z-[9999] pointer-events-none"
          style={{
            background: color === 'blue' 
              ? 'hsl(207, 82%, 51%)' 
              : 'hsl(145, 63%, 42%)',
            clipPath: isVisible 
              ? 'circle(0% at 50% 50%)' 
              : 'circle(150% at 50% 50%)',
            transition: `clip-path ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
          }}
        />
      )}
      
      <div 
        key={key}
        className={getTransitionClasses()}
        style={{ 
          transitionDuration: `${duration}ms`,
          ...getColorWipeStyle()
        }}
      >
        {displayChildren}
      </div>
    </div>
  );
}

