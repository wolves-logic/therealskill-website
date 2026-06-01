'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Clock,
  BookOpen,
  Users,
  Star,
  ArrowRight,
  Play,
  Calendar,
  CheckCircle2,
  Zap,
} from 'lucide-react'

const tabs = ['All', 'Recorded', 'Live Cohorts', 'Placement Prep']

const courses = [
  {
    id: 1,
    type: 'Recorded',
    title: 'Python Mastery for Engineers',
    description:
      'From basics to advanced Python — OOP, file handling, data structures, APIs, automation & real projects.',
    instructor: 'Rahul Verma',
    duration: '40 hrs',
    lessons: 95,
    students: 850,
    rating: 4.9,
    level: 'Beginner → Advanced',
    price: 999,
    originalPrice: 2999,
    tags: ['Python', 'OOP', 'Automation', 'Projects'],
    highlights: ['Certificate', 'Lifetime Access', 'Source Code', 'Discord Support'],
  },
  {
    id: 2,
    type: 'Recorded',
    title: 'MERN Stack Development',
    description:
      'Build full-stack web apps with MongoDB, Express, React and Node.js. Includes 3 capstone projects.',
    instructor: 'Saurabh Singh',
    duration: '60 hrs',
    lessons: 140,
    students: 620,
    rating: 4.8,
    level: 'Intermediate',
    price: 1499,
    originalPrice: 3999,
    tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
    highlights: ['Certificate', 'Lifetime Access', '3 Projects', 'Code Reviews'],
  },
  {
    id: 3,
    type: 'Recorded',
    title: 'DSA with Python & Java',
    description:
      'Master arrays, trees, graphs, DP and system design with 200+ coding problems and interview patterns.',
    instructor: 'Ankit Patel',
    duration: '55 hrs',
    lessons: 180,
    students: 1100,
    rating: 4.9,
    level: 'Beginner → Advanced',
    price: 1299,
    originalPrice: 3499,
    tags: ['DSA', 'Python', 'Java', 'System Design'],
    highlights: ['Certificate', 'Lifetime Access', '200+ Problems', 'Interview Prep'],
  },
  {
    id: 4,
    type: 'Recorded',
    title: 'Machine Learning A–Z',
    description:
      'Regression, classification, clustering, NLP & deep learning from scratch with Sklearn and TensorFlow.',
    instructor: 'Deepika Rao',
    duration: '72 hrs',
    lessons: 165,
    students: 430,
    rating: 4.7,
    level: 'Intermediate → Advanced',
    price: 1999,
    originalPrice: 5999,
    tags: ['ML', 'Scikit-learn', 'TensorFlow', 'NLP'],
    highlights: ['Certificate', 'Lifetime Access', 'Real Datasets', 'Projects'],
  },
  {
    id: 5,
    type: 'Live Cohorts',
    title: 'Full Stack Live Bootcamp',
    description:
      'Instructor-led 3-month cohort covering HTML to deployment. Live classes 5 days/week with assignments.',
    instructor: 'Saurabh Singh',
    duration: '3 months',
    lessons: 0,
    students: 120,
    rating: 4.9,
    level: 'Beginner → Job Ready',
    price: 9999,
    originalPrice: 18000,
    tags: ['MERN', 'DevOps', 'AWS', 'System Design'],
    highlights: ['Live Classes', 'Mock Interviews', 'Placement Drive', 'Mentorship'],
    nextBatch: 'July 15, 2026',
    seatsLeft: 18,
  },
  {
    id: 6,
    type: 'Live Cohorts',
    title: 'AI/ML Engineering Cohort',
    description:
      'Deep dive into ML, DL, NLP and MLOps. Live problem-solving sessions and industry project experience.',
    instructor: 'Deepika Rao',
    duration: '3 months',
    lessons: 0,
    students: 85,
    rating: 4.8,
    level: 'Intermediate → Advanced',
    price: 12000,
    originalPrice: 22000,
    tags: ['ML', 'Deep Learning', 'MLOps', 'Python'],
    highlights: ['Live Classes', 'Kaggle Projects', 'Research Guidance', 'Placement Help'],
    nextBatch: 'July 20, 2026',
    seatsLeft: 12,
  },
  {
    id: 7,
    type: 'Live Cohorts',
    title: 'DSA Placement Cohort',
    description:
      '2-month intensive DSA + CP cohort with daily problems, weekly contests and mock placements.',
    instructor: 'Ankit Patel',
    duration: '2 months',
    lessons: 0,
    students: 200,
    rating: 4.9,
    level: 'Beginner → Placement Ready',
    price: 6999,
    originalPrice: 12000,
    tags: ['DSA', 'Competitive Programming', 'LeetCode'],
    highlights: ['Daily Problems', 'Mock Interviews', 'CP Contests', 'Resume Review'],
    nextBatch: 'July 1, 2026',
    seatsLeft: 5,
  },
  {
    id: 8,
    type: 'Placement Prep',
    title: 'Campus Placement Masterclass',
    description:
      'Complete placement prep: aptitude, reasoning, verbal, technical MCQs, coding rounds and HR prep.',
    instructor: 'Team TheRealSkill',
    duration: '30 hrs',
    lessons: 60,
    students: 540,
    rating: 4.8,
    level: 'All Levels',
    price: 999,
    originalPrice: 2499,
    tags: ['Aptitude', 'Reasoning', 'Technical MCQs', 'HR'],
    highlights: ['500+ Practice Tests', 'Mock Interviews', 'Resume Templates', 'Certificate'],
  },
  {
    id: 9,
    type: 'Placement Prep',
    title: 'Core CS Interview Prep',
    description:
      'OS, DBMS, CN, OOP — master all core subjects for technical rounds at product and service companies.',
    instructor: 'Team TheRealSkill',
    duration: '20 hrs',
    lessons: 45,
    students: 380,
    rating: 4.7,
    level: 'Intermediate',
    price: 1499,
    originalPrice: 3499,
    tags: ['OS', 'DBMS', 'CN', 'OOP'],
    highlights: ['Topic-wise Tests', 'Interview Q&A Bank', 'Notes PDF', 'Certificate'],
  },
]

