"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";

export default function Products() {
  const valueStack = [
    { name: "30 min video gidas", value: 97, price: "NEMOKAMAI" },
    { name: "Promptų biblioteka (50+)", value: 47, price: "NEMOKAMAI" },
    { name: "24/7 AI bendruomenė Skool", value: null, price: "ĮSKAIČIUOTA" },
    { name: "Pagalba nuo kūrėjų", value: 97, price: "NEMOKAMAI" },
    { name: "Lifetime prieiga", value: null, price: "NEMOKAMAI" },
  ];

  return (
    <section id="kaina" className="relative py-24 md:py-32 overflow-hidden bg-navy">
      {/* Subtle background noise/grid */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Urgency Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -20px 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-left"
          >
            <p className="text-electric font-bold tracking-wider text-sm uppercase mb-4">
              Kodėl dabar?
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Technologijos keičiasi kasdien.
            </h2>
            <h3 className="text-2xl sm:text-3xl font-semibold text-cloud/80 mb-8">
              Tačiau jums nereikia tapti programuotoju.
            </h3>
            
            <div className="space-y-6 text-lg text-cloud/70 leading-relaxed">
              <p>
                Jums nebūtina sekti kiekvienos naujienos ar mokytis sudėtingų sistemų. Jums trūksta tik vieno, paties brangiausio resurso:
              </p>
              <p className="text-2xl font-bold text-white py-2">
                Laiko verslo augimui.
              </p>
              <p>
                Kai deleguojate savo rutiną dirbtiniam intelektui – viskas pasikeičia. Išauga komandos produktyvumas, pagreitėja klientų aptarnavimas ir jūs pagaliau galite dirbti PRIE verslo, o ne JAME.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -20px 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
          >
            <div className="rounded-[2rem] bg-[#0A0F1E] border border-white/10 p-8 shadow-2xl relative overflow-hidden">
              {/* Card Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

              {/* Card Header (Image + Title) */}
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-[85px] shrink-0 rounded-md overflow-hidden border border-white/10 shadow-lg relative bg-white/5">
                  <img 
                    src="/images/ai-book.png" 
                    alt="AI Asistento Gidas" 
                    className="absolute inset-0 w-full h-full object-cover scale-[1.15]"
                  />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
                    AI Asistento Gidas
                  </h3>
                  <p className="text-cloud/50 text-xs mt-1">
                    Vienkartinis mokėjimas. Prieiga visam laikui.
                  </p>
                </div>
              </div>

              {/* Price section */}
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-6xl font-display font-black text-white">€47</span>
                <span className="text-2xl font-medium text-cloud/40 line-through">€97</span>
                <span className="bg-[#1C3A2C] text-[#4ADE80] text-xs font-bold px-2 py-1 rounded ml-1">
                  -51%
                </span>
              </div>

              {/* Value Stack */}
              <div className="space-y-0 border-y border-white/10 py-4 mb-6">
                {valueStack.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0 group">
                    <div className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-[#4ADE80] shrink-0" />
                      <span className="text-cloud/90 text-sm">{item.name}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      {item.value && (
                        <span className="text-xs text-cloud/40 line-through block sm:hidden">€{item.value}</span>
                      )}
                      <span className={`text-sm font-semibold ${item.price === "ĮSKAIČIUOTA" || item.price === "NEMOKAMAI" ? "text-[#4ADE80]" : "text-cloud/50 line-through hidden sm:block"}`}>
                        {item.price === "ĮSKAIČIUOTA" || item.price === "NEMOKAMAI" ? item.price : `€${item.value}`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Value */}
              <div className="flex justify-between items-center mb-8">
                <span className="text-white font-bold text-sm">Viso vertė:</span>
                <span className="text-cloud/50 font-medium text-sm line-through">€270+</span>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-cloud/60">
                    <strong className="text-white">93</strong>/100 vietų užimta
                  </span>
                  <span className="text-red-400 font-bold animate-pulse">Liko 7</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#ff4d4d] to-[#ff4d4d] rounded-full"
                  />
                </div>
                <p className="text-xs text-center text-cloud/50 mt-3">
                  Po 100 vietų kaina kils iki €97
                </p>
              </div>

              {/* CTA Button */}
              <a
                href="/pirkti?product=ai-assistant"
                className="w-full flex items-center justify-center rounded-xl bg-[#ffb800] hover:bg-[#ffc800] px-8 py-4 text-base font-bold text-black transition-colors shadow-lg"
              >
                GAUTI AI ASISTENTĄ
              </a>

              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-cloud/50">
                <ShieldCheck className="h-3 w-3" />
                14 d. garantija
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
