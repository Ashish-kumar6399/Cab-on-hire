import React from 'react'
import "./style/Business.css"

import img2 from "./Img/business_trips.webp";

import { Link } from 'react-router-dom'


function Business() {
  return (
    <>




      
    <div className='Business_bg'>

<h1 className='text-white fw-bolder text-uppercase about text-center ps-3 pe-3 '>Business Trips</h1>


</div>




      <div className='container'>
      <div className='row mb-5'>

      <div className='col-1 text-center'> </div>
        <div className='col-5  text-center'>

          <img className='img_business' src={img2} alt=''/>
        </div>
        <div  className='col-5  text-center'>
          <h1 className='movie_h1'> Upgrade Your Business Journey with Cab On Hire</h1>
          <h6 className='movie_h6 '>Here at Cab On Hire, we revolutionize business travel by offering top-notch service, professionalism, and dependability. Auckland is a popular destination for corporate engagements because of its dynamic business center and breathtaking scenery. We're here to make sure your trip is easy and productive.
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

      <h4 className='fw-bolder'>Customized Transportation Approaches  </h4>


      <h6 className='mt-4 mb-4'>Cab On Hire provides customized transportation options that are tailored to your unique business requirements, whether you're traveling for a series of appointments, a company event, or an important meeting. Our collection of up-to-date, immaculate cars guarantees that you will travel in comfort and style, and our team of experienced chauffeurs will provide prompt, polite service that upholds the high standards of your company </h6>

        {/* <p> <span className='fw-bold'> 1. Auckland –</span> Your tour starts in New Zealand’s largest city. As we drive out of the city your guide will not only set the scene for your adventure today but also point out and guide you past some of the city’s top highlights.</p>
        <p> <span className='fw-bold'> 2. Waikato  – </span>  Exiting Auckland we travel south through the stunning Waikato countryside, the most extensive farming area in the world, encountering beautiful scenery, mighty rivers, great photo opportunities, impressive mountains and several farm animals along the way.</p>
        <p>  <span className='fw-bold'> 3. Hobbiton Movie Set – </span>  Arriving at ‘Hobbiton’ you will board one of the big green Hobbiton buses for a two hour fully guided tour of this amazing 12 acre movie set with a professional Hobbiton guide to ensure you get the most out of your visit. During your tour step into the lush pastures of the Shire, visit 44 hobbit holes, see amazing gardens, hear the secrets and stories about the making of the movies and enjoy a cold complimentary beverage at the famous Hobbiton pub ‘The Green Dragon Inn’.</p>
        <p>  <span className='fw-bold'> 4. Auckland –  </span> Sadly we must start to head north again but your day is not over with a fully guided return trip to Auckland including surprise stops. Depending on weather and timing our guides love doing other surprise stops. Maybe a scenic stop near a lake or the chance to try New Zealand ice creams, we love introducing you to local wildlife and animals. You will have to jump on the tour to see where you go!</p> */}
       
       <h4  className='fw-bolder '>Why Opt for a Hired Cab for Your Corporate Travel?</h4>


       <h6 className='mt-4 mb-4'><span className="fw-bolder"> Timeliness Promised:</span> We are aware of how important time is in the business sector. Our drivers are dedicated to getting you where you're going as soon as possible, so you can arrive ready and relaxed</h6>
       <h6 className='mt-4 mb-4'><span className="fw-bolder"> Expert Operators:</span> Our knowledgeable drivers serve as representatives of our company in addition to being skilled drivers. They are skilled in providing a high degree of privacy, professionalism, and local expertise to make your trip more enjoyable.</h6>
       <h6 className='mt-4 mb-4'><span className="fw-bolder"> Adaptable Reservation Choices:</span>Whether you're planning a single trip, a full-day hire, or a sequence of trips, we have a variety of booking choices to suit your schedule. Our friendly customer service representatives and our user-friendly online booking system are there to help you at every stage. </h6>
       <h6 className='mt-4 mb-4'><span className="fw-bolder"> Corporate Accounts:</span> For frequent travelers, we offer tailored corporate account services, including flexible billing options and dedicated account management to streamline your travel arrangements.</h6>
       <h6 className='mt-4 mb-4'><span className="fw-bolder"> Cozy and Practical:</span>The newest conveniences available are installed in our cars to create a relaxing and effective workspace. With Wi-Fi and charging connections accessible to keep you connected and on top of your work, enjoy a smooth commute. </h6>
       <h6 className='mt-4 mb-4'><span className="fw-bolder"> Expert Operators:</span>:Our knowledgeable drivers serve as representatives of our company in addition to being skilled drivers. They are skilled in providing a high degree of privacy, professionalism, and local expertise to make your trip more enjoyable. 

</h6>

       




       
      

  </div>


  </>
  )
}

export default Business
