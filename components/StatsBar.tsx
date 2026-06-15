"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { BarChart3, Users, Zap, TrendingUp } from "lucide-react";

function Counter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2200;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setCount(Math.floor(eased * value));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: Users,
    value: 1600,
    suffix: "+",
    label: "Sekėjų bendruomenė",
    gradient: "from-gold to-gold-dark",
  },
  {
    icon: Zap,
    value: 50,
    suffix: "+",
    label: "Įgyvendinti projektai",
    gradient: "from-electric to-electric-light",
  },
  {
    icon: TrendingUp,
    value: 300,
    suffix: "%",
    label: "Vidutinis ROI padidėjimas",
    gradient: "from-gold to-electric-light",
  },
];

export default function StatsBar() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-electric/[0.08] via-gold/[0.04] to-electric/[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy" />
      </div>

      {/* Animated gradient border lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute left-[15%] top-[30%] h-2 w-2 rounded-full bg-gold/30" />
        <div className="animate-float-delay absolute right-[20%] top-[25%] h-1.5 w-1.5 rounded-full bg-electric-light/40" />
        <div className="animate-float-slow absolute left-[60%] bottom-[30%] h-2.5 w-2.5 rounded-full bg-gold/20" />
        <div className="animate-float absolute right-[35%] bottom-[25%] h-1.5 w-1.5 rounded-full bg-electric/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px 50px 0px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="will-change-transform group flex flex-col items-center text-center rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.12] hover:translate-y-[-4px]"
              >
                <div
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.gradient} shadow-lg transition-transform duration-500 group-hover:scale-110`}
                >
                  <Icon className="h-7 w-7 text-navy" />
                </div>

                <span className="font-display text-5xl md:text-6xl font-bold tracking-tight">
                  <span className="bg-gradient-to-br from-white to-cloud/70 bg-clip-text text-transparent">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                </span>

                <span className="mt-3 text-sm uppercase tracking-[0.15em] text-cloud/45 font-medium">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
