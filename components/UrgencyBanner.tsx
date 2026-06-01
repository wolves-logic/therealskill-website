'use client'

import { useState, useEffect } from 'react'
import { X, Zap } from 'lucide-react'

export default function UrgencyBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('urgency-banner-v1')
    if (!dismissed) setVisible(true)
  }, [])

  const dismiss = () => {
    sessionStorage.setItem('urgency-banner-v1', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="relative z-50 bg-gradient-to-r from-orange-600/95 via-red-600/95 to-orange-600/95 text-white py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-sm">
        <Zap size={14} className="text-yellow-300 shrink-0" fill="currentColor" />
        <p className="text-center leading-snug">
          🔥 <strong>Final Year Project Season</strong> — Get{' '}
          <span className="font-bold text-yellow-300">50% OFF</span> this week only. Use code{' '}
          <span className="font-mono font-bold bg-white/20 px-1.5 py-0.5 rounded text-xs tracking-wider">
            FINALYEAR50
          </span>{' '}
          on checkout.{' '}
          <a
            href="https://wa.me/919959691347?text=Hi%20TheRealSkill!%20I%20want%20to%20use%20the%20FINALYEAR50%20offer."
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 font-semibold hover:text-yellow-300 transition-colors ml-1"
          >
            Claim Now →
          </a>
        </p>
        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition-colors"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  )
}
