import React from 'react'
import Logo from '../images/logo.svg'
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import { ImPinterest }  from 'react-icons/im'

const Footer = () => {
  return (
    <footer className='bg-[var(--Black)] mt-20'>
      <div className='max-w-[1440px] mx-auto px-6 py-12'>
        <div className='flex justify-center lg:justify-between items-center'>
          <img className='cursor-pointer' src={Logo} alt="/" />
          <ul className='gap-2 hidden lg:flex'>
            <li className='cursor-pointer'><AiFillFacebook color='white' size={30} /></li>
            <li className='cursor-pointer'><AiOutlineTwitter color='white' size={30} /></li>
            <li className='cursor-pointer'><ImPinterest color='white' size={30} /></li>
            <li className='cursor-pointer'><AiOutlineInstagram color='white' size={30} /></li>
          </ul>
        </div>
        
        <div className='flex justify-center lg:justify-between items-center mt-8'>
          <ul className='flex flex-col lg:flex-row items-center text-[var(--White)] gap-10'>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Careers</li>
            <li className='cursor-pointer'>Events</li>
            <li className='cursor-pointer'>Products</li>
            <li className='cursor-pointer'>Support</li>
          </ul>

          <small className='text-[var(--Dark-Gray)] font-alata text-base hidden lg:block'>© 2021 Loopstudios. All rights reserved.</small>
        </div>

        <div className='mt-8'>
          <ul className='gap-2 flex justify-center lg:hidden'>
            <li className='cursor-pointer'><AiFillFacebook color='white' size={30} /></li>
            <li className='cursor-pointer'><AiOutlineTwitter color='white' size={30} /></li>
            <li className='cursor-pointer'><ImPinterest color='white' size={30} /></li>
            <li className='cursor-pointer'><AiOutlineInstagram color='white' size={30} /></li>
          </ul>
        </div>

        <div className='flex lg:hidden justify-center mt-4'>
          <small className='text-[var(--Dark-Gray)] font-alata text-base'>© 2021 Loopstudios. All rights reserved.</small>
        </div>

      </div>
    </footer>
  )
}

export default Footer