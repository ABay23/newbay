import Header from './components/Header'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'

function App() {
  return (
    <>
      <div className=' w-full h-full relative -top-5 box-border px-5 lg:px-40 sm:px-12 md:px-28 bg-slate-900 '>
        <Header />
        <div className='lg:mx-24'>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
