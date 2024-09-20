import React from 'react'
import QueryForm from './QueryForm'
import img2 from  "./Img/RT_Pete_0038cp.jpg"
import "./style/Driver.css"


import { Link } from 'react-router-dom'

function Driver() {
  return (
    <>




      
    <div className='Driver'>

<h1 className='text-white fw-bolder   text-center ps-3 pe-3 text-uppercase driver_heading'>Auckland  Dial-A-Driver Services</h1>


</div>




      {/* <div className='container'>
      <div className='row mb-5'>

      <div className='col-1 text-center'> </div>
        <div className='col-5  text-center'>

          <img className='img_movie' src={img2} alt=''/>
        </div>
        <div  className='col-5  text-center'>
          <h1 className='movie_h1'>Rotorua Tour With Optional Activities from Auckland</h1>
          <h6 className='movie_h6 '>Take the Optional Extras Rotorua Tour, a small-group, fully guided day trip that showcases the best of Rotorua city. You may select up to two activities from our carefully chosen list when making a reservation. There is something for everyone to enjoy, whether they are interested in thrilling activities, natural wonders, or cultural encounters.</h6>
          <h6  className='movie_h6 mt-3'>Important: While others are driven to and from their selected activities, those who do not make any reservations will have free time to see Rotorua.
          </h6>
          <Link className='text-decoration-none' to="/contact">
      <div className='movie_btn rounded mt-4 text-white text-center'> BOOK NOW</div>

      </Link>            </div>



        <div  className='col-1  text-center'></div>


      </div>
        



      </div> */}





      <div className='container highlight mb-5' >
        <h5 className='fw-bolder'>Auckland  Dial A Driver gets you and your car to where you need to be.</h5>
          <ul className='ull'>
            <li>Auckland's leading Dial A Driver service, with teams available across the entire region.</li>
            <li>With many years of experience, our trusted corporate service ensures you and your vehicle get home safely.</li>
            <li>Contact us today for a quote or to make a booking. We also offer multi-vehicle orders and corporate accounts upon request.</li>
            {/* <li>Waikato Farm Region </li> */}
            

          </ul>

          {/* <h4 className='fw-bolder'>Itinerary:</h4> */}

            {/* <p> <span className='fw-bold'> 1. Superb Driver Assistance –</span> Through our Dial A Driver service, you may get in touch with professional, kind drivers that are committed to giving you the best possible travel experience. Our drivers are trained to provide a smooth and elegant service that is customized to match your individual demands, whether you're hosting a corporate function or a social gathering</p>
            <p> <span className='fw-bold'> 2. Waikato  – </span>  After departing from Auckland, we travel south through the beautiful Waikato countryside, which is well known for its vast agricultural region. Along the route, take in the breathtaking landscape, imposing rivers, great photo opportunities, striking mountains, and sights of farm animals.</p>
            <p>  <span className='fw-bold'> 4.Tirau  –  </span> Traveling towards Rotorua, we will travel through Tirau, which is renowned as the 'Corrugated Iron Capital of the World' because to its unique corrugated iron structures and artwork. You'll smile and find yourself drawn to this oddball town. As we move through, our guides will point us all of the major attractions.</p>
            <p>  <span className='fw-bold'> 6. Rotorua City Highlights –  </span> To complete our Rotorua experience, we'll take a guided driving tour of the city's most iconic sites, including Lake Rotorua, the Rotorua Museum, Government Gardens, Whangapipiro (Rachel Spring), and the Blue Baths. If time allows, we might also stop by a souvenir shop for discounted shopping and a taste of Manuka Honey.</p>
            <p>  <span className='fw-bold'> 5.Free Time for Optional Activities –  </span> After your city highlight tour, you'll have the flexibility to either enjoy free time to explore Rotorua on your own or add up to two of the following attractions for an additional fee: Te Puia, Wai-O-Tapu, Polynesian Spa, or Redwoods Treewalk. We'll provide pick-up and drop-off at each location as time allows.</p>
            <p> <span className='fw-bold'> 7. Auckland –</span> Sadly, it's time to return north, although the journey is far from over. Savor an entirely guided journey back to Auckland, including with unplanned stops en route.</p> */}


                <h5 className='fw-bolder' id='h5_driver'>  <i class="fa-solid fa-circle-check"></i>  Superb Driver Assistance </h5>
                <h6 className='about_para'> Through our Dial A Driver service, you may get in touch with professional, kind drivers that are committed to giving you the best possible travel experience. Our drivers are trained to provide a smooth and elegant service that is customized to match your individual demands, whether you're hosting a corporate function or a social gathering</h6>
                <h5 className='fw-bolder' id='h5_driver'>  <i class="fa-solid fa-circle-check"></i> Easy and Versatile Reservation </h5>
                <h6  className='about_para'> Cab On Hire makes it easy to book a driver. To book your ride, use our simple online form or give our staff a call. Select from an array of immaculate cars, including roomy SUVs and opulent sedans, and let us take care of the rest. In order to meet your needs and guarantee on-time arrivals and departures, we provide flexible scheduling</h6>
                <h5 className='fw-bolder' id='h5_driver'>  <i class="fa-solid fa-circle-check"></i> Dedication to Security</h5>
                <h6  className='about_para'> Our first concern is keeping you safe. In order to ensure peak performance and dependability, our cars go through extensive maintenance and inspections. You can unwind and enjoy your journey knowing that our chauffeurs have undergone extensive background checks and get training to deliver a reliable and safe service. </h6>
                <h5 className='fw-bolder' id='h5_driver'> <i class="fa-solid fa-circle-check"></i> Solving Traffic Issues with Careful Driving</h5>
                <h6  className='about_para'> For those planning to enjoy a drink, our Dial A Driver service is the ideal solution. Enjoy your evening without the worry of transportation. Our professional drivers will ensure you reach your destination safely, allowing you to savor your time without the concern of driving after consuming alcohol. </h6>

                <h5 className='fw-bolder' id='h5_driver'> <i class="fa-solid fa-circle-check"></i> Designed to Meet Your Needs</h5>
                <h6  className='about_para'> We offer customizable alternatives to meet your needs, whether you need a one-time journey or a regular chauffeur service. You can travel in luxury and style with our Dial A Driver service, which is meant to provide a personalized and hassle-free experience.  </h6>
                <h6  className='about_para'>Select the Dial A Driver service from Cab On Hire for an exceptional travel experience that blends convenience, safety, and elegance. Get in touch with us right now to reserve your chauffeur and take pleasure in a smooth and elegant trip.   </h6>




            {/* <h5>Inclusions:</h5>
          <ul className='ul_movie'>
            <li className='ull'>Small Group Tour</li>
            <li>Fully Guided Tour</li>
            <li>Hobbiton Ticket</li>
            <li>Bottled Water</li>
            <li>Snacks</li>

          </ul>

          <p className='mt-4'>At Cab on Hire, we believe that while the destinations you’ll visit are undeniably breathtaking, it's the details that make our tours stand out. Our small groups, knowledgeable guides, and carefully curated journey set us apart. From secret stops and wildlife encounters to specially designed vehicles and complimentary refreshments, our tours are filled with delightful surprises that create an unforgettable experience.</p> */}

      </div>

      <QueryForm/>

      <a href="https://api.whatsapp.com/send?phone=64 212845553&text=." class="float" target="_blank">
      <i class="fa-brands fa-whatsapp  my-float"></i></a>

      <a href="tel:+91 +64 212845553" class="floatt" target="_blank">
      <i class="fa-solid fa-phone-volume my-floatt"></i>
      </a>


  </>
  )
}

export default Driver
