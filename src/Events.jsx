import React from 'react'

import "./style/Events.css"

import img3 from "./Img/skoda_superb.jpg";

import QueryForm from './QueryForm'
import { Link } from 'react-router-dom'

function Events() {
  return (
    <>




      
<div className='Events_bg'>

<h1 className='text-white fw-bolder text-uppercase about text-center ps-3 pe-3'>Events Pickup and Drop</h1>


</div>




  <div className='container'>
  <div className='row mb-5'>

  <div className='col-1 text-center'> </div>
    <div className='col-5  text-center'>

      <img className='img_business  rounded ' src={img3} alt=''/>
    </div>
    <div  className='col-5  text-center'>
      <h1 className='movie_h1'>Events Pickup and Drop in Auckland</h1>
      <h6 className='movie_h6 '>With Cab On Hire's dedicated pick-up and drop-off services for  events, you can effortlessly and elegantly take in Auckland's dynamic cultural scene. Whether you're attending a local festival, a celebrity gala or an exciting performance, our first-rate transportation guarantees that you arrive in luxury and depart with ease. 
</h6>
      <Link className='text-decoration-none' to="/contact">
  <div className='movie_btn rounded mt-4 text-white text-center'> BOOK NOW</div>

  </Link>            </div>



    <div  className='col-1  text-center'></div>


  </div>
    



  </div>





  <div className='container highlight' >


  <h4 className='fw-bolder'>Effortless Transportation for Your Particular Events</h4>


  <h6 className='mt-4 mb-4'>Transport that is dependable and effective is necessary to navigate Auckland's hectic event environment. in Cab On Hire, we're experts in offering customized solutions to meet your event travel requirements, making the whole process seamless and pleasurable. </h6>

   
   
   <h4  className='fw-bolder '>Why Opt for a Hired Cab for Your Corporate Travel?</h4>


   <h6 className='mt-4 mb-4'><span className="fw-bolder">Timely Service:</span>  We recognize how crucial it is to arrive on time for events. Our professional drivers make sure you get to the event on time and get home on time, freeing you up to enjoy yourself without worrying about the details. </h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Opulent Comfort:</span> With our contemporary fleet, which is built to offer an opulent and tranquil atmosphere, you may travel in comfort. Experience a pleasant ride with features that make a difference like climate control, first-rate seating and lots of room.</h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Experienced chauffeurs:</span> Our kind and knowledgeable drivers are educated to provide top-notch service. They will make sure you arrive at your destination quickly and easily because they are familiar with Auckland's locations and traffic patterns.  </h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder"> Easy Reservation:</span> Transportation for your event can be easily arranged using our easy-to-use booking method. Whether you require a single trip, round-trip transportation,  numerous stops, select from our customizable choices to fit your schedule. </h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Economical Costs:</span>Take advantage of premium service without paying premium money. We guarantee value and quality by providing clear, affordable prices for all of our event transportation services. </h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Optimize Your Attendee Experience:</span>Auckland has a wide range of events, including distinguished get-togethers and top-notch concerts. You may improve your event experience by avoiding the hassle of parking and traffic when you use Cab On Hire. You can enjoy the event to the fullest because you know that your transportation needs are being handled by professionals thanks to our dependable service. </h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Reserve Your Transportation for Events Now:</span>Use Cab On Hire to make your upcoming concert or event in Auckland one to remember. Get in touch with us to schedule your pick-up and drop-off service and enjoy the highest level of comfort and convenience. Allow us to handle your transportation so you can concentrate on taking in Auckland's exciting event highlights.  </h6>

   


   <h4  className='fw-bolder mt-5'>Welcome to Auckland Rugby Ride</h4>
   <h6  className='fw '>Fast, Reliable and Comfortable Transport for All Rugby Fans.</h6>


   <h6>Our rugby cab pickup and drop-off services are designed to provide hassle-free transport  in Auckland. Whether you’re attending a local match or an international game, we’ll get you there on time and in comfort.</h6>

   <h5 className='fw-bolder mt-4'>Why Choose Our Rugby Cab Services?   </h5>
   
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Convenient Pickup Locations:</span>We offer flexible pickup points across Auckland, making it easy to catch a ride from your home, hotel or any other location.</h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Reliable Drop-off:</span>Enjoy a stress-free journey with timely drop-offs at all major rugby stadiums and fan zones, so you can focus on enjoying the game.</h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Comfortable Ride:</span>Our cabs are well-maintained and equipped with modern amenities, ensuring a smooth and enjoyable journey.</h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Experienced Drivers: </span> Our professional drivers are familiar with Auckland’s traffic, ensuring the quickest routes to avoid delays, even on busy match days.</h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Group Bookings Available: </span>Book a group ride and enjoy discounted rates on larger vehicles that can accommodate all your mates.</h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Comfortable Ride:</span>Our cabs are well-maintained and equipped with modern amenities, ensuring a smooth and enjoyable journey.</h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">24/7 Availability: </span>Whether it's an early morning game or a late-night pickup after the final whistle, our services are available around the clock.</h6>





   
  

</div>


<QueryForm/>




<a href="https://api.whatsapp.com/send?phone=64 212845553&text=." class="float" target="_blank">
  <i class="fa-brands fa-whatsapp  my-float"></i></a>
  
<a href="tel:+64 212845553" class="floatt" target="_blank">
      <i class="fa-solid fa-phone-volume my-floatt"></i>
      </a>


</>
  )
}

export default Events
