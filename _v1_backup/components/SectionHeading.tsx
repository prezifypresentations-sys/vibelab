"use client";


type Props = {
  eyebrow?: string;
  eyebrowColor?: "gold" | "electric";
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  eyebrowColor = "electric",
  title,
  subtitle,
  align = "center",
}: Props) {
  const eyebrowClasses =
    eyebrowColor === "gold"
      ? "border-gold/30 bg-gold/10 text-gold"
      : "border-electric/30 bg-electric/10 text-electric-light";

  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${eyebrowClasses}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="animate-on-scroll will-change-transform mt-5 font-display text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg text-cloud/70 leading-relaxed ${
            align === "center" ? "mx-auto max-w-2xl" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
