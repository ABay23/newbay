const About = () => {
  return (
    <div
      className=' flex flex-col snap-y snap-mandatory  snap-always'
      id='about'
    >
      <div className='grid grid-cols-2 place-self-center py-36 m-10 scroll-smooth snap-center'>
        <div>
          <h1 className=' items-start font-roboto text-sm md:text-base text-blue-400'>
            About Me:
          </h1>
          <h2></h2>
          <p className=' text-start md:text-lg font-roboto text-gray-200'>
            A self-thought software developer with a strong foundation in
            computer science and a background in business analysis and
            operations management. Expertise in developing web applications
            using the MERN (MongoDB, Express, React, Node.js) stack, and a
            passion for creating robust and scalable applications that meet the
            unique needs of each client.
          </p>
          <br />
          <p className=' text-start md:text-lg font-roboto text-gray-200'>
            {`I'm also starting my journey as a game developer on my free time. `}
            Looking for a career change to pursue my passion for building
            applications and working with high-performance teams.
          </p>
        </div>
        <div className=' block pl-4'>
          <div className=' items-start font-roboto text-sm md:text-base text-blue-400'>
            My Skills:
          </div>
          <div className=' flex flex-wrap font-poppins text-md sm:text-lg lg:text-xl text-gray-400 pt-4 '>
            <div className=' mb-4 mr-4 text-center font-semibold rounded inline-block bg-blue-400 py-1 px-2 text-gray-900 shadow-sm shadow-gray-600'>
              html
            </div>
            <div className=' mb-4 mr-4 text-center font-semibold rounded inline-block bg-blue-400 py-1 px-2 text-gray-900 shadow-sm shadow-gray-600'>
              CSS
            </div>
            <div className=' mb-4 mr-4 text-center font-semibold rounded inline-block bg-blue-400 py-1 px-2 text-gray-900 shadow-sm shadow-gray-600'>
              JavaScript
            </div>
            <div className=' mb-4 mr-4 text-center font-semibold rounded inline-block bg-blue-400 py-1 px-2 text-gray-900 shadow-sm shadow-gray-600'>
              React js
            </div>
            <div className=' mb-4 mr-4 text-center font-semibold rounded inline-block bg-blue-400 py-1 px-2 text-gray-900 shadow-sm shadow-gray-600'>
              Express
            </div>
            <div className=' mb-4 mr-4 text-center font-semibold rounded inline-block bg-blue-400 py-1 px-2 text-gray-900 shadow-sm shadow-gray-600'>
              Mongo db
            </div>
            <div className=' mb-4 mr-4 text-center font-semibold rounded inline-block bg-blue-400 py-1 px-2 text-gray-900 shadow-sm shadow-gray-600'>
              Redux
            </div>
            <div className=' mb-4 mr-4 text-center font-semibold rounded inline-block bg-blue-400 py-1 px-2 text-gray-900 shadow-sm shadow-gray-600'>
              Node
            </div>
            <div className=' mb-4 mr-4 text-center font-semibold rounded inline-block bg-blue-400 py-1 px-2 text-gray-900 shadow-sm shadow-gray-600'>
              Tailwindcss
            </div>
            <div className=' mb-4 mr-4 text-center font-semibold rounded inline-block bg-blue-400 py-1 px-2 text-gray-900 shadow-sm shadow-gray-600'>
              C# Basics
            </div>
            <div className=' mb-4 mr-4 text-center font-semibold rounded inline-block bg-blue-400 py-1 px-2 text-gray-900 shadow-sm shadow-gray-600'>
              Github
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
