import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Service from './components/Service'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Career from './components/Career'
import Skills from './components/Skills'
import Certificate from './components/Certificate'
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Service/>
      <Projects/>
      <Career/>
      <Certificate/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
