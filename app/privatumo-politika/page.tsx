import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privatumo Politika | Vibe Lab",
  description: "Vibe Lab privatumo politika ir asmens duomenų tvarkymo taisyklės.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-navy text-cloud antialiased selection:bg-gold/30 selection:text-white">
      <Navbar />
      
      <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/[0.03] blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-electric/[0.03] blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">
            Privatumo Politika
          </h1>
          
          <div className="prose prose-invert prose-gold max-w-none text-cloud/80">
            <p className="text-sm text-cloud/50 mb-8">Paskutinį kartą atnaujinta: 2026 m. birželio 14 d.</p>

            <h2 className="text-white font-bold text-2xl mt-10 mb-4">1. Bendrosios nuostatos</h2>
            <p className="mb-6">
              Ši privatumo politika nustato pagrindines „Vibe Lab“ (toliau – Duomenų valdytojas) asmens duomenų tvarkymo taisykles ir sąlygas, naudojantis mūsų interneto svetaine ir paslaugomis. Mes gerbiame jūsų privatumą ir įsipareigojame saugoti jūsų asmens duomenis.
            </p>

            <h2 className="text-white font-bold text-2xl mt-10 mb-4">2. Kokius duomenis mes renkame?</h2>
            <p className="mb-4">Mes galime rinkti šiuos jūsų asmens duomenis:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Vardas, pavardė (jei pateikta);</li>
              <li>El. pašto adresas;</li>
              <li>Mokėjimo informacija (tvarkoma per saugius trečiųjų šalių mokėjimo paslaugų teikėjus, pvz., „Stripe“);</li>
              <li>IP adresas, naršymo istorija mūsų svetainėje ir slapukai (cookies).</li>
            </ul>

            <h2 className="text-white font-bold text-2xl mt-10 mb-4">3. Kodėl mes renkame jūsų duomenis?</h2>
            <p className="mb-4">Jūsų asmens duomenys tvarkomi šiais tikslais:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Paslaugų (kursų) suteikimui ir administravimui;</li>
              <li>Mokėjimų apdorojimui;</li>
              <li>Tiesioginės rinkodaros tikslais (tik su jūsų sutikimu, siunčiant naujienlaiškius);</li>
              <li>Svetainės veikimo gerinimui ir statistikos rinkimui.</li>
            </ul>

            <h2 className="text-white font-bold text-2xl mt-10 mb-4">4. Kam perduodame jūsų duomenis?</h2>
            <p className="mb-6">
              Mes neperduodame jūsų asmens duomenų jokioms trečiosioms šalims, išskyrus: mūsų partnerius, teikiančius IT, el. pašto siuntimo (pvz. „ConvertKit“) ar mokėjimų apdorojimo („Stripe“) paslaugas, kai tai būtina paslaugų suteikimui; teisėsaugos institucijas, jei to reikalauja Lietuvos Respublikos įstatymai.
            </p>

            <h2 className="text-white font-bold text-2xl mt-10 mb-4">5. Jūsų teisės</h2>
            <p className="mb-4">Jūs turite teisę:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Žinoti apie savo asmens duomenų tvarkymą;</li>
              <li>Susipažinti su savo asmens duomenimis;</li>
              <li>Reikalauti ištaisyti netikslius duomenis;</li>
              <li>Reikalauti ištrinti jūsų asmens duomenis („teisė būti pamirštam“);</li>
              <li>Nesutikti su duomenų tvarkymu tiesioginės rinkodaros tikslais.</li>
            </ul>

            <h2 className="text-white font-bold text-2xl mt-10 mb-4">6. Kontaktai</h2>
            <p className="mb-6">
              Jei turite klausimų dėl šios privatumo politikos ar jūsų asmens duomenų tvarkymo, prašome susisiekti su mumis el. paštu: <a href="mailto:zygis@vibelab.lt" className="text-gold hover:text-gold-light underline">zygis@vibelab.lt</a>.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
