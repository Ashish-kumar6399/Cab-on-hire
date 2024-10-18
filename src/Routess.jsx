import React from 'react'

import "./style/Routes.css"

import img2 from "./Img/business_trips.webp";
import img3 from "./Img/short_car.jpg";

import { Link } from 'react-router-dom'

function Routess() {
  return (
    <>

<>




      
<div className='Routes_bgg'>

<h1 className='text-white fw-bolder text-uppercase about text-center ps-3 pe-3  ' id='heading_bg'>Short and Long Routes</h1>


</div>




  <div className='container'>
  <div className='row mb-5'>

  <div className='col-1 text-center'> </div>
    <div className='col-5  text-center'>

      <img className='img_business' src={img3} alt=''/>
    </div>
    <div  className='col-5  text-center'>
      <h1 className='movie_h1'>Short and Long Routes in Auckland</h1>
      <h6 className='movie_h6 '>Our area of expertise at Cab On Hire is offering smooth transportation options for both short and long travels across Auckland. Whether you require a short trip across town or a thorough trip across the city, our expert services guarantee a reliable, comfortable and easy ride. 
</h6>
      <Link className='text-decoration-none' to="/contact">
  <div className='movie_btn rounded mt-4 text-white text-center'> BOOK NOW</div>

  </Link>            </div>



    <div  className='col-1  text-center'></div>


  </div>
    



  </div>





  <div className='container highlight' >


  <h4 className='fw-bolder'>Effortless Navigation on All Routes  </h4>


  <h6 className='mt-4 mb-4'>Auckland offers a variety of travel demands because of its vibrant mix of natural beauty and urban activity. Our hardworking staff is available to handle all of your transportation needs, including long-distance travel and quick local journeys. Your travel experience is maximized for effectiveness and pleasure when you use Cab On Hire. </h6>

   
   <h4  className='fw-bolder '>Why Opt for a Hired Cab for Your Corporate Travel?</h4>


   <h6 className='mt-4 mb-4'><span className="fw-bolder">Adaptable Remedies:</span> : We provide specialized services to match your needs, whether it's a quick commute from the workplace to a nearby restaurant or a longer trip to a business meeting across the city. </h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Safety and Comfort:</span> Our contemporary fleet has all the conveniences required to guarantee a comfortable and enjoyable travel. Our top emphasis is safety and we keep our cars in good working order to give you a safe and relaxing ride. </h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Expert Operators:</span>Our skilled drivers are dedicated to offering the best possible service and are familiar with the routes around Auckland. You can rely on them to navigate the city successfully and swiftly because of their local knowledge.  </h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder"> Simplified Reservation:</span>Making a reservation with us is easy and convenient. Whether you require a short-term hire or a long-term one, scheduling your ride is simple with our user-friendly web system. </h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder"> Incentive Prices:</span>For any kind of route, we provide fair and open pricing. There are no extra costs—just clear, dependable service catered to your need. </h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Discover Auckland with Self-Assurance:</span>Cab On Hire makes sure you see the city in luxury and style, whether you're taking quick trips around the central business area or extended excursions exploring Auckland's many neighborhoods and attractions. Our services are meant to be flexible in order to accommodate your tastes and timetable, making every trip enjoyable. </h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Arrange Your Travel Now:</span>Experience the ease of business travel for both short and long distances in Auckland. To schedule your next ride and receive unmatched service that prioritizes your time and comfort, get in touch with Cab On Hire. Give the details to us so you can concentrate on having a great time in Auckland. </h6>

   




   
  

</div>


<a href="https://api.whatsapp.com/send?phone=64 212845553&text=." class="float" target="_blank">
  <i class="fa-brands fa-whatsapp  my-float"></i></a>
  
<a href="tel:+64 212845553" class="floatt" target="_blank">
      <i class="fa-solid fa-phone-volume my-floatt"></i>
      </a>


</>

    </>
  )
}

export default Routess
