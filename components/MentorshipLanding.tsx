"use client";

import { motion } from "framer-motion";
import { Play, CheckCircle2, XCircle, ArrowRight, Star, TrendingUp, Users, Award } from "lucide-react";
import { useState } from "react";
import NeuralCanvas from "./NeuralCanvas";
import ApplicationForm from "./ApplicationForm";

export default function MentorshipLanding() {
  const [isPlayingVSL, setIsPlayingVSL] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-navy text-cloud overflow-hidden selection:bg-gold/30 selection:text-gold-light">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <NeuralCanvas />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 mx-auto max-w-5xl px-4 md:px-6 py-16 md:py-24">
        
        {/* Header Section */}
        <header className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-sm font-semibold text-gold mb-8 shadow-[0_0_20px_rgba(255,222,89,0.15)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
            </span>
            Ieškome 5 motyvuotų žmonių šiam mėnesiui
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl"
          >
            Kaip Nuo Nulio Susikurti <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
              Stabilias Pajamas Internetu
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-cloud/80 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Naudojant dirbtinį intelektą ir socialinius tinklus. Net jei neturite absoliučiai jokios patirties, sekėjų ar techninių žinių.
          </motion.p>
        </header>

        {/* VSL Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16 relative group"
        >
          <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
          <div className="relative aspect-video bg-navy border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] group-hover:border-gold/40 transition-colors duration-500">
            {!isPlayingVSL ? (
              <div 
                className="absolute inset-0 cursor-pointer"
                onClick={() => setIsPlayingVSL(true)}
              >
                <div className="absolute inset-0 bg-[url('/images/vsl-poster.png')] bg-cover bg-center opacity-70 mix-blend-overlay hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-navy/30" />
                
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <div className="h-20 w-20 bg-gradient-to-br from-gold to-[#d4b028] rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(255,222,89,0.4)] group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-navy ml-1.5" />
                  </div>
                  <p className="text-white font-bold text-xl tracking-wide uppercase">Žiūrėti Mokymus (15 min)</p>
                </div>
              </div>
            ) : (
              <iframe 
                src="https://www.youtube.com/embed/PYnuZSVN5xY?autoplay=1&rel=0&modestbranding=1" 
                title="VibeLab VSL" 
                className="absolute inset-0 w-full h-full"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            )}
          </div>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center mb-24"
        >
          <button
            onClick={() => setIsFormOpen(true)}
            className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-gold to-[#ffc800] px-10 py-6 text-xl font-black text-navy shadow-[0_0_40px_rgba(255,222,89,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(255,222,89,0.5)] active:scale-95 w-full sm:w-auto overflow-hidden"
          >
            {/* Button Shine Effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
            
            APLIKUOTI MENTORYSTEI
            <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="mt-4 text-sm text-cloud/50 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Liko tik 2 vietos šios savaitės skambučiams
          </p>
        </motion.div>

        {/* Qualification Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6 border-b border-red-500/20 pb-4">
              <div className="h-10 w-10 bg-red-500/10 rounded-full flex items-center justify-center shrink-0">
                <XCircle className="h-5 w-5 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Kam tai <span className="text-red-400">NESKIRTA</span></h3>
            </div>
            <ul className="space-y-4">
              {[
                "Ieškantiems „greito praturtėjimo“ mygtuko.",
                "Tinginiams, kurie nenori įdėti bent 1-2 valandų darbo kasdien.",
                "Žmonėms, kurie visada teisinasi ir kaltina kitus.",
                "Tiems, kurie nėra pasiryžę investuoti į savo ateitį."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-cloud/70">
                  <XCircle className="h-5 w-5 text-red-500/50 shrink-0 mt-0.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-green-500/5 border border-green-500/20 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6 border-b border-green-500/20 pb-4">
              <div className="h-10 w-10 bg-green-500/10 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Kam tai <span className="text-green-400">SKIRTA</span></h3>
            </div>
            <ul className="space-y-4">
              {[
                "Pradedantiesiems (Nuo nulio), norintiems susikurti pajamas internete.",
                "Dirbantiems samdomą darbą, bet siekiantiems finansinės laisvės.",
                "Esamiems freelanceriams, norintiems automatizuoti darbą su AI.",
                "Motyvuotiems žmonėms, ieškantiems aiškios, veikiančios sistemos."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-cloud/80">
                  <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Authority / Creator Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden p-8 md:p-12 mb-24"
        >
          <div className="absolute top-0 right-0 p-32 bg-gold/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Mano istorija: Nuo 0 iki 1M+ sekėjų</h2>
            <p className="text-cloud/70 max-w-2xl mx-auto">
              Būdamas vos 19-os, vienas TikTok profilis apvertė mano gyvenimą 360 laipsnių kampu. Uždirbdavau daugiau nei mano mokytojai, o per 2 metus su „Prezify“ pasiekiau virš milijono sekėjų.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {/* Image 1 Placeholder: PayPal/Income */}
            <div className="bg-navy/50 border border-white/5 rounded-2xl p-2 hover:border-gold/30 transition-colors">
              <div className="aspect-[9/16] bg-navy-light rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-cloud/50 text-sm p-4 text-center group-hover:opacity-0 transition-opacity">
                  Įkelkite PayPal/Pajamų screenshot'ą čia (public/images/proof1.png)
                </div>
                {/* <img src="/images/proof1.png" alt="Pajamos" className="w-full h-full object-cover" /> */}
              </div>
              <p className="text-center text-sm text-cloud/70 mt-3 font-semibold">Tūkstantinės pajamos iš turinio</p>
            </div>

            {/* Image 2 Placeholder: CreatorKore / Digital Products */}
            <div className="bg-navy/50 border border-white/5 rounded-2xl p-2 hover:border-gold/30 transition-colors">
              <div className="aspect-[9/16] bg-navy-light rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-cloud/50 text-sm p-4 text-center group-hover:opacity-0 transition-opacity">
                  Įkelkite Dashboard/Pardavimų screenshot'ą čia (public/images/proof2.png)
                </div>
                {/* <img src="/images/proof2.png" alt="Pardavimai" className="w-full h-full object-cover" /> */}
              </div>
              <p className="text-center text-sm text-cloud/70 mt-3 font-semibold">Stabilios sistemos generuoja rezultatą</p>
            </div>

            {/* Image 3 Placeholder: 1M Followers */}
            <div className="bg-navy/50 border border-white/5 rounded-2xl p-2 hover:border-gold/30 transition-colors">
              <div className="aspect-[9/16] bg-navy-light rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-cloud/50 text-sm p-4 text-center group-hover:opacity-0 transition-opacity">
                  Įkelkite Prezify/Sekėjų screenshot'ą čia (public/images/proof3.png)
                </div>
                {/* <img src="/images/proof3.png" alt="Sekėjai" className="w-full h-full object-cover" /> */}
              </div>
              <p className="text-center text-sm text-cloud/70 mt-3 font-semibold">1M+ lojali bendruomenė</p>
            </div>
          </div>
          
          <div className="mt-12 text-center relative z-10">
            <p className="text-lg text-white font-semibold mb-6">Dabar noriu šią sistemą perduoti JUMS.</p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-bold transition-colors"
            >
              Pradėkime jūsų istoriją <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

      </main>

      <ApplicationForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        calLink="https://cal.com/icyscale/30min"
      />
    </div>
  );
}
