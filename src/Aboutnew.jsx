import React from 'react'
import About from './About'
import "./style/About_comp.css"
import "./style/About.css"

import  img1 from "./Img/alphard_new.jpg";


import "./style/About.css"
import { Link } from 'react-router-dom';



import img2 from './Img/bg_about.jpg'


function Aboutnew() {
  return (
    <>
    <div className='bg'>

        <h1 className='text-white fw-bolder text-uppercase about text-center' id='heading_bg'>About Us</h1>

    </div>









                            
                              <div className='aboutt_main_new d-flex  container'>

                             <div class="  aboutt_main_first_div">
                                <h2 className='mb-4 fw-bolder '>About Us</h2>
                                <p className='     '>



                            Introducing Cab On Hire, the premier cab booking service in Auckland, where we are committed to providing you with a seamless and enjoyable travel experience. Whether you're commuting for business or leisure, our service is designed to be your go-to choice for all your transportation needs in New Zealand's vibrant city. With a strong reputation for reliability, professionalism, and customer satisfaction, we ensure that your journey with us is always smooth and stress-free.</p>


                            <img className="rounded   " id="cab3" src={img1} alt=""/>

                                    
                            </div>

                            <div className='aboutt_main_second_div'>
                            </div>


                              </div>


                              <a href="https://api.whatsapp.com/send?phone=64 212845553&text=." class="float" target="_blank">
                              <i class="fa-brands fa-whatsapp  my-float"></i></a>





   


    </>
  )
}

export default Aboutnew
