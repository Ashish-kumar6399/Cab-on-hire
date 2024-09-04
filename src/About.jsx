import React from 'react'
import  img1 from "./Img/alphard_new.jpg";


import "./style/About.css"
import { Link } from 'react-router-dom';



function About() {
  return (
    <>
             <div class=" container contain_1  mb-5">


    <div class="about_us">
        <h2 className='mb-4 fw-bolder '>About Us</h2>
        <p className=' about_para'>Introducing Cab On Hire, the best automobile rental service in Auckland, where we strive to give you an easy and wonderful driving experience. We are dedicated to becoming your first choice for all your transportation needs in the exciting city of New Zealand, having built our name on dependability, professionalism, and customer satisfaction.</p>



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
