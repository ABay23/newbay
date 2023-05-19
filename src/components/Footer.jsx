const Footer = () => {
  return (
    <div className=' flex flex-row py-1'>
      <div>
        <a
          href='https://github.com/ABay23'
          rel='noopener noreferrer'
          target='_blank'
        >
          <h2 className='text-center text-xs md:text-sm font-roboto text-blue-500'>
            Developed & Designed by Alejandro Bay ABay23
          </h2>
        </a>
        <p className='pt-3 text-xs md:text-sm font-poppins font-thin text-gray-200'>
          This site was developed using Vite and React.js as a sigle site
          application with server side rendering. Optimizing the development
          process. This was developed as an open source project, the source code
          is on my Github repo (click on my Name)
        </p>
      </div>
      {/* <div className=' items-center mb-4 mr-4 py-1 pl-3 text-blue-500'>
        <a
          href='https://github.com/ABay23'
          rel='noopener noreferrer'
          target='_blank'
        >
          <FaGithub size={30} />
        </a> */}
      {/* </div> */}
    </div>
  )
}

export default Footer
