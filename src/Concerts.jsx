import React from 'react'

import "./style/Concerts.css"

import img2 from "./Img/business_trips.webp";
import img3 from "./Img/cab_vw3.webp";

import { Link } from 'react-router-dom'

function Concerts() {
  return (
    <>




      
<div className='Routes_bg'>

<h1 className='text-white fw-bolder text-uppercase about text-center ps-3 pe-3  '>Concerts Pick-Up and Drop-Off in Auckland</h1>


</div>




  <div className='container'>
  <div className='row mb-5'>

  <div className='col-1 text-center'> </div>
    <div className='col-5  text-center'>

      <img className='img_business' src={img3} alt=''/>
    </div>
    <div  className='col-5  text-center'>
      <h1 className='movie_h1'> Concerts Pick-Up and Drop-Off in Auckland</h1>
      <h6 className='movie_h6 '>With Cab On Hire's dedicated pick-up and drop-off services for concerts  you can effortlessly and elegantly take in Auckland's dynamic cultural scene. Whether you're attending a local festival, a celebrity gala, or an exciting performance, our first-rate transportation guarantees that you arrive in luxury and depart with ease. 
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


   <h6 className='mt-4 mb-4'><span className="fw-bolder">Timely Service:</span> : We recognize how crucial it is to arrive on time for events. Our professional drivers make sure you get to the event on time and get home on time, freeing you up to enjoy yourself without worrying about the details. </h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Opulent Comfort:</span> With our contemporary fleet, which is built to offer an opulent and tranquil atmosphere, you may travel in comfort. Experience a pleasant ride with features that make a difference like climate control, first-rate seating and lots of room</h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Experienced chauffeurs:</span>Our kind and knowledgeable drivers are educated to provide top-notch service. They will make sure you arrive at your destination quickly and easily because they are familiar with Auckland's locations and traffic patterns.  </h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder"> Easy Reservation:</span>Transportation for your event can be easily arranged using our easy-to-use booking method. Whether you require a single trip, round-trip transportation,  numerous stops, select from our customizable choices to fit your schedule. </h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Economical Costs:</span>Take advantage of premium service without paying premium money. We guarantee value and quality by providing clear, affordable prices for all of our event transportation services. </h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Optimize Your Attendee Experience:</span>Auckland has a wide range of events, including distinguished get-togethers and top-notch concerts. You may improve your event experience by avoiding the hassle of parking and traffic when you use Cab On Hire. You can enjoy the event to the fullest because you know that your transportation needs are being handled by professionals thanks to our dependable service. </h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Reserve Your Transportation for Events Now:</span>Use Cab On Hire to make your upcoming concert or event in Auckland one to remember. Get in touch with us to schedule your pick-up and drop-off service and enjoy the highest level of comfort and convenience. Allow us to handle your transportation so you can concentrate on taking in Auckland's exciting event highlights.  </h6>

   




   
  

</div>


<a href="https://api.whatsapp.com/send?phone=64 212845553&text=." class="float" target="_blank">
  <i class="fa-brands fa-whatsapp  my-float"></i></a>
  
<a href="tel:+64 212845553" class="floatt" target="_blank">
      <i class="fa-solid fa-phone-volume my-floatt"></i>
      </a>


</>
  )
}

export default Concerts
