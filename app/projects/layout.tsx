import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Final Year Projects Marketplace — AI/ML, IoT, Web Dev, Data Science',
  description:
    'Buy ready-made final year engineering projects with source code, documentation, PPT & viva support. 500+ projects in AI/ML, IoT, Web Dev, Data Science & Blockchain. Starting at ₹2,000.',
  openGraph: {
    title: 'Final Year Projects Marketplace | TheRealSkill',
    description:
      '500+ final year engineering projects — AI/ML, IoT, Web Dev, Data Science. Full source code, docs & viva support. Starting at ₹2,000.',
    url: 'https://therealskill.com/projects',
  },
  twitter: {
    title: 'Final Year Projects | TheRealSkill',
    description: '500+ engineering projects with source code, docs & viva support.',
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
