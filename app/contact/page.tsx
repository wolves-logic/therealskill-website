'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, Send, CheckCircle2, ChevronDown } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const interests = [
  'Final Year Project',
  'Recorded Course',
  'Live Cohort Batch',
  'Prototype Development',
  'Placement Prep',
  'College Partnership',
  'Other',
]

const faqs = [
  {
    q: 'How quickly do you respond after I reach out?',
    a: 'We typically respond within 30 minutes on WhatsApp (9 AM–10 PM IST) and within 24 hours via email.',
  },
  {
    q: 'Can projects be customized for my specific college requirements?',
    a: 'Yes, absolutely. We customize projects to match your institution\'s guidelines, department requirements, and viva format. Share your requirements on WhatsApp and we\'ll confirm feasibility immediately.',
  },
  {
    q: 'Do you offer EMI or payment plans for cohorts?',
    a: 'Yes. All cohorts above ₹5,000 can be paid in 2–3 instalments. We accept UPI, net banking, debit/credit cards, and Razorpay EMI.',
  },
  {
    q: 'What if I need support after receiving my project?',
    a: 'All projects come with 30-day WhatsApp support. Viva prep sessions can be booked separately, and most projects include a 1-hour walkthrough call.',
  },
  {
    q: 'Are your projects original/unique?',
    a: 'Every project is built fresh with a unique dataset, code structure, and documentation. We don\'t resell identical copies — each order gets a tailored variant.',
  },
]

