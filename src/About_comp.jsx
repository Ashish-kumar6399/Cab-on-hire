import React from 'react'
import About from './About'
import "./style/About_comp.css"
import "./style/About.css"

import  img1 from "./Img/alphard_new.jpg";


import "./style/About.css"
import { Link } from 'react-router-dom';



import img2 from "./Img/2022-toyota-camry-se-nightshade-4dr-sedan (2).jpg"


function About_comp() {
  return (
    <>
    <div className='bg'>

        <h1 className='text-white text-uppercase about text-center' id='heading_bg'>About Us</h1>

    </div>






      <div class=" container contain_1  mb-5">


<div class="about_us">
    <h2 className='mb-4 fw-bolder '>About Us</h2>
    <p className='   about_para  '>



Introducing Cab On Hire, the premier cab booking service in Auckland, where we are committed to providing you with a seamless and enjoyable travel experience. Whether you're commuting for business or leisure, our service is designed to be your go-to choice for all your transportation needs in New Zealand's vibrant city. With a strong reputation for reliability, professionalism, and customer satisfaction, we ensure that your journey with us is always smooth and stress-free.</p>



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



                                    <p> <span className='fw-bold'>Diverse Fleet:–</span>Our extensive fleet includes a variety of cabs, from standard sedans to premium vehicles, all equipped with modern amenities to ensure a comfortable and enjoyable ride. </p> 
                                    <p> <span className='fw-bold'> Affordable Rates:– </span> Enjoy transparent and competitive pricing with no hidden fees, giving you exceptional value for your cab rides across Auckland. </p>
                                    <p>  <span className='fw-bold'> Customer-Centric Service:– </span>From easy booking to prompt pick-up and drop-off, our dedicated team is here to provide personalized service and support throughout your journey. </p>
                                    <p>  <span className='fw-bold'>Convenient Accessibility: –  </span> We offer multiple pick-up and drop-off locations throughout Auckland, including Auckland Airport, making it convenient for you to book a cab wherever you are. </p>
                                    <p>  <span className='fw-bold'>Commitment to Excellence:–  </span> At Cab On Hire, we pride ourselves on maintaining the highest standards of vehicle cleanliness and safety. Each cab undergoes thorough inspections to ensure it is in excellent condition for a reliable and secure ride. </p>
                                    <p>  <span className='fw-bold'>Join the Cab On Hire Experience:–  </span>Discover the difference with Cab On Hire. Whether you're a visitor or a local, our top-notch cab service is here to enhance your travel experience. Feel free to reach out for any inquiries, bookings, or additional information. We are excited to make your journey smooth and memorable. </p>
                                 

                                  <p>We are grateful that you have selected Cab On Hire, where your trip starts in style. </p>


                              </div>




                              <a href="https://api.whatsapp.com/send?phone=64 212845553&text=." class="float" target="_blank">
                              <i class="fa-brands fa-whatsapp  my-float"></i></a>





   


    </>
  )
}

export default About_comp
