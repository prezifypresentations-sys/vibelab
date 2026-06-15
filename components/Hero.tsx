"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// Load canvas without SSR (needs window/document)
const NeuralCanvas = dynamic(() => import("./NeuralCanvas"), { ssr: false });

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const num = parseInt(target.replace(/\D/g, ""));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * num));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [num]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 md:pt-0 md:pb-0"
    >
      {/* ═══════════════════════════════════════════
          NEURAL NETWORK CANVAS (interactive)
          ═══════════════════════════════════════════ */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        <NeuralCanvas />
      </div>

      {/* ═══════════════════════════════════════════
          VIDEO BACKGROUND (behind canvas)
          ═══════════════════════════════════════════ */}
      <div className="pointer-events-none absolute inset-0" style={{ zIndex: 1 }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-bg.png"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: 0.15 }}
          aria-hidden="true"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <track kind="captions" />
        </video>
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      {/* Noise overlay */}
      <div className="pointer-events-none absolute inset-0 noise-overlay opacity-30" style={{ zIndex: 3 }} />

      {/* ═══════════════════════════════════════════
          HERO CONTENT
          ═══════════════════════════════════════════ */}
      <div className="relative mx-auto max-w-7xl px-6 w-full" style={{ zIndex: 10 }}>
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-xs font-medium text-gold backdrop-blur-sm mb-6"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Pirmieji Lietuvoje pristatome pilną sprendimą
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-[0_0_40px_rgba(255,222,89,0.15)]"
          >
            Sukūrėme AI asistentą,
            <br className="hidden sm:block" />{" "}
            <span className="relative inline-block mt-1 sm:mt-0">
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                kuris dirba vietoje tavęs.
              </span>
              {/* Shorter, centered underline with fading edges */}
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-70" 
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 mx-auto max-w-2xl text-lg md:text-xl text-cloud/80 leading-relaxed"
          >
            Jis atsako į laiškus, kuria prezentacijas, analizuoja duomenis, konstruoja svetaines ir planuoja tavo savaitę. Viskas be kodavimo žinių.{" "}
            <span className="text-white font-medium block mt-2">Dabar atiduodame jį tau. Sutaupyk bent 2 valandas kiekvieną dieną.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 flex flex-col items-center justify-center gap-4"
          >
            <a
              href="#kaina"
              className="group w-full max-w-sm inline-flex items-center justify-center gap-3 rounded-xl bg-gold px-8 py-5 text-lg font-black text-navy transition-all hover:bg-gold-light hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,222,89,0.5)]"
            >
              GAUTI AI ASISTENTĄ
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium text-cloud/60">
              <span>€47</span>
              <span>·</span>
              <span>Vienkartinis mokėjimas</span>
              <span>·</span>
              <span className="text-green-400">14 dienų pinigų grąžinimo garantija</span>
            </div>
          </motion.div>

          {/* Removed redundant highlights grid to keep hero clean and focused */}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-navy via-navy/80 to-transparent" style={{ zIndex: 11 }} />
    </section>
  );
}
