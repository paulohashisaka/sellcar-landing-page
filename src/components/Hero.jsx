import { BadgeCheck, Check, Languages } from 'lucide-react'
import { PrimaryButton, SecondaryButton } from './Button'
import { Header } from './Header'

export function Hero({ content, language, onLanguageChange }) {
  const { hero } = content
  const headlineParts = hero.headline.split(hero.highlight)

  return (
    <section id="inicio" className="relative overflow-hidden bg-navy-950 pt-20 text-white">
      <Header content={content} language={language} onLanguageChange={onLanguageChange} />
      <div className="absolute -left-40 top-28 size-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="section-shell relative grid min-h-[46rem] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="relative z-10 pt-4">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/7 px-3.5 py-2 text-xs font-bold text-blue-100">
            <BadgeCheck size={16} className="text-brand-orange" aria-hidden="true" />
            {hero.eyebrow}
          </div>
          <h1 className={`max-w-3xl font-black leading-[1.08] tracking-[-0.045em] ${language === 'ja' ? 'text-[2.35rem] sm:text-5xl lg:text-[3.5rem]' : 'text-[2.6rem] sm:text-5xl lg:text-[3.8rem]'}`}>
            {headlineParts[0]}<span className="text-brand-orange">{hero.highlight}</span>{headlineParts[1]}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            {hero.subheadline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton>{hero.primaryCta}</PrimaryButton>
            <SecondaryButton light>{hero.secondaryCta}</SecondaryButton>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-300">
            {hero.badges.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="grid size-5 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
                  <Check size={13} strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative pb-8 lg:pb-0">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-blue-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/35">
            <img
              src="/images/sellcar-hero.png"
              alt={hero.imageAlt}
              className="aspect-[4/3] w-full rounded-[1.35rem] object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3 rounded-2xl border border-white/20 bg-navy-950/85 p-4 backdrop-blur-md">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{hero.priceLabel}</p>
                <p className="mt-0.5 text-2xl font-black text-white">{hero.price}</p>
              </div>
              <div className="hidden items-center gap-2 text-right text-xs font-bold text-slate-300 sm:flex">
                <Languages size={21} className="text-brand-orange" aria-hidden="true" />
                <span>{hero.serviceLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
