"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Tai vertingiausia šių metų investicija — mokymų metu įsisavintą informaciją kolegos pradėjo taikyti iš karto.",
    name: "Laura K.",
    role: "Marketingo vadovė",
    company: "TechStart LT",
    initials: "LK",
    gradient: "from-gold to-gold-dark",
  },
  {
    quote:
      "Po trumpų konsultacijų turim sprendinį, kuris leidžia nepamesti užsakymų ir automatiškai siųsti priminimus. Puiku!",
    name: "Mantas J.",
    role: "CEO",
    company: "Easy Solutions",
    initials: "MJ",
    gradient: "from-electric to-electric-light",
  },
  {
    quote:
      "Mokymų metu lektorius prieš mokymus skyrė laiko įvertinti komandos žinių lygį ir suprasti darbo pobūdį. Labai vertinu.",
    name: "Linas P.",
    role: "Direktorius",
    company: "Baltic Digital",
    initials: "LP",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    quote:
      "Likome sužavėti — ne tik išmokome apie AI, bet ir pritaikėme įvairius įrankius savo verslo procesuose, kas sutaupė laiko ir kaštų.",
    name: "Edvinas Ž.",
    role: "Įkūrėjas",
    company: "Trade Group",
    initials: "EŽ",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    quote:
      "Wow — pačio aukščiausio lygio mokymai. Realiai davė visiškai naują supratimą, kaip naudoti ne tik ChatGPT, bet ir kitus AI įrankius.",
    name: "Gediminas K.",
    role: "Vadovas",
    company: "Innovation Hub",
    initials: "GK",
    gradient: "from-cyan-400 to-blue-500",
  },
];

function AnimatedCounter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target * 10) / 10);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{count.toFixed(1)}</span>;
}

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-36 border-t border-white/5 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-electric/[0.06] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px 50px 0px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold"
          >
            Atsiliepimai
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px 50px 0px" }}
            transition={{ duration: 0.6}}
            className="will-change-transform mt-5 font-display text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Klientų{" "}
            <span className="gradient-underline bg-gradient-to-r from-gold to-electric-light bg-clip-text text-transparent">
              atsiliepimai
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px 50px 0px" }}
            transition={{ duration: 0.5}}
            className="will-change-transform mt-4 flex items-center justify-center gap-3"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-lg font-semibold text-white">
              <AnimatedCounter target={4.9} />
            </span>
            <span className="text-sm text-cloud/50">iš 5</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px 50px 0px" }}
          transition={{ duration: 0.6}}
          className="mt-14 -mx-6 px-6 overflow-x-auto hide-scrollbar"
        >
          <div className="flex gap-5 pb-4" style={{ width: "max-content" }}>
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px 50px 0px" }}
                transition={{ duration: 0.5}}
                className="gradient-border-card w-[340px] sm:w-[380px] flex-shrink-0 p-7 transition-all duration-300 hover:bg-white/[0.06] hover:translate-y-[-4px]"
              >
                <span className="font-display text-5xl font-bold leading-none bg-gradient-to-br from-gold/40 to-electric/40 bg-clip-text text-transparent select-none">
                  &ldquo;
                </span>

                <p className="mt-2 text-cloud/80 leading-relaxed text-sm">
                  {t.quote}
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                  <div
                    className={`h-10 w-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-xs font-bold text-navy ring-2 ring-white/10`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-cloud/50">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
