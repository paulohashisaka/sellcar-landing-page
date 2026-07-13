import { ArrowRight } from 'lucide-react'

const base =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-center text-sm font-bold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'

export function PrimaryButton({ children, href = '#oferta', className = '' }) {
  return (
    <a
      href={href}
      className={`${base} bg-brand-orange text-white shadow-lg shadow-orange-950/20 hover:-translate-y-0.5 hover:bg-brand-orange-dark focus-visible:outline-brand-orange ${className}`}
    >
      {children}
      <ArrowRight size={18} aria-hidden="true" />
    </a>
  )
}

export function SecondaryButton({ children, href = '#contato', light = false, className = '' }) {
  return (
    <a
      href={href}
      className={`${base} border ${
        light
          ? 'border-white/25 bg-white/10 text-white hover:bg-white/15 focus-visible:outline-white'
          : 'border-slate-300 bg-white text-navy-950 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-navy-900'
      } ${className}`}
    >
      {children}
    </a>
  )
}
