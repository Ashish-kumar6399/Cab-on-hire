import React from 'react'
import "./style/Services.css";
import QueryForm from './QueryForm';



function Contact() {

  
  
  return (
    <>

            <div className='bg'>

                  <h1 className='text-white fw-bolder text-uppercase about text-center ' id='heading_center'>Book Now</h1>


            </div>



            {/* <div className='bg'>

<h1 className='text-white fw-bolder text-uppercase about text-center'>
       Luxury Cars and Vans
</h1>
</div>  */}
      

            <QueryForm/>


    </>
  )
}

export default Contact
