'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Target,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
  Briefcase,
  ExternalLink,
  ArrowRight,
  Building2,
  Globe,
  Heart,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

const values = [
  {
    icon: Target,
    title: 'Outcome-First',
    desc: 'Every product we build is designed around one metric: did the student get the result they needed — a grade, a skill, or a job?',
    color: 'text-accent-green',
    bg: 'bg-accent-green/10',
    border: 'border-accent-green/20',
  },
  {
    icon: Lightbulb,
    title: 'Real Projects Only',
    desc: 'No theoretical fluff. Every project, course and cohort involves building something real that students can demo, deploy, and own.',
    color: 'text-accent-blue',
    bg: 'bg-accent-blue/10',
    border: 'border-accent-blue/20',
  },
  {
    icon: Shield,
    title: 'Academic Integrity',
    desc: 'We encourage understanding and building on top of our projects — not blind submission. Our viva support ensures genuine learning.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
  },
  {
    icon: Heart,
    title: 'Student-Centric Pricing',
    desc: 'Engineering students in India are price-sensitive. We keep our pricing honest, competitive, and flexible — with EMI options on cohorts.',
    color: 'text-pink-400',
    bg: 'bg-pink-400/10',
    border: 'border-pink-400/20',
  },
]

const whyUs = [
  { stat: '1,200+', label: 'Students Served' },
  { stat: '500+', label: 'Projects Delivered' },
  { stat: '100+', label: 'Colleges Covered' },
  { stat: '85%', label: 'Placement Rate' },
]

const team = [
  { name: 'Ravi Sharma', role: 'Founder & CEO', bg: 'from-accent-green/20 to-accent-blue/10' },
  { name: 'Priya Mehta', role: 'Head of Curriculum', bg: 'from-accent-blue/20 to-purple-400/10' },
  { name: 'Kiran Das', role: 'Lead Mentor — AI/ML', bg: 'from-purple-400/20 to-pink-400/10' },
  { name: 'Suresh Reddy', role: 'Head of Placements', bg: 'from-yellow-400/20 to-orange-400/10' },
]

