import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MentorshipLanding from "@/components/MentorshipLanding";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy text-cloud selection:bg-gold/30 selection:text-gold-light overflow-x-hidden relative flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        <MentorshipLanding />
      </div>

      <Footer />
    </main>
  );
}
