"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "TechCorp", letters: "TC" },
  { name: "InnoLab", letters: "IL" },
  { name: "DataFlow", letters: "DF" },
  { name: "CloudVis", letters: "CV" },
  { name: "SmartOps", letters: "SO" },
  { name: "NeuralNet", letters: "NN" },
];

export default function LogoCloud() {
  return (
    <section className="relative py-16 md:py-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center text-sm uppercase tracking-[0.2em] text-cloud/40 font-medium"
        >
          Mumis pasitiki pirmaujančios įmonės
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-8 items-center"
        >
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grayscale-hover flex flex-col items-center justify-center gap-2 py-4 cursor-default"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10">
                <span className="font-display text-lg font-bold text-cloud/60">
                  {logo.letters}
                </span>
              </div>
              <span className="text-[11px] text-cloud/30 font-medium tracking-wider uppercase">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
