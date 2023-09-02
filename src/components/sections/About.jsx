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
          <h2 className=' text-start md:text-lg font-poppins py-2 text-gray-200'></h2>
          <p className=' text-start md:text-lg font-roboto text-gray-200'>
            {`I'm Alejandro Bay, a self-taught software developer based in the vibrant
            tech hub of New York, NY. My journey began with a strong foundation in computer science,
              after college I teach myself new programing languages and decided to improve my front end skills.
            I've since ventured into the realms of business analysis and operations management.`}
          </p>
          <br />
          <h2 className=' text-start md:text-lg font-poppins py-2 pt-2 text-gray-200'>
            {`My Expertise: `}
          </h2>
          <p className=' text-start md:text-lg font-roboto text-gray-200'>
            {`
            My passion lies in crafting web applications that make a difference. 
            With expertise in the MERN (MongoDB, Express, React, Node.js) stack, I've honed my skills to develop robust and scalable solutions. My approach is rooted in a commitment to understanding and meeting the unique needs of each client, resulting in high-impact digital experiences.
            In the past two months I started my journey with Python and Java, 
            to increase my knowledge about OOP languages and data modeling. 
            `}
          </p>
          <h2 className=' text-start md:text-lg font-poppins py-2 pt-8 text-gray-200'>
            {`My Aspirations: `}
          </h2>
          <p className=' text-start md:text-lg font-roboto text-gray-200'>
            {`
            Now, I'm on the verge of a career change, driven by my unwavering desire to build applications
            and collaborate with high-performance teams. 
            I'm excited to bring my skills, dedication, and creative spirit to new challenges and opportunities in the dynamic world of software 
            development.

            Let's connect and explore how we can work together to create exceptional digital solutions.             
            `}
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
          <h2 className=' text-start md:text-lg font-poppins py-2 pt-24 text-gray-200'>
            {`Professional Background: `}
          </h2>
          <p className=' text-start md:text-lg font-roboto text-gray-200'>
            {`
            I've also held key roles such as Operations Manager, where I led the development of a web application
            that generated critical metrics and contributed to significant ROI. 
            Additionally, as a Business Support Coordinator and Senior Analyst, 
            I've successfully led projects, provided data-driven insights, and implemented strategies 
            that boosted revenue and streamlined processes.
            `}
          </p>
          <h2 className=' text-start md:text-lg font-poppins py-2 pt-14 text-gray-200'>
            {`What Drives Me: `}
          </h2>
          <p className=' text-start md:text-lg font-roboto text-gray-200'>
            {`
            Beyond my professional endeavors, I'm embarking on an exciting journey as a game developer
            during my free time. This creative pursuit fuels my passion for innovation and immersive experiences.  
            `}
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
