import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import { motion } from 'framer-motion'

function App() {
  return (
    <>
      <div className=' w-full h-full relative -top-5 box-border px-5 lg:px-40 sm:px-12 md:px-28 bg-slate-900 '>
        <Header />

        <div className='lg:mx-14'>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ delay: 0.6 }}
            whileInView={{ opacity: 1 }}
          >
            <Hero />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ delay: 0.6 }}
            whileInView={{ opacity: 1 }}
          >
            <About />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ delay: 0.6 }}
            whileInView={{ opacity: 1 }}
          >
            <Projects />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ delay: 0.7 }}
            whileInView={{ opacity: 1 }}
          >
            <Contact />
            <Footer />
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default App
