import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuizFunnelMain from "@/components/QuizFunnelMain";
import NeuralCanvas from "@/components/NeuralCanvas";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy text-cloud selection:bg-gold/30 selection:text-gold-light overflow-x-hidden relative">
      {/* Background canvas for modern tech aesthetic */}
      <div className="fixed inset-0 z-0">
        <NeuralCanvas />
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        {/* The core funnel experience */}
        <div className="flex-1 flex flex-col">
          <QuizFunnelMain />
        </div>

        <Footer />
      </div>
    </main>
  );
}
