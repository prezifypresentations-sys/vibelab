"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Gift, X, Sparkles } from "lucide-react";

export default function LeadMagnetPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Only show once per session
    const hasSeenPopup = sessionStorage.getItem("hasSeenLeadMagnetPopup");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenLeadMagnetPopup", "true");
      }, 5000); // 5 seconds delay

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      const FORM_ID = "9428738";
      const url = `https://app.convertkit.com/forms/${FORM_ID}/subscriptions`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email_address: email }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true); 
      }
    } catch (error) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
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
                  <Gift className="h-3 w-3" />
                  NEMOKAMA DOVANA
                </div>
              </div>

              {!submitted ? (
                <>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight mb-3">
                    Atsiimkite <br />
                    <span className="text-gold drop-shadow-[0_0_12px_rgba(255,222,89,0.3)]">10 Claude Code</span> promptų
                  </h3>

                  <p className="text-sm text-cloud/70 mb-8 max-w-xs">
                    Gaukite PDF gidą su praktiniais promptais Lietuvos verslui. Pradėkite automatizuoti darbus jau šiandien.
                  </p>

                  <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Jūsų el. paštas"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:bg-white/10 focus:border-gold/50 transition-all"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="group mt-2 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#ffde59] px-6 py-4 text-sm font-bold text-navy transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(255,222,89,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "SIUNČIAMA..." : "GAUTI NEMOKAMĄ GIDĄ"}
                      {!loading && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                    </button>
                  </form>
                  <p className="text-[10px] text-cloud/40 mt-4 font-medium uppercase tracking-wider">
                    Jokio spamo. Atsisakyti galite bet kada.
                  </p>
                </>
              ) : (
                <div className="py-8 flex flex-col items-center">
                  <div className="h-16 w-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                    <Sparkles className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    Ačiū!
                  </h3>
                  <p className="text-cloud/70">
                    Gidas sėkmingai išsiųstas į jūsų el. paštą.
                  </p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="mt-8 px-6 py-2 border border-white/10 rounded-full text-sm font-medium text-white hover:bg-white/5 transition-colors"
                  >
                    Uždaryti
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
