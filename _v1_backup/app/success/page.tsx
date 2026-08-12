"use client";

import { motion } from "framer-motion";
import { CheckCircle, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-navy selection:bg-gold/30 selection:text-gold flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center relative pt-20 px-6">
        
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-lg w-full bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12 text-center backdrop-blur-md shadow-2xl"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Apmokėjimas Sėkmingas!
          </h1>
          
          <p className="text-cloud/80 text-base sm:text-lg mb-8 leading-relaxed">
            Ačiū, kad prisijungėte! Jūsų užsakymas sėkmingai gautas ir šiuo metu yra apdorojamas.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left mb-8">
            <h3 className="font-bold text-white mb-3 flex items-center gap-2">
              <Mail className="w-5 h-5 text-gold" />
              Kas toliau?
            </h3>
            <p className="text-sm text-cloud/70 leading-relaxed">
              Prieigą prie <strong>AI Asistento Gido</strong> ir visų papildomų resursų atsiųsime Jums el. paštu per artimiausias kelias valandas. Jei laiškas nepasieks jūsų dėžutės, patikrinkite „Spam“ (šlamšto) aplanką arba susisiekite su mumis tiesiogiai.
            </p>
          </div>

          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/20 hover:text-gold w-full sm:w-auto"
          >
            Grįžti į pagrindinį
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

        </motion.div>
      </main>
    </div>
  );
}
