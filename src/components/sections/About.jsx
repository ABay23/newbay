const About = () => {
  return (
    <div className=' flex flex-col'>
      <div className='grid grid-cols-2 place-self-center pt-12'>
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
            unique needs of each client. Looking for a career change to pursue
            my passion for building applications and working with
            high-performance teams.
          </p>
        </div>
        <div>
          <h1 className=' items-start font-roboto text-sm md:text-base text-blue-400'>
            My Skills:
          </h1>
          <ul className=' text-center font-poppins text-md sm:text-lg lg:text-xl text-gray-400 justify-between'>
            <li className=' font-semibold rounded inline-block bg-blue-400 py-1 px-2 text-gray-900 shadow-sm shadow-gray-600'>
              html
            </li>
            <li className=' font-semibold rounded inline-block bg-blue-400 py-1 px-2 text-gray-900 shadow-sm shadow-gray-600'>
              html
            </li>
            <li className=' font-semibold rounded inline-block bg-blue-400 py-1 px-2 text-gray-900 shadow-sm shadow-gray-600'>
              html
            </li>
          </ul>
        </div>
      </div>
      <p className=' text-left py-11'>
        <span className=' tracking-tighter font-roboto text-2xl font-extrabold text-gray-500'>
          Focusing on building
        </span>
        <br />
        <span className=' tracking-tighter font-roboto text-2xl font-extrabold text-blue-400'>
          great digital experiences
        </span>
        <br />
        <span className=' tracking-tighter font-roboto text-2xl font-extrabold text-gray-500'>
          turning ideas into
        </span>
        <br />
        <span className=' tracking-tighter font-roboto text-2xl font-extrabold text-gray-500'>
          web applications.
        </span>
      </p>
    </div>
  )
}

export default About
