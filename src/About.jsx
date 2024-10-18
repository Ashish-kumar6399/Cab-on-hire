import React from 'react'
import  img1 from "./Img/alphard_new.jpg";


import "./style/About.css"
import { Link } from 'react-router-dom';



function About() {
  return (
    <>
             <div class=" container contain_1  mb-5">


    <div class="about_us">
        <h2 className='mb-4  '>About Us</h2>
        <p className=' about_para '>



Introducing Cab On Hire the premier cab booking service in Auckland where we are committed to providing you with a seamless and enjoyable travel experience. Whether you're commuting for business or leisure our service is designed to be your go-to choice for all your transportation needs in New Zealand's vibrant city. With a strong reputation for reliability, professionalism and customer satisfaction, we ensure that your journey with us is always smooth and stress-free.</p>



<Link className='text-decoration-none text-black' to="/about"> <h3>Read more...</h3></Link>
                      
              </div>






     <div className="img ">

           <img className="rounded" id="cab3" src={img1} alt=""/>

     </div>




     


</div>






    </>
  )
}

export default About
