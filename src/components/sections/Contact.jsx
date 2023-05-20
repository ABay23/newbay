import { FaTwitter, FaGithub } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className=' flex flex-col pt-20 pb-28 my-8' id='contact'>
      <div className='grid grid-cols-2 place-self-center py-24'>
        <div>
          <h1 className=' items-start font-roboto text-sm md:text-base text-blue-400'>
            Contact:
          </h1>
          <h2></h2>
          <p className=' text-start md:text-lg font-roboto text-gray-200'>
            I&#39;m looking for new opportunities to grow as a developer and to
            create new and exiting projects.
          </p>
          <br />
          <p className=' text-start md:text-lg font-roboto text-gray-200'>
            If you have a request or want to connect, here are my links to my
            email, twitter and Github account. Feel free to reach out, I&#39;ll
            get back to you as soon as I have availability.
          </p>
        </div>
        <div className=' block pl-4'>
          <div className='flex justify-center '>
            <div className='  '>
              <div className=' mb-4 mr-4 py-1 pl-14 text-blue-500'>
                <a
                  href='https://github.com/ABay23'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <FaGithub size={40} />
                </a>
              </div>
              <div className='  mb-4 mr-4 py-1 pl-14 text-blue-500'>
                <a
                  href='https://twitter.com/ABay23dev'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <FaTwitter size={40} />
                </a>
              </div>
              <a
                href='mailto:alejandrobay23@gmail.com'
                rel='noopener noreferrer'
                target='_blank'
              >
                <button className=' mb-4 mr-4 text-center font-semibold rounded inline-block bg-blue-400 py-3 px-2 text-gray-900 shadow-sm shadow-gray-600'>
                  Send me an e-mail
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
