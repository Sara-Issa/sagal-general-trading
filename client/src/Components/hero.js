import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'


function Hero() {
  return (
    <div className="" id='home' >
        <div>
            <img src='./hero.jpg' alt='hero' />
            <div className="-mt-36 pb-36 pl-36 hidden md:hidden lg:block">
            <button className="bg-red-red1 text-white font-medium px-10 py-2 "><Link to='#services'>Find Out More</Link></button>
        </div>
        </div>
    </div>
  )
}

export default Hero