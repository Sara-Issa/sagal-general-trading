import React from 'react'

function Footer() {
  return (
    <div className="bg-red-red1 text-white pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div>
      <div className="bg-red-red2 h-4 my-10 pt-2 pb-8">
      <div className="pl-14"><h3 className="text-base font-bold">COMPANY</h3></div>
      </div>
      <div className="pl-14">
        <div>
          <ul>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Data Center</li>
            <li>Bulk Purchases</li>
            <li>Contact Us</li>
          </ul>
        </div>
      
      </div>
      </div>
      <div>
      <div className="bg-red-red2 h-4 my-10 pt-2 pb-8">
      <div className="pl-14"><h3 className="text-base font-bold ">POLICIES</h3></div>
      </div>
      <div className="pl-14">
        <div>
          <ul>
            <li>Sales & Refunds Terms</li>
            <li>Shipping & Handling</li>
            <li>Payment Methods</li>
            <li>Return & Refunds Policy</li>
            <li>Warranty Policy</li>
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
                <img src='./call-white.png' alt='call-white' className="h-10 w-10"/>
              </div>
              <div className="py-2">
              <h5>Telesom</h5>
              <h6>252 63 4429882</h6>
              </div>
              </li>
              <li className="flex">
              <div className="pr-3 py-2">
                <img src='./call-white.png' alt='call-white' className="h-10 w-10"/>
              </div>
              <div className="py-2">
              <h5>Somtel</h5>
              <h6>252 65 4429882</h6>
              </div>
              </li>
              <li className="flex">
              <div className="pr-3 py-2">
                <img src='./mail.png' alt='mail' className="h-10 w-10"/>
              </div>
              <div className="py-2">
              <h5>Gmail</h5>
              <h6>sagalgt01@gmsil.com</h6>
              </div>
              </li>
          </ul>
        </div>
      
      </div>
      </div>
      </div>
    </div>
  )
}

export default Footer