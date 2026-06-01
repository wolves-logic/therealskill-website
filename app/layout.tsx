import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import UrgencyBanner from '@/components/UrgencyBanner'
import LeadPopup from '@/components/LeadPopup'
import MobileCTA from '@/components/MobileCTA'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://therealskill.com'),
  title: {
    default: 'TheRealSkill — Final Year Projects, Courses & Placement Prep for Engineers',
    template: '%s | TheRealSkill',
  },
  description:
    "India's #1 EdTech for B.Tech & M.Tech students. Buy final year projects (₹2K–₹15K), enroll in recorded courses, join live cohorts & crack placements. 1,200+ students trust us.",
  keywords: [
    'final year project',
    'engineering projects India',
    'B.Tech final year project',
    'M.Tech project',
    'AI ML project',
    'IoT project',
    'MERN stack course',
    'DSA placement prep',
    'campus placement India',
    'Harviera IT Solutions',
  ],
  authors: [{ name: 'TheRealSkill', url: 'https://therealskill.com' }],
  creator: 'Harviera IT Solutions LLP',
  publisher: 'Harviera IT Solutions LLP',
  openGraph: {
    title: 'TheRealSkill — Real Projects. Real Skills. Real Jobs.',
    description:
      "India's #1 EdTech for B.Tech & M.Tech students. Final year projects, courses, cohorts & placement prep.",
    url: 'https://therealskill.com',
    siteName: 'TheRealSkill',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheRealSkill — Real Projects. Real Skills. Real Jobs.',
    description:
      "India's #1 EdTech for engineering students. Final year projects, live cohorts & placement prep.",
    site: '@therealskill',
    creator: '@therealskill',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: 'https://therealskill.com' },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'mask-icon', url: '/favicon.svg', color: '#7EE8A2' },
    ],
  },
  manifest: '/site.webmanifest',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'TheRealSkill',
  url: 'https://therealskill.com',
  description:
    "India's premier EdTech platform for B.Tech & M.Tech engineering students. Final year projects, courses, live cohorts, and placement prep.",
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9959691347',
    contactType: 'customer support',
    email: 'hello@therealskill.com',
    availableLanguage: ['English', 'Hindi', 'Telugu'],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '200',
    bestRating: '5',
  },
  parentOrganization: {
    '@type': 'Organization',
    name: 'Harviera IT Solutions LLP',
    url: 'https://harvieraitsolutions.com',
  },
  sameAs: [
    'https://www.instagram.com/therealskill',
    'https://www.linkedin.com/company/therealskill',
    'https://www.youtube.com/@therealskill',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-dark text-txt-primary font-sans antialiased">
        <UrgencyBanner />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <LeadPopup />
        <MobileCTA />
      </body>
    </html>
  )
}
