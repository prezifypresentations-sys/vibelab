"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Video, X, Calendar } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

export default function WorkshopPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only show once per session
    const hasSeenPopup = sessionStorage.getItem("hasSeenWorkshopPopup");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenWorkshopPopup", "true");
      }, 5000); // 5 seconds delay

      return () => clearTimeout(timer);
    }
  }, []);

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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 py-12 sm:py-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-navy/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-md rounded-3xl border border-white/10 bg-navy p-6 sm:p-8 shadow-[0_0_80px_rgba(11,95,255,0.15)] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white z-20"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-electric/5 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold">
                  <Video className="h-3 w-3" />
                  Gyvos Dirbtuvės per Zoom
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-electric-light">
                  <Calendar className="h-3 w-3" />
                  2026-06-17 19:00
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-red-400">
                  Vietų skaičius ribotas
                </div>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight mb-3">
                Ateisite be svetainės – <br />
                <span className="text-gold drop-shadow-[0_0_12px_rgba(255,222,89,0.3)]">išeisite su veikiančia.</span>
              </h3>

              <p className="text-sm text-cloud/70 mb-6 max-w-xs">
                3 valandų praktinės live dirbtuvės. Sukurkime svetainę kartu su AI įrankiais.
              </p>

              <CountdownTimer className="mb-6 mx-auto scale-90 sm:scale-100 origin-center" />

              <div className="w-full rounded-2xl bg-white/5 p-4 sm:p-6 border border-white/10 mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-cloud/50 mb-2">
                  Speciali Kaina
                </p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-xl font-medium text-cloud/40 line-through decoration-red-500/50">
                    89 €
                  </span>
                  <span className="font-display text-4xl font-bold text-white">
                    59 €
                  </span>
                </div>
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
                  className="group mt-2 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#ffde59] px-6 py-4 text-sm font-bold text-navy transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(255,222,89,0.3)] btn-pulse"
                >
                  TĘSTI Į MOKĖJIMĄ
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
