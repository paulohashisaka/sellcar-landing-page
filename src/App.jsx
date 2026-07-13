import { useEffect, useState } from 'react'
import { Benefits, FinalCTA, HowItWorks, Objections, Offer, ProblemSolution, Testimonials } from './components/ContentSections'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { translations } from './content/translations'

export default function App() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('sellcar-language')
    return savedLanguage === 'pt' ? 'pt' : 'ja'
  })
  const content = translations[language]

  useEffect(() => {
    localStorage.setItem('sellcar-language', language)
    document.documentElement.lang = content.locale
    document.title = content.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', content.meta.description)
  }, [content, language])

  return (
    <>
      <main>
        <Hero content={content} language={language} onLanguageChange={setLanguage} />
        <ProblemSolution content={content} />
        <Benefits content={content} />
        <HowItWorks content={content} />
        <Offer content={content} />
        <Testimonials content={content} />
        <Objections content={content} />
        <FinalCTA content={content} />
        <FAQ key={language} content={content} />
      </main>
      <Footer content={content} />
    </>
  )
}
