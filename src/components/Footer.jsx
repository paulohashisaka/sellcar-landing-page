import { MessageCircle } from 'lucide-react'
import { Logo } from './Logo'

export function Footer({ content }) {
  const { footer, nav, logoLabel } = content

  return (
    <>
      <footer className="bg-navy-950 pb-28 pt-12 text-white sm:pb-12">
        <div className="section-shell flex flex-col justify-between gap-8 border-b border-white/10 pb-8 sm:flex-row sm:items-center">
          <div>
            <Logo light label={logoLabel} />
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              {footer.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-400">
            <a href="#beneficios" className="hover:text-white">{nav.benefits}</a>
            <a href="#como-funciona" className="hover:text-white">{nav.how}</a>
            <a href="#faq" className="hover:text-white">{nav.faq}</a>
          </div>
        </div>
        <div className="section-shell pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} SellCar. {footer.disclaimer}
        </div>
      </footer>

      <a
        href="#contato"
        className="fixed inset-x-4 bottom-4 z-50 flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-brand-orange px-5 text-sm font-black text-white shadow-2xl shadow-orange-950/30 sm:hidden"
      >
        <MessageCircle size={20} aria-hidden="true" />
        {footer.mobileCta}
      </a>
    </>
  )
}
