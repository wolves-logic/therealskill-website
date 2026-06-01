import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — WhatsApp, Email & Phone',
  description:
    'Get in touch with TheRealSkill for project enquiries, course help, or custom prototype quotes. We respond within 30 minutes on WhatsApp. Available 9 AM–10 PM IST.',
  openGraph: {
    title: 'Contact TheRealSkill',
    description: 'Chat on WhatsApp or email us at hello@therealskill.com. Response within 30 minutes.',
    url: 'https://therealskill.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
