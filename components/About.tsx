"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Award, Lightbulb } from "lucide-react";
import Image from "next/image";

const milestones = [
  { value: "5", label: "metų patirties" },
  { value: "1.6M+", label: "socialinių sekėjų" },
  { value: "100+", label: "verslo projektų" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[600px] rounded-full bg-gold/[0.03] blur-[180px]" />
        <div className="absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-electric/[0.04] blur-[140px]" />
      </div>

      {/* Border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Photo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-5"
            style={{ perspective: "1000px" }}
          >
            <div className="relative mx-auto max-w-sm">
              {/* Card glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/10 via-electric/5 to-gold/5 blur-xl" />

              <div className="relative aspect-[4/5] rounded-2xl border border-white/[0.1] bg-gradient-to-br from-electric/15 via-navy to-gold/8 overflow-hidden shadow-2xl">
                {/* Large initial */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-[12rem] font-bold text-white/[0.04] select-none leading-none">
                    Ž
                  </span>
                </div>

                {/* Real Photo */}
                <Image
                  src="https://i.imgur.com/Lqn9dMK.jpg"
                  alt="Žygis"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                />

                {/* Decorative elements */}
                <div className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 ring-1 ring-gold/30">
                  <Star className="h-5 w-5 text-gold" />
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-navy/95 via-navy/70 to-transparent">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-xs text-gold/80 font-medium">
                      Available for projects
                    </span>
                  </div>
                  <p className="font-display text-xl font-bold text-white">
                    Žygis
                  </p>
                  <p className="text-sm text-cloud/60 mt-0.5">
                    Įkūrėjas · DI praktikas
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium text-gold">
              <Award className="h-3 w-3" />
              Apie kūrėją
            </span>

            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              Nuo Excel mentoriaus —{" "}
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                iki DI praktiko.
              </span>
            </h2>

            <p className="mt-6 text-lg text-cloud/65 leading-relaxed">
              Buvęs Excel/PPT mentorius. Dabar — DI praktikas, padedantis
              Lietuvos verslui augti greičiau.
            </p>
            <p className="mt-4 text-cloud/55 leading-relaxed">
              Mano misija — paaiškinti dirbtinį intelektą paprastai, parodyti
              tikrus pavyzdžius ir duoti įrankius, kuriuos galite naudoti
              jau šiandien.
            </p>

            {/* Milestone numbers */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {milestones.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.1]"
                >
                  <p className="font-display text-2xl md:text-3xl font-bold bg-gradient-to-br from-white to-cloud/70 bg-clip-text text-transparent">
                    {value}
                  </p>
                  <p className="text-xs text-cloud/45 mt-1 uppercase tracking-wider">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10"
            >
              <a
                href="#hero"
                className="group inline-flex items-center gap-2 rounded-xl border border-gold/40 bg-gold/5 px-7 py-4 text-sm font-semibold text-gold transition-all hover:bg-gold/10 hover:border-gold/60 hover:shadow-[0_0_30px_rgba(255,222,89,0.12)]"
              >
                Pradėkime kartu
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
