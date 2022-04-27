import React from 'react'

function Advertise() {
  return (
    <div className="bg-hero-pattern pb-10">
      <div className="w-4/5 m-auto text-center py-10">
        <div className="m-auto text-center pb-10"><h3 className="text-red-red1 font-extrabold text-3xl pt-10">WHY CHOOSE SAGAL</h3> <hr className="bg-red-red1 h-1 w-28 rounded-md m-auto" /></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-auto">
        <div className="py-3">
        <div className=""><img src='./shipped.png' alt='shipping' className="w-20 h-20 m-auto" /></div>
        <div className="text-center">
          <h3 className="font-semibold text-red-red1 text-lg">Free Shipping</h3>
          <h3 className="font-normal text-gray-900">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
        </div>
      </div>
      <div className="py-3">
        <div className="m-auto"><img src='./quality.png' alt='quality' className="w-20 h-20 m-auto" /></div>
        <div className="text-center">
          <h3 className="font-semibold text-red-red1 text-lg">Quality Contron</h3>
          <h3 className="font-normal text-gray-900">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
        </div>
      </div>
      <div className="py-3">
        <div className="m-auto"><img src='./support.png' alt='support' className="w-20 h-20 m-auto" /></div>
        <div className="text-center">
          <h3 className="font-semibold text-red-red1 text-lg">Expert Customers Support</h3>
          <h3 className="font-normal text-gray-900">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
        </div>
      </div>
      <div className="py-3">
        <div className="m-auto"><img src='./winner.png' alt='winner' className="w-20 h-20 m-auto" /></div>
        <div className="text-center">
          <h3 className="font-semibold text-red-red1 text-lg">Professional Build Quality</h3>
          <h3 className="font-normal text-gray-900">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Advertise