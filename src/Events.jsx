import React from 'react'

import "./style/Events.css"

import img2 from "./Img/business_trips.webp";
import img3 from "./Img/skoda_superb.jpg";

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

      <img className='img_business  ' src={img3} alt=''/>
    </div>
    <div  className='col-5  text-center'>
      <h1 className='movie_h1'>Events Pickup and Drop in Auckland</h1>
      <h6 className='movie_h6 '>With Cab On Hire's dedicated pick-up and drop-off services for  events, you can effortlessly and elegantly take in Auckland's dynamic cultural scene. Whether you're attending a local festival, a celebrity gala, or an exciting performance, our first-rate transportation guarantees that you arrive in luxury and depart with ease. 
</h6>
      <Link className='text-decoration-none' to="/contact">
  <div className='movie_btn rounded mt-4 text-white text-center'> BOOK NOW</div>

  </Link>            </div>



    <div  className='col-1  text-center'></div>


  </div>
    



  </div>





  <div className='container highlight' >
{/* <h5>Door To Door Cruise Transfer
</h5>
  <ul>
    <li>Hobbiton & Alexander Family Sheep Farm</li>
    <li>Green Dragon Inn</li>
    <li>Waikato Farming Region</li>
    <li>Surprise Stops </li>

  </ul> */}

  <h4 className='fw-bolder'>Effortless Transportation for Your Particular Events</h4>


  <h6 className='mt-4 mb-4'>Transport that is dependable and effective is necessary to navigate Auckland's hectic event environment. in Cab On Hire, we're experts in offering customized solutions to meet your event travel requirements, making the whole process seamless and pleasurable. </h6>

    {/* <p> <span className='fw-bold'> 1. Auckland –</span> Your tour starts in New Zealand’s largest city. As we drive out of the city your guide will not only set the scene for your adventure today but also point out and guide you past some of the city’s top highlights.</p>
    <p> <span className='fw-bold'> 2. Waikato  – </span>  Exiting Auckland we travel south through the stunning Waikato countryside, the most extensive farming area in the world, encountering beautiful scenery, mighty rivers, great photo opportunities, impressive mountains and several farm animals along the way.</p>
    <p>  <span className='fw-bold'> 3. Hobbiton Movie Set – </span>  Arriving at ‘Hobbiton’ you will board one of the big green Hobbiton buses for a two hour fully guided tour of this amazing 12 acre movie set with a professional Hobbiton guide to ensure you get the most out of your visit. During your tour step into the lush pastures of the Shire, visit 44 hobbit holes, see amazing gardens, hear the secrets and stories about the making of the movies and enjoy a cold complimentary beverage at the famous Hobbiton pub ‘The Green Dragon Inn’.</p>
    <p>  <span className='fw-bold'> 4. Auckland –  </span> Sadly we must start to head north again but your day is not over with a fully guided return trip to Auckland including surprise stops. Depending on weather and timing our guides love doing other surprise stops. Maybe a scenic stop near a lake or the chance to try New Zealand ice creams, we love introducing you to local wildlife and animals. You will have to jump on the tour to see where you go!</p> */}
   
   <h4  className='fw-bolder '>Why Opt for a Hired Cab for Your Corporate Travel?</h4>


   <h6 className='mt-4 mb-4'><span className="fw-bolder">Timely Service:</span> : We recognize how crucial it is to arrive on time for events. Our professional drivers make sure you get to the event on time and get home on time, freeing you up to enjoy yourself without worrying about the details. </h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Opulent Comfort:</span> With our contemporary fleet, which is built to offer an opulent and tranquil atmosphere, you may travel in comfort. Experience a pleasant ride with features that make a difference, like climate control, first-rate seating, and lots of room</h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Experienced chauffeurs:</span>Our kind and knowledgeable drivers are educated to provide top-notch service. They will make sure you arrive at your destination quickly and easily because they are familiar with Auckland's locations and traffic patterns.  </h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder"> Easy Reservation:</span>Transportation for your event can be easily arranged using our easy-to-use booking method. Whether you require a single trip, round-trip transportation, or numerous stops, select from our customizable choices to fit your schedule. </h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Economical Costs:</span>Take advantage of premium service without paying premium money. We guarantee value and quality by providing clear, affordable prices for all of our event transportation services. </h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Optimize Your Attendee Experience:</span>Auckland has a wide range of events, including distinguished get-togethers and top-notch concerts. You may improve your event experience by avoiding the hassle of parking and traffic when you use Cab On Hire. You can enjoy the event to the fullest because you know that your transportation needs are being handled by professionals thanks to our dependable service. </h6>
   <h6 className='mt-4 mb-4'><span className="fw-bolder">Reserve Your Transportation for Events Now:</span>Use Cab On Hire to make your upcoming concert or event in Auckland one to remember. Get in touch with us to schedule your pick-up and drop-off service and enjoy the highest level of comfort and convenience. Allow us to handle your transportation so you can concentrate on taking in Auckland's exciting event highlights.  </h6>

   




   
  

</div>


</>
  )
}

export default Events
