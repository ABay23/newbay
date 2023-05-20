import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  return (
    <div
      className=' flex flex-col snap-y snap-mandatory  snap-always'
      id='projects'
    >
      <div className='grid grid-cols-2 place-self-center pt-36 pb-44 my-12 md:w-auto lg:w-full'>
        <div className=' block lg:w-[500px] md:w-auto snap-center'>
          <h1 className=' items-start font-roboto text-sm md:text-base text-blue-400'>
            Projects:
          </h1>

          <h2 className=' text-start md:text-lg font-poppins py-2 text-gray-200'>
            {' '}
            {`Inventory Management System "Papelon":`}
          </h2>
          <p className=' text-start md:text-lg font-roboto text-gray-200'>
            An effective inventory management system can significantly enhance
            the productivity of managers and teams. This web application is an
            MVP waiting on approval for corporate to start in production.
          </p>
          <br />
          <p className=' text-start md:text-lg font-roboto text-gray-200'>
            Full Stack application, Backeend in Nodejs using Express and
            MongoDB. MVC pattern with endpoints and Models. The Frontend is a
            React Application with Tailwindcss and Redux to manage the state.
            Aditional I added Token validation and cookies, pagination, and KPIs
            using a Slice.
          </p>
          <br />
          <p className=' text-start md:text-lg font-roboto text-gray-200'>
            The MVP app is temporary hosted by Vercell - frontend and Render for
            the backend with free tiers. To access the app the user is
            tester2@gmail.com pass: 123123.
          </p>
        </div>
        <div className=' block lg:w-[500px] md:w-auto'>
          <img src='src/assets/Papelon-img-1.png' alt='project1' />
          <div className='flex flex-row justify-between items-center'>
            <a
              href='https://papelon.vercel.app/'
              rel='noopener noreferrer'
              target='_blank'
              className='items-start font-roboto text-sm md:text-base text-blue-400 py-6'
            >
              Papelon app
            </a>
            <div className='items-center font-roboto text-sm md:text-base text-blue-400 py-12 text-center'>
              <a
                href='https://github.com/ABay23/IMN-2.0-backend'
                rel='noopener noreferrer'
                target='_blank'
              >
                Backend
                <div className='pl-5'>
                  <FaGithub size={25} />
                </div>
              </a>
            </div>

            <div className='items-center font-roboto text-sm md:text-base text-blue-400 py-12 text-center'>
              <a
                href='https://github.com/ABay23/IMN-2.0-frontend'
                rel='noopener noreferrer'
                target='_blank'
              >
                Frontend
                <div className='pl-5'>
                  <FaGithub size={25} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
