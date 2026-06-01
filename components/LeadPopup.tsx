'use client'

import { useState, useEffect, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Gift } from 'lucide-react'

type Fields = { name: string; phone: string }

export default function LeadPopup() {
  const [visible, setVisible] = useState(false)
  const [fields, setFields] = useState<Fields>({ name: '', phone: '' })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('lead-popup-v1')
    if (dismissed) return
    const timer = setTimeout(() => setVisible(true), 10000)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = () => {
    sessionStorage.setItem('lead-popup-v1', '1')
    setVisible(false)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 600))
    const msg = encodeURIComponent(
      `Hi TheRealSkill! I'm ${fields.name} and I'd like a FREE Project Consultation.\n\nMy WhatsApp: ${fields.phone}\n\nPlease help me pick the right project or course!`
    )
    window.open(`https://wa.me/919959691347?text=${msg}`, '_blank')
    setLoading(false)
    dismiss()
  }

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setFields((p) => ({ ...p, [k]: e.target.value }))

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed inset-x-4 bottom-8 sm:inset-x-auto sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-md z-[101]"
          >
            <div className="relative rounded-2xl bg-surface border border-surface-border shadow-[0_25px_60px_rgba(0,0,0,0.7)] overflow-hidden">
              {/* Green top accent */}
              <div className="h-1 w-full bg-gradient-green" />

              <button
                onClick={dismiss}
                className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-surface-light transition-colors text-txt-muted hover:text-txt-primary"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-accent-green/15 border border-accent-green/30 flex items-center justify-center flex-shrink-0">
                    <Gift size={18} className="text-accent-green" />
                  </span>
                  <div>
                    <h3 className="font-syne font-bold text-txt-primary text-lg leading-tight">
                      Get FREE Project Consultation 🎯
                    </h3>
                    <p className="text-txt-muted text-xs mt-0.5">
                      Limited slots — We respond in minutes
                    </p>
                  </div>
                </div>

                <p className="text-txt-secondary text-sm mb-5 leading-relaxed">
                  Tell us your requirements and a mentor will help you pick the perfect final year
                  project or course — completely free!
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    required
                    value={fields.name}
                    onChange={set('name')}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl bg-surface-light border border-surface-border text-txt-primary text-sm placeholder:text-txt-muted focus:outline-none focus:border-accent-green/50 transition-colors"
                  />
                  <input
                    required
                    type="tel"
                    value={fields.phone}
                    onChange={set('phone')}
                    placeholder="WhatsApp number (e.g. 9876543210)"
                    className="w-full px-4 py-3 rounded-xl bg-surface-light border border-surface-border text-txt-primary text-sm placeholder:text-txt-muted focus:outline-none focus:border-accent-green/50 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#22c55e] transition-all disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.122 1.527 5.854L.057 23.882l6.18-1.621A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.785 9.785 0 01-5.015-1.382l-.36-.214-3.727.977.996-3.642-.234-.374A9.787 9.787 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z"/>
                        </svg>
                        Get Free Consultation
                      </>
                    )}
                  </button>
                </form>

                <button
                  onClick={dismiss}
                  className="w-full mt-3 text-txt-muted text-xs hover:text-txt-secondary transition-colors py-1"
                >
                  No thanks, I&apos;ll figure it out myself
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
