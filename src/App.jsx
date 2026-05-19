import ParticlesBackground from "./components/ParticlesBackground"
import BackgroundShapes from "./components/BackgroundShapes";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"; 
function App() {
  return (
    
    <div>
     <BackgroundShapes />
      <ParticlesBackground />

      <div className="relative z-10">

        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        

      </div>

    </div>
  )
}

export default App
