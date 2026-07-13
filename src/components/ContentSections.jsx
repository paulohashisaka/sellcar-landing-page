import {
  BadgeCheck,
  Banknote,
  CarFront,
  Check,
  ClipboardCheck,
  FileSearch,
  Languages,
  MessageCircle,
  SearchCheck,
  ShieldCheck,
  ThumbsUp,
  TriangleAlert,
} from 'lucide-react'
import { PrimaryButton, SecondaryButton } from './Button'

const benefitIcons = [ClipboardCheck, Languages, Banknote, ShieldCheck, FileSearch]
const stepIcons = [MessageCircle, SearchCheck, FileSearch, CarFront]

export function ProblemSolution({ content }) {
  const { problem, solution } = content

  return (
    <>
      <section className="bg-cloud py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="eyebrow"><TriangleAlert size={15} /> {problem.eyebrow}</span>
            <h2 className="section-title">{problem.title}</h2>
            <p className="section-copy">{problem.text}</p>
          </div>
          <div className="grid content-center gap-3 sm:grid-cols-2">
            {problem.items.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-red-50 text-red-500">
                  <TriangleAlert size={16} aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rotate-3 rounded-[2rem] bg-blue-50" />
            <div className="relative rounded-[2rem] bg-navy-900 p-7 text-white shadow-xl">
              <div className="grid size-14 place-items-center rounded-2xl bg-brand-orange">
                <ShieldCheck size={28} aria-hidden="true" />
              </div>
              <p className="mt-8 text-2xl font-black tracking-tight">{solution.cardTitle}</p>
              <p className="mt-3 leading-7 text-slate-300">{solution.cardText}</p>
              <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
                {solution.items.map((item) => (
                  <p key={item} className="flex items-center gap-3 text-sm font-bold">
                    <Check size={17} className="shrink-0 text-emerald-400" aria-hidden="true" /> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div>
            <span className="eyebrow"><BadgeCheck size={15} /> {solution.eyebrow}</span>
            <h2 className="section-title">{solution.title}</h2>
            <p className="section-copy">{solution.text}</p>
            <SecondaryButton href="#como-funciona" className="mt-7">{solution.cta}</SecondaryButton>
          </div>
        </div>
      </section>
    </>
  )
}

export function Benefits({ content }) {
  const { benefits } = content

  return (
    <section id="beneficios" className="bg-navy-950 py-20 text-white sm:py-28">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="eyebrow"><ThumbsUp size={15} /> {benefits.eyebrow}</span>
          <h2 className="mt-3 text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">{benefits.title}</h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.items.map(({ title, text }, index) => {
            const Icon = benefitIcons[index]
            return (
              <article key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/8">
                <div className="grid size-12 place-items-center rounded-xl bg-brand-orange text-white shadow-lg shadow-orange-950/20">
                  <Icon size={23} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function HowItWorks({ content }) {
  const { how } = content

  return (
    <section id="como-funciona" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="text-center">
          <span className="eyebrow">{how.eyebrow}</span>
          <h2 className="section-title mx-auto">{how.title}</h2>
          <p className="section-copy mx-auto">{how.text}</p>
        </div>
        <div className="relative mt-14 grid gap-8 md:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-slate-200 md:block" />
          {how.steps.map(({ title, text }, index) => {
            const Icon = stepIcons[index]
            return (
              <article key={title} className="relative text-center">
                <div className="relative mx-auto grid size-14 place-items-center rounded-2xl bg-navy-900 text-white shadow-lg ring-8 ring-white">
                  <Icon size={23} aria-hidden="true" />
                  <span className="absolute -right-2 -top-2 grid size-6 place-items-center rounded-full bg-brand-orange text-[11px] font-black">{index + 1}</span>
                </div>
                <h3 className="mt-6 font-extrabold text-navy-950">{title}</h3>
                <p className="mx-auto mt-2 max-w-64 text-sm leading-6 text-slate-500">{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Offer({ content }) {
  const { offer } = content

  return (
    <section id="oferta" className="bg-cloud py-20 sm:py-28">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2rem] bg-navy-900 shadow-2xl">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-7 text-white sm:p-12 lg:p-16">
              <span className="eyebrow">{offer.eyebrow}</span>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.045em] sm:text-5xl">{offer.title}</h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-300">{offer.text}</p>
              <p className="mt-7 text-xs font-black uppercase tracking-widest text-orange-300">{offer.includedLabel}</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {offer.items.map((item) => (
                  <p key={item} className="flex items-start gap-2 text-sm font-semibold text-slate-200">
                    <Check size={16} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" /> {item}
                  </p>
                ))}
              </div>
              <p className="mt-6 text-xs text-slate-400">{offer.note}</p>
              <PrimaryButton className="mt-7">{offer.cta}</PrimaryButton>
            </div>
            <div className="relative min-h-72 overflow-hidden lg:min-h-full">
              <img src={`${import.meta.env.BASE_URL}images/sellcar-hero.png`} alt="" className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent lg:bg-gradient-to-r" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Testimonials({ content }) {
  const { testimonials } = content

  return (
    <section className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">{testimonials.eyebrow}</span>
            <h2 className="section-title">{testimonials.title}</h2>
          </div>
          <span className="max-w-md rounded-2xl bg-amber-50 px-4 py-2 text-xs font-bold leading-5 text-amber-700">{testimonials.note}</span>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.items.map((quote) => (
            <blockquote key={quote} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex gap-1 text-brand-orange" aria-label={testimonials.starsLabel}>
                {[1, 2, 3, 4, 5].map((star) => <span key={star}>★</span>)}
              </div>
              <p className="mt-5 leading-7 text-slate-600">“{quote}”</p>
              <footer className="mt-6 border-t border-slate-100 pt-5">
                <cite className="not-italic font-extrabold text-navy-950">{testimonials.name}</cite>
                <p className="mt-1 text-sm text-slate-500">{testimonials.detail}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Objections({ content }) {
  const { objections } = content

  return (
    <section className="bg-cloud py-20 sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <span className="eyebrow">{objections.eyebrow}</span>
          <h2 className="section-title">{objections.title}</h2>
          <p className="section-copy">{objections.text}</p>
        </div>
        <div className="space-y-4">
          {objections.items.map(({ title, text }) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="flex items-start gap-3 font-extrabold text-navy-950">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                  <Check size={15} strokeWidth={3} aria-hidden="true" />
                </span>
                {title}
              </h3>
              <p className="mt-3 pl-9 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCTA({ content }) {
  const { finalCta } = content

  return (
    <section id="contato" className="bg-brand-orange py-20 text-white sm:py-24">
      <div className="section-shell text-center">
        <p className="text-xs font-black uppercase tracking-[0.15em] text-orange-100">{finalCta.eyebrow}</p>
        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">{finalCta.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-orange-50">{finalCta.text}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#oferta" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-black text-brand-orange shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-50">{finalCta.button}</a>
          <a href="mailto:contato@sellcar.example" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:bg-white/20">
            <MessageCircle size={18} aria-hidden="true" /> {finalCta.contact}
          </a>
        </div>
        <p className="mt-5 text-xs text-orange-100">{finalCta.note}</p>
      </div>
    </section>
  )
}
