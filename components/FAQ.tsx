"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "Ar reikia programavimo žinių?",
    a: "Ne. Mūsų gidas sukurtas žmonėms be jokio techninio pagrindo. Viskas rodoma žingsnis po žingsnio – nuo pirmųjų paspaudimų iki veikiančio sprendimo.",
  },
  {
    q: "Kiek laiko užtruksiu, kol pamatysiu rezultatą?",
    a: "Dauguma sprendimų sukuriami greičiau nei per valandą. Šis gidas sukurtas intensyviai ir trumpai – sužinosite tik tai, ko reikia praktikai.",
  },
  {
    q: "Ar man reikės mokėti už AI įrankių prenumeratas?",
    a: "Pradžiai pilnai pakanka nemokamų versijų (ChatGPT, Claude ir kt.). Vėliau, kai matysite, jog AI generuoja didžiulę vertę, galėsite nuspręsti dėl mokamų (apie 20€/mėn).",
  },
  {
    q: "O jeigu man nepatiks arba netiks?",
    a: "Mes taikome 100% pinigų grąžinimo garantiją. Jei per 14 dienų nuspręsite, kad gidas nesuteikė žadėtos naudos ir nesutaupė laiko, tiesiog parašykite mums ir grąžinsime visus pinigus. Jūs niekuo nerizikuojate.",
  },
  {
    q: "Ar šis gidas ir promptai tinka darbui lietuvių kalba?",
    a: "Taip! Visi įrankiai ir promptai puikiai veikia su lietuvių kalba. Mūsų gidas pritaikytas būtent Lietuvos rinkai ir vietinio verslo ypatumams.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duk" className="relative py-24 md:py-32 overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-1/2 h-1/3 bg-gold/[0.03] blur-[150px] pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="DUK"
          eyebrowColor="gold"
          title="Dažniausi klausimai"
          align="center"
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px 50px 0px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-colors hover:bg-white/[0.04]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="font-display text-lg font-bold text-white pr-8">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-gold/20 text-gold" : "text-cloud/50"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <div className="px-6 pb-6 text-cloud/70 leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
