import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
// import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import 'tw-elements';

function Hero() {

  return (
    <div className="" id='home' >
        <div className="">
            <>
            <div id="carouselExampleSlidesOnly" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
      <img
        src="./hero 1.jpg"
        class="block w-full"
        alt="Wild Landscape"
      />
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="./hero 2.jpg"
        class="block w-full"
        alt="Wild Landscape"
      />
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="./hero 3.jpg"
        class="block w-full"
        alt="Camera"
      />
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="./hero 4.jpg"
        class="block w-full"
        alt="Exotic Fruits"
      />
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="./hero 5.jpeg"
        class="block w-full"
        alt="Exotic Fruits"
      />
    </div>
  </div>
</div>
            </>
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