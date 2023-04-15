import React from 'react'
import ManVR from '../images/desktop/image-interactive.jpg'

const Info = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 my-[5rem] md:my-[10rem] w-full relative">
      <div className='flex flex-col md:flex-row'>
        <img className='lg:w-[70%] md:w-[50%] mx:auto mb-6 md:mb-0' src={ManVR} alt="/" />
        <div className='lg:absolute bg-white text-center lg:text-left p-6 lg:mr-6 lg:p-20 lg:pr-0 pb-0 lg:pb-0 w-[100%] md:w-[50%] right-0 bottom-[0]'>
          <h2 className='text-3xl md:text-4xl lg:text-6xl uppercase font-josefin mb-8'>The leader in interactive VR</h2>
          <p className='text-[var(--Very-Dark-Gray)]'>Founded in 2011, Loopstudios has been producing world-class virtual reality 
            projects for some of the best companies around the globe. Our award-winning 
            creations have transformed businesses through digital experiences that bind 
            to their brand.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Info