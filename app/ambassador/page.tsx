'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  Gift,
  Users,
  Trophy,
  BookOpen,
  Briefcase,
  Star,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const benefits = [
  {
    icon: Gift,
    title: '₹500 Per Referral',
    desc: 'Earn ₹500 commission for every student you refer who completes a purchase — projects, courses, or cohorts.',
    color: 'text-accent-green',
    bg: 'bg-accent-green/10',
    border: 'border-accent-green/20',
  },
  {
    icon: BookOpen,
    title: 'Free Course Access',
    desc: 'Get free access to one course or recorded batch of your choice upon joining the program.',
    color: 'text-accent-blue',
    bg: 'bg-accent-blue/10',
    border: 'border-accent-blue/20',
  },
  {
    icon: Trophy,
    title: 'Ambassador Certificate',
    desc: 'Receive an official TheRealSkill Campus Ambassador certificate to add to LinkedIn and your resume.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
  },
  {
    icon: Users,
    title: 'Exclusive Community',
    desc: 'Join a private WhatsApp group of top ambassadors. Network, share tips, and grow together.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
  },
  {
    icon: Briefcase,
    title: 'Resume Boost',
    desc: 'Add "Campus Ambassador — TheRealSkill" to your resume. Stands out to tech recruiters.',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/20',
  },
  {
    icon: Star,
    title: 'Monthly Rewards',
    desc: 'Top ambassador each month wins exclusive rewards — gadgets, merchandise, and featured spotlights.',
    color: 'text-pink-400',
    bg: 'bg-pink-400/10',
    border: 'border-pink-400/20',
  },
]

const steps = [
  {
    step: '01',
    title: 'Apply on WhatsApp',
    desc: 'Share your college name, year, branch, and contact. We approve within 24 hours.',
  },
  {
    step: '02',
    title: 'Get Your Referral Code',
    desc: 'Receive a unique code + marketing kit (posters, copy, templates) to share with your peers.',
  },
  {
    step: '03',
    title: 'Refer & Earn',
    desc: 'Your peers use your code at checkout. You earn ₹500 per successful referral — paid weekly.',
  },
]

const requirements = [
  'Currently enrolled in a B.Tech, M.Tech, or BCA program',
  'Active presence on campus (hostel, departments, WhatsApp/Telegram groups)',
  'Passionate about tech and genuinely helpful to peers',
  'Minimum 3–5 hours per week dedication',
  'Access to a smartphone and WhatsApp',
]

const faqs = [
  {
    q: 'Is there a joining fee?',
    a: 'No. The campus ambassador program is completely free to join. We only ask for your time and genuine effort.',
  },
  {
    q: 'How and when are commissions paid?',
    a: 'Commissions are tracked in real-time and paid weekly via UPI, every Monday. Minimum payout threshold is ₹500.',
  },
  {
    q: 'Can I be an ambassador from any college?',
    a: 'Yes! We accept ambassadors from any engineering college across India — tier 1, 2, and 3 institutions alike.',
  },
  {
    q: 'How long does the program last?',
    a: 'The program runs semester-wise (6 months). You can reapply or continue after review at the end of each semester.',
  },
]

type Form = { name: string; college: string; year: string; phone: string }

