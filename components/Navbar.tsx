"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 inset-x-0 z-50 border-b border-white/5 bg-navy/30 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-center md:justify-start px-6 py-4">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight"
        >
          <span className="text-gold">Vibe</span>
          <span className="text-white"> Lab</span>
        </Link>
      </div>
    </motion.header>
  );
}
