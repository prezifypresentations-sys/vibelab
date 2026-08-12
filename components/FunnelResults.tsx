"use client";
import { CheckCircle2, ArrowRight, Calendar, Video, Code, Monitor, FileText, Star, Briefcase, Loader2, Timer, ShieldCheck, Users, Gift, TrendingUp, Award, Play, ChevronDown, X } from "lucide-react";
import { useState, useEffect } from "react";

interface Props {
  answers: Record<string, string>;
}

export default function FunnelResults({ answers }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [showExitModal, setShowExitModal] = useState(false);
  const [hasExited, setHasExited] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isPlayingVSL, setIsPlayingVSL] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasExited) {
        setShowExitModal(true);
        setHasExited(true);
      }
    };
    
    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      clearInterval(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasExited]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          baseProduct: "ai-agency-course",
        }),
      });

      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Įvyko klaida bandant atidaryti mokėjimo puslapį.");
        setIsLoading(false);
      }
    } catch (err) {
      console.error(err);
      alert("Įvyko klaida bandant atidaryti mokėjimo puslapį.");
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12">
      
      {/* Header Result */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400 mb-6">
          <CheckCircle2 className="h-4 w-4" />
          Sistemos atitikmuo rastas
        </div>
        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
          Pagal jūsų atsakymus, geriausias kelias jums yra <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">AI Paslaugų Verslas</span>.
        </h1>
        <p className="text-lg text-cloud/70 max-w-2xl mx-auto">
          {answers['q4'] && answers['q4'].includes("10k") 
            ? "Jūsų tikslas sukurti $10k+/mėn agentūrą yra visiškai realus naudojant šią sistemą. Verslams dabar kaip niekad reikia automatizacijų ir inovatyvių reklamų."
            : answers['q3'] && answers['q3'].includes("klientų") 
            ? "Sistemoje didžiausią dėmesį skirsime jūsų baimei – parodysime, kaip lengvai rasti B2B klientus be jokios patirties."
            : "Verslams dabar kaip niekad reikia procesų automatizacijos, modernių svetainių ir inovatyvių reklamų. Jūs galite tai pasiūlyti naudodami vos tris AI įrankius."}
        </p>
      </div>

      {/* VSL Player */}
      <div className="max-w-3xl mx-auto mb-16 relative group">
        <div className="absolute inset-0 bg-gold/20 blur-xl rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative aspect-video bg-navy border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl group-hover:border-gold/50 transition-colors">
          {!isPlayingVSL ? (
            <div 
              className="absolute inset-0 cursor-pointer"
              onClick={() => setIsPlayingVSL(true)}
            >
              <div className="absolute inset-0 bg-[url('/images/vsl-poster.png')] bg-cover bg-center opacity-80 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-navy/40"></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div className="h-16 w-16 bg-gold rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(255,222,89,0.5)] group-hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 text-navy ml-1" />
                </div>
                <p className="text-white font-bold text-lg">Žiūrėti šį svarbų pranešimą</p>
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
            ></iframe>
          )}
        </div>
      </div>

      {/* The Digital Product Pitch (Front-end + Upsell) */}
      <div className="mb-20">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">
            AI Agentūros / Freelancerio Kursas
          </h2>
          <p className="text-cloud/80 max-w-2xl mx-auto">
            Tai nėra teorinis kursas. Tai yra "Copy-Paste" sistema, parodanti ne tik kaip techniškai atlikti paslaugas su dirbtiniu intelektu, bet ir <strong>kaip rasti klientų, kurie jums už tai sumokės.</strong>
          </p>
        </div>

        {/* Authority Block */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="bg-navy-light/50 border border-white/10 rounded-full px-6 py-2 flex items-center gap-3 shadow-lg">
            <Award className="h-5 w-5 text-gold" />
            <span className="text-sm text-cloud/80">Išmokite iš kūrėjo: <strong className="text-white">1.6M+ sekėjų</strong> ir <strong className="text-white">&gt;$5k/mėn pardavimai</strong></span>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Module 1: Claude Code */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold/30 transition-colors">
            <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
              <Code className="h-6 w-6 text-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">1. Claude Code</h3>
            <ul className="space-y-3 text-sm text-cloud/80">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />Įvadas į automatizacijas ir agentus.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />Kaip sukurti pirmą automatizaciją verslui.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />Klientų paieška per Cold Emails ir Cold Calls.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />Klientų pritraukimas per socialinius tinklus.</li>
            </ul>
          </div>

          {/* Module 2: Antigravity */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold/30 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 p-16 bg-gold/5 blur-[50px] rounded-full pointer-events-none" />
            <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6 relative z-10">
              <Monitor className="h-6 w-6 text-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 relative z-10">2. Antigravity</h3>
            <ul className="space-y-3 text-sm text-cloud/80 relative z-10">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />Svetainės kūrimas nuo 0 (pvz., NT sektoriui).</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />Interaktyvūs efektai ir SEO optimizacija.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />Kiek turi kainuoti jūsų laikas ir svetainė.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />Warm leads pritraukimas ir Cold Calls taktika.</li>
            </ul>
          </div>

          {/* Module 3: Higgsfield */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold/30 transition-colors">
            <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
              <Video className="h-6 w-6 text-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">3. Higgsfield AI</h3>
            <ul className="space-y-3 text-sm text-cloud/80">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />Kokį video/photo modelį rinktis reklamoms.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />Kaip sukurti NT video brokeriams.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />Ar verta kurti Ads (reklamas)?</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />Klientų paieška video paslaugoms.</li>
            </ul>
          </div>

        </div>

        {/* Bonus Section */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="bg-gold/5 border border-gold/20 rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-32 bg-gold/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="h-10 w-10 bg-gold/20 rounded-full flex items-center justify-center">
                <Gift className="h-5 w-5 text-gold" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Prisijungę šiandien, gausite NEMOKAMAI:</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-navy/60 border border-white/5 rounded-xl p-5 hover:border-gold/30 transition-colors">
                <h4 className="font-bold text-white mb-2">Bonus #1: Šablonai</h4>
                <p className="text-xs text-cloud/70">Paruošti Cold Email ir sutarčių šablonai, kad iškart galėtumėte siųsti klientams.</p>
              </div>
              <div className="bg-navy/60 border border-white/5 rounded-xl p-5 hover:border-gold/30 transition-colors">
                <h4 className="font-bold text-white mb-2">Bonus #2: Promptai</h4>
                <p className="text-xs text-cloud/70">50+ išbandytų promptų agentų ir svetainių kūrimui.</p>
              </div>
              <div className="bg-navy/60 border border-white/5 rounded-xl p-5 hover:border-gold/30 transition-colors">
                <h4 className="font-bold text-white mb-2">Bonus #3: ROI Įrankis</h4>
                <p className="text-xs text-cloud/70">Skaičiuoklė, padedanti apskaičiuoti, kiek imti pinigų iš kliento.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Box */}
        <div className="max-w-2xl mx-auto relative mt-10 md:mt-8 px-2 md:px-0">
          {/* Timer Banner */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-500/90 text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(239,68,68,0.4)] z-10 w-[90%] md:w-auto md:whitespace-nowrap text-center leading-tight">
            <Timer className="h-4 w-4 animate-pulse shrink-0" />
            <span>Dėmesio: Kaina rezervuota tik {formatTime(timeLeft)}</span>
          </div>
          
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-gold/30 rounded-2xl p-6 md:p-8 pt-10 md:pt-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-5 w-5 text-gold" />
                <h4 className="font-bold text-white text-lg">Investicijos Grąža (ROI)</h4>
              </div>
              <p className="text-cloud/70 text-sm max-w-sm mb-4">
                Išmoksite, kaip klientui perteikti produktą ir išrašyti sąskaitą.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                <p className="text-xs text-cloud/80 leading-relaxed">
                  Vidutinė paslauga verslui kainuoja 500-1000€. Jums tereikia rasti <strong className="text-white">vos 1 klientą</strong>, kad ši bendruomenė jums atsipirktų dešimteriopai. Aš parodysiu, kaip jį rasti.
                </p>
              </div>
            </div>
          
          <div className="flex flex-col items-center shrink-0">
            <div className="flex flex-col items-center mb-6">
              <div className="flex items-center gap-1 text-gold mb-1">
                <Star className="h-4 w-4 fill-gold" />
                <Star className="h-4 w-4 fill-gold" />
                <Star className="h-4 w-4 fill-gold" />
                <Star className="h-4 w-4 fill-gold" />
                <Star className="h-4 w-4 fill-gold" />
              </div>
              <span className="text-xs text-cloud/70 font-medium">Puikus įvertinimas iš Skool bendruomenės</span>
            </div>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-bold text-white">€49<span className="text-xl text-cloud/50 font-normal">/mėn</span></span>
            </div>
            
            <button 
              onClick={handleCheckout}
              disabled={isLoading}
              className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-bold text-navy transition-all hover:bg-gold-light hover:shadow-[0_0_20px_rgba(255,222,89,0.3)] w-full disabled:opacity-70 disabled:cursor-not-allowed mb-3"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Kraunama...
                </>
              ) : (
                <>
                  Pradėti verslą dabar
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
            
            <div className="flex items-center gap-2 text-xs text-cloud/60 bg-white/5 px-3 py-1.5 rounded-full">
              <ShieldCheck className="h-4 w-4 text-green-400" />
              14 Dienų Pinigų Grąžinimo Garantija. Atšaukite bet kada.
            </div>
          </div>
        </div>



        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-16 md:mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Dažniausiai Užduodami Klausimai</h3>
          <div className="space-y-4">
            {[
              {
                q: "Ką daryti, jei aš niekada nesu programavęs?",
                a: "Jums visiškai nereikia mokėti programuoti. Visus įrankius naudosime pasitelkdami natūralią kalbą (Prompting) – tiesiog rašysime tekstą, o DI įrankiai sukurs viską už mus."
              },
              {
                q: "Kiek laiko per dieną man reikės skirti šiam verslui?",
                a: "Pradžioje rekomenduojama skirti bent 1-2 valandas per dieną mokymuisi ir klientų paieškai. Gavus pirmąjį klientą, laiko sąnaudos labai priklausys nuo to, kokią paslaugą jam teiksite, bet visus procesus išmoksime automatizuoti."
              },
              {
                q: "Ar klientų paieškos strategijos veikia tik Lietuvoje, ar ir užsienyje?",
                a: "Strategijos (Cold Email, Socialiniai tinklai) yra visiškai universalios. Galite dirbti su klientais JAV, JK ar bet kurioje kitoje rinkoje, kur biudžetai yra dar didesni."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors gap-3"
                >
                  <span className="font-bold text-white text-sm md:text-base">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-cloud/50 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-4 md:px-6 pb-4 text-sm text-cloud/70 mt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
      {/* The 1:1 Community Application (High Ticket) */}
      <div className="border-t border-white/10 pt-16 md:pt-20 pb-10">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-navy-light to-navy border border-gold/20 rounded-3xl p-6 md:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-32 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium text-gold mb-6 relative z-10">
            <Briefcase className="h-3 w-3" />
            Ekskliuzyvinė Skool Bendruomenė
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 relative z-10">
            Norite tiesioginės pagalbos randant pirmuosius klientus?
          </h2>
          
          <p className="text-lg text-cloud/80 mb-10 relative z-10">
            Aš asmeniškai padedu atrinktai grupei žmonių (Inner Circle) statyti jų agentūras, prižiūriu jų "Cold Email" strategijas ir padedu parduoti. 
            Dėl riboto mano laiko, priėmimas vyksta tik per atrankinį skambutį.
          </p>

          <a 
            href="https://cal.com/icyscale/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative z-10 inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10 hover:border-white/30"
          >
            <Calendar className="h-5 w-5" />
            Aplikuoti skambučiui
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="text-xs text-cloud/50 mt-4 relative z-10">Vietų skaičius labai ribotas. Tik rimtai nusiteikusiems verslininkams.</p>
        </div>
      </div>

      {/* Exit Intent Modal */}
      {showExitModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" onClick={() => setShowExitModal(false)}></div>
          <div className="bg-navy border border-gold/30 rounded-3xl p-6 md:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto relative z-10 shadow-[0_0_50px_rgba(255,222,89,0.15)] animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setShowExitModal(false)}
              className="absolute top-4 right-4 text-cloud/50 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="h-12 w-12 bg-red-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <span className="text-2xl">🛑</span>
            </div>
            <h2 className="text-2xl font-bold text-white text-center mb-4">Palaukite! Nepraleiskite šios progos</h2>
            <p className="text-cloud/80 text-center mb-8">
              Jūs esate per žingsnį nuo sistemos, kuri gali pakeisti jūsų karjerą. Išbandykite programą šiandien be jokios rizikos su 14 dienų pinigų grąžinimo garantija.
            </p>
            <button 
              onClick={() => {
                setShowExitModal(false);
                handleCheckout();
              }}
              className="w-full bg-gold hover:bg-gold-light text-navy font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(255,222,89,0.3)] mb-4"
            >
              Prisijungti dabar ir gauti bonusus
            </button>
            <button 
              onClick={() => setShowExitModal(false)}
              className="w-full text-cloud/50 hover:text-white text-sm transition-colors py-2"
            >
              Ne, ačiū. Aš nenoriu papildomų pajamų.
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
