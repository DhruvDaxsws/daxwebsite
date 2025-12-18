
'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

type CountUpProps = {
  end: number;
  duration?: number;
  className?: string;
  suffix?: string;
};

export function CountUp({ end, duration = 2000, className, suffix = '' }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
            setCount(end);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}
