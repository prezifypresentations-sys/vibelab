"use client";

import { motion } from "framer-motion";
import { ArrowRight, Video, CheckCircle2, Calendar } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

export default function LiveWorkshop() {
  const handleCheckout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    
    const stripeUrl = new URL("https://buy.stripe.com/dRm8wH6kD0rZ6UH8SvcIE00");
    if (email) {
      stripeUrl.searchParams.set("prefilled_email", email);
    }
    window.location.href = stripeUrl.toString();
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-navy">
      {/* Top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[10%] top-[10%] h-[300px] w-[300px] rounded-full bg-electric/[0.05] blur-[120px]" />
        <div className="absolute left-[5%] bottom-[10%] h-[250px] w-[250px] rounded-full bg-gold/[0.04] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="gradient-border-card bg-white/[0.02] backdrop-blur-sm p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium text-gold shadow-[0_0_12px_rgba(255,222,89,0.15)]">
                <Video className="h-3.5 w-3.5" />
                Gyvos dirbtuvės
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-xs font-medium text-electric-light shadow-[0_0_12px_rgba(11,95,255,0.15)]">
                <Calendar className="h-3.5 w-3.5" />
                2026-06-03 19:00
              </div>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Sukurkime svetainę kartu su <span className="text-gold gradient-underline drop-shadow-[0_0_12px_rgba(255,222,89,0.3)]">AI.</span>
            </h2>

            <p className="mt-6 text-lg text-cloud/70 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              3 valandų praktinės live dirbtuvės. Naudosime pažangiausius AI kodavimo įrankius, 
              tokius kaip <span className="text-white font-medium">Antigravity</span>, 
              kad pastatytume ir paleistume veikiančią svetainę nuo nulio.
            </p>

            <div className="mt-8 flex flex-col gap-4 text-left mx-auto lg:mx-0 max-w-md">
              {[
                "Ateisite be svetainės – išeisite su veikiančia svetaine",
                "Pažangių AI įrankių praktinis naudojimas",
                "Domeno pajungimas, dizainas ir SEO pagrindai",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-cloud/80 text-base">{item}</span>
                </div>
              ))}
            </div>

            <CountdownTimer className="mt-8 mx-auto lg:mx-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full max-w-sm rounded-3xl border border-white/10 bg-navy/80 p-6 sm:p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-cloud/50 mb-3">
                Dirbtuvių Kaina
              </p>
              
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-2xl font-medium text-cloud/40 line-through decoration-red-500/50">
                  89 €
                </span>
                <span className="font-display text-6xl font-bold text-white drop-shadow-[0_2px_24px_rgba(255,255,255,0.2)]">
                  59 €
                </span>
              </div>
              
              <div className="inline-flex items-center rounded-full bg-electric/20 px-3 py-1 text-xs font-medium text-electric-light mb-8">
                Išankstinė kaina
              </div>

              <form onSubmit={handleCheckout} className="w-full flex flex-col gap-3">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jūsų vardas"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:bg-white/10 focus:border-gold/50 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="El. paštas"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:bg-white/10 focus:border-gold/50 transition-all"
                />
                <button
                  type="submit"
                  className="group mt-2 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#ffde59] px-8 py-4 text-sm font-bold text-navy transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(255,222,89,0.3)] btn-pulse"
                >
                  TĘSTI Į MOKĖJIMĄ
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
