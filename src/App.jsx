import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'

function App() {
  return (
    <>
      <div className=' px-40'>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
