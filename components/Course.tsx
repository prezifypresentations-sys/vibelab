"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  GraduationCap,
  Layers,
  Bot,
  Workflow,
  Check,
  Clock,
  Trophy,
  X,
  Code2,
  Cpu,
} from "lucide-react";

const highlights = [
  { icon: Layers, label: "5 moduliai", desc: "Nuo pagrindų iki automatizacijų" },
  { icon: Bot, label: "Claude Code", desc: "Pagrindinis įrankis" },
  { icon: Workflow, label: "Realūs projektai", desc: "Praktinis mokymasis" },
  { icon: GraduationCap, label: "Sertifikatas", desc: "Po kurso pabaigos" },
];

const modules = [
  {
    title: "DI pagrindai verslui",
    desc: "Suprasite, kaip AI keičia verslo procesus ir kaip pradėti efektyviai.",
  },
  {
    title: "Claude Code: nuo nulio",
    desc: "Maksimalus įrankio įvaldymas — nuo paprastų užduočių iki sudėtingo kodo.",
  },
  {
    title: "Svetainių kūrimas su AI",
    desc: "Sukurkite profesionalią svetainę per kelias valandas naudojant DI.",
  },
  {
    title: "AI agentų kūrimas",
    desc: "Išmoksite kurti autonominius agentus, kurie dirba už jus 24/7.",
  },
  {
    title: "Procesų automatizacija",
    desc: "Sujunkite AI su savo kasdieniais įrankiais ir automatizuokite rutiną.",
  },
];

export default function Course() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="course" className="relative py-28 md:py-40 overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[600px] w-[600px] rounded-full bg-electric/[0.05] blur-[180px]" />
        <div className="absolute -left-20 bottom-1/4 h-[400px] w-[400px] rounded-full bg-gold/[0.04] blur-[140px]" />
      </div>

      {/* Top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px 50px 0px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="will-change-transform lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-xs font-medium text-electric-light">
              <Clock className="h-3 w-3" />
              Prieiga iškart po apmokėjimo
            </span>

            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              Kursas:{" "}
              <span className="bg-gradient-to-r from-electric-light via-gold to-gold-light bg-clip-text text-transparent">
                AI Verslui 2026
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg text-cloud/65 leading-relaxed">
              5 intensyvūs moduliai, sukurti padėti jums įvaldyti{" "}
              <span className="text-white font-medium">Claude Code</span> ir
              pradėti kurti AI sprendimus savo verslui jau šiandien.
            </p>

            {/* Highlight grid */}
            <div className="mt-10 grid grid-cols-2 gap-4 max-w-lg">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "0px 0px 50px 0px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3.5 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/15"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-electric/10">
                    <Icon className="h-4 w-4 text-electric-light" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{label}</p>
                    <p className="text-xs text-cloud/50 mt-0.5">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#kursai"
                className="group inline-flex items-center gap-2 rounded-xl bg-gold px-7 py-4 text-sm font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-[0_0_30px_rgba(255,222,89,0.3)]"
              >
                Pirkti dabar
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-cloud/80 transition-all hover:bg-white/[0.06] hover:text-white"
              >
                Peržiūrėti programą
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Right: Module card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px 50px 0px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="will-change-transform lg:col-span-5"
            style={{ perspective: "1000px" }}
          >
            <div className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-8 backdrop-blur-sm overflow-hidden">
              {/* Decorative glows */}
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-electric/25 blur-[80px]" />
              <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-gold/12 blur-[80px]" />

              {/* Trophy badge */}
              <div className="relative flex items-center gap-3 mb-8 pb-6 border-b border-white/[0.06]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-electric/20 ring-1 ring-white/10">
                  <Trophy className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-white uppercase tracking-wider">
                    Modulių apžvalga
                  </p>
                  <p className="text-xs text-cloud/50 mt-0.5">
                    5 praktiniai moduliai
                  </p>
                </div>
              </div>

              {/* Module list */}
              <ul className="relative space-y-4">
                {modules.map((item, i) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "0px 0px 50px 0px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex items-center gap-3 text-cloud/80 group/item"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-xs font-bold text-gold ring-1 ring-gold/20 transition-all group-hover/item:bg-gold/20 group-hover/item:ring-gold/40">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm transition-colors group-hover/item:text-white">
                      {item.title}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Program Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-navy/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-navy shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-8 py-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Kurso programa
                  </h3>
                  <p className="text-sm text-cloud/50 mt-1">
                    5 intensyvūs moduliai jūsų AI transformacijai
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full bg-white/5 p-2 text-cloud/60 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="max-h-[60vh] overflow-y-auto p-8 custom-scrollbar">
                <div className="space-y-8">
                  {modules.map((module, i) => (
                    <div key={module.title} className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-sm font-bold text-gold ring-1 ring-gold/20">
                          {i + 1}
                        </div>
                        {i !== modules.length - 1 && (
                          <div className="mt-2 w-px flex-1 bg-gradient-to-b from-gold/20 to-transparent" />
                        )}
                      </div>
                      <div className="pb-4">
                        <h4 className="font-display text-lg font-bold text-white">
                          {module.title}
                        </h4>
                        <p className="mt-2 text-cloud/60 leading-relaxed">
                          {module.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 rounded-2xl bg-gold/5 border border-gold/10 p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-gold/10 p-3">
                      <Cpu className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h5 className="font-bold text-white">Bonusas: AI Įrankių rinkinys</h5>
                      <p className="mt-1 text-sm text-cloud/60">
                        Visiems kurso dalyviams suteikiama prieiga prie paruoštų promptų bibliotekos ir automatizacijų šablonų.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="border-t border-white/5 bg-white/[0.02] px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-cloud/50 text-center sm:text-left">
                  Esate pasiruošę pradėti? Pasirinkite jums tinkamiausią planą.
                </p>
                <a
                  href="#kursai"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-bold text-navy transition-all hover:bg-gold-light"
                >
                  Pirkti dabar
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
