import { MessageCircle } from 'lucide-react'
import { Logo } from './Logo'

export function Header({ content, language, onLanguageChange }) {
  const { nav, language: languageText, logoLabel } = content

  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/10">
      <div className="section-shell flex h-20 items-center justify-between">
        <Logo light label={logoLabel} />
        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/75 md:flex" aria-label={nav.label}>
          <a className="transition hover:text-white" href="#beneficios">{nav.benefits}</a>
          <a className="transition hover:text-white" href="#como-funciona">{nav.how}</a>
          <a className="transition hover:text-white" href="#faq">{nav.faq}</a>
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex rounded-xl border border-white/15 bg-white/5 p-1" role="group" aria-label={languageText.label}>
            {['pt', 'ja'].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => onLanguageChange(code)}
                className={`min-h-8 rounded-lg px-2.5 text-[11px] font-bold transition sm:px-3 sm:text-xs ${
                  language === code ? 'bg-white text-navy-950 shadow-sm' : 'text-white/65 hover:text-white'
                }`}
                aria-pressed={language === code}
              >
                {languageText[code]}
              </button>
            ))}
          </div>
          <a
            href="#contato"
            className="hidden min-h-11 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 text-sm font-bold text-white transition hover:bg-white/15 lg:inline-flex"
          >
            <MessageCircle size={17} aria-hidden="true" />
            {nav.contact}
          </a>
        </div>
      </div>
    </header>
  )
}
