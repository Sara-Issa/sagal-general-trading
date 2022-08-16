import React from 'react'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


function AboutUs() {
  return (
    <div className="" id="about">
      <div className="-mt-10 bg-hero-pattern3 h-auto">
        <div className="w-4/5 m-auto">
        <Zoom>
        <div className="m-auto text-center pt-8 pb-16"><h3 className="text-white font-extrabold text-3xl pt-10">ABOUT US</h3> <hr className="bg-white h-1 w-28 rounded-md m-auto" /></div>
        </Zoom>
        <div className=" items-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 text-center m-auto">
        <div>
            <div className="w-auto h-64">
            <Fade left>
                <img src="./logo-2.png" alt="bg-1" className="h-56 w-80 opacity-0m-auto py-3"/>
            </Fade>
            </div>
        </div>
        <Fade right>
        <div className="pb-6 pt-1  h-64">
            <p className="text-white text-left text-lg font-bold pb-6">Sagal imports a wide range of construction materials, construction materials, construction facilitation and decoration.</p>
            <p className="text-white text-left text-lg font-bold pb-6">Founded in 2002, the compant had the capacity to serve commercial buildings, family homes and anyother building under construction.</p>
            <p className="text-white text-left text-lg font-bold pb-6">The company has offices in Hargeisa, Burao, Berbera, Wajale and Jigjiga.</p>
        </div>
        </Fade>
        </div>
        </div>
        <div className="w-4/5 items-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 text-center m-auto">
        <Fade top>
            <div className="py-8 w-3/4 m-auto">
        <div className="bg-white w-20 items-center h-20 rounded-full m-auto"><img src="./target.png" alt="mission" className="w-12 m-auto pt-4" /></div>
        <div className="text-center">
          <h3 className="font-bold text-white text-xl pt-2">Mission</h3>
          <h3 className="font-normal text-white">The company plans to complete all the equipment needed in every Somali region and maintain high quality equipment.</h3>
        </div>
            </div>
</Fade>
<Fade top>
            <div className="py-8 w-3/5 m-auto">
        <div className="bg-white w-20 items-center h-20 rounded-full m-auto"><img src="vision.png" alt="vision" className="w-12 m-auto pt-4" /></div>
        <div className="text-center">
          <h3 className="font-bold text-white text-xl pt-2">Vision</h3>
          <h3 className="font-normal text-white">In the future, the company aims to develop a factory that makes the most needed building materials.</h3>
        </div>
            </div>
</Fade>
        </div>
        </div>
    </div>
  )
}

export default AboutUs