type FormState = {
  name: string
  email: string
  phone: string
  interest: string
  message: string
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 600))
    const msg = encodeURIComponent(
      `Hi TheRealSkill! I'm ${form.name}.\n\nEmail: ${form.email}\nPhone: ${form.phone || 'Not provided'}\nInterested in: ${form.interest || 'General enquiry'}\n\nMessage: ${form.message}`
    )
    window.open(`https://wa.me/919959691347?text=${msg}`, '_blank')
    setLoading(false)
    setSubmitted(true)
  }

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-80" />
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-5"
          >
            <motion.p
              variants={fadeUp}
              className="text-accent-green text-sm font-medium uppercase tracking-widest"
            >
              Let&apos;s Talk
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-syne text-4xl sm:text-5xl font-bold text-txt-primary"
            >
              Get in <span className="text-gradient-green">Touch</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-txt-secondary text-lg">
              Have a question about a project, course, or custom prototype? We respond within
              minutes on WhatsApp and within 24 hours via email.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact options */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid sm:grid-cols-3 gap-4 mb-12"
        >
          {[
            {
              icon: MessageCircle,
              title: 'WhatsApp',
              value: '+91-9959-691-347',
              desc: 'Fastest response — typically < 30 min',
              href: 'https://wa.me/919959691347?text=Hi%20TheRealSkill!',
              color: 'text-[#25D366]',
              bg: 'bg-[#25D366]/10',
              border: 'border-[#25D366]/20',
              cta: 'Chat Now',
            },
            {
              icon: Mail,
              title: 'Email',
              value: 'hello@therealskill.com',
              desc: 'For detailed enquiries and quotes',
              href: 'mailto:hello@therealskill.com',
              color: 'text-accent-blue',
              bg: 'bg-accent-blue/10',
              border: 'border-accent-blue/20',
              cta: 'Send Email',
            },
            {
              icon: Phone,
              title: 'Phone',
              value: '+91-9959-691-347',
              desc: 'Available Mon–Sat, 9 AM–8 PM IST',
              href: 'tel:+919959691347',
              color: 'text-accent-green',
              bg: 'bg-accent-green/10',
              border: 'border-accent-green/20',
              cta: 'Call Us',
            },
          ].map((c) => (
            <motion.a
              key={c.title}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              variants={fadeUp}
              className={`group flex flex-col items-center text-center p-6 rounded-2xl bg-surface border ${c.border} hover:shadow-card transition-all`}
            >
              <span
                className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-3`}
              >
                <c.icon size={20} className={c.color} />
              </span>
              <p className="font-syne font-semibold text-txt-primary mb-1">{c.title}</p>
              <p className={`text-sm font-medium ${c.color} mb-1`}>{c.value}</p>
              <p className="text-txt-muted text-xs mb-4">{c.desc}</p>
              <span
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg ${c.bg} border ${c.border} ${c.color} text-sm font-medium group-hover:scale-105 transition-transform`}
              >
                {c.cta}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-7 rounded-2xl bg-surface border border-surface-border">
              <h2 className="font-syne text-xl font-bold text-txt-primary mb-6">
                Send a Message
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-10 gap-4"
                >
                  <span className="w-14 h-14 rounded-full bg-accent-green/15 border border-accent-green/30 flex items-center justify-center">
                    <CheckCircle2 size={28} className="text-accent-green" />
                  </span>
                  <h3 className="font-syne font-bold text-txt-primary text-lg">
                    Message Sent!
                  </h3>
                  <p className="text-txt-secondary text-sm max-w-xs">
                    Thanks, {form.name}! We&apos;ll get back to you at{' '}
                    <span className="text-accent-green">{form.email}</span> within 24 hours.
                    For faster help, chat on WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/919959691347"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#22c55e] transition-colors mt-2"
                  >
                    Open WhatsApp
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-txt-secondary text-xs font-medium mb-1.5">
                        Full Name *
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={set('name')}
                        placeholder="Arjun Kumar"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-light border border-surface-border text-txt-primary text-sm placeholder:text-txt-muted focus:outline-none focus:border-accent-green/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-txt-secondary text-xs font-medium mb-1.5">
                        Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={set('email')}
                        placeholder="you@college.ac.in"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-light border border-surface-border text-txt-primary text-sm placeholder:text-txt-muted focus:outline-none focus:border-accent-green/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-txt-secondary text-xs font-medium mb-1.5">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={set('phone')}
                        placeholder="+91 9876543210"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-light border border-surface-border text-txt-primary text-sm placeholder:text-txt-muted focus:outline-none focus:border-accent-green/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-txt-secondary text-xs font-medium mb-1.5">
                        I&apos;m Interested In
                      </label>
                      <div className="relative">
                        <select
                          value={form.interest}
                          onChange={set('interest')}
                          className="w-full appearance-none px-4 py-2.5 rounded-xl bg-surface-light border border-surface-border text-txt-primary text-sm focus:outline-none focus:border-accent-green/50 transition-colors"
                        >
                          <option value="">Select a service...</option>
                          {interests.map((i) => (
                            <option key={i} value={i}>{i}</option>
                          ))}
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-txt-muted pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-txt-secondary text-xs font-medium mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={set('message')}
                      placeholder="Tell us about your project requirements, course interest, or any questions..."
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-light border border-surface-border text-txt-primary text-sm placeholder:text-txt-muted focus:outline-none focus:border-accent-green/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent-green text-dark font-semibold hover:bg-accent-green/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed group"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-dark/40 border-t-dark rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-txt-muted text-xs text-center">
                    Or skip the form —{' '}
                    <a
                      href="https://wa.me/919959691347"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] hover:underline"
                    >
                      chat directly on WhatsApp
                    </a>{' '}
                    for an instant response.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-syne text-xl font-bold text-txt-primary mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-surface-border overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-4 text-left bg-surface hover:bg-surface-light transition-colors"
                  >
                    <span className="text-txt-primary text-sm font-medium leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-txt-muted flex-shrink-0 transition-transform duration-200 ${
                        openFaq === i ? 'rotate-180 text-accent-green' : ''
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 text-txt-secondary text-sm leading-relaxed border-t border-surface-border pt-3">
                      {faq.a}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8 p-5 rounded-2xl border border-[#25D366]/20 bg-[#25D366]/5">
              <p className="text-txt-secondary text-sm mb-4">
                Still have questions? The fastest way to get an answer is on WhatsApp. We&apos;re
                online 9 AM–10 PM IST, every day.
              </p>
              <a
                href="https://wa.me/919959691347?text=Hi%20TheRealSkill%2C%20I%20have%20a%20question!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#22c55e] transition-all hover:shadow-[0_0_20px_rgba(37,211,102,0.3)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.122 1.527 5.854L.057 23.882l6.18-1.621A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.785 9.785 0 01-5.015-1.382l-.36-.214-3.727.977.996-3.642-.234-.374A9.787 9.787 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z" />
                </svg>
                WhatsApp Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
