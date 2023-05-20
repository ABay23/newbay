const Hero = () => {
  return (
    <div className=' flex flex-col' id='home'>
      <div className='grid grid-cols-1 place-self-center pt-28'>
        <div>
          <h1 className=' items-start font-roboto text-xs md:text-base text-blue-400'>
            Hi, my name is
          </h1>
          <h2 className=' font-poppins font-bold text-gray-200 text-2xl sm:text-4xl md:text-6xl '>
            ALEJANDRO BAY
          </h2>
        </div>
      </div>
      <h3 className=' text-center font-poppins text-md sm:text-lg lg:text-xl text-gray-400 pb-28'>{`I'm a Software Engineer | Full Stack Web Developer`}</h3>
      <p className=' text-left py-40'>
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

export default Hero
