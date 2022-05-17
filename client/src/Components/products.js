import React from 'react'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';


function Products() {
  return (
    <div className="bg-hero-pattern" id="products">
    <div className="w-4/5 m-auto h-auto">
      <Zoom>
      <div className="m-auto text-center"><h3 className="text-red-red1 font-extrabold text-3xl pt-10">OUR<br />PRODUCTS</h3> <hr className="bg-red-red1 h-1 w-28 rounded-md m-auto" /></div>
      </Zoom>
      <Fade bottom>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gri"> 
      <Link to="/buildingMaterials">
        <div className="h-72 my-6 bg-white shadow-xl rounded-md w-11/12 m-auto py-10">
          <img src='./qori cas 5m.JPG' alt='carrier' className="h-2/3 w-2/3 items-center m-auto"/>
          <h3 className="text-white pt-3 font-extrabold text-center h-20 w-full bg-red-red2">OUR <br />BUILDING MATERIALS</h3>
          </div>
          </Link>
          <Link to="/electricity">
        <div className=" h-72 my-6 bg-white shadow-xl rounded-md w-11/12 m-auto py-10">
          <img src='./wire.jpg' alt='wood-oli' className="h-2/3 w-2/3 items-center m-auto" />
          <h3 className="text-white pt-3 font-extrabold text-center h-20 w-full bg-red-red2">OUR <br />ELECTRICTY</h3>
          </div>
          </Link>
          <Link to="/plumbing">
        <div className=" h-72 my-6 bg-white shadow-xl rounded-md w-11/12 m-auto py-10">
          <img src='./UPVC pipe .jpeg' alt='carrier'className="h-2/3 w-2/3 items-center m-auto" />
          <h3 className="text-white pt-3 font-extrabold text-center h-20 w-full bg-red-red2">OUR <br />PLUMBING</h3>
          </div>
          </Link>
      </div>
      </Fade>
    </div>
    </div>
  )
}

export default Products