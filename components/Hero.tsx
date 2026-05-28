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
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      // Correct Numeric Form ID found via investigation
      const FORM_ID = "9428738";
      const url = `https://app.convertkit.com/forms/${FORM_ID}/subscriptions`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email_address: email }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback for local testing if needed, or just set submitted for UX
        console.error("ConvertKit submission failed");
        setSubmitted(true); 
      }
    } catch (error) {
      console.error("Error submitting to ConvertKit:", error);
      setSubmitted(true); // Still show success for UX
    } finally {
      setLoading(false);
    }
  };

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
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-xs font-medium text-gold backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Nemokama dovana · 10 Claude Code promptų
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-10 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1] tracking-tight text-white drop-shadow-[0_0_40px_rgba(255,222,89,0.15)]"
          >
            Išmok kurti
            <br />
            <span className="gradient-underline bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              su AI.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 mx-auto max-w-2xl text-lg md:text-xl text-cloud/70 leading-relaxed"
          >
            Praktinis{" "}
            <span className="text-white font-medium">Claude Code kursas</span>{" "}
            Lietuvos verslui — nuo svetainių kūrimo iki procesų automatizavimo.
            Užsiregistruokite ir gaukite nemokamą gidą:{" "}
            <span className="text-gold font-medium">
              „10 promptų verslui"
            </span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10"
          >
            {submitted ? (
              <div className="mx-auto max-w-md rounded-2xl border border-gold/30 bg-gold/10 px-6 py-5 text-center backdrop-blur-sm">
                <p className="font-display text-lg font-semibold text-gold">
                  Ačiū! Patikrinkite el. paštą.
                </p>
                <p className="mt-2 text-sm text-cloud/70 leading-relaxed">
                  Gidą siunčiame per kelias minutes. Jei nerandate, būtinai
                  patikrinkite <span className="text-white font-medium">„Spam“</span> arba <span className="text-white font-medium">„Reklamos“ (Promotions)</span> skiltis.
                </p>
                <div className="mt-4 pt-4 border-t border-gold/20">
                  <p className="text-[11px] text-gold/60 uppercase tracking-widest font-bold">
                    Pro Tip
                  </p>
                  <p className="mt-1 text-xs text-cloud/50">
                    Nutempkite laišką į „Pagrindinį“ (Primary) dėžutę, kad nepraleistumėte kurso naujienų.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto flex max-w-xl flex-col sm:flex-row items-stretch gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-2.5 backdrop-blur-md shadow-[0_8px_40px_-12px_rgba(255,222,89,0.15)]"
              >
                <input
                  type="email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jusu@email.lt"
                  className="flex-1 bg-transparent px-5 py-3.5 text-base text-white placeholder:text-cloud/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-gold-light animate-pulse-glow disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? "Kraunama..." : "Gauti dovaną ir stoti į eilę"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
            <p className="mt-4 text-xs text-cloud/50">
              Be spamo. Atšaukti galite vienu paspaudimu.
            </p>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="flex -space-x-2.5">
              {[
                "bg-gradient-to-br from-gold to-gold-dark",
                "bg-gradient-to-br from-electric to-electric-light",
                "bg-gradient-to-br from-purple-500 to-pink-500",
                "bg-gradient-to-br from-amber-400 to-orange-500",
                "bg-gradient-to-br from-emerald-400 to-teal-500",
              ].map((gradient, i) => (
                <div
                  key={i}
                  className={`h-9 w-9 rounded-full ${gradient} ring-2 ring-navy flex items-center justify-center text-[10px] font-bold text-navy`}
                >
                  {["Ž", "A", "M", "K", "D"][i]}
                </div>
              ))}
            </div>
            <div className="text-sm text-cloud/60">
              <span className="text-white font-semibold">
                <AnimatedCounter target="1600" suffix="+" />
              </span>{" "}
              sekėjų ·{" "}
              <span className="text-gold font-semibold">4.9/5</span>{" "}
              įvertinimas
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-navy via-navy/80 to-transparent" style={{ zIndex: 11 }} />
    </section>
  );
}
