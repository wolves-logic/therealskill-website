import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'TheRealSkill Terms of Service — rules governing use of our platform, payments, refunds, and intellectual property. Last updated June 2026.',
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
