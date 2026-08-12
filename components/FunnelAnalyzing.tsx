"use client";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const STEPS = [
  "Analizuojami jūsų atsakymai...",
  "Vertinamas monetizacijos potencialas...",
  "Ieškoma geriausių AI strategijų jūsų situacijai...",
  "Kuriama asmeninė rekomendacija...",
  "Beveik baigta!"
];

export default function FunnelAnalyzing() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(prev => {
        if (prev < STEPS.length - 1) return prev + 1;
        return prev;
      });
    }, 500); // changes text every 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto px-6 flex flex-col items-center justify-center text-center min-h-[400px]">
      
      <div className="relative mb-8">
        {/* Outer glow */}
        <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full" />
        
        {/* Spinner */}
        <div className="relative bg-navy-light/80 p-6 rounded-full border border-gold/20 backdrop-blur-sm">
          <Loader2 className="h-12 w-12 text-gold animate-spin" />
        </div>
      </div>

      <h2 className="text-2xl font-display font-bold text-white mb-2">
        Generuojamas sprendimas
      </h2>
      
      <div className="h-6">
        <p className="text-cloud/70 text-sm animate-pulse">
          {STEPS[currentTextIndex]}
        </p>
      </div>

    </div>
  );
}
