'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  Code2,
  BookOpen,
  Users,
  Wrench,
  Trophy,
  Star,
  TrendingUp,
  Briefcase,
  ChevronRight,
  Sparkles,
  Package,
  CreditCard,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react'
import AnimatedCounter from '@/components/AnimatedCounter'
import CollegeMarquee from '@/components/CollegeMarquee'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const services = [
  {
    icon: Code2,
    title: 'Final Year Projects',
    desc: 'AI/ML, IoT, Web Dev & Data Science projects with source code, documentation & viva support.',
    price: '₹2,000 – ₹15,000',
    color: 'text-accent-green',
    bg: 'bg-accent-green/10',
    border: 'border-accent-green/20',
    href: '/projects',
  },
  {
    icon: BookOpen,
    title: 'Recorded Courses',
    desc: 'Self-paced video courses in Python, MERN, AI/ML & DSA. Learn at your own speed.',
    price: '₹299 – ₹1,999',
    color: 'text-accent-blue',
    bg: 'bg-accent-blue/10',
    border: 'border-accent-blue/20',
    href: '/courses',
  },
  {
    icon: Users,
    title: 'Live Cohort Batches',
    desc: 'Instructor-led cohorts with live sessions, assignments, peer learning & placement support.',
    price: '₹3,000 – ₹12,000',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
    href: '/courses',
  },
  {
    icon: Wrench,
    title: 'Prototype Development',
    desc: 'Full hardware + software prototype builds for research scholars, startups & innovators.',
    price: '₹10,000 – ₹80,000',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/20',
    href: '/contact',
  },
  {
    icon: Trophy,
    title: 'Placement Prep',
    desc: 'DSA bootcamps, mock interviews, aptitude & core CS interview preparation.',
    price: '₹999 – ₹4,999',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
    href: '/courses',
  },
]

const howItWorks = [
  {
    step: '01',
    icon: Package,
    title: 'Choose Your Project or Course',
    desc: 'Browse 500+ final year projects, recorded courses & live cohorts. Filter by category, tech stack, or budget.',
  },
  {
    step: '02',
    icon: CreditCard,
    title: 'Make Payment & Share Requirements',
    desc: 'Pay securely via UPI, card, or net banking. Share your college guidelines and customization needs on WhatsApp.',
  },
  {
    step: '03',
    icon: CheckCircle2,
    title: 'Get Delivered in 24–72 Hours',
    desc: 'Receive source code, documentation, PPT & report. Includes a 1-hour walkthrough call + 30 days support.',
  },
]

const featuredProjects = [
  { title: 'Face Recognition Attendance', category: 'AI/ML', tech: ['Python', 'OpenCV', 'Flask'], price: '₹5,999' },
  { title: 'Smart Agriculture IoT Hub', category: 'IoT', tech: ['ESP32', 'MQTT', 'React'], price: '₹7,999' },
  { title: 'E-Commerce Platform (MERN)', category: 'Web Dev', tech: ['React', 'Node.js', 'MongoDB'], price: '₹8,999' },
  { title: 'Customer Churn Prediction', category: 'Data Science', tech: ['Python', 'Scikit-learn', 'Pandas'], price: '₹4,499' },
  { title: 'Plant Disease Detection CNN', category: 'AI/ML', tech: ['TensorFlow', 'Python', 'Keras'], price: '₹6,999' },
  { title: 'Hospital Management System', category: 'Web Dev', tech: ['Next.js', 'PostgreSQL', 'Prisma'], price: '₹6,999' },
]

const testimonials = [
  {
    name: 'Aryan Sharma',
    college: 'NIT Trichy',
    text: 'Got my final year project delivered with full documentation and viva support. Scored an A grade! The team was super responsive on WhatsApp.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    college: 'VIT Vellore',
    text: 'Enrolled in the MERN Stack Live Cohort. Got placed at a product startup within 3 months of completing the course. Best investment ever.',
    rating: 5,
  },
  {
    name: 'Rohit Kumar',
    college: 'BITS Pilani',
    text: "The DSA Placement Cohort helped me crack 4 interviews back-to-back. The mock interview sessions are genuinely tough and that's exactly what I needed.",
    rating: 5,
  },
]

