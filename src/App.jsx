import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Tools from './components/Tools'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen text-text">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Tools />
      <Contact />
      <Footer />
    </div>
  )
}