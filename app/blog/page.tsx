import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PenTool, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Tinklaraštis | Vibe Lab",
  description: "Vibe Lab tinklaraštis apie AI integracijas ir automatizacijas versle.",
};

export default function Blog() {
  return (
    <main className="min-h-screen bg-navy text-cloud antialiased flex flex-col selection:bg-gold/30 selection:text-white">
      <Navbar />
      
      <div className="flex-1 relative flex items-center justify-center pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-gold/[0.03] blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gold/10 text-gold mb-8 border border-gold/20 shadow-[0_0_40px_rgba(255,222,89,0.15)]">
            <PenTool className="h-10 w-10" />
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Tinklaraštis kuriamas
          </h1>
          
          <p className="text-lg text-cloud/70 mb-10 max-w-xl mx-auto leading-relaxed">
            Šiuo metu ruošiame aukščiausios kokybės straipsnius ir praktinius gidus apie AI įrankių pritaikymą Lietuvos versle. Užsukite šiek tiek vėliau!
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/20 hover:border-white/30"
          >
            <ArrowLeft className="h-4 w-4" />
            Grįžti į pradinį puslapį
          </Link>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
