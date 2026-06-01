# TheRealSkill.com

India's premier EdTech platform for B.Tech & M.Tech engineering students — final year projects, recorded courses, live cohort batches, prototype development, and placement prep.

**Parent company:** Harviera IT Solutions LLP  
**Sister brands:** WolvesLogic.com · OriginalAssignmentHelp.com

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion v11 |
| Icons | Lucide React |
| Fonts | Syne (headings) · DM Sans (body) via `next/font/google` |
| Language | TypeScript |

## Prerequisites

- Node.js 18.17+ (LTS recommended)
- npm 9+ or yarn

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

To deploy any changes, just run:

```bash
./deploy.sh
```

This script will:
1. Stage all changes (`git add .`)
2. Create a timestamped commit (`update: auto-deploy YYYY-MM-DD HH:MM:SS`)
3. Push to `origin main`
4. Vercel picks up the push and auto-deploys in ~60 seconds

> **Prerequisites:** Git remote must be set to your GitHub repo and Vercel must be connected to it.

## Build

```bash
# Production build (also validates types + lint)
npm run build

# Start production server locally
npm start
```

Deploy to [Vercel](https://vercel.com) with zero configuration — import the GitHub repo and Vercel auto-detects Next.js.

## Regenerate Favicons

If you update the brand colours or icon, re-run:

```bash
node scripts/generate-favicons.mjs
```

This reads `public/favicon.svg` and regenerates all PNG sizes + `favicon.ico`.

## Project Structure

```
therealskill-website/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, Navbar, Footer, WhatsApp button)
│   ├── globals.css         # Tailwind base + custom utilities
│   ├── page.tsx            # Homepage (hero, services, projects, testimonials, CTA)
│   ├── projects/
│   │   └── page.tsx        # Project marketplace with category & search filters
│   ├── courses/
│   │   └── page.tsx        # Courses & live cohorts listing
│   ├── about/
│   │   └── page.tsx        # About TheRealSkill, Harviera IT Solutions & sister brands
│   └── contact/
│       └── page.tsx        # Contact form, WhatsApp CTA & FAQ accordion
├── components/
│   ├── Navbar.tsx          # Responsive sticky nav with mobile menu
│   ├── Footer.tsx          # Footer with links, brands & contact
│   └── WhatsAppButton.tsx  # Floating WhatsApp FAB (fixed bottom-right)
├── tailwind.config.ts      # Custom colors, fonts, shadows, animations
├── next.config.js
└── tsconfig.json
```

## Design Tokens

| Token | Value |
|---|---|
| Background | `#0A0A0F` |
| Surface | `#111118` |
| Border | `#1E1E2E` |
| Accent Green | `#7EE8A2` |
| Accent Blue | `#5BC8FF` |
| Text Primary | `#F8F8F2` |
| Text Secondary | `#A0A0B8` |
| Heading Font | Syne |
| Body Font | DM Sans |

## Services & Pricing

| Service | Price Range |
|---|---|
| Final Year Projects (AI/ML, IoT, Web Dev, Data Science) | ₹2,000 – ₹15,000 |
| Recorded Courses (Python, MERN, AI/ML, DSA) | ₹299 – ₹1,999 |
| Live Cohort Batches | ₹3,000 – ₹12,000 |
| Prototype Development | ₹10,000 – ₹80,000 |
| Placement Prep | ₹999 – ₹4,999 |

## Contact

- **WhatsApp:** +91-9999-999-999
- **Email:** hello@therealskill.com

---

© Harviera IT Solutions LLP. All rights reserved.
