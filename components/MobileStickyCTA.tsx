"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function MobileStickyCTA() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      // Show button after scrolling down 500px
      if (latest > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollY]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      className="fixed bottom-0 inset-x-0 z-50 p-4 md:hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-transparent -z-10" />
      
      <a
        href="#kaina"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold to-[#ffc800] px-6 py-4 text-sm font-black text-navy shadow-[0_0_20px_rgba(255,222,89,0.3)] transition-transform active:scale-95"
      >
        GAUTI AI ASISTENTĄ
        <ArrowRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}
