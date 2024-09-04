import React from 'react'
import   "./style/air2C.css"
import  img3 from "./Img/4.png";
import { Link } from 'react-router-dom';




function Air() {
  return (
    <>
      

      <div className='bgg'>

          <h1 className='text-white fw-bolder text-uppercase about text-center'>AIRPORT TO CITY</h1>

      </div>


                <div className='d-flex container-fluid cars_detail '>
            <div>
            <img className='img1' src ={img3} alt='img'/>
            </div>

            <div className='mt-2'>
                <h3>
                Minivan Popular (4pax)
                </h3>
            </div>


                <Link className='text-decoration-none' to ="/contact">
                <div className='div_book mt-2'>
                          <h5 className='bg-black text-white book  text-center pt-2'>BOOK NOW</h5>

                  </div>
                
                </Link>
           
        

      </div>
                <div className='d-flex container-fluid cars_detail '>
            <div>
            <img className='img1' src ={img3} alt='img'/>
            </div>

            <div className='mt-2'>
                <h3>
                Minivan Popular (4pax)
                </h3>
            </div>

            <Link className='text-decoration-none' to ="/contact">
                <div className='div_book mt-2'>
                          <h5 className='bg-black text-white book  text-center pt-2'>BOOK NOW</h5>

                  </div>
                
                </Link>

      </div>
                <div className='d-flex container-fluid cars_detail '>
            <div>
            <img className='img1' src ={img3} alt='img'/>
            </div>

            <div className='mt-2'>
                <h3>
                Minivan Popular (4pax)
                </h3>
            </div>

            <Link className='text-decoration-none' to ="/contact">
                <div className='div_book mt-2'>
                          <h5 className='bg-black text-white book  text-center pt-2'>BOOK NOW</h5>

                  </div>
                
                </Link>
        

      </div>
                <div className='d-flex container-fluid cars_detail '>
            <div>
            <img className='img1' src ={img3} alt='img'/>
            </div>

            <div className='mt-2'>
                <h3>
                Minivan Popular (4pax)
                </h3>
            </div>

            <Link className='text-decoration-none' to ="/contact">
                <div className='div_book mt-2'>
                          <h5 className='bg-black text-white book  text-center pt-2'>BOOK NOW</h5>

                  </div>
                
                </Link>
        

      </div>
                <div className='d-flex container-fluid cars_detail '>
            <div>
            <img className='img1' src ={img3} alt='img'/>
            </div>

            <div className='mt-2'>
                <h3>
                Minivan Popular (4pax)
                </h3>
            </div>

            <Link className='text-decoration-none' to ="/contact">
                <div className='div_book mt-2'>
                          <h5 className='bg-black text-white book  text-center pt-2'>BOOK NOW</h5>

                  </div>
                
                </Link>
        

      </div>


            <div className='text-center   meet'>
                        <h5 className='text-'>MEET AND GREET</h5>                
            </div>
    



    </>
  )
}

export default Air
