import { useEffect, useState } from 'react';

interface SportAnimationProps {
  isActive: boolean;
  duration?: number;
}

export function SportAnimation({ isActive, duration = 1000 }: SportAnimationProps) {
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'entering' | 'centering' | 'expanding' | 'reveal' | 'end'>('idle');
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isActive) {
      setAnimationPhase('idle');
      
      // Animation sequence: entering -> centering -> expanding -> reveal -> end
      const enteringTimer = setTimeout(() => setAnimationPhase('entering'), 50);
      const centeringTimer = setTimeout(() => setAnimationPhase('centering'), 300);
      const expandingTimer = setTimeout(() => setAnimationPhase('expanding'), 600);
      const revealTimer = setTimeout(() => setAnimationPhase('reveal'), 750);
      const endTimer = setTimeout(() => setAnimationPhase('end'), duration);
      
      return () => {
        clearTimeout(enteringTimer);
        clearTimeout(centeringTimer);
        clearTimeout(expandingTimer);
        clearTimeout(revealTimer);
        clearTimeout(endTimer);
      };
    } else {
      setAnimationPhase('end');
    }
  }, [isActive, duration]);

  if (!isActive || animationPhase === 'end') return null;

  // Calculate ball position and properties based on phase - responsive scaling
  const getBallProps = () => {
    // Base size multiplier for mobile vs desktop
    const baseSize = isMobile ? 0.7 : 1;
    const maxScale = isMobile ? 10 : 12;
    
    switch (animationPhase) {
      case 'idle':
        return { 
          x: '50%', 
          y: '50%', 
          scale: 0.6 * baseSize, 
          opacity: 0,
          rotation: 0 
        };
      case 'entering':
        return { 
          x: '50%', 
          y: '50%', 
          scale: 0.8 * baseSize, 
          opacity: 1,
          rotation: 180 
        };
      case 'centering':
        return { 
          x: '50%', 
          y: '50%', 
          scale: 1.2 * baseSize, 
          opacity: 1,
          rotation: 360 
        };
      case 'expanding':
        return { 
          x: '50%', 
          y: '50%', 
          scale: 6 * baseSize, 
          opacity: 0.95,
          rotation: 540 
        };
      case 'reveal':
        return { 
          x: '50%', 
          y: '50%', 
          scale: maxScale, 
          opacity: 0,
          rotation: 720 
        };
      default:
        return { 
          x: '50%', 
          y: '50%', 
          scale: 1 * baseSize, 
          opacity: 1,
          rotation: 0 
        };
    }
  };

  const ballProps = getBallProps();
  const isExpanding = animationPhase === 'expanding' || animationPhase === 'reveal';

  return (
    <div 
      className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
      }}
    >
      {/* Background - Clean sports gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500"
        style={{
          clipPath: animationPhase === 'reveal' 
            ? 'circle(0% at 50% 50%)' 
            : 'circle(150% at 50% 50%)',
          transition: `clip-path ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        }}
      />

      {/* Subtle field pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)
          `,
        }}
      />

      {/* Football Animation - Perfectly Centered and Responsive */}
      <div
        className="absolute"
        style={{
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%) scale(${ballProps.scale}) rotate(${ballProps.rotation}deg)`,
          opacity: ballProps.opacity,
          transition: animationPhase === 'entering' 
            ? 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
            : animationPhase === 'centering'
            ? 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            : animationPhase === 'expanding'
            ? 'all 0.15s cubic-bezier(0.4, 0, 1, 1)'
            : 'all 0.25s ease-out',
          zIndex: 10,
          filter: isExpanding 
            ? 'blur(2px) drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4))'
            : 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.5))',
          transformOrigin: 'center center',
          willChange: 'transform, opacity',
          margin: 0,
          padding: 0,
        }}
      >
        <svg 
          width={isMobile ? "100" : "120"} 
          height={isMobile ? "100" : "120"} 
          viewBox="0 0 120 120"
          className="football-svg"
          style={{
            display: 'block',
            maxWidth: '100%',
            height: 'auto',
            margin: '0 auto',
            verticalAlign: 'middle',
          }}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Main football circle */}
          <circle
            cx="60"
            cy="60"
            r="55"
            fill="#ffffff"
            stroke="#000000"
            strokeWidth="3"
            className="football-main"
          />
          
          {/* Classic football pattern - pentagon/hexagon design */}
          {/* Top pentagon */}
          <path
            d="M 60 10 Q 70 25 68 40 Q 60 35 52 40 Q 50 25 60 10"
            stroke="#000000"
            strokeWidth="2.5"
            fill="none"
            className="football-pattern"
          />
          
          {/* Center hexagon */}
          <path
            d="M 40 50 L 50 40 L 70 40 L 80 50 L 70 60 L 50 60 Z"
            stroke="#000000"
            strokeWidth="2.5"
            fill="none"
            className="football-pattern"
          />
          
          {/* Bottom pentagon */}
          <path
            d="M 60 110 Q 70 95 68 80 Q 60 85 52 80 Q 50 95 60 110"
            stroke="#000000"
            strokeWidth="2.5"
            fill="none"
            className="football-pattern"
          />
          
          {/* Left side pattern */}
          <path
            d="M 10 60 Q 25 50 25 40 Q 25 50 10 60"
            stroke="#000000"
            strokeWidth="2"
            fill="none"
            className="football-pattern"
          />
          
          {/* Right side pattern */}
          <path
            d="M 110 60 Q 95 50 95 40 Q 95 50 110 60"
            stroke="#000000"
            strokeWidth="2"
            fill="none"
            className="football-pattern"
          />
          
          {/* Connecting lines */}
          <line x1="60" y1="10" x2="60" y2="40" stroke="#000000" strokeWidth="2" />
          <line x1="60" y1="80" x2="60" y2="110" stroke="#000000" strokeWidth="2" />
          <line x1="40" y1="50" x2="25" y2="50" stroke="#000000" strokeWidth="2" />
          <line x1="80" y1="50" x2="95" y2="50" stroke="#000000" strokeWidth="2" />
        </svg>
      </div>

      {/* Expanding burst effect when ball reaches center - Responsive */}
      {animationPhase === 'expanding' && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            zIndex: 15,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
          }}
        >
          {/* Multiple expanding rings for burst effect - Responsive sizes */}
          <div
            className="rounded-full border-4 border-white"
            style={{
              width: isMobile ? '150px' : '200px',
              height: isMobile ? '150px' : '200px',
              animation: 'burst-ring-1 0.2s ease-out forwards',
              opacity: 0.8,
            }}
          />
          <div
            className="rounded-full border-3 border-blue-300 absolute"
            style={{
              width: isMobile ? '180px' : '250px',
              height: isMobile ? '180px' : '250px',
              animation: 'burst-ring-2 0.25s ease-out forwards',
              opacity: 0.6,
            }}
          />
        </div>
      )}

      {/* Final expansion effect - Responsive */}
      {animationPhase === 'reveal' && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            zIndex: 20,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
          }}
        >
          <div
            className="rounded-full bg-white"
            style={{
              width: isMobile ? '80px' : '100px',
              height: isMobile ? '80px' : '100px',
              animation: 'final-burst 0.25s ease-out forwards',
              opacity: 0.9,
            }}
          />
        </div>
      )}

      <style>{`
        @keyframes burst-ring-1 {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.5);
            opacity: 0;
          }
        }

        @keyframes burst-ring-2 {
          0% {
            transform: translate(-50%, -50%) scale(0.3);
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }

        @keyframes final-burst {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.9;
          }
          100% {
            transform: translate(-50%, -50%) scale(15);
            opacity: 0;
          }
        }

        .football-svg {
          filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3));
        }

        .football-main {
          transition: fill 0.2s ease;
        }

        .football-pattern {
          transition: stroke-width 0.2s ease;
        }

        /* Smooth rotation animation for the ball */
        @keyframes football-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .football-svg {
            filter: drop-shadow(0 3px 10px rgba(0, 0, 0, 0.3));
          }
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .football-svg {
            filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
          }
        }

        /* Perfect centering for all screen sizes */
        .football-svg {
          display: block;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}
