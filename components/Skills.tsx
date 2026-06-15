"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Bot,
  Workflow,
  Code2,
  BarChart3,
  Lightbulb,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const skills = [
  {
    icon: Globe,
    title: "Svetainių kūrimas",
    body: "Sukurkite profesionalią svetainę su AI per kelias valandas, ne savaites.",
    accent: "gold",
  },
  {
    icon: Bot,
    title: "Claude Code valdymas",
    body: "Išmoksite dirbti su galingiausiu AI kodavimo įrankiu — nuo promptų iki projektų.",
    accent: "electric",
  },
  {
    icon: Workflow,
    title: "Procesų automatizacija",
    body: "Automatizuokite pasikartojančias užduotis ir sutaupykite dešimtis valandų per mėnesį.",
    accent: "gold",
  },
  {
    icon: Code2,
    title: "AI agentų kūrimas",
    body: "Sukurkite autonominius agentus, kurie dirba už jus — 24/7.",
    accent: "electric",
  },
  {
    icon: BarChart3,
    title: "Duomenų analizė",
    body: "Naudokite AI kaip savo analitikos komandą — greiti sprendimai, tikslūs duomenys.",
    accent: "gold",
  },
  {
    icon: Lightbulb,
    title: "AI strategija verslui",
    body: "Supraskite, kur AI duoda didžiausią grąžą būtent jūsų versle.",
    accent: "electric",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] },
  }),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 md:py-40 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[800px] w-[1200px] rounded-full bg-electric/[0.04] blur-[160px]" />
        <div className="absolute -left-40 bottom-20 h-[400px] w-[400px] rounded-full bg-gold/[0.03] blur-[120px]" />
      </div>

      {/* Top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Kursas · Ką išmoksite"
          eyebrowColor="gold"
          title="Praktiniai AI įgūdžiai"
          subtitle="Ne teorija — konkretūs įgūdžiai, kuriuos pritaikysite savo versle iš karto po kurso."
        />

        {/* Skills grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            const isGold = skill.accent === "gold";
            return (
              <motion.div
                key={skill.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px 50px 0px" }}
                variants={cardVariants}
                className="will-change-transform group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.06] hover:translate-y-[-4px] hover:shadow-[0_16px_50px_-12px_rgba(255,222,89,0.1)]"
              >
                {/* Top gradient line on hover */}
                <div
                  className={`absolute inset-x-0 top-0 h-[2px] rounded-t-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${
                    isGold
                      ? "bg-gradient-to-r from-transparent via-gold/60 to-transparent"
                      : "bg-gradient-to-r from-transparent via-electric/60 to-transparent"
                  }`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-500 ${
                    isGold
                      ? "bg-gold/10 ring-1 ring-gold/25 group-hover:bg-gold/15 group-hover:ring-gold/40"
                      : "bg-electric/10 ring-1 ring-electric/25 group-hover:bg-electric/15 group-hover:ring-electric/40"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 ${
                      isGold ? "text-gold" : "text-electric-light"
                    }`}
                  />
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {skill.title}
                </h3>
                <p className="mt-2 text-sm text-cloud/55 leading-relaxed">
                  {skill.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
