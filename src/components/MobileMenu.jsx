import { useEffect, useState } from 'react'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { PropTypes } from 'prop-types'

useState
useEffect

const MobileMenu = ({ close }) => {
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    setAnimation(true)
    window.addEventListener('resize', (e) => {
      if (e.target.innerWidth >= 640) {
        close()
      }
    })
    return () => {
      window.removeEventListener('resize', () => {})
    }
  }, [close])
  return (
    <div>
      <div className='fixed inset-0 top-0 l-0 h-screen w-full backdrop-blur-sm bg-gray-500 bg-opacity-60'></div>

      <div className='fixed inset-0 top-0 l-0 p-5'>
        <div
          className={`w-full bg-white rounded-xl p-5 transition-all  ${
            animation ? 'scale-100' : 'scale-90'
          }`}
        >
          <div className='flex items-center justify-between'>
            <h1>Navigation</h1>
            <AiOutlineCloseSquare
              className='w-7 h-7 hover:scale-110 transition-all '
              onClick={close}
            />
          </div>
          <ul className='bg-gray-100'>
            <li>
              <a
                href='#home'
                className='block font-roboto  text-base font-bold py-2 pl-3 pr-4 text-blue-500 rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#about'
                className='block font-roboto  text-base font-bold py-2 pl-3 pr-4 text-blue-500 rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#projects'
                className='block font-roboto  text-base font-bold py-2 pl-3 pr-4 text-blue-500 rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='block font-roboto  text-base font-bold py-2 pl-3 pr-4 text-blue-500 rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'
              >
                Contact
              </a>
            </li>
            <li className='animate-bounce'>
              <a
                href='/Alejandro_Bay_Resume_110123.pdf'
                target='_blank'
                rel='nonopenner nonrefferrer'
                className='block font-roboto  text-base font-bold py-2 pl-3 pr-4 text-blue-500 rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 md:dark:hover:text-violet-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
MobileMenu.propTypes = {
  close: PropTypes.func.isRequired,
}
export default MobileMenu
