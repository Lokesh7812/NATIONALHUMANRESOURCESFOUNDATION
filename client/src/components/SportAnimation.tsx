import { useEffect, useState } from 'react';

interface SportAnimationProps {
  isActive: boolean;
  duration?: number;
}

export function SportAnimation({ isActive, duration = 1000 }: SportAnimationProps) {
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'entering' | 'centering' | 'expanding' | 'reveal' | 'end'>('idle');

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

  // Calculate ball position and properties based on phase
  const getBallProps = () => {
    switch (animationPhase) {
      case 'idle':
        return { 
          x: '-15%', 
          y: '50%', 
          scale: 0.8, 
          opacity: 0,
          rotation: 0 
        };
      case 'entering':
        return { 
          x: '20%', 
          y: '50%', 
          scale: 1, 
          opacity: 1,
          rotation: 180 
        };
      case 'centering':
        return { 
          x: '50%', 
          y: '50%', 
          scale: 1.5, 
          opacity: 1,
          rotation: 360 
        };
      case 'expanding':
        return { 
          x: '50%', 
          y: '50%', 
          scale: 8, 
          opacity: 0.95,
          rotation: 540 
        };
      case 'reveal':
        return { 
          x: '50%', 
          y: '50%', 
          scale: 12, 
          opacity: 0,
          rotation: 720 
        };
      default:
        return { 
          x: '50%', 
          y: '50%', 
          scale: 1, 
          opacity: 1,
          rotation: 0 
        };
    }
  };

  const ballProps = getBallProps();
  const isExpanding = animationPhase === 'expanding' || animationPhase === 'reveal';

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
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

      {/* Football Animation */}
      <div
        className="absolute"
        style={{
          left: ballProps.x,
          top: ballProps.y,
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
        }}
      >
        <svg 
          width="120" 
          height="120" 
          viewBox="0 0 120 120"
          className="football-svg"
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

      {/* Expanding burst effect when ball reaches center */}
      {animationPhase === 'expanding' && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            zIndex: 15,
          }}
        >
          {/* Multiple expanding rings for burst effect */}
          <div
            className="rounded-full border-4 border-white"
            style={{
              width: '200px',
              height: '200px',
              animation: 'burst-ring-1 0.2s ease-out forwards',
              opacity: 0.8,
            }}
          />
          <div
            className="rounded-full border-3 border-blue-300 absolute"
            style={{
              width: '250px',
              height: '250px',
              animation: 'burst-ring-2 0.25s ease-out forwards',
              opacity: 0.6,
            }}
          />
        </div>
      )}

      {/* Final expansion effect */}
      {animationPhase === 'reveal' && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            zIndex: 20,
          }}
        >
          <div
            className="rounded-full bg-white"
            style={{
              width: '100px',
              height: '100px',
              animation: 'final-burst 0.25s ease-out forwards',
              opacity: 0.9,
            }}
          />
        </div>
      )}

      <style>{`
        @keyframes burst-ring-1 {
          0% {
            transform: scale(0.5);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        @keyframes burst-ring-2 {
          0% {
            transform: scale(0.3);
            opacity: 0.6;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }

        @keyframes final-burst {
          0% {
            transform: scale(0);
            opacity: 0.9;
          }
          100% {
            transform: scale(15);
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
      `}</style>
    </div>
  );
}
