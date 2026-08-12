"use client";
import { useState } from "react";
import { ArrowRight, Mail, Lock } from "lucide-react";

interface Props {
  onComplete: (email: string) => void;
}

export default function FunnelEmailCapture({ onComplete }: Props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError(true);
      return;
    }
    setError(false);
    setIsSubmitting(true);

    try {
      // Send the email to our new backend route
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch (err) {
      console.error("Failed to subscribe:", err);
      // We still let them through even if it fails so the funnel doesn't block them
    }

    setIsSubmitting(false);
    onComplete(email);
  };

  return (
    <div className="w-full max-w-lg mx-auto px-6 text-center relative z-20">
      
      <div className="bg-navy-light/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="mx-auto h-16 w-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
          <Mail className="h-8 w-8 text-gold" />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
          Jūsų AI Verslo Planas Paruoštas!
        </h2>
        
        <p className="text-cloud/80 mb-8">
          Įveskite savo geriausią el. pašto adresą, kad galėtume parodyti rezultatus ir atsiųsti kopiją.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(false);
              }}
              placeholder="vardenis@pavyzdys.lt"
              className={`w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/20'} focus:border-gold rounded-xl px-6 py-4 text-white placeholder-cloud/40 outline-none transition-colors`}
            />
            {error && <p className="text-red-400 text-sm text-left mt-2">Prašome įvesti teisingą el. paštą.</p>}
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-bold text-navy transition-all hover:bg-gold-light hover:shadow-[0_0_20px_rgba(255,222,89,0.3)] w-full mt-2 disabled:opacity-70"
          >
            {isSubmitting ? "Saugoma..." : "Pamatyti Rezultatus"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-cloud/40">
          <Lock className="h-3 w-3" />
          Jūsų duomenys saugūs ir mes nesiunčiame brukalų (spam).
        </div>
      </div>
    </div>
  );
}
