'use client'

import Link from 'next/link'
import { Zap, Mail, ExternalLink, MapPin, Instagram, Linkedin, Youtube, Send } from 'lucide-react'
import { useState, FormEvent } from 'react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/courses', label: 'Courses' },
  { href: '/blog', label: 'Blog' },
  { href: '/ambassador', label: 'Ambassador' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
]

const services = [
  { label: 'Final Year Projects', href: '/projects' },
  { label: 'Recorded Courses', href: '/courses' },
  { label: 'Live Cohort Batches', href: '/courses' },
  { label: 'Prototype Development', href: '/contact' },
  { label: 'Placement Prep', href: '/courses' },
  { label: 'Campus Ambassador', href: '/ambassador' },
]

const sisterBrands = [
  { label: 'WolvesLogic.com', desc: 'IT Job Support', href: '#' },
  { label: 'OriginalAssignmentHelp.com', desc: 'Assignment Help', href: '#' },
]

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/therealskill',
    icon: Instagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/therealskill',
    icon: Linkedin,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@therealskill',
    icon: Youtube,
  },
  {
    label: 'Telegram',
    href: 'https://t.me/therealskill',
    icon: Send,
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subDone, setSubDone] = useState(false)

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    const msg = encodeURIComponent(
      `Hi TheRealSkill! Please add me to your newsletter and updates list.\n\nEmail: ${email}`
    )
    window.open(`https://wa.me/919959691347?text=${msg}`, '_blank')
    setSubDone(true)
    setEmail('')
  }

  return (
    <footer className="border-t border-surface-border bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-green/10 border border-accent-green/30">
                <Zap size={16} className="text-accent-green" fill="currentColor" />
              </span>
              <span className="font-syne font-bold text-lg">
                <span className="text-txt-primary">The</span>
                <span className="text-gradient-green">RealSkill</span>
              </span>
            </Link>

            <p className="text-txt-secondary text-sm leading-relaxed mb-4">
              India&apos;s premier EdTech platform for B.Tech & M.Tech engineering students. Build real
              projects, learn real skills, get real jobs.
            </p>

            {/* Address */}
            <div className="flex items-start gap-2 text-txt-muted text-xs mb-4">
              <MapPin size={12} className="mt-0.5 shrink-0 text-accent-green/60" />
              <span>Hyderabad, Telangana, India</span>
            </div>

            <div className="space-y-2 mb-5">
              <a
                href="mailto:hello@therealskill.com"
                className="flex items-center gap-2 text-txt-secondary hover:text-accent-green transition-colors text-sm"
              >
                <Mail size={13} />
                hello@therealskill.com
              </a>
              <a
                href="https://wa.me/919959691347"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-txt-secondary hover:text-accent-green transition-colors text-sm"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.122 1.527 5.854L.057 23.882l6.18-1.621A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.785 9.785 0 01-5.015-1.382l-.36-.214-3.727.977.996-3.642-.234-.374A9.787 9.787 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z"/>
                </svg>
                +91-9959-691-347
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2.5">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-surface-light border border-surface-border flex items-center justify-center text-txt-muted hover:text-accent-green hover:border-accent-green/40 transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-syne font-semibold text-txt-primary mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-txt-secondary hover:text-accent-green transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-syne font-semibold text-txt-primary mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-txt-secondary hover:text-accent-green transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Company */}
          <div>
            <h4 className="font-syne font-semibold text-txt-primary mb-4 text-sm uppercase tracking-wider">
              Stay Updated
            </h4>

            {subDone ? (
              <p className="text-accent-green text-sm mb-6">
                ✓ You&apos;re subscribed! We&apos;ll keep you updated.
              </p>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="mb-6">
                <p className="text-txt-muted text-xs mb-3 leading-relaxed">
                  Get project ideas, discount alerts, and placement tips straight to your inbox.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-surface-light border border-surface-border text-txt-primary text-xs placeholder:text-txt-muted focus:outline-none focus:border-accent-green/50 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-lg bg-accent-green text-dark text-xs font-semibold hover:bg-accent-green/90 transition-colors shrink-0"
                  >
                    Join
                  </button>
                </div>
              </form>
            )}

            <div className="pt-4 border-t border-surface-border">
              <h5 className="font-syne font-semibold text-txt-primary mb-2 text-xs uppercase tracking-wider">
                Harviera IT Solutions LLP
              </h5>
              <p className="text-txt-muted text-xs mb-3 leading-relaxed">
                TheRealSkill is a brand of{' '}
                <a
                  href="https://harvieraitsolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-green hover:underline"
                >
                  Harviera IT Solutions LLP
                </a>
                , India&apos;s growing EdTech & IT services group.
              </p>
              <h6 className="text-txt-secondary text-xs font-semibold uppercase tracking-wider mb-2">
                Sister Brands
              </h6>
              <ul className="space-y-2">
                {sisterBrands.map(({ href, label, desc }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-1.5"
                    >
                      <ExternalLink
                        size={11}
                        className="text-accent-blue mt-0.5 flex-shrink-0 group-hover:text-accent-green transition-colors"
                      />
                      <span>
                        <span className="block text-xs text-txt-secondary group-hover:text-accent-green transition-colors">
                          {label}
                        </span>
                        <span className="text-xs text-txt-muted">{desc}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-txt-muted text-xs">
            © {new Date().getFullYear()}{' '}
            <a
              href="https://harvieraitsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-txt-secondary transition-colors"
            >
              Harviera IT Solutions LLP
            </a>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-txt-muted hover:text-txt-secondary transition-colors text-xs">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-txt-muted hover:text-txt-secondary transition-colors text-xs">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
