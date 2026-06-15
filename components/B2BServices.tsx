"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, ShieldCheck, Globe2, Cpu, Zap } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "DI Auditas", desc: "Procesų analizė ir galimybių žemėlapis" },
  { icon: Globe2, label: "Svetainių ekosistemos", desc: "Pilnas svetainės kūrimas su AI" },
  { icon: Building2, label: "Automatizacija", desc: "Nuo idėjos iki veikiančio sprendimo" },
];

export default function B2BServices() {
  return (
    <section id="b2b" className="relative py-28 md:py-40 overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-0 h-[500px] w-[500px] rounded-full bg-electric/[0.05] blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-gold/[0.03] blur-[140px]" />
      </div>

      {/* Border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="mobile-static will-change-transform relative mx-auto max-w-6xl rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-white/[0.01] overflow-hidden"
        >
          {/* Inner glow effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/3 h-[300px] w-[400px] rounded-full bg-electric/15 blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 h-[250px] w-[350px] rounded-full bg-gold/8 blur-[100px]" />
          </div>

          <div className="relative p-6 sm:p-10 lg:p-16">
            {/* Top badge */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric/20 to-gold/10 ring-1 ring-white/10 shrink-0">
                <Cpu className="h-4 w-4 sm:h-5 sm:w-5 text-electric-light" />
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-cloud/60 uppercase tracking-[0.2em]">
                B2B · Done-for-you
              </span>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center justify-between">
              <div className="flex-1 w-full">
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                  Reikia pilno
                  <br />
                  <span className="bg-gradient-to-r from-gold to-electric-light bg-clip-text text-transparent">
                    sprendimo
                  </span>{" "}
                  jūsų įmonei?
                </h2>
                <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-cloud/60 leading-relaxed">
                  Nuo DI audito iki pilnos svetainių ekosistemos. Mes
                  suprojektuojame, sukuriame ir įgyvendiname — jūs gaunate
                  rezultatą.
                </p>

                {/* Service cards */}
                <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
                  {items.map(({ icon: Icon, label, desc }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                      className="mobile-static group flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.12]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/20 transition-all group-hover:bg-gold/15 group-hover:ring-gold/35">
                        <Icon className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{label}</p>
                        <p className="text-xs text-cloud/50 mt-0.5">{desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-auto lg:min-w-[300px] flex flex-col items-center lg:items-end gap-6 sm:gap-8 pt-6 lg:pt-0 border-t border-white/10 lg:border-t-0">
                {/* Metric highlight */}
                <div className="text-center lg:text-right">
                  <div className="flex items-center gap-2 justify-center lg:justify-end">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-gold" />
                    <span className="text-[10px] sm:text-xs font-medium text-cloud/50 uppercase tracking-wider">
                      Vidutinis rezultatas
                    </span>
                  </div>
                  <p className="mt-1 sm:mt-2 font-display text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                    3x
                  </p>
                  <p className="text-xs sm:text-sm text-cloud/50 mt-1">
                    greitesnis procesų vykdymas
                  </p>
                </div>

                <a
                  href="mailto:zygis@vibelab.lt"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-[0_0_40px_rgba(255,222,89,0.4)] animate-pulse-glow"
                >
                  Susisiekti
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
