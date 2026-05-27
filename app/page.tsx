import Hero from "@/components/Hero";
import LiveWorkshop from "@/components/LiveWorkshop";
import WorkshopPopup from "@/components/WorkshopPopup";
import Workshops from "@/components/Workshops";
import Course from "@/components/Course";
import StatsBar from "@/components/StatsBar";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <main className="min-h-screen bg-navy text-cloud antialiased selection:bg-gold/30 selection:text-white">
      <Navbar />
      <Hero />
      <LiveWorkshop />
      <WorkshopPopup />
      <Workshops />
      <Course />
      <StatsBar />
      <Testimonials />
      <About />
      <CTABand />
      <Footer />
    </main>
  );
}
