import React from 'react'
import AboutUs from "./Components/aboutUs";
import Products from "./Components/products";
import Hero from "./Components/hero";
import Advertise from "./Components/advertise";

function Home() {
  return (
    <div>
       <Hero />
       <AboutUs />
       <Products />
       <Advertise />
    </div>
  )
}

export default Home