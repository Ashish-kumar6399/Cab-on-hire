import React from 'react'
import About from './About'
import "./style/About_comp.css"
import "./style/About.css"

import  img1 from "./Img/alphard_new.jpg";


import "./style/About.css"
import { Link } from 'react-router-dom';



import img2 from './Img/bg_about.jpg'


function About_comp() {
  return (
    <>
    <div className='bg'>

        <h1 className='text-white fw-bolder text-uppercase about text-center' id='heading_bg'>About Us</h1>

    </div>






      <div class=" container contain_1  mb-5">


<div class="about_us">
    <h2 className='mb-4 fw-bolder '>About Us</h2>
    <p className='   about_para  '>Introducing Cab On Hire, the best automobile rental service in Auckland, where we strive to give you an easy and wonderful driving experience. We are dedicated to becoming your first choice for all your transportation needs in the exciting city of New Zealand, having built our name on dependability, professionalism, and customer satisfaction.</p>



{/* <Link className='text-decoration-none text-black' to="/about"> <h3>Read more...</h3></Link> */}
                  
          </div>






 <div class="img">

       <img className=" rounded   " id="cab3" src={img1} alt=""/>

 </div>




 


</div>





             <div class=" container contain_2 mt-0   " style={{backgroundColor:"rgb(245,246,247),", height:"100%"}}>




             <div class="img">

            <img className="rounded" id="cab3" src={img2} alt=""/>

                 </div>

                


    <div class="about_us">
        <h2 className=' fw-bolder'>Our Purpose</h2>
        <p className=' about_para'>Our goal at Cab On Hire is to provide unmatched flexibility and convenience by making sure you have access to a wide range of superior cars that are customized to meet your specific needs. We are here to make your travel pleasant and pleasurable, whether you require a compact car for city exploration, a roomy SUV for family outings, or an elegant sedan for work. </p>

              </div>






    




     


</div>




                      <div className='container highlight' >
                                

                                  <h1 className='fw-bolder mb-4 mt-5 ' >Why Choose Us</h1>



                                    <p> <span className='fw-bold'>Wide-ranging Fleet:–</span> Our wide range of automobiles includes the newest models with cutting-edge facilities to improve your driving pleasure. </p> 
                                    <p> <span className='fw-bold'> Economical Costs:– </span> We guarantee that you will receive outstanding value for your rental with our clear, affordable pricing that don't include any unexpected costs. </p>
                                    <p>  <span className='fw-bold'> Service Focused on the Customer:– </span> From booking to car return, our committed team of experts is here to help you every step of the journey with an emphasis on individualized service and support. </p>
                                    <p>  <span className='fw-bold'>Friendliness: –  </span> We make sure that obtaining our vehicles is easy and simple by offering a number of pick-up and drop-off sites throughout Auckland, including Auckland Airport. </p>
                                    <p>  <span className='fw-bold'>Our Dedication to Quality:–  </span> At Cab On Hire, we take great satisfaction in upholding the best standards for car upkeep and hygiene. We ensure that every vehicle in our fleet is in top shape and prepared to provide a dependable and safe driving experience through our stringent inspection procedures.  </p>
                                    <p>  <span className='fw-bold'>Come Aboard the Cab On Hire Team:–  </span> Discover the distinction with Cab On Hire. We invite you to learn how our first-rate vehicle rental service may improve your travel experience, whether you're a guest or a local in Auckland. Please don't hesitate to contact us with any questions, reservations, or requests for further details. We are eager to assist you and make your trip one to remember.  </p>
                                 

                                  <p>We are grateful that you have selected Cab On Hire, where your trip starts in style. </p>


                              </div>





   


    </>
  )
}

export default About_comp
