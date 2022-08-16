import React from 'react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { HashLink as Link } from 'react-router-hash-link'


function Footer() {
  return (
    <div className="bg-red-red1 text-white pb-10" id='contact'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div>
      <div className="bg-red-red2 h-4 my-10 pt-2 pb-8">
      <div className="pl-14"><h3 className="text-base font-bold">COMPANY</h3></div>
      </div>
      <div className="pl-14">
        <div>
          <ul>
            <li><Link to='#home'>HOME </Link></li>
            <li><Link to='#about'>ABOUT</Link></li>
            <li><Link to='#products'>PRODUCTS</Link></li>
            <li><Link to='#services'>SERVICES</Link></li>
            <li><Link to='#contact'>CONTACT</Link></li>
          </ul>
        </div>
      
      </div>
      </div>
      <div>
      <div className="bg-red-red2 h-4 my-10 pt-2 pb-8">
      <div className="pl-14"><h3 className="text-base font-bold">CONTACTS</h3></div>
      </div>
      <div className="pl-14">
        <div>
          <ul>
            <li className="flex">
              <div className="pr-3 py-2">
                <img src='./call-white.png' alt='call-white' className="h-8 w-8"/>
              </div>
              <div className="py-2">
              <h6>252 63 4429882</h6>
              </div>
              </li>
              <li className="flex">
              <div className="pr-3 py-2">
                <img src='./call-white.png' alt='call-white' className="h-8 w-8"/>
              </div>
              <div className="py-2">
              <h6>524069</h6>
              </div>
              </li>
              <li className="flex">
              <div className="pr-3 py-2">
                <img src='./mail-white.png' alt='mail-white' className="h-8 w-8"/>
              </div>
              <div className="py-2">
              <h6>sagalgt01@gmsil.com</h6>
              </div>
              </li>
          </ul>
        </div>
      
      </div>
      </div>
      <div>
      <div className="bg-red-red2 h-4 my-10 pt-2 pb-8">
      <div className="pl-14"><h3 className="text-base font-bold ">SOCIAL MEDIA</h3></div>
      </div>
      <div className="pl-14">
        <div>
          <ul>
            <li ><a href='https://www.facebook.com/sagalgeneraltrading'> < BsFacebook className="h-10 w-10 pb-3" /></a> </li>
            <li><a href='https://www.instagram.com/sagaltradingcompany/'>< BsInstagram className="h-10 w-10 pb-3" /></a></li>
          </ul>
        </div>
      
      </div>
      </div>
      </div>
    </div>
  )
}

export default Footer