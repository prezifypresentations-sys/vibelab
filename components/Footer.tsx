"use client";


export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="font-display text-2xl font-bold tracking-tight">
              <span className="text-gold">Vibe</span>
              <span className="text-white"> Lab</span>
            </div>
            <p className="mt-2 text-sm text-cloud/65 text-center md:text-left">
              Mokymai kaip sukurti pelningą AI paslaugų verslą.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end justify-center h-full">
            <p className="text-xs text-cloud/50">
              © {new Date().getFullYear()} Vibe Lab. Visos teisės saugomos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