const sisterBrands = [
  {
    name: 'WolvesLogic.com',
    tagline: 'IT Job Support',
    desc: 'Expert-led job support for IT professionals — from project proxy support to interview prep for working professionals.',
    icon: Briefcase,
    color: 'text-accent-blue',
    bg: 'bg-accent-blue/10',
    border: 'border-accent-blue/20',
    href: '#',
  },
  {
    name: 'OriginalAssignmentHelp.com',
    tagline: 'Assignment Help',
    desc: 'High-quality, plagiarism-free assignment and research help for international students across engineering, business, and sciences.',
    icon: Globe,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
    href: '#',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-80" />
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-6"
          >
            <motion.p
              variants={fadeUp}
              className="text-accent-green text-sm font-medium uppercase tracking-widest"
            >
              Our Story
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-syne text-4xl sm:text-5xl font-bold text-txt-primary"
            >
              Building the Bridge Between{' '}
              <span className="text-gradient-green">Education</span> and{' '}
              <span className="text-gradient-blue">Employment</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-txt-secondary text-lg max-w-2xl mx-auto leading-relaxed"
            >
              TheRealSkill was born out of a simple frustration: India produces the world&apos;s
              most engineering graduates, yet thousands struggle to find their first job because
              the system doesn&apos;t connect theory to real skill.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-surface-border bg-surface/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {whyUs.map(({ stat, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="text-center"
              >
                <div className="font-syne text-4xl font-bold text-gradient-green mb-2">{stat}</div>
                <div className="text-txt-secondary text-sm">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeUp}>
              <p className="text-accent-green text-sm font-medium uppercase tracking-widest mb-3">
                Our Mission
              </p>
              <h2 className="font-syne text-3xl sm:text-4xl font-bold text-txt-primary mb-5">
                Real Skills for the{' '}
                <span className="text-gradient-green">Real World</span>
              </h2>
              <div className="space-y-4 text-txt-secondary leading-relaxed">
                <p>
                  India&apos;s engineering education system is brilliant at producing graduates
                  with theoretical knowledge. But industry needs builders — people who can ship
                  code, debug hardware, and present their work confidently.
                </p>
                <p>
                  TheRealSkill fills that gap. We give B.Tech & M.Tech students access to
                  production-quality final year projects, skill-building courses, and placement
                  infrastructure that was previously only available to students at premium
                  institutes.
                </p>
                <p>
                  We are not a content farm. Every project is hand-crafted, every course is
                  reviewed for industry relevance, and every cohort is mentored by working
                  professionals.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              {[
                { label: 'Founded', value: '2022', icon: Building2 },
                { label: 'Headquarters', value: 'India (Pan-India Delivery)', icon: Globe },
                { label: 'Parent Company', value: 'Harviera IT Solutions LLP', icon: Building2 },
                { label: 'Focus', value: 'B.Tech & M.Tech Engineering Students', icon: Users },
                { label: 'Contact', value: 'hello@therealskill.com', icon: TrendingUp },
              ].map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-surface-border"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent-green/10 border border-accent-green/20 flex items-center justify-center">
                    <Icon size={16} className="text-accent-green" />
                  </span>
                  <div>
                    <p className="text-txt-muted text-xs">{label}</p>
                    <p className="text-txt-primary font-medium text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-accent-green text-sm font-medium uppercase tracking-widest mb-3">
                What Drives Us
              </p>
              <h2 className="font-syne text-3xl sm:text-4xl font-bold text-txt-primary">
                Our <span className="text-gradient-green">Values</span>
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((v) => (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  className={`p-6 rounded-2xl bg-surface border ${v.border} hover:shadow-card transition-all`}
                >
                  <span
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${v.bg} border ${v.border} mb-4`}
                  >
                    <v.icon size={18} className={v.color} />
                  </span>
                  <h3 className={`font-syne font-semibold text-base mb-2 ${v.color}`}>
                    {v.title}
                  </h3>
                  <p className="text-txt-secondary text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-accent-green text-sm font-medium uppercase tracking-widest mb-3">
                The People
              </p>
              <h2 className="font-syne text-3xl sm:text-4xl font-bold text-txt-primary">
                Meet the <span className="text-gradient-green">Team</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {team.map((member) => (
                <motion.div
                  key={member.name}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center p-5 rounded-2xl bg-surface card-border hover:shadow-card transition-all"
                >
                  <span
                    className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${member.bg} text-txt-primary font-syne font-bold text-xl mb-3 border border-surface-border`}
                  >
                    {member.name[0]}
                  </span>
                  <p className="font-syne font-semibold text-txt-primary text-sm">{member.name}</p>
                  <p className="text-txt-muted text-xs mt-1">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Harviera & Sister Brands */}
      <section className="section-padding bg-surface/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-accent-green text-sm font-medium uppercase tracking-widest mb-3">
                Our Ecosystem
              </p>
              <h2 className="font-syne text-3xl sm:text-4xl font-bold text-txt-primary">
                Harviera IT Solutions LLP
              </h2>
              <p className="text-txt-secondary mt-3 max-w-xl mx-auto">
                TheRealSkill is part of Harviera IT Solutions LLP — India&apos;s growing EdTech
                and IT services group with three brands serving students and professionals.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {/* TheRealSkill */}
              <motion.div
                variants={fadeUp}
                className="p-5 rounded-2xl border border-accent-green/30 bg-accent-green/5"
              >
                <span className="text-xs text-accent-green font-semibold uppercase tracking-wider mb-2 block">
                  Current Platform
                </span>
                <h3 className="font-syne font-bold text-txt-primary mb-2">TheRealSkill.com</h3>
                <p className="text-txt-secondary text-sm">
                  Final year projects, courses, cohorts & placement prep for B.Tech & M.Tech
                  engineering students in India.
                </p>
              </motion.div>

              {sisterBrands.map((brand) => (
                <motion.div key={brand.name} variants={fadeUp}>
                  <a
                    href={brand.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group block p-5 rounded-2xl bg-surface border ${brand.border} hover:shadow-card transition-all h-full`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider ${brand.color}`}
                      >
                        Sister Brand
                      </span>
                      <ExternalLink size={13} className={`${brand.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
                    </div>
                    <h3 className="font-syne font-bold text-txt-primary mb-1 group-hover:text-accent-green transition-colors">
                      {brand.name}
                    </h3>
                    <p className={`text-xs font-medium mb-2 ${brand.color}`}>{brand.tagline}</p>
                    <p className="text-txt-secondary text-sm">{brand.desc}</p>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-syne text-3xl font-bold text-txt-primary mb-4">
              Want to Work With Us?
            </h2>
            <p className="text-txt-secondary mb-8">
              Whether you&apos;re a student, a college looking to partner, or an expert who wants
              to teach — we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent-green text-dark font-semibold hover:bg-accent-green/90 transition-all group"
              >
                Get in Touch
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="mailto:hello@therealskill.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-surface-border text-txt-primary font-semibold hover:border-accent-blue/50 hover:text-accent-blue transition-all"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
