import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function Nav() {
  return (
    <div>
        <div className="bg-red-red2">
            <ul className="flex justify-center text-center space-x-6 font-semibold items-center h-12 flex-none md:flex lg:flex hidden md:block lg:block text-white">
                <li className="bg-red-red2 h-12 pt-3 w-28 hover:bg-red-red1">
                  <Link to='#home'>HOME </Link>
                  </li>
                <li className="bg-red-red2 h-12 pt-3 w-28 hover:bg-red-red1">
                  <Link to='#about'>ABOUT</Link>
                  </li>
                <li className="bg-red-red2 h-12 pt-3 w-28 hover:bg-red-red1">
                <Link to='#products'>PRODUCTS</Link></li>
                <li className="bg-red-red2 h-12 pt-3 w-28 hover:bg-red-red1">
                  <Link to='#services'>SERVICES</Link></li>
                <li className="bg-red-red2 h-12 pt-3 w-28 hover:bg-red-red1">
                  <Link to='#contact'>CONTACT</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav