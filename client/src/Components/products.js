import React from 'react'

function Products() {
  return (
    <div className="bg-hero-pattern" id="products">
    <div className="w-4/5 m-auto h-auto">
      <div className="m-auto text-center"><h3 className="text-red-red1 font-extrabold text-3xl pt-10">OUR<br />PRODUCTS</h3> <hr className="bg-red-red1 h-1 w-28 rounded-md m-auto" /></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gri">
        <div className="h-72 my-6 bg-white shadow-xl rounded-md w-11/12 m-auto py-10">
          <img src='./carrier.png' alt='carrier' className="h-2/3 w-2/3 items-center m-auto"/>
          <h3 className="text-white pt-3 font-extrabold text-center h-20 w-full bg-red-red2">OUR <br/> PRODUCTS</h3>
          </div>
        <div className=" h-72 my-6 bg-white shadow-xl rounded-md w-11/12 m-auto py-10">
          <img src='./wood oil.png' alt='wood-oli' className="h-2/3 w-2/3 items-center m-auto" />
          <h3 className="text-white pt-3 font-extrabold text-center h-20 w-full bg-red-red2">OUR <br/> PRODUCTS</h3>
          </div>
        <div className=" h-72 my-6 bg-white shadow-xl rounded-md w-11/12 m-auto py-10">
          <img src='./water measure.png' alt='carrier'className="h-2/3 w-2/3 items-center m-auto" />
          <h3 className="text-white pt-3 font-extrabold text-center h-20 w-full bg-red-red2">OUR <br/> PRODUCTS</h3>
          </div>
        <div className=" h-72 my-6 bg-white shadow-xl rounded-md w-11/12 m-auto py-10">
          <img src='./flooring.png' alt='flooring' className="h-2/3 w-2/3 items-center m-auto"/>
          <h3 className="text-white pt-3 font-extrabold text-center h-20 w-full bg-red-red2">OUR <br/> PRODUCTS</h3>
          </div>
      </div>
    
    </div>
    </div>
  )
}

export default Products