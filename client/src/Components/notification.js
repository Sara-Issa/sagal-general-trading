import React from 'react'

function Notification() {
  return (
    <div className="bg-hero-pattern h-16 pt-2 ">
        <div className="flex justify-spacebetween justify-center w-4/5 m-auto">
        <div className="m-auto">
            <img src="./logo.png" alt="logo"className="h-12 w-auto mr-0 md:mr-0 lg:mr-80"/>
        </div>
        <div>
            <div className="hidden md:hidden lg:block">
            <ul className="flex">
                <li  className="flex items-center">
                    <div className="px-5">
                        <img src="./call.png" alt="call" className="h-8 w-8 "/>
                    </div>
                    <div>
                        <h5 className=" font-semibold">252 63 4429882</h5>
                    </div>
                </li>
                <li  className="flex items-center">
                    <div className="px-5">
                        <img src="./mail.png" alt="mail" className="h-10 w-13"/>
                    </div>
                    <div>
                        <h5 className=" font-semibold">sagalgt01@gmail.com</h5>
                    </div>
                </li>
                <li  className="flex items-center">
                    <div className="px-5">
                        <img src="./call.png" alt="call-2" className="h-8 w-8"/>
                    </div>
                    <div>
                        <h5 className=" font-semibold">524069</h5>
                    </div>
                </li>
            </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Notification