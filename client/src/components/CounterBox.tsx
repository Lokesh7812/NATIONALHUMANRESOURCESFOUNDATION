import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface CounterBoxProps {
  value: string;
  label: string;
  icon: LucideIcon;
}

export function CounterBox({ value, label, icon: Icon }: CounterBoxProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const targetValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9,]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || targetValue === 0) return;

    let start = 0;
    const duration = 2000;
    const increment = targetValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, targetValue]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <Card
      ref={ref}
      className="p-6 text-center hover-elevate transition-all duration-300 border-card-border"
      data-testid={`counter-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="rounded-full bg-primary/10 p-3">
          <Icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary">
          {formatNumber(count)}{suffix}
        </div>
        <div className="text-sm md:text-base text-muted-foreground font-medium leading-snug">
          {label}
        </div>
      </div>
    </Card>
  );
}
