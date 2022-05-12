import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
// import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


function Hero() {

  return (
    <div className="" id='home' >
        <div className="">
            <img src='./hero.jpg' alt='hero' className="h-11/12"/>
            <div className="-mt-36 pb-36 pl-36 hidden md:hidden lg:block">
            <Zoom>
            <button 
            className="bg-red-red1 text-white opacity-0 font-medium px-10 py-2 "><Link to='#services'>Find Out More</Link></button>
            </Zoom>
        </div>
        </div>
    </div>
  )
}

export default Hero