export default function AmbassadorPage() {
  const [form, setForm] = useState<Form>({ name: '', college: '', year: '', phone: '' })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }))

  const handleApply = (e: FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hi TheRealSkill! I want to apply for the Campus Ambassador Program.\n\nName: ${form.name}\nCollege: ${form.college}\nYear: ${form.year}\nWhatsApp: ${form.phone}\n\nPlease guide me on the next steps!`
    )
    window.open(`https://wa.me/919959691347?text=${msg}`, '_blank')
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-5">
            <motion.div variants={fadeUp} className="flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-green/30 bg-accent-green/10 text-accent-green text-sm font-medium">
                <Users size={14} />
                Campus Ambassador Program
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-syne text-4xl sm:text-5xl font-bold text-txt-primary"
            >
              Represent TheRealSkill.{' '}
              <span className="text-gradient-green">Earn & Grow.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-txt-secondary text-lg max-w-2xl mx-auto">
              Become the go-to tech resource at your college. Help your peers with final year
              projects and courses — and earn real money + career credentials doing it.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent-green text-dark font-semibold hover:bg-accent-green/90 transition-all group"
              >
                Apply Now — It&apos;s Free
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 pt-2 text-sm text-txt-secondary">
              {['₹500/referral', 'Free course access', 'Official certificate', 'Weekly payouts'].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-accent-green" />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-surface/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-accent-green text-sm font-medium uppercase tracking-widest mb-3">Why Join</p>
              <h2 className="font-syne text-3xl sm:text-4xl font-bold text-txt-primary">
                What You <span className="text-gradient-green">Get</span>
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b) => (
                <motion.div
                  key={b.title}
                  variants={fadeUp}
                  className={`p-5 rounded-2xl bg-surface border ${b.border} hover:shadow-card transition-all`}
                >
                  <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${b.bg} border ${b.border} mb-3`}>
                    <b.icon size={18} className={b.color} />
                  </span>
                  <h3 className={`font-syne font-semibold text-sm mb-1.5 ${b.color}`}>{b.title}</h3>
                  <p className="text-txt-secondary text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-accent-green text-sm font-medium uppercase tracking-widest mb-3">Simple Process</p>
              <h2 className="font-syne text-3xl sm:text-4xl font-bold text-txt-primary">
                How It <span className="text-gradient-green">Works</span>
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-3 gap-6">
              {steps.map((s, i) => (
                <motion.div key={s.step} variants={fadeUp} className="relative text-center">
                  <div className="flex flex-col items-center">
                    <span className="font-syne text-5xl font-bold text-gradient-green mb-4 opacity-60">{s.step}</span>
                    <h3 className="font-syne font-semibold text-txt-primary mb-2">{s.title}</h3>
                    <p className="text-txt-secondary text-sm leading-relaxed">{s.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden sm:block absolute top-8 -right-3 w-6 h-px bg-surface-border" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Requirements + Application */}
      <section id="apply" className="section-padding bg-surface/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Requirements */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-syne text-2xl font-bold text-txt-primary mb-6">Requirements</h2>
              <ul className="space-y-3">
                {requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-txt-secondary text-sm leading-relaxed">
                    <CheckCircle2 size={16} className="text-accent-green mt-0.5 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-3">
                <h3 className="font-syne font-semibold text-txt-primary">FAQs</h3>
                {faqs.map((faq, i) => (
                  <div key={i} className="rounded-xl border border-surface-border overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-4 text-left bg-surface hover:bg-surface-light transition-colors"
                    >
                      <span className="text-txt-primary text-sm font-medium">{faq.q}</span>
                      <ChevronDown size={14} className={`text-txt-muted shrink-0 transition-transform ${openFaq === i ? 'rotate-180 text-accent-green' : ''}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4 pt-3 border-t border-surface-border text-txt-secondary text-sm leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Application form */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="p-7 rounded-2xl bg-surface border border-accent-green/20">
                <h2 className="font-syne text-2xl font-bold text-txt-primary mb-2">Apply Now</h2>
                <p className="text-txt-secondary text-sm mb-6">Fill in your details and we&apos;ll onboard you within 24 hours via WhatsApp.</p>
                <form onSubmit={handleApply} className="space-y-4">
                  <div>
                    <label className="block text-txt-secondary text-xs font-medium mb-1.5">Full Name *</label>
                    <input required value={form.name} onChange={set('name')} placeholder="Arjun Kumar"
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-light border border-surface-border text-txt-primary text-sm placeholder:text-txt-muted focus:outline-none focus:border-accent-green/50 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-txt-secondary text-xs font-medium mb-1.5">College Name *</label>
                    <input required value={form.college} onChange={set('college')} placeholder="e.g. VIT Vellore"
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-light border border-surface-border text-txt-primary text-sm placeholder:text-txt-muted focus:outline-none focus:border-accent-green/50 transition-colors" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-txt-secondary text-xs font-medium mb-1.5">Year *</label>
                      <div className="relative">
                        <select required value={form.year} onChange={set('year')}
                          className="w-full appearance-none px-4 py-2.5 rounded-xl bg-surface-light border border-surface-border text-txt-primary text-sm focus:outline-none focus:border-accent-green/50 transition-colors">
                          <option value="">Select</option>
                          {['1st Year', '2nd Year', '3rd Year', '4th Year', 'M.Tech 1st', 'M.Tech 2nd'].map((y) => (
                            <option key={y} value={y}>{y}</option>
                          ))}
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-txt-muted pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-txt-secondary text-xs font-medium mb-1.5">WhatsApp *</label>
                      <input required type="tel" value={form.phone} onChange={set('phone')} placeholder="9876543210"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-light border border-surface-border text-txt-primary text-sm placeholder:text-txt-muted focus:outline-none focus:border-accent-green/50 transition-colors" />
                    </div>
                  </div>
                  <button type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#22c55e] transition-all group">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.122 1.527 5.854L.057 23.882l6.18-1.621A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.785 9.785 0 01-5.015-1.382l-.36-.214-3.727.977.996-3.642-.234-.374A9.787 9.787 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z"/>
                    </svg>
                    Apply via WhatsApp
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-txt-muted text-xs text-center">We respond within 24 hours. No spam, ever.</p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
