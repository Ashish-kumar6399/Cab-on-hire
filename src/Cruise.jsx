import React from 'react'
import "./style/Cruise.css"
import img1 from  "./Img/private_best_travel_-_cruise_transfer.jpg";




import { Link } from 'react-router-dom'


function Cruise() {
  return (
    <>
       


<>




      
<div className='cruise_bg'>

<h1 className='text-white fw-bolder text-uppercase about text-center   ' id='heading_bg'>Cruise Ship Transfers Auckland</h1>


</div>




  <div className='container'>
  <div className='row mb-5'>

  <div className='col-1 text-center'> </div>
    <div className='col-5  text-center'>

      <img className='img_movie ps-3 pe-3  mt-5 ' src={img1} alt=''/>
    </div>
    <div  className='col-5  text-center'>
      <h1 className='movie_h1'>Cruise Ship Transfers</h1>
      <h6 className='movie_h6 '>Book your ride with our premium cruise shuttle service, providing convenient transfers for Auckland’s domestic cruise arrivals and departures. Enjoy seamless travel between Auckland Airport, cruise terminals, ferry terminals, and Queens Wharf, ensuring a smooth start or end to your journey. Experience ultimate comfort and privacy with our private cruise transfers, customized exclusively for your needs. We also offer efficient cruise ship transfers to Whangaparaoa and Hibiscus Coast, ensuring a hassle-free experience. Rely on us for reliable and professional Auckland cruise ship transfers.
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

      <h4 className='fw-bolder'>Door To Door Cruise Transfer  </h4>


      <h6 className='mt-4 mb-4 about_para'>Book A Ride provides comprehensive cruise ship transfer services in Auckland, catering to both local and international cruise passengers. Available 24/7 throughout the year, we ensure a seamless travel experience. Whether you need transportation between Auckland Airport, Auckland Central, or the North of our Auckland Cruise Terminals, our reliable Cruise Transfers are ready to serve you. Enjoy a complimentary meet and greet upon your return, making your journey stress-free. For your convenience, please find the list of locations below. Trust Book A Ride for all your Auckland cruise ship transfer needs, including P&O cruise bookings and ferry terminals.   </h6>

        {/* <p> <span className='fw-bold'> 1. Auckland –</span> Your tour starts in New Zealand’s largest city. As we drive out of the city your guide will not only set the scene for your adventure today but also point out and guide you past some of the city’s top highlights.</p>
        <p> <span className='fw-bold'> 2. Waikato  – </span>  Exiting Auckland we travel south through the stunning Waikato countryside, the most extensive farming area in the world, encountering beautiful scenery, mighty rivers, great photo opportunities, impressive mountains and several farm animals along the way.</p>
        <p>  <span className='fw-bold'> 3. Hobbiton Movie Set – </span>  Arriving at ‘Hobbiton’ you will board one of the big green Hobbiton buses for a two hour fully guided tour of this amazing 12 acre movie set with a professional Hobbiton guide to ensure you get the most out of your visit. During your tour step into the lush pastures of the Shire, visit 44 hobbit holes, see amazing gardens, hear the secrets and stories about the making of the movies and enjoy a cold complimentary beverage at the famous Hobbiton pub ‘The Green Dragon Inn’.</p>
        <p>  <span className='fw-bold'> 4. Auckland –  </span> Sadly we must start to head north again but your day is not over with a fully guided return trip to Auckland including surprise stops. Depending on weather and timing our guides love doing other surprise stops. Maybe a scenic stop near a lake or the chance to try New Zealand ice creams, we love introducing you to local wildlife and animals. You will have to jump on the tour to see where you go!</p> */}
       
       <h4  className='fw-bolder '>Cruise Transfer To Auckland Airport</h4>


       <h6 className='mt-4 mb-4 about_para'>Cruise Terminal to Airport – Our pickup procedure at Auckland's Queens Wharf cruise ship terminal is straightforward. We have designated parking near Shed 10, and if permitted, we will enter the terminal with a sign for a cruise meet and greet. Queens Wharf is well-organized, making the process smooth. The procedure at Auckland's Princess Wharf cruise ship terminal is slightly more complex, but we ensure a seamless experience for our passengers.  </h6>

       




       
      

  </div>


</>


    </>
  )
}

export default Cruise
