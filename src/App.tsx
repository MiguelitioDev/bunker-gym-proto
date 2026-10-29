import { CtaBand } from './components/CtaBand'
import { Estrutura } from './components/Estrutura'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Galeria } from './components/Galeria'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Horarios } from './components/Horarios'
import { Localizacao } from './components/Localizacao'
import { MobileCta } from './components/MobileCta'
import { Modalidades } from './components/Modalidades'
import { Planos } from './components/Planos'
import { Proof } from './components/Proof'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Proof />
        <Estrutura />
        <Modalidades />
        <Galeria />
        <Planos />
        <Horarios />
        <Localizacao />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
      <MobileCta />
    </>
  )
}
