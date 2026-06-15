"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  eyebrowColor?: "gold" | "electric";
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  eyebrowColor = "electric",
  title,
  subtitle,
  align = "center",
}: Props) {
  const eyebrowClasses =
    eyebrowColor === "gold"
      ? "border-gold/30 bg-gold/10 text-gold"
      : "border-electric/30 bg-electric/10 text-electric-light";

  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 50px 0px" }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${eyebrowClasses}`}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px 50px 0px" }}
        transition={{ duration: 0.6}}
        className="will-change-transform mt-5 font-display text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 50px 0px" }}
          transition={{ duration: 0.6}}
          className={`mt-5 text-lg text-cloud/70 leading-relaxed ${
            align === "center" ? "mx-auto max-w-2xl" : ""
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
