import React, { useState } from 'react'
import Logo from '../images/logo.svg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Header() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }


  return (
    <header className="bg-[url('/src/images/desktop/image-hero.jpg')] w-full bg-no-repeat bg-cover bg-top h-[80vh] md:h-[100%]">
      <div className='max-w-[1440px] h-full mx-auto p-6'>
        <nav className='flex text-[var(--White)] justify-between items-center py-8'>
          <img src={Logo} className='cursor-pointer' alt='/' />
          <ul className='hidden md:flex'>
            <li className='p-6 cursor-pointer hover:underline'>About</li>
            <li className='p-6 cursor-pointer hover:underline'>Careers</li>
            <li className='p-6 cursor-pointer hover:underline'>Events</li>
            <li className='p-6 cursor-pointer hover:underline'>Products</li>
            <li className='p-6 cursor-pointer hover:underline'>Support</li>
          </ul>

          <div onClick={handleNav} className='block md:hidden'>
            {nav ? null : <AiOutlineMenu size={35} />}
          </div>

          <nav className={nav ? 'fixed top-0 left-0 w-full h-full bg-[var(--Black)] ease-in-out duration-500 z-50' : 'fixed left-[-100%]'}>
            <div className='flex justify-between items-center py-14 px-6'>
              <img src={Logo} className='cursor-pointer' />
              <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={35}  /> : <AiOutlineMenu size={35} />}
              </div>
            </div>
            
            <ul className='pt-12 uppercase'>
              <li className='px-6 py-4 text-3xl cursor-pointer font-josefin'>About</li>
              <li className='px-6 py-4 text-3xl cursor-pointer font-josefin'>Careers</li>
              <li className='px-6 py-4 text-3xl cursor-pointer font-josefin'>Events</li>
              <li className='px-6 py-4 text-3xl cursor-pointer font-josefin'>Products</li>
              <li className='px-6 py-4 text-3xl cursor-pointer font-josefin'>Support</li>
            </ul>
          </nav>
        </nav>

        <div className='p-6 md:p-12 my-[8rem] border-white mx-auto md:mx-0 max-w-[350px] md:min-w-[500px] border-2 md:max-w-[50%]'>
          <h1 className='text-[var(--White)] font-josefin font-[300] uppercase text-4xl md:text-6xl xl:text-7xl'>Immersive experiences that deliver</h1>
        </div>
      </div>
      
    </header>
    
  )
}

export default Header