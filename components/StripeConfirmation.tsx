"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

function StripeConfirmationContent() {
  const [show, setShow] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      setShow(true);
      
      // Clean up the URL so the popup doesn't show again on refresh
      const url = new URL(window.location.href);
      url.searchParams.delete("success");
      window.history.replaceState({}, "", url.toString());
      
      // Auto close after 8 seconds
      const timer = setTimeout(() => setShow(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-[100] bg-navy/95 backdrop-blur-md text-cloud p-5 rounded-2xl shadow-2xl flex items-start space-x-4 max-w-md border border-gold/40"
        >
          <CheckCircle className="w-8 h-8 text-green-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-bold text-xl mb-1 text-white">Pavyko! Jūs jau viduje 🎉</h3>
            <p className="text-sm text-cloud/80 leading-relaxed">
              Jūsų mokėjimas buvo sėkmingas. Sveiki prisijungę prie dirbtuvių! Pasitikrinkite savo el. paštą dėl tolimesnių žingsnių.
            </p>
          </div>
          <button
            onClick={() => setShow(false)}
            className="text-cloud/50 hover:text-white transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function StripeConfirmation() {
  return (
    <Suspense fallback={null}>
      <StripeConfirmationContent />
    </Suspense>
  );
}
