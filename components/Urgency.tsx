"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Briefcase, Zap } from "lucide-react";
import SectionHeading from "./SectionHeading";

const stats = [
  {
    icon: Users,
    value: "1.5 mlrd.",
    label: "AI naudotojų pasaulyje",
    desc: "15x augimas vos per 2 metus",
  },
  {
    icon: Briefcase,
    value: "300M",
    label: "Darbo vietų keičiasi",
    desc: "AI tampa ne privalumu, o būtinybe",
  },
  {
    icon: Zap,
    value: "70%",
    label: "Automatizuota rutina",
    desc: "Vienas žmogus daro 5 žmonių darbą",
  },
];

export default function Urgency() {
  return (
    <section className="relative py-24 overflow-hidden border-y border-white/5 bg-navy">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-1/2 bg-gradient-to-r from-gold/[0.03] to-transparent blur-[120px] pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Kodėl dabar?"
          eyebrowColor="gold"
          title="Kol tu galvoji, atotrūkis auga"
          subtitle="Kiekvieną dieną, kai nenaudoji AI, atsilieki šiek tiek labiau. Konkurentai jau automatizuoja procesus ir taupo valandas kasdien."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 text-center transition-all hover:bg-white/[0.04]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 ring-1 ring-gold/20 mb-6">
                  <Icon className="h-7 w-7 text-gold" />
                </div>
                <h4 className="font-display text-4xl font-bold text-white mb-2">
                  {stat.value}
                </h4>
                <p className="font-semibold text-cloud mb-1">{stat.label}</p>
                <p className="text-sm text-cloud/50">{stat.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-16 rounded-3xl border border-gold/10 bg-gradient-to-br from-gold/[0.05] to-transparent p-8 md:p-12 text-center"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 mb-6">
            <TrendingUp className="h-6 w-6 text-gold" />
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Dabar geriausias laikas pradėti
          </h3>
          <p className="text-lg text-cloud/70 max-w-2xl mx-auto">
            Kas pradeda vėliau, praleidžia tai, ko nebepavys. Nepraleiskite šios revoliucijos – įvaldykite įrankius, kol jie dar kuria nesąžiningą pranašumą rinkoje.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
