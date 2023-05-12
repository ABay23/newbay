const Contact = () => {
  return (
    <div className=' flex flex-col'>
      <div className='grid grid-cols-2 place-self-center py-24'>
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
      </div>
    </div>
  )
}

export default Contact
