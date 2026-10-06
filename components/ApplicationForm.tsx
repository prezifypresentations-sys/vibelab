"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  calLink: string;
}

export default function ApplicationForm({ isOpen, onClose, calLink }: Props) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // Form Questions
  const questions = [
    {
      id: "goal",
      title: "Koks yra jūsų pagrindinis tikslas?",
      options: [
        "Noriu pradėti dirbti sau nuo nulio ir uždirbti internetu.",
        "Noriu automatizuoti savo esamą verslą.",
        "Esu freelanceris ir noriu pakelti savo paslaugų kainas.",
      ],
    },
    {
      id: "time",
      title: "Kiek laiko galite skirti mokymuisi ir darbui per savaitę?",
      options: [
        "Mažiau nei 5 valandas (Noriu visko greitai).", // Disqualifier
        "5 - 10 valandų per savaitę.",
        "10 - 20 valandų per savaitę.",
        "Esu pasiruošęs skirti tiek, kiek reikės (Full-time).",
      ],
    },
    {
      id: "budget",
      title: "Ar esate pasiruošę investuoti į save ir savo įgūdžius?",
      options: [
        "Taip, suprantu, kad rimtas verslas reikalauja investicijų.",
        "Taip, bet mano biudžetas šiuo metu labai ribotas.",
        "Ne, ieškau tik nemokamų būdų užsidirbti.", // Disqualifier
      ],
    }
  ];

  const handleSelect = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    
    // Auto-advance after a short delay
    setTimeout(() => {
      if (step <= questions.length) {
        setStep(prev => prev + 1);
      }
    }, 400);
  };

  const isDisqualified = 
    answers.time === "Mažiau nei 5 valandas (Noriu visko greitai)." ||
    answers.budget === "Ne, ieškau tik nemokamų būdų užsidirbti.";

  const handleBookCall = () => {
    // Format answers into a readable string for Cal.com notes
    const formattedAnswers = questions.map((q) => {
      return `${q.title}\nAtsakymas: ${answers[q.id] || "Neatsakyta"}`;
    }).join("\n\n");

    // Encode for URL
    const encodedNotes = encodeURIComponent(formattedAnswers);
    
    // Redirect to Cal.com with answers pre-filled in the notes section
    window.location.href = `${calLink}?notes=${encodedNotes}`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-navy/90 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-navy-light border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/5 shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-gold font-bold">VibeLab</span>
              <span className="text-cloud/50">/</span>
              <span className="text-cloud/80 text-sm">Aplikacija</span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/5 transition-colors"
            >
              <X className="h-5 w-5 text-cloud/70" />
            </button>
          </div>

          {/* Progress Bar */}
          {step <= questions.length && (
            <div className="h-1 w-full bg-white/5 shrink-0">
              <motion.div 
                className="h-full bg-gold"
                initial={{ width: 0 }}
                animate={{ width: `${((step - 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}

          {/* Body */}
          <div className="p-6 md:p-8 overflow-y-auto flex-1 min-h-[300px]">
            {step <= questions.length ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col h-full"
              >
                <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-6 leading-tight">
                  {questions[step - 1].title}
                </h2>
                
                <div className="space-y-3 mt-auto">
                  {questions[step - 1].options.map((option, idx) => {
                    const isSelected = answers[questions[step - 1].id] === option;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelect(questions[step - 1].id, option)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                          isSelected 
                            ? "border-gold bg-gold/10 text-white" 
                            : "border-white/10 hover:border-gold/30 hover:bg-white/5 text-cloud/80"
                        }`}
                      >
                        <span className="text-sm md:text-base">{option}</span>
                        <div className={`h-5 w-5 rounded-full border flex items-center justify-center shrink-0 ml-4 ${
                          isSelected ? "border-gold bg-gold" : "border-white/20"
                        }`}>
                          {isSelected && <div className="h-2 w-2 bg-navy rounded-full" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              /* Results Step */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4"
              >
                {isDisqualified ? (
                  <>
                    <div className="h-16 w-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <X className="h-8 w-8 text-red-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">Šiuo metu nesame tinkami vieni kitiems</h2>
                    <p className="text-cloud/70 mb-8 max-w-md mx-auto text-sm">
                      Remiantis jūsų atsakymais, šiuo metu mūsų mentorystės programa jums nebūtų tinkamiausias pasirinkimas. Norint pasiekti rezultatų, būtina skirti laiko ir būti pasiruošusiam investuoti į savo įgūdžius.
                    </p>
                    <button
                      onClick={onClose}
                      className="text-cloud/50 hover:text-white transition-colors text-sm"
                    >
                      Grįžti į pagrindinį puslapį
                    </button>
                  </>
                ) : (
                  <>
                    <div className="h-16 w-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-green-500" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Puiku! Jūs kvalifikuojatės.</h2>
                    <p className="text-cloud/70 mb-8 max-w-md mx-auto text-sm">
                      Jūsų atsakymai rodo, kad turite puikų potencialą pasiekti rezultatų su mūsų sistema. Sekantis žingsnis – rezervuoti trumpą, nemokamą strateginį skambutį.
                    </p>
                    <button
                      onClick={handleBookCall}
                      className="w-full bg-gradient-to-r from-gold to-[#ffc800] text-navy font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                    >
                      Rezervuoti Skambutį Dabar
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </motion.div>
            )}
          </div>
          
          {/* Footer Controls */}
          {step <= questions.length && step > 1 && (
             <div className="p-4 border-t border-white/5 bg-navy-light flex justify-start shrink-0">
               <button 
                 onClick={() => setStep(prev => prev - 1)}
                 className="flex items-center gap-2 text-sm text-cloud/50 hover:text-cloud transition-colors"
               >
                 <ArrowLeft className="h-4 w-4" /> Atgal
               </button>
             </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
