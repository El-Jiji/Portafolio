import { useScrollSpy } from './hooks/useScrollSpy'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import SkipLink from './components/SkipLink'

function App() {
  const activeSection = useScrollSpy()

  return (
    <div className="min-h-screen">
      <SkipLink />
      <Header activeSection={activeSection} />
      <main id="main-content">
        <Hero />
        <About />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
