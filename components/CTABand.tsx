"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function CTABand() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#ffde59" }}
    >
      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Floating decorative orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute left-[10%] top-[20%] h-[200px] w-[200px] rounded-full bg-white/25 blur-[80px]" />
        <div className="animate-float-delay absolute right-[15%] bottom-[20%] h-[250px] w-[250px] rounded-full bg-white/20 blur-[90px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="rounded-3xl bg-navy/10 backdrop-blur-sm border border-navy/15 px-8 py-16 md:px-16 md:py-20 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[200px] w-[400px] rounded-full bg-white/15 blur-[80px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mobile-static relative"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-navy/15 px-4 py-1.5 text-xs font-medium text-navy/80 mb-6 border border-navy/20">
              <Zap className="h-3.5 w-3.5" />
              Nepraleisk progos
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-[1.05] tracking-tight">
              Pradėk savo
              <br />
              <span className="relative inline-block">
                transformaciją
                {/* Scribble circle decoration */}
                <svg
                  className="absolute -inset-[18%] w-[136%] h-[136%] pointer-events-none"
                  viewBox="0 0 800 350"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M253,-161 C253,-161 -284,-201 -376,-21 C-469,163 67,174 256,121 C564,34 250,-141 19,-116"
                    transform="matrix(0.98,0,0,0.98,400,179)"
                    stroke="rgba(10,22,40,0.25)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1"
                    strokeDashoffset="0"
                    pathLength="1"
                  />
                </svg>
              </span>
              <br />
              jau šiandien
            </h2>

            <p className="mt-6 mx-auto max-w-xl text-lg text-navy/60">
              Prisijunkite prie platformos ir gaukite savo AI asistentą jau šiandien. Prieiga prie gido ir visų resursų suteikiama iš karto po apmokėjimo.
            </p>

            <div className="mt-10">
              <a
                href="/pirkti"
                className="group inline-flex items-center gap-3 rounded-2xl bg-navy px-8 py-5 text-base font-bold text-gold transition-all hover:bg-navy/90 hover:shadow-[0_0_40px_rgba(10,22,40,0.4)]"
              >
                PIRKTI DABAR
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
