import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaBuysellads } from 'react-icons/fa'
import MobileMenu from './MobileMenu'
FaBuysellads
const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className='sticky top-0 z-10'>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ delay: 0.8 }}
          whileInView={{ opacity: 1 }}
        >
          <header className='bg-white border-gray-200 dark:bg-gradient-to-r from-blue-500 from-10% to-slate-900 to-90% container '>
            <nav className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 pt-4 pb-4'>
              <div className=' flex items-start'>
                <FaBuysellads size={40} className=' bg-white' />
                <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                  ABay23
                </span>
              </div>

              <button
                data-collapse-toggle='navbar-default'
                type='button'
                className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-900 dark:focus:ring-gray-600'
                aria-controls='navbar-default'
                aria-expanded='false'
                onClick={() => setOpen(true)}
              >
                <span className='sr-only'>Open main menu</span>
                <svg
                  className='w-6 h-6'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
              {open ? (
                <MobileMenu
                  close={() => {
                    setOpen(false)
                  }}
                />
              ) : (
                <></>
              )}
              <div
                className='hidden w-full md:block md:w-auto'
                id='navbar-default'
              >
                <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-blue-500'>
                  <li>
                    <a
                      href='#'
                      className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                      aria-current='page'
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href='#about'
                      className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href='#projects'
                      className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href='#contact'
                      className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    >
                      Contact
                    </a>
                  </li>
                  <li className='animate-bounce'>
                    <a
                      href='/Alejandro_Bay_Resume_110123.pdf'
                      target='_blank'
                      rel='nonopenner nonrefferrer'
                      className='  ablock py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        </motion.div>
      </div>
    </>
  )
}

export default Header
