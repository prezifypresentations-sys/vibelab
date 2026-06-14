"use client";

import { Linkedin, Youtube, Instagram } from "lucide-react";

const links = {
  Produktai: [
    { label: "Ką išmoksite", href: "/#nauda" },
    { label: "AI Asistento Gidas", href: "/#kaina" },
  ],
  Apie: [
    { label: "Kūrėjas", href: "/#apie" },
    { label: "Tinklaraštis", href: "/blog" },
    { label: "Kontaktai", href: "mailto:zygis@vibelab.lt" },
  ],
  Teisinė: [
    { label: "Privatumo politika", href: "/privatumo-politika" },
    { label: "Naudojimo sąlygos", href: "/naudojimo-salygos" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-navy">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="font-display text-2xl font-bold tracking-tight">
              <span className="text-gold">Vibe</span>
              <span className="text-white"> Lab</span>
            </div>
            <p className="mt-4 max-w-sm text-cloud/65 leading-relaxed">
              Praktiniai AI sprendimai Lietuvos verslui —
              nuo asistentų kūrimo be kodo iki pilnų automatizacijų.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(links).map(([heading, group]) => (
              <div key={heading}>
                <p className="font-display text-sm font-semibold uppercase tracking-widest text-white/85">
                  {heading}
                </p>
                <ul className="mt-4 space-y-3">
                  {group.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-cloud/65 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-8">
          <p className="text-sm text-cloud/50">
            © {new Date().getFullYear()} Vibe Lab. Visos teisės saugomos.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#linkedin"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-cloud/70 hover:text-white hover:border-electric/40 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#youtube"
              aria-label="YouTube"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-cloud/70 hover:text-white hover:border-electric/40 transition-colors"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href="#instagram"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-cloud/70 hover:text-white hover:border-electric/40 transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
