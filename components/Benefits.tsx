"use client";

import { motion } from "framer-motion";
import { MessageSquare, Target, Settings, PieChart, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const pillars = [
  {
    icon: MessageSquare,
    title: "Komunikacija",
    color: "electric",
    items: [
      "Perskaito ilgus laiškus ir pateikia tik esmę",
      "Atsako klientams jūsų asmeniniu stiliumi",
      "Palaiko ryšį net naktį, kol jūs miegate",
      "Valdo visą klientų aptarnavimo procesą",
    ],
  },
  {
    icon: Target,
    title: "Strategija",
    color: "gold",
    items: [
      "Suplanuoja visą savaitę ir saugo jūsų fokusą",
      "Parengia rinkodaros strategiją su veiksmų planu",
      "Iš vieno sakinio sukuria pilną komercinį pasiūlymą",
      "Analizuoja konkurentų veiksmus ir siūlo sprendimus",
    ],
  },
  {
    icon: Settings,
    title: "Automatizavimas",
    color: "electric",
    items: [
      "Sukuria pilną svetainę tiesiog iš teksto aprašymo",
      "Generuoja sąskaitas faktūras ir jas išsiunčia",
      "Paruošia prezentacijas iš šimtų puslapių per minutę",
      "Sujungia jūsų kasdienius įrankius bendram darbui",
    ],
  },
  {
    icon: PieChart,
    title: "Analitika",
    color: "gold",
    items: [
      "Atlieka rinkos tyrimą, kuris paprastai užtruktų dienas",
      "Išanalizuoja šimtus atsiliepimų ir randą dėsningumus",
      "Seka naujienas jūsų srityje ir siunčia santraukas",
      "Surenka viską apie klientą iš laiškų ir failų",
    ],
  },
];

export default function Benefits() {
  return (
    <section id="nauda" className="relative py-28 md:py-40 overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-electric/[0.03] blur-[150px] pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="4 praktinės sritys"
          eyebrowColor="electric"
          title="Ką konkrečiai AI padarys už tave?"
          subtitle="Pamirškite abstrakčias teorijas. Štai kaip AI perims jūsų kasdienę rutiną ir leis susitelkti į augimą."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isGold = pillar.color === "gold";
            
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -20px 0px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10 backdrop-blur-sm transition-all hover:bg-white/[0.04]"
              >
                {/* Header */}
                <div className="flex items-center gap-5 mb-8 pb-8 border-b border-white/[0.08]">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-colors ${
                      isGold
                        ? "bg-gold/10 text-gold group-hover:bg-gold/20"
                        : "bg-electric/10 text-electric-light group-hover:bg-electric/20"
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* List items */}
                <ul className="space-y-4">
                  {pillar.items.map((item, itemIdx) => (
                    <motion.li
                      key={itemIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "0px 0px -20px 0px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        className={`h-5 w-5 shrink-0 mt-0.5 ${
                          isGold ? "text-gold/80" : "text-electric-light/80"
                        }`}
                      />
                      <span className="text-cloud/80 leading-relaxed text-sm md:text-base">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
