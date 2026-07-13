import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function FAQ({ content }) {
  const [openIndex, setOpenIndex] = useState(0)
  const { faq } = content

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <span className="eyebrow">{faq.eyebrow}</span>
          <h2 className="section-title">{faq.title}</h2>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <article key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left font-extrabold text-navy-950"
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-brand-orange transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pr-8 text-sm leading-6 text-slate-600">{item.answer}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
