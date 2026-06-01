import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Campus Ambassador Program — Earn ₹500 Per Referral',
  description:
    'Join the TheRealSkill Campus Ambassador Program. Earn ₹500 per successful referral, get a free course, official certificate, and build your resume. Apply for free.',
  openGraph: {
    title: 'Campus Ambassador Program | TheRealSkill',
    description: 'Represent TheRealSkill at your college. Earn ₹500/referral, get free courses & official certification.',
    url: 'https://therealskill.com/ambassador',
  },
}

export default function AmbassadorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
