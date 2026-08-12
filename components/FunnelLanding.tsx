"use client";
import { ArrowRight, Users, Briefcase } from "lucide-react";

interface Props {
  onStart: () => void;
}

export default function FunnelLanding({ onStart }: Props) {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center">
      
      {/* Social Proof Badges */}
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-8">
        <div className="flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-gold">
          <Users className="h-4 w-4" />
          <span>1.6M+ Sekėjų</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
          <Briefcase className="h-4 w-4" />
          <span>Pelningas B2B Paslaugų Verslas</span>
        </div>
      </div>

      <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
        Kaip pradėti teikti <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">AI Paslaugas Verslams</span> ir iš to uždirbti.
      </h1>

      <p className="text-lg md:text-xl text-cloud/80 max-w-2xl mb-10 leading-relaxed">
        Sužinokite, kaip naudojant tik 3 įrankius (Claude Code, Antigravity, Higgsfield) 
        galite sukurti tai, už ką įmonės moka tūkstančius.
      </p>

      {/* CTA Button */}
      <div className="relative z-50">
        <button 
          onClick={() => onStart()}
          className="group relative z-50 inline-flex items-center justify-center gap-3 rounded-xl bg-gold px-8 py-4 text-lg font-bold text-navy transition-all hover:bg-gold-light hover:shadow-[0_0_30px_rgba(255,222,89,0.3)] hover:-translate-y-1"
        >
          Sužinoti ar man tai tiks
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 ring-offset-2 ring-offset-navy/50 opacity-0 transition-opacity group-hover:opacity-100" />
        </button>
        <p className="text-xs text-cloud/50 mt-4">Nemokamas testas. Užtruks 30 sekundžių.</p>
      </div>

    </div>
  );
}
