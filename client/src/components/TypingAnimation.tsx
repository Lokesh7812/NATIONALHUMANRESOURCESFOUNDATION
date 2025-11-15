import { useEffect, useState } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypingAnimation({ 
  text, 
  speed = 100, 
  delay = 0,
  className = '',
  onComplete 
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (delay > 0 && !isStarted) {
      const delayTimer = setTimeout(() => {
        setIsStarted(true);
      }, delay);
      return () => clearTimeout(delayTimer);
    }

    if (!isStarted || currentIndex >= text.length) {
      if (currentIndex >= text.length && onComplete) {
        onComplete();
      }
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [text, speed, delay, currentIndex, isStarted, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="inline-block w-0.5 h-[1em] bg-current ml-1 animate-pulse" style={{ animationDuration: '1s' }} />
      )}
    </span>
  );
}

