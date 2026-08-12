"use client";

import { useState } from "react";
import FunnelLanding from "./FunnelLanding";
import FunnelQuiz from "./FunnelQuiz";
import FunnelAnalyzing from "./FunnelAnalyzing";
import FunnelEmailCapture from "./FunnelEmailCapture";
import FunnelResults from "./FunnelResults";

export type FunnelState = "landing" | "quiz" | "analyzing" | "email" | "results";

export default function QuizFunnelMain() {
  const [step, setStep] = useState<FunnelState>("landing");
  
  // Store quiz answers to customize the pitch later
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [email, setEmail] = useState("");

  const handleStartQuiz = () => {
    setStep("quiz");
  };

  const handleQuizComplete = (finalAnswers: Record<string, string>) => {
    setAnswers(finalAnswers);
    setStep("analyzing");
    
    // Simulate AI analysis delay
    setTimeout(() => {
      setStep("email");
    }, 2500);
  };

  const handleEmailComplete = (userEmail: string) => {
    setEmail(userEmail);
    // Ideally, send email and answers to your CRM / Email marketing tool here
    setStep("results");
  };

  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center py-12 md:py-24">
      {step === "landing" && <FunnelLanding onStart={handleStartQuiz} />}
      {step === "quiz" && <FunnelQuiz onComplete={handleQuizComplete} />}
      {step === "analyzing" && <FunnelAnalyzing />}
      {step === "email" && <FunnelEmailCapture onComplete={handleEmailComplete} />}
      {step === "results" && <FunnelResults answers={answers} />}
    </div>
  );
}
