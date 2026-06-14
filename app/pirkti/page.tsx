"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, ShieldCheck, ArrowRight, Loader2, Star, Users } from "lucide-react";

const baseProducts = {
  "ai-assistant": {
    id: "ai-assistant",
    title: "AI Asistento Gidas",
    price: 47,
  },
};

const allUpsells = [
  {
    id: "upsell-mazo-verslo-paketas",
    title: "Mažo Verslo Paketas (6 AI specialistai)",
    desc: "6 AI specialistai: Excel, PowerPoint, asistentai, sąskaitos, finansai, dokumentai. Paruošti šablonai. Sutaupai 5h+ per savaitę.",
    price: 27,
    originalPrice: 127,
    icon: Star,
  },
  {
    id: "upsell-svetaines",
    title: "Svetainės kūrimas nuo 0 (Be programavimo)",
    desc: "Išmokite sukurti modernią, greitą ir SEO optimizuotą svetainę naudojant AI. Paleiskite veikiantį projektą jau tą pačią dieną.",
    price: 47,
    originalPrice: 97,
    icon: ShieldCheck, // Using existing imported icon
  },
  {
    id: "upsell-ai-akademija",
    title: "AI Akademija (VIP Paketas)",
    desc: "Viskas apie AI naudojimą vienoje vietoje. Prieiga prie visos mokymų medžiagos, reguliarūs Q&A susitikimai ir Skool bendruomenė.",
    price: 147,
    originalPrice: 297,
    icon: Users,
  },
];

function CheckoutContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("product") as keyof typeof baseProducts;
  
  // Default to ai-assistant
  const baseProduct = baseProducts[productId] || baseProducts["ai-assistant"];

  const [selectedUpsells, setSelectedUpsells] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleUpsell = (id: string) => {
    setSelectedUpsells(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const totalPrice = baseProduct.price + selectedUpsells.reduce((sum, id) => {
    const upsell = allUpsells.find(u => u.id === id);
    return sum + (upsell?.price || 0);
  }, 0);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          baseProduct: baseProduct.id,
          upsells: selectedUpsells,
        }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Įvyko klaida jungiantis prie mokėjimo sistemos.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      alert("Įvyko klaida jungiantis prie mokėjimo sistemos.");
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-20 px-4 sm:px-6 mx-auto max-w-6xl relative z-10">
      
      {/* Checkout Progress Steps */}
      <div className="flex items-center justify-center gap-4 sm:gap-8 mb-8 border-b border-white/5 pb-6">
        <div className="flex items-center gap-2 text-gold">
          <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold flex items-center justify-center font-bold">1</div>
          <span className="font-semibold hidden sm:inline">Krepšelis</span>
        </div>
        <div className="w-12 sm:w-24 h-px bg-white/20" />
        <div className="flex items-center gap-2 text-cloud/50">
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold">2</div>
          <span className="font-semibold hidden sm:inline">Atsiskaitymas</span>
        </div>
        <div className="w-12 sm:w-24 h-px bg-white/10" />
        <div className="flex items-center gap-2 text-cloud/30">
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center font-bold">3</div>
          <span className="font-semibold hidden sm:inline">Prieiga</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* Left Column: Main Product Emphasis */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
              Jūsų asistentas beveik paruoštas
            </h1>
            <p className="text-cloud/70 text-base">
              Paskutinis žingsnis prieš gaunant visą prieigą prie savo naujojo AI asistento.
            </p>
          </div>

          <div className="rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/[0.05] to-transparent p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start sm:items-center mb-6">
              <div className="w-24 h-32 shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-xl">
                <img src="/images/ai-book.png" alt="AI Asistento Gidas" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-2.5 py-1 text-[10px] font-bold text-gold mb-2 border border-gold/20">
                  <Star className="h-3 w-3" />
                  Pagrindinis Produktas
                </div>
                <h2 className="font-display text-2xl font-bold text-white mb-1 leading-tight">
                  {baseProduct.title}
                </h2>
                <p className="text-cloud/60 text-sm">Vienkartinis mokėjimas. Prieiga visam laikui.</p>
              </div>
            </div>

            <h3 className="font-bold text-white text-base mb-3 border-b border-white/10 pb-3">Ką jūs gaunate:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20">
                  <Check className="h-3 w-3 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">Išsamus 30 min video gidas</p>
                  <p className="text-xs text-cloud/60 mt-0.5">Žingsnis po žingsnio instrukcijos be kodo.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20">
                  <Check className="h-3 w-3 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">50+ paruoštų promptų biblioteka</p>
                  <p className="text-xs text-cloud/60 mt-0.5">Nukopijuokite komandas, kurios iškart veikia.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20">
                  <Check className="h-3 w-3 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">Prieiga prie uždaros bendruomenės</p>
                  <p className="text-xs text-cloud/60 mt-0.5">Prisijunkite prie verslininkų Skool platformoje.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20">
                  <Check className="h-3 w-3 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">Tiesioginė kūrėjų pagalba</p>
                  <p className="text-xs text-cloud/60 mt-0.5">Atsakysime į visus kilusius klausimus.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial / Guarantee in left column */}
          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-4 sm:p-5 flex items-start gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-bold text-green-400 text-sm mb-1">100% Garantija</h4>
              <p className="text-xs text-cloud/80 leading-relaxed">
                Jei per 14 dienų AI asistentas nesutaupys tau bent 1 valandos per dieną — grąžinsime sumą.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary & Upsells */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-5 sm:p-6 sticky top-24 backdrop-blur-md shadow-2xl">
            <h3 className="font-display text-xl font-bold text-white mb-4">
              Užsakymo suvestinė
            </h3>
            
            {/* Base Product Price Line */}
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
              <span className="text-white text-sm font-medium">{baseProduct.title}</span>
              <span className="text-white font-bold">€{baseProduct.price}</span>
            </div>

            {/* Compact Upsells Section */}
            <div className="mb-4">
              <p className="text-[10px] font-bold text-cloud/50 uppercase tracking-wider mb-3">Taip pat galite pridėti (Neprivaloma):</p>
              <div className="space-y-2.5">
                {allUpsells.map((upsell) => {
                  const isSelected = selectedUpsells.includes(upsell.id);
                  
                  return (
                    <div 
                      key={upsell.id}
                      onClick={() => toggleUpsell(upsell.id)}
                      className={`relative rounded-xl border p-3 sm:p-4 cursor-pointer transition-all ${
                        isSelected 
                          ? "border-gold/50 bg-gold/[0.04] shadow-[0_0_15px_rgba(255,222,89,0.08)]" 
                          : "border-white/10 bg-white/[0.02] hover:border-white/30"
                      }`}
                    >
                      {upsell.id === "upsell-ai-akademija" && (
                        <div className="absolute -top-2 right-3 bg-red-500 text-white text-[8px] sm:text-[10px] font-black px-2 py-0.5 rounded-sm uppercase tracking-widest">
                          Populiariausia
                        </div>
                      )}
                      <div className="flex gap-3 sm:gap-4">
                        <div className="mt-0.5 shrink-0">
                          <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded border flex items-center justify-center transition-colors ${
                            isSelected ? "bg-gold border-gold" : "border-white/30 bg-black/20"
                          }`}>
                            {isSelected && <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-navy font-bold" />}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex flex-col mb-1 sm:mb-1.5">
                            <span className={`font-bold text-xs sm:text-sm leading-tight mb-0.5 ${isSelected ? "text-gold" : "text-white"}`}>
                              {upsell.title}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="font-black text-xs sm:text-sm text-white">+€{upsell.price}</span>
                              {upsell.originalPrice && (
                                <span className="text-[10px] sm:text-xs font-medium text-cloud/40 line-through">
                                  €{upsell.originalPrice}
                                </span>
                              )}
                            </div>
                          </div>
                          <p className="text-[10px] sm:text-xs text-cloud/70 leading-relaxed mt-1">
                            {upsell.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between items-end mt-2 mb-4 bg-white/5 p-3 rounded-xl border border-white/5">
              <span className="text-cloud font-medium uppercase tracking-wider text-xs">Bendra suma</span>
              <span className="text-3xl font-display font-black text-white text-glow">€{totalPrice}</span>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isLoading}
              className="w-full group relative flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold to-[#ffc800] text-black shadow-[0_0_30px_rgba(255,222,89,0.3)] px-5 py-4 text-base font-black transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Kuriama sesija...
                </>
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5 text-black/70" />
                  APMOKĖTI SAUGIAI
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

            {/* Trust Badges */}
            <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
              <div className="flex items-center justify-center gap-2 text-[10px] text-cloud/50">
                <ShieldCheck className="h-3 w-3 text-green-400/70" />
                <span>Užtikrintas saugumas. 256-bitų šifravimas.</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-[10px] text-cloud/50">
                <Star className="h-3 w-3 text-gold/70" />
                <span>14 dienų 100% pinigų grąžinimo garantija.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-navy text-cloud antialiased selection:bg-gold/30 selection:text-white pb-20">
      <Navbar />
      <Suspense fallback={<div className="pt-40 text-center text-cloud/50">Kraunamas krepšelis...</div>}>
        <CheckoutContent />
      </Suspense>
    </main>
  );
}
