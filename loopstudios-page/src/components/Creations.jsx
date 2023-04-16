import React from 'react'
import Earth from '../images/desktop/image-deep-earth.jpg'
import EarthMobile from '../images/mobile/image-deep-earth.jpg'
import Arcade from '../images/desktop/image-night-arcade.jpg'
import ArcadeMobile from '../images/mobile/image-night-arcade.jpg'
import Soccer from '../images/desktop/image-soccer-team.jpg'
import SoccerMobile from '../images/mobile/image-soccer-team.jpg'
import Grid from '../images/desktop/image-grid.jpg'
import GridMobile from '../images/mobile/image-grid.jpg'
import FromUP from '../images/desktop/image-from-above.jpg'
import FromUPMobile from '../images/mobile/image-from-above.jpg'
import Pocket from '../images/desktop/image-pocket-borealis.jpg'
import PocketMobile from '../images/mobile/image-pocket-borealis.jpg'
import Curiosity from '../images/desktop/image-curiosity.jpg'
import CuriosityMobile from '../images/mobile/image-curiosity.jpg'
import Fisheye from '../images/desktop/image-fisheye.jpg'
import FisheyeMobile from '../images/mobile/image-fisheye.jpg'

const Creations = () => {
  return (
    <section className='max-w-[1440px] min-h-[100vh] md:min-h-full mx-auto p-6'>
      <div className='flex justify-center md:justify-between mb-14 md:mb-28'>
        <h2 className='uppercase text-3xl md:text-4xl lg:text-6xl'>our creations</h2>
        <button className='uppercase border-2 border-[--Black] py-2 px-12 hover:bg-[var(--Black)] hover:text-[var(--White)] hidden md:block'>see all</button>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-8 font-josefin'>

        <div className='group relative cursor-pointer group'>
          <div className='absolute bg-[var(--White)] opacity-0 group-hover:opacity-50 w-full h-full'></div>
          <picture>
            <source className='w-full' media="(max-width: 768px)" srcset={EarthMobile} />
            <img className='w-full' src={Earth} alt="/" />
          </picture>
          <p className='uppercase text-white group-hover:text-black absolute left-6 bottom-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>deep<br/> earth</p>
        </div>

        <div className='relative cursor-pointer group'>
          <div className='absolute bg-[var(--White)] opacity-0 group-hover:opacity-50 w-full h-full'></div>
          <picture>
            <source className='w-full' media="(max-width: 768px)" srcset={ArcadeMobile} />
            <img className='w-full' src={Arcade} alt="/" />
          </picture>
          <p className='uppercase text-white group-hover:text-black absolute left-6 bottom-6 text-3xl md:text-3xl lg:text-4xl xl:text-5xl'>Night<br/> arcade</p>
        </div>

        <div className='relative cursor-pointer group'>
          <div className='absolute bg-[var(--White)] opacity-0 group-hover:opacity-50 w-full h-full'></div>
          <picture>
            <source className='w-full' media="(max-width: 768px)" srcset={SoccerMobile} />
            <img className='w-full' src={Soccer} alt="/" />
          </picture>
          <p className='uppercase text-white group-hover:text-black absolute left-6 bottom-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Soccer<br/> team VR</p>
        </div>

        <div className='relative cursor-pointer group'>
          <div className='absolute bg-[var(--White)] opacity-0 group-hover:opacity-50 w-full h-full'></div>
          <picture>
            <source className='w-full' media="(max-width: 768px)" srcset={GridMobile} />
            <img className='w-full' src={Grid} alt="/" />
          </picture>
          <p className='uppercase text-white group-hover:text-black absolute left-6 bottom-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>The<br/> grid</p>
        </div>

        <div className='relative cursor-pointer group'>
          <div className='absolute bg-[var(--White)] opacity-0 group-hover:opacity-50 w-full h-full'></div>
          <picture>
            <source className='w-full' media="(max-width: 768px)" srcset={FromUPMobile} />
            <img className='w-full' src={FromUP} alt="/" />
          </picture>
          <p className='uppercase text-white group-hover:text-black absolute left-6 bottom-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>From up<br/> above VR</p>
        </div>

        <div className='relative cursor-pointer group'>
          <div className='absolute bg-[var(--White)] opacity-0 group-hover:opacity-50 w-full h-full'></div>
          <picture>
            <source className='w-full' media="(max-width: 768px)" srcset={PocketMobile} />
            <img className='w-full' src={Pocket} alt="/" />
          </picture>
          <p className='uppercase text-white group-hover:text-black absolute left-6 bottom-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Pocket<br/> borealis</p>
        </div>

        <div className='relative cursor-pointer group'>
          <div className='absolute bg-[var(--White)] opacity-0 group-hover:opacity-50 w-full h-full'></div>
          <picture>
            <source className='w-full' media="(max-width: 768px)" srcset={CuriosityMobile} />
            <img className='w-full' src={Curiosity} alt="/" />
          </picture>
          <p className='uppercase text-white group-hover:text-black absolute left-6 bottom-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>The<br/> curiosity</p>
        </div>

        <div className='relative cursor-pointer group'>
          <div className='absolute bg-[var(--White)] opacity-0 group-hover:opacity-50 w-full h-full'></div>
          <picture>
            <source className='w-full' media="(max-width: 768px)" srcset={FisheyeMobile} />
            <img className='w-full' src={Fisheye} alt="/" />
          </picture>
          <p className='uppercase text-white group-hover:text-black absolute left-6 bottom-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Make it<br/> fisheye</p>
        </div>

      </div>

      <button className='uppercase text-xl border-2 border-[--Black] py-4 px-16 hover:bg-[var(--Black)] hover:text-[var(--White)] block mx-auto md:hidden mt-14'>see all</button>
    </section>
  )
}

export default Creations