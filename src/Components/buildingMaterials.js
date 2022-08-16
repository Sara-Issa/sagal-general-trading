import React, {useEffect} from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'


function BuildingMaterials() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <div>
          <Zoom>
        <div className="m-auto text-center"><h3 className="text-red-red1 font-extrabold text-3xl pt-10">OUR<br />Building  Matelials</h3> <hr className="bg-red-red1 h-1 w-28 rounded-md m-auto" /></div>
      </Zoom>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gri">
      <Fade bottom>
        <div className="h-72 my-6 bg-white shadow-xl rounded-md w-11/12 m-auto py-10">
          <img src='./iron roof sheet.jpg' alt='carrier' className="h-2/3 w-2/3 items-center m-auto"/>
          <h3 className="text-white pt-3 font-extrabold text-center h-20 w-full bg-red-red2"> Iron roof sheet <br />(red & white)</h3>
         
          </div>
        </Fade>
        <Fade bottom>
        <div className=" h-72 my-6 bg-white shadow-xl rounded-md w-11/12 m-auto py-10">
          <img src='./steel bars.jpeg' alt='wood-oli' className="h-2/3 w-2/3 items-center m-auto" />
          <h3 className="text-white pt-3 font-extrabold text-center h-20 w-full bg-red-red2">Deformed steel bars  <br />(16mm, 14mm, 12mm, 10mm, 8mm)</h3>
          </div>
        </Fade>
        <Fade bottom>
        <div className=" h-72 my-6 bg-white shadow-xl rounded-md w-11/12 m-auto py-10">
          <img src='./qori cas 5m.JPG' alt='carrier'className="h-2/3 w-2/3 items-center m-auto" />
          <h3 className="text-white pt-3 font-extrabold text-center h-20 w-full bg-red-red2">Woods <br />(qori cas & qori cad)</h3>
          </div>
        </Fade>
        <Fade bottom>
          <div className=" h-72 my-6 bg-white shadow-xl rounded-md w-11/12 m-auto py-10">
          <img src='./flooring.png' alt='carrier'className="h-2/3 w-2/3 items-center m-auto" />
          <h3 className="text-white pt-3 font-extrabold text-center h-20 w-full bg-red-red2">Tiles <br />(Floor tiles & wall tiles)</h3>
          </div>
        </Fade>
        <Fade bottom>
          <div className=" h-72 my-6 bg-white shadow-xl rounded-md w-11/12 m-auto py-10">
          <img src='./gypsum brown.JPG' alt='carrier'className="h-2/3 w-2/3 items-center m-auto" />
          <h3 className="text-white pt-3 font-extrabold text-center h-20 w-full bg-red-red2">Gypsum <br />ceiling board</h3>
          </div>
        </Fade>
        <Fade bottom>
          <div className=" h-72 my-6 bg-white shadow-xl rounded-md w-11/12 m-auto py-10">
          <img src='./plywood 9mm.jpeg' alt='carrier'className="h-2/3 w-2/3 items-center m-auto" />
          <h3 className="text-white pt-3 font-extrabold text-center h-20 w-full bg-red-red2">Plywood’s <br />(9mm, 6mm)</h3>
          </div>
        </Fade>
        <Fade bottom>
          <div className=" h-72 my-6 bg-white shadow-xl rounded-md w-11/12 m-auto py-10">
          <img src='./furtune point.JPG' alt='carrier'className="h-2/3 w-2/3 items-center m-auto" />
          <h3 className="text-white pt-3 font-extrabold text-center h-20 w-full bg-red-red2">Paints <br />(all colors & customized colors)</h3>
          </div>
        </Fade>
        <Fade bottom>
          <div className=" h-72 my-6 bg-white shadow-xl rounded-md w-11/12 m-auto py-10">
          <img src='./MDF.jpeg' alt='carrier'className="h-2/3 w-2/3 items-center m-auto" />
          <h3 className="text-white pt-3 font-extrabold text-center h-20 w-full bg-red-red2">MDF<br />(all sizes)</h3>
          </div>
        </Fade>
        <Fade bottom>
          <div className=" h-72 my-6 bg-white shadow-xl rounded-md w-11/12 m-auto py-10">
          <img src='./cement .jpeg' alt='carrier'className="h-2/3 w-2/3 items-center m-auto" />
          <h3 className="text-white pt-3 font-extrabold text-center h-20 w-full bg-red-red2">cement <br />(Omani & Iran)</h3>
          </div>
          </Fade>
      </div>
        </div>
    </div>
  )
}

export default BuildingMaterials