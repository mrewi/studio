
"use client";

import { useState, useEffect } from 'react';
import { differenceInSeconds, intervalToDuration } from 'date-fns';

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (!targetDate) return;

    const calculateTimeLeft = () => {
      const now = new Date();
      const diffSeconds = differenceInSeconds(targetDate, now);

      if (diffSeconds <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const duration = intervalToDuration({ start: now, end: targetDate });
      setTimeLeft({
        days: duration.days,
        hours: duration.hours,
        minutes: duration.minutes,
        seconds: duration.seconds,
      });
    };

    calculateTimeLeft(); // Initial calculation
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isClient || !targetDate) {
    // Fallback for SSR or if date is not ready
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 text-center">
        {[ 'Days', 'Hours', 'Minutes', 'Seconds'].map((unit) => (
          <div key={unit} className="bg-primary/10 p-4 md:p-6 rounded-lg shadow-lg">
            <div className="text-3xl md:text-5xl font-bold text-primary font-headline">--</div>
            <div className="text-sm md:text-base text-muted-foreground uppercase">{unit}</div>
          </div>
        ))}
      </div>
    );
  }
  
  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 text-center">
      {timeUnits.map((unit) => (
        <div key={unit.label} className="bg-card p-4 md:p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-out border border-primary/30">
          <div className="text-3xl md:text-5xl font-bold text-primary font-headline">
            {typeof unit.value === 'number' ? String(unit.value).padStart(2, '0') : '00'}
          </div>
          <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">{unit.label}</div>
        </div>
      ))}
    </div>
  );
}
