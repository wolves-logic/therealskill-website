import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Courses & Live Cohorts — Python, MERN, AI/ML, DSA',
  description:
    'Recorded courses & live instructor-led cohorts for engineering students. Python, MERN Stack, AI/ML, DSA, and placement prep. Starting at ₹299. Join 1,200+ enrolled students.',
  openGraph: {
    title: 'Engineering Courses & Live Cohorts | TheRealSkill',
    description:
      'Recorded courses & live cohorts in Python, MERN, AI/ML, DSA. Placement-focused curriculum with mentors from top companies.',
    url: 'https://therealskill.com/courses',
  },
  twitter: {
    title: 'Courses & Cohorts | TheRealSkill',
    description: 'Python, MERN, AI/ML, DSA courses & live cohorts for engineers.',
  },
}

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
