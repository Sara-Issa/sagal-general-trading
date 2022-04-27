import React from 'react'

function Nav() {
  return (
    <div>
        <div className="bg-red-red2">
            <ul className="flex justify-center text-center space-x-6 font-semibold items-center h-12 flex-none md:flex lg:flex hidden md:block lg:block text-white">
                <li className="bg-red-red2 h-12 pt-3 w-28 hover:bg-red-red1">HOME</li>
                <li className="bg-red-red2 h-12 pt-3 w-28 hover:bg-red-red1">ABOUT</li>
                <li className="bg-red-red2 h-12 pt-3 w-28 hover:bg-red-red1">SERVICE</li>
                <li className="bg-red-red2 h-12 pt-3 w-28 hover:bg-red-red1">PRODUCTS</li>
                <li className="bg-red-red2 h-12 pt-3 w-28 hover:bg-red-red1">CONTACT</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav