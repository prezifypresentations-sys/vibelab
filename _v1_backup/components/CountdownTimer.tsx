"use client";

import { useState, useEffect } from "react";
import { Timer } from "lucide-react";

const TARGET_DATE = new Date("2026-06-17T19:00:00+03:00").getTime(); // Ensure timezone is correctly handled or use local parsing

export default function CountdownTimer({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    // Avoid hydration mismatch by rendering a placeholder of the same dimensions
    return (
      <div className="flex flex-col gap-2 opacity-0">
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-16 h-16 rounded-xl border border-gold/20 bg-gold/5" />
          ))}
        </div>
      </div>
    );
  }

  const timeBlocks = [
    { label: "D.", value: timeLeft.days },
    { label: "VAL.", value: timeLeft.hours },
    { label: "MIN.", value: timeLeft.minutes },
    { label: "S.", value: timeLeft.seconds },
  ];

  return (
    <div className={`flex flex-col gap-2 sm:gap-3 p-3 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm max-w-fit ${className}`}>
      <div className="flex items-center gap-2 text-gold">
        <Timer className="h-4 w-4" />
        <span className="text-xs font-bold uppercase tracking-widest text-cloud/70">
          Iki dirbtuvių liko
        </span>
      </div>
      
      <div className="flex gap-1.5 sm:gap-3">
        {timeBlocks.map((block, i) => (
          <div key={block.label} className="flex items-center">
            <div className="flex flex-col items-center justify-center w-12 h-12 sm:w-[4.5rem] sm:h-[4.5rem] rounded-xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
              <span className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                {block.value.toString().padStart(2, "0")}
              </span>
              <span className="text-[9px] sm:text-[10px] font-medium text-cloud/50 mt-0.5 sm:mt-1 uppercase tracking-wider">
                {block.label}
              </span>
            </div>
            {i < 3 && (
              <div className="px-0.5 sm:px-1 text-white/30 text-lg sm:text-xl font-bold animate-pulse">:</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
