import Hero from "@/components/Hero";
import LeadMagnetPopup from "@/components/LeadMagnetPopup";
import Products from "@/components/Products";
import Urgency from "@/components/Urgency";
import StatsBar from "@/components/StatsBar";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import About from "@/components/About";
import B2BServices from "@/components/B2BServices";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StripeConfirmation from "@/components/StripeConfirmation";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function Page() {
  return (
    <main className="min-h-screen bg-navy text-cloud antialiased selection:bg-gold/30 selection:text-white">
      <Navbar />
      <Hero />
      <Urgency />
      <StatsBar />
      <Benefits />
      <Testimonials />
      <WhoIsThisFor />
      <About />
      <Products />
      <B2BServices />
      <FAQ />
      <CTABand />
      <Footer />
      <LeadMagnetPopup />
      <StripeConfirmation />
      <MobileStickyCTA />
    </main>
  );
}