const categoryColor: Record<string, string> = {
  'AI/ML': 'text-accent-green bg-accent-green/10 border-accent-green/20',
  IoT: 'text-accent-blue bg-accent-blue/10 border-accent-blue/20',
  'Web Dev': 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  'Data Science': 'text-orange-400 bg-orange-400/10 border-orange-400/20',
}

const faqs = [
  {
    q: "What's included with every final year project?",
    a: 'Every project includes source code, detailed documentation, PPT slides, and a project report. Most also include a 1-hour walkthrough call and 30-day WhatsApp support.',
  },
  {
    q: 'How long does it take to deliver a project?',
    a: 'Standard projects are delivered within 24–72 hours. Complex or custom projects (like full prototypes or advanced AI systems) may take 5–7 working days. Delivery time is confirmed before payment.',
  },
  {
    q: 'Are your projects original and plagiarism-free?',
    a: "Yes. Every project is built fresh for each order with a unique dataset, code structure, and documentation. We never resell identical copies — each variant is customized.",
  },
  {
    q: 'Can I customize the project for my college requirements?',
    a: "Absolutely. Share your department requirements, technology preferences, and any institution-specific guidelines, and we'll build accordingly. Just reach out on WhatsApp before placing the order.",
  },
  {
    q: 'What courses do you offer, and are they live or recorded?',
    a: 'We offer both recorded self-paced courses and live instructor-led cohorts. Recorded courses cover Python, MERN Stack, AI/ML, and DSA. Live cohorts run 2–3 months and include mentorship and placement support.',
  },
  {
    q: 'Do you offer refunds?',
    a: "We offer a revision policy rather than refunds on projects. If the delivered project doesn't match the agreed requirements, we'll revise it until you're satisfied. For courses, please contact us before enrollment if you have concerns.",
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept UPI, net banking, debit/credit cards, and Razorpay EMI (for orders above ₹3,000). Bank transfers are also accepted. All payments are 100% secure.',
  },
  {
    q: 'Do you provide viva support?',
    a: "Yes! Most projects come with 30-day WhatsApp viva support. We help you understand the project so you can confidently answer questions in your presentation. Premium viva prep sessions can also be booked separately.",
  },
]

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="overflow-x-hidden">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-accent-blue/8 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
            {/* Badge */}
            <motion.div variants={fadeUp} className="flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-green/30 bg-accent-green/10 text-accent-green text-sm font-medium">
                <Sparkles size={14} />
                India&apos;s #1 EdTech for Engineering Students
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-syne text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
            >
              Build Real{' '}
              <span className="text-gradient-green">Projects</span>.
              <br />
              Learn Real{' '}
              <span className="text-gradient-blue">Skills</span>.
              <br />
              Get Real{' '}
              <span className="text-gradient-green">Jobs</span>.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="max-w-2xl mx-auto text-txt-secondary text-lg sm:text-xl leading-relaxed"
            >
              Final year projects, recorded courses, live cohorts & placement prep — everything
              a B.Tech or M.Tech engineer needs to stand out and get hired.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent-green text-dark font-semibold text-base hover:bg-accent-green/90 transition-all hover:shadow-green-glow group"
              >
                Browse Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-surface-border text-txt-primary font-semibold text-base hover:border-accent-blue/50 hover:text-accent-blue transition-all"
              >
                Explore Courses
              </Link>
            </motion.div>

            {/* Rating badge */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-yellow-400/20 bg-yellow-400/5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <span className="text-txt-primary text-sm font-semibold">4.9/5</span>
                <span className="text-txt-muted text-xs">from 200+ verified reviews</span>
              </div>
              <p className="text-txt-muted text-sm">
                Trusted by students from NIT, VIT, BITS, JNTU & 100+ colleges
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── COLLEGE MARQUEE ─── */}
      <CollegeMarquee />

      {/* ─── STATS ─── */}
      <section className="border-b border-surface-border bg-surface/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { target: 2847, suffix: '', label: 'Students Enrolled', icon: Users },
              { target: 500, suffix: '+', label: 'Projects Delivered', icon: Code2 },
              { target: 85, suffix: '%', label: 'Placement Rate', icon: TrendingUp },
              { target: null, label: '4.9 / 5', icon: Star, static: '4.9★' },
            ].map(({ target, suffix, label, icon: Icon, static: staticVal }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex flex-col items-center text-center gap-2"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-green/10 border border-accent-green/20 mb-1">
                  <Icon size={18} className="text-accent-green" />
                </span>
                <span className="font-syne text-3xl font-bold text-gradient-green">
                  {staticVal ?? (
                    <AnimatedCounter target={target!} suffix={suffix} duration={2.2} />
                  )}
                </span>
                <span className="text-txt-secondary text-sm">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
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
                Simple Process
              </p>
              <h2 className="font-syne text-3xl sm:text-4xl font-bold text-txt-primary">
                How It <span className="text-gradient-green">Works</span>
              </h2>
              <p className="mt-3 text-txt-secondary max-w-lg mx-auto">
                From browsing to delivery — the entire process takes less than 24 hours.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6 relative">
              {/* Connector line */}
              <div className="hidden sm:block absolute top-10 left-[calc(33%+1.5rem)] right-[calc(33%+1.5rem)] h-px bg-gradient-to-r from-accent-green/30 via-accent-blue/30 to-accent-green/30" />
              {howItWorks.map((step, i) => (
                <motion.div key={step.step} variants={fadeUp} className="relative flex flex-col items-center text-center">
                  <span className="flex items-center justify-center w-20 h-20 rounded-2xl bg-surface border border-surface-border mb-4 relative z-10">
                    <step.icon size={28} className="text-accent-green" />
                  </span>
                  <span className="font-syne text-xs font-bold text-accent-green/50 uppercase tracking-widest mb-1">
                    Step {step.step}
                  </span>
                  <h3 className="font-syne font-semibold text-txt-primary mb-2">{step.title}</h3>
                  <p className="text-txt-secondary text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center mt-10">
              <a
                href="https://wa.me/919959691347?text=Hi%20TheRealSkill!%20I%27d%20like%20to%20get%20started."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#22c55e] transition-all hover:shadow-[0_0_20px_rgba(37,211,102,0.35)] group"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.122 1.527 5.854L.057 23.882l6.18-1.621A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.785 9.785 0 01-5.015-1.382l-.36-.214-3.727.977.996-3.642-.234-.374A9.787 9.787 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z"/>
                </svg>
                Start on WhatsApp
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section-padding bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-accent-green text-sm font-medium uppercase tracking-widest mb-3">
                What We Offer
              </p>
              <h2 className="font-syne text-3xl sm:text-4xl font-bold text-txt-primary">
                Everything You Need to <span className="text-gradient-green">Succeed</span>
              </h2>
              <p className="mt-4 text-txt-secondary max-w-xl mx-auto">
                Five powerful services designed specifically for engineering students at every
                stage — from academics to placement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <motion.div key={s.title} variants={fadeUp}>
                  <Link
                    href={s.href}
                    className="group block p-6 rounded-2xl bg-surface card-border hover:shadow-card-hover transition-all duration-300 h-full"
                  >
                    <span
                      className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${s.bg} border ${s.border} mb-4`}
                    >
                      <s.icon size={20} className={s.color} />
                    </span>
                    <h3 className="font-syne font-semibold text-lg text-txt-primary mb-2 group-hover:text-accent-green transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-txt-secondary text-sm leading-relaxed mb-4">{s.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-semibold ${s.color}`}>{s.price}</span>
                      <ChevronRight
                        size={16}
                        className={`${s.color} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all`}
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-end justify-between mb-10">
              <div>
                <p className="text-accent-green text-sm font-medium uppercase tracking-widest mb-3">
                  Project Marketplace
                </p>
                <h2 className="font-syne text-3xl sm:text-4xl font-bold text-txt-primary">
                  Featured <span className="text-gradient-green">Projects</span>
                </h2>
              </div>
              <Link
                href="/projects"
                className="hidden sm:inline-flex items-center gap-1 text-accent-green text-sm font-medium hover:gap-2 transition-all"
              >
                View All <ArrowRight size={14} />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredProjects.map((p) => (
                <motion.div key={p.title} variants={fadeUp}>
                  <Link
                    href="/projects"
                    className="group block p-5 rounded-2xl bg-surface card-border hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                          categoryColor[p.category] ?? 'text-txt-secondary bg-surface-light border-surface-border'
                        }`}
                      >
                        {p.category}
                      </span>
                      <span className="text-accent-green font-semibold text-sm">{p.price}</span>
                    </div>
                    <h3 className="font-syne font-semibold text-txt-primary mb-3 group-hover:text-accent-green transition-colors leading-snug">
                      {p.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 rounded-md bg-surface-light border border-surface-border text-txt-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-8 text-center sm:hidden">
              <Link href="/projects" className="inline-flex items-center gap-2 text-accent-green text-sm font-medium">
                View All Projects <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section-padding bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-accent-green text-sm font-medium uppercase tracking-widest mb-3">
                Student Stories
              </p>
              <h2 className="font-syne text-3xl sm:text-4xl font-bold text-txt-primary">
                What Our Students <span className="text-gradient-green">Say</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <motion.div key={t.name} variants={fadeUp} className="p-6 rounded-2xl bg-surface card-border">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-txt-secondary text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent-green/15 text-accent-green font-syne font-bold text-sm">
                      {t.name[0]}
                    </span>
                    <div>
                      <p className="text-txt-primary font-semibold text-sm">{t.name}</p>
                      <p className="text-txt-muted text-xs">{t.college}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <p className="text-accent-green text-sm font-medium uppercase tracking-widest mb-3">
                Got Questions?
              </p>
              <h2 className="font-syne text-3xl sm:text-4xl font-bold text-txt-primary">
                Frequently Asked <span className="text-gradient-green">Questions</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border border-surface-border overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left bg-surface hover:bg-surface-light transition-colors"
                  >
                    <span className="text-txt-primary text-sm font-medium leading-snug">{faq.q}</span>
                    <ChevronDown
                      size={16}
                      className={`text-txt-muted flex-shrink-0 transition-transform duration-200 ${
                        openFaq === i ? 'rotate-180 text-accent-green' : ''
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-4 sm:px-5 pb-4 pt-3 border-t border-surface-border text-txt-secondary text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className="text-center text-txt-muted text-sm mt-8">
              Still have questions?{' '}
              <a
                href="https://wa.me/919959691347"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline"
              >
                Ask us on WhatsApp
              </a>{' '}
              — we respond in minutes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl p-10 sm:p-14 text-center border border-accent-green/20 bg-surface"
          >
            <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-green/30 bg-accent-green/10 text-accent-green text-xs font-medium mb-6">
                <Briefcase size={12} />
                Ready to Level Up?
              </span>
              <h2 className="font-syne text-3xl sm:text-4xl font-bold text-txt-primary mb-4">
                Start Your Journey Today
              </h2>
              <p className="text-txt-secondary mb-8 max-w-lg mx-auto">
                Have a question about a project, course, or custom prototype? Our team responds
                within minutes on WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/919959691347?text=Hi%20TheRealSkill%2C%20I%27m%20interested%20in%20your%20services!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#22c55e] transition-all hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] group"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.122 1.527 5.854L.057 23.882l6.18-1.621A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.785 9.785 0 01-5.015-1.382l-.36-.214-3.727.977.996-3.642-.234-.374A9.787 9.787 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z" />
                  </svg>
                  Chat on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-surface-border text-txt-primary font-semibold hover:border-accent-blue/50 hover:text-accent-blue transition-all"
                >
                  Send an Email
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
