"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#workshops", label: "Įgūdžiai" },
  { href: "#course", label: "Kursas" },
  { href: "#about", label: "Apie" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-navy/80 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="font-display text-xl font-bold tracking-tight"
          >
            <span className="text-gold">Vibe</span>
            <span className="text-white"> Lab</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-cloud/70 hover:text-white transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold/60 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#hero"
              className="hidden md:inline-flex items-center rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy hover:bg-gold-light transition-all hover:shadow-[0_0_20px_rgba(255,222,89,0.3)]"
            >
              Stoti į eilę
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-cloud/70"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="font-display text-3xl font-bold text-white hover:text-gold transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#hero"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mt-4 inline-flex items-center rounded-full bg-gold px-8 py-3 text-base font-semibold text-navy"
              >
                Stoti į eilę
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
