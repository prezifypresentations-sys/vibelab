"use client";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

interface Props {
  onComplete: (answers: Record<string, string>) => void;
}

const QUESTIONS = [
  {
    id: "q1",
    title: "Koks jūsų dabartinis santykis su dirbtiniu intelektu?",
    options: [
      "Visiškas naujokas, bet noriu išmokti",
      "Bandžiau naudoti ChatGPT paprastiems tekstams",
      "Naudoju kasdien, esu pasiruošęs monetizuoti"
    ]
  },
  {
    id: "q2",
    title: "Kokia DI paslauga jums atrodo pati įdomiausia?",
    options: [
      "AI automatizacijos ir Agentai (Claude Code)",
      "Interaktyvių svetainių kūrimas (Antigravity)",
      "Video reklamų generavimas įmonėms (Higgsfield AI)",
      "Noriu išmokti parduoti visas tris paslaugas"
    ]
  },
  {
    id: "q3",
    title: "Kas jums kelia didžiausią baimę pradedant šį verslą?",
    options: [
      "Techninių programavimo žinių trūkumas",
      "Nemokėjimas ieškoti klientų (Cold Emails/Calls)",
      "Nežinau nuo ko pradėti ir kaip įkainoti savo darbą"
    ]
  },
  {
    id: "q4",
    title: "Koks būtų jūsų tikslas teikiant šias paslaugas?",
    options: [
      "Papildomos pajamos ($1k - $3k/mėn)",
      "Pakeisti dabartinį darbą ($3k - $5k+/mėn)",
      "Sukurti didelę AI agentūrą ($10k+/mėn)"
    ]
  },
  {
    id: "q5",
    title: "Ar esate pasiryžęs praktiškai mokytis taktikų klientams pritraukti?",
    options: [
      "Taip, esu 100% pasiryžęs daryti pardavimus",
      "Taip, jeigu turėsiu tikslius šablonus ir pavyzdžius",
      "Ne, noriu tik kurti, o pardavimus deleguoti"
    ]
  }
];

export default function FunnelQuiz({ onComplete }: Props) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleSelect = (option: string) => {
    const currentQuestion = QUESTIONS[currentStep];
    const newAnswers = { ...answers, [currentQuestion.id]: option };
    
    setAnswers(newAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 300); // Slight delay for visual feedback
    } else {
      setTimeout(() => {
        onComplete(newAnswers);
      }, 300);
    }
  };

  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto px-6 relative z-20">
      
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-xs text-cloud/60 mb-2 font-medium">
          <span>Klausimas {currentStep + 1} iš {QUESTIONS.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-navy-light/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
        <h2 className="text-xl md:text-3xl font-display font-bold text-white mb-6 md:mb-8 leading-tight">
          {QUESTIONS[currentStep].title}
        </h2>

        <div className="space-y-4">
          {QUESTIONS[currentStep].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(option)}
              className="w-full text-left px-5 py-4 md:px-6 md:py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-gold/10 hover:border-gold/30 transition-all duration-200 group flex items-center justify-between gap-3"
            >
              <span className="text-cloud group-hover:text-white font-medium text-sm md:text-lg pr-2">
                {option}
              </span>
              <div className="h-5 w-5 shrink-0 rounded-full border border-white/20 group-hover:border-gold group-hover:bg-gold/20 flex items-center justify-center transition-colors">
                <div className={`h-2 w-2 rounded-full bg-gold opacity-0 scale-50 transition-all ${answers[QUESTIONS[currentStep].id] === option ? 'opacity-100 scale-100' : ''}`} />
              </div>
            </button>
          ))}
        </div>

        {currentStep > 0 && (
          <button 
            onClick={() => setCurrentStep(prev => prev - 1)}
            className="mt-8 flex items-center gap-2 text-sm text-cloud/50 hover:text-cloud transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Atgal
          </button>
        )}
      </div>

    </div>
  );
}