const levelColor: Record<string, string> = {
  'Beginner → Advanced': 'text-green-400',
  'Beginner → Job Ready': 'text-accent-green',
  'Beginner → Placement Ready': 'text-accent-green',
  Intermediate: 'text-yellow-400',
  'Intermediate → Advanced': 'text-orange-400',
  'Intermediate → Job Ready': 'text-orange-400',
  'All Levels': 'text-accent-blue',
}

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState('All')

  const filtered =
    activeTab === 'All' ? courses : courses.filter((c) => c.type === activeTab)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-70" />
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent-green text-sm font-medium uppercase tracking-widest mb-4">
              Learn. Build. Get Hired.
            </p>
            <h1 className="font-syne text-4xl sm:text-5xl font-bold text-txt-primary mb-4">
              Courses & <span className="text-gradient-green">Cohorts</span>
            </h1>
            <p className="text-txt-secondary max-w-xl mx-auto text-lg">
              Self-paced recordings, live instructor-led cohorts, and focused placement prep —
              designed for engineering students who mean business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-16 z-40 bg-dark/95 backdrop-blur-md border-b border-surface-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-accent-green text-dark'
                    : 'bg-surface border border-surface-border text-txt-secondary hover:text-txt-primary hover:border-accent-green/30'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col rounded-2xl bg-surface card-border hover:shadow-card-hover transition-all duration-300 overflow-hidden"
              >
                {/* Card header band */}
                <div
                  className={`px-5 py-3 flex items-center justify-between border-b border-surface-border ${
                    course.type === 'Live Cohorts'
                      ? 'bg-accent-blue/5'
                      : course.type === 'Placement Prep'
                      ? 'bg-yellow-400/5'
                      : 'bg-accent-green/5'
                  }`}
                >
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      course.type === 'Live Cohorts'
                        ? 'text-accent-blue'
                        : course.type === 'Placement Prep'
                        ? 'text-yellow-400'
                        : 'text-accent-green'
                    }`}
                  >
                    {course.type === 'Recorded' ? '▶ Recorded' : course.type === 'Live Cohorts' ? '🔴 Live Cohort' : '🎯 Placement Prep'}
                  </span>
                  {course.seatsLeft && course.seatsLeft <= 10 && (
                    <span className="text-xs text-red-400 font-medium animate-pulse">
                      {course.seatsLeft} seats left!
                    </span>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  {/* Title */}
                  <h3 className="font-syne font-semibold text-txt-primary mb-2 text-base leading-snug group-hover:text-accent-green transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-txt-secondary text-sm leading-relaxed mb-4">
                    {course.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {course.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-md bg-surface-light border border-surface-border text-txt-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <span className="flex items-center gap-1.5 text-xs text-txt-secondary">
                      <Clock size={12} className="text-txt-muted" />
                      {course.duration}
                    </span>
                    {course.lessons > 0 ? (
                      <span className="flex items-center gap-1.5 text-xs text-txt-secondary">
                        <BookOpen size={12} className="text-txt-muted" />
                        {course.lessons} lessons
                      </span>
                    ) : (
                      course.nextBatch && (
                        <span className="flex items-center gap-1.5 text-xs text-accent-blue">
                          <Calendar size={12} />
                          {course.nextBatch}
                        </span>
                      )
                    )}
                    <span className="flex items-center gap-1.5 text-xs text-txt-secondary">
                      <Users size={12} className="text-txt-muted" />
                      {course.students.toLocaleString()} enrolled
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-yellow-400">
                      <Star size={12} fill="currentColor" />
                      {course.rating} rating
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-5 flex-1">
                    {course.highlights.map((h) => (
                      <span key={h} className="flex items-center gap-1 text-xs text-txt-muted">
                        <CheckCircle2 size={11} className="text-accent-green flex-shrink-0" />
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Instructor */}
                  <p className="text-xs text-txt-muted mb-4">
                    By{' '}
                    <span className="text-txt-secondary font-medium">{course.instructor}</span>
                    {' · '}
                    <span className={`font-medium ${levelColor[course.level] ?? 'text-txt-secondary'}`}>
                      {course.level}
                    </span>
                  </p>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-surface-border mt-auto">
                    <div>
                      <span className="font-syne font-bold text-xl text-accent-green">
                        ₹{course.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-txt-muted text-sm line-through ml-2">
                        ₹{course.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <a
                      href={`https://wa.me/919959691347?text=Hi%20TheRealSkill%2C%20I%27m%20interested%20in%20%22${encodeURIComponent(course.title)}%22`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent-green/10 border border-accent-green/30 text-accent-green text-sm font-medium hover:bg-accent-green hover:text-dark transition-all"
                    >
                      {course.type === 'Live Cohorts' ? 'Join Batch' : 'Enroll Now'}
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Cohort Banner */}
      <section className="py-16 border-t border-surface-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl p-8 sm:p-12 border border-accent-blue/20 bg-surface"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative grid sm:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/10 text-accent-blue text-xs font-medium mb-4">
                  <Zap size={12} />
                  Batches Filling Fast
                </span>
                <h2 className="font-syne text-2xl sm:text-3xl font-bold text-txt-primary mb-3">
                  Can&apos;t decide which cohort?
                </h2>
                <p className="text-txt-secondary mb-6">
                  Our mentors will help you pick the right course based on your goals, current
                  skill level, and placement timeline. Free 15-minute consultation on WhatsApp.
                </p>
                <a
                  href="https://wa.me/919959691347?text=Hi%20TheRealSkill%2C%20I%20want%20a%20free%20course%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-blue text-dark font-semibold hover:bg-accent-blue/90 transition-all hover:shadow-blue-glow group"
                >
                  Free Consultation
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="space-y-3">
                {['✓ 1-on-1 mentor guidance', '✓ Placement-focused curriculum', '✓ Industry mentors from top companies', '✓ Post-placement support'].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-surface-light border border-surface-border text-txt-secondary text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
