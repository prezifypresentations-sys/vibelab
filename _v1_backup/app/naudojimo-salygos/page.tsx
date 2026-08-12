import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Naudojimo Sąlygos | Vibe Lab",
  description: "Vibe Lab paslaugų teikimo ir naudojimo sąlygos.",
};

export default function TermsOfService() {
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
            Naudojimo Sąlygos
          </h1>
          
          <div className="prose prose-invert prose-gold max-w-none text-cloud/80">
            <p className="text-sm text-cloud/50 mb-8">Paskutinį kartą atnaujinta: 2026 m. birželio 14 d.</p>

            <h2 className="text-white font-bold text-2xl mt-10 mb-4">1. Bendrosios nuostatos</h2>
            <p className="mb-6">
              Šios naudojimo sąlygos (toliau – Taisyklės) nustato naudojimosi „Vibe Lab“ interneto svetaine ir teikiamomis paslaugomis (kursais) tvarką bei sąlygas. Naudodamiesi mūsų svetaine ar įsigydami paslaugas, jūs sutinkate su šiomis Taisyklėmis.
            </p>

            <h2 className="text-white font-bold text-2xl mt-10 mb-4">2. Intelektinė nuosavybė</h2>
            <p className="mb-6">
              Visa svetainėje pateikta informacija, įskaitant tekstus, dizainą, vaizdo įrašus, mokymų medžiagą ir grafiką, yra saugoma autorių teisių. Be išankstinio raštiško „Vibe Lab“ sutikimo draudžiama atgaminti, platinti ar kitaip naudoti svetainės turinį komerciniais ar kitais tikslais.
            </p>

            <h2 className="text-white font-bold text-2xl mt-10 mb-4">3. Paslaugų pirkimas ir apmokėjimas</h2>
            <p className="mb-4">
              Visos kainos svetainėje yra nurodytos eurais (€). Apmokėjimas už kursus atliekamas per saugią „Stripe“ mokėjimų sistemą. Paslauga laikoma suteikta ir prieiga prie mokymų atidaroma tik po sėkmingo apmokėjimo patvirtinimo.
            </p>

            <h2 className="text-white font-bold text-2xl mt-10 mb-4">4. Pinigų grąžinimo garantija</h2>
            <p className="mb-6">
              Savo paslaugoms suteikiame 14 dienų pinigų grąžinimo garantiją. Jeigu praėję kursą manote, kad jis neatnešė žadėtos vertės (pvz., nesutaupė laiko automatizuojant procesus), per 14 dienų nuo pirkimo datos parašykite mums ir mes grąžinsime 100% sumokėtos sumos.
            </p>

            <h2 className="text-white font-bold text-2xl mt-10 mb-4">5. Atsakomybės ribojimas</h2>
            <p className="mb-6">
              Mūsų pateikiama mokymų medžiaga ir promptai yra edukacinio pobūdžio. „Vibe Lab“ negarantuoja konkrečių finansinių rezultatų, nes jie priklauso nuo vartotojo pastangų ir asmeninio verslo specifikos. Mes neatsakome už trečiųjų šalių AI įrankių (pvz. OpenAI, Anthropic) veikimo sutrikimus ar jų politikos pasikeitimus.
            </p>

            <h2 className="text-white font-bold text-2xl mt-10 mb-4">6. Taisyklių keitimas</h2>
            <p className="mb-6">
              Mes pasiliekame teisę bet kuriuo metu keisti, taisyti ar papildyti šias Taisykles. Apie pakeitimus informuosime šioje svetainėje.
            </p>

            <h2 className="text-white font-bold text-2xl mt-10 mb-4">7. Kontaktai</h2>
            <p className="mb-6">
              Jei turite klausimų dėl šių taisyklių, prašome susisiekti su mumis el. paštu: <a href="mailto:zygis@vibelab.lt" className="text-gold hover:text-gold-light underline">zygis@vibelab.lt</a>.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
