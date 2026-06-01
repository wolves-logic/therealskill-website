import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About TheRealSkill — Harviera IT Solutions LLP',
  description:
    'TheRealSkill is a brand of Harviera IT Solutions LLP, India\'s growing EdTech group. Our mission: bridge the gap between engineering education and real-world employment.',
  openGraph: {
    title: 'About TheRealSkill | Harviera IT Solutions LLP',
    description:
      'Learn about TheRealSkill — our mission, team, and how we help 1,200+ engineering students build real skills and land real jobs.',
    url: 'https://therealskill.com/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
