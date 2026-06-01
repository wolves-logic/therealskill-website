import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Engineering Insights, Project Guides & Placement Tips',
  description:
    'Project ideas, placement prep guides, coding tutorials, and career advice for Indian B.Tech & M.Tech students — written by engineers.',
  openGraph: {
    title: 'TheRealSkill Blog',
    description: 'Engineering insights, final year project guides, and placement tips for Indian engineering students.',
    url: 'https://therealskill.com/blog',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
