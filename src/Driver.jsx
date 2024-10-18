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




    





      <div className='container highlight mb-5' >
        <h5 className='fw-bolder'>Auckland  Dial A Driver gets you and your car to where you need to be.</h5>
          <ul className='ull'>
            <li>Auckland's leading Dial A Driver service, with teams available across the entire region.</li>
            <li>With many years of experience, our trusted corporate service ensures you and your vehicle get home safely.</li>
            <li>Contact us today for a quote or to make a booking. We also offer multi-vehicle orders and corporate accounts upon request.</li>
            

          </ul>

         

                <h5 className='fw-bolder' id='h5_driver'>  <i class="fa-solid fa-circle-check"></i>  Superb Driver Assistance </h5>
                <h6 className='about_para'> Through our Dial A Driver service, you may get in touch with professional, kind drivers that are committed to giving you the best possible travel experience. Our drivers are trained to provide a smooth and elegant service that is customized to match your individual demands, whether you're hosting a corporate function or a social gathering</h6>


                <h5 className='fw-bolder' id='h5_driver'>  <i class="fa-solid fa-circle-check"></i> Easy and Versatile Reservation </h5>
                <h6  className='about_para'> Cab On Hire makes it easy to book a driver. To book your ride, use our simple online form or give our staff a call. Select from an array of immaculate cars, including roomy SUVs and opulent sedans and let us take care of the rest. In order to meet your needs and guarantee on-time arrivals and departures, we provide flexible scheduling</h6>
                <h5 className='fw-bolder' id='h5_driver'>  <i class="fa-solid fa-circle-check"></i> Dedication to Security</h5>
                <h6  className='about_para'> Our first concern is keeping you safe. In order to ensure peak performance and dependability, our cars go through extensive maintenance and inspections. You can unwind and enjoy your journey knowing that our chauffeurs have undergone extensive background checks and get training to deliver a reliable and safe service. </h6>
                <h5 className='fw-bolder' id='h5_driver'> <i class="fa-solid fa-circle-check"></i> Solving Traffic Issues with Careful Driving</h5>
                <h6  className='about_para'> For those planning to enjoy a drink, our Dial A Driver service is the ideal solution. Enjoy your evening without the worry of transportation. Our professional drivers will ensure you reach your destination safely, allowing you to savor your time without the concern of driving after consuming alcohol. </h6>

                <h5 className='fw-bolder' id='h5_driver'> <i class="fa-solid fa-circle-check"></i> Designed to Meet Your Needs</h5>
                <h6  className='about_para'> We offer customizable alternatives to meet your needs, whether you need a one-time journey or a regular chauffeur service. You can travel in luxury and style with our Dial A Driver service, which is meant to provide a personalized and hassle-free experience.  </h6>
                <h6  className='about_para'>Select the Dial A Driver service from Cab On Hire for an exceptional travel experience that blends convenience, safety and elegance. Get in touch with us right now to reserve your chauffeur and take pleasure in a smooth and elegant trip.   </h6>




           

      </div>

      <QueryForm/>

     
     



  </>
  )
}

export default Driver
