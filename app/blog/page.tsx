'use client'

import { motion } from 'framer-motion'
import { Clock, Tag, ArrowRight, BookOpen } from 'lucide-react'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}
const stagger = { visible: { transition: { staggerChildren: 0.12 } } }

const posts = [
  {
    id: 1,
    slug: 'ai-ml-final-year-project-ideas-2025',
    title: '10 Best AI/ML Final Year Project Ideas for Engineers in 2025',
    excerpt:
      'From face recognition to LLM-powered apps — these AI/ML project ideas will impress your evaluators, strengthen your resume, and actually teach you production-grade ML skills.',
    category: 'Projects',
    categoryColor: 'text-accent-green bg-accent-green/10 border-accent-green/20',
    readTime: '5 min read',
    date: 'May 22, 2025',
    author: 'Rahul Verma',
    tags: ['AI/ML', 'Final Year', 'Project Ideas'],
  },
  {
    id: 2,
    slug: 'crack-campus-placement-product-companies',
    title: 'How to Crack Campus Placements at Top Product Companies',
    excerpt:
      'A battle-tested, step-by-step guide to acing placement rounds at companies like Google, Amazon, Flipkart, and fast-growing Indian startups — from resume writing to final offer.',
    category: 'Placement',
    categoryColor: 'text-accent-blue bg-accent-blue/10 border-accent-blue/20',
    readTime: '8 min read',
    date: 'May 15, 2025',
    author: 'Ankit Patel',
    tags: ['Placement', 'DSA', 'Career'],
  },
  {
    id: 3,
    slug: 'mern-stack-guide-btech-final-year',
    title: 'MERN Stack: A Complete Guide for B.Tech Final Year Projects',
    excerpt:
      'Learn how to plan, build, and deploy a full-stack MERN project for your final year. Complete roadmap from setting up MongoDB Atlas to deploying your app on Vercel with CI/CD.',
    category: 'Web Dev',
    categoryColor: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
    readTime: '6 min read',
    date: 'May 8, 2025',
    author: 'Saurabh Singh',
    tags: ['MERN', 'Web Dev', 'Tutorial'],
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-70" />
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-4"
          >
            <motion.p
              variants={fadeUp}
              className="text-accent-green text-sm font-medium uppercase tracking-widest"
            >
              The TheRealSkill Blog
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-syne text-4xl sm:text-5xl font-bold text-txt-primary"
            >
              Engineering <span className="text-gradient-green">Insights</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-txt-secondary text-lg max-w-xl mx-auto">
              Project guides, placement prep strategies, career advice, and deep dives — all
              written for Indian engineering students by engineers who&apos;ve been there.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Posts */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="space-y-6"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={fadeUp}
              className="group p-6 sm:p-8 rounded-2xl bg-surface card-border hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${post.categoryColor}`}
                >
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-txt-muted text-xs">
                  <Clock size={12} />
                  {post.readTime}
                </span>
                <span className="text-txt-muted text-xs">{post.date}</span>
                <span className="text-txt-muted text-xs">By {post.author}</span>
              </div>

              <h2 className="font-syne font-bold text-xl text-txt-primary mb-3 leading-snug group-hover:text-accent-green transition-colors">
                {post.title}
              </h2>
              <p className="text-txt-secondary text-sm leading-relaxed mb-4">{post.excerpt}</p>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1 text-xs text-txt-muted px-2 py-0.5 rounded-md bg-surface-light border border-surface-border"
                    >
                      <Tag size={9} />
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://wa.me/919959691347?text=Hi%20TheRealSkill!%20I%20want%20to%20read%20more%20about%20%22${encodeURIComponent(post.title)}%22.%20Can%20you%20share%20more%20resources%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent-green text-sm font-medium hover:gap-2.5 transition-all group/btn"
                >
                  Read More
                  <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* More coming soon */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center p-8 rounded-2xl border border-dashed border-surface-border"
        >
          <BookOpen size={32} className="text-txt-muted mx-auto mb-3" />
          <h3 className="font-syne font-semibold text-txt-primary mb-2">More Articles Coming Soon</h3>
          <p className="text-txt-secondary text-sm mb-5">
            Want us to cover a specific topic? Let us know on WhatsApp and we might write it next.
          </p>
          <a
            href="https://wa.me/919959691347?text=Hi%20TheRealSkill!%20I%27d%20love%20to%20read%20an%20article%20about..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface border border-surface-border text-txt-secondary text-sm font-medium hover:border-accent-green/40 hover:text-accent-green transition-all"
          >
            Suggest a Topic
          </a>
        </motion.div>
      </section>
    </div>
  )
}
