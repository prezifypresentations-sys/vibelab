"use client";

import { ArrowRight, Star, Award, Lightbulb } from "lucide-react";
import Image from "next/image";

const milestones = [
  { value: "5", label: "metų patirties" },
  { value: "1.6M+", label: "socialinių sekėjų" },
  { value: "100+", label: "verslo projektų" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[600px] rounded-full bg-gold/[0.03] blur-[180px]" />
        <div className="absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-electric/[0.04] blur-[140px]" />
      </div>

      {/* Border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Photo card */}
          <div
            className="animate-on-scroll will-change-transform lg:col-span-5"
            style={{ perspective: "1000px" }}
          >
            <div className="relative mx-auto max-w-sm">
              {/* Card glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/10 via-electric/5 to-gold/5 blur-xl" />

              <div className="relative aspect-[4/5] rounded-2xl border border-white/[0.1] bg-gradient-to-br from-electric/15 via-navy to-gold/8 overflow-hidden shadow-2xl">
                {/* Large initial */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-[12rem] font-bold text-white/[0.04] select-none leading-none">
                    Ž
                  </span>
                </div>

                {/* Real Photo */}
                <Image
                  src="https://i.imgur.com/Lqn9dMK.jpg"
                  alt="Žygis"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                />

                {/* Decorative elements */}
                <div className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 ring-1 ring-gold/30">
                  <Star className="h-5 w-5 text-gold" />
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-navy/95 via-navy/70 to-transparent">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-xs text-gold/80 font-medium">
                      Available for projects
                    </span>
                  </div>
                  <p className="font-display text-xl font-bold text-white">
                    Žygis
                  </p>
                  <p className="text-sm text-cloud/60 mt-0.5">
                    Įkūrėjas · DI praktikas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div
            className="animate-on-scroll will-change-transform lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium text-gold">
              <Award className="h-3 w-3" />
              Kodėl sukūriau šį gidą?
            </span>

            <h2 className="mt-6 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              Kol kiti tik kalba, kiti jau dirba.
            </h2>

            <div className="mt-8 space-y-5 text-cloud/70 leading-relaxed text-base md:text-lg">
              <p>
                Dar visai neseniai rutinoms ir ataskaitoms sugaišdavau visą dieną. Kol visko nepakeitė dirbtinis intelektas. Susikūriau asistentą, kuris dabar valdo projektus, analizuoja duomenis ir ruošia ataskaitas. <strong>Dirba 24/7 ir nepavargsta.</strong>
              </p>
              <p>
                Lietuvoje visi kalba apie AI, bet trūksta praktikos. Niekas neparodo: „Štai, spausk čia ir daryk taip“.
              </p>
              <p className="font-semibold text-white">
                Todėl sukūriau šį gidą. 30 minučių, ir jūs turite veikiantį asistentą. Be programavimo.
              </p>
            </div>

            {/* CTA */}
            <div className="animate-on-scroll"
            >
              <div className="mt-8 border-t border-white/5 pt-8">
                <p className="text-cloud/80 mb-6 font-medium">Būtent todėl sukūriau šį gidą – kad Jums nereikėtų klysti ten, kur klydau aš.</p>
                <a
                  href="#kaina"
                  className="group inline-flex items-center gap-3 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-navy transition-all hover:bg-gold-light hover:shadow-[0_0_20px_rgba(255,222,89,0.3)] w-full sm:w-auto justify-center"
                >
                  Gauti AI Asistentą
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
