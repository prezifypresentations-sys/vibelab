"use client";

import { motion } from "framer-motion";
import { Briefcase, Smartphone, Rocket, FileText, Users, Lightbulb } from "lucide-react";
import SectionHeading from "./SectionHeading";

const profiles = [
  {
    icon: Briefcase,
    title: "Verslininkas",
    desc: "Nori automatizuoti kasdieninius darbus ir spėti nuveikti daugiau, kad galėtų augti.",
  },
  {
    icon: Smartphone,
    title: "Marketingistas",
    desc: "Reklamos, turinys, socialiniai tinklai. Viskas vyksta 10x greičiau su AI.",
  },
  {
    icon: Rocket,
    title: "Freelanceris",
    desc: "Nori spėti padaryti daugiau per tą patį laiką ir atitinkamai uždirbti daugiau.",
  },
  {
    icon: FileText,
    title: "Biuro darbuotojas",
    desc: "Dokumentai, laiškai, ataskaitos. Pavargo nuo rutinos ir nori dirbti protingiau.",
  },
  {
    icon: Users,
    title: "Komandos vadovas",
    desc: "Nori efektyvinti procesus komandoje ir priimti sprendimus greičiau.",
  },
  {
    icon: Lightbulb,
    title: "Startuolio kūrėjas",
    desc: "Nori kurti projektą, bet neturi didelės komandos. AI ją visiškai pakeičia.",
  },
];

export default function WhoIsThisFor() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-navy">
      {/* Subtle border top */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/[0.03]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Kam skirta platforma?"
          eyebrowColor="gold"
          title="Ar atpažįsti save?"
          subtitle="Jei bent vienas punktas skamba kaip jūs, šis asistentas pakeis jūsų darbo eigą visam laikui."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {profiles.map((profile, i) => {
            const Icon = profile.icon;
            return (
              <motion.div
                key={profile.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="mobile-static group flex flex-col items-center rounded-2xl border border-white/[0.05] bg-white/[0.02] p-8 text-center transition-all hover:bg-white/[0.04] hover:border-white/10"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-8 w-8" />
                </div>
                <h4 className="mb-2 font-display text-xl font-bold text-white">
                  {profile.title}
                </h4>
                <p className="text-sm text-cloud/60 leading-relaxed">
                  {profile.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mobile-static mt-20 mx-auto max-w-4xl rounded-3xl border border-green-500/20 bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10 p-8 md:p-12 text-center relative overflow-hidden backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
          <h3 className="font-display text-3xl font-bold text-green-400 mb-4">
            100% Pinigų grąžinimo garantija
          </h3>
          <p className="text-lg text-cloud/80 max-w-2xl mx-auto mb-4">
            Pabandyk 14 dienų. Jei per šį laiką AI asistentas nesutaupo tau bent 1 valandos per dieną — parašyk mums ir grąžinsime 100% sumos. Be jokių klausimų, be jokių sąlygų.
          </p>
          <p className="text-white font-bold">Rizikuojame mes, o ne jūs.</p>
        </motion.div>
      </div>
    </section>
  );
}
