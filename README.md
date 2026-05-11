# Vibe Lab — vibelab.lt

Premium landing page for **Vibe Lab**, built with Next.js 14 (App Router), React, Tailwind CSS, Framer Motion, and lucide-react.

## Brand palette

| Token        | Hex       | Use                                    |
| ------------ | --------- | -------------------------------------- |
| `navy`       | `#0A1628` | Page background                        |
| `electric`   | `#0B5FFF` | Primary accent (borders, glows, links) |
| `lime`       | `#C7FF3D` | High-visibility CTAs                   |
| `cloud`      | `#F1F5FB` | Body text                              |

## Typography

- **Headings** — `Space Grotesk`
- **Body** — `Inter`

Both loaded via `next/font/google` with `latin-ext` subset for Lithuanian diacritics.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

```
app/
  layout.tsx        # Root layout, fonts, metadata
  page.tsx          # Composes all sections
  globals.css       # Tailwind base + CSS variables
components/
  Navbar.tsx
  Hero.tsx          # Lead magnet + waitlist email form
  Workshops.tsx     # Premium live workshops
  Course.tsx        # AI Verslui 2026 waitlist
  StatsBar.tsx      # 1.6M+ followers / B2B / ROI
  B2BServices.tsx   # Done-for-you CTA
  About.tsx         # About the creator
  Footer.tsx        # Links + newsletter
  SectionHeading.tsx
```

## Form integration TODO

The Hero and Footer email forms are functional HTML elements with local
optimistic state. Wire `handleSubmit` to your provider of choice
(ConvertKit, Mailchimp, Resend, custom API route in `app/api/...`).

## Animations

Framer Motion is used for:
- Fade/slide-in on scroll (`whileInView` with `viewport={{ once: true }}`)
- Hero entrance staggered animations
- Subtle hover state transforms on CTAs
